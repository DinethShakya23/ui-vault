# Awesome UI Stack [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> UI libraries, component kits, animation tools, icons, fonts, design systems and more, all in one place.

I started this list because I was tired of opening twenty tabs every time I needed a date picker or a scroll animation library, only to find half of them looked nothing like what I wanted. So every entry here has a screenshot of its site. If something catches your eye, click the thumbnail to see a bigger version in the **[Gallery](gallery/README.md)**, where some entries also have a few extra shots of their components or demos.

It's opinionated and it's not exhaustive. These are things I've used, tried, or bookmarked because they were good.

**What the icons mean:** 🆓 free / open source · 💎 paid or has a paid tier · ⚛️ React · 🟢 Vue · 🧡 Svelte · 🅰️ Angular · 🌐 works with anything

---

## Where I'd start

Not sure what to pick? Here's what I'd reach for depending on the project.

| Building... | I'd use |
|---|---|
| A modern SaaS app (React/Next.js) | Tailwind CSS + shadcn/ui (Radix or Base UI) + Motion + Lucide + Recharts |
| A flashy landing page | Tailwind + Magic UI / Aceternity UI / React Bits + GSAP ScrollTrigger + Lenis |
| A data-heavy enterprise dashboard | MUI or Ant Design + TanStack Table + ECharts |
| A design system that has to be accessible | React Aria Components + Style Dictionary + Storybook |
| Something 3D and immersive | React Three Fiber + Drei + GSAP + Theatre.js |
| A Vue / Nuxt app | Nuxt UI or shadcn-vue (Reka UI) + Motion for Vue + Inspira UI |
| A SvelteKit app | shadcn-svelte (Bits UI) + Svelte transitions + Threlte |
| No framework at all | Web Awesome + Open Props + GSAP |

## Contents

- [Where I'd start](#where-id-start)
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

---

## Design Systems

Big companies' design systems, most with real code you can install. Even if you never use one, they're some of the best free design education out there.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#m3-material-io"><img src="assets/thumbs/m3-material-io.webp" alt="Material Design 3 screenshot" width="100%"></a><br>
<b><a href="https://m3.material.io">Material Design 3</a></b> 🆓<br>
<sub>Google's design system with dynamic color and expressive motion.</sub>
<br><sub><a href="gallery/design-systems.md#m3-material-io">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#developer-apple-com-design-human-interface-guidelines"><img src="assets/thumbs/developer-apple-com-design-human-interface-guidelines.webp" alt="Apple Human Interface Guidelines screenshot" width="100%"></a><br>
<b><a href="https://developer.apple.com/design/human-interface-guidelines">Apple Human Interface Guidelines</a></b> 🆓<br>
<sub>Platform design guidance from Apple.</sub>
<br><sub><a href="gallery/design-systems.md#developer-apple-com-design-human-interface-guidelines">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#fluent2-microsoft-design"><img src="assets/thumbs/fluent2-microsoft-design.webp" alt="Fluent 2 screenshot" width="100%"></a><br>
<b><a href="https://fluent2.microsoft.design">Fluent 2</a></b> 🆓<br>
<sub>Microsoft's cross-platform design system.</sub>
<br><sub><a href="gallery/design-systems.md#fluent2-microsoft-design">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#carbondesignsystem-com"><img src="assets/thumbs/carbondesignsystem-com.webp" alt="Carbon screenshot" width="100%"></a><br>
<b><a href="https://carbondesignsystem.com">Carbon</a></b> 🆓<br>
<sub>IBM's open-source system for products and digital experiences.</sub>
<br><sub><a href="gallery/design-systems.md#carbondesignsystem-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#atlassian-design"><img src="assets/thumbs/atlassian-design.webp" alt="Atlassian Design System screenshot" width="100%"></a><br>
<b><a href="https://atlassian.design">Atlassian Design System</a></b> 🆓<br>
<sub>Foundations, tokens and components behind Jira and Confluence.</sub>
<br><sub><a href="gallery/design-systems.md#atlassian-design">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#primer-style"><img src="assets/thumbs/primer-style.webp" alt="Primer screenshot" width="100%"></a><br>
<b><a href="https://primer.style">Primer</a></b> 🆓<br>
<sub>GitHub's design system.</sub>
<br><sub><a href="gallery/design-systems.md#primer-style">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#ant-design"><img src="assets/thumbs/ant-design.webp" alt="Ant Design screenshot" width="100%"></a><br>
<b><a href="https://ant.design">Ant Design</a></b> 🆓<br>
<sub>Enterprise-class design language with a large React implementation.</sub>
<br><sub><a href="gallery/design-systems.md#ant-design">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#spectrum-adobe-com"><img src="assets/thumbs/spectrum-adobe-com.webp" alt="Spectrum screenshot" width="100%"></a><br>
<b><a href="https://spectrum.adobe.com">Spectrum</a></b> 🆓<br>
<sub>Adobe's design system (React Spectrum, Spectrum Web Components).</sub>
<br><sub><a href="gallery/design-systems.md#spectrum-adobe-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#vercel-com-geist"><img src="assets/thumbs/vercel-com-geist.webp" alt="Geist screenshot" width="100%"></a><br>
<b><a href="https://vercel.com/geist">Geist</a></b> 🆓<br>
<sub>Vercel's minimal design system and typeface.</sub>
<br><sub><a href="gallery/design-systems.md#vercel-com-geist">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#gestalt-pinterest-systems"><img src="assets/thumbs/gestalt-pinterest-systems.webp" alt="Gestalt screenshot" width="100%"></a><br>
<b><a href="https://gestalt.pinterest.systems">Gestalt</a></b> 🆓<br>
<sub>Pinterest's design system.</sub>
<br><sub><a href="gallery/design-systems.md#gestalt-pinterest-systems">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#baseweb-design"><img src="assets/thumbs/baseweb-design.webp" alt="Base Web screenshot" width="100%"></a><br>
<b><a href="https://baseweb.design">Base Web</a></b> 🆓<br>
<sub>Uber's design system.</sub>
<br><sub><a href="gallery/design-systems.md#baseweb-design">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#eui-elastic-co"><img src="assets/thumbs/eui-elastic-co.webp" alt="Elastic UI (EUI) screenshot" width="100%"></a><br>
<b><a href="https://eui.elastic.co">Elastic UI (EUI)</a></b> 🆓<br>
<sub>Elastic's design system for data-rich apps.</sub>
<br><sub><a href="gallery/design-systems.md#eui-elastic-co">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#lightningdesignsystem-com"><img src="assets/thumbs/lightningdesignsystem-com.webp" alt="Salesforce Lightning screenshot" width="100%"></a><br>
<b><a href="https://www.lightningdesignsystem.com">Salesforce Lightning</a></b> 🆓<br>
<sub>Enterprise system from Salesforce.</sub>
<br><sub><a href="gallery/design-systems.md#lightningdesignsystem-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#design-system-service-gov-uk"><img src="assets/thumbs/design-system-service-gov-uk.webp" alt="GOV.UK Design System screenshot" width="100%"></a><br>
<b><a href="https://design-system.service.gov.uk">GOV.UK Design System</a></b> 🆓<br>
<sub>Gold standard for accessible public-service UI.</sub>
<br><sub><a href="gallery/design-systems.md#design-system-service-gov-uk">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/design-systems.md#designsystem-digital-gov"><img src="assets/thumbs/designsystem-digital-gov.webp" alt="U.S. Web Design System screenshot" width="100%"></a><br>
<b><a href="https://designsystem.digital.gov">U.S. Web Design System</a></b> 🆓<br>
<sub>Accessible components for U.S. government sites.</sub>
<br><sub><a href="gallery/design-systems.md#designsystem-digital-gov">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Design Systems gallery](gallery/design-systems.md)</sub>

---

## Styling Foundations

