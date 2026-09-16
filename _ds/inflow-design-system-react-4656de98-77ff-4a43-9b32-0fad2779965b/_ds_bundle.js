/* @ds-bundle: {"format":4,"namespace":"InriverDesignSystem_4656de","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Accordion","sourcePath":"components/display/Accordion.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"DataTable","sourcePath":"components/display/DataTable.jsx"},{"name":"InriverDataTableRow","sourcePath":"components/display/InriverDataTableRow.jsx"},{"name":"InriverCell","sourcePath":"components/display/InriverDataTableRow.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"InriverAppNav","sourcePath":"components/layout/InriverAppNav.jsx"},{"name":"InriverAppNavPlaceholder","sourcePath":"components/layout/InriverAppNav.jsx"},{"name":"InriverGlobalHeader","sourcePath":"components/layout/InriverGlobalHeader.jsx"},{"name":"InriverNavRail","sourcePath":"components/layout/InriverNavRail.jsx"},{"name":"InriverPageHeader","sourcePath":"components/layout/InriverPageHeader.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"InriverStepper","sourcePath":"components/navigation/InriverStepper.jsx"},{"name":"InriverTabs","sourcePath":"components/navigation/InriverTabs.jsx"},{"name":"InriverTabPanel","sourcePath":"components/navigation/InriverTabs.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"ChatPanel","sourcePath":"components/panels/ChatPanel.jsx"},{"name":"DetailPanel","sourcePath":"components/panels/DetailPanel.jsx"},{"name":"DetailPanelSection","sourcePath":"components/panels/DetailPanel.jsx"},{"name":"RightPanel","sourcePath":"components/panels/RightPanel.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"b3efaaeb75e5","components/core/Badge.jsx":"f40ec7b5557b","components/core/Button.jsx":"aac0fd8e20ba","components/core/Chip.jsx":"cff854ec42d6","components/core/Divider.jsx":"23537e1f8fae","components/core/IconButton.jsx":"24c9ad49fc33","components/display/Accordion.jsx":"cd5ffd34f387","components/display/Card.jsx":"62075dfbd8c9","components/display/DataTable.jsx":"cfdb5e4c38d4","components/display/InriverDataTableRow.jsx":"5d57bb414042","components/feedback/Dialog.jsx":"c8d71353d4be","components/feedback/Progress.jsx":"6c25714a3dc4","components/feedback/Skeleton.jsx":"898b3659c29d","components/feedback/Toast.jsx":"9412978f6e0c","components/feedback/Tooltip.jsx":"560eed5af176","components/forms/Checkbox.jsx":"8ef1ec2b2c26","components/forms/Radio.jsx":"df01a13296c1","components/forms/Select.jsx":"159797ec96d5","components/forms/Slider.jsx":"cd709d2f66cc","components/forms/Switch.jsx":"4dba49367112","components/forms/TextField.jsx":"b9f90aabd98b","components/layout/InriverAppNav.jsx":"0b43b4c4a750","components/layout/InriverGlobalHeader.jsx":"558ed025c8ea","components/layout/InriverNavRail.jsx":"75119370ff4d","components/layout/InriverPageHeader.jsx":"66c9253c03b4","components/navigation/Breadcrumbs.jsx":"d3579e127280","components/navigation/InriverStepper.jsx":"c8847ea72350","components/navigation/InriverTabs.jsx":"6b32bde18b9a","components/navigation/Menu.jsx":"8bb24ea57b24","components/navigation/Pagination.jsx":"9014a7aac043","components/panels/ChatPanel.jsx":"d8ff18d171fe","components/panels/DetailPanel.jsx":"b96325ef3603","components/panels/RightPanel.jsx":"ae535d6da583","design_handoff_inriver_ds/inriver-theme.js":"d6588ba5cef9","design_handoff_inriver_ds/prototype/screens.jsx":"48d802251fdc","inriver-theme.js":"d6588ba5cef9","ui_kits/inriver-app/screens.jsx":"e5531fbfa5cf"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InriverDesignSystem_4656de = window.InriverDesignSystem_4656de || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
/**
 * Inriver Avatar — identity token. Priority: image → children (initials)
 * → person icon. Neutral grey fill by default. Sizes 40/32/24/18,
 * shapes circular/rounded/square, optional green status badge.
 */
const SIZE_STYLES = {
  40: {
    width: 40,
    height: 40,
    fontSize: 20
  },
  32: {
    width: 32,
    height: 32,
    fontSize: 16
  },
  24: {
    width: 24,
    height: 24,
    fontSize: 12
  },
  18: {
    width: 18,
    height: 18,
    fontSize: 9
  }
};
const BADGE = {
  40: 10,
  32: 8,
  24: 6,
  18: 5
};
const RADIUS = {
  circular: "var(--radius-full)",
  rounded: "var(--radius-sm)",
  square: 0
};
function Avatar({
  children,
  src,
  alt = "",
  size = 40,
  shape = "circular",
  badge = false,
  color,
  style
}) {
  const sz = SIZE_STYLES[size] || SIZE_STYLES[40];
  const radius = RADIUS[shape];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: color || "var(--grey-400)",
      color: "#fff",
      fontFamily: "var(--font-family-base)",
      fontWeight: 400,
      letterSpacing: "0.14px",
      borderRadius: radius,
      flexShrink: 0,
      ...sz,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: radius
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : children != null ? children : /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: "60%"
    }
  }, "person")), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: 0,
      width: BADGE[size],
      height: BADGE[size],
      borderRadius: "var(--radius-full)",
      background: "var(--palette-success-main)",
      border: "1.5px solid #fff"
    }
  }));
}

/**
 * AvatarGroup — overlapping stack with an optional +N overflow counter.
 */
const OVERLAP = {
  40: -8,
  32: -6,
  24: -4,
  18: -3
};
function AvatarGroup({
  children,
  max,
  size = 40,
  style
}) {
  const items = React.Children.toArray(children);
  const visible = max ? items.slice(0, max) : items;
  const overflow = max && items.length > max ? items.length - max : 0;
  const off = OVERLAP[size];
  const sz = SIZE_STYLES[size] || SIZE_STYLES[40];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, visible.map((child, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : off,
      border: "2px solid #fff",
      borderRadius: "var(--radius-full)",
      zIndex: visible.length - i
    }
  }, child)), overflow > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: off,
      border: "2px solid #fff",
      borderRadius: "var(--radius-full)",
      background: "var(--grey-400)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-family-base)",
      fontWeight: 400,
      ...sz
    }
  }, "+", overflow));
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Inriver Badge — small count or dot anchored to a child (top-right),
 * or standalone. Colours: error (default), primary, success.
 */
const COLORS = {
  error: "var(--palette-error-main)",
  primary: "var(--color-primary-main)",
  success: "var(--palette-success-main)"
};
function Badge({
  content,
  color = "error",
  dot = false,
  max = 99,
  children,
  style
}) {
  const bg = COLORS[color] || COLORS.error;
  const display = typeof content === "number" && content > max ? `${max}+` : content;
  const pill = /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: dot ? 8 : 16,
      height: dot ? 8 : 16,
      padding: dot ? 0 : "0 4px",
      borderRadius: dot ? "var(--radius-full)" : "var(--radius-md)",
      background: bg,
      color: "#fff",
      fontFamily: "var(--font-family-base)",
      fontSize: "0.6875rem",
      fontWeight: 500,
      lineHeight: "16px",
      boxSizing: "border-box",
      ...(children ? {
        position: "absolute",
        top: 0,
        right: 0,
        transform: "translate(40%,-40%)",
        border: "2px solid #fff"
      } : null),
      ...style
    }
  }, !dot && display);
  if (!children) return pill;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, children, pill);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inriver Button — MUI-derived. Variants: contained (key CTA, navy),
 * outlined, text. Sizes: large/medium (40px), small (30px), xs (20px,
 * Inriver-only). Labels are capitalised, radius 5px.
 * `startIcon`/`endIcon` accept a Material Symbols ligature name or a node.
 */
const SIZES = {
  large: {
    height: 40,
    px: 24,
    fs: 14,
    icon: 18
  },
  medium: {
    height: 40,
    px: 24,
    fs: 14,
    icon: 18
  },
  small: {
    height: 30,
    px: 16,
    fs: 13,
    icon: 16
  },
  xs: {
    height: 20,
    px: 8,
    fs: 12,
    icon: 14
  }
};
function renderIcon(icon, size) {
  if (!icon) return null;
  return typeof icon === "string" ? /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: size
    }
  }, icon) : icon;
}
function Button({
  variant = "contained",
  size = "medium",
  children,
  startIcon,
  endIcon,
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: s.height,
    padding: `0 ${s.px}px`,
    fontSize: s.fs,
    fontFamily: "var(--font-family-base)",
    fontWeight: 500,
    letterSpacing: "0.1px",
    lineHeight: 1,
    textTransform: "capitalize",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    whiteSpace: "nowrap",
    transition: "background-color .2s ease, border-color .2s ease, box-shadow .2s ease",
    boxSizing: "border-box"
  };
  const variants = {
    contained: {
      background: "var(--color-primary-main)",
      color: "#fff",
      border: "none"
    },
    outlined: {
      background: "var(--color-white)",
      color: "var(--color-primary-main)",
      border: "1px solid var(--color-outline-variant)"
    },
    text: {
      background: "transparent",
      color: "var(--color-primary-main)",
      border: "none"
    }
  };
  const disabledStyle = disabled ? {
    background: variant === "text" || variant === "outlined" ? "transparent" : "var(--state-on-surface-12)",
    color: "rgba(0,0,0,0.38)",
    border: variant === "outlined" ? "1px solid var(--state-on-surface-12)" : variants[variant].border
  } : null;
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover && !disabled ? variant === "contained" ? {
    background: "var(--color-primary-container)"
  } : {
    background: "var(--state-primary-08)"
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...disabledStyle,
      ...style
    }
  }, rest), renderIcon(startIcon, s.icon), children, renderIcon(endIcon, s.icon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inriver Chip — pill control. Variants: filled, outlined,
 * filled-primary (pale navy tab), outlined-primary. Sizes sm/md/lg
 * (24/32/40px). `leadingIcon` = Material ligature; `onDelete` shows a
 * trailing close affordance.
 */
const SIZES = {
  sm: {
    height: 24,
    px: 8,
    fs: 12,
    icon: 14,
    gap: 6
  },
  md: {
    height: 32,
    px: 12,
    fs: 14,
    icon: 18,
    gap: 8
  },
  lg: {
    height: 40,
    px: 20,
    fs: 16,
    icon: 20,
    gap: 10
  }
};
const VARIANTS = {
  "filled": {
    background: "rgba(25,27,36,0.12)",
    color: "var(--color-on-surface)",
    border: "none"
  },
  "outlined": {
    background: "transparent",
    color: "var(--color-on-surface-variant)",
    border: "1px solid var(--color-outline-variant)"
  },
  "filled-primary": {
    background: "var(--custom-primary-tab)",
    color: "var(--color-primary-main)",
    border: "none"
  },
  "outlined-primary": {
    background: "transparent",
    color: "var(--color-primary-main)",
    border: "1px solid var(--color-primary-main)"
  }
};
function Chip({
  label,
  children,
  variant = "outlined",
  size = "md",
  leadingIcon,
  onDelete,
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.outlined;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: disabled ? undefined : onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: `0 ${s.px}px`,
      borderRadius: "var(--radius-full)",
      fontFamily: "var(--font-family-base)",
      fontSize: s.fs,
      fontWeight: 500,
      letterSpacing: "0.1px",
      whiteSpace: "nowrap",
      cursor: onClick && !disabled ? "pointer" : "default",
      opacity: disabled ? 0.38 : 1,
      boxSizing: "border-box",
      ...v,
      ...style
    }
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: s.icon
    }
  }, leadingIcon), label || children, onDelete && /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    role: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onDelete(e);
    },
    style: {
      fontSize: s.icon,
      cursor: "pointer",
      opacity: 0.7
    }
  }, "close"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/**
 * Inriver Divider — hairline rule in the divider colour. Horizontal by
 * default; `vertical` for an inline separator; optional centered label.
 */
function Divider({
  vertical = false,
  label,
  spacing = 16,
  style
}) {
  const color = "var(--color-outline-variant)";
  if (vertical) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        background: color,
        margin: `0 ${spacing}px`,
        ...style
      }
    });
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: `${spacing}px 0`,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: color
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-family-base)",
        fontSize: 12,
        fontWeight: 500,
        color: "var(--color-on-surface-variant)",
        textTransform: "uppercase",
        letterSpacing: "0.5px"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: color
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      height: 1,
      background: color,
      margin: `${spacing}px 0`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inriver IconButton — circular icon-only button. Standard is transparent
 * with on-surface-variant icon; hover adds a neutral state layer. Always
 * pass an `ariaLabel`.
 */
function IconButton({
  icon,
  ariaLabel,
  size = 40,
  variant = "standard",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const iconSize = Math.round(size * 0.5);
  const variants = {
    standard: {
      background: hover ? "var(--state-on-surface-12)" : "transparent",
      color: "var(--color-on-surface-variant)"
    },
    primary: {
      background: hover ? "var(--state-on-surface-12)" : "transparent",
      color: "var(--color-primary-main)"
    },
    filled: {
      background: hover ? "var(--color-primary-main)" : "var(--color-primary-container)",
      color: "#fff"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      borderRadius: "var(--radius-full)",
      border: "none",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      transition: "background-color .15s ease",
      flexShrink: 0,
      ...variants[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: iconSize
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Accordion.jsx
try { (() => {
/**
 * Inriver Accordion — collapsible panels. Items are {id, summary, details,
 * disabled}. Controlled via `expanded` (id or id[]) + `onChange`, or leave
 * uncontrolled with `defaultExpanded`. `multiple` allows several open.
 */
function Accordion({
  items = [],
  expanded,
  defaultExpanded = [],
  multiple = false,
  onChange,
  style
}) {
  const controlled = expanded !== undefined;
  const [internal, setInternal] = React.useState(new Set(defaultExpanded));
  const isOpen = id => controlled ? Array.isArray(expanded) ? expanded.includes(id) : expanded === id : internal.has(id);
  const toggle = id => {
    const open = isOpen(id);
    if (!controlled) {
      setInternal(prev => {
        const next = new Set(multiple ? prev : []);
        open ? next.delete(id) : next.add(id);
        return next;
      });
    }
    onChange && onChange(id, !open);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, items.map((it, i) => {
    const open = isOpen(it.id);
    const first = i === 0,
      last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        border: "1px solid var(--color-outline-variant)",
        borderBottom: last ? "1px solid var(--color-outline-variant)" : "none",
        borderTopLeftRadius: first ? "var(--radius-xs)" : 0,
        borderTopRightRadius: first ? "var(--radius-xs)" : 0,
        borderBottomLeftRadius: last ? "var(--radius-xs)" : 0,
        borderBottomRightRadius: last ? "var(--radius-xs)" : 0,
        opacity: it.disabled ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      disabled: it.disabled,
      onClick: () => !it.disabled && toggle(it.id),
      onMouseEnter: e => {
        if (!it.disabled) e.currentTarget.style.background = "var(--custom-row-on-hover)";
      },
      onMouseLeave: e => e.currentTarget.style.background = "transparent",
      style: {
        width: "100%",
        minHeight: 48,
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        border: "none",
        background: "transparent",
        cursor: it.disabled ? "not-allowed" : "pointer",
        textAlign: "left",
        fontFamily: "var(--font-family-base)",
        fontSize: 14,
        fontWeight: 500,
        lineHeight: "20px",
        letterSpacing: "0.1px",
        color: "var(--color-on-surface)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.summary), /*#__PURE__*/React.createElement("span", {
      className: "material-icons-outlined",
      style: {
        fontSize: 20,
        color: "var(--color-on-surface-variant)",
        transition: "transform .2s",
        transform: open ? "rotate(180deg)" : "none"
      }
    }, "expand_more")), open && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px 16px",
        fontFamily: "var(--font-family-base)",
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "0.25px",
        color: "var(--color-on-surface-variant)"
      }
    }, it.details));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
/**
 * Inriver Card — content surface, 5px radius. `outlined` (1px border, NO
 * shadow — the house default) or `elevated` (elevation 2). Optional media
 * (image URL or node), title, body, children and a right-aligned actions row.
 */
function Card({
  variant = "outlined",
  media,
  mediaAlt = "",
  mediaHeight = 140,
  title,
  body,
  actions,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-white)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      border: variant === "outlined" ? "1px solid var(--color-outline-variant)" : "none",
      boxShadow: variant === "elevated" ? "var(--elevation-2)" : "none",
      ...style
    }
  }, media && (typeof media === "string" ? /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: mediaAlt,
    style: {
      width: "100%",
      height: mediaHeight,
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: mediaHeight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-surface-container-low)"
    }
  }, media)), (title || body || children) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-family-base)",
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: "var(--color-on-surface)",
      marginBottom: body ? 4 : 0
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-family-base)",
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--color-on-surface-variant)"
    }
  }, body), children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      padding: "0 16px 16px"
    }
  }, actions));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/DataTable.jsx
