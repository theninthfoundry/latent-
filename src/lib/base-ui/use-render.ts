import React from "react";

export function useRender({
  defaultTagName = "button",
  props = {},
  render,
}: {
  defaultTagName?: string;
  props?: Record<string, any>;
  render?: React.ReactElement | ((props: any) => React.ReactNode);
}) {
  if (typeof render === "function") {
    return render(props);
  }

  if (React.isValidElement(render)) {
    return React.cloneElement(render, {
      ...props,
      ...(render.props as Record<string, any>),
      className: [props.className, (render.props as any)?.className]
        .filter(Boolean)
        .join(" "),
    });
  }

  return React.createElement(defaultTagName, props);
}

export namespace useRender {
  export type ComponentProps<T extends React.ElementType> =
    React.ComponentPropsWithRef<T> & {
      render?: React.ReactElement | ((props: any) => React.ReactNode);
    };
}
