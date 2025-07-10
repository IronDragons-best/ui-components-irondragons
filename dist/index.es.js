import { jsx as e, jsxs as c, Fragment as S } from "react/jsx-runtime";
import q, { clsx as x } from "clsx";
import { clsx as it } from "clsx";
import * as V from "react";
import T, { useState as B } from "react";
import E, { domToReact as F } from "html-react-parser";
import { CheckIcon as H, ChevronDownIcon as P } from "@radix-ui/react-icons";
import { Checkbox as R, Select as _, RadioGroup as v } from "radix-ui";
import z from "react-google-recaptcha";
const G = "_box_1cx9d_5", U = "_error_1cx9d_16", D = "_success_1cx9d_21", K = "_fullWidth_1cx9d_26", O = "_content_1cx9d_30", J = "_icon_1cx9d_36", M = "_defaultIcon_1cx9d_41", y = {
  box: G,
  error: U,
  success: D,
  fullWidth: K,
  content: O,
  icon: J,
  defaultIcon: M
}, g = ({
  name: t,
  dataStatic: n = !1,
  width: r = "24px",
  height: a = "24px"
}) => {
  const [s, o] = T.useState(null);
  return T.useEffect(() => {
    fetch(`/assets/icons/${t}.svg`).then((l) => l.text()).then((l) => {
      const m = {
        replace: (u) => {
          if (u.type === "tag" && u.name === "svg") {
            const h = u, N = {
              ...h.attribs,
              ...n ? { "data-static": "true" } : { "data-static": "false" },
              width: r,
              height: a
            };
            return /* @__PURE__ */ e("svg", { ...N, children: F(h.children, m) });
          }
        }
      }, d = E(l, m);
      o(d);
    });
  }, [t, n]), s;
}, Xe = ({
  children: t,
  variant: n = "success",
  onClose: r,
  closable: a = !0,
  fullWidth: s = !1,
  ...o
}) => {
  const l = {
    box: x(y.box, n === "success" ? y.success : y.error, s && y.fullWidth),
    content: y.content,
    icon: x(y.icon)
  };
  return /* @__PURE__ */ e("div", { className: l.box, ...o, children: /* @__PURE__ */ c("div", { className: l.content, children: [
    n === "error" ? /* @__PURE__ */ c("div", { children: [
      /* @__PURE__ */ e("strong", { children: "Error!" }),
      " ",
      t
    ] }) : /* @__PURE__ */ e(S, { children: t }),
    a && /* @__PURE__ */ e("span", { className: l.icon, onClick: r, children: /* @__PURE__ */ e(g, { name: "close" }) })
  ] }) });
}, Q = "_primary_4txjf_51", X = "_fullWidth_4txjf_72", Y = "_secondary_4txjf_94", Z = "_outline_4txjf_137", ee = "_text_button_4txjf_180", w = {
  "regular-link": "_regular-link_4txjf_33",
  "small-link": "_small-link_4txjf_42",
  primary: Q,
  fullWidth: X,
  secondary: Y,
  outline: Z,
  text_button: ee
}, Ye = ["primary", "secondary", "outline", "text_button"], j = ({
  as: t,
  children: n,
  fullWidth: r = !1,
  className: a,
  variant: s = "primary",
  ...o
}) => {
  const l = x(w.button, w[s], r && w.fullWidth, a);
  return /* @__PURE__ */ e(t || "button", { className: l, ...o, children: n });
}, te = "_cardBody_1rsrz_1", re = "_fullWidth_1rsrz_20", L = {
  cardBody: te,
  fullWidth: re
}, Ze = ({ children: t, fullWidth: n, size: r = "md" }) => {
  const a = x(L.cardBody, n && L.fullWidth);
  return /* @__PURE__ */ e("div", { className: a, "data-cardsize": r, children: t });
}, ae = "_Root_1otx6_1", ne = "_Indicator_1otx6_65", se = "_Label_1otx6_82", $ = {
  Root: ae,
  Indicator: ne,
  Label: se
}, et = ({ label: t, idProp: n, className: r, disabled: a, ...s }) => /* @__PURE__ */ c("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ e(
    R.Root,
    {
      className: $.Root,
      defaultChecked: !0,
      id: n,
      "aria-disabled": a,
      ...s,
      children: /* @__PURE__ */ e(R.Indicator, { className: $.Indicator, "aria-disabled": a, children: /* @__PURE__ */ e(H, {}) })
    }
  ),
  /* @__PURE__ */ e("label", { className: $.Label, htmlFor: n, "aria-disabled": a, children: t })
] }), le = "_Label_1qj6r_51", oe = "_Icon_1qj6r_57", ce = "_Trigger_1qj6r_63", ie = "_Selected_1qj6r_123", de = "_IconWrapper_1qj6r_133", _e = "_fullWidth_1qj6r_138", me = "_Viewport_1qj6r_142", ue = "_Content_1qj6r_146", he = "_Item_1qj6r_162", i = {
  "regular-link": "_regular-link_1qj6r_33",
  "small-link": "_small-link_1qj6r_42",
  Label: le,
  Icon: oe,
  Trigger: ce,
  Selected: ie,
  IconWrapper: de,
  fullWidth: _e,
  Viewport: me,
  Content: ue,
  Item: he
}, pe = V.forwardRef(
  ({ children: t, className: n, ...r }, a) => /* @__PURE__ */ e(_.Item, { className: q(i.Item, n), ...r, ref: a, children: /* @__PURE__ */ e(_.ItemText, { className: i.ItemContent, children: t }) })
), fe = ({
  idProp: t,
  name: n,
  label: r = "",
  placeholder: a = "Select...",
  disabled: s = !1,
  className: o,
  value: l,
  fullWidth: m,
  onValueChange: d,
  onOpenChange: u,
  options: h,
  ...N
}) => {
  const I = h.find((p) => p.value === l);
  return /* @__PURE__ */ c(_.Root, { onValueChange: d, onOpenChange: u, ...N, children: [
    r && /* @__PURE__ */ e("label", { htmlFor: t, className: i.Label, children: r }),
    /* @__PURE__ */ c(
      _.Trigger,
      {
        id: t,
        className: x(i.Trigger, m && i.fullWidth),
        disabled: s,
        "aria-label": r,
        "data-label": r ? "true" : "false",
        name: n,
        children: [
          I ? /* @__PURE__ */ c("div", { className: i.Selected, children: [
            I.icon && /* @__PURE__ */ e("span", { className: i.IconWrapper, children: /* @__PURE__ */ e(g, { name: I.icon }) }),
            I.label
          ] }) : /* @__PURE__ */ e(_.Value, { placeholder: a }),
          /* @__PURE__ */ e(_.Icon, { className: i.Icon, children: /* @__PURE__ */ e(P, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(_.Portal, { children: /* @__PURE__ */ e(_.Content, { className: i.Content, side: "bottom", position: "popper", children: /* @__PURE__ */ e(_.Viewport, { className: i.Viewport, children: /* @__PURE__ */ e(_.Group, { children: h.map((p) => /* @__PURE__ */ c(pe, { className: i.Selected, value: p.value, children: [
      p.icon && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(g, { name: p.icon }) }),
      p.label
    ] }, p.value)) }) }) }) })
  ] });
}, be = "_Header_18rwr_51", xe = "_Logo_18rwr_61", ge = "_Content_18rwr_67", Ne = "_IconWrapper_18rwr_73", W = {
  "regular-link": "_regular-link_18rwr_33",
  "small-link": "_small-link_18rwr_42",
  Header: be,
  Logo: xe,
  Content: ge,
  IconWrapper: Ne
}, tt = ({
  isAuth: t,
  isProcessingAuth: n = !1,
  localization: r,
  notificationCount: a = 0
}) => {
  const s = (o) => o > 9 ? "9+" : `${o}`;
  return /* @__PURE__ */ c("header", { className: W.Header, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: W.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ c("div", { className: W.Content, children: [
      t && /* @__PURE__ */ e("div", { className: W.IconWrapper, "data-notificationcount": s(a), children: /* @__PURE__ */ e(g, { name: "outline-bell" }) }),
      /* @__PURE__ */ e(
        fe,
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
      !t && !n && /* @__PURE__ */ c(S, { children: [
        /* @__PURE__ */ e(j, { variant: "text_button", children: "Sign in" }),
        /* @__PURE__ */ e(j, { variant: "primary", children: "Sign up" })
      ] })
    ] })
  ] });
}, Ie = "_wrapper_19tyg_51", ye = "_label_19tyg_60", Ce = "_inputContainer_19tyg_79", We = "_error_19tyg_109", ve = "_input_19tyg_79", we = "_iconButton_19tyg_137", $e = "_errorText_19tyg_156", ke = "_fullWidth_19tyg_163", f = {
  "regular-link": "_regular-link_19tyg_33",
  "small-link": "_small-link_19tyg_42",
  wrapper: Ie,
  label: ye,
  inputContainer: Ce,
  error: We,
  input: ve,
  iconButton: we,
  errorText: $e,
  fullWidth: ke
}, rt = ({
  id: t,
  label: n,
  inputType: r,
  errorText: a,
  disabled: s = !1,
  fullWidth: o = !1,
  required: l,
  ...m
}) => {
  const [d, u] = B(!1), h = x(f.inputContainer, a && f.error, o && f.fullWidth), N = r === "password", I = r === "search", p = (A) => N ? d ? "text" : "password" : A;
  return /* @__PURE__ */ c("div", { className: f.wrapper, children: [
    n && /* @__PURE__ */ e(
      "label",
      {
        "data-requiredfield": l,
        htmlFor: t,
        className: f.label,
        "data-disabled": s,
        children: n
      }
    ),
    /* @__PURE__ */ c("div", { className: h, "data-disabled": s, children: [
      I && /* @__PURE__ */ e("button", { type: "submit", className: f.iconButton, "data-disabled": s, children: /* @__PURE__ */ e(g, { name: "search" }) }),
      /* @__PURE__ */ e(
        "input",
        {
          id: t,
          type: p(r),
          required: l,
          className: f.input,
          autoComplete: "off",
          ...m
        }
      ),
      N && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: f.iconButton,
          onClick: () => u(!d),
          children: d ? /* @__PURE__ */ e(g, { name: "eye-outline" }) : /* @__PURE__ */ e(g, { name: "eye-off-outline" })
        }
      )
    ] }),
    a && /* @__PURE__ */ e("div", { className: f.errorText, children: a })
  ] });
}, Te = "_Root_n6gai_51", Re = "_disabled_n6gai_57", je = "_Item_n6gai_63", Le = "_Indicator_n6gai_101", Se = "_Label_n6gai_120", C = {
  "regular-link": "_regular-link_n6gai_33",
  "small-link": "_small-link_n6gai_42",
  Root: Te,
  disabled: Re,
  Item: je,
  Indicator: Le,
  Label: Se
}, at = ({ options: t, defaultValue: n, disabled: r, ...a }) => /* @__PURE__ */ e(
  v.Root,
  {
    className: C.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...a,
    children: t?.length && t.map((s) => /* @__PURE__ */ c(
      "div",
      {
        className: r ? C.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ e(v.Item, { className: C.Item, value: s.radioName, id: s.id, children: /* @__PURE__ */ e(v.Indicator, { className: C.Indicator }) }),
          /* @__PURE__ */ e("label", { className: C.Label, htmlFor: s.id, children: s.radioName })
        ]
      },
      s.id
    ))
  }
), Ae = "_reCaptchaWrapper_hfn95_5", qe = "_reCaptchaError_hfn95_11", Ve = "_reCaptchaText_hfn95_15", k = {
  reCaptchaWrapper: Ae,
  reCaptchaError: qe,
  reCaptchaText: Ve
}, nt = ({ isCaptchaPassed: t, setCaptchaToken: n, siteKey: r, ...a }) => {
  const s = (l) => {
    t && l && n(l);
  }, o = x(k.reCaptchaWrapper, !t && k.reCaptchaError);
  return /* @__PURE__ */ c("div", { className: o, children: [
    /* @__PURE__ */ e(
      z,
      {
        sitekey: r,
        onChange: s,
        theme: "dark",
        ...a
      }
    ),
    !t && /* @__PURE__ */ e("span", { className: k.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
}, Be = "_bodyTextArea_ssbwt_1", Ee = "_textArea_ssbwt_6", Fe = "_fullWidth_ssbwt_37", He = "_label_ssbwt_41", Pe = "_disabled_ssbwt_45", ze = "_error_ssbwt_49", Ge = "_errorText_ssbwt_56", b = {
  bodyTextArea: Be,
  textArea: Ee,
  fullWidth: Fe,
  label: He,
  disabled: Pe,
  error: ze,
  errorText: Ge
}, st = ["default"], lt = (t) => {
  const {
    className: n,
    variant: r = "default",
    label: a,
    error: s,
    errorText: o,
    disabled: l = !1,
    fullWidth: m = !1,
    id: d,
    ...u
  } = t, h = x(
    b.textArea,
    s ? b.error : b[r],
    l && b.disabled,
    m && b.fullWidth,
    n
  );
  return /* @__PURE__ */ c("div", { className: b.bodyTextArea, children: [
    a && /* @__PURE__ */ e("label", { className: b.label, htmlFor: d, children: a }),
    /* @__PURE__ */ e("textarea", { className: h, disabled: l, id: d, ...u }),
    s && o && /* @__PURE__ */ e("div", { className: b.errorText, children: o })
  ] });
};
export {
  Xe as Alert,
  j as Button,
  Ze as Card,
  et as Checkbox,
  tt as Header,
  rt as Input,
  at as Radio,
  nt as ReCaptcha,
  fe as Selectbox,
  lt as TextAreaComponent,
  g as UniversalIcon,
  Ye as buttonVariant,
  it as clsx,
  st as textAreaVariant
};
//# sourceMappingURL=index.es.js.map
