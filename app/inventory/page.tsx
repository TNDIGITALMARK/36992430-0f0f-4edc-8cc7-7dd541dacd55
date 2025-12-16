'use client';

import { useState } from 'react';
import { Package, Search, Filter, Plus, TrendingUp, AlertTriangle } from 'lucide-react';
import { mockInventoryItems, getInventoryByCategory } from '@/lib/data/mock-data';
import { StatusBadge } from '@/components/crm/status-badge';
import { StatCard } from '@/components/crm/stat-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategory Filter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Calculate stats
  const totalItems = mockInventoryItems.reduce((sum, item) => sum + item.total_quantity, 0);
  const availableItems = mockInventoryItems.reduce((sum, item) => sum + item.available_quantity, 0);
  const checkedOutItems = mockInventoryItems.reduce((sum, item) => sum + item.checked_out_quantity, 0);
  const lowStockCount = mockInventoryItems.filter(item => item.status === 'low_stock').length;

  // Get unique categories
  const categories = Array.from(new Set(mockInventoryItems.map(item => item.category)));

  // Filter inventory
  const filteredInventory = mockInventoryItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Live Inventory Dashboard</h1>
              <p className="mt-2 text-muted-foreground">
                Real-time product catalog with availability tracking
              </p>
            </div>
            <Button size="lg" className="gap-2">
              <Plus className="h-4 w-4" />
              Add New Item
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Items"
            value={totalItems.toLocaleString()}
            description="Across all categories"
            icon={Package}
          />
          <StatCard
            title="Available"
            value={availableItems.toLocaleString()}
            description="Ready to rent"
            icon={TrendingUp}
            trend={{ value: '12%', positive: true }}
          />
          <StatCard
            title="Checked Out"
            value={checkedOutItems.toLocaleString()}
            description="Currently rented"
            icon={Package}
          />
          <StatCard
            title="Low Stock Alerts"
            value={lowStockCount}
            description="Items need attention"
            icon={AlertTriangle}
          />
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="low_stock">Low Stock</SelectItem>
                <SelectItem value="unavailable">Unavailable</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredInventory.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
            >
              {/* Item Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={item.image_url || '/placeholder-product.jpg'}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <StatusBadge status={item.status} />
                </div>
              </div>

              {/* Item Details */}
              <div className="p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="font-semibold leading-tight">{item.name}</h3>
                </div>
                <p className="mb-3 text-xs text-muted-foreground line-clamp-2">
                  {item.description}
                </p>

                <div className="mb-3 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">SKU:</span>
                    <span className="font-mono font-medium">{item.sku}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{item.category}</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="mb-4 rounded-md bg-muted p-3">
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="font-medium">
                      {item.available_quantity} / {item.total_quantity}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-background">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{
                        width: `${(item.available_quantity / item.total_quantity) * 100}%`
                      }}
                    />
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Checked Out: </span>
                      <span className="font-medium">{item.checked_out_quantity}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Damaged: </span>
                      <span className="font-medium">{item.damaged_quantity}</span>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-4 flex justify-between border-t pt-3">
                  <div>
                    <div className="text-xs text-muted-foreground">Rental/Day</div>
                    <div className="text-lg font-bold">${item.rental_price_per_day}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Replacement</div>
                    <div className="text-sm font-semibold text-muted-foreground">
                      ${item.replacement_cost}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" className="flex-1">
                    Add to Booking
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredInventory.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
            <Package className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">No items found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
