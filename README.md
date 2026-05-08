# oach.me

> Digital Garden · Hub de Proyectos · Portafolio de Ingeniería Electrónica

[🇬🇧 English](./README.en.md) · [🇷🇺 Русский](./README.ru.md)

Sitio personal de [OACH](https://oach.me) — Ingeniería Electrónica · FOSS · Soberanía Digital.
Construido con [Astro](https://astro.build) y TypeScript. Sin rastreadores, sin telemetría,
sin dependencias externas en tiempo de ejecución.

---

## ¿Por qué existe este sitio?

Este sitio es un **Digital Garden**: un espacio vivo donde se documenta la intersección entre el
código de bajo nivel y el hardware tangible — cómo las instrucciones interactúan con el silicio
para producir efectos medibles en el mundo físico.

No es un portafolio de marketing. Es la aplicación práctica de dos principios que rigen el stack
completo:

- **Transparencia Técnica** — si defiendo procesos auditables, lo mínimo es que mi propio código
  sea inspeccionable. Por eso el repositorio es público.
- **Soberanía Digital** — el sitio no recolecta datos, no usa analytics de terceros, no incluye
  scripts externos en runtime. El usuario no es el producto.

---

## Stack

| Capa       | Tecnología                                                        |
|------------|-------------------------------------------------------------------|
| Framework  | [Astro 4](https://astro.build) — `output: static`                |
| Lenguaje   | TypeScript                                                        |
| Estilos    | CSS puro — sin framework, sin preprocesador                       |
| Tipografía | [Azeret Mono](https://fonts.google.com/specimen/Azeret+Mono)      |
| Paleta     | Catppuccin Mocha                                                  |
| Deploy     | Estático — sin servidor, sin runtime                              |
| Sitemap    | `@astrojs/sitemap` — generado en build                            |

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── Footer.astro       # Footer: fila principal (brand ↔ links) + fila meta centrada
│   ├── HomePage.astro     # Composición de las tres secciones (Proyectos, Ingeniería, Filosofía)
│   ├── NavBar.astro       # Nav fija con hide-on-scroll y menú hamburguesa (móvil < 580px)
│   └── ProjectCard.astro  # Tarjeta de proyecto con efecto tilt 3D (solo hover/pointer:fine)
│
├── data/
│   └── projects.ts        # Datos de proyectos trilingüe (ES / EN / RU); interfaz Project
│
├── i18n/
│   └── home.ts            # Todas las cadenas de traducción ES / EN / RU de la home page
│
├── layouts/
│   └── BaseLayout.astro   # HTML shell: SEO completo (OG, Twitter Card, JSON-LD,
│                          #   canonical, favicon, sitemap link, skip-link)
│
├── lib/
│   └── github.ts          # Fetch build-time de lenguajes desde la API de GitHub
│
├── pages/
│   ├── index.astro        # Ruta raíz — ES
│   ├── 404.astro          # Página de error
│   ├── en/
│   │   └── index.astro    # Ruta en inglés — /en/
│   └── ru/
│       └── index.astro    # Ruta en ruso — /ru/
│
└── styles/
    ├── global.css         # Reset, layout, glass system, animaciones, botones, tags
    └── tokens.css         # Variables CSS: paleta Catppuccin Mocha, tipografía, geometría
```

```
public/
├── favicon.svg            # Ícono SVG con gradiente Catppuccin
├── og.svg                 # Imagen Open Graph 1200×630 para previsualizaciones sociales
├── robots.txt             # Allow: *, referencia al sitemap
└── patterns/
    └── circuit.svg        # Patrón de fondo para las tarjetas glass
```

---

## Identidad Visual

La paleta **Catppuccin Mocha** fue elegida porque evoca una terminal moderna y eficiente —
fondo oscuro profundo (`#11111b`), acentos en mauve, sapphire, teal y peach que
proporcionan jerarquía visual sin abandonar la estética técnica.

```
Fondo:    --crust    #11111b  /  --mantle  #181825  /  --base  #1e1e2e
Texto:    --text     #cdd6f4  /  --subtext #bac2de
Acentos:  --mauve    #cba6f7  /  --sapphire #74c7ec  /  --teal #94e2d5
```

La tipografía **Azeret Mono** (monospace de proporciones amplias) refuerza la identidad técnica:
todo el sitio, desde los títulos hasta el cuerpo, usa la misma familia. No hay tipografía
decorativa ni sans-serif que rompa la coherencia.

El **sistema glass** (`.glass`, `.glass-featured`) aplica `backdrop-filter: blur` + borde
animado con `@property --border-angle` — gradiente de borde en rotación continua, calculado
para que no distraiga en reposo pero sea perceptible en hover.

---

## Tags Dinámicos — GitHub API

Los lenguajes de programación que aparecen en las tarjetas de proyecto **se generan en build
time**, no están hardcodeados:

```typescript
// src/lib/github.ts
export async function fetchLangTags(repo: string): Promise<string[]> {
  const res = await fetch(`https://api.github.com/repos/${repo}/languages`);
  const langs: Record<string, number> = await res.json();
  return Object.keys(langs)
    .filter(l => !NOISE.has(l))        // filtra HTML, CSS, Shell...
    .map(l => EMOJI[l] ? `${EMOJI[l]} ${l}` : l);
}
```

Durante `astro build`, el sitio consulta la API de GitHub para cada proyecto con `githubRepo`
definido y combina el resultado con `STATIC_TAGS` (`🔓 Open Source`, `⚡ KISS`). Si la API
falla, el build continúa sin tags dinámicos — nunca bloquea el deploy.

---

## Ejecutar localmente

```bash
git clone https://github.com/OACH-py/oach.me
cd oach.me
npm install
npm run dev      # http://localhost:4321
npm run build    # build estático → dist/
npm run preview  # previsualiza el build
```

No se requiere ninguna variable de entorno. La API de GitHub es pública para repositorios
sin autenticación (límite de 60 req/h por IP — suficiente para cualquier build local).

---

## Licencia

[MIT](./LICENSE) — © 2026 Osvaldo A. (OACH)

> El código es libre. La filosofía detrás de él también.
