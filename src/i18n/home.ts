export type Lang = 'es' | 'en' | 'ru';

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
  philoTailA: string;
  philoTailB: string;
  axioms: AxiomData[];
  ytSubscribers: string;
  ytViews: string;
  ytVideos: string;
  ytRecent: string;
  ytEarly: string;
  skillsTitle: string;
  skillsLangGroup: string;
  skillsInfraGroup: string;
  skillsWebGroup: string;
  skillsHwGroup: string;
  skillHwCircuits: string;
  skillHwDigital: string;
  skillHwEmbedded: string;
  sec04: string;
  sec05: string;
  contactTitle: string;
  contactDesc: string;
  ariaHero: string;
  ariaActions: string;
  ariaTech: string;
  aboutYears: string;
  aboutEngPassion: string;
  aboutPhiloLabel: string;
  aboutTaoTag: string;
  aboutInterestsLabel: string;
  aboutLangsLabel: string;
  ariaAbout: string;
  labLabel: string;
  labDesc: string;
  aboutReadsLabel: string;
  aboutStackLabel: string;
}

export const homeT: Record<Lang, HomeT> = {
  ru: {
    heroParagraph: 'Студент электронной инженерии · Защитник FOSS · Цифровой суверенитет',
    heroBtn:       'Смотреть проекты',
    sec01:         '01 — Проекты',
    flagship:      'Главный проект',
    featMeta:      'Технический канал · YouTube',
    viewChan:      'Перейти на канал ↗',
    sec02:         '02 — Инженерная документация',
    engTitle:      'Электронная инженерия',
    engP1:         'Мой ключевой интерес в электронной инженерии лежит на пересечении абстрактного кода и осязаемого железа. Я сосредоточен на том, как строки инструкций напрямую взаимодействуют с кремнием, производя измеримые эффекты в физическом мире — от управления промышленными процессами до проектирования встраиваемых систем.',
    engP2:         'Сейчас на 2-м семестре электронной инженерии в Tecnológico de la Laguna, специализация —',
    engSpec:       'Управление и автоматизация',
    engP2tail:     '. Техническая база началась с квалификации техника по офисным технологиям — отправная точка, с которой я двинулся к пересечению кода и кремния.',
    sec03:         '03 — Философия системы',
    philoIntro:    'Принятие философии',
    philoAnd:      'и',
    philoTailA:    'отражает потребность в системной ясности и полном контроле над вычислительной средой. Как добросовестный пользователь дистрибутива, не могу не упомянуть: I use Arch, btw.',
    philoTailB:    'Каждое рабочее решение определяется четырьмя фундаментальными аксиомами.',
    axioms: [
      { num: '01', title: 'KISS',                          color: 'mauve',    label: 'Простота прежде всего',   desc: 'Функциональная простота — приоритет. Излишняя сложность есть <em>ошибка проектирования</em>.' },
      { num: '02', title: 'Проактивная<br />приватность',  color: 'sapphire', label: 'Суверенитет данных',      desc: 'Абсолютная целостность данных. Слежка, перепродажа и перекрёстное использование личной информации неприемлемы — <em>суверенитет принадлежит пользователю</em>.' },
      { num: '03', title: 'Техническая<br />прозрачность', color: 'teal',     label: 'Честность системы',       desc: 'ПО должно быть явным в своих действиях и свободным от <em>скрытой телеметрии</em>. Процессы наблюдаемы и поддаются аудиту.' },
      { num: '04', title: 'Устойчивая<br />модульность',   color: 'peach',    label: 'Взаимозаменяемость',      desc: 'Компоненты, заменяемые по выбору пользователя, активно противостоящие <em>запланированному устареванию</em> посредством модульного дизайна.' },
    ],
    ytSubscribers:   'подписчиков',
    ytViews:         'просмотров',
    ytVideos:        'видео',
    ytRecent:        'Последние видео',
    ytEarly:         'Канал в разработке — контент скоро появится.',
    skillsTitle:     'Технические компетенции',
    skillsLangGroup: 'Языки и скриптинг',
    skillsInfraGroup:'Среда и Ops',
    skillsWebGroup:  'Разработка и интерфейсы',
    skillsHwGroup:   'Электронная инженерия',
    skillHwCircuits: 'Схемы',
    skillHwDigital:  'Цифровая электроника',
    skillHwEmbedded: 'Встраиваемые системы',
    sec04:           '04 — Обо мне',
    sec05:           '05 — Контакт',
    contactTitle:    'Напишите мне',
    contactDesc:     'Если у вас есть проект, идея или просто вопрос — пишите напрямую.',
    ariaHero:        'Представление',
    ariaActions:     'Быстрые действия',
    ariaTech:        'Технологии',
    aboutYears:          'лет',
    aboutEngPassion:     'Электронная инженерия — трансверсальная дисциплина: преподавание, автоматизация систем, менеджмент, разработка ПО. Что меня завораживает — связь между кодом и железом: строки инструкций создаются кремнием, улавливающим электроны, и те же строки могут воздействовать на кремний и электроны. Программное и аппаратное обеспечение — одно явление с двух углов.',
    aboutPhiloLabel:     'Философия',
    aboutTaoTag:         'Даосизм',
    aboutInterestsLabel: 'Интересы',
    aboutLangsLabel:     'Языки',
    ariaAbout:           'Обо мне',
    labLabel:            'Лаборатория · Железо',
    labDesc:             'Схема, активирующая светодиод в зависимости от уровня освещённости. Фоторезистор фиксирует свет; потенциометр задаёт порог срабатывания.',
    aboutReadsLabel:     'Чтение',
    aboutStackLabel:     'Личный стек',
  },
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
    engP2:         'Actualmente cursando el segundo semestre de Ingeniería Electrónica en el Tecnológico de la Laguna, con especialización en',
    engSpec:       'Control & Automatización',
    engP2tail:     '. Mi base técnica comienza como Técnico en Ofimática — punto de partida desde el que migré hacia la intersección entre el código abstracto y el silicio.',
    sec03:         '03 — Filosofía del Sistema',
    philoIntro:    'Adoptar la filosofía',
    philoAnd:      'y',
    philoTailA:    'refleja una necesidad de claridad sistémica y control total sobre el entorno computacional. Como buen usuario de la distro, me veo en la necesidad de mencionarlo: I use Arch, btw.',
    philoTailB:    'Cada decisión de flujo de trabajo está gobernada por cuatro axiomas fundamentales.',
    axioms: [
      { num: '01', title: 'KISS',                      color: 'mauve',    label: 'Mantén la Simplicidad',        desc: 'La simpleza funcional es la prioridad. La complejidad innecesaria es un <em>error de diseño</em>.' },
      { num: '02', title: 'Privacidad<br />Proactiva',  color: 'sapphire', label: 'Soberanía de Datos',           desc: 'Integridad de datos absoluta. El seguimiento, reventa y cruce de información personal son rechazados — <em>la soberanía reside en el usuario</em>.' },
      { num: '03', title: 'Transparencia<br />Técnica', color: 'teal',     label: 'Honestidad del Sistema',       desc: 'El software debe ser explícito en sus acciones y libre de <em>telemetría oculta</em>. Los procesos son observables y auditables.' },
      { num: '04', title: 'Modularidad<br />Sostenible',color: 'peach',    label: 'Diseñado para el Intercambio', desc: 'Componentes intercambiables por elección del usuario, resistiendo activamente la <em>obsolescencia programada</em> mediante diseño modular.' },
    ],
    ytSubscribers:   'suscriptores',
    ytViews:         'vistas totales',
    ytVideos:        'videos',
    ytRecent:        'Últimos videos',
    ytEarly:         'Canal en construcción — el contenido llega pronto.',
    skillsTitle:     'Competencias técnicas',
    skillsLangGroup: 'Lenguajes & Scripting',
    skillsInfraGroup:'Entorno & Ops',
    skillsWebGroup:  'Desarrollo & Interfaces',
    skillsHwGroup:   'Ingeniería Electrónica',
    skillHwCircuits: 'Circuitos',
    skillHwDigital:  'Electrónica Digital',
    skillHwEmbedded: 'Sistemas Embebidos',
    sec04:           '04 — Sobre mí',
    sec05:           '05 — Contacto',
    contactTitle:    '¿Hablamos?',
    contactDesc:     'Si tienes un proyecto, una idea o simplemente una pregunta — escribe directamente.',
    ariaHero:        'Presentación',
    ariaActions:     'Acciones rápidas',
    ariaTech:        'Tecnologías',
    aboutYears:          'años',
    aboutEngPassion:     'La ingeniería electrónica es transversal — desde la docencia hasta la automatización de sistemas, la gestión o el desarrollo de software. Lo que me fascina es la conexión entre el código y el hardware: las líneas de instrucción son creadas por silicio que atrapa electrones, y esas mismas líneas pueden afectar al silicio y a los electrones. El software y el hardware son el mismo fenómeno visto desde dos ángulos.',
    aboutPhiloLabel:     'Filosofía',
    aboutTaoTag:         'Taoísmo',
    aboutInterestsLabel: 'Intereses',
    aboutLangsLabel:     'Idiomas',
    ariaAbout:           'Sobre mí',
    labLabel:            'Lab · Hardware',
    labDesc:             'Circuito que activa un LED según el nivel de luz ambiente. Una fotoresistencia detecta la iluminación; un potenciómetro calibra el umbral de disparo.',
    aboutReadsLabel:     'Lecturas',
    aboutStackLabel:     'Stack personal',
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
    philoTailA:    'reflects a need for systemic clarity and full control over the computational environment. As a proper user of the distro, I feel compelled to mention it: I use Arch, btw.',
    philoTailB:    'Every workflow decision is governed by four foundational axioms.',
    axioms: [
      { num: '01', title: 'KISS',                        color: 'mauve',    label: 'Keep It Simple, Stupid', desc: 'Functional simplicity is the priority. Unnecessary complexity is a <em>design error</em>.' },
      { num: '02', title: 'Proactive<br />Privacy',       color: 'sapphire', label: 'Data Sovereignty',      desc: 'Absolute data integrity. Tracking, resale, and cross-referencing of personal information are rejected — <em>sovereignty rests with the user</em>.' },
      { num: '03', title: 'Technical<br />Transparency',  color: 'teal',     label: 'System Honesty',        desc: 'Software must be explicit in its actions and free of <em>hidden telemetry</em>. Processes are observable and auditable.' },
      { num: '04', title: 'Sustainable<br />Modularity',  color: 'peach',    label: 'Swappable by Design',   desc: 'Components swappable by user choice, actively resisting <em>planned obsolescence</em> through modular design.' },
    ],
    ytSubscribers:   'subscribers',
    ytViews:         'total views',
    ytVideos:        'videos',
    ytRecent:        'Recent videos',
    ytEarly:         'Channel under construction — content coming soon.',
    skillsTitle:     'Technical Competencies',
    skillsLangGroup: 'Languages & Scripting',
    skillsInfraGroup:'Environment & Ops',
    skillsWebGroup:  'Development & Interfaces',
    skillsHwGroup:   'Electronics Engineering',
    skillHwCircuits: 'Circuits',
    skillHwDigital:  'Digital Electronics',
    skillHwEmbedded: 'Embedded Systems',
    sec04:           '04 — About',
    sec05:           '05 — Contact',
    contactTitle:    'Get in touch',
    contactDesc:     'Have a project, an idea, or just a question — reach out directly.',
    ariaHero:        'Introduction',
    ariaActions:     'Quick actions',
    ariaTech:        'Technologies',
    aboutYears:          'years old',
    aboutEngPassion:     'Electronics engineering is transversal — from teaching to systems automation, management, or software development. What fascinates me is the connection between code and hardware: lines of instruction are created by silicon trapping electrons, and those same lines can affect silicon and electrons. Software and hardware are the same phenomenon seen from two angles.',
    aboutPhiloLabel:     'Philosophy',
    aboutTaoTag:         'Taoism',
    aboutInterestsLabel: 'Interests',
    aboutLangsLabel:     'Languages',
    ariaAbout:           'About me',
    labLabel:            'Lab · Hardware',
    labDesc:             'Circuit that activates an LED based on ambient light level. A photoresistor detects the lighting; a potentiometer calibrates the trigger threshold.',
    aboutReadsLabel:     'Reads',
    aboutStackLabel:     'Personal stack',
  },
};
