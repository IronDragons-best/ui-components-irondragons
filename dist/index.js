import { jsx as a, jsxs as p } from "react/jsx-runtime";
import y, { clsx as u } from "clsx";
import { clsx as Z } from "clsx";
import { RadioGroup as m } from "radix-ui";
import C from "react-google-recaptcha";
const N = "_primary_kipbd_52", k = "_fullWidth_kipbd_72", A = "_secondary_kipbd_94", T = "_outline_kipbd_136", v = "_text_button_kipbd_178", b = {
  "regular-link": "_regular-link_kipbd_34",
  "small-link": "_small-link_kipbd_43",
  primary: N,
  fullWidth: k,
  secondary: A,
  outline: T,
  text_button: v
}, Y = ["primary", "secondary", "outline", "text_button"], q = ({
  as: t,
  children: l,
  disabled: o = !1,
  fullWidth: r = !1,
  className: e,
  variant: n = "primary",
  ...d
}) => {
  const i = y(b.button, b[n], r && b.fullWidth, e);
  return /* @__PURE__ */ a(t || "button", { className: i, ...d, children: l });
}, W = "_bodyTextArea_1ssvm_2", j = "_textArea_1ssvm_7", I = "_fullWidth_1ssvm_37", R = "_label_1ssvm_41", L = "_disabled_1ssvm_45", g = "_error_1ssvm_49", $ = "_errorText_1ssvm_56", s = {
  bodyTextArea: W,
  textArea: j,
  fullWidth: I,
  label: R,
  disabled: L,
  error: g,
  errorText: $
}, z = ["default"], K = (t) => {
  const {
    className: l,
    variant: o = "default",
    label: r,
    error: e,
    errorText: n,
    disabled: d = !1,
    fullWidth: i = !1,
    id: _,
    ...x
  } = t, f = u(
    s.textArea,
    e ? s.error : s[o],
    d && s.disabled,
    i && s.fullWidth,
    l
  );
  return /* @__PURE__ */ p("div", { className: s.bodyTextArea, children: [
    r && /* @__PURE__ */ a("label", { className: s.label, htmlFor: _, children: r }),
    /* @__PURE__ */ a("textarea", { className: f, disabled: d, id: _, ...x }),
    e && n && /* @__PURE__ */ a("div", { className: s.errorText, children: n })
  ] });
}, V = "_Root_js1ec_52", E = "_disabled_js1ec_58", F = "_Item_js1ec_64", H = "_Indicator_js1ec_102", w = "_Label_js1ec_121", c = {
  "regular-link": "_regular-link_js1ec_34",
  "small-link": "_small-link_js1ec_43",
  Root: V,
  disabled: E,
  Item: F,
  Indicator: H,
  Label: w
}, O = ({ options: t, defaultValue: l, disabled: o, ...r }) => /* @__PURE__ */ a(
  m.Root,
  {
    className: c.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...r,
    children: t?.length && t.map((e) => /* @__PURE__ */ p(
      "div",
      {
        className: o ? c.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ a(m.Item, { className: c.Item, value: e.radioName, id: e.id, children: /* @__PURE__ */ a(m.Indicator, { className: c.Indicator }) }),
          /* @__PURE__ */ a("label", { className: c.Label, htmlFor: e.id, children: e.radioName })
        ]
      },
      e.id
    ))
  }
), B = "_reCaptchaWrapper_hfn95_5", D = "_reCaptchaError_hfn95_11", G = "_reCaptchaText_hfn95_15", h = {
  reCaptchaWrapper: B,
  reCaptchaError: D,
  reCaptchaText: G
}, P = ({ isCaptchaPassed: t, setCaptchaToken: l }) => {
  const o = (e) => {
    t && e && l(e);
  }, r = u(h.reCaptchaWrapper, !t && h.reCaptchaError);
  return /* @__PURE__ */ p("div", { className: r, children: [
    /* @__PURE__ */ a(
      C,
      {
        sitekey: "6Lc42W4rAAAAALRY3UMLjkJQojl_FCxLdjtDh_6o",
        onChange: o,
        theme: "dark"
      }
    ),
    !t && /* @__PURE__ */ a("span", { className: h.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
};
export {
  q as Button,
  O as Radio,
  P as ReCaptcha,
  K as TextAreaComponent,
  Y as buttonVariant,
  Z as clsx,
  z as textAreaVariant
};
//# sourceMappingURL=index.js.map
