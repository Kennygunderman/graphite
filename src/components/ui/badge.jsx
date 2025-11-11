import { cn } from '../../lib/utils'

export function Badge({ className, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-slate-800 text-slate-200 border-slate-700',
    blue: 'bg-blue-500/15 text-blue-300 border-blue-400/20',
    green: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/20',
    orange: 'bg-orange-500/15 text-orange-300 border-orange-400/20',
    violet: 'bg-violet-500/15 text-violet-300 border-violet-400/20',
    slate: 'bg-slate-700 text-slate-200 border-slate-600',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
        variants[variant] ?? variants.default,
        className,
      )}
      {...props}
    />
  )
}


