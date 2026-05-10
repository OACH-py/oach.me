const NOISE = new Set([
  'HTML', 'CSS', 'SCSS', 'Less', 'Makefile',
  'Shell', 'Dockerfile', 'Batchfile', 'PowerShell', 'Nix',
]);

const EMOJI: Record<string, string> = {
  Rust:       '🦀',
  Python:     '🐍',
  TypeScript: '🔷',
  JavaScript: '🟨',
  Astro:      '🌐',
  Go:         '🐹',
  C:          '⚙️',
  'C++':      '⚙️',
  Zig:        '⚡',
  Lua:        '🌙',
};

export const STATIC_TAGS = ['🔓 Open Source', '⚡ KISS'] as const;

export interface RepoStats {
  stars: number;
  forks: number;
}

const _cache = new Map<string, unknown>();

async function cached<T>(key: string, fn: () => Promise<T>): Promise<T> {
  if (_cache.has(key)) return _cache.get(key) as T;
  const result = await fn();
  _cache.set(key, result);
  return result;
}

export async function fetchRepoStats(repo: string): Promise<RepoStats | null> {
  return cached(`stats:${repo}`, async () => {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`, {
        headers: { 'User-Agent': 'oach.me-build' },
      });
      if (!res.ok) return null;
      const data = await res.json();
      return { stars: data.stargazers_count ?? 0, forks: data.forks_count ?? 0 };
    } catch {
      return null;
    }
  });
}

export async function fetchLangTags(repo: string): Promise<string[]> {
  return cached(`langs:${repo}`, async () => {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}/languages`, {
        headers: { 'User-Agent': 'oach.me-build' },
      });
      if (!res.ok) return [];
      const langs: Record<string, number> = await res.json();
      return Object.keys(langs)
        .filter(l => !NOISE.has(l))
        .map(l => EMOJI[l] ? `${EMOJI[l]} ${l}` : l);
    } catch {
      return [];
    }
  });
}
