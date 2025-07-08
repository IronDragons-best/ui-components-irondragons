import { jsx as e, jsxs as s, Fragment as S } from "react/jsx-runtime";
import B, { clsx as p } from "clsx";
import { clsx as ct } from "clsx";
import * as F from "react";
import T, { useState as E } from "react";
import H from "html-react-parser";
import { CheckIcon as j, ChevronDownIcon as P } from "@radix-ui/react-icons";
import { Checkbox as R, Select as d, RadioGroup as W } from "radix-ui";
import U from "react-google-recaptcha";
const D = "_box_1cx9d_5", G = "_error_1cx9d_16", J = "_success_1cx9d_21", K = "_fullWidth_1cx9d_26", M = "_content_1cx9d_30", O = "_icon_1cx9d_36", Q = "_defaultIcon_1cx9d_41", g = {
  box: D,
  error: G,
  success: J,
  fullWidth: K,
  content: M,
  icon: O,
  defaultIcon: Q
}, b = ({ name: t }) => {
  const [l, n] = T.useState(null);
  return T.useEffect(() => {
    fetch(`/assets/icons/${t}.svg`).then((a) => a.text()).then((a) => {
      const r = H(a);
      n(r);
    });
  }, [t]), l;
}, qe = ({
  children: t,
  variant: l = "success",
  onClose: n,
  closable: a = !0,
  fullWidth: r = !1,
  ...c
}) => {
  const o = {
    box: p(g.box, l === "success" ? g.success : g.error, r && g.fullWidth),
    content: g.content,
    icon: p(g.icon)
  };
  return /* @__PURE__ */ e("div", { className: o.box, ...c, children: /* @__PURE__ */ s("div", { className: o.content, children: [
    l === "error" ? /* @__PURE__ */ s("div", { children: [
      /* @__PURE__ */ e("strong", { children: "Error!" }),
      " ",
      t
    ] }) : /* @__PURE__ */ e(S, { children: t }),
    a && /* @__PURE__ */ e("span", { className: o.icon, onClick: n, children: /* @__PURE__ */ e(b, { name: "close" }) })
  ] }) });
}, Y = "_primary_955yh_51", q = "_fullWidth_955yh_72", z = "_secondary_955yh_94", X = "_outline_955yh_137", Z = "_text_button_955yh_180", v = {
  "regular-link": "_regular-link_955yh_33",
  "small-link": "_small-link_955yh_42",
  primary: Y,
  fullWidth: q,
  secondary: z,
  outline: X,
  text_button: Z
}, ze = ["primary", "secondary", "outline", "text_button"], L = ({
  as: t,
  children: l,
  fullWidth: n = !1,
  className: a,
  variant: r = "primary",
  ...c
}) => {
  const o = p(v.button, v[r], n && v.fullWidth, a);
  return /* @__PURE__ */ e(t || "button", { className: o, ...c, children: l });
}, ee = "_cardBody_5flc7_1", te = "_fullWidth_5flc7_17", A = {
  cardBody: ee,
  fullWidth: te
}, Xe = ({ children: t, fullWidth: l, size: n = "md" }) => {
  const a = p(A.cardBody, l && A.fullWidth);
  return /* @__PURE__ */ e("div", { className: a, "data-cardSize": n, children: t });
}, ae = "_Root_1otx6_1", ne = "_Indicator_1otx6_65", re = "_Label_1otx6_82", $ = {
  Root: ae,
  Indicator: ne,
  Label: re
}, Ze = ({ label: t, idProp: l, className: n, disabled: a, ...r }) => /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ e(
    R.Root,
    {
      className: $.Root,
      defaultChecked: !0,
      id: l,
      "aria-disabled": a,
      ...r,
      children: /* @__PURE__ */ e(R.Indicator, { className: $.Indicator, "aria-disabled": a, children: /* @__PURE__ */ e(j, {}) })
    }
  ),
  /* @__PURE__ */ e("label", { className: $.Label, htmlFor: l, "aria-disabled": a, children: t })
] }), le = "_Label_1d5o5_51", se = "_Icon_1d5o5_57", oe = "_Trigger_1d5o5_63", ce = "_Selected_1d5o5_123", ie = "_IconWrapper_1d5o5_133", de = "_fullWidth_1d5o5_138", _e = "_Viewport_1d5o5_142", me = "_Content_1d5o5_146", ue = "_Item_1d5o5_162", i = {
  "regular-link": "_regular-link_1d5o5_33",
  "small-link": "_small-link_1d5o5_42",
  Label: le,
  Icon: se,
  Trigger: oe,
  Selected: ce,
  IconWrapper: ie,
  fullWidth: de,
  Viewport: _e,
  Content: me,
  Item: ue
}, he = F.forwardRef(
  ({ children: t, className: l, ...n }, a) => /* @__PURE__ */ e(d.Item, { className: B(i.Item, l), ...n, ref: a, children: /* @__PURE__ */ e(d.ItemText, { className: i.ItemContent, children: t }) })
), pe = ({
  idProp: t,
  name: l,
  label: n = "",
  placeholder: a = "Select...",
  disabled: r = !1,
  className: c,
  value: o,
  fullWidth: f,
  onValueChange: u,
  onOpenChange: I,
  options: x,
  ...C
}) => {
  const N = x.find((_) => _.value === o);
  return /* @__PURE__ */ s(d.Root, { onValueChange: u, onOpenChange: I, ...C, children: [
    n && /* @__PURE__ */ e("label", { htmlFor: t, className: i.Label, children: n }),
    /* @__PURE__ */ s(
      d.Trigger,
      {
        id: t,
        className: p(i.Trigger, f && i.fullWidth),
        disabled: r,
        "aria-label": n,
        "data-label": n ? "true" : "false",
        name: l,
        children: [
          N ? /* @__PURE__ */ s("div", { className: i.Selected, children: [
            N.icon && /* @__PURE__ */ e("span", { className: i.IconWrapper, children: /* @__PURE__ */ e(b, { name: N.icon }) }),
            N.label
          ] }) : /* @__PURE__ */ e(d.Value, { placeholder: a }),
          /* @__PURE__ */ e(d.Icon, { className: i.Icon, children: /* @__PURE__ */ e(P, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(d.Portal, { children: /* @__PURE__ */ e(d.Content, { className: i.Content, side: "bottom", position: "popper", children: /* @__PURE__ */ e(d.Viewport, { className: i.Viewport, children: /* @__PURE__ */ e(d.Group, { children: x.map((_) => /* @__PURE__ */ s(he, { className: i.Selected, value: _.value, children: [
      _.icon && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(b, { name: _.icon }) }),
      _.label
    ] }, _.value)) }) }) }) })
  ] });
}, be = "_Header_11x48_51", fe = "_Logo_11x48_61", xe = "_Content_11x48_67", Ne = "_IconWrapper_11x48_73", y = {
  "regular-link": "_regular-link_11x48_33",
  "small-link": "_small-link_11x48_42",
  Header: be,
  Logo: fe,
  Content: xe,
  IconWrapper: Ne
}, et = ({
  isAuth: t,
  isProcessingAuth: l = !1,
  localization: n,
  notificationCount: a = 0
}) => {
  const r = (c) => c > 9 ? "9+" : `${c}`;
  return /* @__PURE__ */ s("header", { className: y.Header, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: y.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ s("div", { className: y.Content, children: [
      t && /* @__PURE__ */ e("div", { className: y.IconWrapper, "data-notificationCount": r(a), children: /* @__PURE__ */ e(b, { name: "outline-bell" }) }),
      /* @__PURE__ */ e(
        pe,
        {
          value: n,
          name: "aaa",
          options: [
            { label: "Russian", value: "rus", icon: "Flag-Russia" },
            { label: "English", value: "eng", icon: "Flag-United-Kingdom" }
          ],
          idProp: n
        }
      ),
      !t && !l && /* @__PURE__ */ s(S, { children: [
        /* @__PURE__ */ e(L, { variant: "text_button", children: "Sign in" }),
        /* @__PURE__ */ e(L, { variant: "primary", children: "Sign up" })
      ] })
    ] })
  ] });
}, ge = "_wrapper_1ln8g_51", Ie = "_label_1ln8g_60", ke = "_inputContainer_1ln8g_79", Ce = "_error_1ln8g_109", ye = "_input_1ln8g_79", We = "_iconButton_1ln8g_137", ve = "_errorText_1ln8g_156", $e = "_fullWidth_1ln8g_163", m = {
  "regular-link": "_regular-link_1ln8g_33",
  "small-link": "_small-link_1ln8g_42",
  wrapper: ge,
  label: Ie,
  inputContainer: ke,
  error: Ce,
  input: ye,
  iconButton: We,
  errorText: ve,
  fullWidth: $e
}, tt = ({
  id: t,
  label: l,
  inputType: n,
  errorText: a,
  disabled: r = !1,
  fullWidth: c = !1,
  required: o,
  ...f
}) => {
  const [u, I] = E(!1), x = p(m.inputContainer, a && m.error, c && m.fullWidth), C = n === "password", N = n === "search", _ = (V) => C ? u ? "text" : "password" : V;
  return /* @__PURE__ */ s("div", { className: m.wrapper, children: [
    l && /* @__PURE__ */ e(
      "label",
      {
        "data-requiredField": o,
        htmlFor: t,
        className: m.label,
        "data-disabled": r,
        children: l
      }
    ),
    /* @__PURE__ */ s("div", { className: x, "data-disabled": r, children: [
      N && /* @__PURE__ */ e("button", { type: "submit", className: m.iconButton, "data-disabled": r, children: /* @__PURE__ */ e(b, { name: "search" }) }),
      /* @__PURE__ */ e(
        "input",
        {
          id: t,
          type: _(n),
          required: o,
          className: m.input,
          autoComplete: "off",
          ...f
        }
      ),
      C && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: m.iconButton,
          onClick: () => I(!u),
          children: u ? /* @__PURE__ */ e(b, { name: "eye-outline" }) : /* @__PURE__ */ e(b, { name: "eye-off-outline" })
        }
      )
    ] }),
    a && /* @__PURE__ */ e("div", { className: m.errorText, children: a })
  ] });
}, we = "_Root_8k8ek_51", Te = "_disabled_8k8ek_57", Re = "_Item_8k8ek_63", Le = "_Indicator_8k8ek_101", Ae = "_Label_8k8ek_120", k = {
  "regular-link": "_regular-link_8k8ek_33",
  "small-link": "_small-link_8k8ek_42",
  Root: we,
  disabled: Te,
  Item: Re,
  Indicator: Le,
  Label: Ae
}, at = ({ options: t, defaultValue: l, disabled: n, ...a }) => /* @__PURE__ */ e(
  W.Root,
  {
    className: k.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...a,
    children: t?.length && t.map((r) => /* @__PURE__ */ s(
      "div",
      {
        className: n ? k.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ e(W.Item, { className: k.Item, value: r.radioName, id: r.id, children: /* @__PURE__ */ e(W.Indicator, { className: k.Indicator }) }),
          /* @__PURE__ */ e("label", { className: k.Label, htmlFor: r.id, children: r.radioName })
        ]
      },
      r.id
    ))
  }
), Se = "_reCaptchaWrapper_hfn95_5", Ve = "_reCaptchaError_hfn95_11", Be = "_reCaptchaText_hfn95_15", w = {
  reCaptchaWrapper: Se,
  reCaptchaError: Ve,
  reCaptchaText: Be
}, nt = ({ isCaptchaPassed: t, setCaptchaToken: l }) => {
  const n = (r) => {
    t && r && l(r);
  }, a = p(w.reCaptchaWrapper, !t && w.reCaptchaError);
  return /* @__PURE__ */ s("div", { className: a, children: [
    /* @__PURE__ */ e(
      U,
      {
        sitekey: "6Lc42W4rAAAAALRY3UMLjkJQojl_FCxLdjtDh_6o",
        onChange: n,
        theme: "dark"
      }
    ),
    !t && /* @__PURE__ */ e("span", { className: w.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
}, Fe = "_bodyTextArea_ssbwt_1", Ee = "_textArea_ssbwt_6", He = "_fullWidth_ssbwt_37", je = "_label_ssbwt_41", Pe = "_disabled_ssbwt_45", Ue = "_error_ssbwt_49", De = "_errorText_ssbwt_56", h = {
  bodyTextArea: Fe,
  textArea: Ee,
  fullWidth: He,
  label: je,
  disabled: Pe,
  error: Ue,
  errorText: De
}, rt = ["default"], lt = (t) => {
  const {
    className: l,
    variant: n = "default",
    label: a,
    error: r,
    errorText: c,
    disabled: o = !1,
    fullWidth: f = !1,
    id: u,
    ...I
  } = t, x = p(
    h.textArea,
    r ? h.error : h[n],
    o && h.disabled,
    f && h.fullWidth,
    l
  );
  return /* @__PURE__ */ s("div", { className: h.bodyTextArea, children: [
    a && /* @__PURE__ */ e("label", { className: h.label, htmlFor: u, children: a }),
    /* @__PURE__ */ e("textarea", { className: x, disabled: o, id: u, ...I }),
    r && c && /* @__PURE__ */ e("div", { className: h.errorText, children: c })
  ] });
};
export {
  qe as Alert,
  L as Button,
  Xe as Card,
  Ze as Checkbox,
  et as Header,
  tt as Input,
  at as Radio,
  nt as ReCaptcha,
  pe as Selectbox,
  lt as TextAreaComponent,
  b as UniversalIcon,
  ze as buttonVariant,
  ct as clsx,
  rt as textAreaVariant
};
//# sourceMappingURL=index.es.js.map
