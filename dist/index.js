import { jsx as e, jsxs as s, Fragment as A } from "react/jsx-runtime";
import V, { clsx as b } from "clsx";
import { clsx as ct } from "clsx";
import * as B from "react";
import q, { useState as F } from "react";
import E from "html-react-parser";
import { CheckIcon as H, ChevronDownIcon as j } from "@radix-ui/react-icons";
import { Checkbox as T, Select as d, RadioGroup as W } from "radix-ui";
import P from "react-google-recaptcha";
const U = "_box_1cx9d_5", D = "_error_1cx9d_16", G = "_success_1cx9d_21", J = "_fullWidth_1cx9d_26", K = "_content_1cx9d_30", M = "_icon_1cx9d_36", O = "_defaultIcon_1cx9d_41", y = {
  box: U,
  error: D,
  success: G,
  fullWidth: J,
  content: K,
  icon: M,
  defaultIcon: O
}, p = ({ name: t }) => {
  const [l, r] = q.useState(null);
  return q.useEffect(() => {
    fetch(`/assets/icons/${t}.svg`).then((a) => a.text()).then((a) => {
      const n = E(a);
      r(n);
    });
  }, [t]), l;
}, Ye = ({
  children: t,
  variant: l = "success",
  onClose: r,
  closable: a = !0,
  fullWidth: n = !1,
  ...c
}) => {
  const o = {
    box: b(y.box, l === "success" ? y.success : y.error, n && y.fullWidth),
    content: y.content,
    icon: b(y.icon)
  };
  return /* @__PURE__ */ e("div", { className: o.box, ...c, children: /* @__PURE__ */ s("div", { className: o.content, children: [
    l === "error" ? /* @__PURE__ */ s("div", { children: [
      /* @__PURE__ */ e("strong", { children: "Error!" }),
      " ",
      t
    ] }) : /* @__PURE__ */ e(A, { children: t }),
    a && /* @__PURE__ */ e("span", { className: o.icon, onClick: r, children: /* @__PURE__ */ e(p, { name: "close" }) })
  ] }) });
}, Q = "_primary_wceka_51", Y = "_fullWidth_wceka_72", z = "_secondary_wceka_94", X = "_outline_wceka_137", Z = "_text_button_wceka_180", w = {
  "regular-link": "_regular-link_wceka_33",
  "small-link": "_small-link_wceka_42",
  primary: Q,
  fullWidth: Y,
  secondary: z,
  outline: X,
  text_button: Z
}, ze = ["primary", "secondary", "outline", "text_button"], R = ({
  as: t,
  children: l,
  fullWidth: r = !1,
  className: a,
  variant: n = "primary",
  ...c
}) => {
  const o = b(w.button, w[n], r && w.fullWidth, a);
  return /* @__PURE__ */ e(t || "button", { className: o, ...c, children: l });
}, ee = "_cardBody_5flc7_1", te = "_fullWidth_5flc7_17", L = {
  cardBody: ee,
  fullWidth: te
}, Xe = ({ children: t, fullWidth: l, size: r = "md" }) => {
  const a = b(L.cardBody, l && L.fullWidth);
  return /* @__PURE__ */ e("div", { className: a, "data-cardSize": r, children: t });
}, ae = "_Root_1otx6_1", re = "_Indicator_1otx6_65", ne = "_Label_1otx6_82", v = {
  Root: ae,
  Indicator: re,
  Label: ne
}, Ze = ({ label: t, idProp: l, className: r, disabled: a, ...n }) => /* @__PURE__ */ s("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ e(
    T.Root,
    {
      className: v.Root,
      defaultChecked: !0,
      id: l,
      "aria-disabled": a,
      ...n,
      children: /* @__PURE__ */ e(T.Indicator, { className: v.Indicator, "aria-disabled": a, children: /* @__PURE__ */ e(H, {}) })
    }
  ),
  /* @__PURE__ */ e("label", { className: v.Label, htmlFor: l, "aria-disabled": a, children: t })
] }), le = "_Label_n0gyo_51", se = "_Icon_n0gyo_57", oe = "_Trigger_n0gyo_63", ce = "_Selected_n0gyo_123", ie = "_IconWrapper_n0gyo_133", de = "_fullWidth_n0gyo_138", _e = "_Viewport_n0gyo_142", me = "_Content_n0gyo_146", ue = "_Item_n0gyo_162", i = {
  "regular-link": "_regular-link_n0gyo_33",
  "small-link": "_small-link_n0gyo_42",
  Label: le,
  Icon: se,
  Trigger: oe,
  Selected: ce,
  IconWrapper: ie,
  fullWidth: de,
  Viewport: _e,
  Content: me,
  Item: ue
}, he = B.forwardRef(
  ({ children: t, className: l, ...r }, a) => /* @__PURE__ */ e(d.Item, { className: V(i.Item, l), ...r, ref: a, children: /* @__PURE__ */ e(d.ItemText, { className: i.ItemContent, children: t }) })
), be = ({
  idProp: t,
  name: l,
  label: r = "",
  placeholder: a = "Select...",
  disabled: n = !1,
  className: c,
  value: o,
  fullWidth: x,
  onValueChange: _,
  onOpenChange: N,
  options: f,
  ...k
}) => {
  const g = f.find((m) => m.value === o);
  return /* @__PURE__ */ s(d.Root, { onValueChange: _, onOpenChange: N, ...k, children: [
    r && /* @__PURE__ */ e("label", { htmlFor: t, className: i.Label, children: r }),
    /* @__PURE__ */ s(
      d.Trigger,
      {
        id: t,
        className: b(i.Trigger, x && i.fullWidth),
        disabled: n,
        "aria-label": r,
        "data-label": r ? "true" : "false",
        name: l,
        children: [
          g ? /* @__PURE__ */ s("div", { className: i.Selected, children: [
            g.icon && /* @__PURE__ */ e("span", { className: i.IconWrapper, children: /* @__PURE__ */ e(p, { name: g.icon }) }),
            g.label
          ] }) : /* @__PURE__ */ e(d.Value, { placeholder: a }),
          /* @__PURE__ */ e(d.Icon, { className: i.Icon, children: /* @__PURE__ */ e(j, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(d.Portal, { children: /* @__PURE__ */ e(d.Content, { className: i.Content, side: "bottom", position: "popper", children: /* @__PURE__ */ e(d.Viewport, { className: i.Viewport, children: /* @__PURE__ */ e(d.Group, { children: f.map((m) => /* @__PURE__ */ s(he, { className: i.Selected, value: m.value, children: [
      m.icon && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(p, { name: m.icon }) }),
      m.label
    ] }, m.value)) }) }) }) })
  ] });
}, pe = "_Header_1bbxm_51", xe = "_Logo_1bbxm_61", fe = "_Content_1bbxm_67", ge = "_IconWrapper_1bbxm_73", C = {
  "regular-link": "_regular-link_1bbxm_33",
  "small-link": "_small-link_1bbxm_42",
  Header: pe,
  Logo: xe,
  Content: fe,
  IconWrapper: ge
}, et = ({
  isAuth: t,
  isProcessingAuth: l = !1,
  localization: r,
  notificationCount: a = 0
}) => {
  const n = (c) => c > 9 ? "9+" : `${c}`;
  return /* @__PURE__ */ s("header", { className: C.Header, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: C.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ s("div", { className: C.Content, children: [
      t && /* @__PURE__ */ e("div", { className: C.IconWrapper, "data-notificationCount": n(a), children: /* @__PURE__ */ e(p, { name: "outline-bell" }) }),
      /* @__PURE__ */ e(
        be,
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
      !t && !l && /* @__PURE__ */ s(A, { children: [
        /* @__PURE__ */ e(R, { variant: "text_button", children: "Sign in" }),
        /* @__PURE__ */ e(R, { variant: "primary", children: "Sign up" })
      ] })
    ] })
  ] });
}, ye = "_wrapper_x5q2k_51", Ne = "_label_x5q2k_60", Ie = "_inputContainer_x5q2k_79", ke = "_error_x5q2k_109", Ce = "_input_x5q2k_79", We = "_iconButton_x5q2k_137", we = "_errorText_x5q2k_156", ve = "_fullWidth_x5q2k_163", u = {
  "regular-link": "_regular-link_x5q2k_33",
  "small-link": "_small-link_x5q2k_42",
  wrapper: ye,
  label: Ne,
  inputContainer: Ie,
  error: ke,
  input: Ce,
  iconButton: We,
  errorText: we,
  fullWidth: ve
}, tt = ({
  id: t,
  label: l,
  inputType: r,
  errorText: a,
  disabled: n = !1,
  fullWidth: c = !1,
  required: o,
  ...x
}) => {
  const [_, N] = F(!1), f = b(u.inputContainer, a && u.error, c && u.fullWidth), k = r === "password", g = r === "search", m = (S) => k ? _ ? "text" : "password" : S;
  return /* @__PURE__ */ s("div", { className: u.wrapper, children: [
    l && /* @__PURE__ */ e(
      "label",
      {
        "data-requiredField": o,
        htmlFor: t,
        className: u.label,
        "data-disabled": n,
        children: l
      }
    ),
    /* @__PURE__ */ s("div", { className: f, "data-disabled": n, children: [
      g && /* @__PURE__ */ e("button", { type: "submit", className: u.iconButton, "data-disabled": n, children: /* @__PURE__ */ e(p, { name: "search" }) }),
      /* @__PURE__ */ e(
        "input",
        {
          id: t,
          type: m(r),
          required: o,
          className: u.input,
          autoComplete: "off",
          ...x
        }
      ),
      k && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: u.iconButton,
          onClick: () => N(!_),
          "aria-label": _ ? "hide" : "show",
          children: _ ? /* @__PURE__ */ e(p, { name: "eye-outline" }) : /* @__PURE__ */ e(p, { name: "eye-off-outline" })
        }
      )
    ] }),
    a && /* @__PURE__ */ e("div", { className: u.errorText, children: a })
  ] });
}, $e = "_Root_1rqqy_51", qe = "_disabled_1rqqy_57", Te = "_Item_1rqqy_63", Re = "_Indicator_1rqqy_101", Le = "_Label_1rqqy_120", I = {
  "regular-link": "_regular-link_1rqqy_33",
  "small-link": "_small-link_1rqqy_42",
  Root: $e,
  disabled: qe,
  Item: Te,
  Indicator: Re,
  Label: Le
}, at = ({ options: t, defaultValue: l, disabled: r, ...a }) => /* @__PURE__ */ e(
  W.Root,
  {
    className: I.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...a,
    children: t?.length && t.map((n) => /* @__PURE__ */ s(
      "div",
      {
        className: r ? I.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ e(W.Item, { className: I.Item, value: n.radioName, id: n.id, children: /* @__PURE__ */ e(W.Indicator, { className: I.Indicator }) }),
          /* @__PURE__ */ e("label", { className: I.Label, htmlFor: n.id, children: n.radioName })
        ]
      },
      n.id
    ))
  }
), Ae = "_reCaptchaWrapper_hfn95_5", Se = "_reCaptchaError_hfn95_11", Ve = "_reCaptchaText_hfn95_15", $ = {
  reCaptchaWrapper: Ae,
  reCaptchaError: Se,
  reCaptchaText: Ve
}, rt = ({ isCaptchaPassed: t, setCaptchaToken: l }) => {
  const r = (n) => {
    t && n && l(n);
  }, a = b($.reCaptchaWrapper, !t && $.reCaptchaError);
  return /* @__PURE__ */ s("div", { className: a, children: [
    /* @__PURE__ */ e(
      P,
      {
        sitekey: "6Lc42W4rAAAAALRY3UMLjkJQojl_FCxLdjtDh_6o",
        onChange: r,
        theme: "dark"
      }
    ),
    !t && /* @__PURE__ */ e("span", { className: $.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
}, Be = "_bodyTextArea_ssbwt_1", Fe = "_textArea_ssbwt_6", Ee = "_fullWidth_ssbwt_37", He = "_label_ssbwt_41", je = "_disabled_ssbwt_45", Pe = "_error_ssbwt_49", Ue = "_errorText_ssbwt_56", h = {
  bodyTextArea: Be,
  textArea: Fe,
  fullWidth: Ee,
  label: He,
  disabled: je,
  error: Pe,
  errorText: Ue
}, nt = ["default"], lt = (t) => {
  const {
    className: l,
    variant: r = "default",
    label: a,
    error: n,
    errorText: c,
    disabled: o = !1,
    fullWidth: x = !1,
    id: _,
    ...N
  } = t, f = b(
    h.textArea,
    n ? h.error : h[r],
    o && h.disabled,
    x && h.fullWidth,
    l
  );
  return /* @__PURE__ */ s("div", { className: h.bodyTextArea, children: [
    a && /* @__PURE__ */ e("label", { className: h.label, htmlFor: _, children: a }),
    /* @__PURE__ */ e("textarea", { className: f, disabled: o, id: _, ...N }),
    n && c && /* @__PURE__ */ e("div", { className: h.errorText, children: c })
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
  rt as ReCaptcha,
  be as Selectbox,
  lt as TextAreaComponent,
  ze as buttonVariant,
  ct as clsx,
  nt as textAreaVariant
};
//# sourceMappingURL=index.js.map
