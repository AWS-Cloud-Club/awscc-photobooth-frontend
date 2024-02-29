import { c as create_ssr_component, b as escape, v as validate_component, e as each } from './ssr-Dgr_2g6T.js';
import './client-CjdeEz1m.js';
import { s as space } from './index4-DC-ktQND.js';
import { U as User, E as Envelope } from './User-B86XktMH.js';
import './exports-DuWZopOC.js';

const css = {
  code: ".hide-scrollbar.svelte-16lkunu::-webkit-scrollbar-track{display:none}.hide-scrollbar.svelte-16lkunu::-webkit-scrollbar{display:none}.hide-scrollbar.svelte-16lkunu::-webkit-scrollbar-thumb{display:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formData = localStorage.getItem("formData");
  let payload = formData ? JSON.parse(formData) : {};
  let emails = payload.emails ? payload.emails.map((email) => email.value) : [];
  let pointPerson = payload.pointPerson ? payload.pointPerson : "Not Available";
  $$result.css.add(css);
  return `${``} <div class="h-[90svh] flex justify-center items-center bg-cover bg-center bg-no-repeat relative text-sm md:text-xl lg:text-xl" style="${"background-image: url(" + escape(space, true) + ")"}"><div class="absolute inset-0 bg-base-300 opacity-20 h-[90svh]"></div> <div class="flex flex-col justify-between bg-opacity-80 h-[70svh] w-[85svw] xl:w-[50svw] md:w-[70svw] sm:w-[80svw] rounded-xl bg-base-100 relative"><div class="rounded-t-xl bg-base-300 p-10 mb-5 flex space-x-2 items-center"><span>${validate_component(User, "User").$$render($$result, { weight: "fill", size: 18 }, {}, {})}</span> <span data-svelte-h="svelte-1ds0u9">Point Person:</span> <span class="text-accent font-semibold">${escape(pointPerson)}</span></div> <div class="hide-scrollbar space-y-3 overflow-y-auto h-full px-10 pb-5 text-sm md:text-xl lg:text-xl svelte-16lkunu"><div class="flex space-x-2 items-center text-lg"><span>${validate_component(Envelope, "Envelope").$$render($$result, { weight: "fill", size: 20 }, {}, {})}</span> <span data-svelte-h="svelte-t9rgbb">Emails:</span></div> <div class="flex flex-col space-y-3">${each(emails, (email) => {
    return `<div class="hide-scrollbar overflow-x-auto rounded-xl w-full bg-base-200 p-5 shadow svelte-16lkunu">${escape(email)}</div>`;
  })}</div></div> <div class="flex items-center justify-end px-9 pt-5 pb-9 space-x-2"><button class="btn btn-secondary btn-outline w-28" data-svelte-h="svelte-1x7lyi1">Go Back</button> <button class="btn btn-primary w-28" data-svelte-h="svelte-1fvdzff">Submit</button></div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DdhZ4Vu2.js.map