How you actually write your CSS. Pick one of these first, everything else sits on top.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/styling-foundations.md#tailwindcss-com"><img src="assets/thumbs/tailwindcss-com.webp" alt="Tailwind CSS screenshot" width="100%"></a><br>
<b><a href="https://tailwindcss.com">Tailwind CSS</a></b> 🆓🌐<br>
<sub>Utility-first CSS framework; the base layer of most modern kits.</sub>
<br><sub><a href="gallery/styling-foundations.md#tailwindcss-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/styling-foundations.md#daisyui-com"><img src="assets/thumbs/daisyui-com.webp" alt="daisyUI screenshot" width="100%"></a><br>
<b><a href="https://daisyui.com">daisyUI</a></b> 🆓🌐<br>
<sub>Semantic component classes and themes on top of Tailwind.</sub>
<br><sub><a href="gallery/styling-foundations.md#daisyui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/styling-foundations.md#unocss-dev"><img src="assets/thumbs/unocss-dev.webp" alt="UnoCSS screenshot" width="100%"></a><br>
<b><a href="https://unocss.dev">UnoCSS</a></b> 🆓🌐<br>
<sub>Instant on-demand atomic CSS engine.</sub>
<br><sub><a href="gallery/styling-foundations.md#unocss-dev">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/styling-foundations.md#panda-css-com"><img src="assets/thumbs/panda-css-com.webp" alt="Panda CSS screenshot" width="100%"></a><br>
<b><a href="https://panda-css.com">Panda CSS</a></b> 🆓🌐<br>
<sub>Build-time CSS-in-JS with tokens and recipes.</sub>
<br><sub><a href="gallery/styling-foundations.md#panda-css-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/styling-foundations.md#stylexjs-com"><img src="assets/thumbs/stylexjs-com.webp" alt="StyleX screenshot" width="100%"></a><br>
<b><a href="https://stylexjs.com">StyleX</a></b> 🆓⚛️<br>
<sub>Meta's compile-time styling system.</sub>
<br><sub><a href="gallery/styling-foundations.md#stylexjs-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/styling-foundations.md#vanilla-extract-style"><img src="assets/thumbs/vanilla-extract-style.webp" alt="vanilla-extract screenshot" width="100%"></a><br>
<b><a href="https://vanilla-extract.style">vanilla-extract</a></b> 🆓🌐<br>
<sub>Zero-runtime, type-safe stylesheets in TypeScript.</sub>
<br><sub><a href="gallery/styling-foundations.md#vanilla-extract-style">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/styling-foundations.md#open-props-style"><img src="assets/thumbs/open-props-style.webp" alt="Open Props screenshot" width="100%"></a><br>
<b><a href="https://open-props.style">Open Props</a></b> 🆓🌐<br>
<sub>Supercharged CSS custom properties (sizes, easings, shadows).</sub>
<br><sub><a href="gallery/styling-foundations.md#open-props-style">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/styling-foundations.md#picocss-com"><img src="assets/thumbs/picocss-com.webp" alt="Pico CSS screenshot" width="100%"></a><br>
<b><a href="https://picocss.com">Pico CSS</a></b> 🆓🌐<br>
<sub>Minimal CSS for semantic HTML.</sub>
<br><sub><a href="gallery/styling-foundations.md#picocss-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/styling-foundations.md#getbootstrap-com"><img src="assets/thumbs/getbootstrap-com.webp" alt="Bootstrap screenshot" width="100%"></a><br>
<b><a href="https://getbootstrap.com">Bootstrap</a></b> 🆓🌐<br>
<sub>The classic responsive component framework.</sub>
<br><sub><a href="gallery/styling-foundations.md#getbootstrap-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/styling-foundations.md#bulma-io"><img src="assets/thumbs/bulma-io.webp" alt="Bulma screenshot" width="100%"></a><br>
<b><a href="https://bulma.io">Bulma</a></b> 🆓🌐<br>
<sub>Modern, Flexbox-based CSS framework.</sub>
<br><sub><a href="gallery/styling-foundations.md#bulma-io">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Styling Foundations gallery](gallery/styling-foundations.md)</sub>

---

## Headless Primitives

Accessible components with no styling at all. This is the layer you build your own design system on, and it saves you from getting keyboard and screen reader support wrong.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#radix-ui-com-primitives"><img src="assets/thumbs/radix-ui-com-primitives.webp" alt="Radix Primitives screenshot" width="100%"></a><br>
<b><a href="https://www.radix-ui.com/primitives">Radix Primitives</a></b> 🆓⚛️<br>
<sub>Accessible unstyled React primitives; the original foundation of shadcn/ui.</sub>
<br><sub><a href="gallery/headless-primitives.md#radix-ui-com-primitives">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#base-ui-com"><img src="assets/thumbs/base-ui-com.webp" alt="Base UI screenshot" width="100%"></a><br>
<b><a href="https://base-ui.com">Base UI</a></b> 🆓⚛️<br>
<sub>Unstyled components from the creators of Radix, Floating UI and MUI.</sub>
<br><sub><a href="gallery/headless-primitives.md#base-ui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#react-spectrum-adobe-com-react-aria"><img src="assets/thumbs/react-spectrum-adobe-com-react-aria.webp" alt="React Aria screenshot" width="100%"></a><br>
<b><a href="https://react-spectrum.adobe.com/react-aria/">React Aria</a></b> 🆓⚛️<br>
<sub>Adobe's hooks and components with best-in-class accessibility and i18n.</sub>
<br><sub><a href="gallery/headless-primitives.md#react-spectrum-adobe-com-react-aria">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#headlessui-com"><img src="assets/thumbs/headlessui-com.webp" alt="Headless UI screenshot" width="100%"></a><br>
<b><a href="https://headlessui.com">Headless UI</a></b> 🆓⚛️🟢<br>
<sub>Unstyled components from the Tailwind team (React &amp; Vue).</sub>
<br><sub><a href="gallery/headless-primitives.md#headlessui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#ark-ui-com"><img src="assets/thumbs/ark-ui-com.webp" alt="Ark UI screenshot" width="100%"></a><br>
<b><a href="https://ark-ui.com">Ark UI</a></b> 🆓🌐<br>
<sub>Headless components for React, Vue, Solid and Svelte, powered by Zag.</sub>
<br><sub><a href="gallery/headless-primitives.md#ark-ui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#zagjs-com"><img src="assets/thumbs/zagjs-com.webp" alt="Zag screenshot" width="100%"></a><br>
<b><a href="https://zagjs.com">Zag</a></b> 🆓🌐<br>
<sub>Framework-agnostic UI component state machines.</sub>
<br><sub><a href="gallery/headless-primitives.md#zagjs-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#ariakit-org"><img src="assets/thumbs/ariakit-org.webp" alt="Ariakit screenshot" width="100%"></a><br>
<b><a href="https://ariakit.org">Ariakit</a></b> 🆓⚛️<br>
<sub>Lightweight, accessible React primitives.</sub>
<br><sub><a href="gallery/headless-primitives.md#ariakit-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#reka-ui-com"><img src="assets/thumbs/reka-ui-com.webp" alt="Reka UI screenshot" width="100%"></a><br>
<b><a href="https://reka-ui.com">Reka UI</a></b> 🆓🟢<br>
<sub>Vue port of the Radix model (formerly Radix Vue).</sub>
<br><sub><a href="gallery/headless-primitives.md#reka-ui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#bits-ui-com"><img src="assets/thumbs/bits-ui-com.webp" alt="Bits UI screenshot" width="100%"></a><br>
<b><a href="https://bits-ui.com">Bits UI</a></b> 🆓🧡<br>
<sub>Headless components for Svelte.</sub>
<br><sub><a href="gallery/headless-primitives.md#bits-ui-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#melt-ui-com"><img src="assets/thumbs/melt-ui-com.webp" alt="Melt UI screenshot" width="100%"></a><br>
<b><a href="https://melt-ui.com">Melt UI</a></b> 🆓🧡<br>
<sub>Headless builders for Svelte.</sub>
<br><sub><a href="gallery/headless-primitives.md#melt-ui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#kobalte-dev"><img src="assets/thumbs/kobalte-dev.webp" alt="Kobalte screenshot" width="100%"></a><br>
<b><a href="https://kobalte.dev">Kobalte</a></b> 🆓<br>
<sub>Accessible headless components for SolidJS.</sub>
<br><sub><a href="gallery/headless-primitives.md#kobalte-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#floating-ui-com"><img src="assets/thumbs/floating-ui-com.webp" alt="Floating UI screenshot" width="100%"></a><br>
<b><a href="https://floating-ui.com">Floating UI</a></b> 🆓🌐<br>
<sub>Positioning engine for tooltips, popovers and dropdowns.</sub>
<br><sub><a href="gallery/headless-primitives.md#floating-ui-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/headless-primitives.md#tanstack-com-table"><img src="assets/thumbs/tanstack-com-table.webp" alt="TanStack Table / Virtual / Form screenshot" width="100%"></a><br>
<b><a href="https://tanstack.com/table">TanStack Table</a> / <a href="https://tanstack.com/virtual">Virtual</a> / <a href="https://tanstack.com/form">Form</a></b> 🆓🌐<br>
<sub>Headless table, virtualization and form logic.</sub>
<br><sub><a href="gallery/headless-primitives.md#tanstack-com-table">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Headless Primitives gallery](gallery/headless-primitives.md)</sub>

---

## Component Libraries

Ready-made components, grouped by framework. This is the biggest section, because there are a lot of good ones.

