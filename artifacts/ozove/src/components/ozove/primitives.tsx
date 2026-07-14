import type { ReactNode } from 'react';
import { Check, Activity, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PlasmaText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn('text-plasma font-display', className)}>
      {children}
    </span>
  );
}

export function MonoLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'font-mono text-xs uppercase tracking-widest text-muted-foreground',
        className,
      )}
    >
      {children}
    </div>
  );
}

type Status = 'live' | 'shipped' | 'in qa' | 'building';

const STATUS_COLORS: Record<Status, string> = {
  live: 'text-[#3b82f6] border-[#3b82f6]/30 bg-[#3b82f6]/10',
  shipped: 'text-muted-foreground border-border bg-muted/50',
  'in qa': 'text-[#a855f7] border-[#a855f7]/30 bg-[#a855f7]/10',
  building: 'text-[#f59e0b] border-[#f59e0b]/30 bg-[#f59e0b]/10',
};

export function StatusTag({ status }: { status: Status }) {
  return (
    <span
      className={cn(
        'px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border rounded-full flex items-center gap-1.5 w-fit',
        STATUS_COLORS[status],
      )}
    >
      {status === 'live' && (
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
      )}
      {status === 'shipped' && <Check className="w-3 h-3" />}
      {status === 'in qa' && <Activity className="w-3 h-3" />}
      {status === 'building' && <Loader2 className="w-3 h-3 animate-spin" />}
      {status}
    </span>
  );
}
