import * as ScrollPrimitive from "@radix-ui/react-scroll-area";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function ScrollArea({
  className,
  children,
  ...props
}: ComponentProps<typeof ScrollPrimitive.Root>) {
  return (
    <ScrollPrimitive.Root className={cn("overflow-hidden", className)} {...props}>
      <ScrollPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollPrimitive.Viewport>
      <ScrollPrimitive.Scrollbar
        orientation="vertical"
        className="flex w-2 touch-none select-none p-0.5"
      >
        <ScrollPrimitive.Thumb className="relative flex-1 rounded-full bg-border-strong" />
      </ScrollPrimitive.Scrollbar>
    </ScrollPrimitive.Root>
  );
}