### React

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#mui-com"><img src="assets/thumbs/mui-com.webp" alt="MUI (Material UI) screenshot" width="100%"></a><br>
<b><a href="https://mui.com">MUI (Material UI)</a></b> 🆓💎⚛️<br>
<sub>Comprehensive Material Design components plus MUI X data grid and pickers.</sub>
<br><sub><a href="gallery/component-libraries.md#mui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#mantine-dev"><img src="assets/thumbs/mantine-dev.webp" alt="Mantine screenshot" width="100%"></a><br>
<b><a href="https://mantine.dev">Mantine</a></b> 🆓⚛️<br>
<sub>100+ components and hooks with excellent DX.</sub>
<br><sub><a href="gallery/component-libraries.md#mantine-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#chakra-ui-com"><img src="assets/thumbs/chakra-ui-com.webp" alt="Chakra UI screenshot" width="100%"></a><br>
<b><a href="https://chakra-ui.com">Chakra UI</a></b> 🆓⚛️<br>
<sub>Accessible, themeable components (v3 built on Ark UI).</sub>
<br><sub><a href="gallery/component-libraries.md#chakra-ui-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#heroui-com"><img src="assets/thumbs/heroui-com.webp" alt="HeroUI screenshot" width="100%"></a><br>
<b><a href="https://heroui.com">HeroUI</a></b> 🆓⚛️<br>
<sub>Beautiful Tailwind-based components (formerly NextUI).</sub>
<br><sub><a href="gallery/component-libraries.md#heroui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#ant-design"><img src="assets/thumbs/ant-design.webp" alt="Ant Design screenshot" width="100%"></a><br>
<b><a href="https://ant.design">Ant Design</a></b> 🆓⚛️<br>
<sub>Enterprise component suite.</sub>
<br><sub><a href="gallery/component-libraries.md#ant-design">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#react-spectrum-adobe-com"><img src="assets/thumbs/react-spectrum-adobe-com.webp" alt="React Spectrum screenshot" width="100%"></a><br>
<b><a href="https://react-spectrum.adobe.com">React Spectrum</a></b> 🆓⚛️<br>
<sub>Adobe's styled implementation of Spectrum.</sub>
<br><sub><a href="gallery/component-libraries.md#react-spectrum-adobe-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#react-fluentui-dev"><img src="assets/thumbs/react-fluentui-dev.webp" alt="Fluent UI React screenshot" width="100%"></a><br>
<b><a href="https://react.fluentui.dev">Fluent UI React</a></b> 🆓⚛️<br>
<sub>Microsoft's Fluent 2 components.</sub>
<br><sub><a href="gallery/component-libraries.md#react-fluentui-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#blueprintjs-com"><img src="assets/thumbs/blueprintjs-com.webp" alt="Blueprint screenshot" width="100%"></a><br>
<b><a href="https://blueprintjs.com">Blueprint</a></b> 🆓⚛️<br>
<sub>Toolkit for complex, data-dense desktop-style apps.</sub>
<br><sub><a href="gallery/component-libraries.md#blueprintjs-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#primereact-org"><img src="assets/thumbs/primereact-org.webp" alt="PrimeReact screenshot" width="100%"></a><br>
<b><a href="https://primereact.org">PrimeReact</a></b> 🆓💎⚛️<br>
<sub>90+ components with themes and a styled/unstyled mode.</sub>
<br><sub><a href="gallery/component-libraries.md#primereact-org">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#park-ui-com"><img src="assets/thumbs/park-ui-com.webp" alt="Park UI screenshot" width="100%"></a><br>
<b><a href="https://park-ui.com">Park UI</a></b> 🆓⚛️<br>
<sub>Styled components built on Ark UI and Panda/Tailwind.</sub>
<br><sub><a href="gallery/component-libraries.md#park-ui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#tremor-so"><img src="assets/thumbs/tremor-so.webp" alt="Tremor screenshot" width="100%"></a><br>
<b><a href="https://tremor.so">Tremor</a></b> 🆓⚛️<br>
<sub>Components for dashboards and analytics.</sub>
<br><sub><a href="gallery/component-libraries.md#tremor-so">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#untitledui-com-react"><img src="assets/thumbs/untitledui-com-react.webp" alt="Untitled UI React screenshot" width="100%"></a><br>
<b><a href="https://www.untitledui.com/react">Untitled UI React</a></b> 🆓💎⚛️<br>
<sub>Large Figma kit with matching React components.</sub>
<br><sub><a href="gallery/component-libraries.md#untitledui-com-react">🖼️ View larger</a></sub>
</td>
</tr>
</table>

### Copy-Paste & Registries (shadcn ecosystem)

You don't install these, you copy the code into your project and it's yours to change.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#ui-shadcn-com"><img src="assets/thumbs/ui-shadcn-com.webp" alt="shadcn/ui screenshot" width="100%"></a><br>
<b><a href="https://ui.shadcn.com">shadcn/ui</a></b> 🆓⚛️<br>
<sub>The copy-paste standard; Tailwind + Radix or Base UI, with a registry/CLI ecosystem.</sub>
<br><sub><a href="gallery/component-libraries.md#ui-shadcn-com">🖼️ 3 references</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#kibo-ui-com"><img src="assets/thumbs/kibo-ui-com.webp" alt="Kibo UI screenshot" width="100%"></a><br>
<b><a href="https://www.kibo-ui.com">Kibo UI</a></b> 🆓⚛️<br>
<sub>Advanced composable shadcn components (kanban, gantt, editor…).</sub>
<br><sub><a href="gallery/component-libraries.md#kibo-ui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#cult-ui-com"><img src="assets/thumbs/cult-ui-com.webp" alt="Cult UI screenshot" width="100%"></a><br>
<b><a href="https://www.cult-ui.com">Cult UI</a></b> 🆓⚛️<br>
<sub>Stylish shadcn-compatible components and blocks.</sub>
<br><sub><a href="gallery/component-libraries.md#cult-ui-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#originui-com"><img src="assets/thumbs/originui-com.webp" alt="Origin UI screenshot" width="100%"></a><br>
<b><a href="https://originui.com">Origin UI</a></b> 🆓⚛️<br>
<sub>Large collection of shadcn-style components.</sub>
<br><sub><a href="gallery/component-libraries.md#originui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#21st-dev"><img src="assets/thumbs/21st-dev.webp" alt="21st.dev screenshot" width="100%"></a><br>
<b><a href="https://21st.dev">21st.dev</a></b> 🆓⚛️<br>
<sub>Community registry of shadcn-compatible components.</sub>
<br><sub><a href="gallery/component-libraries.md#21st-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#tweakcn-com"><img src="assets/thumbs/tweakcn-com.webp" alt="tweakcn screenshot" width="100%"></a><br>
<b><a href="https://tweakcn.com">tweakcn</a></b> 🆓⚛️<br>
<sub>Visual theme editor for shadcn/ui.</sub>
<br><sub><a href="gallery/component-libraries.md#tweakcn-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://tailwindcss.com/plus">Tailwind Plus</a></b> 💎⚛️🟢<br>
<sub>Official Tailwind UI blocks, templates and Catalyst kit.</sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#flowbite-com"><img src="assets/thumbs/flowbite-com.webp" alt="Flowbite screenshot" width="100%"></a><br>
<b><a href="https://flowbite.com">Flowbite</a></b> 🆓💎🌐<br>
<sub>Tailwind components with React, Vue, Svelte and Angular ports.</sub>
<br><sub><a href="gallery/component-libraries.md#flowbite-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#preline-co"><img src="assets/thumbs/preline-co.webp" alt="Preline UI screenshot" width="100%"></a><br>
<b><a href="https://preline.co">Preline UI</a></b> 🆓💎🌐<br>
<sub>Open-source Tailwind components and blocks.</sub>
<br><sub><a href="gallery/component-libraries.md#preline-co">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#hyperui-dev"><img src="assets/thumbs/hyperui-dev.webp" alt="HyperUI screenshot" width="100%"></a><br>
<b><a href="https://www.hyperui.dev">HyperUI</a></b> 🆓🌐<br>
<sub>Free Tailwind component snippets.</sub>
<br><sub><a href="gallery/component-libraries.md#hyperui-dev">🖼️ View larger</a></sub>
</td>
</tr>
</table>

### Animated Component Collections

Components that are mostly about the animation. Great for landing pages, easy to overdo.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#magicui-design"><img src="assets/thumbs/magicui-design.webp" alt="Magic UI screenshot" width="100%"></a><br>
<b><a href="https://magicui.design">Magic UI</a></b> 🆓💎⚛️<br>
<sub>150+ animated components (marquees, bento grids, shimmer buttons) for shadcn projects.</sub>
<br><sub><a href="gallery/component-libraries.md#magicui-design">🖼️ 2 references</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#ui-aceternity-com"><img src="assets/thumbs/ui-aceternity-com.webp" alt="Aceternity UI screenshot" width="100%"></a><br>
<b><a href="https://ui.aceternity.com">Aceternity UI</a></b> 🆓💎⚛️<br>
<sub>Dramatic effects: 3D cards, spotlights, animated backgrounds.</sub>
<br><sub><a href="gallery/component-libraries.md#ui-aceternity-com">🖼️ 2 references</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#reactbits-dev"><img src="assets/thumbs/reactbits-dev.webp" alt="React Bits screenshot" width="100%"></a><br>
<b><a href="https://reactbits.dev">React Bits</a></b> 🆓⚛️<br>
<sub>110+ animated text, background and interactive components; no single engine lock-in.</sub>
<br><sub><a href="gallery/component-libraries.md#reactbits-dev">🖼️ 2 references</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#motion-primitives-com"><img src="assets/thumbs/motion-primitives-com.webp" alt="Motion Primitives screenshot" width="100%"></a><br>
<b><a href="https://motion-primitives.com">Motion Primitives</a></b> 🆓⚛️<br>
<sub>Animated building blocks built on Motion.</sub>
<br><sub><a href="gallery/component-libraries.md#motion-primitives-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#animate-ui-com"><img src="assets/thumbs/animate-ui-com.webp" alt="Animate UI screenshot" width="100%"></a><br>
<b><a href="https://animate-ui.com">Animate UI</a></b> 🆓⚛️<br>
<sub>Animated shadcn-style components.</sub>
<br><sub><a href="gallery/component-libraries.md#animate-ui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#animata-design"><img src="assets/thumbs/animata-design.webp" alt="Animata screenshot" width="100%"></a><br>
<b><a href="https://animata.design">Animata</a></b> 🆓⚛️<br>
<sub>Hand-crafted interaction animations.</sub>
<br><sub><a href="gallery/component-libraries.md#animata-design">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#eldoraui-site"><img src="assets/thumbs/eldoraui-site.webp" alt="Eldora UI screenshot" width="100%"></a><br>
<b><a href="https://www.eldoraui.site">Eldora UI</a></b> 🆓⚛️<br>
<sub>Free animated component set.</sub>
<br><sub><a href="gallery/component-libraries.md#eldoraui-site">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#kokonutui-com"><img src="assets/thumbs/kokonutui-com.webp" alt="Kokonut UI screenshot" width="100%"></a><br>
<b><a href="https://kokonutui.com">Kokonut UI</a></b> 🆓💎⚛️<br>
<sub>Modern animated components and blocks.</sub>
<br><sub><a href="gallery/component-libraries.md#kokonutui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#skiper-ui-com"><img src="assets/thumbs/skiper-ui-com.webp" alt="Skiper UI screenshot" width="100%"></a><br>
<b><a href="https://skiper-ui.com">Skiper UI</a></b> 🆓💎⚛️<br>
<sub>Polished interaction components.</sub>
<br><sub><a href="gallery/component-libraries.md#skiper-ui-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#inspira-ui-com"><img src="assets/thumbs/inspira-ui-com.webp" alt="Inspira UI screenshot" width="100%"></a><br>
<b><a href="https://inspira-ui.com">Inspira UI</a></b> 🆓🟢<br>
<sub>Animated components for Vue/Nuxt.</sub>
<br><sub><a href="gallery/component-libraries.md#inspira-ui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#uiverse-io"><img src="assets/thumbs/uiverse-io.webp" alt="Uiverse screenshot" width="100%"></a><br>
<b><a href="https://uiverse.io">Uiverse</a></b> 🆓🌐<br>
<sub>Community-made pure CSS/Tailwind elements.</sub>
<br><sub><a href="gallery/component-libraries.md#uiverse-io">🖼️ View larger</a></sub>
</td>
</tr>
</table>

