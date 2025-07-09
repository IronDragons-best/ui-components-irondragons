import { jsx as e, jsxs as o, Fragment as A } from "react/jsx-runtime";
import B, { clsx as b } from "clsx";
import { clsx as ct } from "clsx";
import * as z from "react";
import T, { useState as E } from "react";
import F from "html-react-parser";
import { CheckIcon as H, ChevronDownIcon as P } from "@radix-ui/react-icons";
import { Checkbox as R, Select as d, RadioGroup as v } from "radix-ui";
import j from "react-google-recaptcha";
const G = "_box_1cx9d_5", U = "_error_1cx9d_16", D = "_success_1cx9d_21", K = "_fullWidth_1cx9d_26", O = "_content_1cx9d_30", q = "_icon_1cx9d_36", J = "_defaultIcon_1cx9d_41", g = {
  box: G,
  error: U,
  success: D,
  fullWidth: K,
  content: O,
  icon: q,
  defaultIcon: J
}, p = ({ name: t }) => {
  const [l, s] = T.useState(null);
  return T.useEffect(() => {
    fetch(`/assets/icons/${t}.svg`).then((a) => a.text()).then((a) => {
      const r = F(a);
      s(r);
    });
  }, [t]), l;
}, Qe = ({
  children: t,
  variant: l = "success",
  onClose: s,
  closable: a = !0,
  fullWidth: r = !1,
  ...c
}) => {
  const n = {
    box: b(g.box, l === "success" ? g.success : g.error, r && g.fullWidth),
    content: g.content,
    icon: b(g.icon)
  };
  return /* @__PURE__ */ e("div", { className: n.box, ...c, children: /* @__PURE__ */ o("div", { className: n.content, children: [
    l === "error" ? /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ e("strong", { children: "Error!" }),
      " ",
      t
    ] }) : /* @__PURE__ */ e(A, { children: t }),
    a && /* @__PURE__ */ e("span", { className: n.icon, onClick: s, children: /* @__PURE__ */ e(p, { name: "close" }) })
  ] }) });
}, M = "_primary_blzua_51", Q = "_fullWidth_blzua_72", X = "_secondary_blzua_94", Y = "_outline_blzua_137", Z = "_text_button_blzua_180", $ = {
  "regular-link": "_regular-link_blzua_33",
  "small-link": "_small-link_blzua_42",
  primary: M,
  fullWidth: Q,
  secondary: X,
  outline: Y,
  text_button: Z
}, Xe = ["primary", "secondary", "outline", "text_button"], L = ({
  as: t,
  children: l,
  fullWidth: s = !1,
  className: a,
  variant: r = "primary",
  ...c
}) => {
  const n = b($.button, $[r], s && $.fullWidth, a);
  return /* @__PURE__ */ e(t || "button", { className: n, ...c, children: l });
}, ee = "_cardBody_1rsrz_1", te = "_fullWidth_1rsrz_20", S = {
  cardBody: ee,
  fullWidth: te
}, Ye = ({ children: t, fullWidth: l, size: s = "md" }) => {
  const a = b(S.cardBody, l && S.fullWidth);
  return /* @__PURE__ */ e("div", { className: a, "data-cardsize": s, children: t });
}, ae = "_Root_1otx6_1", se = "_Indicator_1otx6_65", re = "_Label_1otx6_82", k = {
  Root: ae,
  Indicator: se,
  Label: re
}, Ze = ({ label: t, idProp: l, className: s, disabled: a, ...r }) => /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ e(
    R.Root,
    {
      className: k.Root,
      defaultChecked: !0,
      id: l,
      "aria-disabled": a,
      ...r,
      children: /* @__PURE__ */ e(R.Indicator, { className: k.Indicator, "aria-disabled": a, children: /* @__PURE__ */ e(H, {}) })
    }
  ),
  /* @__PURE__ */ e("label", { className: k.Label, htmlFor: l, "aria-disabled": a, children: t })
] }), le = "_Label_7smsi_51", ne = "_Icon_7smsi_57", oe = "_Trigger_7smsi_63", ce = "_Selected_7smsi_123", ie = "_IconWrapper_7smsi_133", de = "_fullWidth_7smsi_138", _e = "_Viewport_7smsi_142", me = "_Content_7smsi_146", ue = "_Item_7smsi_162", i = {
  "regular-link": "_regular-link_7smsi_33",
  "small-link": "_small-link_7smsi_42",
  Label: le,
  Icon: ne,
  Trigger: oe,
  Selected: ce,
  IconWrapper: ie,
  fullWidth: de,
  Viewport: _e,
  Content: me,
  Item: ue
}, he = z.forwardRef(
  ({ children: t, className: l, ...s }, a) => /* @__PURE__ */ e(d.Item, { className: B(i.Item, l), ...s, ref: a, children: /* @__PURE__ */ e(d.ItemText, { className: i.ItemContent, children: t }) })
), be = ({
  idProp: t,
  name: l,
  label: s = "",
  placeholder: a = "Select...",
  disabled: r = !1,
  className: c,
  value: n,
  fullWidth: f,
  onValueChange: u,
  onOpenChange: I,
  options: x,
  ...C
}) => {
  const N = x.find((_) => _.value === n);
  return /* @__PURE__ */ o(d.Root, { onValueChange: u, onOpenChange: I, ...C, children: [
    s && /* @__PURE__ */ e("label", { htmlFor: t, className: i.Label, children: s }),
    /* @__PURE__ */ o(
      d.Trigger,
      {
        id: t,
        className: b(i.Trigger, f && i.fullWidth),
        disabled: r,
        "aria-label": s,
        "data-label": s ? "true" : "false",
        name: l,
        children: [
          N ? /* @__PURE__ */ o("div", { className: i.Selected, children: [
            N.icon && /* @__PURE__ */ e("span", { className: i.IconWrapper, children: /* @__PURE__ */ e(p, { name: N.icon }) }),
            N.label
          ] }) : /* @__PURE__ */ e(d.Value, { placeholder: a }),
          /* @__PURE__ */ e(d.Icon, { className: i.Icon, children: /* @__PURE__ */ e(P, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(d.Portal, { children: /* @__PURE__ */ e(d.Content, { className: i.Content, side: "bottom", position: "popper", children: /* @__PURE__ */ e(d.Viewport, { className: i.Viewport, children: /* @__PURE__ */ e(d.Group, { children: x.map((_) => /* @__PURE__ */ o(he, { className: i.Selected, value: _.value, children: [
      _.icon && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(p, { name: _.icon }) }),
      _.label
    ] }, _.value)) }) }) }) })
  ] });
}, pe = "_Header_1bt8i_51", fe = "_Logo_1bt8i_61", xe = "_Content_1bt8i_67", Ne = "_IconWrapper_1bt8i_73", W = {
  "regular-link": "_regular-link_1bt8i_33",
  "small-link": "_small-link_1bt8i_42",
  Header: pe,
  Logo: fe,
  Content: xe,
  IconWrapper: Ne
}, et = ({
  isAuth: t,
  isProcessingAuth: l = !1,
  localization: s,
  notificationCount: a = 0
}) => {
  const r = (c) => c > 9 ? "9+" : `${c}`;
  return /* @__PURE__ */ o("header", { className: W.Header, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: W.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ o("div", { className: W.Content, children: [
      t && /* @__PURE__ */ e("div", { className: W.IconWrapper, "data-notificationcount": r(a), children: /* @__PURE__ */ e(p, { name: "outline-bell" }) }),
      /* @__PURE__ */ e(
        be,
        {
          value: s,
          name: "aaa",
          options: [
            { label: "Russian", value: "rus", icon: "Flag-Russia" },
            { label: "English", value: "eng", icon: "Flag-United-Kingdom" }
          ],
          idProp: s
        }
      ),
      !t && !l && /* @__PURE__ */ o(A, { children: [
        /* @__PURE__ */ e(L, { variant: "text_button", children: "Sign in" }),
        /* @__PURE__ */ e(L, { variant: "primary", children: "Sign up" })
      ] })
    ] })
  ] });
}, ge = "_wrapper_yl88m_51", Ie = "_label_yl88m_60", ye = "_inputContainer_yl88m_79", Ce = "_error_yl88m_109", We = "_input_yl88m_79", ve = "_iconButton_yl88m_137", $e = "_errorText_yl88m_156", ke = "_fullWidth_yl88m_163", m = {
  "regular-link": "_regular-link_yl88m_33",
  "small-link": "_small-link_yl88m_42",
  wrapper: ge,
  label: Ie,
  inputContainer: ye,
  error: Ce,
  input: We,
  iconButton: ve,
  errorText: $e,
  fullWidth: ke
}, tt = ({
  id: t,
  label: l,
  inputType: s,
  errorText: a,
  disabled: r = !1,
  fullWidth: c = !1,
  required: n,
  ...f
}) => {
  const [u, I] = E(!1), x = b(m.inputContainer, a && m.error, c && m.fullWidth), C = s === "password", N = s === "search", _ = (V) => C ? u ? "text" : "password" : V;
  return /* @__PURE__ */ o("div", { className: m.wrapper, children: [
    l && /* @__PURE__ */ e(
      "label",
      {
        "data-requiredfield": n,
        htmlFor: t,
        className: m.label,
        "data-disabled": r,
        children: l
      }
    ),
    /* @__PURE__ */ o("div", { className: x, "data-disabled": r, children: [
      N && /* @__PURE__ */ e("button", { type: "submit", className: m.iconButton, "data-disabled": r, children: /* @__PURE__ */ e(p, { name: "search" }) }),
      /* @__PURE__ */ e(
        "input",
        {
          id: t,
          type: _(s),
          required: n,
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
          children: u ? /* @__PURE__ */ e(p, { name: "eye-outline" }) : /* @__PURE__ */ e(p, { name: "eye-off-outline" })
        }
      )
    ] }),
    a && /* @__PURE__ */ e("div", { className: m.errorText, children: a })
  ] });
}, we = "_Root_ohgsb_51", Te = "_disabled_ohgsb_57", Re = "_Item_ohgsb_63", Le = "_Indicator_ohgsb_101", Se = "_Label_ohgsb_120", y = {
  "regular-link": "_regular-link_ohgsb_33",
  "small-link": "_small-link_ohgsb_42",
  Root: we,
  disabled: Te,
  Item: Re,
  Indicator: Le,
  Label: Se
}, at = ({ options: t, defaultValue: l, disabled: s, ...a }) => /* @__PURE__ */ e(
  v.Root,
  {
    className: y.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...a,
    children: t?.length && t.map((r) => /* @__PURE__ */ o(
      "div",
      {
        className: s ? y.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ e(v.Item, { className: y.Item, value: r.radioName, id: r.id, children: /* @__PURE__ */ e(v.Indicator, { className: y.Indicator }) }),
          /* @__PURE__ */ e("label", { className: y.Label, htmlFor: r.id, children: r.radioName })
        ]
      },
      r.id
    ))
  }
), Ae = "_reCaptchaWrapper_hfn95_5", Ve = "_reCaptchaError_hfn95_11", Be = "_reCaptchaText_hfn95_15", w = {
  reCaptchaWrapper: Ae,
  reCaptchaError: Ve,
  reCaptchaText: Be
}, st = ({ isCaptchaPassed: t, setCaptchaToken: l, siteKey: s, ...a }) => {
  const r = (n) => {
    t && n && l(n);
  }, c = b(w.reCaptchaWrapper, !t && w.reCaptchaError);
  return /* @__PURE__ */ o("div", { className: c, children: [
    /* @__PURE__ */ e(
      j,
      {
        sitekey: s,
        onChange: r,
        theme: "dark",
        ...a
      }
    ),
    !t && /* @__PURE__ */ e("span", { className: w.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
}, ze = "_bodyTextArea_ssbwt_1", Ee = "_textArea_ssbwt_6", Fe = "_fullWidth_ssbwt_37", He = "_label_ssbwt_41", Pe = "_disabled_ssbwt_45", je = "_error_ssbwt_49", Ge = "_errorText_ssbwt_56", h = {
  bodyTextArea: ze,
  textArea: Ee,
  fullWidth: Fe,
  label: He,
  disabled: Pe,
  error: je,
  errorText: Ge
}, rt = ["default"], lt = (t) => {
  const {
    className: l,
    variant: s = "default",
    label: a,
    error: r,
    errorText: c,
    disabled: n = !1,
    fullWidth: f = !1,
    id: u,
    ...I
  } = t, x = b(
    h.textArea,
    r ? h.error : h[s],
    n && h.disabled,
    f && h.fullWidth,
    l
  );
  return /* @__PURE__ */ o("div", { className: h.bodyTextArea, children: [
    a && /* @__PURE__ */ e("label", { className: h.label, htmlFor: u, children: a }),
    /* @__PURE__ */ e("textarea", { className: x, disabled: n, id: u, ...I }),
    r && c && /* @__PURE__ */ e("div", { className: h.errorText, children: c })
  ] });
};
export {
  Qe as Alert,
  L as Button,
  Ye as Card,
  Ze as Checkbox,
  et as Header,
  tt as Input,
  at as Radio,
  st as ReCaptcha,
  be as Selectbox,
  lt as TextAreaComponent,
  p as UniversalIcon,
  Xe as buttonVariant,
  ct as clsx,
  rt as textAreaVariant
};
//# sourceMappingURL=index.es.js.map
