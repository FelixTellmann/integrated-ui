import { Property as CSS } from "csstype";
import React, { useMemo } from "react";
import hashString from "string-hash";

export type LayoutProps = {
  margin?: (CSS.Margin | number) | (CSS.Margin | number)[]
  m?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginTop?: (CSS.Margin | number) | (CSS.Margin | number)[]
  mt?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginRight?: (CSS.Margin | number) | (CSS.Margin | number)[]
  mr?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginBottom?: (CSS.Margin | number) | (CSS.Margin | number)[]
  mb?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginLeft?: (CSS.Margin | number) | (CSS.Margin | number)[]
  ml?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginX?: (CSS.Margin | number) | (CSS.Margin | number)[]
  mx?: (CSS.Margin | number) | (CSS.Margin | number)[]
  marginY?: (CSS.Margin | number) | (CSS.Margin | number)[]
  my?: (CSS.Margin | number) | (CSS.Margin | number)[]
  padding?: (CSS.Padding | number) | (CSS.Padding | number)[]
  p?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingTop?: (CSS.Padding | number) | (CSS.Padding | number)[]
  pt?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingRight?: (CSS.Padding | number) | (CSS.Padding | number)[]
  pr?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingBottom?: (CSS.Padding | number) | (CSS.Padding | number)[]
  pb?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingLeft?: (CSS.Padding | number) | (CSS.Padding | number)[]
  pl?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingX?: (CSS.Padding | number) | (CSS.Padding | number)[]
  px?: (CSS.Padding | number) | (CSS.Padding | number)[]
  paddingY?: (CSS.Padding | number) | (CSS.Padding | number)[]
  py?: (CSS.Padding | number) | (CSS.Padding | number)[]
  border?: (CSS.Border | number) | (CSS.Border | number)[]
  borderWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderColor?: CSS.BorderColor | CSS.BorderColor[]
  borderStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderRadius?: (CSS.BorderRadius | number) | (CSS.BorderRadius | number)[]
  borderTop?: (CSS.Border | number) | (CSS.Border | number)[]
  borderTopWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderTopColor?: CSS.BorderColor | CSS.BorderColor[]
  borderTopStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderTopLeftRadius?: (CSS.BorderRadius | number) | (CSS.BorderRadius | number)[]
  borderTopRightRadius?: (CSS.BorderRadius | number) | (CSS.BorderRadius | number)[]
  borderBottom?: (CSS.Border | number) | (CSS.Border | number)[]
  borderBottomWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderBottomColor?: CSS.BorderColor | CSS.BorderColor[]
  borderBottomStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderBottomLeftRadius?: (CSS.BorderRadius | number) | (CSS.BorderRadius | number)[]
  borderBottomRightRadius?: (CSS.BorderRadius | number) | (CSS.BorderRadius | number)[]
  borderLeft?: (CSS.Border | number) | (CSS.Border | number)[]
  borderLeftWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderLeftColor?: CSS.BorderColor | CSS.BorderColor[]
  borderLeftStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderRight?: (CSS.Border | number) | (CSS.Border | number)[]
  borderRightWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderRightColor?: CSS.BorderColor | CSS.BorderColor[]
  borderRightStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderX?: (CSS.Border | number) | (CSS.Border | number)[]
  borderXWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderXColor?: CSS.BorderColor | CSS.BorderColor[]
  borderXStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  borderY?: (CSS.Border | number) | (CSS.Border | number)[]
  borderYWidth?: (CSS.BorderWidth | number) | (CSS.BorderWidth | number)[]
  borderYColor?: CSS.BorderColor | CSS.BorderColor[]
  borderYStyle?: CSS.BorderStyle | CSS.BorderStyle[]
  width?: (CSS.Width | number) | (CSS.Width | number)[]
  w?: (CSS.Width | number) | (CSS.Width | number)[]
  height?: (CSS.Height | number) | (CSS.Height | number)[]
  h?: (CSS.Height | number) | (CSS.Height | number)[]
  size?: (CSS.Width | number) | (CSS.Width | number)[]
  minWidth?: (CSS.MinWidth | number) | (CSS.MinWidth | number)[]
  minW?: (CSS.MinWidth | number) | (CSS.MinWidth | number)[]
  maxWidth?: (CSS.MaxWidth | number) | (CSS.MaxWidth | number)[]
  maxW?: (CSS.MaxWidth | number) | (CSS.MaxWidth | number)[]
  minHeight?: (CSS.MinHeight | number) | (CSS.MinHeight | number)[]
  minH?: (CSS.MinHeight | number) | (CSS.MinHeight | number)[]
  maxHeight?: (CSS.MaxHeight | number) | (CSS.MaxHeight | number)[]
  maxH?: (CSS.MaxHeight | number) | (CSS.MaxHeight | number)[]
  display?: CSS.Display | CSS.Display[]
  d?: CSS.Display | CSS.Display[]
  verticalAlign?: CSS.VerticalAlign | CSS.VerticalAlign[]
  justifyContent?: CSS.JustifyContent | CSS.JustifyContent[]
  justify?: CSS.JustifyContent | CSS.JustifyContent[]
  alignItems?: CSS.AlignItems | CSS.AlignItems[]
  align?: CSS.AlignItems | CSS.AlignItems[]
  alignContent?: CSS.AlignContent | CSS.AlignContent[]
  flexDirection?: CSS.FlexDirection | CSS.FlexDirection[]
  direction?: CSS.FlexDirection | CSS.FlexDirection[]
  flex?: (CSS.Flex | number) | (CSS.Flex | number)[]
  flexWrap?: CSS.FlexWrap | CSS.FlexWrap[]
  wrap?: CSS.FlexWrap | CSS.FlexWrap[]
  flexBasis?: CSS.FlexBasis | CSS.FlexBasis[]
  flexGrow?: CSS.FlexGrow | CSS.FlexGrow[]
  flexShrink?: CSS.FlexShrink | CSS.FlexShrink[]
  alignSelf?: CSS.AlignSelf | CSS.AlignSelf[]
  justifySelf?: CSS.JustifySelf | CSS.JustifySelf[]
  order?: (CSS.Order | number) | (CSS.Order | number)[]
  gridGap?: CSS.GridGap | CSS.GridGap[]
  gridRowGap?: CSS.GridRowGap | CSS.GridRowGap[]
  gridColumnGap?: CSS.GridColumnGap | CSS.GridColumnGap[]
  gridColumn?: CSS.GridColumn | CSS.GridColumn[]
  gridRow?: CSS.GridRow | CSS.GridRow[]
  gridArea?: CSS.GridArea | CSS.GridArea[]
  gridAutoFlow?: CSS.GridAutoFlow | CSS.GridAutoFlow[]
  gridAutoRows?: CSS.GridAutoRows | CSS.GridAutoRows[]
  gridAutoColumns?: CSS.GridAutoColumns | CSS.GridAutoColumns[]
  gridTemplateRows?: CSS.GridTemplateRows | CSS.GridTemplateRows[]
  gridTemplateColumns?: CSS.GridTemplateColumns | CSS.GridTemplateColumns[]
  gridTemplateAreas?: CSS.GridTemplateAreas | CSS.GridTemplateAreas[]
  position?: CSS.Position | CSS.Position[]
  top?: (CSS.Top | number) | (CSS.Top | number)[]
  right?: (CSS.Right | number) | (CSS.Right | number)[]
  bottom?: (CSS.Bottom | number) | (CSS.Bottom | number)[]
  left?: (CSS.Left | number) | (CSS.Left | number)[]
  zIndex?: (CSS.ZIndex | number) | (CSS.ZIndex | number)[]
  overflow?: CSS.Overflow | CSS.Overflow[]
  overflowX?: CSS.OverflowX | CSS.OverflowX[]
  overflowY?: CSS.OverflowY | CSS.OverflowY[]
  color?: CSS.Color | CSS.Color[]
  background?: CSS.Background | CSS.Background[]
  bg?: CSS.Background | CSS.Background[]
  opacity?: (CSS.Opacity | number) | (CSS.Opacity | number)[]
  backgroundAttachment?: CSS.BackgroundAttachment | CSS.BackgroundAttachment[]
  backgroundClip?: CSS.BackgroundClip | CSS.BackgroundClip[]
  backgroundColor?: CSS.BackgroundClip | CSS.BackgroundClip[]
  backgroundImage?: CSS.BackgroundImage | CSS.BackgroundImage[]
  backgroundOrigin?: (CSS.BackgroundOrigin | number) | (CSS.BackgroundOrigin | number)[]
  backgroundPositionX?: (CSS.BackgroundPositionX | number) | (CSS.BackgroundPositionX | number)[]
  backgroundPositionY?: (CSS.BackgroundPositionY | number) | (CSS.BackgroundPositionY | number)[]
  backgroundSize?: (CSS.BackgroundSize | number) | (CSS.BackgroundSize | number)[]
  backdropFilter?: CSS.BackdropFilter | CSS.BackdropFilter[]
  boxShadow?: CSS.BoxShadow | CSS.BoxShadow[]
  outline?: CSS.Outline | CSS.Outline[]
  outlineColor?: CSS.OutlineColor | CSS.OutlineColor[]
  outlineOffset?: (CSS.OutlineOffset | number) | (CSS.OutlineOffset | number)[]
  outlineStyle?: CSS.OutlineStyle | CSS.OutlineStyle[]
  outlineWidth?: (CSS.OutlineWidth | number) | (CSS.OutlineWidth | number)[]
  visibility?: CSS.Visibility | CSS.Visibility[]
  fontFamily?: CSS.FontFamily | CSS.FontFamily[]
  fontSize?: (CSS.FontSize | number) | (CSS.FontSize | number)[]
  fontWeight?: (CSS.FontWeight | number) | (CSS.FontWeight | number)[]
  lineHeight?: (CSS.LineHeight | number) | (CSS.LineHeight | number)[]
  letterSpacing?: (CSS.LetterSpacing | number) | (CSS.LetterSpacing | number)[]
  textAlign?: CSS.TextAlign | CSS.TextAlign[]
  fontStyle?: CSS.FontStyle | CSS.FontStyle[]
  textDecoration?: CSS.TextDecoration | CSS.TextDecoration[]
  textTransform?: CSS.TextTransform | CSS.TextTransform[]
  textShadow?: CSS.TextShadow | CSS.TextShadow[]
  whiteSpace?: CSS.WhiteSpace | CSS.WhiteSpace[]
  wordWrap?: CSS.WordWrap | CSS.WordWrap[]
  wordBreak?: CSS.WordBreak | CSS.WordBreak[]
  fill?: CSS.Fill | CSS.Fill[]
  filter?: CSS.Filter | CSS.Filter[]
  stroke?: CSS.Stroke | CSS.Stroke[]
  transition?: CSS.Transition | CSS.Transition[]
  transform?: CSS.Transform | CSS.Transform[]
  cursor?: CSS.Cursor | CSS.Cursor[]
  resize?: CSS.Resize | CSS.Resize[]
  objectFit?: CSS.ObjectFit | CSS.ObjectFit[]
  userSelect?: CSS.UserSelect | CSS.UserSelect[]
  appearance?: CSS.Appearance | CSS.Appearance[]
  pointerEvents?: CSS.PointerEvents | CSS.PointerEvents[]
  content?: CSS.Content | CSS.PointerEvents[]
}

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
    "-ms-flex-pack": "",
    "-webkit-box-pack": "",
    justifyContent: ""
  },
  justify: {
    "-webkit-box-pack": "",
    "-ms-flex-pack": "",
    justifyContent: ""
  },
  alignItems: {
    "-ms-flex-align": "",
    "-webkit-box-align": "",
    alignItems: ""
  },
  align: {
    "-ms-flex-align": "",
    "-webkit-box-align": "",
    alignItems: ""
  },
  alignContent: {
    "-ms-flex-line-pack": "",
    alignContent: ""
  },
  flexDirection: {
    "-ms-flex-direction": "",
    "-webkit-box-orient": "",
    "-webkit-box-direction": "",
    flexDirection: ""
  },
  direction: {
    "-ms-flex-direction": "",
    "-webkit-box-orient": "",
    "-webkit-box-direction": "",
    flexDirection: ""
  },
  flex: {
    "-mx-flex": "",
    "webkit-box-flex": "",
    "webkit-flex": "",
    flex: ""
  },
  flexWrap: {
    "-ms-flex-wrap": "",
    flexWrap: ""
  },
  wrap: {
    "-ms-flex-wrap": "",
    flexWrap: ""
  },
  flexBasis: {
    "-ms-flex-preferred-size": "",
    "-mx-flex": "",
    flexBasis: ""
  },
  flexGrow: {
    "-ms-flex-positive": "",
    "-webkit-box-flex": "",
    flexGrow: ""
  },
  flexShrink: {
    "-ms-flex-negative": "",
    flexShrink: ""
  },
  alignSelf: {
    "-ms-grid-row-align": "",
    alignSelf: ""
  },
  justifySelf: {
    "-ms-grid-column-align": "",
    justifySelf: ""
  },
  order: {
    "-ms-flex-order": "",
    "-webkit-box-ordinal-group": "",
    order: ""
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
    "-ms-grid-rows": "",
    gridTemplateRows: ""
  },
  gridTemplateColumns: {
    "-ms-grid-columns": "",
    gridTemplateColumns: ""
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
    "-webkit-background-clip": "",
    backgroundClip: ""
  },
  backgroundColor: "color",
  backgroundImage: "",
  backgroundOrigin: "",
  backgroundPositionX: "space",
  backgroundPositionY: "space",
  backgroundSize: "space",
  backdropFilter: {
    "-webkit-backdropFilter": "",
    backdropFilter: ""
  },
  boxShadow: {
    "-webkit-box-shadow": "",
    boxShadow: ""
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
    "-webkit-filter": "",
    filter: ""
  },
  stroke: "",
  transition: {
    "-o-transition": "",
    "-webkit-transition": "",
    transition: ""
  },
  transform: {
    "-ms-transform": "",
    "-webkit-transform": "",
    transform: ""
  },
  cursor: "",
  resize: "",
  objectFit: {
    "-o-object-fit": "",
    objectFit: ""
  },
  userSelect: {
    "-webkit-user-select": "",
    "-moz-user-select": "",
    "-ms-user-select": "",
    userSelect: ""
  },
  appearance: {
    "-webkit-appearance": "",
    appearance: ""
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
export function useJsxSystem(props: any, config = cfg): { id?: string; styles?: string; filteredProps? } {
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
  
  const base = config.breakpoints.map((bp, i) => createStyleString(cssProps, i, config.remBase) && `${i !== 0
                                                                                                      ? `@media screen and (min-width: ${bp}px){`
                                                                                                      : ``}&{${createStyleString(cssProps, i, config.remBase)}}${i !== 0
                                                                                                                                                                 ? `}`
                                                                                                                                                                 : ""}`).join("");
  const pseudo = Object.entries(pseudoProps).map(([k, v]) => config.breakpoints.map((bp, i) => createStyleString(v, i, config.remBase) && `${i !== 0
                                                                                                                                             ? `@media screen and (min-width: ${bp}px){`
                                                                                                                                             : ``}${pseudoSelectors[k]}{${createStyleString(v, i, config.remBase)}}${i !== 0
                                                                                                                                                                                                                     ? `}`
                                                                                                                                                                                                                     : ""}`).join("")).join("");
  const id = (base + pseudo) !== "" ? String(hashString(base + pseudo)) : undefined;
  const style = (base + pseudo).replace(/&/g, `.jsx-${id}`);
  
  // eslint-disable-next-line react/jsx-pascal-case
  return { id: id || undefined, styles: id ? style : undefined, filteredProps };
}