try { (() => {
/**
 * Inriver DataTable — the AG-Grid-style table and the reference for all
 * prototype tables. Densities compact/comfortable(default)/cozy = 32/40/48px
 * rows. Checkbox selection, hover + selected row states, and a `rowState`
 * accessor for mandatory / warning / error / success / disabled highlights.
 */
const ROW_H = {
  compact: 32,
  comfortable: 40,
  cozy: 48
};
const FONT = {
  compact: 12,
  comfortable: 14,
  cozy: 14
};
const ROW_BG = {
  "default": "var(--custom-row-default)",
  "hover": "var(--custom-row-on-hover)",
  "selected": "var(--custom-row-selected)",
  "selected-hover": "var(--custom-row-selected-hover)",
  "focused": "var(--custom-row-focused-bg)",
  "mandatory": "var(--custom-row-mandatory)",
  "disabled": "var(--custom-row-disabled)",
  "warning": "var(--custom-highlight-yellow)",
  "error": "var(--custom-highlight-red)",
  "success": "var(--custom-highlight-green)"
};
function DataTable({
  columns = [],
  rows = [],
  rowId,
  density = "comfortable",
  selectable = false,
  selected,
  onSelectChange,
  rowState,
  style
}) {
  const idOf = rowId || ((r, i) => String(r.id ?? i));
  const controlled = selected !== undefined;
  const toSet = v => v instanceof Set ? v : new Set(v || []);
  const [localSel, setLocalSel] = React.useState(new Set());
  const sel = controlled ? toSet(selected) : localSel;
  const [hover, setHover] = React.useState(null);
  const emit = next => {
    if (!controlled) setLocalSel(next);
    onSelectChange && onSelectChange(next);
  };
  const toggleRow = id => {
    const n = new Set(sel);
    n.has(id) ? n.delete(id) : n.add(id);
    emit(n);
  };
  const toggleAll = () => emit(sel.size === rows.length ? new Set() : new Set(rows.map((r, i) => idOf(r, i))));
  const rowH = ROW_H[density] || 40;
  const fs = FONT[density] || 14;
  const headCell = {
    height: 32,
    padding: "0 16px",
    fontFamily: "var(--font-family-base)",
    fontWeight: 600,
    fontSize: fs,
    color: "var(--color-on-surface)",
    textAlign: "left",
    background: "var(--color-white)",
    borderBottom: "1px solid var(--color-outline-variant)",
    whiteSpace: "nowrap",
    boxSizing: "border-box"
  };
  const cell = {
    height: rowH,
    padding: "0 16px",
    fontFamily: "var(--font-family-base)",
    fontSize: fs,
    color: "var(--color-on-surface)",
    borderBottom: "1px solid var(--color-outline-variant)",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    boxSizing: "border-box"
  };
  const Check = ({
    on,
    indet,
    onClick
  }) => /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      width: 18,
      height: 18,
      borderRadius: 2,
      boxSizing: "border-box",
      cursor: "pointer",
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: on || indet ? "none" : "2px solid var(--color-outline)",
      background: on || indet ? "var(--color-primary-main)" : "transparent",
      color: "#fff"
    }
  }, indet ? /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 16
    }
  }, "remove") : on && /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 15
    }
  }, "check"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--color-outline-variant)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      tableLayout: "fixed",
      minWidth: 400
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, selectable && /*#__PURE__*/React.createElement("th", {
    style: {
      ...headCell,
      width: 52,
      padding: "0 8px 0 16px"
    }
  }, /*#__PURE__*/React.createElement(Check, {
    on: rows.length > 0 && sel.size === rows.length,
    indet: sel.size > 0 && sel.size < rows.length,
    onClick: toggleAll
  })), columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      ...headCell,
      width: c.width,
      textAlign: c.align || "left"
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => {
    const id = idOf(r, i);
    const isSel = sel.has(id);
    const st = rowState && rowState(r);
    const disabled = st === "disabled";
    let bg = ROW_BG.default;
    if (st) bg = ROW_BG[st] || ROW_BG.default;else if (isSel && hover === id) bg = ROW_BG["selected-hover"];else if (isSel) bg = ROW_BG.selected;else if (hover === id) bg = ROW_BG.hover;
    return /*#__PURE__*/React.createElement("tr", {
      key: id,
      onMouseEnter: () => !disabled && setHover(id),
      onMouseLeave: () => setHover(null),
      onClick: () => selectable && !disabled && toggleRow(id),
      style: {
        background: bg,
        opacity: disabled ? 0.38 : 1,
        pointerEvents: disabled ? "none" : undefined,
        cursor: selectable && !disabled ? "pointer" : "default"
      }
    }, selectable && /*#__PURE__*/React.createElement("td", {
      style: {
        ...cell,
        width: 52,
        padding: "0 8px 0 16px",
        background: "inherit"
      }
    }, /*#__PURE__*/React.createElement(Check, {
      on: isSel,
      onClick: () => toggleRow(id)
    })), columns.map(c => /*#__PURE__*/React.createElement("td", {
      key: c.key,
      style: {
        ...cell,
        textAlign: c.align || "left",
        background: "inherit"
      }
    }, c.render ? c.render(r) : String(r[c.key] ?? ""))));
  }))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/display/InriverDataTableRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * InriverDataTableRow — a <tr> with an Inriver grid `variant` state, for
 * hand-built tables that need the exact row-state colours without DataTable.
 * variant: default | hover | selected | selected-hover | disabled | mandatory
 */
const ROW_BG = {
  "default": "var(--custom-row-default)",
  "hover": "var(--custom-row-on-hover)",
  "selected": "var(--custom-row-selected)",
  "selected-hover": "var(--custom-row-selected-hover)",
  "disabled": "var(--custom-row-disabled)",
  "mandatory": "var(--custom-row-mandatory)"
};
function InriverDataTableRow({
  variant = "default",
  focused = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("tr", _extends({
    style: {
      background: ROW_BG[variant] || ROW_BG.default,
      color: variant === "disabled" ? "rgba(0,0,0,0.38)" : undefined,
      boxShadow: focused ? "var(--custom-row-focus-ring)" : undefined,
      transition: "background-color .12s ease",
      ...style
    }
  }, rest), children);
}

/**
 * InriverCell — a <td> with an optional cell `highlight` (yellow/red/green).
 */
const HL = {
  yellow: "var(--custom-highlight-yellow)",
  red: "var(--custom-highlight-red)",
  green: "var(--custom-highlight-green)"
};
function InriverCell({
  highlight,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("td", _extends({
    style: {
      background: highlight ? HL[highlight] : undefined,
      padding: "0 16px",
      height: 40,
      fontFamily: "var(--font-family-base)",
      fontSize: 14,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { InriverDataTableRow, InriverCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/InriverDataTableRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Inriver Dialog — modal surface. Tinted header (#e3e9f8), 28px radius,
 * body, and a right-aligned action row. Renders a scrim; `open` controls
 * visibility. maxWidth xs/sm/md/lg/xl caps the width.
 */
const MAXW = {
  xs: 360,
  sm: 560,
  md: 720,
  lg: 960,
  xl: 1140
};
function Dialog({
  open = false,
  onClose,
  title,
  children,
  actions,
  maxWidth = "sm",
  fullWidth = true
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--color-scrim)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1300,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: fullWidth ? MAXW[maxWidth] : "auto",
      maxWidth: "100%",
      background: "var(--color-white)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--elevation-3)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      maxHeight: "90vh"
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface-container-highest)",
      padding: 24,
      fontFamily: "var(--font-family-base)",
      fontSize: 24,
      fontWeight: 400,
      lineHeight: 1.334,
      color: "var(--color-on-surface)"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      overflowY: "auto",
      fontFamily: "var(--font-family-base)",
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--color-on-surface-variant)"
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      padding: "8px 24px 24px"
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
/**
 * Inriver Progress — linear bar or circular spinner in primary navy.
 * Determinate when `value` (0–100) is set, else indeterminate.
 */
function Progress({
  variant = "linear",
  value,
  size = 40,
  thickness = 4,
  style
}) {
  const determinate = typeof value === "number";
  const primary = "var(--color-primary-main)";
  if (variant === "circular") {
    const r = (size - thickness) / 2;
    const c = 2 * Math.PI * r;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        ...style
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`,
      style: determinate ? null : {
        animation: "ir-spin 1.2s linear infinite",
        transformOrigin: "center"
      }
    }, /*#__PURE__*/React.createElement("style", null, `@keyframes ir-spin{to{transform:rotate(360deg)}}`), /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: "var(--color-surface-variant)",
      strokeWidth: thickness
    }), /*#__PURE__*/React.createElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: r,
      fill: "none",
      stroke: primary,
      strokeWidth: thickness,
      strokeLinecap: "round",
      strokeDasharray: c,
      strokeDashoffset: determinate ? c * (1 - value / 100) : c * 0.7,
      transform: `rotate(-90 ${size / 2} ${size / 2})`
    })));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 4,
      width: "100%",
      borderRadius: "var(--radius-full)",
      background: "var(--color-surface-variant)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes ir-indet{0%{left:-40%;width:40%}60%{left:100%;width:40%}100%{left:100%;width:40%}}`), /*#__PURE__*/React.createElement("div", {
    style: determinate ? {
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      width: `${value}%`,
      background: primary,
      borderRadius: "inherit",
      transition: "width .3s"
    } : {
      position: "absolute",
      top: 0,
      height: "100%",
      background: primary,
      borderRadius: "inherit",
      animation: "ir-indet 1.4s ease infinite"
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
/**
 * Inriver Skeleton — shimmer placeholder. Shapes: text, rect, circle.
 */
function Skeleton({
  variant = "text",
  width,
  height,
  style
}) {
  const dims = {
    text: {
      width: width || "100%",
      height: height || 14,
      borderRadius: 4
    },
    rect: {
      width: width || "100%",
      height: height || 80,
      borderRadius: "var(--radius-md)"
    },
    circle: {
      width: width || 40,
      height: height || 40,
      borderRadius: "var(--radius-full)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      background: "linear-gradient(90deg, var(--grey-200) 25%, var(--grey-100) 37%, var(--grey-200) 63%)",
      backgroundSize: "400% 100%",
      animation: "ir-shimmer 1.4s ease infinite",
      ...dims,
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes ir-shimmer{0%{background-position:100% 50%}100%{background-position:0 50%}}`));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * Inriver Toast — the one notification + inline-alert component. A tinted
 * pill (soft severity background, dark text) with a leading icon. Optional
 * bold `title` (inline alert use), a single text `action`, and `onClose`.
 * Covers ALL notification/alert cases — there is no separate Alert.
 */
const SEV = {
  error: {
    bg: "var(--custom-diff-removed-bg)",
    icon: "error"
  },
  info: {
    bg: "var(--custom-row-mandatory)",
    icon: "info"
  },
  success: {
    bg: "var(--custom-diff-added-bg)",
    icon: "check_circle"
  },
  warning: {
    bg: "var(--custom-highlight-yellow)",
    icon: "warning"
  }
};
function Toast({
  severity = "info",
  title,
  message,
  children,
  action,
  onClose,
  style
}) {
  const s = SEV[severity] || SEV.info;
  const body = message ?? children;
  return /*#__PURE__*/React.createElement("div", {
    role: severity === "error" || severity === "warning" ? "alert" : "status",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 16,
      minHeight: 48,
      width: "100%",
      maxWidth: 560,
      padding: "12px 16px",
      borderRadius: "var(--radius-md)",
      background: s.bg,
      color: "var(--color-on-surface)",
      fontFamily: "var(--font-family-base)",
      boxSizing: "border-box",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 22,
      flexShrink: 0,
      color: "var(--color-on-surface)"
    }
  }, s.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "1 1 auto",
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "0.25px"
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: 600,
      marginBottom: 2
    }
  }, title), body, action && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("button", {
    onClick: action.onClick,
    style: {
      border: "none",
      background: "transparent",
      color: "var(--color-primary-main)",
      fontFamily: "var(--font-family-base)",
      fontWeight: 500,
      fontSize: 13,
      letterSpacing: "0.1px",
      cursor: "pointer",
      padding: 0,
      textTransform: "capitalize"
    }
  }, action.label))), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--color-on-surface)",
      display: "flex",
      padding: 2,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 20
    }
  }, "close")));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Inriver Tooltip — dark hover/focus label wrapping a single child.
 */
function Tooltip({
  title,
  placement = "top",
  children
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && title && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 1500,
      whiteSpace: "nowrap",
      background: "var(--components-tooltip-fill)",
      color: "#fff",
      fontFamily: "var(--font-family-base)",
      fontSize: 12,
      lineHeight: 1.4,
      padding: "4px 8px",
      borderRadius: "var(--radius-xs)",
      pointerEvents: "none"
    }
  }, title));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Inriver Checkbox — navy fill with white check. Supports indeterminate
 * and an optional right-hand label.
 */
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  label,
  disabled = false,
  id,
  style
}) {
  const cbId = React.useMemo(() => id || `cb-${Math.random().toString(36).slice(2, 9)}`, [id]);
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: cbId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    ref: el => {
      if (el) el.indeterminate = indeterminate;
    },
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 2,
      boxSizing: "border-box",
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: on ? "none" : "2px solid var(--color-outline)",
      background: on ? "var(--color-primary-main)" : "transparent",
      color: "#fff",
      transition: "background .15s, border-color .15s"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 16
    }
  }, "remove") : checked && /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    style: {
      fontSize: 15
    }
  }, "check")), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-family-base)",
      fontSize: 14,
      color: "var(--color-on-surface)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Inriver Radio — single-select control. Group by shared `name`.
 */
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled = false,
  id,
  style
}) {
  const rId = React.useMemo(() => id || `rd-${Math.random().toString(36).slice(2, 9)}`, [id]);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: rId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(value, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-full)",
      boxSizing: "border-box",
      flexShrink: 0,
      border: `2px solid ${checked ? "var(--color-primary-main)" : "var(--color-outline)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color .15s"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "var(--radius-full)",
      background: "var(--color-primary-main)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-family-base)",
      fontSize: 14,
      color: "var(--color-on-surface)"
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * Inriver Select — outlined dropdown matching the TextField geometry.
 * Floating label, checkmark on the selected option, click-away close,
 * row-hover / selected states from the grid tokens.
 */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = "Select…",
  size = "sm",
  error = false,
  helperText,
  disabled = false,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  const selected = norm.find(o => o.value === value);
  const H = size === "sm" ? 40 : 56;
  const floated = open || !!selected;
  const borderColor = error ? "var(--palette-error-main)" : open ? "var(--color-primary-main)" : "var(--color-outline)";
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => !disabled && setOpen(o => !o),
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: H,
      padding: "0 40px 0 14px",
      border: `${open || error ? 2 : 1}px solid ${borderColor}`,
      borderRadius: "var(--radius-xs)",
      background: "var(--color-white)",
      cursor: disabled ? "not-allowed" : "pointer",
      boxSizing: "border-box"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      pointerEvents: "none",
      fontFamily: "var(--font-family-base)",
      transition: "all .15s ease",
      color: error ? "var(--palette-error-main)" : open ? "var(--color-primary-main)" : "var(--color-on-surface-variant)",
      ...(floated ? {
        top: 0,
        left: 8,
        transform: "translateY(-50%)",
        fontSize: 12,
        background: "#fff",
        padding: "0 4px"
      } : {
        top: "50%",
        left: 14,
        transform: "translateY(-50%)",
        fontSize: 14
      })
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-family-base)",
      fontSize: 14,
      color: selected ? "var(--color-on-surface)" : "var(--color-on-surface-variant)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      position: "absolute",
      right: 10,
      color: "var(--color-on-surface-variant)",
      fontSize: 22,
      transition: "transform .2s",
      transform: open ? "rotate(180deg)" : "none"
    }
  }, "expand_more")), open && /*#__PURE__*/React.createElement("ul", {
    role: "listbox",
    style: {
      position: "absolute",
      top: "calc(100% + 2px)",
      left: 0,
      right: 0,
      zIndex: 1400,
      listStyle: "none",
      margin: 0,
      padding: "4px 0",
      background: "#fff",
      border: "1px solid var(--color-outline-variant)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--elevation-2)",
      maxHeight: 300,
      overflowY: "auto"
    }
  }, norm.map(o => {
    const sel = o.value === value;
    return /*#__PURE__*/React.createElement("li", {
      key: o.value,
      role: "option",
      "aria-selected": sel,
      onClick: () => {
        onChange && onChange(o.value);
        setOpen(false);
      },
      onMouseEnter: e => {
        if (!sel) e.currentTarget.style.background = "var(--custom-row-on-hover)";
      },
      onMouseLeave: e => {
        if (!sel) e.currentTarget.style.background = "transparent";
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 16px",
        cursor: "pointer",
        fontFamily: "var(--font-family-base)",
        fontSize: 14,
        color: "var(--color-on-surface)",
        fontWeight: sel ? 500 : 400,
        background: sel ? "var(--custom-row-selected)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, o.label), sel && /*#__PURE__*/React.createElement("span", {
      className: "material-icons-outlined",
      style: {
        fontSize: 18,
        color: "var(--color-primary-main)"
      }
    }, "check"));
  })), helperText && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "3px 14px 0",
      fontFamily: "var(--font-family-base)",
      fontSize: 12,
      color: error ? "var(--palette-error-main)" : "var(--color-on-surface-variant)"
    }
  }, helperText));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
/**
 * Inriver Slider — continuous value control. Active track + thumb use
 * primary-muted navy; inactive track the surface-variant. Optional value.
 */
function Slider({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  disabled = false,
  showValue = false,
  style
}) {
  const pct = (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: 1,
      height: 20,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 8,
      height: 4,
      borderRadius: "var(--radius-full)",
      background: "var(--color-surface-variant)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 8,
      height: 4,
      width: `${pct}%`,
      borderRadius: "var(--radius-full)",
      background: disabled ? "var(--state-on-surface-12)" : "var(--color-primary-muted)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    disabled: disabled,
    onChange: e => onChange && onChange(Number(e.target.value), e),
    style: {
      position: "relative",
      width: "100%",
      margin: 0,
      appearance: "none",
      WebkitAppearance: "none",
      background: "transparent",
      height: 20,
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }), /*#__PURE__*/React.createElement("style", null, `
          input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:var(--color-primary-muted);box-shadow:var(--elevation-1);cursor:pointer}
          input[type=range]::-moz-range-thumb{width:16px;height:16px;border:none;border-radius:50%;background:var(--color-primary-muted);box-shadow:var(--elevation-1);cursor:pointer}
        `)), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-family-base)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--color-on-surface)",
      minWidth: 28,
      textAlign: "right"
    }
  }, value));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Inriver Switch — MUI toggle. Track fills navy when on, white knob.
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style
}) {
  const sId = React.useMemo(() => id || `sw-${Math.random().toString(36).slice(2, 9)}`, [id]);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: sId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: sId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 34,
      height: 14,
      borderRadius: "var(--radius-full)",
      flexShrink: 0,
      background: checked ? "var(--color-primary-main)" : "var(--grey-500)",
      opacity: checked ? 1 : 0.5,
      transition: "background .18s, opacity .18s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -3,
      left: checked ? 16 : -1,
      width: 20,
      height: 20,
      borderRadius: "var(--radius-full)",
      background: "#fff",
      boxShadow: "var(--elevation-1)",
      transition: "left .18s"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-family-base)",
      fontSize: 14,
      color: "var(--color-on-surface)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inriver TextField — MUI-faithful floating-label input. Outlined
 * (default) or filled; sizes md (56px) / sm (40px). Supports multiline,
 * error, helper text, start/end Material icons.
 */
