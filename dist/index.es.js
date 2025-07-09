import { jsx as e, jsxs as o, Fragment as A } from "react/jsx-runtime";
import V, { clsx as h } from "clsx";
import { clsx as ct } from "clsx";
import * as B from "react";
import T, { useState as j } from "react";
import E from "html-react-parser";
import { CheckIcon as F, ChevronDownIcon as H } from "@radix-ui/react-icons";
import { Checkbox as R, Select as d, RadioGroup as W } from "radix-ui";
import P from "react-google-recaptcha";
const z = "_box_1cx9d_5", G = "_error_1cx9d_16", U = "_success_1cx9d_21", D = "_fullWidth_1cx9d_26", K = "_content_1cx9d_30", O = "_icon_1cx9d_36", J = "_defaultIcon_1cx9d_41", I = {
  box: z,
  error: G,
  success: U,
  fullWidth: D,
  content: K,
  icon: O,
  defaultIcon: J
}, b = ({ name: t }) => {
  const [s, r] = T.useState(null);
  return T.useEffect(() => {
    fetch(`/dist/assets/icons/${t}.svg`).then((n) => n.text()).then((n) => {
      const a = E(n);
      r(a);
    });
  }, [t]), s;
}, Qe = ({
  children: t,
  variant: s = "success",
  onClose: r,
  closable: n = !0,
  fullWidth: a = !1,
  ...c
}) => {
  const l = {
    box: h(I.box, s === "success" ? I.success : I.error, a && I.fullWidth),
    content: I.content,
    icon: h(I.icon)
  };
  return /* @__PURE__ */ e("div", { className: l.box, ...c, children: /* @__PURE__ */ o("div", { className: l.content, children: [
    s === "error" ? /* @__PURE__ */ o("div", { children: [
      /* @__PURE__ */ e("strong", { children: "Error!" }),
      " ",
      t
    ] }) : /* @__PURE__ */ e(A, { children: t }),
    n && /* @__PURE__ */ e("span", { className: l.icon, onClick: r, children: /* @__PURE__ */ e(b, { name: "close" }) })
  ] }) });
}, M = "_primary_1vp5n_51", Q = "_fullWidth_1vp5n_72", X = "_secondary_1vp5n_94", Y = "_outline_1vp5n_137", Z = "_text_button_1vp5n_180", k = {
  "regular-link": "_regular-link_1vp5n_33",
  "small-link": "_small-link_1vp5n_42",
  primary: M,
  fullWidth: Q,
  secondary: X,
  outline: Y,
  text_button: Z
}, Xe = ["primary", "secondary", "outline", "text_button"], L = ({
  as: t,
  children: s,
  fullWidth: r = !1,
  className: n,
  variant: a = "primary",
  ...c
}) => {
  const l = h(k.button, k[a], r && k.fullWidth, n);
  return /* @__PURE__ */ e(t || "button", { className: l, ...c, children: s });
}, ee = "_cardBody_1rsrz_1", te = "_fullWidth_1rsrz_20", S = {
  cardBody: ee,
  fullWidth: te
}, Ye = ({ children: t, fullWidth: s, size: r = "md" }) => {
  const n = h(S.cardBody, s && S.fullWidth);
  return /* @__PURE__ */ e("div", { className: n, "data-cardsize": r, children: t });
}, ne = "_Root_1otx6_1", re = "_Indicator_1otx6_65", ae = "_Label_1otx6_82", $ = {
  Root: ne,
  Indicator: re,
  Label: ae
}, Ze = ({ label: t, idProp: s, className: r, disabled: n, ...a }) => /* @__PURE__ */ o("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ e(
    R.Root,
    {
      className: $.Root,
      defaultChecked: !0,
      id: s,
      "aria-disabled": n,
      ...a,
      children: /* @__PURE__ */ e(R.Indicator, { className: $.Indicator, "aria-disabled": n, children: /* @__PURE__ */ e(F, {}) })
    }
  ),
  /* @__PURE__ */ e("label", { className: $.Label, htmlFor: s, "aria-disabled": n, children: t })
] }), se = "_Label_3qpp8_51", le = "_Icon_3qpp8_57", oe = "_Trigger_3qpp8_63", ce = "_Selected_3qpp8_123", ie = "_IconWrapper_3qpp8_133", de = "_fullWidth_3qpp8_138", _e = "_Viewport_3qpp8_142", me = "_Content_3qpp8_146", ue = "_Item_3qpp8_162", i = {
  "regular-link": "_regular-link_3qpp8_33",
  "small-link": "_small-link_3qpp8_42",
  Label: se,
  Icon: le,
  Trigger: oe,
  Selected: ce,
  IconWrapper: ie,
  fullWidth: de,
  Viewport: _e,
  Content: me,
  Item: ue
}, pe = B.forwardRef(
  ({ children: t, className: s, ...r }, n) => /* @__PURE__ */ e(d.Item, { className: V(i.Item, s), ...r, ref: n, children: /* @__PURE__ */ e(d.ItemText, { className: i.ItemContent, children: t }) })
), he = ({
  idProp: t,
  name: s,
  label: r = "",
  placeholder: n = "Select...",
  disabled: a = !1,
  className: c,
  value: l,
  fullWidth: x,
  onValueChange: u,
  onOpenChange: g,
  options: f,
  ...v
}) => {
  const N = f.find((_) => _.value === l);
  return /* @__PURE__ */ o(d.Root, { onValueChange: u, onOpenChange: g, ...v, children: [
    r && /* @__PURE__ */ e("label", { htmlFor: t, className: i.Label, children: r }),
    /* @__PURE__ */ o(
      d.Trigger,
      {
        id: t,
        className: h(i.Trigger, x && i.fullWidth),
        disabled: a,
        "aria-label": r,
        "data-label": r ? "true" : "false",
        name: s,
        children: [
          N ? /* @__PURE__ */ o("div", { className: i.Selected, children: [
            N.icon && /* @__PURE__ */ e("span", { className: i.IconWrapper, children: /* @__PURE__ */ e(b, { name: N.icon }) }),
            N.label
          ] }) : /* @__PURE__ */ e(d.Value, { placeholder: n }),
          /* @__PURE__ */ e(d.Icon, { className: i.Icon, children: /* @__PURE__ */ e(H, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(d.Portal, { children: /* @__PURE__ */ e(d.Content, { className: i.Content, side: "bottom", position: "popper", children: /* @__PURE__ */ e(d.Viewport, { className: i.Viewport, children: /* @__PURE__ */ e(d.Group, { children: f.map((_) => /* @__PURE__ */ o(pe, { className: i.Selected, value: _.value, children: [
      _.icon && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(b, { name: _.icon }) }),
      _.label
    ] }, _.value)) }) }) }) })
  ] });
}, be = "_Header_n54yx_51", xe = "_Logo_n54yx_61", fe = "_Content_n54yx_67", Ne = "_IconWrapper_n54yx_73", y = {
  "regular-link": "_regular-link_n54yx_33",
  "small-link": "_small-link_n54yx_42",
  Header: be,
  Logo: xe,
  Content: fe,
  IconWrapper: Ne
}, et = ({
  isAuth: t,
  isProcessingAuth: s = !1,
  localization: r,
  notificationCount: n = 0
}) => {
  const a = (c) => c > 9 ? "9+" : `${c}`;
  return /* @__PURE__ */ o("header", { className: y.Header, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: y.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ o("div", { className: y.Content, children: [
      t && /* @__PURE__ */ e("div", { className: y.IconWrapper, "data-notificationcount": a(n), children: /* @__PURE__ */ e(b, { name: "outline-bell" }) }),
      /* @__PURE__ */ e(
        he,
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
      !t && !s && /* @__PURE__ */ o(A, { children: [
        /* @__PURE__ */ e(L, { variant: "text_button", children: "Sign in" }),
        /* @__PURE__ */ e(L, { variant: "primary", children: "Sign up" })
      ] })
    ] })
  ] });
}, Ie = "_wrapper_1s2xr_51", ge = "_label_1s2xr_60", Ce = "_inputContainer_1s2xr_79", ve = "_error_1s2xr_109", ye = "_input_1s2xr_79", We = "_iconButton_1s2xr_137", ke = "_errorText_1s2xr_156", $e = "_fullWidth_1s2xr_163", m = {
  "regular-link": "_regular-link_1s2xr_33",
  "small-link": "_small-link_1s2xr_42",
  wrapper: Ie,
  label: ge,
  inputContainer: Ce,
  error: ve,
  input: ye,
  iconButton: We,
  errorText: ke,
  fullWidth: $e
}, tt = ({
  id: t,
  label: s,
  inputType: r,
  errorText: n,
  disabled: a = !1,
  fullWidth: c = !1,
  required: l,
  ...x
}) => {
  const [u, g] = j(!1), f = h(m.inputContainer, n && m.error, c && m.fullWidth), v = r === "password", N = r === "search", _ = (q) => v ? u ? "text" : "password" : q;
  return /* @__PURE__ */ o("div", { className: m.wrapper, children: [
    s && /* @__PURE__ */ e(
      "label",
      {
        "data-requiredfield": l,
        htmlFor: t,
        className: m.label,
        "data-disabled": a,
        children: s
      }
    ),
    /* @__PURE__ */ o("div", { className: f, "data-disabled": a, children: [
      N && /* @__PURE__ */ e("button", { type: "submit", className: m.iconButton, "data-disabled": a, children: /* @__PURE__ */ e(b, { name: "search" }) }),
      /* @__PURE__ */ e(
        "input",
        {
          id: t,
          type: _(r),
          required: l,
          className: m.input,
          autoComplete: "off",
          ...x
        }
      ),
      v && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: m.iconButton,
          onClick: () => g(!u),
          children: u ? /* @__PURE__ */ e(b, { name: "eye-outline" }) : /* @__PURE__ */ e(b, { name: "eye-off-outline" })
        }
      )
    ] }),
    n && /* @__PURE__ */ e("div", { className: m.errorText, children: n })
  ] });
}, we = "_Root_n4djk_51", Te = "_disabled_n4djk_57", Re = "_Item_n4djk_63", Le = "_Indicator_n4djk_101", Se = "_Label_n4djk_120", C = {
  "regular-link": "_regular-link_n4djk_33",
  "small-link": "_small-link_n4djk_42",
  Root: we,
  disabled: Te,
  Item: Re,
  Indicator: Le,
  Label: Se
}, nt = ({ options: t, defaultValue: s, disabled: r, ...n }) => /* @__PURE__ */ e(
  W.Root,
  {
    className: C.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...n,
    children: t?.length && t.map((a) => /* @__PURE__ */ o(
      "div",
      {
        className: r ? C.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ e(W.Item, { className: C.Item, value: a.radioName, id: a.id, children: /* @__PURE__ */ e(W.Indicator, { className: C.Indicator }) }),
          /* @__PURE__ */ e("label", { className: C.Label, htmlFor: a.id, children: a.radioName })
        ]
      },
      a.id
    ))
  }
), Ae = "_reCaptchaWrapper_hfn95_5", qe = "_reCaptchaError_hfn95_11", Ve = "_reCaptchaText_hfn95_15", w = {
  reCaptchaWrapper: Ae,
  reCaptchaError: qe,
  reCaptchaText: Ve
}, rt = ({ isCaptchaPassed: t, setCaptchaToken: s, siteKey: r, ...n }) => {
  const a = (l) => {
    t && l && s(l);
  }, c = h(w.reCaptchaWrapper, !t && w.reCaptchaError);
  return /* @__PURE__ */ o("div", { className: c, children: [
    /* @__PURE__ */ e(
      P,
      {
        sitekey: r,
        onChange: a,
        theme: "dark",
        ...n
      }
    ),
    !t && /* @__PURE__ */ e("span", { className: w.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
}, Be = "_bodyTextArea_ssbwt_1", je = "_textArea_ssbwt_6", Ee = "_fullWidth_ssbwt_37", Fe = "_label_ssbwt_41", He = "_disabled_ssbwt_45", Pe = "_error_ssbwt_49", ze = "_errorText_ssbwt_56", p = {
  bodyTextArea: Be,
  textArea: je,
  fullWidth: Ee,
  label: Fe,
  disabled: He,
  error: Pe,
  errorText: ze
}, at = ["default"], st = (t) => {
  const {
    className: s,
    variant: r = "default",
    label: n,
    error: a,
    errorText: c,
    disabled: l = !1,
    fullWidth: x = !1,
    id: u,
    ...g
  } = t, f = h(
    p.textArea,
    a ? p.error : p[r],
    l && p.disabled,
    x && p.fullWidth,
    s
  );
  return /* @__PURE__ */ o("div", { className: p.bodyTextArea, children: [
    n && /* @__PURE__ */ e("label", { className: p.label, htmlFor: u, children: n }),
    /* @__PURE__ */ e("textarea", { className: f, disabled: l, id: u, ...g }),
    a && c && /* @__PURE__ */ e("div", { className: p.errorText, children: c })
  ] });
};
export {
  Qe as Alert,
  L as Button,
  Ye as Card,
  Ze as Checkbox,
  et as Header,
  tt as Input,
  nt as Radio,
  rt as ReCaptcha,
  he as Selectbox,
  st as TextAreaComponent,
  b as UniversalIcon,
  Xe as buttonVariant,
  ct as clsx,
  at as textAreaVariant
};
//# sourceMappingURL=index.es.js.map