### Vue

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#ui-nuxt-com"><img src="assets/thumbs/ui-nuxt-com.webp" alt="Nuxt UI screenshot" width="100%"></a><br>
<b><a href="https://ui.nuxt.com">Nuxt UI</a></b> 🆓🟢<br>
<sub>Tailwind + Reka UI components for Vue and Nuxt.</sub>
<br><sub><a href="gallery/component-libraries.md#ui-nuxt-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#shadcn-vue-com"><img src="assets/thumbs/shadcn-vue-com.webp" alt="shadcn-vue screenshot" width="100%"></a><br>
<b><a href="https://www.shadcn-vue.com">shadcn-vue</a></b> 🆓🟢<br>
<sub>Vue port of shadcn/ui.</sub>
<br><sub><a href="gallery/component-libraries.md#shadcn-vue-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#vuetifyjs-com"><img src="assets/thumbs/vuetifyjs-com.webp" alt="Vuetify screenshot" width="100%"></a><br>
<b><a href="https://vuetifyjs.com">Vuetify</a></b> 🆓🟢<br>
<sub>Material Design component framework.</sub>
<br><sub><a href="gallery/component-libraries.md#vuetifyjs-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#primevue-org"><img src="assets/thumbs/primevue-org.webp" alt="PrimeVue screenshot" width="100%"></a><br>
<b><a href="https://primevue.org">PrimeVue</a></b> 🆓🟢<br>
<sub>Rich component suite with styled/unstyled modes.</sub>
<br><sub><a href="gallery/component-libraries.md#primevue-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#naiveui-com"><img src="assets/thumbs/naiveui-com.webp" alt="Naive UI screenshot" width="100%"></a><br>
<b><a href="https://www.naiveui.com">Naive UI</a></b> 🆓🟢<br>
<sub>Themeable TypeScript components.</sub>
<br><sub><a href="gallery/component-libraries.md#naiveui-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#element-plus-org"><img src="assets/thumbs/element-plus-org.webp" alt="Element Plus screenshot" width="100%"></a><br>
<b><a href="https://element-plus.org">Element Plus</a></b> 🆓🟢<br>
<sub>Vue 3 desktop UI library.</sub>
<br><sub><a href="gallery/component-libraries.md#element-plus-org">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#quasar-dev"><img src="assets/thumbs/quasar-dev.webp" alt="Quasar screenshot" width="100%"></a><br>
<b><a href="https://quasar.dev">Quasar</a></b> 🆓🟢<br>
<sub>Build web, mobile and desktop from one Vue codebase.</sub>
<br><sub><a href="gallery/component-libraries.md#quasar-dev">🖼️ View larger</a></sub>
</td>
</tr>
</table>

### Svelte

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#shadcn-svelte-com"><img src="assets/thumbs/shadcn-svelte-com.webp" alt="shadcn-svelte screenshot" width="100%"></a><br>
<b><a href="https://www.shadcn-svelte.com">shadcn-svelte</a></b> 🆓🧡<br>
<sub>Svelte port of shadcn/ui built on Bits UI.</sub>
<br><sub><a href="gallery/component-libraries.md#shadcn-svelte-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#skeleton-dev"><img src="assets/thumbs/skeleton-dev.webp" alt="Skeleton screenshot" width="100%"></a><br>
<b><a href="https://www.skeleton.dev">Skeleton</a></b> 🆓🧡<br>
<sub>Adaptive design system for Svelte + Tailwind.</sub>
<br><sub><a href="gallery/component-libraries.md#skeleton-dev">🖼️ View larger</a></sub>
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
<a href="gallery/component-libraries.md#material-angular-dev"><img src="assets/thumbs/material-angular-dev.webp" alt="Angular Material screenshot" width="100%"></a><br>
<b><a href="https://material.angular.dev">Angular Material</a></b> 🆓🅰️<br>
<sub>Official Material components and CDK.</sub>
<br><sub><a href="gallery/component-libraries.md#material-angular-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#spartan-ng"><img src="assets/thumbs/spartan-ng.webp" alt="Spartan screenshot" width="100%"></a><br>
<b><a href="https://www.spartan.ng">Spartan</a></b> 🆓🅰️<br>
<sub>shadcn-style copy-paste components for Angular.</sub>
<br><sub><a href="gallery/component-libraries.md#spartan-ng">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#primeng-org"><img src="assets/thumbs/primeng-org.webp" alt="PrimeNG screenshot" width="100%"></a><br>
<b><a href="https://primeng.org">PrimeNG</a></b> 🆓🅰️<br>
<sub>Large Angular component suite.</sub>
<br><sub><a href="gallery/component-libraries.md#primeng-org">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#ng-ant-design"><img src="assets/thumbs/ng-ant-design.webp" alt="NG-ZORRO screenshot" width="100%"></a><br>
<b><a href="https://ng.ant.design">NG-ZORRO</a></b> 🆓🅰️<br>
<sub>Ant Design for Angular.</sub>
<br><sub><a href="gallery/component-libraries.md#ng-ant-design">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#taiga-ui-dev"><img src="assets/thumbs/taiga-ui-dev.webp" alt="Taiga UI screenshot" width="100%"></a><br>
<b><a href="https://taiga-ui.dev">Taiga UI</a></b> 🆓🅰️<br>
<sub>Modular Angular UI kit.</sub>
<br><sub><a href="gallery/component-libraries.md#taiga-ui-dev">🖼️ View larger</a></sub>
</td>
</tr>
</table>

### Solid

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#kobalte-dev"><img src="assets/thumbs/kobalte-dev.webp" alt="Kobalte screenshot" width="100%"></a><br>
<b><a href="https://kobalte.dev">Kobalte</a></b> <br>
<sub>Headless primitives (see above).</sub>
<br><sub><a href="gallery/component-libraries.md#kobalte-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#ark-ui-com"><img src="assets/thumbs/ark-ui-com.webp" alt="Ark UI for Solid screenshot" width="100%"></a><br>
<b><a href="https://ark-ui.com">Ark UI for Solid</a></b> 🆓<br>
<sub>Headless components with Solid bindings.</sub>
<br><sub><a href="gallery/component-libraries.md#ark-ui-com">🖼️ View larger</a></sub>
</td>
</tr>
</table>

### Web Components

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#webawesome-com"><img src="assets/thumbs/webawesome-com.webp" alt="Web Awesome screenshot" width="100%"></a><br>
<b><a href="https://webawesome.com">Web Awesome</a></b> 🆓💎🌐<br>
<sub>Successor to Shoelace; framework-agnostic components.</sub>
<br><sub><a href="gallery/component-libraries.md#webawesome-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#lit-dev"><img src="assets/thumbs/lit-dev.webp" alt="Lit screenshot" width="100%"></a><br>
<b><a href="https://lit.dev">Lit</a></b> 🆓🌐<br>
<sub>Simple, fast library for building web components.</sub>
<br><sub><a href="gallery/component-libraries.md#lit-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#opensource-adobe-com-spectrum-web-components"><img src="assets/thumbs/opensource-adobe-com-spectrum-web-components.webp" alt="Spectrum Web Components screenshot" width="100%"></a><br>
<b><a href="https://opensource.adobe.com/spectrum-web-components/">Spectrum Web Components</a></b> 🆓🌐<br>
<sub>Adobe Spectrum as web components.</sub>
<br><sub><a href="gallery/component-libraries.md#opensource-adobe-com-spectrum-web-components">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/component-libraries.md#ionicframework-com"><img src="assets/thumbs/ionicframework-com.webp" alt="Ionic screenshot" width="100%"></a><br>
<b><a href="https://ionicframework.com">Ionic</a></b> 🆓🌐<br>
<sub>Mobile-first UI components for the web.</sub>
<br><sub><a href="gallery/component-libraries.md#ionicframework-com">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Component Libraries gallery](gallery/component-libraries.md)</sub>