function TextField({
  label,
  value,
  defaultValue,
  onChange,
  type = "text",
  variant = "outlined",
  size = "sm",
  multiline = false,
  rows = 3,
  error = false,
  helperText,
  disabled = false,
  startIcon,
  endIcon,
  id,
  style,
  ...rest
}) {
  const fieldId = React.useMemo(() => id || `tf-${Math.random().toString(36).slice(2, 9)}`, [id]);
  const [focus, setFocus] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue || "");
  const val = value !== undefined ? value : internal;
  const filled = String(val ?? "").length > 0;
  const floated = focus || filled;
  const H = size === "sm" ? 40 : 56;
  const borderColor = error ? "var(--palette-error-main)" : focus ? "var(--color-primary-main)" : "var(--color-outline)";
  const outlined = variant === "outlined";
  const wrap = outlined ? {
    border: `${focus || error ? 2 : 1}px solid ${borderColor}`,
    borderRadius: "var(--radius-xs)",
    background: disabled ? "transparent" : "var(--color-white)"
  } : {
    background: "var(--color-surface-container-highest)",
    borderRadius: "var(--radius-xs) var(--radius-xs) 0 0",
    borderBottom: `${focus || error ? 2 : 1}px solid ${borderColor}`
  };
  const labelFloatStyle = {
    position: "absolute",
    pointerEvents: "none",
    transition: "all .15s ease",
    fontFamily: "var(--font-family-base)",
    whiteSpace: "nowrap",
    color: error ? "var(--palette-error-main)" : focus ? "var(--color-primary-main)" : "var(--color-on-surface-variant)",
    ...(outlined ? floated ? {
      top: 0,
      left: 8,
      transform: "translateY(-50%)",
      fontSize: 12,
      background: "var(--color-white)",
      padding: "0 4px"
    } : {
      top: "50%",
      left: startIcon ? 40 : 14,
      transform: "translateY(-50%)",
      fontSize: 14
    } : floated ? {
      top: 6,
      left: 14,
      fontSize: 12
    } : {
      top: "50%",
      left: 14,
      transform: "translateY(-50%)",
      fontSize: 14
    })
  };
  const inputStyle = {
    width: "100%",
    border: "none",
    background: "transparent",
    outline: "none",
    fontFamily: "var(--font-family-base)",
    fontSize: 14,
    color: "var(--color-on-surface)",
    boxSizing: "border-box",
    resize: "vertical",
    padding: outlined ? `0 14px` : `14px 14px 4px`,
    ...(multiline ? {
      padding: "18px 14px",
      minHeight: H,
      lineHeight: "20px"
    } : {
      height: H,
      lineHeight: `${H}px`
    })
  };
  const handle = e => {
    if (value === undefined) setInternal(e.target.value);
    onChange && onChange(e);
  };
  const commonProps = {
    id: fieldId,
    value: val,
    onChange: handle,
    disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: inputStyle,
    ...rest
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      ...wrap
    }
  }, startIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      position: "absolute",
      left: 12,
      color: "var(--color-on-surface-variant)",
      fontSize: 20
    }
  }, startIcon), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, commonProps, {
    style: {
      ...inputStyle,
      paddingLeft: startIcon ? 40 : 14
    }
  })) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, commonProps, {
    style: {
      ...inputStyle,
      paddingLeft: startIcon ? 40 : 14,
      paddingRight: endIcon ? 40 : 14
    }
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: labelFloatStyle
  }, label), endIcon && /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      position: "absolute",
      right: 12,
      color: "var(--color-on-surface-variant)",
      fontSize: 20
    }
  }, endIcon)), helperText && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "3px 14px 0",
      fontFamily: "var(--font-family-base)",
      fontSize: 12,
      lineHeight: "16px",
      color: error ? "var(--palette-error-main)" : "var(--color-on-surface-variant)"
    }
  }, helperText));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/layout/InriverAppNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * InriverAppNav — the custom dark navy vertical icon+label rail (80px).
 * Active item shows a white pill behind the icon. `items`/`footer` are
 * {label, icon, active, href, onClick}.
 */
const NAV_STYLE_ID = "inriver-app-nav-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(NAV_STYLE_ID)) return;
  const s = document.createElement("style");
  s.id = NAV_STYLE_ID;
  s.textContent = `
    .iv-nav { display:flex; flex-direction:column; align-items:center; width:var(--custom-nav-width); min-height:100%; background:var(--iv-navy-700); padding:var(--custom-nav-padding-y) 0; flex-shrink:0; box-sizing:border-box; font-family:var(--iv-font-sans); }
    .iv-nav__items { display:flex; flex-direction:column; align-items:center; width:100%; flex:1; gap:var(--custom-nav-item-gap); }
    .iv-nav__footer { display:flex; flex-direction:column; align-items:center; width:100%; padding-bottom:4px; }
    .iv-nav__item { display:flex; flex-direction:column; align-items:center; gap:4px; width:100%; padding:var(--custom-nav-item-padding-y) var(--custom-nav-item-padding-x); text-decoration:none; cursor:pointer; border:none; background:none; font-family:var(--iv-font-sans); }
    .iv-nav__indicator { display:flex; align-items:center; justify-content:center; width:var(--custom-nav-pill-width); height:var(--custom-nav-pill-height); border-radius:var(--iv-radius-pill); transition:background .15s ease; }
    .iv-nav__item:hover .iv-nav__indicator { background:var(--custom-nav-item-hover); }
    .iv-nav__item--active .iv-nav__indicator { background:var(--iv-bg); }
    .iv-nav__indicator .material-icons-outlined { font-size:var(--custom-nav-icon-size); color:var(--custom-nav-on-surface); }
    .iv-nav__item--active .iv-nav__indicator .material-icons-outlined { color:var(--iv-navy-700); }
    .iv-nav__label { font-size:var(--custom-nav-label-size); font-weight:var(--font-weight-medium); color:var(--custom-nav-on-surface); text-align:center; line-height:1.2; white-space:normal; word-break:break-word; max-width:var(--custom-nav-pill-width); }
    .iv-nav__item--active .iv-nav__label { color:var(--custom-nav-on-surface-active); }
  `;
  document.head.appendChild(s);
}
function NavItem(item, i) {
  const active = !!item.active;
  const Tag = item.href ? "a" : "button";
  const extra = item.href ? {
    href: item.href
  } : {
    type: "button"
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    key: i,
    className: "iv-nav__item" + (active ? " iv-nav__item--active" : ""),
    onClick: item.onClick,
    "aria-current": active ? "page" : undefined
  }, extra), /*#__PURE__*/React.createElement("span", {
    className: "iv-nav__indicator"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined"
  }, item.icon)), /*#__PURE__*/React.createElement("span", {
    className: "iv-nav__label"
  }, item.label));
}
function InriverAppNav({
  items = [],
  footer = [],
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("nav", {
    className: "iv-nav",
    style: style,
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iv-nav__items"
  }, items.map(NavItem)), footer.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "iv-nav__footer"
  }, footer.map(NavItem)));
}

