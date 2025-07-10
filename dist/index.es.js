import { jsx as e, jsxs as c, Fragment as L } from "react/jsx-runtime";
import q, { clsx as p } from "clsx";
import { clsx as ct } from "clsx";
import * as V from "react";
import T, { useState as B } from "react";
import E from "html-react-parser";
import { CheckIcon as F, ChevronDownIcon as H } from "@radix-ui/react-icons";
import { Checkbox as j, Select as d, RadioGroup as v } from "radix-ui";
import P from "react-google-recaptcha";
const z = "_box_1cx9d_5", G = "_error_1cx9d_16", U = "_success_1cx9d_21", D = "_fullWidth_1cx9d_26", K = "_content_1cx9d_30", O = "_icon_1cx9d_36", J = "_defaultIcon_1cx9d_41", N = {
  box: z,
  error: G,
  success: U,
  fullWidth: D,
  content: K,
  icon: O,
  defaultIcon: J
}, f = ({ name: t, dataStatic: s = !1 }) => {
  const [r, a] = T.useState(null);
  return T.useEffect(() => {
    fetch(`/assets/icons/${t}.svg`).then((n) => n.text()).then((n) => {
      const l = E(n);
      a(l);
    });
  }, [t]), r;
}, Qe = ({
  children: t,
  variant: s = "success",
  onClose: r,
  closable: a = !0,
  fullWidth: n = !1,
  ...l
}) => {
  const o = {
    box: p(N.box, s === "success" ? N.success : N.error, n && N.fullWidth),
    content: N.content,
    icon: p(N.icon)
  };
  return /* @__PURE__ */ e("div", { className: o.box, ...l, children: /* @__PURE__ */ c("div", { className: o.content, children: [
    s === "error" ? /* @__PURE__ */ c("div", { children: [
      /* @__PURE__ */ e("strong", { children: "Error!" }),
      " ",
      t
    ] }) : /* @__PURE__ */ e(L, { children: t }),
    a && /* @__PURE__ */ e("span", { className: o.icon, onClick: r, children: /* @__PURE__ */ e(f, { name: "close" }) })
  ] }) });
}, M = "_primary_4txjf_51", Q = "_fullWidth_4txjf_72", X = "_secondary_4txjf_94", Y = "_outline_4txjf_137", Z = "_text_button_4txjf_180", w = {
  "regular-link": "_regular-link_4txjf_33",
  "small-link": "_small-link_4txjf_42",
  primary: M,
  fullWidth: Q,
  secondary: X,
  outline: Y,
  text_button: Z
}, Xe = ["primary", "secondary", "outline", "text_button"], R = ({
  as: t,
  children: s,
  fullWidth: r = !1,
  className: a,
  variant: n = "primary",
  ...l
}) => {
  const o = p(w.button, w[n], r && w.fullWidth, a);
  return /* @__PURE__ */ e(t || "button", { className: o, ...l, children: s });
}, ee = "_cardBody_1rsrz_1", te = "_fullWidth_1rsrz_20", S = {
  cardBody: ee,
  fullWidth: te
}, Ye = ({ children: t, fullWidth: s, size: r = "md" }) => {
  const a = p(S.cardBody, s && S.fullWidth);
  return /* @__PURE__ */ e("div", { className: a, "data-cardsize": r, children: t });
}, re = "_Root_1otx6_1", ae = "_Indicator_1otx6_65", ne = "_Label_1otx6_82", $ = {
  Root: re,
  Indicator: ae,
  Label: ne
}, Ze = ({ label: t, idProp: s, className: r, disabled: a, ...n }) => /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ e(
    j.Root,
    {
      className: $.Root,
      defaultChecked: !0,
      id: s,
      "aria-disabled": a,
      ...n,
      children: /* @__PURE__ */ e(j.Indicator, { className: $.Indicator, "aria-disabled": a, children: /* @__PURE__ */ e(F, {}) })
    }
  ),
  /* @__PURE__ */ e("label", { className: $.Label, htmlFor: s, "aria-disabled": a, children: t })
] }), se = "_Label_1qj6r_51", le = "_Icon_1qj6r_57", oe = "_Trigger_1qj6r_63", ce = "_Selected_1qj6r_123", ie = "_IconWrapper_1qj6r_133", de = "_fullWidth_1qj6r_138", _e = "_Viewport_1qj6r_142", me = "_Content_1qj6r_146", ue = "_Item_1qj6r_162", i = {
  "regular-link": "_regular-link_1qj6r_33",
  "small-link": "_small-link_1qj6r_42",
  Label: se,
  Icon: le,
  Trigger: oe,
  Selected: ce,
  IconWrapper: ie,
  fullWidth: de,
  Viewport: _e,
  Content: me,
  Item: ue
}, he = V.forwardRef(
  ({ children: t, className: s, ...r }, a) => /* @__PURE__ */ e(d.Item, { className: q(i.Item, s), ...r, ref: a, children: /* @__PURE__ */ e(d.ItemText, { className: i.ItemContent, children: t }) })
), pe = ({
  idProp: t,
  name: s,
  label: r = "",
  placeholder: a = "Select...",
  disabled: n = !1,
  className: l,
  value: o,
  fullWidth: b,
  onValueChange: u,
  onOpenChange: I,
  options: x,
  ...C
}) => {
  const g = x.find((_) => _.value === o);
  return /* @__PURE__ */ c(d.Root, { onValueChange: u, onOpenChange: I, ...C, children: [
    r && /* @__PURE__ */ e("label", { htmlFor: t, className: i.Label, children: r }),
    /* @__PURE__ */ c(
      d.Trigger,
      {
        id: t,
        className: p(i.Trigger, b && i.fullWidth),
        disabled: n,
        "aria-label": r,
        "data-label": r ? "true" : "false",
        name: s,
        children: [
          g ? /* @__PURE__ */ c("div", { className: i.Selected, children: [
            g.icon && /* @__PURE__ */ e("span", { className: i.IconWrapper, children: /* @__PURE__ */ e(f, { name: g.icon }) }),
            g.label
          ] }) : /* @__PURE__ */ e(d.Value, { placeholder: a }),
          /* @__PURE__ */ e(d.Icon, { className: i.Icon, children: /* @__PURE__ */ e(H, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(d.Portal, { children: /* @__PURE__ */ e(d.Content, { className: i.Content, side: "bottom", position: "popper", children: /* @__PURE__ */ e(d.Viewport, { className: i.Viewport, children: /* @__PURE__ */ e(d.Group, { children: x.map((_) => /* @__PURE__ */ c(he, { className: i.Selected, value: _.value, children: [
      _.icon && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(f, { name: _.icon }) }),
      _.label
    ] }, _.value)) }) }) }) })
  ] });
}, fe = "_Header_18rwr_51", be = "_Logo_18rwr_61", xe = "_Content_18rwr_67", ge = "_IconWrapper_18rwr_73", W = {
  "regular-link": "_regular-link_18rwr_33",
  "small-link": "_small-link_18rwr_42",
  Header: fe,
  Logo: be,
  Content: xe,
  IconWrapper: ge
}, et = ({
  isAuth: t,
  isProcessingAuth: s = !1,
  localization: r,
  notificationCount: a = 0
}) => {
  const n = (l) => l > 9 ? "9+" : `${l}`;
  return /* @__PURE__ */ c("header", { className: W.Header, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: W.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ c("div", { className: W.Content, children: [
      t && /* @__PURE__ */ e("div", { className: W.IconWrapper, "data-notificationcount": n(a), children: /* @__PURE__ */ e(f, { name: "outline-bell" }) }),
      /* @__PURE__ */ e(
        pe,
        {
          value: r,
          name: "aaa",
          options: [
            { label: "Russian", value: "rus", icon: "Flag-Russia" },
            { label: "English", value: "eng", icon: "Flag-United-Kingdom" }
          ],
          idProp: r
        }
      ),
      !t && !s && /* @__PURE__ */ c(L, { children: [
        /* @__PURE__ */ e(R, { variant: "text_button", children: "Sign in" }),
        /* @__PURE__ */ e(R, { variant: "primary", children: "Sign up" })
      ] })
    ] })
  ] });
}, Ne = "_wrapper_19tyg_51", Ie = "_label_19tyg_60", ye = "_inputContainer_19tyg_79", Ce = "_error_19tyg_109", We = "_input_19tyg_79", ve = "_iconButton_19tyg_137", we = "_errorText_19tyg_156", $e = "_fullWidth_19tyg_163", m = {
  "regular-link": "_regular-link_19tyg_33",
  "small-link": "_small-link_19tyg_42",
  wrapper: Ne,
  label: Ie,
  inputContainer: ye,
  error: Ce,
  input: We,
  iconButton: ve,
  errorText: we,
  fullWidth: $e
}, tt = ({
  id: t,
  label: s,
  inputType: r,
  errorText: a,
  disabled: n = !1,
  fullWidth: l = !1,
  required: o,
  ...b
}) => {
  const [u, I] = B(!1), x = p(m.inputContainer, a && m.error, l && m.fullWidth), C = r === "password", g = r === "search", _ = (A) => C ? u ? "text" : "password" : A;
  return /* @__PURE__ */ c("div", { className: m.wrapper, children: [
    s && /* @__PURE__ */ e(
      "label",
      {
        "data-requiredfield": o,
        htmlFor: t,
        className: m.label,
        "data-disabled": n,
        children: s
      }
    ),
    /* @__PURE__ */ c("div", { className: x, "data-disabled": n, children: [
      g && /* @__PURE__ */ e("button", { type: "submit", className: m.iconButton, "data-disabled": n, children: /* @__PURE__ */ e(f, { name: "search" }) }),
      /* @__PURE__ */ e(
        "input",
        {
          id: t,
          type: _(r),
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
}, ke = "_Root_n6gai_51", Te = "_disabled_n6gai_57", je = "_Item_n6gai_63", Re = "_Indicator_n6gai_101", Se = "_Label_n6gai_120", y = {
  "regular-link": "_regular-link_n6gai_33",
  "small-link": "_small-link_n6gai_42",
  Root: ke,
  disabled: Te,
  Item: je,
  Indicator: Re,
  Label: Se
}, rt = ({ options: t, defaultValue: s, disabled: r, ...a }) => /* @__PURE__ */ e(
  v.Root,
  {
    className: y.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...a,
    children: t?.length && t.map((n) => /* @__PURE__ */ c(
      "div",
      {
        className: r ? y.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ e(v.Item, { className: y.Item, value: n.radioName, id: n.id, children: /* @__PURE__ */ e(v.Indicator, { className: y.Indicator }) }),
          /* @__PURE__ */ e("label", { className: y.Label, htmlFor: n.id, children: n.radioName })
        ]
      },
      n.id
    ))
  }
), Le = "_reCaptchaWrapper_hfn95_5", Ae = "_reCaptchaError_hfn95_11", qe = "_reCaptchaText_hfn95_15", k = {
  reCaptchaWrapper: Le,
  reCaptchaError: Ae,
  reCaptchaText: qe
}, at = ({ isCaptchaPassed: t, setCaptchaToken: s, siteKey: r, ...a }) => {
  const n = (o) => {
    t && o && s(o);
  }, l = p(k.reCaptchaWrapper, !t && k.reCaptchaError);
  return /* @__PURE__ */ c("div", { className: l, children: [
    /* @__PURE__ */ e(
      P,
      {
        sitekey: r,
        onChange: n,
        theme: "dark",
        ...a
      }
    ),
    !t && /* @__PURE__ */ e("span", { className: k.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
}, Ve = "_bodyTextArea_ssbwt_1", Be = "_textArea_ssbwt_6", Ee = "_fullWidth_ssbwt_37", Fe = "_label_ssbwt_41", He = "_disabled_ssbwt_45", Pe = "_error_ssbwt_49", ze = "_errorText_ssbwt_56", h = {
  bodyTextArea: Ve,
  textArea: Be,
  fullWidth: Ee,
  label: Fe,
  disabled: He,
  error: Pe,
  errorText: ze
}, nt = ["default"], st = (t) => {
  const {
    className: s,
    variant: r = "default",
    label: a,
    error: n,
    errorText: l,
    disabled: o = !1,
    fullWidth: b = !1,
    id: u,
    ...I
  } = t, x = p(
    h.textArea,
    n ? h.error : h[r],
    o && h.disabled,
    b && h.fullWidth,
    s
  );
  return /* @__PURE__ */ c("div", { className: h.bodyTextArea, children: [
    a && /* @__PURE__ */ e("label", { className: h.label, htmlFor: u, children: a }),
    /* @__PURE__ */ e("textarea", { className: x, disabled: o, id: u, ...I }),
    n && l && /* @__PURE__ */ e("div", { className: h.errorText, children: l })
  ] });
};
export {
  Qe as Alert,
  R as Button,
  Ye as Card,
  Ze as Checkbox,
  et as Header,
  tt as Input,
  rt as Radio,
  at as ReCaptcha,
  pe as Selectbox,
  st as TextAreaComponent,
  f as UniversalIcon,
  Xe as buttonVariant,
  ct as clsx,
  nt as textAreaVariant
};
//# sourceMappingURL=index.es.js.map
