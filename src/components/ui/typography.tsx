// Utils.
import { cn } from '@/lib/utils';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
type SpanProps = React.HTMLAttributes<HTMLSpanElement>;

export function H1({ children, className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn('font-heading text-primary-light text-[57px] leading-14', className)}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn('font-heading text-primary-light text-[43px] leading-11', className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: HeadingProps) {
  return (
    <h3 className={cn('text-primary-light text-[24px] leading-8', className)} {...props}>
      {children}
    </h3>
  );
}

export function Big({ children, className, ...props }: HeadingProps) {
  return (
    <h2 className={cn('font-heading text-[28px]', className)} {...props}>
      {children}
    </h2>
  );
}

export function Small({ children, className, ...props }: SpanProps) {
  return (
    <span className={cn('text-[12px]', className)} {...props}>
      {children}
    </span>
  );
}

export function P({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={cn('text-justify leading-6', className)} {...props}>
      {children}
    </p>
  );
}
