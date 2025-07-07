import { jsx as a, jsxs as b } from "react/jsx-runtime";
import { clsx as h } from "clsx";
import { clsx as X } from "clsx";
import { RadioGroup as i } from "radix-ui";
import f from "react-google-recaptcha";
const C = "_primary_wceka_51", N = "_fullWidth_wceka_72", k = "_secondary_wceka_94", A = "_outline_wceka_137", w = "_text_button_wceka_180", d = {
  "regular-link": "_regular-link_wceka_33",
  "small-link": "_small-link_wceka_42",
  primary: C,
  fullWidth: N,
  secondary: k,
  outline: A,
  text_button: w
}, Q = ["primary", "secondary", "outline", "text_button"], U = ({
  as: t,
  children: o,
  fullWidth: s = !1,
  className: r,
  variant: e = "primary",
  ...c
}) => {
  const _ = h(d.button, d[e], s && d.fullWidth, r);
  return /* @__PURE__ */ a(t || "button", { className: _, ...c, children: o });
}, T = "_bodyTextArea_ssbwt_1", q = "_textArea_ssbwt_6", W = "_fullWidth_ssbwt_37", I = "_label_ssbwt_41", R = "_disabled_ssbwt_45", L = "_error_ssbwt_49", g = "_errorText_ssbwt_56", l = {
  bodyTextArea: T,
  textArea: q,
  fullWidth: W,
  label: I,
  disabled: R,
  error: L,
  errorText: g
}, Y = ["default"], z = (t) => {
  const {
    className: o,
    variant: s = "default",
    label: r,
    error: e,
    errorText: c,
    disabled: _ = !1,
    fullWidth: u = !1,
    id: x,
    ...p
  } = t, y = h(
    l.textArea,
    e ? l.error : l[s],
    _ && l.disabled,
    u && l.fullWidth,
    o
  );
  return /* @__PURE__ */ b("div", { className: l.bodyTextArea, children: [
    r && /* @__PURE__ */ a("label", { className: l.label, htmlFor: x, children: r }),
    /* @__PURE__ */ a("textarea", { className: y, disabled: _, id: x, ...p }),
    e && c && /* @__PURE__ */ a("div", { className: l.errorText, children: c })
  ] });
}, v = "_Root_1rqqy_51", j = "_disabled_1rqqy_57", V = "_Item_1rqqy_63", $ = "_Indicator_1rqqy_101", E = "_Label_1rqqy_120", n = {
  "regular-link": "_regular-link_1rqqy_33",
  "small-link": "_small-link_1rqqy_42",
  Root: v,
  disabled: j,
  Item: V,
  Indicator: $,
  Label: E
}, K = ({ options: t, defaultValue: o, disabled: s, ...r }) => /* @__PURE__ */ a(
  i.Root,
  {
    className: n.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...r,
    children: t?.length && t.map((e) => /* @__PURE__ */ b(
      "div",
      {
        className: s ? n.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ a(i.Item, { className: n.Item, value: e.radioName, id: e.id, children: /* @__PURE__ */ a(i.Indicator, { className: n.Indicator }) }),
          /* @__PURE__ */ a("label", { className: n.Label, htmlFor: e.id, children: e.radioName })
        ]
      },
      e.id
    ))
  }
), F = "_reCaptchaWrapper_hfn95_5", H = "_reCaptchaError_hfn95_11", B = "_reCaptchaText_hfn95_15", m = {
  reCaptchaWrapper: F,
  reCaptchaError: H,
  reCaptchaText: B
}, O = ({ isCaptchaPassed: t, setCaptchaToken: o }) => {
  const s = (e) => {
    t && e && o(e);
  }, r = h(m.reCaptchaWrapper, !t && m.reCaptchaError);
  return /* @__PURE__ */ b("div", { className: r, children: [
    /* @__PURE__ */ a(
      f,
      {
        sitekey: "6Lc42W4rAAAAALRY3UMLjkJQojl_FCxLdjtDh_6o",
        onChange: s,
        theme: "dark"
      }
    ),
    !t && /* @__PURE__ */ a("span", { className: m.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
};
export {
  U as Button,
  K as Radio,
  O as ReCaptcha,
  z as TextAreaComponent,
  Q as buttonVariant,
  X as clsx,
  Y as textAreaVariant
};
//# sourceMappingURL=index.js.map
