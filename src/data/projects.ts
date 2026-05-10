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
      'Canal de divulgación técnica con una premisa central: lo que usas no es realmente tuyo. Cada pieza deconstruye la obsolescencia programada, el verdadero costo de lo «gratuito» y los mecanismos por los que la industria retiene el control sobre tus herramientas digitales — desde una perspectiva independiente, sin conflictos de interés.',
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
  {
    title: 'Media Server Stack',
    subtitle: 'Infraestructura Docker · Self-hosted',
    description:
      'Stack Docker Compose para servidor multimedia doméstico. Orquesta qBittorrent, Radarr, Sonarr, Prowlarr, Jellyfin, Jellyseerr y Bazarr con configuración centralizada en variables de entorno. Sin dependencias externas, sin telemetría.',
    tags: ['🐳 Docker', '📦 Compose', '🎬 Self-hosted', '🔓 Open Source'],
    githubRepo: 'OACH-py/media-server-stack',
    accent: 'teal',
    status: 'complete',
    link: 'https://github.com/OACH-py/media-server-stack',
  },
  {
    title: 'Python Fundamentals',
    subtitle: 'Aprendizaje Estructurado · 12 Proyectos',
    description:
      '12 proyectos prácticos distribuidos en 4 niveles de dificultad progresiva: fundamentos de sintaxis, estructuras de datos, persistencia con POO y automatización web. Documentación abierta del proceso de aprendizaje — desde lógica condicional hasta consumo de APIs REST, sin atajos.',
    tags: ['🐍 Python', '🧠 Algoritmos', '🔓 Open Source'],
    githubRepo: 'OACH-py/python-fundamentals',
    accent: 'sapphire',
    status: 'active',
    link: 'https://github.com/OACH-py/python-fundamentals',
  },
];

export const softwareProjectsRu: Project[] = [
  {
    title: 'ZentoPath',
    subtitle: 'Технический канал · YouTube',
    description:
      'Технический канал, построенный вокруг одной идеи: то, чем вы пользуетесь, вам на самом деле не принадлежит. Каждый материал разбирает запланированное устаревание, настоящую цену «бесплатного» и механизмы, с помощью которых индустрия сохраняет контроль над вашими цифровыми инструментами — с независимой позиции, без конфликта интересов.',
    tags: ['🛡️ Приватность', '📽️ Видео', '✍️ Эссе', '📜 История технологий'],
    accent: 'sapphire',
    status: 'active',
    link: 'https://youtube.com/@ZentoPath',
  },
  {
    title: 'Kansō',
    subtitle: 'Высокопроизводительный TUI-ридер манги',
    description:
      'Высокопроизводительный ридер манги на гибридной архитектуре Rust + Python. Ядро обработки изображений и движок кэша написаны на Rust для максимальной скорости и безопасности памяти; Python управляет логикой скрейпинга и метаданными. Минималистичный TUI-интерфейс: без GUI-зависимостей, без телеметрии — принцип KISS без исключений.',
    githubRepo: 'OACH-py/Kanso',
    accent: 'mauve',
    status: 'active',
    link: 'https://github.com/OACH-py/Kanso',
  },
  {
    title: 'oach.me',
    subtitle: 'Этот сайт · Открытый код',
    description:
      'Исходный код этого сайта публичен. Не как жест, а как практика: если я выступаю за техническую прозрачность и проверяемые процессы, минимум — сделать собственный стек открытым для инспекции. Построен на Astro и TypeScript, без трекеров и внешних зависимостей во время выполнения.',
    githubRepo: 'OACH-py/oach.me',
    accent: 'teal',
    status: 'active',
    link: 'https://github.com/OACH-py/oach.me',
  },
  {
    title: 'Media Server Stack',
    subtitle: 'Docker-инфраструктура · Self-hosted',
    description:
      'Docker Compose стек для домашнего медиасервера. Оркестрирует qBittorrent, Radarr, Sonarr, Prowlarr, Jellyfin, Jellyseerr и Bazarr с централизованной конфигурацией через переменные окружения. Без внешних зависимостей, без телеметрии.',
    tags: ['🐳 Docker', '📦 Compose', '🎬 Self-hosted', '🔓 Open Source'],
    githubRepo: 'OACH-py/media-server-stack',
    accent: 'teal',
    status: 'complete',
    link: 'https://github.com/OACH-py/media-server-stack',
  },
  {
    title: 'Python Fundamentals',
    subtitle: 'Структурированное обучение · 12 проектов',
    description:
      '12 практических проектов по 4 уровням нарастающей сложности: основы синтаксиса, структуры данных, ООП с персистентностью, веб-автоматизация. Открытая документация процесса обучения — от условной логики до REST API, без срезания углов.',
    tags: ['🐍 Python', '🧠 Алгоритмы', '🔓 Open Source'],
    githubRepo: 'OACH-py/python-fundamentals',
    accent: 'sapphire',
    status: 'active',
    link: 'https://github.com/OACH-py/python-fundamentals',
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
  {
    title: 'Media Server Stack',
    subtitle: 'Docker Infrastructure · Self-hosted',
    description:
      'Docker Compose stack for a home media server. Orchestrates qBittorrent, Radarr, Sonarr, Prowlarr, Jellyfin, Jellyseerr and Bazarr with centralized env-based config. No external dependencies, no telemetry.',
    tags: ['🐳 Docker', '📦 Compose', '🎬 Self-hosted', '🔓 Open Source'],
    githubRepo: 'OACH-py/media-server-stack',
    accent: 'teal',
    status: 'complete',
    link: 'https://github.com/OACH-py/media-server-stack',
  },
  {
    title: 'Python Fundamentals',
    subtitle: 'Structured Learning · 12 Projects',
    description:
      '12 practical projects across 4 progressive difficulty levels: syntax fundamentals, data structures, OOP with persistence, and web automation. Open documentation of the learning process — from conditional logic to REST API consumption, no shortcuts.',
    tags: ['🐍 Python', '🧠 Algorithms', '🔓 Open Source'],
    githubRepo: 'OACH-py/python-fundamentals',
    accent: 'sapphire',
    status: 'active',
    link: 'https://github.com/OACH-py/python-fundamentals',
  },
];
