import React, { Component, ComponentProps } from 'react';

export type ButtonProps = Readonly<ComponentProps<'button'>> & {
  variant?: 'solid' | 'outline';
  intent?: 'primary' | 'neutral' | 'danger';
  busy?: boolean;
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = 'solid',
      intent = 'primary',
      busy = false,
      disabled,
      asChild = false,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    const cls = 'asfd';
    return (
      <button
        ref={ref}
        data-variant={variant}
        data-intent={intent}
        aria-busy={busy}
        disabled={busy || disabled}
        className={cls}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
