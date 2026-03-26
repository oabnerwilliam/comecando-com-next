import type { VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ReactNode } from "react";

import { Button, buttonVariants } from "@/components/ui/button";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
} & VariantProps<typeof buttonVariants>;

export const LinkButton = ({ href, children, className, variant, size }: LinkButtonProps) => {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};
