const CHANNEL_ID = 'UCaCikCveqBXFt7xVzhlmcqg';
const BASE       = 'https://www.googleapis.com/youtube/v3';

export interface VideoData {
  id:          string;
  title:       string;
  thumbnail:   string;
  url:         string;
  views:       number;
  publishedAt: string;
}

export interface ChannelStats {
  subscribers: number;
  totalViews:  number;
  videoCount:  number;
}

export interface YouTubeData {
  stats:  ChannelStats;
  videos: VideoData[];
}

export function fmtNum(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1_000)     return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  return n.toString();
}

async function apiFetch(endpoint: string, params: Record<string, string>): Promise<any> {
  const key = import.meta.env.YOUTUBE_API_KEY;
  if (!key) { console.warn('[youtube] YOUTUBE_API_KEY no definida'); return null; }

  const url = new URL(`${BASE}/${endpoint}`);
  Object.entries({ ...params, key }).forEach(([k, v]) => url.searchParams.set(k, v));

  try {
    const res = await fetch(url.toString());
    if (!res.ok) { console.warn(`[youtube] ${endpoint} → HTTP ${res.status}`); return null; }
    return res.json();
  } catch (e) {
    console.warn('[youtube] fetch error:', e);
    return null;
  }
}

let _cache: YouTubeData | null | undefined;

export async function fetchYouTubeData(): Promise<YouTubeData | null> {
  if (_cache !== undefined) return _cache;

  const result = await _fetch();
  _cache = result;
  return result;
}

async function _fetch(): Promise<YouTubeData | null> {
  const channelRes = await apiFetch('channels', {
    part: 'statistics,contentDetails',
    id:   CHANNEL_ID,
  });
  if (!channelRes?.items?.[0]) return null;

  const ch = channelRes.items[0];
  const stats: ChannelStats = {
    subscribers: parseInt(ch.statistics.subscriberCount ?? '0', 10),
    totalViews:  parseInt(ch.statistics.viewCount       ?? '0', 10),
    videoCount:  parseInt(ch.statistics.videoCount      ?? '0', 10),
  };
  const uploadsId: string = ch.contentDetails.relatedPlaylists.uploads;

  if (stats.videoCount === 0) return { stats, videos: [] };

  const playlistRes = await apiFetch('playlistItems', {
    part:       'snippet',
    playlistId: uploadsId,
    maxResults: '3',
  });
  if (!playlistRes?.items?.length) return { stats, videos: [] };

  const ids: string[] = playlistRes.items.map(
    (item: any) => item.snippet.resourceId.videoId as string
  );

  const videosRes = await apiFetch('videos', {
    part: 'statistics,snippet',
    id:   ids.join(','),
  });
  if (!videosRes?.items?.length) return { stats, videos: [] };

  const videos: VideoData[] = videosRes.items.map((item: any) => ({
    id:          item.id,
    title:       item.snippet.title as string,
    thumbnail:   (item.snippet.thumbnails.maxres
               ?? item.snippet.thumbnails.high
               ?? item.snippet.thumbnails.medium).url as string,
    url:         `https://youtube.com/watch?v=${item.id}`,
    views:       parseInt(item.statistics.viewCount ?? '0', 10),
    publishedAt: item.snippet.publishedAt as string,
  }));

  return { stats, videos };
}