---

## Motion & Animation

For when things need to move. Most projects only need one animation engine, so don't install three.

### Animation Engines

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#motion-dev"><img src="assets/thumbs/motion-dev.webp" alt="Motion screenshot" width="100%"></a><br>
<b><a href="https://motion.dev">Motion</a></b> 🆓🌐<br>
<sub>Formerly Framer Motion; hybrid WAAPI/JS engine for React, Vue and vanilla JS (layout, gestures, springs).</sub>
<br><sub><a href="gallery/motion-animation.md#motion-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#gsap-com"><img src="assets/thumbs/gsap-com.webp" alt="GSAP screenshot" width="100%"></a><br>
<b><a href="https://gsap.com">GSAP</a></b> 🆓🌐<br>
<sub>Industry-standard timeline engine; all plugins (ScrollTrigger, SplitText, MorphSVG, Flip) now free.</sub>
<br><sub><a href="gallery/motion-animation.md#gsap-com">🖼️ 2 references</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#animejs-com"><img src="assets/thumbs/animejs-com.webp" alt="Anime.js screenshot" width="100%"></a><br>
<b><a href="https://animejs.com">Anime.js</a></b> 🆓🌐<br>
<sub>Lightweight, modular engine with timelines, draggables and scroll observers.</sub>
<br><sub><a href="gallery/motion-animation.md#animejs-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#react-spring-dev"><img src="assets/thumbs/react-spring-dev.webp" alt="React Spring screenshot" width="100%"></a><br>
<b><a href="https://www.react-spring.dev">React Spring</a></b> 🆓⚛️<br>
<sub>Spring-physics animation for React.</sub>
<br><sub><a href="gallery/motion-animation.md#react-spring-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#auto-animate-formkit-com"><img src="assets/thumbs/auto-animate-formkit-com.webp" alt="AutoAnimate screenshot" width="100%"></a><br>
<b><a href="https://auto-animate.formkit.com">AutoAnimate</a></b> 🆓🌐<br>
<sub>Zero-config, drop-in list/layout animations.</sub>
<br><sub><a href="gallery/motion-animation.md#auto-animate-formkit-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#theatrejs-com"><img src="assets/thumbs/theatrejs-com.webp" alt="Theatre.js screenshot" width="100%"></a><br>
<b><a href="https://www.theatrejs.com">Theatre.js</a></b> 🆓🌐<br>
<sub>Visual timeline editor for motion design in code (great with Three.js).</sub>
<br><sub><a href="gallery/motion-animation.md#theatrejs-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#svelte-dev-docs-svelte-transition"><img src="assets/thumbs/svelte-dev-docs-svelte-transition.webp" alt="Svelte Motion &amp; Transitions screenshot" width="100%"></a><br>
<b><a href="https://svelte.dev/docs/svelte/transition">Svelte Motion &amp; Transitions</a></b> 🆓🧡<br>
<sub>Built-in Svelte transitions, tweens and springs.</sub>
<br><sub><a href="gallery/motion-animation.md#svelte-dev-docs-svelte-transition">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#motion-dev-docs-vue"><img src="assets/thumbs/motion-dev-docs-vue.webp" alt="Motion for Vue screenshot" width="100%"></a><br>
<b><a href="https://motion.dev/docs/vue">Motion for Vue</a></b> 🆓🟢<br>
<sub>Motion's Vue API.</sub>
<br><sub><a href="gallery/motion-animation.md#motion-dev-docs-vue">🖼️ View larger</a></sub>
</td>
</tr>
</table>

### Scroll & Smooth Scrolling

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#gsap-com-docs-v3-plugins-scrolltrigger"><img src="assets/thumbs/gsap-com-docs-v3-plugins-scrolltrigger.webp" alt="GSAP ScrollTrigger screenshot" width="100%"></a><br>
<b><a href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/">GSAP ScrollTrigger</a></b> 🆓🌐<br>
<sub>Scroll-linked and pinned animations.</sub>
<br><sub><a href="gallery/motion-animation.md#gsap-com-docs-v3-plugins-scrolltrigger">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#lenis-darkroom-engineering"><img src="assets/thumbs/lenis-darkroom-engineering.webp" alt="Lenis screenshot" width="100%"></a><br>
<b><a href="https://lenis.darkroom.engineering">Lenis</a></b> 🆓🌐<br>
<sub>Lightweight smooth scrolling.</sub>
<br><sub><a href="gallery/motion-animation.md#lenis-darkroom-engineering">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#scroll-locomotive-ca"><img src="assets/thumbs/scroll-locomotive-ca.webp" alt="Locomotive Scroll screenshot" width="100%"></a><br>
<b><a href="https://scroll.locomotive.ca">Locomotive Scroll</a></b> 🆓🌐<br>
<sub>Scroll detection with parallax.</sub>
<br><sub><a href="gallery/motion-animation.md#scroll-locomotive-ca">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#michalsnik-github-io-aos"><img src="assets/thumbs/michalsnik-github-io-aos.webp" alt="AOS screenshot" width="100%"></a><br>
<b><a href="https://michalsnik.github.io/aos/">AOS</a></b> 🆓🌐<br>
<sub>Animate-on-scroll classic.</sub>
<br><sub><a href="gallery/motion-animation.md#michalsnik-github-io-aos">🖼️ View larger</a></sub>
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
<a href="gallery/motion-animation.md#barba-js-org"><img src="assets/thumbs/barba-js-org.webp" alt="Barba.js screenshot" width="100%"></a><br>
<b><a href="https://barba.js.org">Barba.js</a></b> 🆓🌐<br>
<sub>Fluid transitions for multi-page sites.</sub>
<br><sub><a href="gallery/motion-animation.md#barba-js-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#swup-js-org"><img src="assets/thumbs/swup-js-org.webp" alt="Swup screenshot" width="100%"></a><br>
<b><a href="https://swup.js.org">Swup</a></b> 🆓🌐<br>
<sub>Page transition library with plugins.</sub>
<br><sub><a href="gallery/motion-animation.md#swup-js-org">🖼️ View larger</a></sub>
</td>
</tr>
</table>

### Designer-Authored Animation

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#rive-app"><img src="assets/thumbs/rive-app.webp" alt="Rive screenshot" width="100%"></a><br>
<b><a href="https://rive.app">Rive</a></b> 🆓💎🌐<br>
<sub>Interactive, state-machine-driven vector animations with tiny runtimes.</sub>
<br><sub><a href="gallery/motion-animation.md#rive-app">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#airbnb-io-lottie"><img src="assets/thumbs/airbnb-io-lottie.webp" alt="Lottie screenshot" width="100%"></a><br>
<b><a href="https://airbnb.io/lottie/">Lottie</a></b> 🆓🌐<br>
<sub>Render After Effects animations exported as JSON.</sub>
<br><sub><a href="gallery/motion-animation.md#airbnb-io-lottie">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#lottiefiles-com"><img src="assets/thumbs/lottiefiles-com.webp" alt="LottieFiles / dotLottie screenshot" width="100%"></a><br>
<b><a href="https://lottiefiles.com">LottieFiles</a></b> 🆓💎🌐<br>
<sub>Lottie tooling, marketplace and dotLottie players.</sub>
<br><sub><a href="gallery/motion-animation.md#lottiefiles-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#spline-design"><img src="assets/thumbs/spline-design.webp" alt="Spline screenshot" width="100%"></a><br>
<b><a href="https://spline.design">Spline</a></b> 🆓💎🌐<br>
<sub>Collaborative 3D design tool with web embeds.</sub>
<br><sub><a href="gallery/motion-animation.md#spline-design">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#unicorn-studio"><img src="assets/thumbs/unicorn-studio.webp" alt="Unicorn Studio screenshot" width="100%"></a><br>
<b><a href="https://www.unicorn.studio">Unicorn Studio</a></b> 🆓💎🌐<br>
<sub>No-code WebGL effects and backgrounds.</sub>
<br><sub><a href="gallery/motion-animation.md#unicorn-studio">🖼️ View larger</a></sub>
</td>
</tr>
</table>

### Text & Number Effects

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#gsap-com-docs-v3-plugins-splittext"><img src="assets/thumbs/gsap-com-docs-v3-plugins-splittext.webp" alt="GSAP SplitText screenshot" width="100%"></a><br>
<b><a href="https://gsap.com/docs/v3/Plugins/SplitText/">GSAP SplitText</a></b> 🆓🌐<br>
<sub>Split text into chars/words/lines for animation.</sub>
<br><sub><a href="gallery/motion-animation.md#gsap-com-docs-v3-plugins-splittext">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#splitting-js-org"><img src="assets/thumbs/splitting-js-org.webp" alt="Splitting.js screenshot" width="100%"></a><br>
<b><a href="https://splitting.js.org">Splitting.js</a></b> 🆓🌐<br>
<sub>CSS-variable-based text splitting.</sub>
<br><sub><a href="gallery/motion-animation.md#splitting-js-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#number-flow-barvian-me"><img src="assets/thumbs/number-flow-barvian-me.webp" alt="NumberFlow screenshot" width="100%"></a><br>
<b><a href="https://number-flow.barvian.me">NumberFlow</a></b> 🆓🌐<br>
<sub>Animated number transitions.</sub>
<br><sub><a href="gallery/motion-animation.md#number-flow-barvian-me">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#github-com-mattboldt-typed-js"><img src="assets/thumbs/github-com-mattboldt-typed-js.webp" alt="Typed.js screenshot" width="100%"></a><br>
<b><a href="https://github.com/mattboldt/typed.js">Typed.js</a></b> 🆓🌐<br>
<sub>Typewriter effect.</sub>
<br><sub><a href="gallery/motion-animation.md#github-com-mattboldt-typed-js">🖼️ View larger</a></sub>
</td>
</tr>
</table>

