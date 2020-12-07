import cn from "classnames";
import { createElement, ElementType, FC, forwardRef } from "react";
import { CssProps, useCreateStyles } from "./use-jsx-system";

type FactoryProps = {
  className?: string
  type?: ElementType
  ref?
}

const Factory = (as = `div`) => forwardRef<FC, FactoryProps & CssProps>(({
  type = as ,
  className,
  children,
  ...props
}, ref) => {
  const { id, styles, filteredProps } = useCreateStyles(props);
  return <>
    {createElement(type, { className: cn(id, className), ...filteredProps, ref }, children)}
    {styles}
  </>;
});

export const A: FC<FactoryProps & CssProps> = Factory('a')
