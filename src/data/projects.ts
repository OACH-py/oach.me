export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accent: 'mauve' | 'sapphire';
  status: 'active' | 'planned' | 'complete';
  link?: string;
}

export const softwareProjectsEs: Project[] = [
  {
    title: 'ZentoPath',
    subtitle: 'Divulgación Técnica · YouTube',
    description:
      'Plataforma de divulgación técnica centrada en el análisis crítico del software, la evolución histórica de la informática y ensayos sobre privacidad y soberanía digital. Cada pieza es un ensayo visual que deconstruye tecnologías, patrones industriales y filosofías de diseño desde una perspectiva independiente — sin conflictos de interés.',
    tags: ['🛡️ Privacidad', '📽️ Video', '✍️ Ensayo', '📜 Historia Tech'],
    accent: 'sapphire',
    status: 'active',
    link: 'https://youtube.com/@ZentoPath',
  },
  {
    title: 'Kansō',
    subtitle: 'Lector de Manga TUI · Alto Rendimiento',
    description:
      'Lector de manga de alto rendimiento bajo una arquitectura híbrida Rust + Python. El núcleo de procesamiento de imágenes y el motor de caché están escritos en Rust para rendimiento máximo y seguridad de memoria; Python gestiona la lógica de scraping y metadatos. Interfaz TUI minimalista: cero dependencias de GUI, cero telemetría, principio KISS aplicado sin excepciones.',
    tags: ['🦀 Rust', '🐍 Python', '🖥️ TUI', '⚡ KISS', '⌨️ CLI'],
    accent: 'mauve',
    status: 'active',
  },
];

export const softwareProjectsEn: Project[] = [
  {
    title: 'ZentoPath',
    subtitle: 'Technical Outreach · YouTube',
    description:
      'Technical outreach platform focused on critical analysis of software creation, the historical evolution of computing, and essays on privacy and digital sovereignty. Each piece is a visual essay that deconstructs technologies, industry patterns, and design philosophies from an independent perspective — no conflicts of interest.',
    tags: ['🛡️ Privacy', '📽️ Video', '✍️ Essay', '📜 Tech History'],
    accent: 'sapphire',
    status: 'active',
    link: 'https://youtube.com/@ZentoPath',
  },
  {
    title: 'Kansō',
    subtitle: 'High-Performance Manga TUI Reader',
    description:
      'High-performance manga reader built on a hybrid Rust + Python architecture. The image processing core and cache engine are written in Rust for maximum throughput and memory safety; Python handles scraping logic and metadata. Minimalist TUI interface with zero GUI dependencies, zero telemetry — KISS applied without exception.',
    tags: ['🦀 Rust', '🐍 Python', '🖥️ TUI', '⚡ KISS', '⌨️ CLI'],
    accent: 'mauve',
    status: 'active',
  },
];

export const softwareProjects = softwareProjectsEs;
