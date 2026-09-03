export function mergeProps<T extends string | React.ElementType = "button">(
  ...args: (Record<string, any> | undefined)[]
): any {
  const result: Record<string, any> = {};

  for (const props of args) {
    if (!props) continue;
    for (const key of Object.keys(props)) {
      const val = props[key];
      if (key === "className") {
        result.className = [result.className, val].filter(Boolean).join(" ");
      } else if (key.startsWith("on") && typeof val === "function") {
        const existing = result[key];
        result[key] = existing
          ? (...eventArgs: any[]) => {
              existing(...eventArgs);
              val(...eventArgs);
            }
          : val;
      } else {
        result[key] = val;
      }
    }
  }

  return result;
}
