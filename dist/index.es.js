import { jsx as e, jsxs as l, Fragment as S } from "react/jsx-runtime";
import V, { clsx as p } from "clsx";
import { clsx as ct } from "clsx";
import * as B from "react";
import T, { useState as F } from "react";
import E from "html-react-parser";
import { CheckIcon as H, ChevronDownIcon as j } from "@radix-ui/react-icons";
import { Checkbox as R, Select as d, RadioGroup as v } from "radix-ui";
import P from "react-google-recaptcha";
const U = "_box_1cx9d_5", D = "_error_1cx9d_16", G = "_success_1cx9d_21", J = "_fullWidth_1cx9d_26", K = "_content_1cx9d_30", M = "_icon_1cx9d_36", O = "_defaultIcon_1cx9d_41", g = {
  box: U,
  error: D,
  success: G,
  fullWidth: J,
  content: K,
  icon: M,
  defaultIcon: O
}, b = ({ name: t }) => {
  const [s, n] = T.useState(null);
  return T.useEffect(() => {
    fetch(`/assets/icons/${t}.svg`).then((a) => a.text()).then((a) => {
      const r = E(a);
      n(r);
    });
  }, [t]), s;
}, Ye = ({
  children: t,
  variant: s = "success",
  onClose: n,
  closable: a = !0,
  fullWidth: r = !1,
  ...c
}) => {
  const o = {
    box: p(g.box, s === "success" ? g.success : g.error, r && g.fullWidth),
    content: g.content,
    icon: p(g.icon)
  };
  return /* @__PURE__ */ e("div", { className: o.box, ...c, children: /* @__PURE__ */ l("div", { className: o.content, children: [
    s === "error" ? /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ e("strong", { children: "Error!" }),
      " ",
      t
    ] }) : /* @__PURE__ */ e(S, { children: t }),
    a && /* @__PURE__ */ e("span", { className: o.icon, onClick: n, children: /* @__PURE__ */ e(b, { name: "close" }) })
  ] }) });
}, Q = "_primary_qsd9g_51", Y = "_fullWidth_qsd9g_72", z = "_secondary_qsd9g_94", X = "_outline_qsd9g_137", Z = "_text_button_qsd9g_180", $ = {
  "regular-link": "_regular-link_qsd9g_33",
  "small-link": "_small-link_qsd9g_42",
  primary: Q,
  fullWidth: Y,
  secondary: z,
  outline: X,
  text_button: Z
}, ze = ["primary", "secondary", "outline", "text_button"], L = ({
  as: t,
  children: s,
  fullWidth: n = !1,
  className: a,
  variant: r = "primary",
  ...c
}) => {
  const o = p($.button, $[r], n && $.fullWidth, a);
  return /* @__PURE__ */ e(t || "button", { className: o, ...c, children: s });
}, ee = "_cardBody_5flc7_1", te = "_fullWidth_5flc7_17", A = {
  cardBody: ee,
  fullWidth: te
}, Xe = ({ children: t, fullWidth: s, size: n = "md" }) => {
  const a = p(A.cardBody, s && A.fullWidth);
  return /* @__PURE__ */ e("div", { className: a, "data-cardSize": n, children: t });
}, ae = "_Root_1otx6_1", ne = "_Indicator_1otx6_65", re = "_Label_1otx6_82", k = {
  Root: ae,
  Indicator: ne,
  Label: re
}, Ze = ({ label: t, idProp: s, className: n, disabled: a, ...r }) => /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ e(
    R.Root,
    {
      className: k.Root,
      defaultChecked: !0,
      id: s,
      "aria-disabled": a,
      ...r,
      children: /* @__PURE__ */ e(R.Indicator, { className: k.Indicator, "aria-disabled": a, children: /* @__PURE__ */ e(H, {}) })
    }
  ),
  /* @__PURE__ */ e("label", { className: k.Label, htmlFor: s, "aria-disabled": a, children: t })
] }), se = "_Label_14t2n_51", le = "_Icon_14t2n_57", oe = "_Trigger_14t2n_63", ce = "_Selected_14t2n_123", ie = "_IconWrapper_14t2n_133", de = "_fullWidth_14t2n_138", _e = "_Viewport_14t2n_142", me = "_Content_14t2n_146", ue = "_Item_14t2n_162", i = {
  "regular-link": "_regular-link_14t2n_33",
  "small-link": "_small-link_14t2n_42",
  Label: se,
  Icon: le,
  Trigger: oe,
  Selected: ce,
  IconWrapper: ie,
  fullWidth: de,
  Viewport: _e,
  Content: me,
  Item: ue
}, he = B.forwardRef(
  ({ children: t, className: s, ...n }, a) => /* @__PURE__ */ e(d.Item, { className: V(i.Item, s), ...n, ref: a, children: /* @__PURE__ */ e(d.ItemText, { className: i.ItemContent, children: t }) })
), pe = ({
  idProp: t,
  name: s,
  label: n = "",
  placeholder: a = "Select...",
  disabled: r = !1,
  className: c,
  value: o,
  fullWidth: f,
  onValueChange: u,
  onOpenChange: I,
  options: x,
  ...y
}) => {
  const N = x.find((_) => _.value === o);
  return /* @__PURE__ */ l(d.Root, { onValueChange: u, onOpenChange: I, ...y, children: [
    n && /* @__PURE__ */ e("label", { htmlFor: t, className: i.Label, children: n }),
    /* @__PURE__ */ l(
      d.Trigger,
      {
        id: t,
        className: p(i.Trigger, f && i.fullWidth),
        disabled: r,
        "aria-label": n,
        "data-label": n ? "true" : "false",
        name: s,
        children: [
          N ? /* @__PURE__ */ l("div", { className: i.Selected, children: [
            N.icon && /* @__PURE__ */ e("span", { className: i.IconWrapper, children: /* @__PURE__ */ e(b, { name: N.icon }) }),
            N.label
          ] }) : /* @__PURE__ */ e(d.Value, { placeholder: a }),
          /* @__PURE__ */ e(d.Icon, { className: i.Icon, children: /* @__PURE__ */ e(j, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(d.Portal, { children: /* @__PURE__ */ e(d.Content, { className: i.Content, side: "bottom", position: "popper", children: /* @__PURE__ */ e(d.Viewport, { className: i.Viewport, children: /* @__PURE__ */ e(d.Group, { children: x.map((_) => /* @__PURE__ */ l(he, { className: i.Selected, value: _.value, children: [
      _.icon && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(b, { name: _.icon }) }),
      _.label
    ] }, _.value)) }) }) }) })
  ] });
}, be = "_Header_sbq1y_51", fe = "_Logo_sbq1y_61", xe = "_Content_sbq1y_67", Ne = "_IconWrapper_sbq1y_73", W = {
  "regular-link": "_regular-link_sbq1y_33",
  "small-link": "_small-link_sbq1y_42",
  Header: be,
  Logo: fe,
  Content: xe,
  IconWrapper: Ne
}, et = ({
  isAuth: t,
  isProcessingAuth: s = !1,
  localization: n,
  notificationCount: a = 0
}) => {
  const r = (c) => c > 9 ? "9+" : `${c}`;
  return /* @__PURE__ */ l("header", { className: W.Header, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: W.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ l("div", { className: W.Content, children: [
      t && /* @__PURE__ */ e("div", { className: W.IconWrapper, "data-notificationCount": r(a), children: /* @__PURE__ */ e(b, { name: "outline-bell" }) }),
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
      !t && !s && /* @__PURE__ */ l(S, { children: [
        /* @__PURE__ */ e(L, { variant: "text_button", children: "Sign in" }),
        /* @__PURE__ */ e(L, { variant: "primary", children: "Sign up" })
      ] })
    ] })
  ] });
}, ge = "_wrapper_bp63d_51", Ie = "_label_bp63d_60", Ce = "_inputContainer_bp63d_79", ye = "_error_bp63d_109", We = "_input_bp63d_79", ve = "_iconButton_bp63d_137", $e = "_errorText_bp63d_156", ke = "_fullWidth_bp63d_163", m = {
  "regular-link": "_regular-link_bp63d_33",
  "small-link": "_small-link_bp63d_42",
  wrapper: ge,
  label: Ie,
  inputContainer: Ce,
  error: ye,
  input: We,
  iconButton: ve,
  errorText: $e,
  fullWidth: ke
}, tt = ({
  id: t,
  label: s,
  inputType: n,
  errorText: a,
  disabled: r = !1,
  fullWidth: c = !1,
  required: o,
  ...f
}) => {
  const [u, I] = F(!1), x = p(m.inputContainer, a && m.error, c && m.fullWidth), y = n === "password", N = n === "search", _ = (q) => y ? u ? "text" : "password" : q;
  return /* @__PURE__ */ l("div", { className: m.wrapper, children: [
    s && /* @__PURE__ */ e(
      "label",
      {
        "data-requiredField": o,
        htmlFor: t,
        className: m.label,
        "data-disabled": r,
        children: s
      }
    ),
    /* @__PURE__ */ l("div", { className: x, "data-disabled": r, children: [
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
      y && /* @__PURE__ */ e(
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
}, we = "_Root_154t9_51", Te = "_disabled_154t9_57", Re = "_Item_154t9_63", Le = "_Indicator_154t9_101", Ae = "_Label_154t9_120", C = {
  "regular-link": "_regular-link_154t9_33",
  "small-link": "_small-link_154t9_42",
  Root: we,
  disabled: Te,
  Item: Re,
  Indicator: Le,
  Label: Ae
}, at = ({ options: t, defaultValue: s, disabled: n, ...a }) => /* @__PURE__ */ e(
  v.Root,
  {
    className: C.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...a,
    children: t?.length && t.map((r) => /* @__PURE__ */ l(
      "div",
      {
        className: n ? C.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ e(v.Item, { className: C.Item, value: r.radioName, id: r.id, children: /* @__PURE__ */ e(v.Indicator, { className: C.Indicator }) }),
          /* @__PURE__ */ e("label", { className: C.Label, htmlFor: r.id, children: r.radioName })
        ]
      },
      r.id
    ))
  }
), Se = "_reCaptchaWrapper_hfn95_5", qe = "_reCaptchaError_hfn95_11", Ve = "_reCaptchaText_hfn95_15", w = {
  reCaptchaWrapper: Se,
  reCaptchaError: qe,
  reCaptchaText: Ve
}, nt = ({ isCaptchaPassed: t, setCaptchaToken: s }) => {
  const n = (r) => {
    t && r && s(r);
  }, a = p(w.reCaptchaWrapper, !t && w.reCaptchaError);
  return /* @__PURE__ */ l("div", { className: a, children: [
    /* @__PURE__ */ e(
      P,
      {
        sitekey: "6Lc42W4rAAAAALRY3UMLjkJQojl_FCxLdjtDh_6o",
        onChange: n,
        theme: "dark"
      }
    ),
    !t && /* @__PURE__ */ e("span", { className: w.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
}, Be = "_bodyTextArea_ssbwt_1", Fe = "_textArea_ssbwt_6", Ee = "_fullWidth_ssbwt_37", He = "_label_ssbwt_41", je = "_disabled_ssbwt_45", Pe = "_error_ssbwt_49", Ue = "_errorText_ssbwt_56", h = {
  bodyTextArea: Be,
  textArea: Fe,
  fullWidth: Ee,
  label: He,
  disabled: je,
  error: Pe,
  errorText: Ue
}, rt = ["default"], st = (t) => {
  const {
    className: s,
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
    s
  );
  return /* @__PURE__ */ l("div", { className: h.bodyTextArea, children: [
    a && /* @__PURE__ */ e("label", { className: h.label, htmlFor: u, children: a }),
    /* @__PURE__ */ e("textarea", { className: x, disabled: o, id: u, ...I }),
    r && c && /* @__PURE__ */ e("div", { className: h.errorText, children: c })
  ] });
};
export {
  Ye as Alert,
  L as Button,
  Xe as Card,
  Ze as Checkbox,
  et as Header,
  tt as Input,
  at as Radio,
  nt as ReCaptcha,
  pe as Selectbox,
  st as TextAreaComponent,
  b as UniversalIcon,
  ze as buttonVariant,
  ct as clsx,
  rt as textAreaVariant
};
//# sourceMappingURL=index.es.js.map
