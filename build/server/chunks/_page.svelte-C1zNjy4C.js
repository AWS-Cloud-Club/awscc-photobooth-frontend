import { c as create_ssr_component, j as subscribe, v as validate_component, b as escape, e as each, a as add_attribute, d as compute_rest_props, g as getContext, f as spread, h as escape_attribute_value, i as escape_object } from './ssr-Dgr_2g6T.js';
import { E as Envelope, U as User } from './User-B86XktMH.js';
import { w as writable } from './index2-C8A3jX5j.js';
import { c as alfUFO, A as AWSCCLOGO } from './index4-DC-ktQND.js';

const ArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>` : `${weight === "duotone" ? `<path d="M216,128l-72,72V56Z" opacity="0.2"></path><path d="M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"></path>` : `${weight === "fill" ? `<path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"></path>` : `${weight === "light" ? `<path d="M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"></path>` : `${weight === "regular" ? `<path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>` : `${weight === "thin" ? `<path d="M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const ClipboardText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M172,156a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,156Zm-12-52H96a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm60-56V216a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V48A20,20,0,0,1,56,28H90.53a51.88,51.88,0,0,1,74.94,0H200A20,20,0,0,1,220,48ZM128,36a28,28,0,0,0-27.71,24h55.42A28,28,0,0,0,128,36Zm68,16H178.59A52.13,52.13,0,0,1,180,64v8a12,12,0,0,1-12,12H88A12,12,0,0,1,76,72V64a52.13,52.13,0,0,1,1.41-12H60V212H196Z"></path>` : `${weight === "duotone" ? `<path d="M208,48V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96a39.83,39.83,0,0,0-8,24v8h80V64a39.83,39.83,0,0,0-8-24h40A8,8,0,0,1,208,48Z" opacity="0.2"></path><path d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"></path>` : `${weight === "fill" ? `<path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path>` : `${weight === "light" ? `<path d="M166,152a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,152Zm-6-38H96a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm54-66V216a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V48A14,14,0,0,1,56,34H93.17a45.91,45.91,0,0,1,69.66,0H200A14,14,0,0,1,214,48ZM94,64v2h68V64a34,34,0,0,0-68,0ZM202,48a2,2,0,0,0-2-2H170.33A45.77,45.77,0,0,1,174,64v8a6,6,0,0,1-6,6H88a6,6,0,0,1-6-6V64a45.77,45.77,0,0,1,3.67-18H56a2,2,0,0,0-2,2V216a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2Z"></path>` : `${weight === "regular" ? `<path d="M168,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,152Zm-8-40H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm56-64V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V48A16,16,0,0,1,56,32H92.26a47.92,47.92,0,0,1,71.48,0H200A16,16,0,0,1,216,48ZM96,64h64a32,32,0,0,0-64,0ZM200,48H173.25A47.93,47.93,0,0,1,176,64v8a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V64a47.93,47.93,0,0,1,2.75-16H56V216H200Z"></path>` : `${weight === "thin" ? `<path d="M164,152a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,152Zm-4-36H96a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm52-68V216a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V48A12,12,0,0,1,56,36H94.08a44,44,0,0,1,67.84,0H200A12,12,0,0,1,212,48ZM92,64v4h72V64a36,36,0,0,0-72,0ZM204,48a4,4,0,0,0-4-4H167.17A43.71,43.71,0,0,1,172,64v8a4,4,0,0,1-4,4H88a4,4,0,0,1-4-4V64a43.71,43.71,0,0,1,4.83-20H56a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const Funnel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M234.29,47.91A20,20,0,0,0,216,36H40A20,20,0,0,0,25.2,69.45l.12.14L92,140.75V216a20,20,0,0,0,31.1,16.64l32-21.33A20,20,0,0,0,164,194.66V140.75l66.67-71.16.12-.14A20,20,0,0,0,234.29,47.91Zm-88.88,77.58A19.93,19.93,0,0,0,140,139.17v53.35l-24,16V139.17a19.93,19.93,0,0,0-5.41-13.68L49.23,60H206.77Z"></path>` : `${weight === "duotone" ? `<path d="M221.9,61.38l-67.74,72.31a8,8,0,0,0-2.16,5.47v55.49a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V139.16a8,8,0,0,0-2.16-5.47L34.1,61.38A8,8,0,0,1,40,48H216A8,8,0,0,1,221.9,61.38Z" opacity="0.2"></path><path d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm108.34,72.28A15.92,15.92,0,0,0,144,139.17v55.49L112,216V139.17a15.92,15.92,0,0,0-4.32-10.94L40,56H216Z"></path>` : `${weight === "fill" ? `<path d="M227.81,66.76l-.08.09L160,139.17v55.49A16,16,0,0,1,152.87,208l-32,21.34A16,16,0,0,1,96,216V139.17L28.27,66.85l-.08-.09A16,16,0,0,1,40,40H216a16,16,0,0,1,11.84,26.76Z"></path>` : `${weight === "light" ? `<path d="M228.77,50.34A13.8,13.8,0,0,0,216,42H40A14,14,0,0,0,29.67,65.42l.06.07L97.46,137.8a2,2,0,0,1,.54,1.37V216a14,14,0,0,0,21.77,11.64l32-21.33A14,14,0,0,0,158,194.66V139.17a2,2,0,0,1,.54-1.37l67.79-72.38A13.82,13.82,0,0,0,228.77,50.34Zm-11.26,6.94L149.78,129.6a13.93,13.93,0,0,0-3.78,9.57v55.49a2,2,0,0,1-.89,1.67l-32,21.33A2,2,0,0,1,110,216V139.17a14,14,0,0,0-3.78-9.58L38.53,57.32A2,2,0,0,1,40,54H216a1.9,1.9,0,0,1,1.83,1.19A1.86,1.86,0,0,1,217.51,57.28Z"></path>` : `${weight === "regular" ? `<path d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm108.34,72.28A15.92,15.92,0,0,0,144,139.17v55.49L112,216V139.17a15.92,15.92,0,0,0-4.32-10.94L40,56H216Z"></path>` : `${weight === "thin" ? `<path d="M227,51.15A11.85,11.85,0,0,0,216,44H40a12,12,0,0,0-8.88,20.07l.05.05,67.73,72.31a4,4,0,0,1,1.08,2.74V216a12,12,0,0,0,18.66,10l32-21.33a12,12,0,0,0,5.35-10V139.17a4,4,0,0,1,1.08-2.74l67.78-72.36A11.85,11.85,0,0,0,227,51.15Zm-8,7.5L151.24,131a12,12,0,0,0-3.24,8.21v55.49a4,4,0,0,1-1.78,3.33l-32,21.33A4,4,0,0,1,108,216V139.17a12,12,0,0,0-3.24-8.21L37.05,58.67A4,4,0,0,1,40,52H216a4,4,0,0,1,3,6.65Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${slots.default ? slots.default({}) : ``}<rect width="256" height="256" fill="none"></rect>${weight === "bold" ? `<path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path>` : `${weight === "duotone" ? `<path d="M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>` : `${weight === "fill" ? `<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>` : `${weight === "light" ? `<path d="M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"></path>` : `${weight === "regular" ? `<path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>` : `${weight === "thin" ? `<path d="M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"></path>` : `${escape((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`}`}`}`}`}`}</svg>`;
});
const TotalQueue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { totalQueue = 0 } = $$props;
  if ($$props.totalQueue === void 0 && $$bindings.totalQueue && totalQueue !== void 0)
    $$bindings.totalQueue(totalQueue);
  return `<div class="shadow w-full h-[57px] bg-base-200 rounded-lg flex items-center p-4 gap-2">${validate_component(User, "User").$$render($$result, { size: 20, weight: "fill" }, {}, {})} <p>Total Queue: ${escape(totalQueue)}</p></div>`;
});
const chosenRequest = writable(null);
const RequestButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { requestId = "" } = $$props;
  let { emails = [] } = $$props;
  let { status = "" } = $$props;
  let { pointPerson = "" } = $$props;
  chosenRequest.subscribe((value) => {
    value && value.requestId === requestId;
  });
  if ($$props.requestId === void 0 && $$bindings.requestId && requestId !== void 0)
    $$bindings.requestId(requestId);
  if ($$props.emails === void 0 && $$bindings.emails && emails !== void 0)
    $$bindings.emails(emails);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.pointPerson === void 0 && $$bindings.pointPerson && pointPerson !== void 0)
    $$bindings.pointPerson(pointPerson);
  return `<div><button class="grid grid-cols-4 grid-rows-6 gap-0 btn w-full h-[5rem]"><div class="row-span-2 row-start-3 flex justify-center items-center">${validate_component(ClipboardText, "ClipboardText").$$render($$result, { size: 46, weight: "fill" }, {}, {})}</div> <div class="col-span-5 row-span-2 row-start-2 col-start-2 flex items-start text-sm">Request:
        ${escape(pointPerson.length > 8 ? `${pointPerson.slice(0, 8)}...` : pointPerson)}</div> <div class="col-span-3 row-span-1 col-start-2 row-start-4 gap-2 items-center text-sm inline-flex">View Request ${validate_component(ArrowRight, "ArrowRight").$$render($$result, { size: 12 }, {}, {})}</div></button></div>`;
});
const QueueList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { requestQueue = [] } = $$props;
  if ($$props.requestQueue === void 0 && $$bindings.requestQueue && requestQueue !== void 0)
    $$bindings.requestQueue(requestQueue);
  return `<div class="w-full h-screen rounded-lg px-2 py-2 gap-3 flex flex-col">${requestQueue ? `${each(requestQueue, ({ requestId, emails, status, pointPerson, presigned }) => {
    return `${validate_component(RequestButton, "RequestButton").$$render(
      $$result,
      {
        requestId,
        emails,
        status,
        pointPerson,
        presigned
      },
      {},
      {}
    )}`;
  })}` : `<div data-svelte-h="svelte-194gxkm">Loading...</div>`}</div>`;
});
const Refetch = writable(false);
const DeleteButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { requestId = "" } = $$props;
  if ($$props.requestId === void 0 && $$bindings.requestId && requestId !== void 0)
    $$bindings.requestId(requestId);
  return `${``} <button class="btn btn-outline btn-error" data-svelte-h="svelte-ohhum5">Delete Request</button>`;
});
const css$2 = {
  code: ".hide-scrollbar.svelte-ucix3g::-webkit-scrollbar-track{display:none}.hide-scrollbar.svelte-ucix3g::-webkit-scrollbar{display:none}.hide-scrollbar.svelte-ucix3g::-webkit-scrollbar-thumb{display:none}",
  map: null
};
const EmailsContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { emails = [] } = $$props;
  if ($$props.emails === void 0 && $$bindings.emails && emails !== void 0)
    $$bindings.emails(emails);
  $$result.css.add(css$2);
  return `${each(emails, (email, index) => {
    return `<div class="flex bg-base-100 p-3 w-full space-x-2 shadow rounded-sm"><span class="text-xs bg-secondary text-center px-2 py-1 text-secondary-content rounded-full">${escape(index + 1)}</span> <span class="hide-scrollbar text-xs text-base-content flex flex-col justify-center overflow-clip overflow-x-auto svelte-ucix3g">${escape(email)}</span> </div>`;
  })}`;
});
const UploadStatus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { statusModal = "" } = $$props;
  let image = "";
  if ($$props.statusModal === void 0 && $$bindings.statusModal && statusModal !== void 0)
    $$bindings.statusModal(statusModal);
  {
    if (statusModal === "SUCCESS") {
      image = "https://awscc-photobooth.s3.ap-southeast-1.amazonaws.com/assets/Swag+Alf.png";
    } else if (statusModal === "ERROR") {
      image = "https://awscc-photobooth.s3.ap-southeast-1.amazonaws.com/assets/Aww+Alf.png";
    }
  }
  return `<div class="flex flex-col justify-center items-center space-y-3"><h3 class="font-bold text-lg text-base-content">${escape(statusModal)}</h3> <img${add_attribute("src", image, 0)} class="w-full h-auto" alt="status"></div>`;
});
const css$1 = {
  code: ".hide-scrollbar.svelte-16lkunu::-webkit-scrollbar-track{display:none}.hide-scrollbar.svelte-16lkunu::-webkit-scrollbar{display:none}.hide-scrollbar.svelte-16lkunu::-webkit-scrollbar-thumb{display:none}",
  map: null
};
const UploadContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { requestId = "" } = $$props;
  let { status = "" } = $$props;
  let selectedImages = [];
  if ($$props.requestId === void 0 && $$bindings.requestId && requestId !== void 0)
    $$bindings.requestId(requestId);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  $$result.css.add(css$1);
  return `${``} <div class="shadow flex flex-col items-center w-full p-10 rounded-lg bg-base-200 border-base-300 justify-between space-y-4"><div class="h-[40svh] flex flex-col justify-top space-y-4"><input type="file" multiple class="file-input file-input-bordered file-input-neutral w-full h-14 max-w-xs border"> <div class="hide-scrollbar overflow-y-auto h-full space-y-4 bg-base-300 p-4 rounded-lg shadow svelte-16lkunu">${selectedImages.length === 0 ? `<div class="flex flex-col justify-center w-full items-center h-full" data-svelte-h="svelte-5dy5vo"><img${add_attribute("src", alfUFO, 0)} class="w-[75px] h-auto " alt="AWSCC Pup Manila Logo"></div>` : `${each(selectedImages, (image, index) => {
    return `<div class="shadow flex items-center max-w-xs bg-neutral p-3 rounded-sm"${add_attribute("data-index", index, 0)}><div class="w-full overflow-clip text-xs text-neutral-content">${escape(image.name)}</div> <button class="text-error hover:text-base-100 active:text-accent transition-all">${validate_component(X, "X").$$render($$result, { size: 16 }, {}, {})}</button> </div>`;
  })}`}</div></div> <div><label for="my_modal_1" class="${"btn btn-outline btn-primary " + escape(
    selectedImages.length === 0 ? "pointer-events-none opacity-10" : "",
    true
  )}">Submit</label> <input type="checkbox" id="my_modal_1" class="modal-toggle"> <div class="modal" role="dialog"><div class="modal-box bg-base-200 w-72">${validate_component(UploadStatus, "UploadStatus").$$render($$result, { statusModal: status }, {}, {})}</div> <label class="modal-backdrop" for="my_modal_1" data-svelte-h="svelte-nugng1">Close</label></div></div> </div>`;
});
const DefaultPane = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full h-full flex flex-col justify-center items-center" data-svelte-h="svelte-20cx8u"><img${add_attribute("src", AWSCCLOGO, 0)} class="w-[250px] h-auto" alt="AWSCC Pup Manila Logo"></div>`;
});
function toSentenceCase$1(str) {
  if (!str)
    return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
const RequestDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { requestId = "" } = $$props;
  let { pointPerson = "" } = $$props;
  let { status = "" } = $$props;
  if ($$props.requestId === void 0 && $$bindings.requestId && requestId !== void 0)
    $$bindings.requestId(requestId);
  if ($$props.pointPerson === void 0 && $$bindings.pointPerson && pointPerson !== void 0)
    $$bindings.pointPerson(pointPerson);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `<div class="w-full bg-neutral h-[3rem] rounded-lg flex justify-evenly items-center text-neutral-content"><p>Request ID: <span class="font-semibold text-primary">${escape(requestId)}</span></p> <p>Point Person: <span class="font-semibold text-primary">${escape(pointPerson)}</span></p> <p>Status: <span class="font-semibold text-primary">${escape(toSentenceCase$1(status))}</span></p></div>`;
});
const chosenFilter = writable("all");
function toSentenceCase(str) {
  if (!str)
    return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
const Filter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selectedOption = "";
  let filterOptions = {
    "all": "All",
    "pending": "Pending",
    "sent": "Sent",
    "cancelled": "Cancelled"
  };
  return `<div class="dropdown dropdown-bottom dropdown-end"><div tabindex="0" role="button" class="btn flex min-w-min -space-x-1"><span>${validate_component(Funnel, "Funnel").$$render($$result, { size: 14, weight: "fill" }, {}, {})}</span> <span>${escape(toSentenceCase(selectedOption) || "Filter")}</span></div> <ul tabindex="0" class="dropdown-content mt-3 z-[1] menu shadow bg-base-100 text-base-content">${each(Object.keys(filterOptions), (option) => {
    return `<button><li><a>${escape(filterOptions[option])}</a></li> </button>`;
  })}</ul></div>`;
});
const css = {
  code: ".hide-scrollbar.svelte-16lkunu::-webkit-scrollbar-track{display:none}.hide-scrollbar.svelte-16lkunu::-webkit-scrollbar{display:none}.hide-scrollbar.svelte-16lkunu::-webkit-scrollbar-thumb{display:none}",
  map: null
};
function sortDataByRequestId(data) {
  return data.sort((a, b) => {
    const requestIdA = a.requestId;
    const requestIdB = b.requestId;
    return requestIdA.localeCompare(requestIdB);
  });
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $Refetch, $$unsubscribe_Refetch;
  $$unsubscribe_Refetch = subscribe(Refetch, (value) => $Refetch = value);
  let totalQueue = 0;
  let { requestQueue } = $$props;
  let data;
  let emails = [];
  let status = "";
  let pointPerson = "";
  let requestId = "";
  let showRequest = false;
  let isLoading = false;
  chosenFilter.subscribe((value) => {
  });
  chosenRequest.subscribe((value) => {
    if (value) {
      emails = value.emails;
      status = value.status;
      pointPerson = value.pointPerson;
      requestId = value.requestId;
      showRequest = true;
    } else {
      showRequest = false;
    }
  });
  Refetch.subscribe(async (value) => {
    if (value) {
      console.log("Refetching");
      await fetchRequests();
      getTotalQueue();
    }
    setTimeout(
      () => {
        Refetch.set(false);
      },
      200
    );
  });
  chosenFilter.subscribe((filter) => {
    switch (filter) {
      case "all":
        requestQueue = data;
        break;
      case "pending":
        requestQueue = data.filter((data2) => data2.status === "pending");
        break;
      case "sent":
        requestQueue = data.filter((data2) => data2.status === "sent");
        break;
      case "cancelled":
        requestQueue = data.filter((data2) => data2.status === "cancelled");
        break;
      default:
        requestQueue = data;
    }
  });
  async function fetchRequests() {
    isLoading = true;
    const response = await fetch("/api/getRequests");
    const result = await response.json();
    requestQueue = result.requests;
    requestQueue = sortDataByRequestId(requestQueue);
    data = result.requests;
    isLoading = false;
  }
  async function getTotalQueue() {
    totalQueue = requestQueue.filter((data2) => data2.status === "pending").length;
  }
  if ($$props.requestQueue === void 0 && $$bindings.requestQueue && requestQueue !== void 0)
    $$bindings.requestQueue(requestQueue);
  $$result.css.add(css);
  {
    if ($Refetch) {
      fetchRequests();
      getTotalQueue();
    }
  }
  $$unsubscribe_Refetch();
  return `${$$result.head += `<!-- HEAD_svelte-1tj40x_START -->${$$result.title = `<title>Admin | AWSCC-PUP Manila-Photobooth App</title>`, ""}<!-- HEAD_svelte-1tj40x_END -->`, ""}  ${isLoading ? `<div class="fixed inset-0 bg-base-300 bg-opacity-50 flex justify-center items-center z-50" data-svelte-h="svelte-16g1kat"><span class="loading loading-bars loading-lg text-primary"></span></div>` : ``} <div class="h-[90svh] flex"><div class="md:w-[35svw] lg:w-[30svw] xl:w-[30svw] p-6 space-y-5 bg-neutral">${validate_component(TotalQueue, "TotalQueue").$$render($$result, { totalQueue }, {}, {})} <div class="flex justify-between items-center"><h2 class="text-content font-bold text-sm pl-2 text-neutral-content" data-svelte-h="svelte-19sndtm"><span>Requests:</span></h2> ${validate_component(Filter, "Filter").$$render($$result, {}, {}, {})}</div> <div class="hide-scrollbar overflow-auto h-[65svh] svelte-16lkunu">${validate_component(QueueList, "QueueList").$$render($$result, { requestQueue }, {}, {})}</div></div> <div class="w-full h-full p-10 flex space-x-6">${showRequest ? `<div class="h-full flex flex-col justify-center"><div class="w-64 flex items-center space-x-1 bg-base-300 text-base-content rounded-t-lg p-5">${validate_component(Envelope, "Envelope").$$render($$result, { size: 25, weight: "fill" }, {}, {})} <h3 class="text-lg" data-svelte-h="svelte-1xtndd7">Emails</h3></div> <div class="hide-scrollbar overflow-y-auto space-y-3 flex flex-col h-full px-5 pb-5 bg-base-300 shadow rounded-b-lg w-64 svelte-16lkunu">${validate_component(EmailsContainer, "EmailsContainer").$$render($$result, { emails }, {}, {})}</div></div> <div class="w-full h-[80svh] flex flex-col items-center space-y-3"><div class="w-full flex justify-end pb-1">${validate_component(DeleteButton, "DeleteButton").$$render($$result, { requestId }, {}, {})}</div> ${validate_component(RequestDetails, "RequestDetails").$$render($$result, { status, pointPerson, requestId }, {}, {})} ${validate_component(UploadContainer, "UploadContainer").$$render($$result, { requestId }, {}, {})}</div>` : `${validate_component(DefaultPane, "DefaultPane").$$render($$result, {}, {}, {})}`}</div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-C1zNjy4C.js.map