### Carousels & Gestures

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#embla-carousel-com"><img src="assets/thumbs/embla-carousel-com.webp" alt="Embla Carousel screenshot" width="100%"></a><br>
<b><a href="https://www.embla-carousel.com">Embla Carousel</a></b> 🆓🌐<br>
<sub>Lightweight, extensible carousel engine.</sub>
<br><sub><a href="gallery/motion-animation.md#embla-carousel-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#swiperjs-com"><img src="assets/thumbs/swiperjs-com.webp" alt="Swiper screenshot" width="100%"></a><br>
<b><a href="https://swiperjs.com">Swiper</a></b> 🆓🌐<br>
<sub>Touch slider with many effects.</sub>
<br><sub><a href="gallery/motion-animation.md#swiperjs-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/motion-animation.md#use-gesture-netlify-app"><img src="assets/thumbs/use-gesture-netlify-app.webp" alt="@use-gesture screenshot" width="100%"></a><br>
<b><a href="https://use-gesture.netlify.app">@use-gesture</a></b> 🆓⚛️<br>
<sub>Drag, pinch, scroll and hover gestures.</sub>
<br><sub><a href="gallery/motion-animation.md#use-gesture-netlify-app">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Motion & Animation gallery](gallery/motion-animation.md)</sub>

---

## 3D, WebGL & Creative Coding

The fun stuff. Expect a learning curve.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#threejs-org"><img src="assets/thumbs/threejs-org.webp" alt="Three.js screenshot" width="100%"></a><br>
<b><a href="https://threejs.org">Three.js</a></b> 🆓🌐<br>
<sub>The standard 3D library for the web (WebGL &amp; WebGPU).</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#threejs-org">🖼️ 2 references</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#r3f-docs-pmnd-rs"><img src="assets/thumbs/r3f-docs-pmnd-rs.webp" alt="React Three Fiber screenshot" width="100%"></a><br>
<b><a href="https://r3f.docs.pmnd.rs">React Three Fiber</a></b> 🆓⚛️<br>
<sub>React renderer for Three.js.</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#r3f-docs-pmnd-rs">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#drei-docs-pmnd-rs"><img src="assets/thumbs/drei-docs-pmnd-rs.webp" alt="Drei screenshot" width="100%"></a><br>
<b><a href="https://drei.docs.pmnd.rs">Drei</a></b> 🆓⚛️<br>
<sub>Helpers and abstractions for R3F.</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#drei-docs-pmnd-rs">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#tresjs-org"><img src="assets/thumbs/tresjs-org.webp" alt="TresJS screenshot" width="100%"></a><br>
<b><a href="https://tresjs.org">TresJS</a></b> 🆓🟢<br>
<sub>Declarative Three.js for Vue.</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#tresjs-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#threlte-xyz"><img src="assets/thumbs/threlte-xyz.webp" alt="Threlte screenshot" width="100%"></a><br>
<b><a href="https://threlte.xyz">Threlte</a></b> 🆓🧡<br>
<sub>Three.js for Svelte.</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#threlte-xyz">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#babylonjs-com"><img src="assets/thumbs/babylonjs-com.webp" alt="Babylon.js screenshot" width="100%"></a><br>
<b><a href="https://www.babylonjs.com">Babylon.js</a></b> 🆓🌐<br>
<sub>Full-featured 3D engine.</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#babylonjs-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#playcanvas-com"><img src="assets/thumbs/playcanvas-com.webp" alt="PlayCanvas screenshot" width="100%"></a><br>
<b><a href="https://playcanvas.com">PlayCanvas</a></b> 🆓💎🌐<br>
<sub>WebGL/WebGPU engine and editor.</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#playcanvas-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#github-com-oframe-ogl"><img src="assets/thumbs/github-com-oframe-ogl.webp" alt="OGL screenshot" width="100%"></a><br>
<b><a href="https://github.com/oframe/ogl">OGL</a></b> 🆓🌐<br>
<sub>Minimal WebGL library.</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#github-com-oframe-ogl">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#pixijs-com"><img src="assets/thumbs/pixijs-com.webp" alt="PixiJS screenshot" width="100%"></a><br>
<b><a href="https://pixijs.com">PixiJS</a></b> 🆓🌐<br>
<sub>Fast 2D renderer for interactive graphics.</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#pixijs-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#p5js-org"><img src="assets/thumbs/p5js-org.webp" alt="p5.js screenshot" width="100%"></a><br>
<b><a href="https://p5js.org">p5.js</a></b> 🆓🌐<br>
<sub>Creative coding for artists and designers.</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#p5js-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#brm-io-matter-js"><img src="assets/thumbs/brm-io-matter-js.webp" alt="Matter.js screenshot" width="100%"></a><br>
<b><a href="https://brm.io/matter-js/">Matter.js</a></b> 🆓🌐<br>
<sub>2D physics engine.</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#brm-io-matter-js">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/3d-webgl-creative-coding.md#roughjs-com"><img src="assets/thumbs/roughjs-com.webp" alt="Rough.js screenshot" width="100%"></a><br>
<b><a href="https://roughjs.com">Rough.js</a></b> 🆓🌐<br>
<sub>Hand-drawn, sketchy graphics.</sub>
<br><sub><a href="gallery/3d-webgl-creative-coding.md#roughjs-com">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the 3D, WebGL & Creative Coding gallery](gallery/3d-webgl-creative-coding.md)</sub>

---

## Charts & Data Visualization

From "I need a bar chart by Friday" to fully custom visualizations.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/charts-data-visualization.md#recharts-org"><img src="assets/thumbs/recharts-org.webp" alt="Recharts screenshot" width="100%"></a><br>
<b><a href="https://recharts.org">Recharts</a></b> 🆓⚛️<br>
<sub>Composable React charts (powers shadcn charts).</sub>
<br><sub><a href="gallery/charts-data-visualization.md#recharts-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/charts-data-visualization.md#echarts-apache-org"><img src="assets/thumbs/echarts-apache-org.webp" alt="Apache ECharts screenshot" width="100%"></a><br>
<b><a href="https://echarts.apache.org">Apache ECharts</a></b> 🆓🌐<br>
<sub>Powerful, interactive charting.</sub>
<br><sub><a href="gallery/charts-data-visualization.md#echarts-apache-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/charts-data-visualization.md#d3js-org"><img src="assets/thumbs/d3js-org.webp" alt="D3 screenshot" width="100%"></a><br>
<b><a href="https://d3js.org">D3</a></b> 🆓🌐<br>
<sub>Low-level data visualization toolkit.</sub>
<br><sub><a href="gallery/charts-data-visualization.md#d3js-org">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<b><a href="https://observablehq.com/plot/">Observable Plot</a></b> 🆓🌐<br>
<sub>Concise exploratory charts.</sub>
</td>
<td width="33%" valign="top">
<a href="gallery/charts-data-visualization.md#airbnb-io-visx"><img src="assets/thumbs/airbnb-io-visx.webp" alt="visx screenshot" width="100%"></a><br>
<b><a href="https://airbnb.io/visx">visx</a></b> 🆓⚛️<br>
<sub>Low-level React visualization primitives.</sub>
<br><sub><a href="gallery/charts-data-visualization.md#airbnb-io-visx">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/charts-data-visualization.md#nivo-rocks"><img src="assets/thumbs/nivo-rocks.webp" alt="Nivo screenshot" width="100%"></a><br>
<b><a href="https://nivo.rocks">Nivo</a></b> 🆓⚛️<br>
<sub>Rich React chart components.</sub>
<br><sub><a href="gallery/charts-data-visualization.md#nivo-rocks">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/charts-data-visualization.md#chartjs-org"><img src="assets/thumbs/chartjs-org.webp" alt="Chart.js screenshot" width="100%"></a><br>
<b><a href="https://www.chartjs.org">Chart.js</a></b> 🆓🌐<br>
<sub>Simple canvas charts.</sub>
<br><sub><a href="gallery/charts-data-visualization.md#chartjs-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/charts-data-visualization.md#reactflow-dev"><img src="assets/thumbs/reactflow-dev.webp" alt="React Flow / Svelte Flow screenshot" width="100%"></a><br>
<b><a href="https://reactflow.dev">React Flow</a></b> 🆓💎⚛️🧡<br>
<sub>Node-based UIs, diagrams and editors.</sub>
<br><sub><a href="gallery/charts-data-visualization.md#reactflow-dev">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Charts & Data Visualization gallery](gallery/charts-data-visualization.md)</sub>

---

## Icons

