export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  githubRepo?: string;
  accent: 'mauve' | 'sapphire' | 'teal';
  status: 'active' | 'planned' | 'complete';
  link?: string;
}

export const softwareProjectsEs: Project[] = [
  {
    title: 'ZentoPath',
    subtitle: 'Divulgación Técnica · YouTube',
    description:
      'Canal de divulgación técnica con una premisa central: lo que usas no es realmente tuyo. Cada pieza deconstruye la obsolescencia programada, el verdadero costo de lo "gratuito" y los mecanismos por los que la industria retiene el control sobre tus herramientas digitales — desde una perspectiva independiente, sin conflictos de interés.',
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
    githubRepo: 'OACH-py/Kanso',
    accent: 'mauve',
    status: 'active',
    link: 'https://github.com/OACH-py/Kanso',
  },
  {
    title: 'oach.me',
    subtitle: 'Este sitio · Código Abierto',
    description:
      'El código fuente de este sitio es público. No como gesto, sino como práctica: si defiendo la transparencia técnica y los procesos auditables, lo mínimo es que mi propio stack sea inspeccionable. Construido con Astro y TypeScript, sin rastreadores ni dependencias externas en tiempo de ejecución.',
    githubRepo: 'OACH-py/oach.me',
    accent: 'teal',
    status: 'active',
    link: 'https://github.com/OACH-py/oach.me',
  },
];

export const softwareProjectsEn: Project[] = [
  {
    title: 'ZentoPath',
    subtitle: 'Technical Outreach · YouTube',
    description:
      'Technical outreach channel built on a central premise: what you use isn\'t really yours. Each piece deconstructs planned obsolescence, the real cost of "free", and the mechanisms by which the industry retains control over your digital tools — from an independent perspective, no conflicts of interest.',
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
    githubRepo: 'OACH-py/Kanso',
    accent: 'mauve',
    status: 'active',
    link: 'https://github.com/OACH-py/Kanso',
  },
  {
    title: 'oach.me',
    subtitle: 'This site · Open Source',
    description:
      'The source code for this site is public. Not as a gesture, but as practice: if I advocate for technical transparency and auditable processes, the least I can do is make my own stack inspectable. Built with Astro and TypeScript, no trackers, no external runtime dependencies.',
    githubRepo: 'OACH-py/oach.me',
    accent: 'teal',
    status: 'active',
    link: 'https://github.com/OACH-py/oach.me',
  },
];

export const softwareProjects = softwareProjectsEs;
