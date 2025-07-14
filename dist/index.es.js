import { jsx as e, jsxs as c, Fragment as V } from "react/jsx-runtime";
import B, { clsx as b } from "clsx";
import { clsx as dt } from "clsx";
import * as j from "react";
import R, { useState as E } from "react";
import F, { domToReact as H } from "html-react-parser";
import { CheckIcon as P, ChevronDownIcon as z } from "@radix-ui/react-icons";
import { Checkbox as L, Select as u, RadioGroup as W } from "radix-ui";
import G from "react-google-recaptcha";
const U = "_box_1cx9d_5", D = "_error_1cx9d_16", K = "_success_1cx9d_21", O = "_fullWidth_1cx9d_26", q = "_content_1cx9d_30", J = "_icon_1cx9d_36", M = "_defaultIcon_1cx9d_41", w = {
  box: U,
  error: D,
  success: K,
  fullWidth: O,
  content: q,
  icon: J,
  defaultIcon: M
}, y = ({
  name: t,
  dataStatic: s = !1,
  width: a = "24px",
  height: r = "24px",
  size: n,
  className: o,
  ...l
}) => {
  const [x, _] = R.useState(null);
  return R.useEffect(() => {
    fetch(`/assets/icons/${t}.svg`).then((m) => m.text()).then((m) => {
      const h = {
        replace: (I) => {
          if (I.type === "tag" && I.name === "svg") {
            const p = I, d = {
              ...p.attribs,
              ...s ? { "data-static": "true" } : { "data-static": "false" },
              width: a,
              height: r,
              size: n,
              className: o,
              ...l
            };
            return /* @__PURE__ */ e("svg", { ...d, children: H(p.children, h) });
          }
        }
      }, g = F(m, h);
      _(g);
    });
  }, [t, s]), x;
}, Ye = ({
  children: t,
  variant: s = "success",
  onClose: a,
  closable: r = !0,
  fullWidth: n = !1,
  ...o
}) => {
  const l = {
    box: b(w.box, s === "success" ? w.success : w.error, n && w.fullWidth),
    content: w.content,
    icon: b(w.icon)
  };
  return /* @__PURE__ */ e("div", { className: l.box, ...o, children: /* @__PURE__ */ c("div", { className: l.content, children: [
    s === "error" ? /* @__PURE__ */ c("div", { children: [
      /* @__PURE__ */ e("strong", { children: "Error!" }),
      " ",
      t
    ] }) : /* @__PURE__ */ e(V, { children: t }),
    r && /* @__PURE__ */ e("span", { className: l.icon, onClick: a, children: /* @__PURE__ */ e(y, { name: "close" }) })
  ] }) });
}, Q = "_primary_4txjf_51", X = "_fullWidth_4txjf_72", Y = "_secondary_4txjf_94", Z = "_outline_4txjf_137", ee = "_text_button_4txjf_180", $ = {
  "regular-link": "_regular-link_4txjf_33",
  "small-link": "_small-link_4txjf_42",
  primary: Q,
  fullWidth: X,
  secondary: Y,
  outline: Z,
  text_button: ee
}, Ze = ["primary", "secondary", "outline", "text_button"], S = ({
  as: t,
  children: s,
  fullWidth: a = !1,
  className: r,
  variant: n = "primary",
  ...o
}) => {
  const l = b($.button, $[n], a && $.fullWidth, r);
  return /* @__PURE__ */ e(t || "button", { className: l, ...o, children: s });
}, te = "_cardBody_1rsrz_1", ae = "_fullWidth_1rsrz_20", A = {
  cardBody: te,
  fullWidth: ae
}, et = ({ children: t, fullWidth: s, size: a = "md" }) => {
  const r = b(A.cardBody, s && A.fullWidth);
  return /* @__PURE__ */ e("div", { className: r, "data-cardsize": a, children: t });
}, re = "_Root_1otx6_1", ne = "_Indicator_1otx6_65", se = "_Label_1otx6_82", v = {
  Root: re,
  Indicator: ne,
  Label: se
}, tt = ({ label: t, idProp: s, className: a, disabled: r, ...n }) => /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ e(
    L.Root,
    {
      className: v.Root,
      defaultChecked: !0,
      id: s,
      "aria-disabled": r,
      ...n,
      children: /* @__PURE__ */ e(L.Indicator, { className: v.Indicator, "aria-disabled": r, children: /* @__PURE__ */ e(P, {}) })
    }
  ),
  /* @__PURE__ */ e("label", { className: v.Label, htmlFor: s, "aria-disabled": r, children: t })
] }), le = "_Label_ewe9k_51", oe = "_Icon_ewe9k_57", ce = "_Trigger_ewe9k_63", ie = "_pagination_ewe9k_123", de = "_Selected_ewe9k_140", _e = "_IconWrapper_ewe9k_150", ue = "_fullWidth_ewe9k_155", me = "_Viewport_ewe9k_159", he = "_Content_ewe9k_163", pe = "_Item_ewe9k_183", i = {
  "regular-link": "_regular-link_ewe9k_33",
  "small-link": "_small-link_ewe9k_42",
  Label: le,
  Icon: oe,
  Trigger: ce,
  pagination: ie,
  Selected: de,
  IconWrapper: _e,
  fullWidth: ue,
  Viewport: me,
  Content: he,
  Item: pe
}, fe = j.forwardRef(
  ({ children: t, variant: s, className: a, ...r }, n) => /* @__PURE__ */ e(u.Item, { className: B(i[`${s}`], i.Item, a), ...r, ref: n, children: /* @__PURE__ */ e(u.ItemText, { className: i.ItemContent, children: t }) })
), be = ({
  idProp: t,
  name: s,
  label: a = "",
  placeholder: r = "Select...",
  disabled: n = !1,
  className: o,
  value: l,
  fullWidth: x,
  onValueChange: _,
  onOpenChange: m,
  options: h,
  variant: g = "default",
  ...I
}) => {
  const p = h.find((d) => d.value === l);
  return /* @__PURE__ */ c(u.Root, { onValueChange: _, onOpenChange: m, ...I, children: [
    a && /* @__PURE__ */ e("label", { htmlFor: t, className: i.Label, children: a }),
    /* @__PURE__ */ c(
      u.Trigger,
      {
        id: t,
        className: b(i[`${g}`], i.Trigger, x && i.fullWidth),
        disabled: n,
        "aria-label": a,
        "data-label": a ? "true" : "false",
        name: s,
        children: [
          p ? /* @__PURE__ */ c("div", { className: i.Selected, children: [
            p.icon && /* @__PURE__ */ e("span", { className: i.IconWrapper, children: /* @__PURE__ */ e(y, { name: p.icon }) }),
            p.label
          ] }) : /* @__PURE__ */ e(u.Value, { placeholder: r }),
          /* @__PURE__ */ e(u.Icon, { className: i.Icon, children: /* @__PURE__ */ e(z, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(u.Portal, { children: /* @__PURE__ */ e(u.Content, { className: b(i[`${g}`], i.Content), side: "bottom", position: "popper", children: /* @__PURE__ */ e(u.Viewport, { className: i.Viewport, children: /* @__PURE__ */ e(u.Group, { children: h.map((d) => /* @__PURE__ */ c(fe, { className: i.Selected, variant: g, value: d.value.toString(), children: [
      d.icon && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(y, { name: d.icon }) }),
      d.label
    ] }, d.value)) }) }) }) })
  ] });
}, xe = "_Header_18rwr_51", ge = "_Logo_18rwr_61", Ne = "_Content_18rwr_67", Ie = "_IconWrapper_18rwr_73", k = {
  "regular-link": "_regular-link_18rwr_33",
  "small-link": "_small-link_18rwr_42",
  Header: xe,
  Logo: ge,
  Content: Ne,
  IconWrapper: Ie
}, at = ({
  isAuth: t,
  isProcessingAuth: s = !1,
  localization: a,
  notificationCount: r = 0
}) => {
  const n = (o) => o > 9 ? "9+" : `${o}`;
  return /* @__PURE__ */ c("header", { className: k.Header, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: k.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ c("div", { className: k.Content, children: [
      t && /* @__PURE__ */ e("div", { className: k.IconWrapper, "data-notificationcount": n(r), children: /* @__PURE__ */ e(y, { name: "outline-bell" }) }),
      /* @__PURE__ */ e(
        be,
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
      !t && !s && /* @__PURE__ */ c(V, { children: [
        /* @__PURE__ */ e(S, { variant: "text_button", children: "Sign in" }),
        /* @__PURE__ */ e(S, { variant: "primary", children: "Sign up" })
      ] })
    ] })
  ] });
}, ye = "_wrapper_19tyg_51", we = "_label_19tyg_60", Ce = "_inputContainer_19tyg_79", ke = "_error_19tyg_109", We = "_input_19tyg_79", $e = "_iconButton_19tyg_137", ve = "_errorText_19tyg_156", Te = "_fullWidth_19tyg_163", f = {
  "regular-link": "_regular-link_19tyg_33",
  "small-link": "_small-link_19tyg_42",
  wrapper: ye,
  label: we,
  inputContainer: Ce,
  error: ke,
  input: We,
  iconButton: $e,
  errorText: ve,
  fullWidth: Te
}, rt = ({
  id: t,
  label: s,
  inputType: a,
  errorText: r,
  disabled: n = !1,
  fullWidth: o = !1,
  required: l,
  ...x
}) => {
  const [_, m] = E(!1), h = b(f.inputContainer, r && f.error, o && f.fullWidth), g = a === "password", I = a === "search", p = (d) => g ? _ ? "text" : "password" : d;
  return /* @__PURE__ */ c("div", { className: f.wrapper, children: [
    s && /* @__PURE__ */ e(
      "label",
      {
        "data-requiredfield": l,
        htmlFor: t,
        className: f.label,
        "data-disabled": n,
        children: s
      }
    ),
    /* @__PURE__ */ c("div", { className: h, "data-disabled": n, children: [
      I && /* @__PURE__ */ e("button", { type: "submit", className: f.iconButton, "data-disabled": n, children: /* @__PURE__ */ e(y, { name: "google" }) }),
      /* @__PURE__ */ e(
        "input",
        {
          id: t,
          type: p(a),
          required: l,
          className: f.input,
          autoComplete: "off",
          ...x
        }
      ),
      g && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: f.iconButton,
          onClick: () => m(!_),
          children: _ ? /* @__PURE__ */ e(y, { name: "eye-outline" }) : /* @__PURE__ */ e(y, { name: "eye-off-outline" })
        }
      )
    ] }),
    r && /* @__PURE__ */ e("div", { className: f.errorText, children: r })
  ] });
}, Re = "_Root_n6gai_51", Le = "_disabled_n6gai_57", Se = "_Item_n6gai_63", Ae = "_Indicator_n6gai_101", Ve = "_Label_n6gai_120", C = {
  "regular-link": "_regular-link_n6gai_33",
  "small-link": "_small-link_n6gai_42",
  Root: Re,
  disabled: Le,
  Item: Se,
  Indicator: Ae,
  Label: Ve
}, nt = ({ options: t, defaultValue: s, disabled: a, ...r }) => /* @__PURE__ */ e(
  W.Root,
  {
    className: C.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...r,
    children: t?.length && t.map((n) => /* @__PURE__ */ c(
      "div",
      {
        className: a ? C.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ e(W.Item, { className: C.Item, value: n.radioName, id: n.id, children: /* @__PURE__ */ e(W.Indicator, { className: C.Indicator }) }),
          /* @__PURE__ */ e("label", { className: C.Label, htmlFor: n.id, children: n.radioName })
        ]
      },
      n.id
    ))
  }
), Be = "_reCaptchaWrapper_hfn95_5", je = "_reCaptchaError_hfn95_11", Ee = "_reCaptchaText_hfn95_15", T = {
  reCaptchaWrapper: Be,
  reCaptchaError: je,
  reCaptchaText: Ee
}, st = ({ isCaptchaPassed: t, setCaptchaToken: s, siteKey: a, ...r }) => {
  const n = (l) => {
    t && l && s(l);
  }, o = b(T.reCaptchaWrapper, !t && T.reCaptchaError);
  return /* @__PURE__ */ c("div", { className: o, children: [
    /* @__PURE__ */ e(
      G,
      {
        sitekey: a,
        onChange: n,
        theme: "dark",
        ...r
      }
    ),
    !t && /* @__PURE__ */ e("span", { className: T.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
}, Fe = "_bodyTextArea_ssbwt_1", He = "_textArea_ssbwt_6", Pe = "_fullWidth_ssbwt_37", ze = "_label_ssbwt_41", Ge = "_disabled_ssbwt_45", Ue = "_error_ssbwt_49", De = "_errorText_ssbwt_56", N = {
  bodyTextArea: Fe,
  textArea: He,
  fullWidth: Pe,
  label: ze,
  disabled: Ge,
  error: Ue,
  errorText: De
}, lt = ["default"], ot = (t) => {
  const {
    className: s,
    variant: a = "default",
    label: r,
    error: n,
    errorText: o,
    disabled: l = !1,
    fullWidth: x = !1,
    id: _,
    ...m
  } = t, h = b(
    N.textArea,
    n ? N.error : N[a],
    l && N.disabled,
    x && N.fullWidth,
    s
  );
  return /* @__PURE__ */ c("div", { className: N.bodyTextArea, children: [
    r && /* @__PURE__ */ e("label", { className: N.label, htmlFor: _, children: r }),
    /* @__PURE__ */ e("textarea", { className: h, disabled: l, id: _, ...m }),
    n && o && /* @__PURE__ */ e("div", { className: N.errorText, children: o })
  ] });
};
export {
  Ye as Alert,
  S as Button,
  et as Card,
  tt as Checkbox,
  at as Header,
  rt as Input,
  nt as Radio,
  st as ReCaptcha,
  be as Selectbox,
  ot as TextAreaComponent,
  y as UniversalIcon,
  Ze as buttonVariant,
  dt as clsx,
  lt as textAreaVariant
};
//# sourceMappingURL=index.es.js.map
