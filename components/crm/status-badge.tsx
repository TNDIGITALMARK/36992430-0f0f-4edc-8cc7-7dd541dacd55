import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusConfig: Record<string, { label: string; className: string }> = {
  // Inventory statuses
  available: {
    label: 'Available',
    className: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400'
  },
  low_stock: {
    label: 'Low Stock',
    className: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-400'
  },
  unavailable: {
    label: 'Unavailable',
    className: 'bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400'
  },
  discontinued: {
    label: 'Discontinued',
    className: 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900 dark:text-gray-400'
  },

  // Booking statuses
  pending: {
    label: 'Pending',
    className: 'bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400'
  },
  confirmed: {
    label: 'Confirmed',
    className: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-400'
  },
  in_progress: {
    label: 'In Progress',
    className: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-400'
  },
  completed: {
    label: 'Completed',
    className: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400'
  },
  cancelled: {
    label: 'Cancelled',
    className: 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900 dark:text-gray-400'
  },

  // Client statuses
  active: {
    label: 'Active',
    className: 'bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400'
  },
  inactive: {
    label: 'Inactive',
    className: 'bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900 dark:text-gray-400'
  }
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status] || {
    label: status,
    className: 'bg-gray-50 text-gray-700 border-gray-200'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
