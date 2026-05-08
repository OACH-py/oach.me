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

export async function fetchLangTags(repo: string): Promise<string[]> {
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
}
