import React, { useMemo } from "react";
import hashString from "string-hash";
import _JSXStyle from "styled-jsx/style";
import { LayoutProps } from "./component-factory";

const cfg = {
  space: [0, 4, 8, 12, 16, 24, 32, 36, 64],
  fontSize: [0, 12, 14, 16, 20, 24, 32, 48, 64],
  breakpoints: [0, 600, 900, 1200],
  remBase: 10
};

const cssSelectors = {
  margin: "space",
  m: {
    margin: "space"
  },
  marginTop: "space",
  mt: {
    marginTop: "space"
  },
  marginRight: "space",
  mr: {
    marginRight: "space"
  },
  marginBottom: "space",
  mb: {
    marginBottom: "space"
  },
  marginLeft: "space",
  ml: {
    marginLeft: "space"
  },
  marginX: {
    marginLeft: "space",
    marginRight: "space"
  },
  mx: {
    marginLeft: "space",
    marginRight: "space"
  },
  marginY: {
    marginTop: "space",
    marginBottom: "space"
  },
  my: {
    marginTop: "space",
    marginBottom: "space"
  },
  padding: "space",
  p: {
    padding: "space"
  },
  paddingTop: "space",
  pt: {
    paddingTop: "space"
  },
  paddingRight: "space",
  pr: {
    paddingRight: "space"
  },
  paddingBottom: "space",
  pb: {
    paddingBottom: "space"
  },
  paddingLeft: "space",
  pl: {
    paddingLeft: "space"
  },
  paddingX: {
    paddingLeft: "space",
    paddingRight: "space"
  },
  px: {
    paddingLeft: "space",
    paddingRight: "space"
  },
  paddingY: {
    paddingTop: "space",
    paddingBottom: "space"
  },
  py: {
    paddingTop: "space",
    paddingBottom: "space"
  },
  border: "space",
  borderWidth: "space",
  borderColor: "color",
  borderStyle: "",
  borderRadius: "space",
  borderTop: "space",
  borderTopWidth: "space",
  borderTopColor: "color",
  borderTopStyle: "",
  borderTopLeftRadius: "space",
  borderTopRightRadius: "space",
  borderBottom: "space",
  borderBottomWidth: "space",
  borderBottomColor: "color",
  borderBottomStyle: "",
  borderBottomLeftRadius: "space",
  borderBottomRightRadius: "space",
  borderLeft: "space",
  borderLeftWidth: "space",
  borderLeftColor: "color",
  borderLeftStyle: "",
  borderRight: "space",
  borderRightWidth: "space",
  borderRightColor: "",
  borderRightStyle: "",
  borderX: {
    borderLeft: "space",
    borderRight: "space"
  },
  borderXWidth: {
    borderLeftWidth: "space",
    borderRightWidth: "space"
  },
  borderXColor: {
    borderLeftColor: "color",
    borderRightColor: ""
  },
  borderXStyle: {
    borderLeftStyle: "",
    borderRightStyle: ""
  },
  borderY: {
    borderTop: "space",
    borderBottom: "space"
  },
  borderYWidth: {
    borderTopWidth: "space",
    borderBottomWidth: "space"
  },
  borderYColor: {
    borderTopColor: "color",
    borderBottomColor: "color"
  },
  borderYStyle: {
    borderTopStyle: "",
    borderBottomStyle: ""
  },
  width: "space",
  w: {
    width: "space"
  },
  height: "space",
  h: {
    height: "space"
  },
  size: {
    width: "space",
    height: "space"
  },
  minWidth: "space",
  minW: {
    minWidth: "space"
  },
  maxWidth: "space",
  maxW: {
    maxWidth: "space"
  },
  minHeight: "space",
  minH: {
    minHeight: "space"
  },
  maxHeight: "space",
  maxH: {
    maxHeight: "space"
  },
  display: "",
  d: {
    display: ""
  },
  verticalAlign: "",
  justifyContent: {
    justifyContent: "",
    "-webkit-box-pack": "",
    "-ms-flex-pack": ""
  },
  justify: {
    justifyContent: "",
    "-webkit-box-pack": "",
    "-ms-flex-pack": ""
  },
  alignItems: {
    alignItems: "",
    "-webkit-box-align": "",
    "-ms-flex-align": ""
  },
  align: {
    alignItems: "",
    "-webkit-box-align": "",
    "-ms-flex-align": ""
  },
  alignContent: {
    alignContent: "",
    "-ms-flex-line-pack": ""
  },
  flexDirection: {
    flexDirection: "",
    "-webkit-box-orient": "",
    "-webkit-box-direction": "",
    "-ms-flex-direction": ""
  },
  direction: {
    flexDirection: "",
    "-webkit-box-orient": "",
    "-webkit-box-direction": "",
    "-ms-flex-direction": ""
  },
  flex: {
    flex: "",
    "webkit-box-flex": "",
    "webkit-flex": "",
    "-mx-flex": ""
  },
  flexWrap: {
    flexWrap: "",
    "-ms-flex-wrap": ""
  },
  wrap: {
    flexWrap: "",
    "-ms-flex-wrap": ""
  },
  flexBasis: {
    flexBasis: "",
    "-mx-flex": "",
    "-ms-flex-preferred-size": ""
  },
  flexGrow: {
    flexGrow: "",
    "-webkit-box-flex": "",
    "-ms-flex-positive": ""
  },
  flexShrink: {
    flexShrink: "",
    "-ms-flex-negative": ""
  },
  alignSelf: {
    alignSelf: "",
    "-ms-grid-row-align": ""
  },
  justifySelf: {
    justifySelf: "",
    "-ms-grid-column-align": ""
  },
  order: {
    order: "",
    "-webkit-box-ordinal-group": "",
    "-ms-flex-order": ""
  },
  gridGap: "space",
  gridRowGap: "space",
  gridColumnGap: "space",
  gridColumn: "",
  gridRow: "",
  gridArea: "",
  gridAutoFlow: "",
  gridAutoRows: "",
  gridAutoColumns: "",
  gridTemplateRows: {
    gridTemplateRows: "",
    "-ms-grid-rows": ""
  },
  gridTemplateColumns: {
    gridTemplateColumns: "",
    "-ms-grid-columns": ""
  },
  gridTemplateAreas: "",
  position: "",
  top: "space",
  right: "space",
  bottom: "space",
  left: "space",
  zIndex: "zIndices",
  overflow: "",
  overflowX: "",
  overflowY: "",
  color: "color",
  background: "color",
  bg: {
    background: "color"
  },
  opacity: "",
  backgroundAttachment: "",
  backgroundClip: {
    backgroundClip: "",
    "-webkit-background-clip": ""
  },
  backgroundColor: "color",
  backgroundImage: "",
  backgroundOrigin: "",
  backgroundPositionX: "space",
  backgroundPositionY: "space",
  backgroundSize: "space",
  backdropFilter: {
    backdropFilter: "",
    "-webkit-backdropFilter": ""
  },
  boxShadow: {
    boxShadow: "",
    "-webkit-box-shadow": ""
  },
  outline: "",
  outlineColor: "color",
  outlineOffset: "space",
  outlineStyle: "",
  outlineWidth: "space",
  visibility: "",
  fontFamily: "",
  fontSize: "fontSize",
  fontWeight: "",
  lineHeight: "",
  letterSpacing: "",
  textAlign: "",
  fontStyle: "",
  textDecoration: "",
  textTransform: "",
  textShadow: "",
  whiteSpace: "",
  wordWrap: "",
  wordBreak: "",
  fill: "",
  filter: {
    filter: "",
    "-webkit-filter": ""
  },
  stroke: "",
  transition: {
    transition: "",
    "-o-transition": "",
    "-webkit-transition": ""
  },
  transform: {
    transform: "",
    "-ms-transform": "",
    "-webkit-transform": ""
  },
  cursor: "",
  resize: "",
  objectFit: {
    objectFit: "",
    "-o-object-fit": ""
  },
  userSelect: {
    userSelect: "",
    "-webkit-user-select": "",
    "-moz-user-select": "",
    "-ms-user-select": ""
  },
  appearance: {
    appearance: "",
    "-webkit-appearance": ""
  },
  pointerEvents: "",
  content: ""
};

