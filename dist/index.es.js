import { jsx as e, jsxs as o, Fragment as S } from "react/jsx-runtime";
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
}, f = ({ name: t }) => {
  const [s, a] = T.useState(null);
  return T.useEffect(() => {
    fetch(`/assets/icons/${t}.svg`).then((r) => r.text()).then((r) => {
      const n = E(r);
      a(n);
    });
  }, [t]), s;
}, Qe = ({
  children: t,
  variant: s = "success",
  onClose: a,
  closable: r = !0,
  fullWidth: n = !1,
  ...c
}) => {
  const l = {
    box: p(N.box, s === "success" ? N.success : N.error, n && N.fullWidth),
    content: N.content,
    icon: p(N.icon)
  };
  return /* @__PURE__ */ e("div", { className: l.box, ...c, children: /* @__PURE__ */ o("div", { className: l.content, children: [
    s === "error" ? /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ e("strong", { children: "Error!" }),
      " ",
      t
    ] }) : /* @__PURE__ */ e(S, { children: t }),
    r && /* @__PURE__ */ e("span", { className: l.icon, onClick: a, children: /* @__PURE__ */ e(f, { name: "close" }) })
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
  fullWidth: a = !1,
  className: r,
  variant: n = "primary",
  ...c
}) => {
  const l = p(w.button, w[n], a && w.fullWidth, r);
  return /* @__PURE__ */ e(t || "button", { className: l, ...c, children: s });
}, ee = "_cardBody_1rsrz_1", te = "_fullWidth_1rsrz_20", L = {
  cardBody: ee,
  fullWidth: te
}, Ye = ({ children: t, fullWidth: s, size: a = "md" }) => {
  const r = p(L.cardBody, s && L.fullWidth);
  return /* @__PURE__ */ e("div", { className: r, "data-cardsize": a, children: t });
}, re = "_Root_1otx6_1", ae = "_Indicator_1otx6_65", ne = "_Label_1otx6_82", $ = {
  Root: re,
  Indicator: ae,
  Label: ne
}, Ze = ({ label: t, idProp: s, className: a, disabled: r, ...n }) => /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ e(
    j.Root,
    {
      className: $.Root,
      defaultChecked: !0,
      id: s,
      "aria-disabled": r,
      ...n,
      children: /* @__PURE__ */ e(j.Indicator, { className: $.Indicator, "aria-disabled": r, children: /* @__PURE__ */ e(F, {}) })
    }
  ),
  /* @__PURE__ */ e("label", { className: $.Label, htmlFor: s, "aria-disabled": r, children: t })
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
  ({ children: t, className: s, ...a }, r) => /* @__PURE__ */ e(d.Item, { className: q(i.Item, s), ...a, ref: r, children: /* @__PURE__ */ e(d.ItemText, { className: i.ItemContent, children: t }) })
), pe = ({
  idProp: t,
  name: s,
  label: a = "",
  placeholder: r = "Select...",
  disabled: n = !1,
  className: c,
  value: l,
  fullWidth: b,
  onValueChange: u,
  onOpenChange: I,
  options: x,
  ...C
}) => {
  const g = x.find((_) => _.value === l);
  return /* @__PURE__ */ o(d.Root, { onValueChange: u, onOpenChange: I, ...C, children: [
    a && /* @__PURE__ */ e("label", { htmlFor: t, className: i.Label, children: a }),
    /* @__PURE__ */ o(
      d.Trigger,
      {
        id: t,
        className: p(i.Trigger, b && i.fullWidth),
        disabled: n,
        "aria-label": a,
        "data-label": a ? "true" : "false",
        name: s,
        children: [
          g ? /* @__PURE__ */ o("div", { className: i.Selected, children: [
            g.icon && /* @__PURE__ */ e("span", { className: i.IconWrapper, children: /* @__PURE__ */ e(f, { name: g.icon }) }),
            g.label
          ] }) : /* @__PURE__ */ e(d.Value, { placeholder: r }),
          /* @__PURE__ */ e(d.Icon, { className: i.Icon, children: /* @__PURE__ */ e(H, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(d.Portal, { children: /* @__PURE__ */ e(d.Content, { className: i.Content, side: "bottom", position: "popper", children: /* @__PURE__ */ e(d.Viewport, { className: i.Viewport, children: /* @__PURE__ */ e(d.Group, { children: x.map((_) => /* @__PURE__ */ o(he, { className: i.Selected, value: _.value, children: [
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
  localization: a,
  notificationCount: r = 0
}) => {
  const n = (c) => c > 9 ? "9+" : `${c}`;
  return /* @__PURE__ */ o("header", { className: W.Header, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: W.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ o("div", { className: W.Content, children: [
      t && /* @__PURE__ */ e("div", { className: W.IconWrapper, "data-notificationcount": n(r), children: /* @__PURE__ */ e(f, { name: "outline-bell" }) }),
      /* @__PURE__ */ e(
        pe,
        {
          value: a,
          name: "aaa",
          options: [
            { label: "Russian", value: "rus", icon: "Flag-Russia" },
            { label: "English", value: "eng", icon: "Flag-United-Kingdom" }
          ],
          idProp: a
        }
      ),
      !t && !s && /* @__PURE__ */ o(S, { children: [
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
  inputType: a,
  errorText: r,
  disabled: n = !1,
  fullWidth: c = !1,
  required: l,
  ...b
}) => {
  const [u, I] = B(!1), x = p(m.inputContainer, r && m.error, c && m.fullWidth), C = a === "password", g = a === "search", _ = (A) => C ? u ? "text" : "password" : A;
  return /* @__PURE__ */ o("div", { className: m.wrapper, children: [
    s && /* @__PURE__ */ e(
      "label",
      {
        "data-requiredfield": l,
        htmlFor: t,
        className: m.label,
        "data-disabled": n,
        children: s
      }
    ),
    /* @__PURE__ */ o("div", { className: x, "data-disabled": n, children: [
      g && /* @__PURE__ */ e("button", { type: "submit", className: m.iconButton, "data-disabled": n, children: /* @__PURE__ */ e(f, { name: "search" }) }),
      /* @__PURE__ */ e(
        "input",
        {
          id: t,
          type: _(a),
          required: l,
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
    r && /* @__PURE__ */ e("div", { className: m.errorText, children: r })
  ] });
}, ke = "_Root_n6gai_51", Te = "_disabled_n6gai_57", je = "_Item_n6gai_63", Re = "_Indicator_n6gai_101", Le = "_Label_n6gai_120", y = {
  "regular-link": "_regular-link_n6gai_33",
  "small-link": "_small-link_n6gai_42",
  Root: ke,
  disabled: Te,
  Item: je,
  Indicator: Re,
  Label: Le
}, rt = ({ options: t, defaultValue: s, disabled: a, ...r }) => /* @__PURE__ */ e(
  v.Root,
  {
    className: y.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...r,
    children: t?.length && t.map((n) => /* @__PURE__ */ o(
      "div",
      {
        className: a ? y.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ e(v.Item, { className: y.Item, value: n.radioName, id: n.id, children: /* @__PURE__ */ e(v.Indicator, { className: y.Indicator }) }),
          /* @__PURE__ */ e("label", { className: y.Label, htmlFor: n.id, children: n.radioName })
        ]
      },
      n.id
    ))
  }
), Se = "_reCaptchaWrapper_hfn95_5", Ae = "_reCaptchaError_hfn95_11", qe = "_reCaptchaText_hfn95_15", k = {
  reCaptchaWrapper: Se,
  reCaptchaError: Ae,
  reCaptchaText: qe
}, at = ({ isCaptchaPassed: t, setCaptchaToken: s, siteKey: a, ...r }) => {
  const n = (l) => {
    t && l && s(l);
  }, c = p(k.reCaptchaWrapper, !t && k.reCaptchaError);
  return /* @__PURE__ */ o("div", { className: c, children: [
    /* @__PURE__ */ e(
      P,
      {
        sitekey: a,
        onChange: n,
        theme: "dark",
        ...r
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
    variant: a = "default",
    label: r,
    error: n,
    errorText: c,
    disabled: l = !1,
    fullWidth: b = !1,
    id: u,
    ...I
  } = t, x = p(
    h.textArea,
    n ? h.error : h[a],
    l && h.disabled,
    b && h.fullWidth,
    s
  );
  return /* @__PURE__ */ o("div", { className: h.bodyTextArea, children: [
    r && /* @__PURE__ */ e("label", { className: h.label, htmlFor: u, children: r }),
    /* @__PURE__ */ e("textarea", { className: x, disabled: l, id: u, ...I }),
    n && c && /* @__PURE__ */ e("div", { className: h.errorText, children: c })
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