Pick one set and stick with it. Mixing icon sets is the fastest way to make a UI look off.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/icons.md#lucide-dev"><img src="assets/thumbs/lucide-dev.webp" alt="Lucide screenshot" width="100%"></a><br>
<b><a href="https://lucide.dev">Lucide</a></b> 🆓🌐<br>
<sub>Clean, consistent open-source icons (shadcn default).</sub>
<br><sub><a href="gallery/icons.md#lucide-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/icons.md#heroicons-com"><img src="assets/thumbs/heroicons-com.webp" alt="Heroicons screenshot" width="100%"></a><br>
<b><a href="https://heroicons.com">Heroicons</a></b> 🆓🌐<br>
<sub>From the Tailwind team.</sub>
<br><sub><a href="gallery/icons.md#heroicons-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/icons.md#phosphoricons-com"><img src="assets/thumbs/phosphoricons-com.webp" alt="Phosphor screenshot" width="100%"></a><br>
<b><a href="https://phosphoricons.com">Phosphor</a></b> 🆓🌐<br>
<sub>Flexible family with six weights.</sub>
<br><sub><a href="gallery/icons.md#phosphoricons-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/icons.md#tabler-io-icons"><img src="assets/thumbs/tabler-io-icons.webp" alt="Tabler Icons screenshot" width="100%"></a><br>
<b><a href="https://tabler.io/icons">Tabler Icons</a></b> 🆓🌐<br>
<sub>5000+ stroke icons.</sub>
<br><sub><a href="gallery/icons.md#tabler-io-icons">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/icons.md#fonts-google-com-icons"><img src="assets/thumbs/fonts-google-com-icons.webp" alt="Material Symbols screenshot" width="100%"></a><br>
<b><a href="https://fonts.google.com/icons">Material Symbols</a></b> 🆓🌐<br>
<sub>Google's variable icon font.</sub>
<br><sub><a href="gallery/icons.md#fonts-google-com-icons">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/icons.md#hugeicons-com"><img src="assets/thumbs/hugeicons-com.webp" alt="Hugeicons screenshot" width="100%"></a><br>
<b><a href="https://hugeicons.com">Hugeicons</a></b> 🆓💎🌐<br>
<sub>Large icon set with free tier.</sub>
<br><sub><a href="gallery/icons.md#hugeicons-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/icons.md#iconify-design"><img src="assets/thumbs/iconify-design.webp" alt="Iconify screenshot" width="100%"></a><br>
<b><a href="https://iconify.design">Iconify</a></b> 🆓🌐<br>
<sub>One API for 200k+ icons from many sets.</sub>
<br><sub><a href="gallery/icons.md#iconify-design">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Icons gallery](gallery/icons.md)</sub>

---

## Fonts

Where I go to find and load fonts.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/fonts.md#fonts-google-com"><img src="assets/thumbs/fonts-google-com.webp" alt="Google Fonts screenshot" width="100%"></a><br>
<b><a href="https://fonts.google.com">Google Fonts</a></b> 🆓<br>
<sub>Free web fonts.</sub>
<br><sub><a href="gallery/fonts.md#fonts-google-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/fonts.md#fontsource-org"><img src="assets/thumbs/fontsource-org.webp" alt="Fontsource screenshot" width="100%"></a><br>
<b><a href="https://fontsource.org">Fontsource</a></b> 🆓<br>
<sub>Self-host open-source fonts via npm.</sub>
<br><sub><a href="gallery/fonts.md#fontsource-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/fonts.md#rsms-me-inter"><img src="assets/thumbs/rsms-me-inter.webp" alt="Inter screenshot" width="100%"></a><br>
<b><a href="https://rsms.me/inter/">Inter</a></b> 🆓<br>
<sub>Typeface designed for screens.</sub>
<br><sub><a href="gallery/fonts.md#rsms-me-inter">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/fonts.md#vercel-com-font"><img src="assets/thumbs/vercel-com-font.webp" alt="Geist screenshot" width="100%"></a><br>
<b><a href="https://vercel.com/font">Geist</a></b> 🆓<br>
<sub>Vercel's sans and mono typeface.</sub>
<br><sub><a href="gallery/fonts.md#vercel-com-font">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Fonts gallery](gallery/fonts.md)</sub>

---

## Color, Tokens & Theming

Palettes, design tokens and tools for getting light and dark mode right.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/color-tokens-theming.md#designtokens-org"><img src="assets/thumbs/designtokens-org.webp" alt="Design Tokens Community Group screenshot" width="100%"></a><br>
<b><a href="https://www.designtokens.org">Design Tokens Community Group</a></b> 🆓<br>
<sub>W3C spec for interoperable tokens.</sub>
<br><sub><a href="gallery/color-tokens-theming.md#designtokens-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/color-tokens-theming.md#styledictionary-com"><img src="assets/thumbs/styledictionary-com.webp" alt="Style Dictionary screenshot" width="100%"></a><br>
<b><a href="https://styledictionary.com">Style Dictionary</a></b> 🆓<br>
<sub>Transform tokens into any platform's format.</sub>
<br><sub><a href="gallery/color-tokens-theming.md#styledictionary-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/color-tokens-theming.md#tokens-studio"><img src="assets/thumbs/tokens-studio.webp" alt="Tokens Studio screenshot" width="100%"></a><br>
<b><a href="https://tokens.studio">Tokens Studio</a></b> 🆓💎<br>
<sub>Manage tokens in Figma and sync to code.</sub>
<br><sub><a href="gallery/color-tokens-theming.md#tokens-studio">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/color-tokens-theming.md#radix-ui-com-colors"><img src="assets/thumbs/radix-ui-com-colors.webp" alt="Radix Colors screenshot" width="100%"></a><br>
<b><a href="https://www.radix-ui.com/colors">Radix Colors</a></b> 🆓<br>
<sub>Accessible color scales with dark mode.</sub>
<br><sub><a href="gallery/color-tokens-theming.md#radix-ui-com-colors">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/color-tokens-theming.md#leonardocolor-io"><img src="assets/thumbs/leonardocolor-io.webp" alt="Leonardo screenshot" width="100%"></a><br>
<b><a href="https://leonardocolor.io">Leonardo</a></b> 🆓<br>
<sub>Adobe's contrast-based color generator.</sub>
<br><sub><a href="gallery/color-tokens-theming.md#leonardocolor-io">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/color-tokens-theming.md#realtimecolors-com"><img src="assets/thumbs/realtimecolors-com.webp" alt="Realtime Colors screenshot" width="100%"></a><br>
<b><a href="https://www.realtimecolors.com">Realtime Colors</a></b> 🆓<br>
<sub>Preview palettes on a real layout.</sub>
<br><sub><a href="gallery/color-tokens-theming.md#realtimecolors-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/color-tokens-theming.md#utopia-fyi"><img src="assets/thumbs/utopia-fyi.webp" alt="Utopia screenshot" width="100%"></a><br>
<b><a href="https://utopia.fyi">Utopia</a></b> 🆓<br>
<sub>Fluid type and space scales.</sub>
<br><sub><a href="gallery/color-tokens-theming.md#utopia-fyi">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Color, Tokens & Theming gallery](gallery/color-tokens-theming.md)</sub>

---

## Specialized Interactive Components

The hard components you really don't want to build yourself: data grids, editors, calendars, canvases.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/specialized-interactive-components.md#cmdk-paco-me"><img src="assets/thumbs/cmdk-paco-me.webp" alt="cmdk screenshot" width="100%"></a><br>
<b><a href="https://cmdk.paco.me">cmdk</a></b> 🆓⚛️<br>
<sub>Fast command menu (⌘K).</sub>
<br><sub><a href="gallery/specialized-interactive-components.md#cmdk-paco-me">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/specialized-interactive-components.md#sonner-emilkowal-ski"><img src="assets/thumbs/sonner-emilkowal-ski.webp" alt="Sonner screenshot" width="100%"></a><br>
<b><a href="https://sonner.emilkowal.ski">Sonner</a></b> 🆓⚛️<br>
<sub>Opinionated toast notifications.</sub>
<br><sub><a href="gallery/specialized-interactive-components.md#sonner-emilkowal-ski">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/specialized-interactive-components.md#dndkit-com"><img src="assets/thumbs/dndkit-com.webp" alt="dnd kit screenshot" width="100%"></a><br>
<b><a href="https://dndkit.com">dnd kit</a></b> 🆓⚛️<br>
<sub>Drag-and-drop toolkit for React.</sub>
<br><sub><a href="gallery/specialized-interactive-components.md#dndkit-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/specialized-interactive-components.md#tiptap-dev"><img src="assets/thumbs/tiptap-dev.webp" alt="Tiptap screenshot" width="100%"></a><br>
<b><a href="https://tiptap.dev">Tiptap</a></b> 🆓💎🌐<br>
<sub>Headless rich-text editor framework.</sub>
<br><sub><a href="gallery/specialized-interactive-components.md#tiptap-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/specialized-interactive-components.md#lexical-dev"><img src="assets/thumbs/lexical-dev.webp" alt="Lexical screenshot" width="100%"></a><br>
<b><a href="https://lexical.dev">Lexical</a></b> 🆓🌐<br>
<sub>Meta's extensible text editor.</sub>
<br><sub><a href="gallery/specialized-interactive-components.md#lexical-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.ag-grid.com">AG Grid</a></b> 🆓💎🌐<br>
<sub>Enterprise data grid.</sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/specialized-interactive-components.md#fullcalendar-io"><img src="assets/thumbs/fullcalendar-io.webp" alt="FullCalendar screenshot" width="100%"></a><br>
<b><a href="https://fullcalendar.io">FullCalendar</a></b> 🆓💎🌐<br>
<sub>Calendar component.</sub>
<br><sub><a href="gallery/specialized-interactive-components.md#fullcalendar-io">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/specialized-interactive-components.md#tldraw-dev"><img src="assets/thumbs/tldraw-dev.webp" alt="tldraw screenshot" width="100%"></a><br>
<b><a href="https://tldraw.dev">tldraw</a></b> 💎⚛️<br>
<sub>Infinite canvas SDK.</sub>
<br><sub><a href="gallery/specialized-interactive-components.md#tldraw-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/specialized-interactive-components.md#github-com-excalidraw-excalidraw"><img src="assets/thumbs/github-com-excalidraw-excalidraw.webp" alt="Excalidraw screenshot" width="100%"></a><br>
<b><a href="https://github.com/excalidraw/excalidraw">Excalidraw</a></b> 🆓⚛️<br>
<sub>Embeddable hand-drawn whiteboard.</sub>
<br><sub><a href="gallery/specialized-interactive-components.md#github-com-excalidraw-excalidraw">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Specialized Interactive Components gallery](gallery/specialized-interactive-components.md)</sub>

