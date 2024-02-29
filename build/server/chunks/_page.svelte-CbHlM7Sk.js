import { c as create_ssr_component, b as escape, a as add_attribute, e as each, v as validate_component, d as compute_rest_props, g as getContext, f as spread, h as escape_attribute_value, i as escape_object } from './ssr-Dgr_2g6T.js';
import './client-CjdeEz1m.js';
import { s as space, i as imageLinks } from './index4-DC-ktQND.js';
import './exports-DuWZopOC.js';

const Trash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["weight", "color", "size", "mirrored"]);
  const { weight: ctxWeight, color: ctxColor, size: ctxSize, mirrored: ctxMirrored, ...restCtx } = getContext("iconCtx") || {};
  let { weight = ctxWeight ?? "regular" } = $$props;
  let { color = ctxColor ?? "currentColor" } = $$props;
  let { size = ctxSize ?? "1em" } = $$props;
  let { mirrored = ctxMirrored || false } = $$props;
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.mirrored === void 0 && $$bindings.mirrored && mirrored !== void 0)
    $$bindings.mirrored(mirrored);
  return `  <svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { fill: escape_attribute_value(color) },
      {
        transform: escape_attribute_value(mirrored ? "scale(-1, 1)" : void 0)
      },
      { viewBox: "0 0 256 256" },
      escape_object(restCtx),
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"></path>` : `${weight === "duotone" ? `<path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z" opacity="0.2"></path><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>` : `${weight === "fill" ? `<path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path>` : `${weight === "light" ? `<path d="M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"></path>` : `${weight === "regular" ? `<path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>` : `${weight === "thin" ? `<path d="M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const css = {
  code: ".hide-scrollbar.svelte-16lkunu::-webkit-scrollbar-track{display:none}.hide-scrollbar.svelte-16lkunu::-webkit-scrollbar{display:none}.hide-scrollbar.svelte-16lkunu::-webkit-scrollbar-thumb{display:none}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imgSrc;
  let currentAlfIndex = 0;
  const alf_urls = imageLinks;
  let formData = { pointPerson: "", emails: [{ value: "" }] };
  $$result.css.add(css);
  imgSrc = alf_urls[currentAlfIndex];
  return `${$$result.head += `<!-- HEAD_svelte-1vyajiz_START -->${$$result.title = `<title>Register | AWSCC-PUP Manila-Photobooth App</title>`, ""}<!-- HEAD_svelte-1vyajiz_END -->`, ""}  <div class="h-[90svh] flex justify-center items-center bg-cover bg-center bg-no-repeat relative" style="${"background-image: url(" + escape(space, true) + ")"}"><div class="absolute inset-0 bg-base-300 opacity-20 h-[90svh]"></div> <div class="flex relative"><img${add_attribute("src", imgSrc, 0)} alt="AWSCC PUP - Alf" class="h-[300px] absolute -left-10 bottom-0 z-[1] hidden lg:block sm:hidden md:h-[325px] xl:h-[350px]"> <div class="w-[280px] hidden lg:block sm:hidden md:w-[280px] xl:w-[315px]"></div> <div class="bg-base-100 bg-opacity-80 rounded-2xl shadow-md h-[70svh]"><form class="flex flex-col justify-between h-full"><div class="space-y-4 flex-1 h-full"><div class="space-y-2 bg-base-300 px-10 pt-10 pb-5 rounded-t-xl"><div data-svelte-h="svelte-1503avj">Point Person</div> <input type="text" placeholder="Name" class="input input-bordered input-base-200 w-full" required${add_attribute("value", formData.pointPerson, 0)}></div> <div class="hide-scrollbar h-[35svh] overflow-auto space-y-4 px-10 pb-5 svelte-16lkunu">${each(formData.emails, ({ value }, index) => {
    return `<div class="space-y-2"><div>Email Address ${escape(index + 1)}</div> <div class="flex space-x-2"><input type="email" placeholder="Email Address" class="input input-bordered input-base-100 w-60 sm:w-72 md:w-96 xl:w-96" required${add_attribute("value", formData.emails[index].value, 0)}> <button class="text-error hover:text-accent active:text-base-300 transition-all">${validate_component(Trash, "Trash").$$render($$result, { size: 20, weight: "fill" }, {}, {})} </button></div> </div>`;
  })}</div></div> <div class="flex space-x-2 justify-end px-10 pt-5 pb-10"><button class="btn btn-outline btn-secondary w-28" data-svelte-h="svelte-u4amzz">Add Email</button> <button class="btn btn-primary w-28" data-svelte-h="svelte-9a618q">Review</button></div></form></div></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-CbHlM7Sk.js.map
