import { cn } from '../../lib/utils'

export function Badge({ className, variant = 'default', ...props }) {
  const variants = {
    default: 'bg-gray-100 text-gray-800 border-gray-200',
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    violet: 'bg-violet-100 text-violet-800 border-violet-200',
    slate: 'bg-slate-100 text-slate-800 border-slate-200',
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


