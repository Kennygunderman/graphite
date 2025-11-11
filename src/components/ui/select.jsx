import { cn } from '../../lib/utils'

export function Select({ className, ...props }) {
  return (
    <select
      className={cn(
        'h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}


