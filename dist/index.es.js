import { jsx as a, jsxs as m, Fragment as O } from "react/jsx-runtime";
import * as te from "react";
import Q, { useEffect as ne, useState as Z, useMemo as ae, useCallback as G } from "react";
import re, { clsx as k } from "clsx";
import { clsx as ea } from "clsx";
import { CheckIcon as oe, ChevronDownIcon as se } from "@radix-ui/react-icons";
import { Checkbox as Y, Select as w, RadioGroup as D, Popover as q, Tabs as R } from "radix-ui";
import ie, { domToReact as le } from "html-react-parser";
import ce from "react-google-recaptcha";
import { format as B } from "date-fns";
import { DayPicker as de } from "react-day-picker";
const ue = "_box_htv8k_5", me = "_error_htv8k_26", _e = "_success_htv8k_31", he = "_fullWidth_htv8k_36", fe = "_content_htv8k_40", ge = "_icon_htv8k_46", ye = "_defaultIcon_htv8k_52", I = {
  box: ue,
  error: me,
  success: _e,
  fullWidth: he,
  content: fe,
  icon: ge,
  defaultIcon: ye
}, Dn = ({
  children: e,
  variant: r = "success",
  onClose: t,
  withCloseIcon: n = !0,
  fullWidth: o = !1,
  isOpen: s = !1,
  ...i
}) => {
  const l = {
    box: k(I.box, r === "success" ? I.success : I.error, o && I.fullWidth),
    content: I.content,
    icon: k(I.icon)
  };
  return ne(() => {
    let c;
    return s && (c = setTimeout(t, 5e3)), () => clearTimeout(c);
  }, [s]), /* @__PURE__ */ a("div", { className: l.box, ...i, "data-isopen": s, children: /* @__PURE__ */ m("div", { className: l.content, children: [
    r === "error" ? /* @__PURE__ */ m("div", { children: [
      /* @__PURE__ */ a("strong", { children: "Error!" }),
      " ",
      e
    ] }) : /* @__PURE__ */ a(O, { children: e }),
    n && /* @__PURE__ */ a("span", { className: l.icon, onClick: t, children: /* @__PURE__ */ a(p, { name: "close" }) })
  ] }) });
}, be = "_primary_qb98x_51", pe = "_fullWidth_qb98x_74", ke = "_secondary_qb98x_96", ve = "_outline_qb98x_141", Pe = "_text_button_qb98x_186", E = {
  "regular-link": "_regular-link_qb98x_33",
  "small-link": "_small-link_qb98x_42",
  primary: be,
  fullWidth: pe,
  secondary: ke,
  outline: ve,
  text_button: Pe
}, qn = ["primary", "secondary", "outline", "text_button"], K = ({
  as: e,
  children: r,
  fullWidth: t = !1,
  className: n,
  variant: o = "primary",
  ...s
}) => {
  const i = k(E.button, E[o], t && E.fullWidth, n);
  return /* @__PURE__ */ a(e || "button", { className: i, ...s, children: r });
}, we = "_cardBody_1rsrz_1", xe = "_fullWidth_1rsrz_20", U = {
  cardBody: we,
  fullWidth: xe
}, En = ({ children: e, fullWidth: r, size: t = "md" }) => {
  const n = k(U.cardBody, r && U.fullWidth);
  return /* @__PURE__ */ a("div", { className: n, "data-cardsize": t, children: e });
}, Ne = "_Root_1otx6_1", We = "_Indicator_1otx6_65", Ce = "_Label_1otx6_82", H = {
  Root: Ne,
  Indicator: We,
  Label: Ce
}, Hn = ({ label: e, idProp: r, className: t, disabled: n, ...o }) => /* @__PURE__ */ m("div", { style: { display: "flex", alignItems: "center" }, children: [
  /* @__PURE__ */ a(
    Y.Root,
    {
      className: H.Root,
      defaultChecked: !0,
      id: r,
      "aria-disabled": n,
      ...o,
      children: /* @__PURE__ */ a(Y.Indicator, { className: H.Indicator, "aria-disabled": n, children: /* @__PURE__ */ a(oe, {}) })
    }
  ),
  /* @__PURE__ */ a("label", { className: H.Label, htmlFor: r, "aria-disabled": n, children: e })
] }), Ie = "_Label_1ua82_51", Me = "_Icon_1ua82_60", Se = "_Trigger_1ua82_66", $e = "_pagination_1ua82_126", Te = "_Selected_1ua82_143", Re = "_IconWrapper_1ua82_153", Be = "_fullWidth_1ua82_158", Le = "_Viewport_1ua82_162", Ae = "_Content_1ua82_166", Fe = "_Item_1ua82_186", b = {
  "regular-link": "_regular-link_1ua82_33",
  "small-link": "_small-link_1ua82_42",
  Label: Ie,
  Icon: Me,
  Trigger: Se,
  pagination: $e,
  Selected: Te,
  IconWrapper: Re,
  fullWidth: Be,
  Viewport: Le,
  Content: Ae,
  Item: Fe
}, Ve = te.forwardRef(
  ({ children: e, variant: r, className: t, ...n }, o) => /* @__PURE__ */ a(w.Item, { className: re(b[`${r}`], b.Item, t), ...n, ref: o, children: /* @__PURE__ */ a(w.ItemText, { className: b.ItemContent, children: e }) })
), p = ({
  name: e,
  dataStatic: r = !1,
  width: t = "24px",
  height: n = "24px",
  size: o,
  className: s,
  ...i
}) => {
  const [l, c] = Q.useState(null);
  return Q.useEffect(() => {
    fetch(`/assets/icons/${e}.svg`).then((u) => u.text()).then((u) => {
      const y = {
        replace: (h) => {
          if (h.type === "tag" && h.name === "svg") {
            const f = h, _ = {
              ...f.attribs,
              ...r ? { "data-static": "true" } : { "data-static": "false" },
              width: t,
              height: n,
              size: o,
              className: s,
              ...i
            };
            return "xmlnsxlink" in f.attribs && (_.xmlnsXlink = f.attribs.xmlnsxlink, delete _.xmlnsxlink), "xlink:href" in f.attribs && (_.xlinkHref = f.attribs["xlink:href"], delete _["xlink:href"]), Object.keys(f.attribs).forEach((v) => {
              if (v.includes(":")) {
                const T = v.replace(/:([a-z])/g, (J, C) => C.toUpperCase());
                _[T] = f.attribs[v], delete _[v];
              }
            }), /* @__PURE__ */ a("svg", { ..._, children: le(f.children, y) });
          }
        }
      }, g = ie(u, y);
      c(g);
    });
  }, [e, r]), l;
}, ee = ({
  idProp: e,
  name: r,
  label: t = "",
  placeholder: n = "Select...",
  disabled: o = !1,
  className: s,
  value: i,
  fullWidth: l,
  onValueChange: c,
  onOpenChange: u,
  options: y,
  variant: g = "default",
  ...h
}) => {
  const f = y.find((_) => _.value === i);
  return /* @__PURE__ */ m(w.Root, { onValueChange: c, onOpenChange: u, ...h, children: [
    t && /* @__PURE__ */ a("label", { htmlFor: e, className: b.Label, children: t }),
    /* @__PURE__ */ m(
      w.Trigger,
      {
        id: e,
        className: k(b[`${g}`], b.Trigger, l && b.fullWidth),
        disabled: o,
        "aria-label": t,
        "data-label": t ? "true" : "false",
        name: r,
        children: [
          f ? /* @__PURE__ */ m("div", { className: b.Selected, children: [
            f.icon && /* @__PURE__ */ a("span", { className: b.IconWrapper, children: /* @__PURE__ */ a(p, { name: f.icon }) }),
            f.label
          ] }) : /* @__PURE__ */ a(w.Value, { placeholder: n }),
          /* @__PURE__ */ a(w.Icon, { className: b.Icon, children: /* @__PURE__ */ a(se, {}) })
        ]
      }
    ),
    /* @__PURE__ */ a(w.Portal, { children: /* @__PURE__ */ a(
      w.Content,
      {
        className: k(b[`${g}`], b.Content),
        side: "bottom",
        position: "popper",
        children: /* @__PURE__ */ a(w.Viewport, { className: b.Viewport, children: /* @__PURE__ */ a(w.Group, { children: y.map((_) => /* @__PURE__ */ m(
          Ve,
          {
            className: b.Selected,
            variant: g,
            value: _.value.toString(),
            children: [
              _.icon && /* @__PURE__ */ a("span", { children: /* @__PURE__ */ a(p, { name: _.icon }) }),
              _.label
            ]
          },
          _.value
        )) }) })
      }
    ) })
  ] });
}, De = "_Header_18rwr_51", qe = "_Logo_18rwr_61", Ee = "_Content_18rwr_67", He = "_IconWrapper_18rwr_73", L = {
  "regular-link": "_regular-link_18rwr_33",
  "small-link": "_small-link_18rwr_42",
  Header: De,
  Logo: qe,
  Content: Ee,
  IconWrapper: He
}, jn = ({
  isAuth: e,
  isProcessingAuth: r = !1,
  localization: t,
  notificationCount: n = 0
}) => {
  const o = (s) => s > 9 ? "9+" : `${s}`;
  return /* @__PURE__ */ m("header", { className: L.Header, children: [
    /* @__PURE__ */ a("div", { children: /* @__PURE__ */ a("span", { className: L.Logo, children: "Inctagram" }) }),
    /* @__PURE__ */ m("div", { className: L.Content, children: [
      e && /* @__PURE__ */ a("div", { className: L.IconWrapper, "data-notificationcount": o(n), children: /* @__PURE__ */ a(p, { name: "outline-bell" }) }),
      /* @__PURE__ */ a(
        ee,
        {
          value: t,
          name: "aaa",
          options: [
            { label: "Russian", value: "rus", icon: "Flag-Russia" },
            { label: "English", value: "eng", icon: "Flag-United-Kingdom" }
          ],
          idProp: t
        }
      ),
      !e && !r && /* @__PURE__ */ m(O, { children: [
        /* @__PURE__ */ a(K, { variant: "text_button", children: "Sign in" }),
        /* @__PURE__ */ a(K, { variant: "primary", children: "Sign up" })
      ] })
    ] })
  ] });
}, je = "_wrapper_19tyg_51", ze = "_label_19tyg_60", Oe = "_inputContainer_19tyg_79", Je = "_error_19tyg_109", Xe = "_input_19tyg_79", Qe = "_iconButton_19tyg_137", Ge = "_errorText_19tyg_156", Ye = "_fullWidth_19tyg_163", P = {
  "regular-link": "_regular-link_19tyg_33",
  "small-link": "_small-link_19tyg_42",
  wrapper: je,
  label: ze,
  inputContainer: Oe,
  error: Je,
  input: Xe,
  iconButton: Qe,
  errorText: Ge,
  fullWidth: Ye
}, zn = ({
  id: e,
  label: r,
  inputType: t,
  errorText: n,
  disabled: o = !1,
  fullWidth: s = !1,
  required: i,
  ...l
}) => {
  const [c, u] = Z(!1), y = k(P.inputContainer, n && P.error, s && P.fullWidth), g = t === "password", h = t === "search", f = t === "location", _ = (v) => g ? c ? "text" : "password" : v;
  return /* @__PURE__ */ m("div", { className: P.wrapper, children: [
    r && /* @__PURE__ */ a(
      "label",
      {
        "data-requiredfield": i,
        htmlFor: e,
        className: P.label,
        "data-disabled": o,
        children: r
      }
    ),
    /* @__PURE__ */ m("div", { className: y, "data-disabled": o, children: [
      h && /* @__PURE__ */ a("button", { type: "submit", className: P.iconButton, "data-disabled": o, children: /* @__PURE__ */ a(p, { name: "google" }) }),
      /* @__PURE__ */ a(
        "input",
        {
          id: e,
          type: _(t),
          required: i,
          className: P.input,
          autoComplete: "off",
          ...l
        }
      ),
      f && /* @__PURE__ */ a("button", { type: "submit", className: P.iconButton, "data-disabled": o, children: /* @__PURE__ */ a(p, { name: "pin-outline" }) }),
      g && /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          className: P.iconButton,
          onClick: () => u(!c),
          children: c ? /* @__PURE__ */ a(p, { name: "eye-outline" }) : /* @__PURE__ */ a(p, { name: "eye-off-outline" })
        }
      )
    ] }),
    n && /* @__PURE__ */ a("span", { className: P.errorText, "data-errortext": !!n, children: n })
  ] });
}, Ke = "_Root_n6gai_51", Ue = "_disabled_n6gai_57", Ze = "_Item_n6gai_63", et = "_Indicator_n6gai_101", tt = "_Label_n6gai_120", M = {
  "regular-link": "_regular-link_n6gai_33",
  "small-link": "_small-link_n6gai_42",
  Root: Ke,
  disabled: Ue,
  Item: Ze,
  Indicator: et,
  Label: tt
}, On = ({ options: e, defaultValue: r, disabled: t, ...n }) => /* @__PURE__ */ a(
  D.Root,
  {
    className: M.Root,
    defaultValue: "default",
    "aria-label": "View density",
    ...n,
    children: e?.length && e.map((o) => /* @__PURE__ */ m(
      "div",
      {
        className: t ? M.disabled : "",
        style: { display: "flex", alignItems: "center" },
        children: [
          /* @__PURE__ */ a(D.Item, { className: M.Item, value: o.radioName, id: o.id, children: /* @__PURE__ */ a(D.Indicator, { className: M.Indicator }) }),
          /* @__PURE__ */ a("label", { className: M.Label, htmlFor: o.id, children: o.radioName })
        ]
      },
      o.id
    ))
  }
), nt = "_reCaptchaWrapper_hfn95_5", at = "_reCaptchaError_hfn95_11", rt = "_reCaptchaText_hfn95_15", j = {
  reCaptchaWrapper: nt,
  reCaptchaError: at,
  reCaptchaText: rt
}, Jn = ({ isCaptchaPassed: e, setCaptchaToken: r, siteKey: t, ...n }) => {
  const o = (i) => {
    e && i && r(i);
  }, s = k(j.reCaptchaWrapper, !e && j.reCaptchaError);
  return /* @__PURE__ */ m("div", { className: s, children: [
    /* @__PURE__ */ a(
      ce,
      {
        sitekey: t,
        onChange: o,
        theme: "dark",
        ...n
      }
    ),
    !e && /* @__PURE__ */ a("span", { className: j.reCaptchaText, children: "Please verify that you are not a robot" })
  ] });
}, ot = "_bodyTextArea_1sne9_51", st = "_textArea_1sne9_56", it = "_fullWidth_1sne9_90", lt = "_label_1sne9_94", ct = "_disabled_1sne9_101", dt = "_error_1sne9_105", ut = "_errorText_1sne9_112", N = {
  "regular-link": "_regular-link_1sne9_33",
  "small-link": "_small-link_1sne9_42",
  bodyTextArea: ot,
  textArea: st,
  fullWidth: it,
  label: lt,
  disabled: ct,
  error: dt,
  errorText: ut
}, Xn = ["default"], Qn = (e) => {
  const {
    className: r,
    variant: t = "default",
    label: n,
    error: o,
    errorText: s,
    disabled: i = !1,
    fullWidth: l = !1,
    id: c,
    ...u
  } = e, y = k(
    N.textArea,
    o ? N.error : N[t],
    i && N.disabled,
    l && N.fullWidth,
    r
  );
  return /* @__PURE__ */ m("div", { className: N.bodyTextArea, children: [
    n && /* @__PURE__ */ a("label", { className: N.label, htmlFor: c, children: n }),
    /* @__PURE__ */ a("textarea", { className: y, disabled: i, id: c, ...u }),
    o && s && /* @__PURE__ */ a("div", { className: N.errorText, children: s })
  ] });
}, mt = "_datePicker__label_nmeyl_51", _t = "_datePicker__trigger_nmeyl_56", ht = "_datePicker__dateValue_nmeyl_81", ft = "_datePicker__icon_nmeyl_99", gt = "_datePicker__errorText_nmeyl_103", yt = "_datePicker__popover_nmeyl_107", bt = "_fullWidth_nmeyl_122", pt = "_datePicker__calendar_nmeyl_126", kt = "_captionLabel_nmeyl_133", vt = "_day_nmeyl_139", Pt = "_weekdays_nmeyl_146", wt = "_weekday_nmeyl_146", xt = "_selected_nmeyl_156", Nt = "_today_nmeyl_162", Wt = "_weekend_nmeyl_167", Ct = "_rangeStart_nmeyl_171", It = "_rangeEnd_nmeyl_177", Mt = "_chevron_nmeyl_183", St = "_navButton_nmeyl_189", d = {
  "regular-link": "_regular-link_nmeyl_33",
  "small-link": "_small-link_nmeyl_42",
  datePicker__label: mt,
  datePicker__trigger: _t,
  "datePicker__trigger--disabled": "_datePicker__trigger--disabled_nmeyl_76",
  datePicker__dateValue: ht,
  "datePicker__trigger--error": "_datePicker__trigger--error_nmeyl_87",
  "datePicker__trigger--open": "_datePicker__trigger--open_nmeyl_96",
  datePicker__icon: ft,
  datePicker__errorText: gt,
  datePicker__popover: yt,
  "scale-in": "_scale-in_nmeyl_1",
  fullWidth: bt,
  datePicker__calendar: pt,
  captionLabel: kt,
  day: vt,
  weekdays: Pt,
  weekday: wt,
  selected: xt,
  today: Nt,
  weekend: Wt,
  rangeStart: Ct,
  rangeEnd: It,
  chevron: Mt,
  navButton: St
};
function z(e) {
  return (r = {}) => {
    const t = r.width ? String(r.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
function S(e) {
  return (r, t) => {
    const n = t?.context ? String(t.context) : "standalone";
    let o;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, l = t?.width ? String(t.width) : i;
      o = e.formattingValues[l] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, l = t?.width ? String(t.width) : e.defaultWidth;
      o = e.values[l] || e.values[i];
    }
    const s = e.argumentCallback ? e.argumentCallback(r) : r;
    return o[s];
  };
}
function $(e) {
  return (r, t = {}) => {
    const n = t.width, o = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], s = r.match(o);
    if (!s)
      return null;
    const i = s[0], l = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? Tt(l, (g) => g.test(i)) : (
      // [TODO] -- I challenge you to fix the type
      $t(l, (g) => g.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(u)
    ) : u;
    const y = r.slice(i.length);
    return { value: u, rest: y };
  };
}
function $t(e, r) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && r(e[t]))
      return t;
}
function Tt(e, r) {
  for (let t = 0; t < e.length; t++)
    if (r(e[t]))
      return t;
}
function Rt(e) {
  return (r, t = {}) => {
    const n = r.match(e.matchPattern);
    if (!n)
      return null;
    const o = n[0], s = r.match(e.parsePattern);
    if (!s)
      return null;
    let i = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    i = t.valueCallback ? t.valueCallback(i) : i;
    const l = r.slice(o.length);
    return { value: i, rest: l };
  };
}
const Bt = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Lt = (e, r, t) => {
  let n;
  const o = Bt[e];
  return typeof o == "string" ? n = o : r === 1 ? n = o.one : n = o.other.replace("{{count}}", r.toString()), t?.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
}, At = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ft = (e, r, t, n) => At[e], Vt = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Dt = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, qt = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Et = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Ht = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, jt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, zt = (e, r) => {
  const t = Number(e), n = t % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, Ot = {
  ordinalNumber: zt,
  era: S({
    values: Vt,
    defaultWidth: "wide"
  }),
  quarter: S({
    values: Dt,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: S({
    values: qt,
    defaultWidth: "wide"
  }),
  day: S({
    values: Et,
    defaultWidth: "wide"
  }),
  dayPeriod: S({
    values: Ht,
    defaultWidth: "wide",
    formattingValues: jt,
    defaultFormattingWidth: "wide"
  })
}, Jt = /^(\d+)(th|st|nd|rd)?/i, Xt = /\d+/i, Qt = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Gt = {
  any: [/^b/i, /^(a|c)/i]
}, Yt = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Kt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ut = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Zt = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, en = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, tn = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, nn = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, an = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, rn = {
  ordinalNumber: Rt({
    matchPattern: Jt,
    parsePattern: Xt,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: $({
    matchPatterns: Qt,
    defaultMatchWidth: "wide",
    parsePatterns: Gt,
    defaultParseWidth: "any"
  }),
  quarter: $({
    matchPatterns: Yt,
    defaultMatchWidth: "wide",
    parsePatterns: Kt,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: $({
    matchPatterns: Ut,
    defaultMatchWidth: "wide",
    parsePatterns: Zt,
    defaultParseWidth: "any"
  }),
  day: $({
    matchPatterns: en,
    defaultMatchWidth: "wide",
    parsePatterns: tn,
    defaultParseWidth: "any"
  }),
  dayPeriod: $({
    matchPatterns: nn,
    defaultMatchWidth: "any",
    parsePatterns: an,
    defaultParseWidth: "any"
  })
}, on = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "dd/MM/yyyy"
}, sn = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, ln = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, cn = {
  date: z({
    formats: on,
    defaultWidth: "full"
  }),
  time: z({
    formats: sn,
    defaultWidth: "full"
  }),
  dateTime: z({
    formats: ln,
    defaultWidth: "full"
  })
}, dn = {
  code: "en-GB",
  formatDistance: Lt,
  formatLong: cn,
  formatRelative: Ft,
  localize: Ot,
  match: rn,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, un = ({ value: e, onChange: r, ...t }) => {
  const n = {
    weekend: (o) => [0, 6].includes(o.getDay())
  };
  return /* @__PURE__ */ a(
    de,
    {
      className: d.datePicker__calendar,
      classNames: {
        caption_label: d.captionLabel,
        day: d.day,
        weekdays: d.weekdays,
        weekday: d.weekday,
        nav_button: d.navButton,
        chevron: d.chevron
      },
      modifiersClassNames: {
        selected: d.selected,
        today: d.today,
        weekend: d.weekend,
        range_start: d.rangeStart,
        range_end: d.rangeEnd
      },
      modifiers: n,
      locale: dn,
      animate: !0,
      fixedWeeks: !0,
      showOutsideDays: !0,
      mode: "range",
      selected: e,
      onSelect: r,
      required: !0,
      ...t
    }
  );
}, Gn = ({
  value: e,
  label: r,
  onChange: t,
  hasError: n,
  errorText: o,
  disabled: s = !1,
  fullWidth: i = !1
}) => {
  const l = "datepicker-trigger", [c, u] = Z(!1), y = (h) => h?.from ? !h.to || h.from.getTime() === h.to.getTime() ? B(h.from, "dd/MM/yyyy") : `${B(h.from, "dd/MM/yyyy")} - ${B(h.to, "dd/MM/yyyy")}` : B(/* @__PURE__ */ new Date(), "dd/MM/yyyy"), g = [
    d.datePicker__trigger,
    i && d.fullWidth,
    s && d.disabled,
    n && d["datePicker__trigger--error"],
    c && d["datePicker__trigger--open"],
    s && d["datePicker__trigger--disabled"]
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ m("div", { className: d.datePicker, children: [
    /* @__PURE__ */ a("label", { htmlFor: l, className: d.datePicker__label, children: r }),
    /* @__PURE__ */ m(q.Root, { open: c, onOpenChange: u, children: [
      /* @__PURE__ */ m(
        q.Trigger,
        {
          onClick: () => u(!c),
          id: l,
          className: g,
          disabled: s,
          "aria-label": r,
          "aria-invalid": n || void 0,
          "aria-describedby": n && o ? `${l}-error` : void 0,
          children: [
            /* @__PURE__ */ a("span", { className: d.datePicker__dateValue, children: y(e) }),
            /* @__PURE__ */ a("div", { className: d.datePicker__icon, children: c ? /* @__PURE__ */ a(p, { name: "calendar" }) : /* @__PURE__ */ a(p, { name: "calendar-outline" }) })
          ]
        }
      ),
      /* @__PURE__ */ a(
        q.Content,
        {
          className: d.datePicker__popover,
          sideOffset: 1,
          align: "start",
          side: "bottom",
          children: /* @__PURE__ */ a(un, { value: e, onChange: t })
        }
      )
    ] }),
    n && o && /* @__PURE__ */ a("span", { id: `${l}-error`, className: d.datePicker__errorText, role: "alert", children: o })
  ] });
}, mn = "_list_1wmo3_51", _n = "_trigger_1wmo3_55", hn = "_fullWidth_1wmo3_108", A = {
  "regular-link": "_regular-link_1wmo3_33",
  "small-link": "_small-link_1wmo3_42",
  list: mn,
  trigger: _n,
  fullWidth: hn
}, Yn = ({
  tabs: e,
  value: r,
  onValueChange: t,
  fullWidth: n = !1,
  children: o
}) => /* @__PURE__ */ m(R.Root, { value: r, onValueChange: t, className: A.root, children: [
  /* @__PURE__ */ a(R.List, { className: A.list, children: e.map(({ id: s, label: i, disabled: l }) => /* @__PURE__ */ a(
    R.Trigger,
    {
      value: s,
      disabled: l,
      className: k(A.trigger, n && A.fullWidth),
      children: i
    },
    s
  )) }),
  e.map(({ id: s }) => /* @__PURE__ */ a(R.Content, { value: s, children: o }, s))
] }), fn = "_root_ycd9q_5", gn = "_container_ycd9q_11", yn = "_item_ycd9q_17", bn = "_selected_ycd9q_38", pn = "_dots_ycd9q_43", kn = "_icon_ycd9q_54", vn = "_selectBox_ycd9q_58", Pn = "_select_ycd9q_38", W = {
  root: fn,
  container: gn,
  item: yn,
  selected: bn,
  dots: pn,
  icon: kn,
  selectBox: vn,
  select: Pn
}, x = {
  container: W.container,
  dots: W.dots,
  icon: W.icon,
  item: W.item,
  pageButton(e) {
    return k(this.item, e && W.selected);
  },
  root: W.root,
  select: W.select,
  selectBox: W.selectBox
}, wn = ({ disabled: e, onClick: r, size: t }) => /* @__PURE__ */ a("button", { className: x.item, disabled: e, onClick: r, children: /* @__PURE__ */ a(p, { className: x.icon, name: "arrow-ios-back", size: t }) }), xn = ({ disabled: e, onClick: r, size: t }) => /* @__PURE__ */ a("button", { className: x.item, disabled: e, onClick: r, children: /* @__PURE__ */ a(p, { className: x.icon, name: "arrow-ios-forward", size: t }) }), Nn = ({ disabled: e, onClick: r, page: t, selected: n }) => /* @__PURE__ */ a(
  "button",
  {
    className: x.pageButton(n),
    disabled: n || e,
    onClick: r,
    type: "button",
    children: t
  }
), Wn = () => /* @__PURE__ */ a("span", { className: x.dots, children: "…" }), Cn = ({ currentPage: e, onClick: r, paginationRange: t }) => /* @__PURE__ */ a(O, { children: t.map((n, o) => {
  const s = n === e;
  return typeof n != "number" ? /* @__PURE__ */ a(Wn, {}, o) : /* @__PURE__ */ a(Nn, { onClick: r(n), page: n, selected: s }, o);
}) }), F = (e, r) => {
  const t = r - e + 1;
  return Array.from({ length: t }, (n, o) => o + e);
}, V = "...", In = ({ count: e, onChange: r, page: t, siblings: n = 1 }) => {
  const o = ae(() => {
    if (n + 5 >= e)
      return F(1, e);
    const h = Math.max(t - n, 1), f = Math.min(t + n, e), _ = h > 2, v = f < e - 2, T = 1, J = e;
    if (!_ && v) {
      const C = 3 + 2 * n;
      return [...F(1, C), V, e];
    }
    if (_ && !v) {
      const C = 3 + 2 * n, X = F(e - C + 1, e);
      return [T, V, ...X];
    }
    if (_ && v) {
      const C = F(h, f);
      return [T, V, ...C, V, J];
    }
  }, [n, t, e]), s = o.at(-1), i = t === 1, l = t === s, c = G(() => {
    r(t + 1);
  }, [t, r]), u = G(() => {
    r(t - 1);
  }, [t, r]);
  function y(g) {
    return () => r(g);
  }
  return {
    paginationRange: o,
    // список номеров и "..." для отрисовки
    handleMainPageClicked: y,
    // клик по номеру страницы
    handleNextPageClicked: c,
    // клик "вперёд"
    handlePreviousPageClicked: u,
    // клик "назад"
    isFirstPage: i,
    // текущая — первая?
    isLastPage: l
    // текущая — последняя?
  };
}, Mn = ({ onPerPageChange: e, perPage: r, perPageOptions: t }) => {
  const n = t.map((o) => ({
    label: o.toString(),
    value: o
  }));
  return /* @__PURE__ */ m("div", { className: x.selectBox, children: [
    "Show",
    /* @__PURE__ */ a(
      ee,
      {
        variant: "pagination",
        className: x.selectBox,
        onValueChange: (o) => e(Number(o)),
        options: n,
        value: r
      }
    ),
    "on page"
  ] });
}, Kn = ({
  count: e,
  onChange: r,
  onPerPageChange: t,
  page: n,
  perPage: o = null,
  perPageOptions: s,
  siblings: i
}) => {
  const {
    handleMainPageClicked: l,
    handleNextPageClicked: c,
    handlePreviousPageClicked: u,
    isFirstPage: y,
    isLastPage: g,
    paginationRange: h
  } = In({
    count: e,
    onChange: r,
    page: n,
    siblings: i
  }), f = !!o && !!s && !!t;
  return /* @__PURE__ */ m("div", { className: x.root, children: [
    /* @__PURE__ */ m("div", { className: x.container, children: [
      /* @__PURE__ */ a(wn, { disabled: y, onClick: u, size: 16 }),
      /* @__PURE__ */ a(
        Cn,
        {
          currentPage: n,
          onClick: l,
          paginationRange: h
        }
      ),
      /* @__PURE__ */ a(xn, { disabled: g, onClick: c, size: 16 })
    ] }),
    f && /* @__PURE__ */ a(
      Mn,
      {
        onPerPageChange: t,
        perPage: o,
        perPageOptions: s
      }
    )
  ] });
};
export {
  Dn as Alert,
  K as Button,
  En as Card,
  Hn as Checkbox,
  Gn as DatePicker,
  jn as Header,
  zn as Input,
  Kn as Pagination,
  On as Radio,
  Jn as ReCaptcha,
  ee as Selectbox,
  Yn as TabsComponent,
  Qn as TextAreaComponent,
  p as UniversalIcon,
  qn as buttonVariant,
  ea as clsx,
  Xn as textAreaVariant
};
//# sourceMappingURL=index.es.js.map
