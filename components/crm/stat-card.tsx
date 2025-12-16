import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, description, icon: Icon, trend, className }: StatCardProps) {
  return (
    <div className={cn('rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md', className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
        <div className="rounded-full bg-primary/10 p-3">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center text-xs">
          <span
            className={cn('font-medium', trend.positive ? 'text-green-600' : 'text-red-600')}
          >
            {trend.positive ? '↑' : '↓'} {trend.value}
          </span>
          <span className="ml-2 text-muted-foreground">from last month</span>
        </div>
      )}
    </div>
  );
}
