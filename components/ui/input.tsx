import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import WarningIcon from '../icons/warning-icon';

interface InputProps extends React.ComponentProps<'input'> {
  variant: 'default' | 'error';
}

const inputVariants = cva(
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        error:
          'focus-visible:ring-[rgb(220_38_38/0.2)] focus-visible:!border-red-600 after:content-["Hello_World"]',
        default:
          'focus-visible:ring-[rgb(68_76_231/0.2)] focus-visible:!border-indigo-700',
      },
    },
  }
);

function Input({ className, type, variant, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        data-slot="input"
        className={cn(
          'caret-neutral-900 !text-neutral-900 file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input !border-1 !border-neutral-200 flex h-10 w-full min-w-0 rounded-md border bg-neutral-50 px-[13px] py-[9px] text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          inputVariants({ variant }),
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className
        )}
        {...props}
      />
      {variant === 'error' && (
        <div className="absolute right-[13px] top-1/2 -translate-y-1/2">
          <WarningIcon />
        </div>
      )}
    </div>
  );
}

export { Input };
