import { c as create_ssr_component, j as subscribe, b as escape, a as add_attribute, g as getContext } from './ssr-Dgr_2g6T.js';
import './client-CjdeEz1m.js';
import { s as space, a as alfHuhu } from './index4-DC-ktQND.js';
import './exports-DuWZopOC.js';

const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css = {
  code: "@keyframes svelte-1hbzs6p-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes svelte-1hbzs6p-spin-shrink{0%{transform:scale(1) rotate(0deg);opacity:1}100%{transform:scale(0) rotate(360deg);opacity:0}}.spin-shrink.svelte-1hbzs6p{animation:svelte-1hbzs6p-spin-shrink 3s linear forwards}.fade-in.svelte-1hbzs6p{opacity:0;animation:svelte-1hbzs6p-fade-in 1s ease-in-out 3s forwards}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="h-[90svh] flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat relative px-20" style="${"background-image:url(" + escape(space, true) + ")"}"><div class="absolute inset-0 bg-base-300 opacity-20 h-[90svh]"></div> <img${add_attribute("src", alfHuhu, 0)} alt="Sad Alf" class="spin-shrink h-auto w-[350px] svelte-1hbzs6p"> <div class="fade-in flex flex-col justify-center items-center absolute w-full h-full svelte-1hbzs6p"><span class="text-8xl text-[#DDDDDD]">${escape($page.status)}</span> <span class="text-6xl font-bold text-[#DDDDDD]">${escape($page.error.message.toUpperCase())}</span></div> </div>`;
});

export { Error$1 as default };
//# sourceMappingURL=_error.svelte-C9Ga696h.js.map