const pseudoSelectors = {
  _active: "&:active, &[data-active]",
  _activeLink: "&[aria-current=page]",
  _after: "&::after",
  _autofill: "&:-webkit-autofill",
  _before: "&::before",
  _checked: "&[aria-checked=true], &[data-checked]",
  _empty: "&:empty",
  _even: "&:nth-of-type(even)",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _first: "&:first-of-type",
  _focus: "&:focus, &[data-focus]",
  _focusVisible: "&:focus-visible",
  _focusWithin: "&:focus-within",
  _fullScreen: "&:fullscreen",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _hidden: "&[hidden], &[data-hidden]",
  _highlighted: "&[data-highlighted]",
  _hover: "&:hover, &[data-hover]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _last: "&:last-of-type",
  _loading: "&[data-loading], &[aria-busy=true]",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _odd: "&:nth-of-type(odd)",
  _placeholder: "&::placeholder",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _selection: "&::selection",
  _valid: "&[data-valid], &[data-state=valid]",
  _visited: "&:visited"
};

function createStyleString(parsedCssProps: LayoutProps, breakpoint = 0, remBase = 10): string {
  function toCssProperty(JsSyntax: string): string {
    return JsSyntax.replace(/([A-Z])/g, `-$1`).toLowerCase();
  }
  
  function parseCssVariables(val: string | number) {
    return val.toString().replace(/^--.+/, (match) => `var(${match})`).replace(/^$/, "''");
  }
  
  function parseCssSizes(val: number | string, type: "" | "fontSize" | "space"): string {
    if (typeof val === "string") {
      return val.replace(/([\d.]+)px/gi, (match) => `${parseFloat(match) / remBase}rem`);
    }
    if (typeof val === "number" && val >= 0 && val < cfg[type].length) {
      return `${cfg[type][val] / remBase}rem`;
    }
    if (typeof val === "number" && val < 0 && val * -1 < cfg[type].length) {
      return `-${cfg[type][val * -1] / remBase}rem`;
    }
    if (typeof val === "number") {
      return `${val / remBase}rem`;
    }
  }
  
  function getResponsiveValue(val: string | number | (string | number)[], bp: number) {
    if (!Array.isArray(val)) return val;
    return val[val.length - 1 >= bp ? bp : val.length - 1];
  }
  
  function toCssValue(key: "" | "fontSize" | "space", val: string | number): string {
    if (cfg[key]) {
      return parseCssVariables(parseCssSizes(val, key));
    }
    return parseCssVariables(val);
  }
  
  return Object.entries(parsedCssProps).reduce((acc, [key, val]) => {
    if (breakpoint === 0) {
      if ((key === "display" || key === "d") && getResponsiveValue(val, breakpoint) === "flex") {
        acc += `display:-webkit-box;`;
        acc += `display:-webkit-flex;`;
        acc += `display:-ms-flexbox;`;
        acc += `display:flex;`;
      } else if (typeof cssSelectors[key] === "string") {
        acc += `${toCssProperty(key)}:${toCssValue(cssSelectors[key], getResponsiveValue(val, breakpoint))};`;
      } else if (cssSelectors[key] !== undefined) {
        Object.entries(cssSelectors[key]).forEach(([key2, val2]: [string, "" | "fontSize" | "space"]) => {
          acc += `${toCssProperty(key2)}:${toCssValue(val2, getResponsiveValue(val, breakpoint))};`;
        });
      }
    } else if (Array.isArray(val) && val.length - 1 >= breakpoint) {
      if ((key === "display" || key === "d") && getResponsiveValue(val, breakpoint) === "flex") {
        acc += `${toCssProperty(key)}:webkit-box;`;
        acc += `${toCssProperty(key)}:-webkit-flex;`;
        acc += `${toCssProperty(key)}:-ms-flexbox;`;
        acc += `${toCssProperty(key)}:flex;`;
      } else if (typeof cssSelectors[key] === "string") {
        acc += `${toCssProperty(key)}:${toCssValue(cssSelectors[key], getResponsiveValue(val, breakpoint))};`;
      } else if (cssSelectors[key] !== undefined) {
        Object.entries(cssSelectors[key]).forEach(([key2, val2]: [string, "" | "fontSize" | "space"]) => {
          acc += `${toCssProperty(key2)}:${toCssValue(val2, getResponsiveValue(val, breakpoint))};`;
        });
      }
    }
    return acc;
  }, "");
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useCreateStyles(props: any, config = cfg): { id?: string; styles?: JSX.Element; filteredProps? } {
  const filteredProps = useMemo(() => Object.entries(props).reduce((a, [k, v]) => {
    if (cssSelectors[k] === undefined && pseudoSelectors[k] === undefined) {
      return { ...a, [k]: v };
    }
    return a;
  }, {}), [props]);
  const cssProps = useMemo(() => Object.entries(props).reduce((a, [k, v]) => {
    if (cssSelectors[k] !== undefined && pseudoSelectors[k] === undefined) {
      return { ...a, [k]: v };
    }
    return a;
  }, {}), [props]);
  const pseudoProps = useMemo(() => Object.entries(props).reduce((a, [k, v]) => {
    if (cssSelectors[k] === undefined && pseudoSelectors[k] !== undefined) {
      return { ...a, [k]: v };
    }
    return a;
  }, {}), [props]);
  
  const base = config.breakpoints.map((bp, i) => createStyleString(cssProps, i, config.remBase) && `${i !== 0 ?  `@media screen and (min-width: ${bp}px){`:``}&{${createStyleString(cssProps, i, config.remBase)}}${i !== 0 ?  `}`:''}`).join('')
  const pseudo = Object.entries(pseudoProps).map(([k, v]) => config.breakpoints.map((bp, i) => createStyleString(v, i, config.remBase) && `${i !== 0 ?  `@media screen and (min-width: ${bp}px){`:``}${pseudoSelectors[k]}{${createStyleString(v, i, config.remBase)}}${i !== 0 ?  `}`:''}`).join('')).join('');
  const id = (base + pseudo) !== "" ? String(hashString(base + pseudo)) : undefined;
  const style = (base + pseudo).replace(/&/g, `.jsx-${id}`);
  
  // eslint-disable-next-line react/jsx-pascal-case
  return { id: id ? `jsx-${id}` : undefined, styles: id ? <_JSXStyle id={id}>{style}</_JSXStyle> : undefined, filteredProps }
}