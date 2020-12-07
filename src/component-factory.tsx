/* eslint-disable react/jsx-fragments */
import cn from "classnames";
import { Property as CSS } from "csstype";
import React, { createElement, FC, forwardRef, Fragment } from "react";
import { useCreateStyles } from "./use-jsx-system";

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

export type PseudoSelectorProps = {
  _hover?: LayoutProps
  _active?: LayoutProps
  _activeLink?: LayoutProps
  _after?: LayoutProps
  _autofill?: LayoutProps
  _before?: LayoutProps
  _checked?: LayoutProps
  _empty?: LayoutProps
  _even?: LayoutProps
  _expanded?: LayoutProps
  _first?: LayoutProps
  _focus?: LayoutProps
  _focusVisible?: LayoutProps
  _focusWithin?: LayoutProps
  _fullScreen?: LayoutProps
  _grabbed?: LayoutProps
  _hidden?: LayoutProps
  _highlighted?: LayoutProps
  _indeterminate?: LayoutProps
  _invalid?: LayoutProps
  _last?: LayoutProps
  _loading?: LayoutProps
  _notFirst?: LayoutProps
  _notLast?: LayoutProps
  _odd?: LayoutProps
  _placeholder?: LayoutProps
  _pressed?: LayoutProps
  _readOnly?: LayoutProps
  _selected?: LayoutProps
  _selection?: LayoutProps
  _valid?: LayoutProps
  _visited?: LayoutProps
}

export type CssProps = LayoutProps & PseudoSelectorProps


type FactoryProps = {
  className?: string
  type?: string
  children?
  ref?
}

export const Factory = (as = `div`) => forwardRef<FC, FactoryProps & CssProps>(({
  type = as,
  className,
  children,
  ...props
}: FactoryProps & CssProps, ref) => {
  const { id, styles, filteredProps } = useCreateStyles(props);
  return <Fragment>
    {createElement(type, { className: cn(id, className), ...filteredProps, ref }, children)}
    {styles}
  </Fragment>;
});

export const A: FC<FactoryProps & CssProps> = Factory("a");
export const Article: FC<FactoryProps & CssProps> = Factory("article");
export const Aside: FC<FactoryProps & CssProps> = Factory("aside");
export const B: FC<FactoryProps & CssProps> = Factory("b");
export const Br: FC<FactoryProps & CssProps> = Factory("br");
export const Blockquote: FC<FactoryProps & CssProps> = Factory("blockquote");
export const Button: FC<FactoryProps & CssProps> = Factory("button");
export const Code: FC<FactoryProps & CssProps> = Factory("code");
export const Div: FC<FactoryProps & CssProps> = Factory("div");
export const Figure: FC<FactoryProps & CssProps> = Factory("figure");
export const Footer: FC<FactoryProps & CssProps> = Factory("footer");
export const Form: FC<FactoryProps & CssProps> = Factory("form");
export const H1: FC<FactoryProps & CssProps> = Factory("h1");
export const H2: FC<FactoryProps & CssProps> = Factory("h2");
export const H3: FC<FactoryProps & CssProps> = Factory("h3");
export const H4: FC<FactoryProps & CssProps> = Factory("h4");
export const H5: FC<FactoryProps & CssProps> = Factory("h5");
export const H6: FC<FactoryProps & CssProps> = Factory("h6");
export const Header: FC<FactoryProps & CssProps> = Factory("header");
export const Hr: FC<FactoryProps & CssProps> = Factory("hr");
export const I: FC<FactoryProps & CssProps> = Factory("i");
export const Input: FC<FactoryProps & CssProps> = Factory("input");
export const Label: FC<FactoryProps & CssProps> = Factory("label");
export const Li: FC<FactoryProps & CssProps> = Factory("li");
export const Main: FC<FactoryProps & CssProps> = Factory("main");
export const Mark: FC<FactoryProps & CssProps> = Factory("mark");
export const Nav: FC<FactoryProps & CssProps> = Factory("nav");
export const Ol: FC<FactoryProps & CssProps> = Factory("ol");
export const P: FC<FactoryProps & CssProps> = Factory("p");
export const Picture: FC<FactoryProps & CssProps> = Factory("picture");
export const Pre: FC<FactoryProps & CssProps> = Factory("pre");
export const Q: FC<FactoryProps & CssProps> = Factory("q");
export const S: FC<FactoryProps & CssProps> = Factory("s");
export const Section: FC<FactoryProps & CssProps> = Factory("section");
export const Select: FC<FactoryProps & CssProps> = Factory("select");
export const Small: FC<FactoryProps & CssProps> = Factory("small");
export const Span: FC<FactoryProps & CssProps> = Factory("span");
export const Strong: FC<FactoryProps & CssProps> = Factory("strong");
export const U: FC<FactoryProps & CssProps> = Factory("u");
export const Ul: FC<FactoryProps & CssProps> = Factory("ul");

