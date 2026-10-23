# Awesome UI Stack [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated, **visual** map of UI libraries, component kits, motion frameworks, and design systems for building beautiful, interactive web applications.

Every entry comes with a screenshot so you can judge the look before you click. Open any thumbnail to see the full-size capture plus extra references (component pages, animations, showcases, inspiration) in the **[Gallery](gallery/README.md)**, and browse the community **[Reference Board](gallery/board.md)** for anything else worth looking at.

**Legend:** 🆓 free / open source · 💎 paid tier or commercial product · ⚛️ React · 🟢 Vue · 🧡 Svelte · 🅰️ Angular · 🌐 framework-agnostic

> [!NOTE]
> `README.md` and `gallery/` are generated from [`data/list.yml`](data/list.yml). Edit the data file, not the README. See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Quick Stack Recipes

| Goal | Suggested stack |
|---|---|
| Modern SaaS app (React/Next.js) | Tailwind CSS + shadcn/ui (Radix or Base UI) + Motion + Lucide + Recharts |
| Animated marketing / landing page | Tailwind + Magic UI / Aceternity UI / React Bits + GSAP ScrollTrigger + Lenis |
| Enterprise / data-heavy dashboard | MUI or Ant Design + TanStack Table + ECharts |
| Accessibility-first custom design system | React Aria Components + Style Dictionary + Storybook |
| Immersive 3D experience | React Three Fiber + Drei + GSAP + Theatre.js |
| Vue / Nuxt app | Nuxt UI or shadcn-vue (Reka UI) + Motion for Vue + Inspira UI |
| SvelteKit app | shadcn-svelte (Bits UI) + Svelte transitions + Threlte |
| Framework-agnostic | Web Awesome + Open Props + GSAP |

## Contents

