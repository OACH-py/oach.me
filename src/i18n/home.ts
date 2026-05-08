export type Lang = 'es' | 'en';

interface AxiomData {
  num: string;
  title: string;
  color: 'mauve' | 'sapphire' | 'teal' | 'peach';
  label: string;
  desc: string;
}

export interface HomeT {
  heroParagraph: string;
  heroBtn: string;
  sec01: string;
  flagship: string;
  featMeta: string;
  viewChan: string;
  sec02: string;
  engTitle: string;
  engP1: string;
  engP2: string;
  engSpec: string;
  engP2tail: string;
  sec03: string;
  philoIntro: string;
  philoAnd: string;
  philoTail: string;
  axioms: AxiomData[];
}

export const homeT: Record<Lang, HomeT> = {
  es: {
    heroParagraph: 'Estudiante de Ingeniería Electrónica · Defensor FOSS · Soberanía Digital',
    heroBtn:       'Ver Proyectos',
    sec01:         '01 — Proyectos',
    flagship:      'Proyecto Principal',
    featMeta:      'Divulgación Técnica · YouTube',
    viewChan:      'Ver Canal ↗',
    sec02:         '02 — Documentación de Ingeniería',
    engTitle:      'Ingeniería Electrónica',
    engP1:         'Mi interés central en Ingeniería Electrónica reside en la convergencia entre el código abstracto y el hardware tangible. Me enfoco en cómo las líneas de instrucción interactúan directamente con el silicio para producir efectos medibles en el mundo físico — desde el control de procesos industriales hasta el diseño de sistemas embebidos.',
    engP2:         'Actualmente cursando el 2do semestre de Ingeniería Electrónica en el Tecnológico de la Laguna, con especialización en',
    engSpec:       'Control & Automatización',
    engP2tail:     '. Mi base técnica comienza como Técnico en Ofimática — punto de partida desde el que migré hacia la intersección entre el código abstracto y el silicio.',
    sec03:         '03 — Filosofía del Sistema',
    philoIntro:    'Adoptar la filosofía',
    philoAnd:      'y',
    philoTail:     'refleja una necesidad de claridad sistémica y control total sobre el entorno computacional. Como buen usuario de la distro, me veo en la necesidad de mencionarlo: I use Arch, btw.\nCada decisión de flujo de trabajo está gobernada por cuatro axiomas fundamentales.',
    axioms: [
      { num: '01', title: 'KISS',                      color: 'mauve',    label: 'Mantén la Simplicidad',        desc: 'La simpleza funcional es la prioridad. La complejidad innecesaria es un <em>error de diseño</em>.' },
      { num: '02', title: 'Privacidad<br />Proactiva',  color: 'sapphire', label: 'Soberanía de Datos',           desc: 'Integridad de datos absoluta. El seguimiento, reventa y cruce de información personal es rechazado — <em>la soberanía reside en el usuario</em>.' },
      { num: '03', title: 'Transparencia<br />Técnica', color: 'teal',     label: 'Honestidad del Sistema',       desc: 'El software debe ser explícito en sus acciones y libre de <em>telemetría oculta</em>. Los procesos son observables y auditables.' },
      { num: '04', title: 'Modularidad<br />Sostenible',color: 'peach',    label: 'Diseñado para el Intercambio', desc: 'Componentes intercambiables por elección del usuario, resistiendo activamente la <em>obsolescencia programada</em> mediante diseño modular.' },
    ],
  },
  en: {
    heroParagraph: 'Electronics Engineering Student · FOSS Advocate · Digital Sovereignty',
    heroBtn:       'View Projects',
    sec01:         '01 — Projects',
    flagship:      'Flagship Project',
    featMeta:      'Technical Outreach · YouTube',
    viewChan:      'View Channel ↗',
    sec02:         '02 — Engineering Documentation',
    engTitle:      'Electronics Engineering',
    engP1:         'My core interest in Electronics Engineering lies at the convergence of abstract code and tangible hardware. I focus on how lines of instruction interact directly with silicon to produce measurable effects in the physical world — from industrial process control to embedded systems design.',
    engP2:         'Currently in my 2nd semester of Electronics Engineering at Tecnológico de la Laguna, specializing in',
    engSpec:       'Control & Automation',
    engP2tail:     '. My technical foundation began as an Ofimática Technician — the starting point from which I migrated toward the intersection of abstract code and silicon.',
    sec03:         '03 — System Philosophy',
    philoIntro:    'Adopting the',
    philoAnd:      'philosophy and',
    philoTail:     'reflects a need for systemic clarity and full control over the computational environment. As a proper user of the distro, I feel compelled to mention it: I use Arch, btw.\nEvery workflow decision is governed by four foundational axioms.',
    axioms: [
      { num: '01', title: 'KISS',                        color: 'mauve',    label: 'Keep It Simple, Stupid', desc: 'Functional simplicity is the priority. Unnecessary complexity is a <em>design error</em>.' },
      { num: '02', title: 'Proactive<br />Privacy',       color: 'sapphire', label: 'Data Sovereignty',      desc: 'Absolute data integrity. Tracking, resale, and cross-referencing of personal information is rejected — <em>sovereignty rests with the user</em>.' },
      { num: '03', title: 'Technical<br />Transparency',  color: 'teal',     label: 'System Honesty',        desc: 'Software must be explicit in its actions and free of <em>hidden telemetry</em>. Processes are observable and auditable.' },
      { num: '04', title: 'Sustainable<br />Modularity',  color: 'peach',    label: 'Swappable by Design',   desc: 'Components swappable by user choice, actively resisting <em>planned obsolescence</em> through modular design.' },
    ],
  },
};
