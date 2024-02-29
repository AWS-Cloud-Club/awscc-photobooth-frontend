import { c as create_ssr_component, v as validate_component, b as escape } from './ssr-Dgr_2g6T.js';
import { b as spaceHero } from './index4-DC-ktQND.js';

const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${`<div class="hero min-h-screen bg-cover bg-center" style="${"background-image: url(" + escape(spaceHero, true) + ");"}" data-svelte-h="svelte-m293t4"><div class="hero-content text-center text-neutral-content"></div></div>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1k3xjja_START -->${$$result.title = `<title>AWSCC-PUP Manila-Photobooth App</title>`, ""}<!-- HEAD_svelte-1k3xjja_END -->`, ""} ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CODi26xK.js.map
