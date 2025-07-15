import { jsx as e, jsxs as l, Fragment as V } from "react/jsx-runtime";
import O, { clsx as x } from "clsx";
import { clsx as Ft } from "clsx";
import * as U from "react";
import E, { useState as K, useMemo as J, useCallback as q } from "react";
import Q, { domToReact as X } from "html-react-parser";
import { CheckIcon as Y, ChevronDownIcon as Z } from "@radix-ui/react-icons";
import { Checkbox as H, Select as g, RadioGroup as T } from "radix-ui";
import ee from "react-google-recaptcha";
const te = "_box_1cx9d_5", ne = "_error_1cx9d_16", ae = "_success_1cx9d_21", se = "_fullWidth_1cx9d_26", re = "_content_1cx9d_30", oe = "_icon_1cx9d_36", ce = "_defaultIcon_1cx9d_41", C = {
  box: te,
  error: ne,
  success: ae,
  fullWidth: se,
  content: re,
  icon: oe,
  defaultIcon: ce
}, I = ({
  name: t,
  dataStatic: s = !1,
  width: n = "24px",
  height: a = "24px",
  size: r,
  className: o,
  ...c
}) => {
  const [p, d] = E.useState(null);
  return E.useEffect(() => {
    fetch(`/assets/icons/${t}.svg`).then((m) => m.text()).then((m) => {
      const h = {
        replace: (b) => {
          if (b.type === "tag" && b.name === "svg") {
            const _ = b, i = {
              ..._.attribs,
              ...s ? { "data-static": "true" } : { "data-static": "false" },
              width: n,
              height: a,
              size: r,
              className: o,
              ...c
            };
            return /* @__PURE__ */ e("svg", { ...i, children: X(_.children, h) });
          }
        }
      }, f = Q(m, h);
      d(f);
    });
  }, [t, s]), p;
}, wt = ({
  children: t,
  variant: s = "success",
  onClose: n,
  closable: a = !0,
  fullWidth: r = !1,
  ...o
}) => {
  const c = {
    box: x(C.box, s === "success" ? C.success : C.error, r && C.fullWidth),
    content: C.content,
    icon: x(C.icon)
  };
  return /* @__PURE__ */ e("div", { className: c.box, ...o, children: /* @__PURE__ */ l("div", { className: c.content, children: [
    s === "error" ? /* @__PURE__ */ l("div", { children: [
      /* @__PURE__ */ e("strong", { children: "Error!" }),
      " ",
      t
    ] }) : /* @__PURE__ */ e(V, { children: t }),
    a && /* @__PURE__ */ e("span", { className: c.icon, onClick: n, children: /* @__PURE__ */ e(I, { name: "close" }) })
  ] }) });
}, le = "_primary_4txjf_51", ie = "_fullWidth_4txjf_72", de = "_secondary_4txjf_94", _e = "_outline_4txjf_137", ue = "_text_button_4txjf_180", B = {
  "regular-link": "_regular-link_4txjf_33",
  "small-link": "_small-link_4txjf_42",
  primary: le,
  fullWidth: ie,
  secondary: de,
  outline: _e,
  text_button: ue
}, Ct = ["primary", "secondary", "outline", "text_button"], M = ({
  as: t,
  children: s,
  fullWidth: n = !1,
  className: a,
  variant: r = "primary",
  ...o
}) => {
  const c = x(B.button, B[r], n && B.fullWidth, a);
  return /* @__PURE__ */ e(t || "button", { className: c, ...o, children: s });
}, me = "_cardBody_1rsrz_1", he = "_fullWidth_1rsrz_20", D = {
  cardBody: me,
  fullWidth: he
}, vt = ({ children: t, fullWidth: s, size: n = "md" }) => {
  const a = x(D.cardBody, s && D.fullWidth);
  return /* @__PURE__ */ e("div", { className: a, "data-cardsize": n, children: t });
}, fe = "_Root_1otx6_1", pe = "_Indicator_1otx6_65", be = "_Label_1otx6_82", L = {
  Root: fe,
  Indicator: pe,
  Label: be
}, Wt = ({ label: t, idProp: s, className: n, disabled: a, ...r }) => /* @__PURE__ */ l("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ e(
    H.Root,
    {
      className: L.Root,
      defaultChecked: !0,
      id: s,
      "aria-disabled": a,
      ...r,
      children: /* @__PURE__ */ e(H.Indicator, { className: L.Indicator, "aria-disabled": a, children: /* @__PURE__ */ e(Y, {}) })
    }
  ),
  /* @__PURE__ */ e("label", { className: L.Label, htmlFor: s, "aria-disabled": a, children: t })
] }), ge = "_Label_ewe9k_51", xe = "_Icon_ewe9k_57", Ne = "_Trigger_ewe9k_63", ye = "_pagination_ewe9k_123", Ie = "_Selected_ewe9k_140", ke = "_IconWrapper_ewe9k_150", we = "_fullWidth_ewe9k_155", Ce = "_Viewport_ewe9k_159", ve = "_Content_ewe9k_163", We = "_Item_ewe9k_183", u = {
  "regular-link": "_regular-link_ewe9k_33",
  "small-link": "_small-link_ewe9k_42",
  Label: ge,
  Icon: xe,
  Trigger: Ne,
  pagination: ye,
  Selected: Ie,
  IconWrapper: ke,
  fullWidth: we,
  Viewport: Ce,
  Content: ve,
  Item: We
}, $e = U.forwardRef(
  ({ children: t, variant: s, className: n, ...a }, r) => /* @__PURE__ */ e(g.Item, { className: O(u[`${s}`], u.Item, n), ...a, ref: r, children: /* @__PURE__ */ e(g.ItemText, { className: u.ItemContent, children: t }) })
), z = ({
  idProp: t,
  name: s,
  label: n = "",
  placeholder: a = "Select...",
  disabled: r = !1,
  className: o,
  value: c,
  fullWidth: p,
  onValueChange: d,
  onOpenChange: m,
  options: h,
  variant: f = "default",
  ...b
}) => {
  const _ = h.find((i) => i.value === c);
  return /* @__PURE__ */ l(g.Root, { onValueChange: d, onOpenChange: m, ...b, children: [
    n && /* @__PURE__ */ e("label", { htmlFor: t, className: u.Label, children: n }),
    /* @__PURE__ */ l(
      g.Trigger,
      {
        id: t,
        className: x(u[`${f}`], u.Trigger, p && u.fullWidth),
        disabled: r,
        "aria-label": n,
        "data-label": n ? "true" : "false",
        name: s,
        children: [
          _ ? /* @__PURE__ */ l("div", { className: u.Selected, children: [
            _.icon && /* @__PURE__ */ e("span", { className: u.IconWrapper, children: /* @__PURE__ */ e(I, { name: _.icon }) }),
            _.label
          ] }) : /* @__PURE__ */ e(g.Value, { placeholder: a }),
          /* @__PURE__ */ e(g.Icon, { className: u.Icon, children: /* @__PURE__ */ e(Z, {}) })
        ]
      }
    ),
    /* @__PURE__ */ e(g.Portal, { children: /* @__PURE__ */ e(g.Content, { className: x(u[`${f}`], u.Content), side: "bottom", position: "popper", children: /* @__PURE__ */ e(g.Viewport, { className: u.Viewport, children: /* @__PURE__ */ e(g.Group, { children: h.map((i) => /* @__PURE__ */ l($e, { className: u.Selected, variant: f, value: i.value.toString(), children: [
      i.icon && /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(I, { name: i.icon }) }),
      i.label
    ] }, i.value)) }) }) }) })
  ] });
}, Re = "_Header_18rwr_51", Pe = "_Logo_18rwr_61", Se = "_Content_18rwr_67", Te = "_IconWrapper_18rwr_73", $ = {
  "regular-link": "_regular-link_18rwr_33",
  "small-link": "_small-link_18rwr_42",
  Header: Re,
  Logo: Pe,
  Content: Se,
  IconWrapper: Te
}, $t = ({
  isAuth: t,
  isProcessingAuth: s = !1,
  localization: n,
  notificationCount: a = 0
}) => {
  const r = (o) => o > 9 ? "9+" : `${o}`;
  return /* @__PURE__ */ l("header", { className: $.Header, children: [
    /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e("span", { className: $.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ l("div", { className: $.Content, children: [
      t && /* @__PURE__ */ e("div", { className: $.IconWrapper, "data-notificationcount": r(a), children: /* @__PURE__ */ e(I, { name: "outline-bell" }) }),
      /* @__PURE__ */ e(
        z,
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
      !t && !s && /* @__PURE__ */ l(V, { children: [
        /* @__PURE__ */ e(M, { variant: "text_button", children: "Sign in" }),
        /* @__PURE__ */ e(M, { variant: "primary", children: "Sign up" })
      ] })
    ] })
  ] });
}, Be = "_wrapper_19tyg_51", Le = "_label_19tyg_60", Ae = "_inputContainer_19tyg_79", Ve = "_error_19tyg_109", Fe = "_input_19tyg_79", je = "_iconButton_19tyg_137", Ee = "_errorText_19tyg_156", qe = "_fullWidth_19tyg_163", y = {
  "regular-link": "_regular-link_19tyg_33",
  "small-link": "_small-link_19tyg_42",
  wrapper: Be,
  label: Le,
  inputContainer: Ae,
  error: Ve,
  input: Fe,
  iconButton: je,
  errorText: Ee,
  fullWidth: qe
}, Rt = ({
  id: t,
  label: s,
  inputType: n,
  errorText: a,
  disabled: r = !1,
  fullWidth: o = !1,
  required: c,
  ...p
}) => {
  const [d, m] = K(!1), h = x(y.inputContainer, a && y.error, o && y.fullWidth), f = n === "password", b = n === "search", _ = (i) => f ? d ? "text" : "password" : i;
  return /* @__PURE__ */ l("div", { className: y.wrapper, children: [
    s && /* @__PURE__ */ e(
      "label",
      {
        "data-requiredfield": c,
        htmlFor: t,
        className: y.label,
        "data-disabled": r,
        children: s
      }
    ),
    /* @__PURE__ */ l("div", { className: h, "data-disabled": r, children: [
      b && /* @__PURE__ */ e("button", { type: "submit", className: y.iconButton, "data-disabled": r, children: /* @__PURE__ */ e(I, { name: "google" }) }),
      /* @__PURE__ */ e(
        "input",
        {
          id: t,
          type: _(n),
          required: c,
          className: y.input,
          autoComplete: "off",
          ...p
        }
      ),
      f && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: y.iconButton,
          onClick: () => m(!d),
          children: d ? /* @__PURE__ */ e(I, { name: "eye-outline" }) : /* @__PURE__ */ e(I, { name: "eye-off-outline" })
        }
      )
    ] }),
    a && /* @__PURE__ */ e("div", { className: y.errorText, children: a })
  ] });
}, He = "_Root_n6gai_51", Me = "_disabled_n6gai_57", De = "_Item_n6gai_63", ze = "_Indicator_n6gai_101", Ge = "_Label_n6gai_120", W = {
  "regular-link": "_regular-link_n6gai_33",
  "small-link": "_small-link_n6gai_42",
  Root: He,
  disabled: Me,
  Item: De,
  Indicator: ze,
  Label: Ge
}, Pt = ({ options: t, defaultValue: s, disabled: n, ...a }) => /* @__PURE__ */ e(
  T.Root,
  {
    className: W.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...a,
    children: t?.length && t.map((r) => /* @__PURE__ */ l(
      "div",
      {
        className: n ? W.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ e(T.Item, { className: W.Item, value: r.radioName, id: r.id, children: /* @__PURE__ */ e(T.Indicator, { className: W.Indicator }) }),
          /* @__PURE__ */ e("label", { className: W.Label, htmlFor: r.id, children: r.radioName })
        ]
      },
      r.id
    ))
  }
), Oe = "_reCaptchaWrapper_hfn95_5", Ue = "_reCaptchaError_hfn95_11", Ke = "_reCaptchaText_hfn95_15", A = {
  reCaptchaWrapper: Oe,
  reCaptchaError: Ue,
  reCaptchaText: Ke
}, St = ({ isCaptchaPassed: t, setCaptchaToken: s, siteKey: n, ...a }) => {
  const r = (c) => {
    t && c && s(c);
  }, o = x(A.reCaptchaWrapper, !t && A.reCaptchaError);
  return /* @__PURE__ */ l("div", { className: o, children: [
    /* @__PURE__ */ e(
      ee,
      {
        sitekey: n,
        onChange: r,
        theme: "dark",
        ...a
      }
    ),
    !t && /* @__PURE__ */ e("span", { className: A.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
}, Je = "_bodyTextArea_ssbwt_1", Qe = "_textArea_ssbwt_6", Xe = "_fullWidth_ssbwt_37", Ye = "_label_ssbwt_41", Ze = "_disabled_ssbwt_45", et = "_error_ssbwt_49", tt = "_errorText_ssbwt_56", k = {
  bodyTextArea: Je,
  textArea: Qe,
  fullWidth: Xe,
  label: Ye,
  disabled: Ze,
  error: et,
  errorText: tt
}, Tt = ["default"], Bt = (t) => {
  const {
    className: s,
    variant: n = "default",
    label: a,
    error: r,
    errorText: o,
    disabled: c = !1,
    fullWidth: p = !1,
    id: d,
    ...m
  } = t, h = x(
    k.textArea,
    r ? k.error : k[n],
    c && k.disabled,
    p && k.fullWidth,
    s
  );
  return /* @__PURE__ */ l("div", { className: k.bodyTextArea, children: [
    a && /* @__PURE__ */ e("label", { className: k.label, htmlFor: d, children: a }),
    /* @__PURE__ */ e("textarea", { className: h, disabled: c, id: d, ...m }),
    r && o && /* @__PURE__ */ e("div", { className: k.errorText, children: o })
  ] });
}, nt = "_root_ycd9q_5", at = "_container_ycd9q_11", st = "_item_ycd9q_17", rt = "_selected_ycd9q_38", ot = "_dots_ycd9q_43", ct = "_icon_ycd9q_54", lt = "_selectBox_ycd9q_58", it = "_select_ycd9q_38", w = {
  root: nt,
  container: at,
  item: st,
  selected: rt,
  dots: ot,
  icon: ct,
  selectBox: lt,
  select: it
}, N = {
  container: w.container,
  dots: w.dots,
  icon: w.icon,
  item: w.item,
  pageButton(t) {
    return x(this.item, t && w.selected);
  },
  root: w.root,
  select: w.select,
  selectBox: w.selectBox
}, dt = ({ disabled: t, onClick: s, size: n }) => /* @__PURE__ */ e("button", { className: N.item, disabled: t, onClick: s, children: /* @__PURE__ */ e(I, { className: N.icon, name: "arrow-ios-back", size: n }) }), _t = ({ disabled: t, onClick: s, size: n }) => /* @__PURE__ */ e("button", { className: N.item, disabled: t, onClick: s, children: /* @__PURE__ */ e(I, { className: N.icon, name: "arrow-ios-forward", size: n }) }), ut = ({ disabled: t, onClick: s, page: n, selected: a }) => /* @__PURE__ */ e(
  "button",
  {
    className: N.pageButton(a),
    disabled: a || t,
    onClick: s,
    type: "button",
    children: n
  }
), mt = () => /* @__PURE__ */ e("span", { className: N.dots, children: "…" }), ht = ({ currentPage: t, onClick: s, paginationRange: n }) => /* @__PURE__ */ e(V, { children: n.map((a, r) => {
  const o = a === t;
  return typeof a != "number" ? /* @__PURE__ */ e(mt, {}, r) : /* @__PURE__ */ e(ut, { onClick: s(a), page: a, selected: o }, r);
}) }), R = (t, s) => {
  const n = s - t + 1;
  return Array.from({ length: n }, (a, r) => r + t);
}, P = "...", ft = ({ count: t, onChange: s, page: n, siblings: a = 1 }) => {
  const r = J(() => {
    if (a + 5 >= t)
      return R(1, t);
    const b = Math.max(n - a, 1), _ = Math.min(n + a, t), i = b > 2, S = _ < t - 2, F = 1, G = t;
    if (!i && S) {
      const v = 3 + 2 * a;
      return [...R(1, v), P, t];
    }
    if (i && !S) {
      const v = 3 + 2 * a, j = R(t - v + 1, t);
      return [F, P, ...j];
    }
    if (i && S) {
      const v = R(b, _);
      return [F, P, ...v, P, G];
    }
  }, [a, n, t]), o = r.at(-1), c = n === 1, p = n === o, d = q(() => {
    s(n + 1);
  }, [n, s]), m = q(() => {
    s(n - 1);
  }, [n, s]);
  function h(f) {
    return () => s(f);
  }
  return {
    paginationRange: r,
    // список номеров и "..." для отрисовки
    handleMainPageClicked: h,
    // клик по номеру страницы
    handleNextPageClicked: d,
    // клик "вперёд"
    handlePreviousPageClicked: m,
    // клик "назад"
    isFirstPage: c,
    // текущая — первая?
    isLastPage: p
    // текущая — последняя?
  };
}, pt = ({ onPerPageChange: t, perPage: s, perPageOptions: n }) => {
  const a = n.map((r) => ({
    label: r.toString(),
    value: r
  }));
  return /* @__PURE__ */ l("div", { className: N.selectBox, children: [
    "Show",
    /* @__PURE__ */ e(
      z,
      {
        variant: "pagination",
        className: N.selectBox,
        onValueChange: (r) => t(Number(r)),
        options: a,
        value: s
      }
    ),
    "on page"
  ] });
}, Lt = ({
  count: t,
  onChange: s,
  onPerPageChange: n,
  page: a,
  perPage: r = null,
  perPageOptions: o,
  siblings: c
}) => {
  const {
    handleMainPageClicked: p,
    handleNextPageClicked: d,
    handlePreviousPageClicked: m,
    isFirstPage: h,
    isLastPage: f,
    paginationRange: b
  } = ft({
    count: t,
    onChange: s,
    page: a,
    siblings: c
  }), _ = !!r && !!o && !!n;
  return /* @__PURE__ */ l("div", { className: N.root, children: [
    /* @__PURE__ */ l("div", { className: N.container, children: [
      /* @__PURE__ */ e(dt, { disabled: h, onClick: m, size: 16 }),
      /* @__PURE__ */ e(
        ht,
        {
          currentPage: a,
          onClick: p,
          paginationRange: b
        }
      ),
      /* @__PURE__ */ e(_t, { disabled: f, onClick: d, size: 16 })
    ] }),
    _ && /* @__PURE__ */ e(
      pt,
      {
        onPerPageChange: n,
        perPage: r,
        perPageOptions: o
      }
    )
  ] });
};
export {
  wt as Alert,
  M as Button,
  vt as Card,
  Wt as Checkbox,
  $t as Header,
  Rt as Input,
  Lt as Pagination,
  Pt as Radio,
  St as ReCaptcha,
  z as Selectbox,
  Bt as TextAreaComponent,
  I as UniversalIcon,
  Ct as buttonVariant,
  Ft as clsx,
  Tt as textAreaVariant
};
//# sourceMappingURL=index.es.js.map