- [Quick Stack Recipes](#quick-stack-recipes)
- [Design Systems](#design-systems)
- [Styling Foundations](#styling-foundations)
- [Headless Primitives](#headless-primitives)
- [Component Libraries](#component-libraries)
  - [React](#react)
  - [Copy-Paste & Registries (shadcn ecosystem)](#copy-paste--registries-shadcn-ecosystem)
  - [Animated Component Collections](#animated-component-collections)
  - [Vue](#vue)
  - [Svelte](#svelte)
  - [Angular](#angular)
  - [Solid](#solid)
  - [Web Components](#web-components)
- [Motion & Animation](#motion--animation)
  - [Animation Engines](#animation-engines)
  - [Scroll & Smooth Scrolling](#scroll--smooth-scrolling)
  - [Page & Route Transitions](#page--route-transitions)
  - [Designer-Authored Animation](#designer-authored-animation)
  - [Text & Number Effects](#text--number-effects)
  - [Carousels & Gestures](#carousels--gestures)
- [3D, WebGL & Creative Coding](#3d-webgl--creative-coding)
- [Charts & Data Visualization](#charts--data-visualization)
- [Icons](#icons)
- [Fonts](#fonts)
- [Color, Tokens & Theming](#color-tokens--theming)
- [Specialized Interactive Components](#specialized-interactive-components)
- [Tooling & Workflow](#tooling--workflow)
- [Native Web Platform APIs](#native-web-platform-apis)
- [Inspiration & Galleries](#inspiration--galleries)
- [Learning Resources](#learning-resources)
- [Contributing](#contributing)

<sub>193 entries · 0 with screenshots · generated from <code>data/list.yml</code></sub>

---

## Design Systems

Public design systems with guidelines, tokens and (usually) code. Great to study or adopt.

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://m3.material.io">Material Design 3</a></b> 🆓<br>
<sub>Google's design system with dynamic color and expressive motion.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://developer.apple.com/design/human-interface-guidelines">Apple Human Interface Guidelines</a></b> 🆓<br>
<sub>Platform design guidance from Apple.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://fluent2.microsoft.design">Fluent 2</a></b> 🆓<br>
<sub>Microsoft's cross-platform design system.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://carbondesignsystem.com">Carbon</a></b> 🆓<br>
<sub>IBM's open-source system for products and digital experiences.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://atlassian.design">Atlassian Design System</a></b> 🆓<br>
<sub>Foundations, tokens and components behind Jira and Confluence.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://primer.style">Primer</a></b> 🆓<br>
<sub>GitHub's design system.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://ant.design">Ant Design</a></b> 🆓<br>
<sub>Enterprise-class design language with a large React implementation.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://spectrum.adobe.com">Spectrum</a></b> 🆓<br>
<sub>Adobe's design system (React Spectrum, Spectrum Web Components).</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://vercel.com/geist">Geist</a></b> 🆓<br>
<sub>Vercel's minimal design system and typeface.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://gestalt.pinterest.systems">Gestalt</a></b> 🆓<br>
<sub>Pinterest's design system.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://baseweb.design">Base Web</a></b> 🆓<br>
<sub>Uber's design system.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://eui.elastic.co">Elastic UI (EUI)</a></b> 🆓<br>
<sub>Elastic's design system for data-rich apps.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.lightningdesignsystem.com">Salesforce Lightning</a></b> 🆓<br>
<sub>Enterprise system from Salesforce.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://design-system.service.gov.uk">GOV.UK Design System</a></b> 🆓<br>
<sub>Gold standard for accessible public-service UI.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://designsystem.digital.gov">U.S. Web Design System</a></b> 🆓<br>
<sub>Accessible components for U.S. government sites.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Design Systems gallery](gallery/design-systems.md)</sub>

---

## Styling Foundations

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://tailwindcss.com">Tailwind CSS</a></b> 🆓🌐<br>
<sub>Utility-first CSS framework; the base layer of most modern kits.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://daisyui.com">daisyUI</a></b> 🆓🌐<br>
<sub>Semantic component classes and themes on top of Tailwind.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://unocss.dev">UnoCSS</a></b> 🆓🌐<br>
<sub>Instant on-demand atomic CSS engine.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://panda-css.com">Panda CSS</a></b> 🆓🌐<br>
<sub>Build-time CSS-in-JS with tokens and recipes.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://stylexjs.com">StyleX</a></b> 🆓⚛️<br>
<sub>Meta's compile-time styling system.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://vanilla-extract.style">vanilla-extract</a></b> 🆓🌐<br>
<sub>Zero-runtime, type-safe stylesheets in TypeScript.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://open-props.style">Open Props</a></b> 🆓🌐<br>
<sub>Supercharged CSS custom properties (sizes, easings, shadows).</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://picocss.com">Pico CSS</a></b> 🆓🌐<br>
<sub>Minimal CSS for semantic HTML.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://getbootstrap.com">Bootstrap</a></b> 🆓🌐<br>
<sub>The classic responsive component framework.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://bulma.io">Bulma</a></b> 🆓🌐<br>
<sub>Modern, Flexbox-based CSS framework.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Styling Foundations gallery](gallery/styling-foundations.md)</sub>

---

## Headless Primitives

Unstyled, accessible building blocks — the layer you build your own design system on.

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.radix-ui.com/primitives">Radix Primitives</a></b> 🆓⚛️<br>
<sub>Accessible unstyled React primitives; the original foundation of shadcn/ui.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://base-ui.com">Base UI</a></b> 🆓⚛️<br>
<sub>Unstyled components from the creators of Radix, Floating UI and MUI.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://react-spectrum.adobe.com/react-aria/">React Aria</a></b> 🆓⚛️<br>
<sub>Adobe's hooks and components with best-in-class accessibility and i18n.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://headlessui.com">Headless UI</a></b> 🆓⚛️🟢<br>
<sub>Unstyled components from the Tailwind team (React &amp; Vue).</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://ark-ui.com">Ark UI</a></b> 🆓🌐<br>
<sub>Headless components for React, Vue, Solid and Svelte, powered by Zag.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://zagjs.com">Zag</a></b> 🆓🌐<br>
<sub>Framework-agnostic UI component state machines.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://ariakit.org">Ariakit</a></b> 🆓⚛️<br>
<sub>Lightweight, accessible React primitives.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://reka-ui.com">Reka UI</a></b> 🆓🟢<br>
<sub>Vue port of the Radix model (formerly Radix Vue).</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://bits-ui.com">Bits UI</a></b> 🆓🧡<br>
<sub>Headless components for Svelte.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://melt-ui.com">Melt UI</a></b> 🆓🧡<br>
<sub>Headless builders for Svelte.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://kobalte.dev">Kobalte</a></b> 🆓<br>
<sub>Accessible headless components for SolidJS.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://floating-ui.com">Floating UI</a></b> 🆓🌐<br>
<sub>Positioning engine for tooltips, popovers and dropdowns.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://tanstack.com/table">TanStack Table</a> / <a href="https://tanstack.com/virtual">Virtual</a> / <a href="https://tanstack.com/form">Form</a></b> 🆓🌐<br>
<sub>Headless table, virtualization and form logic.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Headless Primitives gallery](gallery/headless-primitives.md)</sub>

---

## Component Libraries

### React

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://mui.com">MUI (Material UI)</a></b> 🆓💎⚛️<br>
<sub>Comprehensive Material Design components plus MUI X data grid and pickers.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://mantine.dev">Mantine</a></b> 🆓⚛️<br>
<sub>100+ components and hooks with excellent DX.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://chakra-ui.com">Chakra UI</a></b> 🆓⚛️<br>
<sub>Accessible, themeable components (v3 built on Ark UI).</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://heroui.com">HeroUI</a></b> 🆓⚛️<br>
<sub>Beautiful Tailwind-based components (formerly NextUI).</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://ant.design">Ant Design</a></b> 🆓⚛️<br>
<sub>Enterprise component suite.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://react-spectrum.adobe.com">React Spectrum</a></b> 🆓⚛️<br>
<sub>Adobe's styled implementation of Spectrum.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://react.fluentui.dev">Fluent UI React</a></b> 🆓⚛️<br>
<sub>Microsoft's Fluent 2 components.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://blueprintjs.com">Blueprint</a></b> 🆓⚛️<br>
<sub>Toolkit for complex, data-dense desktop-style apps.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://primereact.org">PrimeReact</a></b> 🆓💎⚛️<br>
<sub>90+ components with themes and a styled/unstyled mode.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://park-ui.com">Park UI</a></b> 🆓⚛️<br>
<sub>Styled components built on Ark UI and Panda/Tailwind.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://tremor.so">Tremor</a></b> 🆓⚛️<br>
<sub>Components for dashboards and analytics.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.untitledui.com/react">Untitled UI React</a></b> 🆓💎⚛️<br>
<sub>Large Figma kit with matching React components.</sub>
</td>
</tr>
</table>

### Copy-Paste & Registries (shadcn ecosystem)

You copy the source into your project and own it.

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://ui.shadcn.com">shadcn/ui</a></b> 🆓⚛️<br>
<sub>The copy-paste standard; Tailwind + Radix or Base UI, with a registry/CLI ecosystem.</sub>
<br><sub><a href="gallery/component-libraries.md#ui-shadcn-com">🖼️ 2 references</a></sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.kibo-ui.com">Kibo UI</a></b> 🆓⚛️<br>
<sub>Advanced composable shadcn components (kanban, gantt, editor…).</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.cult-ui.com">Cult UI</a></b> 🆓⚛️<br>
<sub>Stylish shadcn-compatible components and blocks.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://originui.com">Origin UI</a></b> 🆓⚛️<br>
<sub>Large collection of shadcn-style components.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://21st.dev">21st.dev</a></b> 🆓⚛️<br>
<sub>Community registry of shadcn-compatible components.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://tweakcn.com">tweakcn</a></b> 🆓⚛️<br>
<sub>Visual theme editor for shadcn/ui.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://tailwindcss.com/plus">Tailwind Plus</a></b> 💎⚛️🟢<br>
<sub>Official Tailwind UI blocks, templates and Catalyst kit.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://flowbite.com">Flowbite</a></b> 🆓💎🌐<br>
<sub>Tailwind components with React, Vue, Svelte and Angular ports.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://preline.co">Preline UI</a></b> 🆓💎🌐<br>
<sub>Open-source Tailwind components and blocks.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.hyperui.dev">HyperUI</a></b> 🆓🌐<br>
<sub>Free Tailwind component snippets.</sub>
</td>
</tr>
</table>

### Animated Component Collections

Motion-first components for landing pages and delightful UIs.

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://magicui.design">Magic UI</a></b> 🆓💎⚛️<br>
<sub>150+ animated components (marquees, bento grids, shimmer buttons) for shadcn projects.</sub>
<br><sub><a href="gallery/component-libraries.md#magicui-design">🖼️ 1 references</a></sub>
</td>
<td width="33%" valign="top">
<b><a href="https://ui.aceternity.com">Aceternity UI</a></b> 🆓💎⚛️<br>
<sub>Dramatic effects: 3D cards, spotlights, animated backgrounds.</sub>
<br><sub><a href="gallery/component-libraries.md#ui-aceternity-com">🖼️ 1 references</a></sub>
</td>
<td width="33%" valign="top">
<b><a href="https://reactbits.dev">React Bits</a></b> 🆓⚛️<br>
<sub>110+ animated text, background and interactive components; no single engine lock-in.</sub>
<br><sub><a href="gallery/component-libraries.md#reactbits-dev">🖼️ 1 references</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://motion-primitives.com">Motion Primitives</a></b> 🆓⚛️<br>
<sub>Animated building blocks built on Motion.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://animate-ui.com">Animate UI</a></b> 🆓⚛️<br>
<sub>Animated shadcn-style components.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://animata.design">Animata</a></b> 🆓⚛️<br>
<sub>Hand-crafted interaction animations.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.eldoraui.site">Eldora UI</a></b> 🆓⚛️<br>
<sub>Free animated component set.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://kokonutui.com">Kokonut UI</a></b> 🆓💎⚛️<br>
<sub>Modern animated components and blocks.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://skiper-ui.com">Skiper UI</a></b> 🆓💎⚛️<br>
<sub>Polished interaction components.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://inspira-ui.com">Inspira UI</a></b> 🆓🟢<br>
<sub>Animated components for Vue/Nuxt.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://uiverse.io">Uiverse</a></b> 🆓🌐<br>
<sub>Community-made pure CSS/Tailwind elements.</sub>
</td>
</tr>
</table>

### Vue

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://ui.nuxt.com">Nuxt UI</a></b> 🆓🟢<br>
<sub>Tailwind + Reka UI components for Vue and Nuxt.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.shadcn-vue.com">shadcn-vue</a></b> 🆓🟢<br>
<sub>Vue port of shadcn/ui.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://vuetifyjs.com">Vuetify</a></b> 🆓🟢<br>
<sub>Material Design component framework.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://primevue.org">PrimeVue</a></b> 🆓🟢<br>
<sub>Rich component suite with styled/unstyled modes.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.naiveui.com">Naive UI</a></b> 🆓🟢<br>
<sub>Themeable TypeScript components.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://element-plus.org">Element Plus</a></b> 🆓🟢<br>
<sub>Vue 3 desktop UI library.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://quasar.dev">Quasar</a></b> 🆓🟢<br>
<sub>Build web, mobile and desktop from one Vue codebase.</sub>
</td>
</tr>
</table>

### Svelte

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.shadcn-svelte.com">shadcn-svelte</a></b> 🆓🧡<br>
<sub>Svelte port of shadcn/ui built on Bits UI.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.skeleton.dev">Skeleton</a></b> 🆓🧡<br>
<sub>Adaptive design system for Svelte + Tailwind.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://flowbite-svelte.com">Flowbite Svelte</a></b> 🆓🧡<br>
<sub>Flowbite components for Svelte.</sub>
</td>
</tr>
</table>

### Angular

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://material.angular.dev">Angular Material</a></b> 🆓🅰️<br>
<sub>Official Material components and CDK.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.spartan.ng">Spartan</a></b> 🆓🅰️<br>
<sub>shadcn-style copy-paste components for Angular.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://primeng.org">PrimeNG</a></b> 🆓🅰️<br>
<sub>Large Angular component suite.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://ng.ant.design">NG-ZORRO</a></b> 🆓🅰️<br>
<sub>Ant Design for Angular.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://taiga-ui.dev">Taiga UI</a></b> 🆓🅰️<br>
<sub>Modular Angular UI kit.</sub>
</td>
</tr>
</table>

### Solid

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://kobalte.dev">Kobalte</a></b> <br>
<sub>Headless primitives (see above).</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://ark-ui.com">Ark UI for Solid</a></b> 🆓<br>
<sub>Headless components with Solid bindings.</sub>
</td>
</tr>
</table>

### Web Components

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://webawesome.com">Web Awesome</a></b> 🆓💎🌐<br>
<sub>Successor to Shoelace; framework-agnostic components.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://lit.dev">Lit</a></b> 🆓🌐<br>
<sub>Simple, fast library for building web components.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://opensource.adobe.com/spectrum-web-components/">Spectrum Web Components</a></b> 🆓🌐<br>
<sub>Adobe Spectrum as web components.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://ionicframework.com">Ionic</a></b> 🆓🌐<br>
<sub>Mobile-first UI components for the web.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Component Libraries gallery](gallery/component-libraries.md)</sub>

---

## Motion & Animation

### Animation Engines

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://motion.dev">Motion</a></b> 🆓🌐<br>
<sub>Formerly Framer Motion; hybrid WAAPI/JS engine for React, Vue and vanilla JS (layout, gestures, springs).</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://gsap.com">GSAP</a></b> 🆓🌐<br>
<sub>Industry-standard timeline engine; all plugins (ScrollTrigger, SplitText, MorphSVG, Flip) now free.</sub>
<br><sub><a href="gallery/motion-animation.md#gsap-com">🖼️ 1 references</a></sub>
</td>
<td width="33%" valign="top">
<b><a href="https://animejs.com">Anime.js</a></b> 🆓🌐<br>
<sub>Lightweight, modular engine with timelines, draggables and scroll observers.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.react-spring.dev">React Spring</a></b> 🆓⚛️<br>
<sub>Spring-physics animation for React.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://auto-animate.formkit.com">AutoAnimate</a></b> 🆓🌐<br>
<sub>Zero-config, drop-in list/layout animations.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.theatrejs.com">Theatre.js</a></b> 🆓🌐<br>
<sub>Visual timeline editor for motion design in code (great with Three.js).</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://svelte.dev/docs/svelte/transition">Svelte Motion &amp; Transitions</a></b> 🆓🧡<br>
<sub>Built-in Svelte transitions, tweens and springs.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://motion.dev/docs/vue">Motion for Vue</a></b> 🆓🟢<br>
<sub>Motion's Vue API.</sub>
</td>
</tr>
</table>

### Scroll & Smooth Scrolling

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/">GSAP ScrollTrigger</a></b> 🆓🌐<br>
<sub>Scroll-linked and pinned animations.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://lenis.darkroom.engineering">Lenis</a></b> 🆓🌐<br>
<sub>Lightweight smooth scrolling.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://scroll.locomotive.ca">Locomotive Scroll</a></b> 🆓🌐<br>
<sub>Scroll detection with parallax.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://michalsnik.github.io/aos/">AOS</a></b> 🆓🌐<br>
<sub>Animate-on-scroll classic.</sub>
</td>
</tr>
</table>

### Page & Route Transitions

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API">View Transitions API</a></b> 🆓🌐<br>
<sub>Native animated transitions between DOM states and pages.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://barba.js.org">Barba.js</a></b> 🆓🌐<br>
<sub>Fluid transitions for multi-page sites.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://swup.js.org">Swup</a></b> 🆓🌐<br>
<sub>Page transition library with plugins.</sub>
</td>
</tr>
</table>

### Designer-Authored Animation

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://rive.app">Rive</a></b> 🆓💎🌐<br>
<sub>Interactive, state-machine-driven vector animations with tiny runtimes.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://airbnb.io/lottie/">Lottie</a></b> 🆓🌐<br>
<sub>Render After Effects animations exported as JSON.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://lottiefiles.com">LottieFiles</a></b> 🆓💎🌐<br>
<sub>Lottie tooling, marketplace and dotLottie players.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://spline.design">Spline</a></b> 🆓💎🌐<br>
<sub>Collaborative 3D design tool with web embeds.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.unicorn.studio">Unicorn Studio</a></b> 🆓💎🌐<br>
<sub>No-code WebGL effects and backgrounds.</sub>
</td>
</tr>
</table>

### Text & Number Effects

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://gsap.com/docs/v3/Plugins/SplitText/">GSAP SplitText</a></b> 🆓🌐<br>
<sub>Split text into chars/words/lines for animation.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://splitting.js.org">Splitting.js</a></b> 🆓🌐<br>
<sub>CSS-variable-based text splitting.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://number-flow.barvian.me">NumberFlow</a></b> 🆓🌐<br>
<sub>Animated number transitions.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://github.com/mattboldt/typed.js">Typed.js</a></b> 🆓🌐<br>
<sub>Typewriter effect.</sub>
</td>
</tr>
</table>

### Carousels & Gestures

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.embla-carousel.com">Embla Carousel</a></b> 🆓🌐<br>
<sub>Lightweight, extensible carousel engine.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://swiperjs.com">Swiper</a></b> 🆓🌐<br>
<sub>Touch slider with many effects.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://use-gesture.netlify.app">@use-gesture</a></b> 🆓⚛️<br>
<sub>Drag, pinch, scroll and hover gestures.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Motion & Animation gallery](gallery/motion-animation.md)</sub>

---

## 3D, WebGL & Creative Coding

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://threejs.org">Three.js</a></b> 🆓🌐<br>
<sub>The standard 3D library for the web (WebGL &amp; WebGPU).</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#threejs-org">🖼️ 1 references</a></sub>
</td>
<td width="33%" valign="top">
<b><a href="https://r3f.docs.pmnd.rs">React Three Fiber</a></b> 🆓⚛️<br>
<sub>React renderer for Three.js.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://drei.docs.pmnd.rs">Drei</a></b> 🆓⚛️<br>
<sub>Helpers and abstractions for R3F.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://tresjs.org">TresJS</a></b> 🆓🟢<br>
<sub>Declarative Three.js for Vue.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://threlte.xyz">Threlte</a></b> 🆓🧡<br>
<sub>Three.js for Svelte.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.babylonjs.com">Babylon.js</a></b> 🆓🌐<br>
<sub>Full-featured 3D engine.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://playcanvas.com">PlayCanvas</a></b> 🆓💎🌐<br>
<sub>WebGL/WebGPU engine and editor.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://github.com/oframe/ogl">OGL</a></b> 🆓🌐<br>
<sub>Minimal WebGL library.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://pixijs.com">PixiJS</a></b> 🆓🌐<br>
<sub>Fast 2D renderer for interactive graphics.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://p5js.org">p5.js</a></b> 🆓🌐<br>
<sub>Creative coding for artists and designers.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://brm.io/matter-js/">Matter.js</a></b> 🆓🌐<br>
<sub>2D physics engine.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://roughjs.com">Rough.js</a></b> 🆓🌐<br>
<sub>Hand-drawn, sketchy graphics.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the 3D, WebGL & Creative Coding gallery](gallery/3d-webgl-creative-coding.md)</sub>

---

## Charts & Data Visualization

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://recharts.org">Recharts</a></b> 🆓⚛️<br>
<sub>Composable React charts (powers shadcn charts).</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://echarts.apache.org">Apache ECharts</a></b> 🆓🌐<br>
<sub>Powerful, interactive charting.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://d3js.org">D3</a></b> 🆓🌐<br>
<sub>Low-level data visualization toolkit.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://observablehq.com/plot/">Observable Plot</a></b> 🆓🌐<br>
<sub>Concise exploratory charts.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://airbnb.io/visx">visx</a></b> 🆓⚛️<br>
<sub>Low-level React visualization primitives.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://nivo.rocks">Nivo</a></b> 🆓⚛️<br>
<sub>Rich React chart components.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.chartjs.org">Chart.js</a></b> 🆓🌐<br>
<sub>Simple canvas charts.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://reactflow.dev">React Flow</a></b> 🆓💎⚛️🧡<br>
<sub>Node-based UIs, diagrams and editors.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Charts & Data Visualization gallery](gallery/charts-data-visualization.md)</sub>

---

## Icons

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://lucide.dev">Lucide</a></b> 🆓🌐<br>
<sub>Clean, consistent open-source icons (shadcn default).</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://heroicons.com">Heroicons</a></b> 🆓🌐<br>
<sub>From the Tailwind team.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://phosphoricons.com">Phosphor</a></b> 🆓🌐<br>
<sub>Flexible family with six weights.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://tabler.io/icons">Tabler Icons</a></b> 🆓🌐<br>
<sub>5000+ stroke icons.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://fonts.google.com/icons">Material Symbols</a></b> 🆓🌐<br>
<sub>Google's variable icon font.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://hugeicons.com">Hugeicons</a></b> 🆓💎🌐<br>
<sub>Large icon set with free tier.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://iconify.design">Iconify</a></b> 🆓🌐<br>
<sub>One API for 200k+ icons from many sets.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Icons gallery](gallery/icons.md)</sub>

---

## Fonts

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://fonts.google.com">Google Fonts</a></b> 🆓<br>
<sub>Free web fonts.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://fontsource.org">Fontsource</a></b> 🆓<br>
<sub>Self-host open-source fonts via npm.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://rsms.me/inter/">Inter</a></b> 🆓<br>
<sub>Typeface designed for screens.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://vercel.com/font">Geist</a></b> 🆓<br>
<sub>Vercel's sans and mono typeface.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Fonts gallery](gallery/fonts.md)</sub>

---

## Color, Tokens & Theming

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.designtokens.org">Design Tokens Community Group</a></b> 🆓<br>
<sub>W3C spec for interoperable tokens.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://styledictionary.com">Style Dictionary</a></b> 🆓<br>
<sub>Transform tokens into any platform's format.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://tokens.studio">Tokens Studio</a></b> 🆓💎<br>
<sub>Manage tokens in Figma and sync to code.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.radix-ui.com/colors">Radix Colors</a></b> 🆓<br>
<sub>Accessible color scales with dark mode.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://leonardocolor.io">Leonardo</a></b> 🆓<br>
<sub>Adobe's contrast-based color generator.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.realtimecolors.com">Realtime Colors</a></b> 🆓<br>
<sub>Preview palettes on a real layout.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://utopia.fyi">Utopia</a></b> 🆓<br>
<sub>Fluid type and space scales.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Color, Tokens & Theming gallery](gallery/color-tokens-theming.md)</sub>

---

## Specialized Interactive Components

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://cmdk.paco.me">cmdk</a></b> 🆓⚛️<br>
<sub>Fast command menu (⌘K).</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://sonner.emilkowal.ski">Sonner</a></b> 🆓⚛️<br>
<sub>Opinionated toast notifications.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://dndkit.com">dnd kit</a></b> 🆓⚛️<br>
<sub>Drag-and-drop toolkit for React.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://tiptap.dev">Tiptap</a></b> 🆓💎🌐<br>
<sub>Headless rich-text editor framework.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://lexical.dev">Lexical</a></b> 🆓🌐<br>
<sub>Meta's extensible text editor.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.ag-grid.com">AG Grid</a></b> 🆓💎🌐<br>
<sub>Enterprise data grid.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://fullcalendar.io">FullCalendar</a></b> 🆓💎🌐<br>
<sub>Calendar component.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://tldraw.dev">tldraw</a></b> 💎⚛️<br>
<sub>Infinite canvas SDK.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://github.com/excalidraw/excalidraw">Excalidraw</a></b> 🆓⚛️<br>
<sub>Embeddable hand-drawn whiteboard.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Specialized Interactive Components gallery](gallery/specialized-interactive-components.md)</sub>

---

## Tooling & Workflow

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://storybook.js.org">Storybook</a></b> 🆓🌐<br>
<sub>Build, document and test components in isolation.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://ladle.dev">Ladle</a></b> 🆓⚛️<br>
<sub>Fast Vite-based Storybook alternative.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.chromatic.com">Chromatic</a></b> 🆓💎<br>
<sub>Visual regression testing for Storybook.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.figma.com">Figma</a></b> 🆓💎<br>
<sub>Design and prototyping.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://penpot.app">Penpot</a></b> 🆓<br>
<sub>Open-source design tool.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.framer.com">Framer</a></b> 🆓💎<br>
<sub>Design and publish interactive sites.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.deque.com/axe/">axe DevTools</a></b> 🆓💎<br>
<sub>Accessibility testing.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Tooling & Workflow gallery](gallery/tooling-workflow.md)</sub>

---

## Native Web Platform APIs

Ship motion and interactivity with zero dependencies.

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API">View Transitions</a></b> <br>
<sub>Animated state and page transitions.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations">Scroll-driven animations</a></b> <br>
<sub>Link CSS animations to scroll position.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API">Web Animations API</a></b> <br>
<sub>JS control of CSS-grade animations.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://developer.mozilla.org/en-US/docs/Web/API/Popover_API">Popover API</a></b> <br>
<sub>Native popovers and menus.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning">CSS Anchor Positioning</a></b> <br>
<sub>Tether elements without JS.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries">Container Queries</a></b> <br>
<sub>Components that respond to their container.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion">`prefers-reduced-motion`</a></b> <br>
<sub>Always respect it.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Native Web Platform APIs gallery](gallery/native-web-platform-apis.md)</sub>

---

## Inspiration & Galleries

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://www.awwwards.com">Awwwards</a></b> <br>
<sub>Award-winning web design.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://godly.website">Godly</a></b> <br>
<sub>Astronomically good web design inspiration.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://mobbin.com">Mobbin</a></b> 💎<br>
<sub>Real-world app UI patterns.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://land-book.com">Land-book</a></b> <br>
<sub>Landing page gallery.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://tympanus.net/codrops/">Codrops</a></b> <br>
<sub>Creative frontend tutorials and demos.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://dribbble.com">Dribbble</a></b> <br>
<sub>Designer showcase.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Inspiration & Galleries gallery](gallery/inspiration-galleries.md)</sub>

---

## Learning Resources

<table>
<tr>
<td width="33%" valign="top">
<b><a href="https://animations.dev">animations.dev</a></b> 💎<br>
<sub>Emil Kowalski's course on web animation craft.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.joshwcomeau.com">Josh W. Comeau</a></b> <br>
<sub>Deep, interactive CSS and React articles.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.refactoringui.com">Refactoring UI</a></b> 💎<br>
<sub>Practical design tactics for developers.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://lawsofux.com">Laws of UX</a></b> <br>
<sub>Psychology principles for interface design.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.w3.org/WAI/ARIA/apg/">WAI-ARIA Authoring Practices</a></b> <br>
<sub>Accessible widget patterns.</sub>
</td>
<td width="33%" valign="top">
<b><a href="https://inclusive-components.design">Inclusive Components</a></b> <br>
<sub>Accessible component patterns explained.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://web.dev/learn/css">web.dev Learn CSS</a></b> <br>
<sub>Modern CSS from the Chrome team.</sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Learning Resources gallery](gallery/learning-resources.md)</sub>

---

## Contributing

Contributions are welcome — new libraries, better screenshots, and any reference you think helps people design (UI shots, animations, layouts, showcases). Read the [contribution guidelines](CONTRIBUTING.md) first.

## About the screenshots

Screenshots are captured automatically from each project's public website for reference and identification only. All trademarks, designs and content shown belong to their respective owners. If you maintain a project and want a screenshot changed or removed, [open an issue](../../issues/new) and it will be handled promptly.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

The list text is dedicated to the public domain under CC0. Screenshots and reference images remain the property of their owners.
