import { jsx as e, jsxs as s, Fragment as A } from "react/jsx-runtime";
import q, { clsx as p } from "clsx";
import { clsx as ct } from "clsx";
import * as V from "react";
import j, { useState as B } from "react";
import F from "html-react-parser";
import { CheckIcon as E, ChevronDownIcon as H } from "@radix-ui/react-icons";
import { Checkbox as T, Select as d, RadioGroup as W } from "radix-ui";
import P from "react-google-recaptcha";
const U = "_box_1cx9d_5", D = "_error_1cx9d_16", G = "_success_1cx9d_21", J = "_fullWidth_1cx9d_26", K = "_content_1cx9d_30", M = "_icon_1cx9d_36", O = "_defaultIcon_1cx9d_41", g = {
  box: U,
  error: D,
  success: G,
  fullWidth: J,
  content: K,
  icon: M,
  defaultIcon: O
}, f = ({ name: t }) => {
  const [l, n] = j.useState(null);
  return j.useEffect(() => {
    fetch(`./assets/icons/${t}.svg`).then((a) => a.text()).then((a) => {
      const r = F(a);
      n(r);
    });
  }, [t]), l;
}, Ye = ({
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
    ] }) : /* @__PURE__ */ e(A, { children: t }),
    a && /* @__PURE__ */ e("span", { className: o.icon, onClick: n, children: /* @__PURE__ */ e(f, { name: "close" }) })
  ] }) });
}, Q = "_primary_4txjf_51", Y = "_fullWidth_4txjf_72", z = "_secondary_4txjf_94", X = "_outline_4txjf_137", Z = "_text_button_4txjf_180", y = {
  "regular-link": "_regular-link_4txjf_33",
  "small-link": "_small-link_4txjf_42",
  primary: Q,
  fullWidth: Y,
  secondary: z,
  outline: X,
  text_button: Z
}, ze = ["primary", "secondary", "outline", "text_button"], R = ({
  as: t,
  children: l,
  fullWidth: n = !1,
  className: a,
  variant: r = "primary",
  ...c
}) => {
  const o = p(y.button, y[r], n && y.fullWidth, a);
  return /* @__PURE__ */ e(t || "button", { className: o, ...c, children: l });
}, ee = "_cardBody_5flc7_1", te = "_fullWidth_5flc7_17", L = {
  cardBody: ee,
  fullWidth: te
}, Xe = ({ children: t, fullWidth: l, size: n = "md" }) => {
  const a = p(L.cardBody, l && L.fullWidth);
  return /* @__PURE__ */ e("div", { className: a, "data-cardSize": n, children: t });
}, ae = "_Root_1otx6_1", ne = "_Indicator_1otx6_65", re = "_Label_1otx6_82", w = {
  Root: ae,
  Indicator: ne,
  Label: re
}, Ze = ({ label: t, idProp: l, className: n, disabled: a, ...r }) => /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ e(
    T.Root,
    {
      className: w.Root,
      defaultChecked: !0,
      id: l,
      "aria-disabled": a,
      ...r,
      children: /* @__PURE__ */ e(T.Indicator, { className: w.Indicator, "aria-disabled": a, children: /* @__PURE__ */ e(E, {}) })
    }
  ),
  /* @__PURE__ */ e("label", { className: w.Label, htmlFor: l, "aria-disabled": a, children: t })
] }), le = "_Label_1qj6r_51", se = "_Icon_1qj6r_57", oe = "_Trigger_1qj6r_63", ce = "_Selected_1qj6r_123", ie = "_IconWrapper_1qj6r_133", de = "_fullWidth_1qj6r_138", _e = "_Viewport_1qj6r_142", me = "_Content_1qj6r_146", ue = "_Item_1qj6r_162", i = {
  "regular-link": "_regular-link_1qj6r_33",
  "small-link": "_small-link_1qj6r_42",
  Label: le,
  Icon: se,
  Trigger: oe,
  Selected: ce,
  IconWrapper: ie,
  fullWidth: de,
  Viewport: _e,
  Content: me,
  Item: ue
}, he = V.forwardRef(
  ({ children: t, className: l, ...n }, a) => /* @__PURE__ */ e(d.Item, { className: q(i.Item, l), ...n, ref: a, children: /* @__PURE__ */ e(d.ItemText, { className: i.ItemContent, children: t }) })
), pe = ({
  idProp: t,
  name: l,
  label: n = "",
  placeholder: a = "Select...",
  disabled: r = !1,
  className: c,
  value: o,
  fullWidth: b,
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
        className: p(i.Trigger, b && i.fullWidth),
        disabled: r,
        "aria-label": n,
        "data-label": n ? "true" : "false",
        name: l,
        children: [
          N ? /* @__PURE__ */ s("div", { className: i.Selected, children: [
            N.icon && /* @__PURE__ */ e("span", { className: i.IconWrapper, children: /* @__PURE__ */ e(f, { name: N.icon }) }),
            N.label
          ] }) : /* @__PURE__ */ e(d.Value, { placeholder: a }),
          /* @__PURE__ */ e(d.Icon, { className: i.Icon, children: /* @__PURE__ */ e(H, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(d.Portal, { children: /* @__PURE__ */ e(d.Content, { className: i.Content, side: "bottom", position: "popper", children: /* @__PURE__ */ e(d.Viewport, { className: i.Viewport, children: /* @__PURE__ */ e(d.Group, { children: x.map((_) => /* @__PURE__ */ s(he, { className: i.Selected, value: _.value, children: [
      _.icon && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(f, { name: _.icon }) }),
      _.label
    ] }, _.value)) }) }) }) })
  ] });
}, fe = "_Header_7hwop_51", be = "_Logo_7hwop_61", xe = "_Content_7hwop_67", Ne = "_IconWrapper_7hwop_73", k = {
  "regular-link": "_regular-link_7hwop_33",
  "small-link": "_small-link_7hwop_42",
  Header: fe,
  Logo: be,
  Content: xe,
  IconWrapper: Ne
}, et = ({
  isAuth: t,
  isProcessingAuth: l = !1,
  localization: n,
  notificationCount: a = 0
}) => {
  const r = (c) => c > 9 ? "9+" : `${c}`;
  return /* @__PURE__ */ s("header", { className: k.Header, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: k.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ s("div", { className: k.Content, children: [
      t && /* @__PURE__ */ e("div", { className: k.IconWrapper, "data-notificationCount": r(a), children: /* @__PURE__ */ e(f, { name: "outline-bell" }) }),
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
      !t && !l && /* @__PURE__ */ s(A, { children: [
        /* @__PURE__ */ e(R, { variant: "text_button", children: "Sign in" }),
        /* @__PURE__ */ e(R, { variant: "primary", children: "Sign up" })
      ] })
    ] })
  ] });
}, ge = "_wrapper_63nvk_51", Ie = "_label_63nvk_60", ve = "_inputContainer_63nvk_79", Ce = "_error_63nvk_109", ke = "_input_63nvk_79", We = "_iconButton_63nvk_137", ye = "_errorText_63nvk_156", we = "_fullWidth_63nvk_163", m = {
  "regular-link": "_regular-link_63nvk_33",
  "small-link": "_small-link_63nvk_42",
  wrapper: ge,
  label: Ie,
  inputContainer: ve,
  error: Ce,
  input: ke,
  iconButton: We,
  errorText: ye,
  fullWidth: we
}, tt = ({
  id: t,
  label: l,
  inputType: n,
  errorText: a,
  disabled: r = !1,
  fullWidth: c = !1,
  required: o,
  ...b
}) => {
  const [u, I] = B(!1), x = p(m.inputContainer, a && m.error, c && m.fullWidth), C = n === "password", N = n === "search", _ = (S) => C ? u ? "text" : "password" : S;
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
      N && /* @__PURE__ */ e("button", { type: "submit", className: m.iconButton, "data-disabled": r, children: /* @__PURE__ */ e(f, { name: "search" }) }),
      /* @__PURE__ */ e(
        "input",
        {
          id: t,
          type: _(n),
          required: o,
          className: m.input,
          autoComplete: "off",
          ...b
        }
      ),
      C && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: m.iconButton,
          onClick: () => I(!u),
          children: u ? /* @__PURE__ */ e(f, { name: "eye-outline" }) : /* @__PURE__ */ e(f, { name: "eye-off-outline" })
        }
      )
    ] }),
    a && /* @__PURE__ */ e("div", { className: m.errorText, children: a })
  ] });
}, $e = "_Root_n6gai_51", je = "_disabled_n6gai_57", Te = "_Item_n6gai_63", Re = "_Indicator_n6gai_101", Le = "_Label_n6gai_120", v = {
  "regular-link": "_regular-link_n6gai_33",
  "small-link": "_small-link_n6gai_42",
  Root: $e,
  disabled: je,
  Item: Te,
  Indicator: Re,
  Label: Le
}, at = ({ options: t, defaultValue: l, disabled: n, ...a }) => /* @__PURE__ */ e(
  W.Root,
  {
    className: v.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...a,
    children: t?.length && t.map((r) => /* @__PURE__ */ s(
      "div",
      {
        className: n ? v.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ e(W.Item, { className: v.Item, value: r.radioName, id: r.id, children: /* @__PURE__ */ e(W.Indicator, { className: v.Indicator }) }),
          /* @__PURE__ */ e("label", { className: v.Label, htmlFor: r.id, children: r.radioName })
        ]
      },
      r.id
    ))
  }
), Ae = "_reCaptchaWrapper_hfn95_5", Se = "_reCaptchaError_hfn95_11", qe = "_reCaptchaText_hfn95_15", $ = {
  reCaptchaWrapper: Ae,
  reCaptchaError: Se,
  reCaptchaText: qe
}, nt = ({ isCaptchaPassed: t, setCaptchaToken: l }) => {
  const n = (r) => {
    t && r && l(r);
  }, a = p($.reCaptchaWrapper, !t && $.reCaptchaError);
  return /* @__PURE__ */ s("div", { className: a, children: [
    /* @__PURE__ */ e(
      P,
      {
        sitekey: "6Lc42W4rAAAAALRY3UMLjkJQojl_FCxLdjtDh_6o",
        onChange: n,
        theme: "dark"
      }
    ),
    !t && /* @__PURE__ */ e("span", { className: $.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
}, Ve = "_bodyTextArea_ssbwt_1", Be = "_textArea_ssbwt_6", Fe = "_fullWidth_ssbwt_37", Ee = "_label_ssbwt_41", He = "_disabled_ssbwt_45", Pe = "_error_ssbwt_49", Ue = "_errorText_ssbwt_56", h = {
  bodyTextArea: Ve,
  textArea: Be,
  fullWidth: Fe,
  label: Ee,
  disabled: He,
  error: Pe,
  errorText: Ue
}, rt = ["default"], lt = (t) => {
  const {
    className: l,
    variant: n = "default",
    label: a,
    error: r,
    errorText: c,
    disabled: o = !1,
    fullWidth: b = !1,
    id: u,
    ...I
  } = t, x = p(
    h.textArea,
    r ? h.error : h[n],
    o && h.disabled,
    b && h.fullWidth,
    l
  );
  return /* @__PURE__ */ s("div", { className: h.bodyTextArea, children: [
    a && /* @__PURE__ */ e("label", { className: h.label, htmlFor: u, children: a }),
    /* @__PURE__ */ e("textarea", { className: x, disabled: o, id: u, ...I }),
    r && c && /* @__PURE__ */ e("div", { className: h.errorText, children: c })
  ] });
};
export {
  Ye as Alert,
  R as Button,
  Xe as Card,
  Ze as Checkbox,
  et as Header,
  tt as Input,
  at as Radio,
  nt as ReCaptcha,
  pe as Selectbox,
  lt as TextAreaComponent,
  f as UniversalIcon,
  ze as buttonVariant,
  ct as clsx,
  rt as textAreaVariant
};
//# sourceMappingURL=index.es.js.map