/** Default prototype skeleton rail (dots only). */
function InriverAppNavPlaceholder({
  count = 5,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      width: 40,
      minHeight: "100%",
      background: "var(--iv-navy-700)",
      padding: "16px 0",
      flexShrink: 0,
      ...style
    },
    "aria-label": "Primary"
  }, Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 28,
      height: 28,
      borderRadius: "var(--iv-radius-pill)",
      flexShrink: 0,
      background: i === 0 ? "var(--custom-nav-dot-active)" : "var(--custom-nav-dot)"
    }
  })));
}
Object.assign(__ds_scope, { InriverAppNav, InriverAppNavPlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/InriverAppNav.jsx", error: String((e && e.message) || e) }); }

// components/layout/InriverGlobalHeader.jsx
try { (() => {
/**
 * InriverGlobalHeader — the custom global app bar (".gh"). White bar,
 * 64px, with a centered search field and right-aligned icon actions ending
 * in the account avatar. All sizes/colours read from tokens.
 */
const GH_STYLE_ID = "inriver-global-header-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(GH_STYLE_ID)) return;
  const s = document.createElement("style");
  s.id = GH_STYLE_ID;
  s.textContent = `
    .iv-gh { display:flex; align-items:center; gap:var(--custom-header-gap); height:var(--custom-global-header-height); padding:0 var(--spacing-1); background:var(--iv-bg); font-family:var(--iv-font-sans); box-sizing:border-box; }
    .iv-gh__logo { height:20px; width:auto; display:block; margin-left:8px; flex-shrink:0; }
    .iv-gh__search { display:flex; align-items:center; gap:var(--custom-header-gap); flex:1; max-width:var(--custom-header-search-width); height:var(--size-field-height-sm); margin:0 auto; padding:0 var(--custom-header-search-padding-x); background:var(--iv-bg-alt); border-radius:var(--iv-radius-xs); }
    .iv-gh__search input { flex:1; border:none; background:transparent; outline:none; font-family:var(--iv-font-sans); font-size:var(--text-body-large-font-size); color:var(--iv-navy-800); min-width:0; }
    .iv-gh__search input::placeholder { color:var(--color-on-surface-variant); }
    .iv-gh__right { display:flex; align-items:center; gap:var(--custom-header-gap); margin-left:auto; }
    .iv-gh__icon { width:var(--custom-icon-button-size); height:var(--custom-icon-button-size); border:none; background:transparent; border-radius:var(--iv-radius-pill); cursor:pointer; display:inline-flex; align-items:center; justify-content:center; color:var(--color-primary-main); transition:background .15s ease; }
    .iv-gh__icon:hover { background:var(--state-primary-08); }
    .iv-gh__avatar { width:var(--custom-avatar-size); height:var(--custom-avatar-size); border-radius:var(--iv-radius-pill); background:var(--color-primary-main); color:#fff; border:none; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; font-family:var(--iv-font-sans); font-size:var(--text-body-medium-font-size); font-weight:var(--font-weight-medium); flex-shrink:0; }
  `;
  document.head.appendChild(s);
}
function InriverGlobalHeader({
  logoSrc,
  searchPlaceholder = "Search",
  onSearch,
  actions = [{
    icon: "more_vert",
    title: "More"
  }, {
    icon: "smart_toy",
    title: "Assistant"
  }, {
    icon: "assignment",
    title: "Assignments"
  }],
  avatarText,
  onAvatar,
  style
}) {
  ensureStyles();
  const [q, setQ] = React.useState("");
  return /*#__PURE__*/React.createElement("header", {
    className: "iv-gh",
    style: style
  }, logoSrc && /*#__PURE__*/React.createElement("img", {
    className: "iv-gh__logo",
    src: logoSrc,
    alt: "inriver"
  }), /*#__PURE__*/React.createElement("div", {
    className: "iv-gh__search"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 20,
      color: "var(--iv-navy-800)"
    }
  }, "search"), /*#__PURE__*/React.createElement("input", {
    placeholder: searchPlaceholder,
    value: q,
    onChange: e => setQ(e.target.value),
    onKeyDown: e => {
      if (e.key === "Enter" && onSearch) onSearch(q);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "iv-gh__right"
  }, actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    className: "iv-gh__icon",
    title: a.title,
    "aria-label": a.title,
    onClick: a.onClick
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 22
    }
  }, a.icon))), /*#__PURE__*/React.createElement("button", {
    className: "iv-gh__avatar",
    "aria-label": "Account",
    onClick: onAvatar
  }, avatarText ? avatarText : /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 20
    }
  }, "person"))));
}
Object.assign(__ds_scope, { InriverGlobalHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/InriverGlobalHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/InriverNavRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * InriverNavRail — the custom collapsible side navigation (icon-left /
 * label-right rows) that collapses 240px → 56px. Distinct from
 * InriverAppNav (the narrow icon-over-label rail). Supports section groups,
 * hover-flyout submenus, an overflow "More" menu, and an environment picker.
 *
 * items: [{ id, icon, label, submenu? } | { type:'section', label }]
 */
const NAVRAIL_STYLE_ID = "inriver-nav-rail-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(NAVRAIL_STYLE_ID)) return;
  const s = document.createElement("style");
  s.id = NAVRAIL_STYLE_ID;
  s.textContent = `
    .ivnr { display:flex; flex-direction:column; height:100%; width:var(--custom-navrail-width); background:var(--custom-navrail-surface); flex-shrink:0; box-sizing:border-box; font-family:var(--iv-font-sans); position:relative; transition:width .2s ease; }
    .ivnr--collapsed { width:var(--custom-navrail-width-collapsed); }
    .ivnr__head { display:flex; align-items:center; gap:12px; height:32px; margin:16px 0 4px; padding:0 16px; color:#fff; box-sizing:border-box; }
    .ivnr--collapsed .ivnr__head { justify-content:center; padding:0; }
    .ivnr__logo { flex-shrink:0; display:block; color:#fff; }
    .ivnr__env { position:relative; flex:1; min-width:0; }
    .ivnr__env-btn { display:flex; align-items:center; gap:4px; width:100%; padding:4px 6px; border:none; background:none; border-radius:var(--iv-radius-xs); cursor:pointer; font-family:var(--iv-font-sans); }
    .ivnr__env-btn:hover { background:var(--custom-navrail-item-hover); }
    .ivnr__env-name { flex:1; min-width:0; text-align:left; font-size:12px; font-weight:var(--font-weight-medium); color:rgba(255,255,255,.85); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .ivnr__env .material-icons-outlined { font-size:16px; color:var(--custom-navrail-chevron); flex-shrink:0; }
    .ivnr__toggle-row { display:flex; padding:2px 14px 4px; box-sizing:border-box; }
    .ivnr--collapsed .ivnr__toggle-row { justify-content:center; padding:2px 0 4px; }
    .ivnr__toggle { width:32px; height:32px; display:flex; align-items:center; justify-content:center; border:none; background:none; border-radius:var(--iv-radius-sm); color:#fff; cursor:pointer; transition:background .15s ease; }
    .ivnr__toggle:hover { background:var(--custom-navrail-item-hover); }
    .ivnr__toggle .material-icons-outlined { font-size:22px; }
    .ivnr__items { flex:1; min-height:0; display:flex; flex-direction:column; gap:2px; padding:4px 12px 8px; box-sizing:border-box; overflow-y:auto; overflow-x:visible; }
    .ivnr--collapsed .ivnr__items { padding:4px 4px 8px; }
    .ivnr__item { position:relative; display:flex; align-items:center; gap:14px; width:100%; height:var(--custom-navrail-item-height); flex-shrink:0; padding:0 12px; border:none; background:none; border-radius:var(--custom-navrail-item-radius); color:var(--custom-navrail-on-surface); cursor:pointer; text-align:left; text-decoration:none; box-sizing:border-box; font-family:var(--iv-font-sans); transition:background .15s ease; }
    .ivnr--collapsed .ivnr__item { justify-content:center; padding:0; gap:0; }
    .ivnr__item:hover { background:var(--custom-navrail-item-hover); }
    .ivnr__item--active, .ivnr__item--active:hover { background:var(--custom-navrail-item-active); }
    .ivnr__item .ivnr__icon.material-icons-outlined { font-size:var(--custom-navrail-icon-size); color:#fff; flex-shrink:0; }
    .ivnr__label { flex:1; min-width:0; font-size:var(--custom-navrail-label-size); font-weight:var(--font-weight-medium); line-height:1.2; letter-spacing:.17px; color:#fff; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .ivnr__chevron.material-icons-outlined { font-size:18px; color:var(--custom-navrail-chevron); flex-shrink:0; }
    .ivnr__section { padding:16px 12px 8px; font-size:var(--custom-navrail-label-size); font-weight:var(--font-weight-medium); color:var(--custom-navrail-section); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex-shrink:0; }
    .ivnr__section--rule { height:1px; margin:8px 6px; padding:0; background:var(--custom-navrail-divider); }
    .ivnr__flyout { position:absolute; min-width:220px; background:var(--custom-navrail-flyout-surface); border-radius:var(--iv-radius-sm); box-shadow:var(--custom-navrail-flyout-shadow); padding:8px 0; z-index:9999; font-family:var(--iv-font-sans); }
    .ivnr__flyout-title { padding:10px 16px; font-size:14px; font-weight:var(--font-weight-semibold); color:var(--iv-navy-700); border-bottom:1px solid var(--iv-border-soft); margin-bottom:4px; }
    .ivnr__flyout-item { display:flex; align-items:center; gap:10px; width:100%; padding:10px 16px; border:none; background:none; text-align:left; font-family:var(--iv-font-sans); font-size:14px; line-height:1.4; color:var(--iv-ink); cursor:pointer; box-sizing:border-box; transition:background .12s ease; }
    .ivnr__flyout-item:hover { background:var(--iv-navy-050); }
    .ivnr__flyout-item--active { background:var(--iv-navy-100); color:var(--iv-navy-700); }
    .ivnr__flyout-item .material-icons-outlined { font-size:20px; color:var(--iv-navy-700); flex-shrink:0; }
    .ivnr__env-pop { position:absolute; top:calc(100% + 4px); left:0; width:260px; background:var(--custom-navrail-flyout-surface); border-radius:var(--iv-radius-xs); box-shadow:0 4px 16px rgba(0,0,0,.25); z-index:9999; padding:4px 0; }
    .ivnr__env-opt { width:100%; padding:8px 12px; border:none; background:none; text-align:left; font:400 13px/1.4 var(--iv-font-sans); color:var(--iv-navy-700); cursor:pointer; box-sizing:border-box; }
    .ivnr__env-opt:hover { background:var(--iv-navy-050); }
    .ivnr__env-opt--active { background:var(--iv-navy-100); }
  `;
  document.head.appendChild(s);
}
function IRMark({
  collapsed
}) {
  return /*#__PURE__*/React.createElement("svg", {
    className: "ivnr__logo",
    width: collapsed ? 28 : 36,
    height: collapsed ? 17 : 22,
    viewBox: "0 0 25.331 15.833",
    fill: "currentColor",
    "aria-label": "Inriver"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.387 C 1.33 7.307 3.645 5.293 6.878 5.181 L 6.878 0 L 0 0 L 0 9.387 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 11.15 L 0 15.833 L 6.878 15.833 L 6.878 5.994 C 3.393 6.131 0.94 8.867 0 11.15 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.94 7.781 L 8.94 15.833 L 15.818 15.833 L 15.818 11.627 L 17.904 15.833 L 25.331 15.833 L 21.823 9.456 C 23.359 8.551 24.299 6.968 24.299 5.158 C 24.301 2.329 22.008 0 18.592 0 L 8.94 0 L 8.94 2.262 C 8.94 3.914 9.651 4.614 11.324 4.614 L 16.504 4.614 C 17.444 4.614 18.04 5.225 18.04 6.22 C 18.04 7.216 17.467 7.781 16.504 7.804 L 15.816 7.827 L 15.816 5.429 L 11.322 5.429 C 9.647 5.429 8.938 6.131 8.938 7.781 Z"
  }));
}
const OIcon = (name, cls) => /*#__PURE__*/React.createElement("span", {
  className: "material-icons-outlined" + (cls ? " " + cls : "")
}, name);
function InriverNavRail({
  items = [],
  active,
  onNav,
  expanded: expandedProp,
  defaultExpanded = true,
  onToggle,
  environment,
  onEnvChange,
  style
}) {
  ensureStyles();
  const isControlled = typeof expandedProp === "boolean";
  const [expandedState, setExpandedState] = React.useState(defaultExpanded);
  const expanded = isControlled ? expandedProp : expandedState;
  const [hoverItem, setHoverItem] = React.useState(null);
  const [envOpen, setEnvOpen] = React.useState(false);
  const railRef = React.useRef(null);
  const closeTimer = React.useRef(null);
  React.useEffect(() => {
    if (!expanded) {
      setEnvOpen(false);
      setHoverItem(null);
    }
  }, [expanded]);
  React.useEffect(() => {
    if (!envOpen) return;
    const onDoc = e => {
      if (railRef.current && !railRef.current.contains(e.target)) setEnvOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [envOpen]);
  const toggle = () => {
    const next = !expanded;
    if (!isControlled) setExpandedState(next);
    onToggle && onToggle(next);
  };
  const openSub = id => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setHoverItem(id);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setHoverItem(null), 150);
  };
  const fireNav = id => onNav && onNav(id);
  const Item = it => {
    const isActive = active === it.id;
    const hasSub = !!(it.submenu && it.submenu.length);
    const Tag = it.href ? "a" : "button";
    const extra = it.href ? {
      href: it.href
    } : {
      type: "button"
    };
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        position: "relative"
      },
      onMouseEnter: () => hasSub && expanded && openSub(it.id),
      onMouseLeave: () => hasSub && scheduleClose()
    }, /*#__PURE__*/React.createElement(Tag, _extends({}, extra, {
      className: "ivnr__item" + (isActive ? " ivnr__item--active" : ""),
      title: !expanded ? it.label : undefined,
      "aria-current": isActive ? "page" : undefined,
      onClick: () => fireNav(it.id)
    }), OIcon(it.icon, "ivnr__icon"), expanded && /*#__PURE__*/React.createElement("span", {
      className: "ivnr__label"
    }, it.label), expanded && hasSub && OIcon("chevron_right", "ivnr__chevron")), hasSub && expanded && hoverItem === it.id && /*#__PURE__*/React.createElement("div", {
      className: "ivnr__flyout",
      style: {
        top: 0,
        left: "100%",
        marginLeft: 8
      },
      role: "menu",
      onMouseEnter: () => openSub(it.id),
      onMouseLeave: scheduleClose
    }, /*#__PURE__*/React.createElement("div", {
      className: "ivnr__flyout-title"
    }, it.label), it.submenu.map(sub => /*#__PURE__*/React.createElement("button", {
      key: sub.id,
      type: "button",
      className: "ivnr__flyout-item",
      role: "menuitem",
      onClick: () => {
        fireNav(sub.id);
        setHoverItem(null);
      }
    }, sub.label))));
  };
  const envOptions = environment && environment.options || [];
  return /*#__PURE__*/React.createElement("nav", {
    ref: railRef,
    className: "ivnr" + (expanded ? "" : " ivnr--collapsed"),
    style: style,
    "aria-label": "Primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ivnr__head"
  }, /*#__PURE__*/React.createElement(IRMark, {
    collapsed: !expanded
  }), expanded && environment && /*#__PURE__*/React.createElement("div", {
    className: "ivnr__env"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ivnr__env-btn",
    "aria-haspopup": "listbox",
    "aria-expanded": envOpen,
    onClick: () => setEnvOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ivnr__env-name"
  }, environment.name), OIcon(envOpen ? "expand_less" : "expand_more")), envOpen && /*#__PURE__*/React.createElement("div", {
    className: "ivnr__env-pop",
    role: "listbox"
  }, envOptions.map(opt => /*#__PURE__*/React.createElement("button", {
    key: opt,
    type: "button",
    role: "option",
    "aria-selected": opt === environment.name,
    className: "ivnr__env-opt" + (opt === environment.name ? " ivnr__env-opt--active" : ""),
    onClick: () => {
      onEnvChange && onEnvChange(opt);
      setEnvOpen(false);
    }
  }, opt))))), /*#__PURE__*/React.createElement("div", {
    className: "ivnr__toggle-row"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ivnr__toggle",
    "aria-label": expanded ? "Collapse navigation" : "Expand navigation",
    "aria-expanded": expanded,
    onClick: toggle
  }, OIcon("menu"))), /*#__PURE__*/React.createElement("div", {
    className: "ivnr__items"
  }, items.map((it, i) => it.type === "section" ? /*#__PURE__*/React.createElement("div", {
    key: "s" + i,
    className: "ivnr__section" + (expanded ? "" : " ivnr__section--rule")
  }, expanded ? it.label : "") : Item(it))));
}
Object.assign(__ds_scope, { InriverNavRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/InriverNavRail.jsx", error: String((e && e.message) || e) }); }

// components/layout/InriverPageHeader.jsx
try { (() => {
/**
 * InriverPageHeader — the custom page header (".ph"): a soft navy-tinted
 * band with an optional circular back action, breadcrumb eyebrow + title,
 * and right-aligned action buttons.
 */
const PH_STYLE_ID = "inriver-page-header-styles";
function ensureStyles() {
  if (typeof document === "undefined" || document.getElementById(PH_STYLE_ID)) return;
  const s = document.createElement("style");
  s.id = PH_STYLE_ID;
  s.textContent = `
    .iv-ph { display:flex; align-items:center; gap:var(--spacing-2); min-height:var(--custom-page-header-height); padding:var(--custom-page-header-padding); background:var(--custom-background); font-family:var(--iv-font-sans); box-sizing:border-box; }
    .iv-ph__back { width:var(--custom-icon-button-size); height:var(--custom-icon-button-size); flex-shrink:0; border:none; border-radius:var(--iv-radius-pill); background:var(--color-primary-main); color:#fff; cursor:pointer; display:inline-flex; align-items:center; justify-content:center; }
    .iv-ph__back:hover { background:var(--color-primary-container); }
    .iv-ph__titles { flex:1; display:flex; flex-direction:column; min-width:0; }
    .iv-ph__eyebrow { font-family:var(--iv-font-sans); font-size:var(--text-body-medium-font-size); line-height:var(--text-body-medium-line-height); letter-spacing:var(--text-body-medium-letter-spacing); color:var(--iv-navy-700); }
    .iv-ph__title { font-family:var(--iv-font-sans); font-size:var(--text-title-large-font-size); font-weight:var(--text-title-large-font-weight); line-height:var(--text-title-large-line-height); letter-spacing:var(--text-title-large-letter-spacing); color:var(--iv-navy-700); white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .iv-ph__actions { display:flex; align-items:center; gap:var(--spacing-2); flex-shrink:0; margin-left:auto; }
  `;
  document.head.appendChild(s);
}
function InriverPageHeader({
  eyebrow,
  title,
  onBack,
  actions = [],
  style
}) {
  ensureStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: "iv-ph",
    style: style
  }, onBack && /*#__PURE__*/React.createElement("button", {
    className: "iv-ph__back",
    "aria-label": "Back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 22
    }
  }, "arrow_back")), /*#__PURE__*/React.createElement("div", {
    className: "iv-ph__titles"
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "iv-ph__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    className: "iv-ph__title"
  }, title)), actions.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "iv-ph__actions"
  }, actions.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: i,
    variant: a.variant === "filled" ? "contained" : "outlined",
    startIcon: a.icon,
    onClick: a.onClick
  }, a.label))));
}
Object.assign(__ds_scope, { InriverPageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/InriverPageHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
/**
 * Inriver Breadcrumbs — chevron (default) or slash separators. Links are
 * secondary, hover navy; the last crumb is the current page (bold, primary
 * text). Optional icon per crumb; collapses past `maxItems`.
 */
function Breadcrumbs({
  items = [],
  separator = "chevron",
  maxItems,
  onNavigate,
  style
}) {
  const [expanded, setExpanded] = React.useState(false);
  const sep = separator === "chevron" ? /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 18,
      color: "var(--color-on-surface-variant)"
    }
  }, "chevron_right") : /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-on-surface-variant)",
      opacity: 0.7,
      userSelect: "none",
      fontSize: 16,
      lineHeight: 1
    }
  }, "/");
  const list = !expanded && maxItems && items.length > maxItems ? [items[0], null, ...items.slice(items.length - (maxItems - 1))] : items;
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "nowrap",
      fontFamily: "var(--font-family-base)",
      ...style
    }
  }, list.map((it, i) => {
    const last = i === list.length - 1;
    if (it === null) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: "e"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => setExpanded(true),
        style: {
          border: "none",
          background: "transparent",
          cursor: "pointer",
          color: "var(--color-on-surface-variant)",
          fontSize: 14
        }
      }, "\u2026"), sep);
    }
    const label = typeof it === "string" ? it : it.label;
    const icon = typeof it === "string" ? null : it.icon;
    const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("span", {
      className: "material-icons-outlined",
      style: {
        fontSize: 16,
        marginRight: 4,
        verticalAlign: "middle"
      }
    }, icon), label);
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        fontSize: 14,
        fontWeight: 500,
        color: "var(--color-on-surface)"
      }
    }, content) : /*#__PURE__*/React.createElement("a", {
      href: typeof it === "object" && it.href || "#",
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it, i);
        }
      },
      onMouseEnter: e => e.currentTarget.style.color = "var(--color-primary-main)",
      onMouseLeave: e => e.currentTarget.style.color = "var(--color-on-surface-variant)",
      style: {
        display: "inline-flex",
        alignItems: "center",
        fontSize: 14,
        color: "var(--color-on-surface-variant)",
        textDecoration: "none"
      }
    }, content), !last && sep);
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/InriverStepper.jsx
try { (() => {
/**
 * InriverStepper — horizontal dot stepper for linear flows. Completed
 * steps fill navy (label underlined), the active step is a ringed dot,
 * upcoming steps are muted. Controlled via `activeStep` (zero-based).
 */
function InriverStepper({
  steps = [],
  activeStep = 0,
  style
}) {
  const primary = "var(--color-primary-main)";
  const connector = "var(--color-outline-variant)";
  const cols = steps.map((_, i) => i < steps.length - 1 ? "auto 1fr" : "auto").join(" ");
  return /*#__PURE__*/React.createElement("div", {
    role: "navigation",
    "aria-label": "Progress",
    style: {
      display: "grid",
      gridTemplateColumns: cols,
      gridTemplateRows: "auto auto",
      rowGap: 8,
      alignItems: "center",
      width: "100%",
      fontFamily: "var(--font-family-base)",
      ...style
    }
  }, steps.flatMap((_, i) => {
    const active = i === activeStep,
      done = i < activeStep;
    const dot = /*#__PURE__*/React.createElement("div", {
      key: `d${i}`,
      "aria-current": active ? "step" : undefined,
      style: {
        gridRow: 1,
        justifySelf: "center",
        position: "relative",
        width: active ? 22 : 14,
        height: active ? 22 : 14,
        borderRadius: "50%",
        boxSizing: "border-box",
        flexShrink: 0,
        background: done ? primary : "var(--color-white)",
        border: active ? `2px solid ${primary}` : done ? "none" : `1.5px solid ${connector}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, done && /*#__PURE__*/React.createElement("span", {
      className: "material-icons",
      style: {
        fontSize: 10,
        color: "#fff"
      }
    }, "check"), active && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: primary
      }
    }));
    if (i < steps.length - 1) {
      return [dot, /*#__PURE__*/React.createElement("div", {
        key: `c${i}`,
        style: {
          gridRow: 1,
          height: done ? 2.5 : 1.5,
          background: done ? primary : connector,
          borderRadius: 9999,
          alignSelf: "center"
        }
      })];
    }
    return [dot];
  }), steps.map((label, i) => {
    const active = i === activeStep,
      done = i < activeStep;
    const first = i === 0,
      last = i === steps.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: `l${i}`,
      style: {
        gridRow: 2,
        gridColumn: i * 2 + 1,
        position: "relative",
        width: 0,
        overflow: "visible"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        whiteSpace: "nowrap",
        top: 0,
        ...(first ? {
          left: 0
        } : last ? {
          right: 0
        } : {
          left: "50%",
          transform: "translateX(-50%)"
        }),
        fontSize: 12,
        fontWeight: active ? 500 : 400,
        lineHeight: "16px",
        letterSpacing: "0.4px",
        color: active || done ? primary : "var(--palette-text-disabled)",
        textDecoration: done ? "underline" : "none",
        textUnderlineOffset: done ? "3px" : undefined
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { InriverStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/InriverStepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/InriverTabs.jsx
try { (() => {
/**
 * InriverTabs — Inriver's full-width PILL tabs (not the MUI underline).
 * Each tab flexes to fill the row; the active tab fills with the pale
 * primary-tab colour, radius-lg. Controlled with `value` (index) /
 * `onChange(e, index)`. Pair with InriverTabPanel.
 */
function InriverTabs({
  value = 0,
  onChange,
  tabs = [],
  ariaLabel,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": ariaLabel,
    style: {
      display: "flex",
      fontFamily: "var(--font-family-base)",
      gap: 0,
      ...style
    }
  }, tabs.map((tab, i) => {
    const active = i === value;
    const id = tab.id != null ? tab.id : `inriver-tab-${i}`;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      type: "button",
      role: "tab",
      id: id,
      "aria-selected": active,
      "aria-controls": `${id}-panel`,
      disabled: !!tab.disabled,
      onClick: e => !tab.disabled && onChange && onChange(e, i),
      onMouseEnter: e => {
        if (!active && !tab.disabled) e.currentTarget.style.background = "var(--custom-primary-tab-hover)";
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = "transparent";
      },
      style: {
        flex: "1 1 0",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "0 16px",
        minHeight: 26,
        border: "none",
        cursor: tab.disabled ? "not-allowed" : "pointer",
        background: active ? "var(--custom-primary-tab)" : "transparent",
        color: "var(--color-primary-main)",
        borderRadius: "var(--radius-lg)",
        fontFamily: "var(--font-family-base)",
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: "0.1px",
        lineHeight: "20px",
        whiteSpace: "nowrap",
        opacity: tab.disabled ? 0.38 : 1,
        transition: "background-color .15s ease"
      }
    }, tab.icon && /*#__PURE__*/React.createElement("span", {
      className: "material-icons-outlined",
      style: {
        fontSize: 18
      }
    }, tab.icon), tab.label);
  }));
}

/**
 * InriverTabPanel — the bordered content area below the tabs.
 */
function InriverTabPanel({
  value,
  index,
  id,
  children,
  style
}) {
  if (value !== index) return null;
  const tabId = id != null ? id : `inriver-tab-${index}`;
  return /*#__PURE__*/React.createElement("div", {
    role: "tabpanel",
    id: `${tabId}-panel`,
    "aria-labelledby": tabId,
    style: {
      border: "1px solid var(--color-outline-variant)",
      borderTop: "none",
      padding: 24,
      background: "var(--color-white)",
      fontFamily: "var(--font-family-base)",
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--color-on-surface-variant)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { InriverTabs, InriverTabPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/InriverTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
/**
 * Inriver Menu — the surface list of actions (the popover paper). Items
 * support a leading icon, keyboard shortcut, selected/disabled state and a
 * divider before. Radius 4px, elevation 2, min-width 200. Position it with
 * a wrapping absolutely-positioned container in your layout.
 */
function Menu({
  items = [],
  onSelect,
  dense = false,
  style
}) {
  return /*#__PURE__*/React.createElement("ul", {
    role: "menu",
    style: {
      minWidth: 200,
      background: "var(--color-white)",
      border: "1px solid var(--color-outline-variant)",
      borderRadius: "var(--radius-xs)",
      boxShadow: "var(--elevation-2)",
      padding: "8px 0",
      listStyle: "none",
      margin: 0,
      fontFamily: "var(--font-family-base)",
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: it.id || i
  }, it.dividerBefore && /*#__PURE__*/React.createElement("li", {
    role: "separator",
    style: {
      height: 1,
      background: "var(--color-outline-variant)",
      margin: "4px 0"
    }
  }), /*#__PURE__*/React.createElement("li", {
    role: "menuitem",
    "aria-disabled": it.disabled || undefined,
    onClick: () => {
      if (!it.disabled) {
        it.onClick && it.onClick();
        onSelect && onSelect(it.id, it);
      }
    },
    onMouseEnter: e => {
      if (!it.disabled && !it.selected) e.currentTarget.style.background = "var(--custom-row-on-hover)";
    },
    onMouseLeave: e => {
      if (!it.selected) e.currentTarget.style.background = "transparent";
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "0 16px",
      minHeight: dense ? 36 : 48,
      cursor: it.disabled ? "not-allowed" : "pointer",
      opacity: it.disabled ? 0.38 : 1,
      color: it.danger ? "var(--palette-error-main)" : "var(--color-on-surface)",
      background: it.selected ? "var(--custom-row-selected)" : "transparent",
      fontSize: 14,
      fontWeight: it.selected ? 500 : 400,
      lineHeight: "20px"
    }
  }, it.icon && /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 20,
      color: it.danger ? "var(--palette-error-main)" : "var(--color-on-surface-variant)"
    }
  }, it.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--color-outline)"
    }
  }, it.shortcut)))));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/**
 * Inriver Pagination — prev/next arrows + numbered buttons. The active
 * page fills with the pale primary-tab colour and navy text.
 */
function Pagination({
  count = 1,
  page = 1,
  onChange,
  style
}) {
  const go = p => {
    if (p >= 1 && p <= count && p !== page && onChange) onChange(p);
  };
  const pages = [1];
  const from = Math.max(2, page - 1),
    to = Math.min(count - 1, page + 1);
  if (from > 2) pages.push("…");
  for (let p = from; p <= to; p++) pages.push(p);
  if (to < count - 1) pages.push("…");
  if (count > 1) pages.push(count);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-family-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron_left",
    ariaLabel: "Previous page",
    size: 32,
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      padding: "0 4px",
      color: "var(--color-on-surface-variant)"
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => go(p),
    style: {
      minWidth: 32,
      height: 32,
      padding: "0 8px",
      borderRadius: "var(--radius-full)",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-family-base)",
      fontSize: 13,
      fontWeight: 500,
      background: p === page ? "var(--custom-primary-tab)" : "transparent",
      color: p === page ? "var(--color-primary-main)" : "var(--color-on-surface)"
    }
  }, p)), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron_right",
    ariaLabel: "Next page",
    size: 32,
    disabled: page >= count,
    onClick: () => go(page + 1)
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/panels/ChatPanel.jsx
try { (() => {
/**
 * Inriver ChatPanel — the AI assistant chat UI. Goes inside a RightPanel
 * (mode="push", variant="assistant"). Header with assistant switcher,
 * scrollable thread (assistant + user messages, suggestion chips, action
 * buttons), attachment chip, and an input row with credits + char count.
 */
function AssistantMessage({
  msg
}) {
  const [sel, setSel] = React.useState(new Set());
  const toggle = c => setSel(p => {
    const n = new Set(p);
    n.has(c) ? n.delete(c) : n.add(c);
    return n;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 24,
      color: "var(--palette-info-main)"
    }
  }, "smart_toy"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0.14px",
      color: "var(--color-on-surface-variant)"
    }
  }, "Assistant")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "0.17px",
      color: "var(--color-on-surface)"
    }
  }, msg.content), msg.chips && msg.chips.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, msg.chips.map(c => /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    key: c,
    label: c,
    size: "sm",
    variant: sel.has(c) ? "filled-primary" : "outlined-primary",
    onClick: () => toggle(c)
  }))), msg.actions && msg.actions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, msg.actions.map(a => /*#__PURE__*/React.createElement(__ds_scope.Button, {
    key: a,
    variant: "outlined",
    size: "small",
    style: {
      height: 32
    }
  }, a))));
}
function UserMessage({
  msg
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "20px",
      letterSpacing: "0.14px",
      color: "var(--color-on-surface-variant)"
    }
  }, "Me"), /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 24,
      color: "var(--palette-info-main)"
    }
  }, "person")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-background)",
      borderRadius: 10,
      padding: 10,
      maxWidth: "75%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: "20px",
      letterSpacing: "0.17px",
      color: "var(--color-on-surface)"
    }
  }, msg.content)));
}
const iconBtn = {
  width: 32,
  height: 32,
  borderRadius: "var(--radius-xs)",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "var(--color-on-surface-variant)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
};
function ChatPanel({
  title = "Query Assistant",
  dropdownOptions = ["Query Assistant", "Content Onboarding Assistant", "Expression Assistant", "Project Assistant", "Enrich Assistant"],
  onSelectOption,
  messages = [],
  onClose,
  onExpand,
  onMore,
  attachedFile,
  onRemoveAttachment,
  onSend,
  inputPlaceholder = "How can I help?",
  inputHint,
  credits,
  charCount = 0,
  charLimit = 2000,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(title);
  const scrollRef = React.useRef(null);
  React.useEffect(() => {
    setSelected(title);
  }, [title]);
  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);
  const pick = o => {
    setSelected(o);
    setOpen(false);
    onSelectOption && onSelectOption(o);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      background: "var(--color-white)",
      overflow: "hidden",
      fontFamily: "var(--font-family-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      padding: "12px 16px",
      flexShrink: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: 24,
      borderRadius: "var(--radius-full)",
      border: "1px solid var(--color-outline-variant)",
      background: "var(--color-white)",
      color: "var(--color-primary-main)",
      fontFamily: "var(--font-family-base)",
      fontSize: 13,
      padding: "0 12px",
      cursor: "pointer",
      maxWidth: 220,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, selected, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 18
    }
  }, "arrow_drop_down")), open && /*#__PURE__*/React.createElement("ul", {
    style: {
      position: "absolute",
      top: 44,
      left: 16,
      zIndex: 20,
      minWidth: 248,
      listStyle: "none",
      margin: 0,
      padding: "4px 0",
      background: "#fff",
      border: "1px solid var(--color-outline-variant)",
      borderRadius: "var(--radius-xs)",
      boxShadow: "var(--elevation-2)"
    }
  }, dropdownOptions.map(o => /*#__PURE__*/React.createElement("li", {
    key: o,
    onClick: () => pick(o),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 16px",
      cursor: "pointer",
      fontSize: 16,
      color: "var(--color-on-surface)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 20,
      color: "var(--color-primary-main)",
      visibility: o === selected ? "visible" : "hidden"
    }
  }, "check"), o))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      flexShrink: 0
    }
  }, onExpand && /*#__PURE__*/React.createElement("button", {
    style: iconBtn,
    onClick: onExpand,
    "aria-label": "Expand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 22
    }
  }, "view_sidebar")), onMore && /*#__PURE__*/React.createElement("button", {
    style: iconBtn,
    onClick: onMore,
    "aria-label": "More"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 22
    }
  }, "more_vert")), onClose && /*#__PURE__*/React.createElement("button", {
    style: iconBtn,
    onClick: onClose,
    "aria-label": "Close"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 22
    }
  }, "close")))), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: {
      flex: "1 1 auto",
      overflowY: "auto",
      padding: "8px 16px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, messages.map(m => m.role === "assistant" ? /*#__PURE__*/React.createElement(AssistantMessage, {
    key: m.id,
    msg: m
  }) : /*#__PURE__*/React.createElement(UserMessage, {
    key: m.id,
    msg: m
  }))), attachedFile && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: "0 16px 8px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Chip, {
    label: attachedFile,
    onDelete: onRemoveAttachment,
    size: "sm",
    variant: "filled-primary"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      padding: "8px 16px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-background)",
      borderRadius: 5,
      padding: "8px 4px 8px 12px",
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 24,
      color: "var(--color-on-surface-variant)",
      flexShrink: 0
    }
  }, "add"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: "0.15px",
      color: "var(--color-on-surface)"
    }
  }, inputPlaceholder), inputHint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.4px",
      color: "var(--color-on-surface-variant)"
    }
  }, inputHint)), /*#__PURE__*/React.createElement("button", {
    onClick: onSend,
    "aria-label": "Send",
    style: {
      width: 48,
      height: 48,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--color-on-surface-variant)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 24
    }
  }, "send"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 4
    }
  }, credits ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontSize: 12,
      color: "var(--palette-text-disabled)"
    }
  }, "Credits ", credits.used, "/", credits.total, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 16
    }
  }, "info")) : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: "0.4px",
      color: "var(--color-primary-main)"
    }
  }, charCount, " / ", charLimit)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.5px",
      color: "var(--palette-text-disabled)",
      marginTop: 2
    }
  }, "AI can make mistakes. Check important info.")));
}
Object.assign(__ds_scope, { ChatPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/panels/ChatPanel.jsx", error: String((e && e.message) || e) }); }

// components/panels/DetailPanel.jsx
try { (() => {
/**
 * Inriver DetailPanel — form/creation content for a RightPanel. Renders a
 * title header, scrollable content, and a right-aligned footer actions row.
 * Compose body content from DetailPanelSection blocks.
 */
function DetailPanel({
  title,
  onClose,
  children,
  actions,
  width = "100%",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      width,
      height: "100%",
      overflow: "hidden",
      fontFamily: "var(--font-family-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 16px 12px",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      lineHeight: "28px",
      color: "var(--color-primary-main)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      width: 32,
      height: 32,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      color: "var(--color-on-surface-variant)",
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined",
    style: {
      fontSize: 24
    }
  }, "close"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      overflowY: "auto",
      padding: "0 16px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      padding: 16,
      flexShrink: 0
    }
  }, actions));
}

/**
 * DetailPanelSection — a bold subtitle + content block within a DetailPanel.
 */
function DetailPanelSection({
  title,
  headerAction,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      ...style
    }
  }, (title || headerAction) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontFamily: "var(--font-family-base)",
      fontSize: 14,
      fontWeight: 700,
      lineHeight: "20px",
      color: "var(--color-primary-main)"
    }
  }, title), headerAction), children);
}
Object.assign(__ds_scope, { DetailPanel, DetailPanelSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/panels/DetailPanel.jsx", error: String((e && e.message) || e) }); }

// components/panels/RightPanel.jsx
try { (() => {
/**
 * Inriver RightPanel — the shell for every right-side panel. Wrap a
 * ChatPanel or DetailPanel inside it. Handles push vs overlay mode, scrim,
 * Esc dismiss, drag-to-resize, and the unsaved-changes guard dialog.
 *   push    — content shifts left (sets --right-panel-width), no backdrop
 *   overlay — fixed, scrim, scroll-locked, covers the header
 * variant assistant (no shadow) / editor (navy shadow) / modal (strong).
 */
const WIDTH = {
  narrow: 320,
  medium: 400,
  wide: 520
};
function RightPanel({
  open,
  mode = "push",
  variant = "assistant",
  width = "medium",
  onClose,
  hasUnsavedChanges = false,
  resizable = true,
  topOffset = 56,
  children
}) {
  const [discard, setDiscard] = React.useState(false);
  const [w, setW] = React.useState(WIDTH[width]);
  const drag = React.useRef(null);
  React.useEffect(() => {
    setW(WIDTH[width]);
  }, [width]);
  React.useEffect(() => {
    if (mode === "overlay" && open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [mode, open]);
  React.useEffect(() => {
    if (mode === "push") {
      document.documentElement.style.setProperty("--right-panel-width", open ? `${w}px` : "0px");
      return () => document.documentElement.style.setProperty("--right-panel-width", "0px");
    }
  }, [mode, open, w]);
  const requestClose = React.useCallback(() => {
    if (hasUnsavedChanges) setDiscard(true);else onClose && onClose();
  }, [hasUnsavedChanges, onClose]);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (e.key === "Escape") requestClose();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, requestClose]);
  if (!open) return null;
  const overlay = mode === "overlay";
  const onDragDown = e => {
    if (!resizable) return;
    e.preventDefault();
    drag.current = {
      x: e.clientX,
      w
    };
    const move = ev => {
      if (!drag.current) return;
      const next = Math.max(280, Math.min(720, drag.current.w + (drag.current.x - ev.clientX)));
      setW(next);
      if (mode === "push") document.documentElement.style.setProperty("--right-panel-width", `${next}px`);
    };
    const up = () => {
      drag.current = null;
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", up);
    };
    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", up);
  };
  const boxShadow = variant === "assistant" ? "none" : variant === "editor" ? "-10px 0 28px rgba(11,45,110,0.1)" : "-12px 0 32px rgba(11,45,110,0.2)";
  const top = overlay ? 0 : topOffset;
  const zIndex = overlay ? 1201 : variant === "editor" ? 1101 : 1100;
  return /*#__PURE__*/React.createElement(React.Fragment, null, overlay && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    onClick: requestClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.05)",
      zIndex: 1200
    }
  }), /*#__PURE__*/React.createElement("div", {
    role: "complementary",
    style: {
      position: "fixed",
      top,
      right: 0,
      bottom: 0,
      width: w,
      background: "var(--color-white)",
      borderLeft: "1px solid var(--color-outline-variant)",
      boxShadow,
      zIndex,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      fontFamily: "var(--font-family-base)"
    }
  }, resizable && /*#__PURE__*/React.createElement("div", {
    onMouseDown: onDragDown,
    style: {
      position: "absolute",
      left: -3,
      top: 0,
      bottom: 0,
      width: 7,
      cursor: "col-resize",
      zIndex: 3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, children)), /*#__PURE__*/React.createElement(__ds_scope.Dialog, {
    open: discard,
    onClose: () => setDiscard(false),
    title: "Discard changes?",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "outlined",
      onClick: () => setDiscard(false)
    }, "Keep editing"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "contained",
      onClick: () => {
        setDiscard(false);
        onClose && onClose();
      }
    }, "Discard"))
  }, "Your progress will be lost."));
}
Object.assign(__ds_scope, { RightPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/panels/RightPanel.jsx", error: String((e && e.message) || e) }); }

// design_handoff_inriver_ds/inriver-theme.js
try { (() => {
/* =============================================================================
   Inriver Design System 2.0 — MUI v6 Theme
   -----------------------------------------------------------------------------
   A branded Material UI theme that encodes the Inriver design tokens precisely.
   Generated from: Figma “MUI for Figma v6.1.0 – Material UI” + inriver-design-tokens.css

   HOW TO USE IN A REACT/MUI CODEBASE
   ----------------------------------
     import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
     import { inriverThemeOptions } from './inriver-theme';   // copy themeOptions below

     const theme = createTheme(inriverThemeOptions);

     <ThemeProvider theme={theme}>
       <CssBaseline />
       <App />
     </ThemeProvider>

   Also remember to load Inter + the Material Icons font (see the <head> of any
   preview file in /mui).

   IN THESE PREVIEW PAGES (no bundler)
   -----------------------------------
   MUI v6 ships NO browser/UMD bundle (it was removed to align with React 19).
   So these preview pages render with the last UMD build, MUI v5.16.7, loaded as
   a plain <script>. The theme options below use the API that is IDENTICAL across
   v5 and v6 — drop them straight into createTheme() in your v6 codebase.

   This file is loaded as a plain <script> after the MUI UMD bundle. It exposes:
     • window.inriverThemeOptions  — the plain options object (copy this)
     • window.inriverTheme         — a ready-built theme
   ============================================================================= */

(function (global) {
  // ── Raw token values (mirrors inriver-design-tokens.css) ──────────────────
  const T = {
    // Brand / palette
    navy900: '#16243d',
    navy800: '#22243d',
    // secondary.main / dark navigation surface
    navy700: '#0b2d6e',
    // primary.main — headings, links, active states
    navy600: '#0057cf',
    navy400: '#485d92',
    // primary.light
    navyDark: '#003687',
    // primary.dark
    navy100: '#ebf1fc',
    // app background / soft navy surface

    error: {
      main: '#ba1a1a',
      dark: '#c62828',
      light: '#ef5350'
    },
    warning: {
      main: '#ff6424',
      dark: '#e65100',
      light: '#ff9800'
    },
    info: {
      main: '#0057cf',
      dark: '#00419f',
      light: '#2067cc'
    },
    success: {
      main: '#2c9b4b',
      dark: '#1b5e20',
      light: '#4caf50'
    },
    // Neutrals / surfaces
    onSurface: '#191b24',
    // body ink (darker than 87% black)
    onSurfaceVariant: '#424655',
    // secondary text / labels / icons
    surfaceVariant: '#d8e0f4',
    // slider inactive track
    surfaceLow: '#f1f6fe',
    // elevated card / button bg, row hover
    surfaceHighest: '#e3e9f8',
    // filled input bg, dialog header, tab bar
    outline: '#727787',
    // input borders
    outlineVariant: '#c2c6d8',
    // chip borders, subtle dividers
    primaryTab: '#c3defe',
    // selected chip / toggle bg
    white: '#ffffff',
    // Data-grid row states (mirror --custom-row-* tokens)
    rowHover: '#f1f6fe',
    // --custom-row-on-hover
    rowSelected: 'rgba(11,45,110,0.08)',
    // --custom-row-selected (primary 8%)
    rowSelectedHover: 'rgba(11,45,110,0.14)',
    // --custom-row-selected-hover (primary 14%)

    // Diff highlights (mirror --custom-diff-* tokens)
    diffRemovedBg: '#f4d9d9',
    diffRemovedText: '#5f2120',
    diffAddedBg: '#d6efdd',
    diffAddedText: '#1e4620',
    // Radii
    radiusXs: 4,
    // text field, menu
    radiusSm: 5,
    // button, card, paper (default shape)
    radiusMd: 8,
    // chip
    radiusLg: 10,
    // nav item, tab badge
    radiusXl: 28,
    // dialog, date picker
    radiusFull: 9999
  };

  // ── Elevation tokens (Inriver uses 3 distinct levels) ─────────────────────
  const E1 = '0 1px 3px 1px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.30)';
  const E2 = '0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.30)';
  const E3 = '0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px 0 rgba(0,0,0,0.30)';

  // MUI requires a 25-entry shadows array. Map Inriver's 3 levels across it so
  // every elevation prop resolves to one of the three engineered shadows.
  const shadows = ['none'];
  for (let i = 1; i <= 24; i++) {
    if (i <= 2) shadows.push(E1);else if (i <= 8) shadows.push(E2);else shadows.push(E3);
  }

  // ── Theme options (THIS is the object devs copy) ──────────────────────────
  const inriverThemeOptions = {
    shape: {
      borderRadius: T.radiusSm
    },
    // 5px paper/card/button default
    spacing: 8,
    // strict 8-pt grid
    shadows,
    palette: {
      mode: 'light',
      primary: {
        main: T.navy700,
        dark: T.navyDark,
        light: T.navy400,
        contrastText: '#ffffff'
      },
      secondary: {
        main: T.navy800,
        dark: '#000000',
        light: T.navy800,
        contrastText: '#ffffff'
      },
      error: {
        ...T.error,
        contrastText: '#ffffff'
      },
      warning: {
        ...T.warning,
        contrastText: '#ffffff'
      },
      info: {
        ...T.info,
        contrastText: '#ffffff'
      },
      success: {
        ...T.success,
        contrastText: '#ffffff'
      },
      text: {
        primary: T.onSurface,
        secondary: T.onSurfaceVariant,
        disabled: 'rgba(0,0,0,0.38)'
      },
      divider: T.outlineVariant,
      background: {
        default: '#ffffff',
        paper: '#ffffff'
      },
      // Custom brand entries (available via theme.palette.inriver.*)
      inriver: {
        navy900: T.navy900,
        navy800: T.navy800,
        navy700: T.navy700,
        navy100: T.navy100,
        surfaceLow: T.surfaceLow,
        surfaceHighest: T.surfaceHighest,
        surfaceVariant: T.surfaceVariant,
        outline: T.outline,
        outlineVariant: T.outlineVariant,
        primaryTab: T.primaryTab,
        appBackground: T.navy100,
        navSurface: T.navy800,
        rowHover: T.rowHover,
        rowSelected: T.rowSelected,
        rowSelectedHover: T.rowSelectedHover,
        diffRemovedBg: T.diffRemovedBg,
        diffRemovedText: T.diffRemovedText,
        diffAddedBg: T.diffAddedBg,
        diffAddedText: T.diffAddedText
      }
    },
    typography: {
      fontFamily: '"Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      // Display / headline
      h1: {
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: 1.167,
        letterSpacing: '-1.5px'
      },
      h2: {
        fontWeight: 300,
        fontSize: '3.75rem',
        lineHeight: 1.2,
        letterSpacing: '-0.5px'
      },
      h3: {
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: 1.167,
        letterSpacing: 0
      },
      h4: {
        fontWeight: 400,
        fontSize: '2.125rem',
        lineHeight: 1.235,
        letterSpacing: '0.25px'
      },
      h5: {
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.334,
        letterSpacing: 0
      },
      // headline-small 24/32
      // Inriver trait: h6 (page title) is 700 weight, 22px
      h6: {
        fontWeight: 700,
        fontSize: '1.375rem',
        lineHeight: '36px',
        letterSpacing: '0.15px'
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.15px'
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '20px',
        letterSpacing: '0.1px'
      },
      // title-small
      body1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '24px',
        letterSpacing: '0.5px'
      },
      // body-large
      body2: {
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '20px',
        letterSpacing: '0.25px'
      },
      // body-medium
      // Button: Inriver ships title case (capitalize), not the MUI uppercase default
      button: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '20px',
        letterSpacing: '0.1px',
        textTransform: 'capitalize'
      },
      caption: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: '16px',
        letterSpacing: '0.4px'
      },
      overline: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1,
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#ffffff',
            color: T.onSurface
          }
        }
      },
      // ── Buttons ────────────────────────────────────────────────────────
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          variant: 'contained'
        },
        styleOverrides: {
          root: {
            borderRadius: T.radiusSm,
            fontWeight: 500,
            letterSpacing: '0.1px'
          },
          // Inriver four-tier height scale mapped onto MUI sizes
          sizeSmall: {
            height: 30,
            padding: '0 16px',
            fontSize: '0.8125rem'
          },
          sizeMedium: {
            height: 40,
            padding: '0 24px',
            fontSize: '0.875rem'
          },
          // default = Inriver Large
          sizeLarge: {
            height: 40,
            padding: '0 24px',
            fontSize: '0.875rem'
          },
          containedPrimary: {
            backgroundColor: T.navy700,
            '&:hover': {
              backgroundColor: T.navyDark
            }
          },
          outlined: {
            borderColor: T.outline
          },
          outlinedPrimary: {
            color: T.navy700,
            borderColor: T.outline,
            '&:hover': {
              borderColor: T.navy700,
              backgroundColor: 'rgba(11,45,110,0.08)'
            }
          },
          textPrimary: {
            color: T.navy700
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: T.onSurfaceVariant,
            borderRadius: T.radiusFull
          }
        }
      },
      MuiButtonGroup: {
        defaultProps: {
          disableElevation: true
        },
        styleOverrides: {
          root: {
            borderRadius: T.radiusSm
          }
        }
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: 'capitalize',
            fontWeight: 500,
            letterSpacing: '0.1px',
            borderColor: T.outline,
            '&.Mui-selected': {
              backgroundColor: T.primaryTab,
              color: T.navy700,
              '&:hover': {
                backgroundColor: T.primaryTab
              }
            }
          }
        }
      },
      MuiFab: {
        styleOverrides: {
          root: {
            backgroundColor: T.navy700,
            color: '#fff',
            '&:hover': {
              backgroundColor: T.navyDark
            }
          }
        }
      },
      // ── Inputs ─────────────────────────────────────────────────────────
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small'
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: T.radiusXs,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: T.outline
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: T.onSurface
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: T.navy700,
              borderWidth: 2
            }
          }
        }
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: T.surfaceHighest,
            borderRadius: `${T.radiusXs}px ${T.radiusXs}px 0 0`,
            '&:hover': {
              backgroundColor: '#dbe2f4'
            },
            '&.Mui-focused': {
              backgroundColor: T.surfaceHighest
            },
            '&:after': {
              borderBottomColor: T.navy700
            }
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            '&.Mui-focused': {
              color: T.navy700
            }
          }
        }
      },
      // ── Selection controls ───────────────────────────────────────────────
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: T.outline,
            '&.Mui-checked': {
              color: T.navy700
            }
          }
        }
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: T.outline,
            '&.Mui-checked': {
              color: T.navy700
            }
          }
        }
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            '&.Mui-checked': {
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: T.navy700,
                opacity: 1
              }
            }
          }
        }
      },
      MuiSlider: {
        styleOverrides: {
          root: {
            color: T.navy400
          },
          rail: {
            backgroundColor: T.surfaceVariant,
            opacity: 1
          },
          track: {
            backgroundColor: T.navy400,
            border: 'none'
          },
          thumb: {
            backgroundColor: T.navy400
          }
        }
      },
      // ── Surfaces ─────────────────────────────────────────────────────────
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: T.radiusSm
          }
        },
        defaultProps: {
          elevation: 1
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: T.radiusSm
          }
        },
        defaultProps: {
          elevation: 1
        }
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: T.radiusXl
          }
        }
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            backgroundColor: T.surfaceHighest,
            padding: 24,
            fontSize: '1.5rem',
            fontWeight: 400,
            lineHeight: 1.334,
            letterSpacing: 0
          }
        }
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: '24px'
          }
        }
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: '8px 24px 24px'
          }
        }
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            borderRadius: T.radiusXs
          }
        }
      },
      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            borderRadius: T.radiusXs
          },
          option: {
            // Match data-table row highlight colours (--custom-row-* tokens)
            '&:hover': {
              backgroundColor: T.rowHover + ' !important'
            },
            '&.Mui-focused': {
              backgroundColor: T.rowHover + ' !important'
            },
            '&[aria-selected="true"]': {
              backgroundColor: T.rowSelected + ' !important',
              '&:hover, &.Mui-focused': {
                backgroundColor: T.rowSelectedHover + ' !important'
              }
            }
          },
          groupLabel: {
            color: T.onSurfaceVariant,
            fontWeight: 600
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            // Hover uses the Inriver list/row hover blue (--custom-row-on-hover), not MUI grey
            '&:hover': {
              backgroundColor: T.rowHover
            },
            '&.Mui-selected': {
              backgroundColor: T.rowSelected,
              '&:hover': {
                backgroundColor: T.rowSelectedHover
              }
            }
          }
        }
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: '#616161',
            fontSize: '0.75rem',
            borderRadius: T.radiusXs
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRight: `1px solid ${T.outlineVariant}`
          }
        }
      },
      // ── Data display ─────────────────────────────────────────────────────
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: T.radiusFull,
            fontWeight: 500,
            letterSpacing: '0.1px'
          },
          outlined: {
            borderColor: T.outlineVariant,
            color: T.onSurfaceVariant
          },
          filledPrimary: {
            backgroundColor: T.primaryTab,
            color: T.navy700
          }
        }
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            backgroundColor: T.navy700,
            fontSize: '0.875rem'
          }
        }
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor: T.outlineVariant,
            fontSize: '0.875rem',
            letterSpacing: '0.25px'
          },
          head: {
            fontWeight: 600,
            color: T.onSurface
          }
        }
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            // Inriver data-grid row states
            '&.MuiTableRow-hover:hover': {
              backgroundColor: T.rowHover
            },
            '&.Mui-selected': {
              backgroundColor: T.rowSelected,
              '&:hover': {
                backgroundColor: T.rowSelectedHover
              }
            }
          }
        }
      },
      // ── Navigation ─────────────────────────────────────────────────────
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: T.navy700,
            height: 2
          }
        }
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            letterSpacing: '0.1px',
            color: T.onSurfaceVariant,
            '&.Mui-selected': {
              color: T.navy700
            }
          }
        }
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              backgroundColor: T.primaryTab,
              color: T.navy700
            }
          }
        }
      },
      MuiBreadcrumbs: {
        styleOverrides: {
          separator: {
            color: T.onSurfaceVariant
          }
        }
      },
      MuiLink: {
        defaultProps: {
          color: 'primary'
        },
        styleOverrides: {
          root: {
            textDecorationColor: 'inherit'
          }
        }
      },
      MuiStepIcon: {
        styleOverrides: {
          root: {
            '&.Mui-active': {
              color: T.navy700
            },
            '&.Mui-completed': {
              color: T.navy700
            }
          }
        }
      },
      // ── Feedback ─────────────────────────────────────────────────────────
      MuiAlert: {
        styleOverrides: {
          standardError: {
            backgroundColor: '#fdeded',
            color: '#5f2120'
          },
          standardWarning: {
            backgroundColor: '#fff4e5',
            color: '#663c00'
          },
          standardInfo: {
            backgroundColor: '#e5f6fd',
            color: '#014361'
          },
          standardSuccess: {
            backgroundColor: '#edf7ed',
            color: '#1e4620'
          }
        }
      },
      MuiSnackbarContent: {
        styleOverrides: {
          root: {
            backgroundColor: '#323232',
            borderRadius: T.radiusSm
          }
        }
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: T.radiusFull
          }
        }
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            '&:before': {
              display: 'none'
            }
          }
        }
      }
    }
  };

  // Expose the plain options for copy/paste handoff …
  global.inriverThemeOptions = inriverThemeOptions;

  // … and build a ready theme from the MUI UMD bundle.
  if (global.MaterialUI && typeof global.MaterialUI.createTheme === 'function') {
    global.inriverTheme = global.MaterialUI.createTheme(inriverThemeOptions);
  }
})(window);
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_inriver_ds/inriver-theme.js", error: String((e && e.message) || e) }); }

// design_handoff_inriver_ds/prototype/screens.jsx
try { (() => {
// Inriver PIM — UI kit screens. Composes the design-system bundle
// components (window.InriverDesignSystem_4656de) into real product views.
const DS = window.InriverDesignSystem_4656de;
const {
  InriverGlobalHeader,
  InriverPageHeader,
  Button,
  IconButton,
  Card,
  DataTable,
  Chip,
  InriverTabs,
  InriverTabPanel,
  Breadcrumbs,
  Pagination,
  Select,
  TextField,
  Toast,
  Progress,
  Avatar,
  Accordion
} = DS;
const {
  useState
} = React;
const LOGO = "../../assets/inriver-logo-dark.png";

// ─── Product data ──────────────────────────────────────────────────
const PRODUCTS = [{
  id: "1",
  name: "Trail Runner GTX",
  sku: "TR-GTX-42",
  cat: "Footwear",
  status: "Published",
  complete: 98,
  channels: 6
}, {
  id: "2",
  name: "Alpine Shell Jacket",
  sku: "AS-JKT-08",
  cat: "Outerwear",
  status: "In review",
  complete: 72,
  channels: 4,
  state: "warning"
}, {
  id: "3",
  name: "Summit Down Vest",
  sku: "SD-VST-15",
  cat: "Outerwear",
  status: "Draft",
  complete: 40,
  channels: 1,
  state: "error"
}, {
  id: "4",
  name: "River Trek Sandal",
  sku: "RT-SND-31",
  cat: "Footwear",
  status: "Published",
  complete: 100,
  channels: 8,
  state: "success"
}, {
  id: "5",
  name: "Glacier Beanie",
  sku: "GL-BEA-02",
  cat: "Accessories",
  status: "In review",
  complete: 64,
  channels: 3
}, {
  id: "6",
  name: "Canyon Backpack 40L",
  sku: "CN-BPK-40",
  cat: "Gear",
  status: "Published",
  complete: 91,
  channels: 7
}, {
  id: "7",
  name: "Rapids Dry Bag",
  sku: "RP-DRY-20",
  cat: "Gear",
  status: "Draft",
  complete: 28,
  channels: 0,
  state: "error"
}, {
  id: "8",
  name: "Fjord Merino Sock",
  sku: "FJ-SCK-11",
  cat: "Accessories",
  status: "Published",
  complete: 100,
  channels: 8,
  state: "success"
}];
const statusChip = v => /*#__PURE__*/React.createElement(Chip, {
  label: v,
  size: "sm",
  variant: v === "Published" ? "filled-primary" : "outlined"
});
const completeCell = v => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    justifyContent: "flex-end",
    width: "100%"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 44
  }
}, /*#__PURE__*/React.createElement(Progress, {
  value: v
})), /*#__PURE__*/React.createElement("span", {
  style: {
    font: "500 13px/1 Inter",
    minWidth: 34,
    textAlign: "right"
  }
}, v, "%"));

// ─── Login ─────────────────────────────────────────────────────────
function LoginScreen({
  onSignIn
}) {
  const [email, setEmail] = useState("anja.k@northwave.com");
  const [pw, setPw] = useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-background)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "inriver",
    style: {
      height: 24,
      display: "block",
      margin: "0 auto 28px"
    }
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 22px/1.6 Inter",
      color: "var(--color-primary-bold)",
      marginBottom: 4
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/1.4 Inter",
      color: "var(--color-on-surface-variant)",
      marginBottom: 20
    }
  }, "Welcome back to your product hub."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Work email",
    value: email,
    onChange: e => setEmail(e.target.value),
    startIcon: "mail"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Password",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    startIcon: "lock"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    onClick: onSignIn,
    style: {
      width: "100%"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    style: {
      width: "100%"
    }
  }, "Forgot password?"))))));
}

// ─── Products list ─────────────────────────────────────────────────
function ProductsScreen({
  onOpen
}) {
  const [sel, setSel] = useState(new Set(["2", "3"]));
  const [cat, setCat] = useState("all");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const rows = PRODUCTS.filter(p => (cat === "all" || p.cat === cat) && (status === "all" || p.status === status));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      height: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Category",
    value: cat,
    onChange: setCat,
    options: [{
      value: "all",
      label: "All categories"
    }, {
      value: "Footwear",
      label: "Footwear"
    }, {
      value: "Outerwear",
      label: "Outerwear"
    }, {
      value: "Accessories",
      label: "Accessories"
    }, {
      value: "Gear",
      label: "Gear"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 170
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Status",
    value: status,
    onChange: setStatus,
    options: [{
      value: "all",
      label: "All statuses"
    }, {
      value: "Published",
      label: "Published"
    }, {
      value: "In review",
      label: "In review"
    }, {
      value: "Draft",
      label: "Draft"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), sel.size > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/1 Inter",
      color: "var(--color-on-surface-variant)"
    }
  }, sel.size, " selected"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    startIcon: "checklist"
  }, "Approve")), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    startIcon: "file_download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    startIcon: "add"
  }, "New product")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    selectable: true,
    selected: sel,
    onSelectChange: setSel,
    rowState: r => r.state,
    columns: [{
      key: "name",
      header: "Product",
      width: 220,
      render: r => /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: e => {
          e.preventDefault();
          onOpen(r);
        },
        style: {
          color: "var(--color-primary-bold)",
          textDecoration: "none",
          fontWeight: 500
        }
      }, r.name)
    }, {
      key: "sku",
      header: "SKU",
      width: 120
    }, {
      key: "cat",
      header: "Category",
      width: 130
    }, {
      key: "status",
      header: "Status",
      width: 130,
      render: r => statusChip(r.status)
    }, {
      key: "channels",
      header: "Channels",
      width: 100,
      align: "center"
    }, {
      key: "complete",
      header: "Completeness",
      align: "right",
      render: r => completeCell(r.complete)
    }],
    rows: rows
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/1 Inter",
      color: "var(--color-on-surface-variant)"
    }
  }, rows.length, " of 1,284 products"), /*#__PURE__*/React.createElement(Pagination, {
    count: 12,
    page: page,
    onChange: setPage
  })));
}

// ─── Product detail ────────────────────────────────────────────────
function ProductDetailScreen({
  product,
  onApprove,
  onAssist
}) {
  const [tab, setTab] = useState(1);
  const p = product || PRODUCTS[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 20,
      height: "100%",
      boxSizing: "border-box",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(InriverTabs, {
    value: tab,
    onChange: (e, i) => setTab(i),
    tabs: [{
      label: "Overview"
    }, {
      label: "Attributes",
      icon: "star"
    }, {
      label: "Media"
    }, {
      label: "Channels"
    }]
  }), /*#__PURE__*/React.createElement(InriverTabPanel, {
    value: tab,
    index: 1,
    style: {
      padding: 0,
      border: "none"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultExpanded: ["general"],
    items: [{
      id: "general",
      summary: "General",
      details: /*#__PURE__*/React.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
          paddingTop: 6
        }
      }, /*#__PURE__*/React.createElement(TextField, {
        label: "Display name",
        value: p.name,
        onChange: () => {}
      }), /*#__PURE__*/React.createElement(TextField, {
        label: "SKU",
        value: p.sku,
        onChange: () => {}
      }), /*#__PURE__*/React.createElement(TextField, {
        label: "Category",
        value: p.cat,
        onChange: () => {}
      }), /*#__PURE__*/React.createElement(TextField, {
        label: "Brand",
        value: "Northwave",
        onChange: () => {}
      }))
    }, {
      id: "pricing",
      summary: "Pricing",
      details: "MSRP and channel-specific price overrides live here."
    }, {
      id: "logistics",
      summary: "Logistics",
      details: "Weight, dimensions and HS codes."
    }]
  }))), tab !== 1 && /*#__PURE__*/React.createElement(InriverTabPanel, {
    value: tab,
    index: tab,
    style: {
      border: "none",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Card, {
    body: `The “${["Overview", "Attributes", "Media", "Channels"][tab]}” tab is a placeholder in this UI-kit recreation.`
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, p.status === "In review" && /*#__PURE__*/React.createElement(Toast, {
    severity: "warning",
    title: "Awaiting approval",
    message: "This product is ready for review before publishing."
  }), /*#__PURE__*/React.createElement(Card, {
    title: "Completeness",
    body: `${p.channels} active channels`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "400 13px/1.4 Inter",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Overall"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, p.complete, "%")), /*#__PURE__*/React.createElement(Progress, {
    value: p.complete
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    startIcon: "smart_toy",
    onClick: onAssist,
    style: {
      width: "100%"
    }
  }, "Ask assistant"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    startIcon: "check",
    onClick: onApprove,
    style: {
      width: "100%"
    }
  }, "Approve & publish"))), /*#__PURE__*/React.createElement(Card, {
    title: "Assigned to"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 32,
    color: "var(--color-primary-bold)"
  }, "AK"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 14px/1.4 Inter"
    }
  }, "Anja Karlsson"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/1.3 Inter",
      color: "var(--color-on-surface-variant)"
    }
  }, "Product editor"))))));
}
Object.assign(window, {
  LoginScreen,
  ProductsScreen,
  ProductDetailScreen,
  PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_inriver_ds/prototype/screens.jsx", error: String((e && e.message) || e) }); }

// inriver-theme.js
try { (() => {
/* =============================================================================
   Inriver Design System 2.0 — MUI v6 Theme
   -----------------------------------------------------------------------------
   A branded Material UI theme that encodes the Inriver design tokens precisely.
   Generated from: Figma “MUI for Figma v6.1.0 – Material UI” + inriver-design-tokens.css

   HOW TO USE IN A REACT/MUI CODEBASE
   ----------------------------------
     import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
     import { inriverThemeOptions } from './inriver-theme';   // copy themeOptions below

     const theme = createTheme(inriverThemeOptions);

     <ThemeProvider theme={theme}>
       <CssBaseline />
       <App />
     </ThemeProvider>

   Also remember to load Inter + the Material Icons font (see the <head> of any
   preview file in /mui).

   IN THESE PREVIEW PAGES (no bundler)
   -----------------------------------
   MUI v6 ships NO browser/UMD bundle (it was removed to align with React 19).
   So these preview pages render with the last UMD build, MUI v5.16.7, loaded as
   a plain <script>. The theme options below use the API that is IDENTICAL across
   v5 and v6 — drop them straight into createTheme() in your v6 codebase.

   This file is loaded as a plain <script> after the MUI UMD bundle. It exposes:
     • window.inriverThemeOptions  — the plain options object (copy this)
     • window.inriverTheme         — a ready-built theme
   ============================================================================= */

(function (global) {
  // ── Raw token values (mirrors inriver-design-tokens.css) ──────────────────
  const T = {
    // Brand / palette
    navy900: '#16243d',
    navy800: '#22243d',
    // secondary.main / dark navigation surface
    navy700: '#0b2d6e',
    // primary.main — headings, links, active states
    navy600: '#0057cf',
    navy400: '#485d92',
    // primary.light
    navyDark: '#003687',
    // primary.dark
    navy100: '#ebf1fc',
    // app background / soft navy surface

    error: {
      main: '#ba1a1a',
      dark: '#c62828',
      light: '#ef5350'
    },
    warning: {
      main: '#ff6424',
      dark: '#e65100',
      light: '#ff9800'
    },
    info: {
      main: '#0057cf',
      dark: '#00419f',
      light: '#2067cc'
    },
    success: {
      main: '#2c9b4b',
      dark: '#1b5e20',
      light: '#4caf50'
    },
    // Neutrals / surfaces
    onSurface: '#191b24',
    // body ink (darker than 87% black)
    onSurfaceVariant: '#424655',
    // secondary text / labels / icons
    surfaceVariant: '#d8e0f4',
    // slider inactive track
    surfaceLow: '#f1f6fe',
    // elevated card / button bg, row hover
    surfaceHighest: '#e3e9f8',
    // filled input bg, dialog header, tab bar
    outline: '#727787',
    // input borders
    outlineVariant: '#c2c6d8',
    // chip borders, subtle dividers
    primaryTab: '#c3defe',
    // selected chip / toggle bg
    white: '#ffffff',
    // Data-grid row states (mirror --custom-row-* tokens)
    rowHover: '#f1f6fe',
    // --custom-row-on-hover
    rowSelected: 'rgba(11,45,110,0.08)',
    // --custom-row-selected (primary 8%)
    rowSelectedHover: 'rgba(11,45,110,0.14)',
    // --custom-row-selected-hover (primary 14%)

    // Diff highlights (mirror --custom-diff-* tokens)
    diffRemovedBg: '#f4d9d9',
    diffRemovedText: '#5f2120',
    diffAddedBg: '#d6efdd',
    diffAddedText: '#1e4620',
    // Radii
    radiusXs: 4,
    // text field, menu
    radiusSm: 5,
    // button, card, paper (default shape)
    radiusMd: 8,
    // chip
    radiusLg: 10,
    // nav item, tab badge
    radiusXl: 28,
    // dialog, date picker
    radiusFull: 9999
  };

  // ── Elevation tokens (Inriver uses 3 distinct levels) ─────────────────────
  const E1 = '0 1px 3px 1px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.30)';
  const E2 = '0 2px 6px 2px rgba(0,0,0,0.15), 0 1px 2px 0 rgba(0,0,0,0.30)';
  const E3 = '0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px 0 rgba(0,0,0,0.30)';

  // MUI requires a 25-entry shadows array. Map Inriver's 3 levels across it so
  // every elevation prop resolves to one of the three engineered shadows.
  const shadows = ['none'];
  for (let i = 1; i <= 24; i++) {
    if (i <= 2) shadows.push(E1);else if (i <= 8) shadows.push(E2);else shadows.push(E3);
  }

  // ── Theme options (THIS is the object devs copy) ──────────────────────────
  const inriverThemeOptions = {
    shape: {
      borderRadius: T.radiusSm
    },
    // 5px paper/card/button default
    spacing: 8,
    // strict 8-pt grid
    shadows,
    palette: {
      mode: 'light',
      primary: {
        main: T.navy700,
        dark: T.navyDark,
        light: T.navy400,
        contrastText: '#ffffff'
      },
      secondary: {
        main: T.navy800,
        dark: '#000000',
        light: T.navy800,
        contrastText: '#ffffff'
      },
      error: {
        ...T.error,
        contrastText: '#ffffff'
      },
      warning: {
        ...T.warning,
        contrastText: '#ffffff'
      },
      info: {
        ...T.info,
        contrastText: '#ffffff'
      },
      success: {
        ...T.success,
        contrastText: '#ffffff'
      },
      text: {
        primary: T.onSurface,
        secondary: T.onSurfaceVariant,
        disabled: 'rgba(0,0,0,0.38)'
      },
      divider: T.outlineVariant,
      background: {
        default: '#ffffff',
        paper: '#ffffff'
      },
      // Custom brand entries (available via theme.palette.inriver.*)
      inriver: {
        navy900: T.navy900,
        navy800: T.navy800,
        navy700: T.navy700,
        navy100: T.navy100,
        surfaceLow: T.surfaceLow,
        surfaceHighest: T.surfaceHighest,
        surfaceVariant: T.surfaceVariant,
        outline: T.outline,
        outlineVariant: T.outlineVariant,
        primaryTab: T.primaryTab,
        appBackground: T.navy100,
        navSurface: T.navy800,
        rowHover: T.rowHover,
        rowSelected: T.rowSelected,
        rowSelectedHover: T.rowSelectedHover,
        diffRemovedBg: T.diffRemovedBg,
        diffRemovedText: T.diffRemovedText,
        diffAddedBg: T.diffAddedBg,
        diffAddedText: T.diffAddedText
      }
    },
    typography: {
      fontFamily: '"Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      // Display / headline
      h1: {
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: 1.167,
        letterSpacing: '-1.5px'
      },
      h2: {
        fontWeight: 300,
        fontSize: '3.75rem',
        lineHeight: 1.2,
        letterSpacing: '-0.5px'
      },
      h3: {
        fontWeight: 400,
        fontSize: '3rem',
        lineHeight: 1.167,
        letterSpacing: 0
      },
      h4: {
        fontWeight: 400,
        fontSize: '2.125rem',
        lineHeight: 1.235,
        letterSpacing: '0.25px'
      },
      h5: {
        fontWeight: 400,
        fontSize: '1.5rem',
        lineHeight: 1.334,
        letterSpacing: 0
      },
      // headline-small 24/32
      // Inriver trait: h6 (page title) is 700 weight, 22px
      h6: {
        fontWeight: 700,
        fontSize: '1.375rem',
        lineHeight: '36px',
        letterSpacing: '0.15px'
      },
      subtitle1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: 1.5,
        letterSpacing: '0.15px'
      },
      subtitle2: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '20px',
        letterSpacing: '0.1px'
      },
      // title-small
      body1: {
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '24px',
        letterSpacing: '0.5px'
      },
      // body-large
      body2: {
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '20px',
        letterSpacing: '0.25px'
      },
      // body-medium
      // Button: Inriver ships title case (capitalize), not the MUI uppercase default
      button: {
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '20px',
        letterSpacing: '0.1px',
        textTransform: 'capitalize'
      },
      caption: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: '16px',
        letterSpacing: '0.4px'
      },
      overline: {
        fontWeight: 400,
        fontSize: '0.75rem',
        lineHeight: 1,
        letterSpacing: '1px',
        textTransform: 'uppercase'
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#ffffff',
            color: T.onSurface
          }
        }
      },
      // ── Buttons ────────────────────────────────────────────────────────
      MuiButton: {
        defaultProps: {
          disableElevation: true,
          variant: 'contained'
        },
        styleOverrides: {
          root: {
            borderRadius: T.radiusSm,
            fontWeight: 500,
            letterSpacing: '0.1px'
          },
          // Inriver four-tier height scale mapped onto MUI sizes
          sizeSmall: {
            height: 30,
            padding: '0 16px',
            fontSize: '0.8125rem'
          },
          sizeMedium: {
            height: 40,
            padding: '0 24px',
            fontSize: '0.875rem'
          },
          // default = Inriver Large
          sizeLarge: {
            height: 40,
            padding: '0 24px',
            fontSize: '0.875rem'
          },
          containedPrimary: {
            backgroundColor: T.navy700,
            '&:hover': {
              backgroundColor: T.navyDark
            }
          },
          outlined: {
            borderColor: T.outline
          },
          outlinedPrimary: {
            color: T.navy700,
            borderColor: T.outline,
            '&:hover': {
              borderColor: T.navy700,
              backgroundColor: 'rgba(11,45,110,0.08)'
            }
          },
          textPrimary: {
            color: T.navy700
          }
        }
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: T.onSurfaceVariant,
            borderRadius: T.radiusFull
          }
        }
      },
      MuiButtonGroup: {
        defaultProps: {
          disableElevation: true
        },
        styleOverrides: {
          root: {
            borderRadius: T.radiusSm
          }
        }
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: 'capitalize',
            fontWeight: 500,
            letterSpacing: '0.1px',
            borderColor: T.outline,
            '&.Mui-selected': {
              backgroundColor: T.primaryTab,
              color: T.navy700,
              '&:hover': {
                backgroundColor: T.primaryTab
              }
            }
          }
        }
      },
      MuiFab: {
        styleOverrides: {
          root: {
            backgroundColor: T.navy700,
            color: '#fff',
            '&:hover': {
              backgroundColor: T.navyDark
            }
          }
        }
      },
      // ── Inputs ─────────────────────────────────────────────────────────
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small'
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: T.radiusXs,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: T.outline
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: T.onSurface
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: T.navy700,
              borderWidth: 2
            }
          }
        }
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: T.surfaceHighest,
            borderRadius: `${T.radiusXs}px ${T.radiusXs}px 0 0`,
            '&:hover': {
              backgroundColor: '#dbe2f4'
            },
            '&.Mui-focused': {
              backgroundColor: T.surfaceHighest
            },
            '&:after': {
              borderBottomColor: T.navy700
            }
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            '&.Mui-focused': {
              color: T.navy700
            }
          }
        }
      },
      // ── Selection controls ───────────────────────────────────────────────
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: T.outline,
            '&.Mui-checked': {
              color: T.navy700
            }
          }
        }
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: T.outline,
            '&.Mui-checked': {
              color: T.navy700
            }
          }
        }
      },
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            '&.Mui-checked': {
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: T.navy700,
                opacity: 1
              }
            }
          }
        }
      },
      MuiSlider: {
        styleOverrides: {
          root: {
            color: T.navy400
          },
          rail: {
            backgroundColor: T.surfaceVariant,
            opacity: 1
          },
          track: {
            backgroundColor: T.navy400,
            border: 'none'
          },
          thumb: {
            backgroundColor: T.navy400
          }
        }
      },
      // ── Surfaces ─────────────────────────────────────────────────────────
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: T.radiusSm
          }
        },
        defaultProps: {
          elevation: 1
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: T.radiusSm
          }
        },
        defaultProps: {
          elevation: 1
        }
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: T.radiusXl
          }
        }
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: {
            backgroundColor: T.surfaceHighest,
            padding: 24,
            fontSize: '1.5rem',
            fontWeight: 400,
            lineHeight: 1.334,
            letterSpacing: 0
          }
        }
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            padding: '24px'
          }
        }
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: '8px 24px 24px'
          }
        }
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            borderRadius: T.radiusXs
          }
        }
      },
      MuiAutocomplete: {
        styleOverrides: {
          paper: {
            borderRadius: T.radiusXs
          },
          option: {
            // Match data-table row highlight colours (--custom-row-* tokens)
            '&:hover': {
              backgroundColor: T.rowHover + ' !important'
            },
            '&.Mui-focused': {
              backgroundColor: T.rowHover + ' !important'
            },
            '&[aria-selected="true"]': {
              backgroundColor: T.rowSelected + ' !important',
              '&:hover, &.Mui-focused': {
                backgroundColor: T.rowSelectedHover + ' !important'
              }
            }
          },
          groupLabel: {
            color: T.onSurfaceVariant,
            fontWeight: 600
          }
        }
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            // Hover uses the Inriver list/row hover blue (--custom-row-on-hover), not MUI grey
            '&:hover': {
              backgroundColor: T.rowHover
            },
            '&.Mui-selected': {
              backgroundColor: T.rowSelected,
              '&:hover': {
                backgroundColor: T.rowSelectedHover
              }
            }
          }
        }
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: '#616161',
            fontSize: '0.75rem',
            borderRadius: T.radiusXs
          }
        }
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRight: `1px solid ${T.outlineVariant}`
          }
        }
      },
      // ── Data display ─────────────────────────────────────────────────────
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: T.radiusFull,
            fontWeight: 500,
            letterSpacing: '0.1px'
          },
          outlined: {
            borderColor: T.outlineVariant,
            color: T.onSurfaceVariant
          },
          filledPrimary: {
            backgroundColor: T.primaryTab,
            color: T.navy700
          }
        }
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            backgroundColor: T.navy700,
            fontSize: '0.875rem'
          }
        }
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor: T.outlineVariant,
            fontSize: '0.875rem',
            letterSpacing: '0.25px'
          },
          head: {
            fontWeight: 600,
            color: T.onSurface
          }
        }
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            // Inriver data-grid row states
            '&.MuiTableRow-hover:hover': {
              backgroundColor: T.rowHover
            },
            '&.Mui-selected': {
              backgroundColor: T.rowSelected,
              '&:hover': {
                backgroundColor: T.rowSelectedHover
              }
            }
          }
        }
      },
      // ── Navigation ─────────────────────────────────────────────────────
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: T.navy700,
            height: 2
          }
        }
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            letterSpacing: '0.1px',
            color: T.onSurfaceVariant,
            '&.Mui-selected': {
              color: T.navy700
            }
          }
        }
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              backgroundColor: T.primaryTab,
              color: T.navy700
            }
          }
        }
      },
      MuiBreadcrumbs: {
        styleOverrides: {
          separator: {
            color: T.onSurfaceVariant
          }
        }
      },
      MuiLink: {
        defaultProps: {
          color: 'primary'
        },
        styleOverrides: {
          root: {
            textDecorationColor: 'inherit'
          }
        }
      },
      MuiStepIcon: {
        styleOverrides: {
          root: {
            '&.Mui-active': {
              color: T.navy700
            },
            '&.Mui-completed': {
              color: T.navy700
            }
          }
        }
      },
      // ── Feedback ─────────────────────────────────────────────────────────
      MuiAlert: {
        styleOverrides: {
          standardError: {
            backgroundColor: '#fdeded',
            color: '#5f2120'
          },
          standardWarning: {
            backgroundColor: '#fff4e5',
            color: '#663c00'
          },
          standardInfo: {
            backgroundColor: '#e5f6fd',
            color: '#014361'
          },
          standardSuccess: {
            backgroundColor: '#edf7ed',
            color: '#1e4620'
          }
        }
      },
      MuiSnackbarContent: {
        styleOverrides: {
          root: {
            backgroundColor: '#323232',
            borderRadius: T.radiusSm
          }
        }
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: T.radiusFull
          }
        }
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            borderRadius: 0,
            '&:before': {
              display: 'none'
            }
          }
        }
      }
    }
  };

  // Expose the plain options for copy/paste handoff …
  global.inriverThemeOptions = inriverThemeOptions;

  // … and build a ready theme from the MUI UMD bundle.
  if (global.MaterialUI && typeof global.MaterialUI.createTheme === 'function') {
    global.inriverTheme = global.MaterialUI.createTheme(inriverThemeOptions);
  }
})(window);
})(); } catch (e) { __ds_ns.__errors.push({ path: "inriver-theme.js", error: String((e && e.message) || e) }); }

// ui_kits/inriver-app/screens.jsx
try { (() => {
// Inriver PIM — UI kit screens. Composes the design-system bundle
// components (window.InriverDesignSystem_4656de) into real product views.
const DS = window.InriverDesignSystem_4656de;
const {
  InriverGlobalHeader,
  InriverPageHeader,
  Button,
  IconButton,
  Card,
  DataTable,
  Chip,
  InriverTabs,
  InriverTabPanel,
  Breadcrumbs,
  Pagination,
  Select,
  TextField,
  Toast,
  Progress,
  Avatar,
  Accordion
} = DS;
const {
  useState
} = React;
const LOGO = "../../assets/inriver-logo-dark.png";

// ─── Product data ──────────────────────────────────────────────────
const PRODUCTS = [{
  id: "1",
  name: "Trail Runner GTX",
  sku: "TR-GTX-42",
  cat: "Footwear",
  status: "Published",
  complete: 98,
  channels: 6
}, {
  id: "2",
  name: "Alpine Shell Jacket",
  sku: "AS-JKT-08",
  cat: "Outerwear",
  status: "In review",
  complete: 72,
  channels: 4,
  state: "warning"
}, {
  id: "3",
  name: "Summit Down Vest",
  sku: "SD-VST-15",
  cat: "Outerwear",
  status: "Draft",
  complete: 40,
  channels: 1,
  state: "error"
}, {
  id: "4",
  name: "River Trek Sandal",
  sku: "RT-SND-31",
  cat: "Footwear",
  status: "Published",
  complete: 100,
  channels: 8,
  state: "success"
}, {
  id: "5",
  name: "Glacier Beanie",
  sku: "GL-BEA-02",
  cat: "Accessories",
  status: "In review",
  complete: 64,
  channels: 3
}, {
  id: "6",
  name: "Canyon Backpack 40L",
  sku: "CN-BPK-40",
  cat: "Gear",
  status: "Published",
  complete: 91,
  channels: 7
}, {
  id: "7",
  name: "Rapids Dry Bag",
  sku: "RP-DRY-20",
  cat: "Gear",
  status: "Draft",
  complete: 28,
  channels: 0,
  state: "error"
}, {
  id: "8",
  name: "Fjord Merino Sock",
  sku: "FJ-SCK-11",
  cat: "Accessories",
  status: "Published",
  complete: 100,
  channels: 8,
  state: "success"
}];
const statusChip = v => /*#__PURE__*/React.createElement(Chip, {
  label: v,
  size: "sm",
  variant: v === "Published" ? "filled-primary" : "outlined"
});
const completeCell = v => /*#__PURE__*/React.createElement("span", {
  style: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    justifyContent: "flex-end",
    width: "100%"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 44
  }
}, /*#__PURE__*/React.createElement(Progress, {
  value: v
})), /*#__PURE__*/React.createElement("span", {
  style: {
    font: "500 13px/1 Inter",
    minWidth: 34,
    textAlign: "right"
  }
}, v, "%"));

// ─── Login ─────────────────────────────────────────────────────────
function LoginScreen({
  onSignIn
}) {
  const [email, setEmail] = useState("anja.k@northwave.com");
  const [pw, setPw] = useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--color-background)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 380
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "inriver",
    style: {
      height: 24,
      display: "block",
      margin: "0 auto 28px"
    }
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "700 22px/1.6 Inter",
      color: "var(--color-primary-main)",
      marginBottom: 4
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 14px/1.4 Inter",
      color: "var(--color-on-surface-variant)",
      marginBottom: 20
    }
  }, "Welcome back to your product hub."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Work email",
    value: email,
    onChange: e => setEmail(e.target.value),
    startIcon: "mail"
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Password",
    type: "password",
    value: pw,
    onChange: e => setPw(e.target.value),
    startIcon: "lock"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    onClick: onSignIn,
    style: {
      width: "100%"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    style: {
      width: "100%"
    }
  }, "Forgot password?"))))));
}

// ─── Products list ─────────────────────────────────────────────────
function ProductsScreen({
  onOpen
}) {
  const [sel, setSel] = useState(new Set(["2", "3"]));
  const [cat, setCat] = useState("all");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const rows = PRODUCTS.filter(p => (cat === "all" || p.cat === cat) && (status === "all" || p.status === status));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      height: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Category",
    value: cat,
    onChange: setCat,
    options: [{
      value: "all",
      label: "All categories"
    }, {
      value: "Footwear",
      label: "Footwear"
    }, {
      value: "Outerwear",
      label: "Outerwear"
    }, {
      value: "Accessories",
      label: "Accessories"
    }, {
      value: "Gear",
      label: "Gear"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 170
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Status",
    value: status,
    onChange: setStatus,
    options: [{
      value: "all",
      label: "All statuses"
    }, {
      value: "Published",
      label: "Published"
    }, {
      value: "In review",
      label: "In review"
    }, {
      value: "Draft",
      label: "Draft"
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), sel.size > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/1 Inter",
      color: "var(--color-on-surface-variant)"
    }
  }, sel.size, " selected"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    startIcon: "checklist"
  }, "Approve")), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    startIcon: "file_download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    startIcon: "add"
  }, "New product")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    selectable: true,
    selected: sel,
    onSelectChange: setSel,
    rowState: r => r.state,
    columns: [{
      key: "name",
      header: "Product",
      width: 220,
      render: r => /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: e => {
          e.preventDefault();
          onOpen(r);
        },
        style: {
          color: "var(--color-primary-main)",
          textDecoration: "none",
          fontWeight: 500
        }
      }, r.name)
    }, {
      key: "sku",
      header: "SKU",
      width: 120
    }, {
      key: "cat",
      header: "Category",
      width: 130
    }, {
      key: "status",
      header: "Status",
      width: 130,
      render: r => statusChip(r.status)
    }, {
      key: "channels",
      header: "Channels",
      width: 100,
      align: "center"
    }, {
      key: "complete",
      header: "Completeness",
      align: "right",
      render: r => completeCell(r.complete)
    }],
    rows: rows
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px/1 Inter",
      color: "var(--color-on-surface-variant)"
    }
  }, rows.length, " of 1,284 products"), /*#__PURE__*/React.createElement(Pagination, {
    count: 12,
    page: page,
    onChange: setPage
  })));
}

// ─── Product detail ────────────────────────────────────────────────
function ProductDetailScreen({
  product,
  onApprove,
  onAssist
}) {
  const [tab, setTab] = useState(1);
  const p = product || PRODUCTS[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 20,
      height: "100%",
      boxSizing: "border-box",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(InriverTabs, {
    value: tab,
    onChange: (e, i) => setTab(i),
    tabs: [{
      label: "Overview"
    }, {
      label: "Attributes",
      icon: "star"
    }, {
      label: "Media"
    }, {
      label: "Channels"
    }]
  }), /*#__PURE__*/React.createElement(InriverTabPanel, {
    value: tab,
    index: 1,
    style: {
      padding: 0,
      border: "none"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultExpanded: ["general"],
    items: [{
      id: "general",
      summary: "General",
      details: /*#__PURE__*/React.createElement("div", {
        style: {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 14,
          paddingTop: 6
        }
      }, /*#__PURE__*/React.createElement(TextField, {
        label: "Display name",
        value: p.name,
        onChange: () => {}
      }), /*#__PURE__*/React.createElement(TextField, {
        label: "SKU",
        value: p.sku,
        onChange: () => {}
      }), /*#__PURE__*/React.createElement(TextField, {
        label: "Category",
        value: p.cat,
        onChange: () => {}
      }), /*#__PURE__*/React.createElement(TextField, {
        label: "Brand",
        value: "Northwave",
        onChange: () => {}
      }))
    }, {
      id: "pricing",
      summary: "Pricing",
      details: "MSRP and channel-specific price overrides live here."
    }, {
      id: "logistics",
      summary: "Logistics",
      details: "Weight, dimensions and HS codes."
    }]
  }))), tab !== 1 && /*#__PURE__*/React.createElement(InriverTabPanel, {
    value: tab,
    index: tab,
    style: {
      border: "none",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(Card, {
    body: `The “${["Overview", "Attributes", "Media", "Channels"][tab]}” tab is a placeholder in this UI-kit recreation.`
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, p.status === "In review" && /*#__PURE__*/React.createElement(Toast, {
    severity: "warning",
    title: "Awaiting approval",
    message: "This product is ready for review before publishing."
  }), /*#__PURE__*/React.createElement(Card, {
    title: "Completeness",
    body: `${p.channels} active channels`
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      font: "400 13px/1.4 Inter",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Overall"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, p.complete, "%")), /*#__PURE__*/React.createElement(Progress, {
    value: p.complete
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    startIcon: "smart_toy",
    onClick: onAssist,
    style: {
      width: "100%"
    }
  }, "Ask assistant"), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    startIcon: "check",
    onClick: onApprove,
    style: {
      width: "100%"
    }
  }, "Approve & publish"))), /*#__PURE__*/React.createElement(Card, {
    title: "Assigned to"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 32,
    color: "var(--color-primary-main)"
  }, "AK"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 14px/1.4 Inter"
    }
  }, "Anja Karlsson"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "400 12px/1.3 Inter",
      color: "var(--color-on-surface-variant)"
    }
  }, "Product editor"))))));
}
Object.assign(window, {
  LoginScreen,
  ProductsScreen,
  ProductDetailScreen,
  PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/inriver-app/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.InriverDataTableRow = __ds_scope.InriverDataTableRow;

__ds_ns.InriverCell = __ds_scope.InriverCell;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.InriverAppNav = __ds_scope.InriverAppNav;

__ds_ns.InriverAppNavPlaceholder = __ds_scope.InriverAppNavPlaceholder;

__ds_ns.InriverGlobalHeader = __ds_scope.InriverGlobalHeader;

__ds_ns.InriverNavRail = __ds_scope.InriverNavRail;

__ds_ns.InriverPageHeader = __ds_scope.InriverPageHeader;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.InriverStepper = __ds_scope.InriverStepper;

__ds_ns.InriverTabs = __ds_scope.InriverTabs;

__ds_ns.InriverTabPanel = __ds_scope.InriverTabPanel;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.ChatPanel = __ds_scope.ChatPanel;

__ds_ns.DetailPanel = __ds_scope.DetailPanel;

__ds_ns.DetailPanelSection = __ds_scope.DetailPanelSection;

__ds_ns.RightPanel = __ds_scope.RightPanel;

})();