---

## Tooling & Workflow

Not UI libraries exactly, but they make building and documenting UI a lot less painful.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/tooling-workflow.md#storybook-js-org"><img src="assets/thumbs/storybook-js-org.webp" alt="Storybook screenshot" width="100%"></a><br>
<b><a href="https://storybook.js.org">Storybook</a></b> 🆓🌐<br>
<sub>Build, document and test components in isolation.</sub>
<br><sub><a href="gallery/tooling-workflow.md#storybook-js-org">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/tooling-workflow.md#ladle-dev"><img src="assets/thumbs/ladle-dev.webp" alt="Ladle screenshot" width="100%"></a><br>
<b><a href="https://ladle.dev">Ladle</a></b> 🆓⚛️<br>
<sub>Fast Vite-based Storybook alternative.</sub>
<br><sub><a href="gallery/tooling-workflow.md#ladle-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/tooling-workflow.md#chromatic-com"><img src="assets/thumbs/chromatic-com.webp" alt="Chromatic screenshot" width="100%"></a><br>
<b><a href="https://www.chromatic.com">Chromatic</a></b> 🆓💎<br>
<sub>Visual regression testing for Storybook.</sub>
<br><sub><a href="gallery/tooling-workflow.md#chromatic-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/tooling-workflow.md#figma-com"><img src="assets/thumbs/figma-com.webp" alt="Figma screenshot" width="100%"></a><br>
<b><a href="https://www.figma.com">Figma</a></b> 🆓💎<br>
<sub>Design and prototyping.</sub>
<br><sub><a href="gallery/tooling-workflow.md#figma-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/tooling-workflow.md#penpot-app"><img src="assets/thumbs/penpot-app.webp" alt="Penpot screenshot" width="100%"></a><br>
<b><a href="https://penpot.app">Penpot</a></b> 🆓<br>
<sub>Open-source design tool.</sub>
<br><sub><a href="gallery/tooling-workflow.md#penpot-app">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/tooling-workflow.md#framer-com"><img src="assets/thumbs/framer-com.webp" alt="Framer screenshot" width="100%"></a><br>
<b><a href="https://www.framer.com">Framer</a></b> 🆓💎<br>
<sub>Design and publish interactive sites.</sub>
<br><sub><a href="gallery/tooling-workflow.md#framer-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/tooling-workflow.md#deque-com-axe"><img src="assets/thumbs/deque-com-axe.webp" alt="axe DevTools screenshot" width="100%"></a><br>
<b><a href="https://www.deque.com/axe/">axe DevTools</a></b> 🆓💎<br>
<sub>Accessibility testing.</sub>
<br><sub><a href="gallery/tooling-workflow.md#deque-com-axe">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Tooling & Workflow gallery](gallery/tooling-workflow.md)</sub>

---

## Native Web Platform APIs

You might not need a library at all. Browsers can do a lot of this on their own now.

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

When I'm stuck on a design, I scroll through these for a while.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/inspiration-galleries.md#awwwards-com"><img src="assets/thumbs/awwwards-com.webp" alt="Awwwards screenshot" width="100%"></a><br>
<b><a href="https://www.awwwards.com">Awwwards</a></b> <br>
<sub>Award-winning web design.</sub>
<br><sub><a href="gallery/inspiration-galleries.md#awwwards-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/inspiration-galleries.md#godly-website"><img src="assets/thumbs/godly-website.webp" alt="Godly screenshot" width="100%"></a><br>
<b><a href="https://godly.website">Godly</a></b> <br>
<sub>Astronomically good web design inspiration.</sub>
<br><sub><a href="gallery/inspiration-galleries.md#godly-website">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/inspiration-galleries.md#mobbin-com"><img src="assets/thumbs/mobbin-com.webp" alt="Mobbin screenshot" width="100%"></a><br>
<b><a href="https://mobbin.com">Mobbin</a></b> 💎<br>
<sub>Real-world app UI patterns.</sub>
<br><sub><a href="gallery/inspiration-galleries.md#mobbin-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/inspiration-galleries.md#land-book-com"><img src="assets/thumbs/land-book-com.webp" alt="Land-book screenshot" width="100%"></a><br>
<b><a href="https://land-book.com">Land-book</a></b> <br>
<sub>Landing page gallery.</sub>
<br><sub><a href="gallery/inspiration-galleries.md#land-book-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/inspiration-galleries.md#tympanus-net-codrops"><img src="assets/thumbs/tympanus-net-codrops.webp" alt="Codrops screenshot" width="100%"></a><br>
<b><a href="https://tympanus.net/codrops/">Codrops</a></b> <br>
<sub>Creative frontend tutorials and demos.</sub>
<br><sub><a href="gallery/inspiration-galleries.md#tympanus-net-codrops">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/inspiration-galleries.md#dribbble-com"><img src="assets/thumbs/dribbble-com.webp" alt="Dribbble screenshot" width="100%"></a><br>
<b><a href="https://dribbble.com">Dribbble</a></b> <br>
<sub>Designer showcase.</sub>
<br><sub><a href="gallery/inspiration-galleries.md#dribbble-com">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Inspiration & Galleries gallery](gallery/inspiration-galleries.md)</sub>

---

## Learning Resources

Sites and people I've learned the most from.

<table>
<tr>
<td width="33%" valign="top">
<a href="gallery/learning-resources.md#animations-dev"><img src="assets/thumbs/animations-dev.webp" alt="animations.dev screenshot" width="100%"></a><br>
<b><a href="https://animations.dev">animations.dev</a></b> 💎<br>
<sub>Emil Kowalski's course on web animation craft.</sub>
<br><sub><a href="gallery/learning-resources.md#animations-dev">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/learning-resources.md#joshwcomeau-com"><img src="assets/thumbs/joshwcomeau-com.webp" alt="Josh W. Comeau screenshot" width="100%"></a><br>
<b><a href="https://www.joshwcomeau.com">Josh W. Comeau</a></b> <br>
<sub>Deep, interactive CSS and React articles.</sub>
<br><sub><a href="gallery/learning-resources.md#joshwcomeau-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<a href="gallery/learning-resources.md#refactoringui-com"><img src="assets/thumbs/refactoringui-com.webp" alt="Refactoring UI screenshot" width="100%"></a><br>
<b><a href="https://www.refactoringui.com">Refactoring UI</a></b> 💎<br>
<sub>Practical design tactics for developers.</sub>
<br><sub><a href="gallery/learning-resources.md#refactoringui-com">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/learning-resources.md#lawsofux-com"><img src="assets/thumbs/lawsofux-com.webp" alt="Laws of UX screenshot" width="100%"></a><br>
<b><a href="https://lawsofux.com">Laws of UX</a></b> <br>
<sub>Psychology principles for interface design.</sub>
<br><sub><a href="gallery/learning-resources.md#lawsofux-com">🖼️ View larger</a></sub>
</td>
<td width="33%" valign="top">
<b><a href="https://www.w3.org/WAI/ARIA/apg/">WAI-ARIA Authoring Practices</a></b> <br>
<sub>Accessible widget patterns.</sub>
</td>
<td width="33%" valign="top">
<a href="gallery/learning-resources.md#inclusive-components-design"><img src="assets/thumbs/inclusive-components-design.webp" alt="Inclusive Components screenshot" width="100%"></a><br>
<b><a href="https://inclusive-components.design">Inclusive Components</a></b> <br>
<sub>Accessible component patterns explained.</sub>
<br><sub><a href="gallery/learning-resources.md#inclusive-components-design">🖼️ View larger</a></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top">
<a href="gallery/learning-resources.md#web-dev-learn-css"><img src="assets/thumbs/web-dev-learn-css.webp" alt="web.dev Learn CSS screenshot" width="100%"></a><br>
<b><a href="https://web.dev/learn/css">web.dev Learn CSS</a></b> <br>
<sub>Modern CSS from the Chrome team.</sub>
<br><sub><a href="gallery/learning-resources.md#web-dev-learn-css">🖼️ View larger</a></sub>
</td>
</tr>
</table>

<sub>[🖼️ Open the Learning Resources gallery](gallery/learning-resources.md)</sub>

---

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

The list itself is public domain (CC0), so use it however you like. The screenshots belong to the people who made those sites.
