'use client';

import { useState } from 'react';
import {
  Activity, Package, Users, DollarSign, TrendingUp, TrendingDown,
  Calendar, Clock, AlertCircle, CheckCircle2
} from 'lucide-react';
import {
  mockBookings,
  mockInventoryItems,
  mockClients,
  getTotalRevenue,
  getTotalOutstanding
} from '@/lib/data/mock-data';
import { StatusBadge } from '@/components/crm/status-badge';
import { StatCard } from '@/components/crm/stat-card';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function OperationsPage() {
  // Calculate real-time metrics
  const totalRevenue = getTotalRevenue();
  const outstandingAmount = getTotalOutstanding();
  const activeBookings = mockBookings.filter(b =>
    ['confirmed', 'in_progress'].includes(b.status)
  ).length;
  const lowStockItems = mockInventoryItems.filter(item => item.status === 'low_stock');
  const checkedOutItems = mockInventoryItems.reduce((sum, item) => sum + item.checked_out_quantity, 0);

  // Get upcoming events (next 7 days)
  const today = new Date();
  const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const upcomingBookings = mockBookings.filter(booking => {
    const eventDate = new Date(booking.event_date);
    return eventDate >= today && eventDate <= nextWeek;
  }).sort((a, b) => new Date(a.event_date).getTime() - new Date(b.event_date).getTime());

  // Get recent activity
  const recentActivity = [
    {
      id: '1',
      type: 'booking',
      message: 'New booking created',
      details: 'BK-2024-003 - Birthday Celebration',
      time: '5 minutes ago',
      icon: Calendar,
      iconColor: 'text-blue-600'
    },
    {
      id: '2',
      type: 'payment',
      message: 'Payment received',
      details: '$3,780.00 from Corporate Events Plus',
      time: '2 hours ago',
      icon: DollarSign,
      iconColor: 'text-green-600'
    },
    {
      id: '3',
      type: 'inventory',
      message: 'Low stock alert',
      details: 'LED String Lights - Warm White (2 remaining)',
      time: '4 hours ago',
      icon: AlertCircle,
      iconColor: 'text-amber-600'
    },
    {
      id: '4',
      type: 'booking',
      message: 'Booking confirmed',
      details: 'BK-2024-001 - Johnson Wedding',
      time: '1 day ago',
      icon: CheckCircle2,
      iconColor: 'text-green-600'
    }
  ];

  const getClientName = (clientId: string) => {
    return mockClients.find(c => c.id === clientId)?.name || 'Unknown';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Real-Time Operations Center</h1>
                  <p className="text-muted-foreground">
                    Complete visibility across clients, inventory, and transactions
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex h-2 w-2 animate-pulse rounded-full bg-green-600" />
              <span className="text-muted-foreground">Live Updates</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value={`$${totalRevenue.toLocaleString()}`}
            description="All bookings"
            icon={DollarSign}
            trend={{ value: '23%', positive: true }}
          />
          <StatCard
            title="Active Bookings"
            value={activeBookings}
            description="Confirmed & in-progress"
            icon={Calendar}
          />
          <StatCard
            title="Outstanding Payments"
            value={`$${outstandingAmount.toLocaleString()}`}
            description="Awaiting payment"
            icon={Clock}
          />
          <StatCard
            title="Items Checked Out"
            value={checkedOutItems}
            description="Currently rented"
            icon={Package}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Events (Next 7 Days)
              </CardTitle>
              <CardDescription>
                Events scheduled for the coming week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingBookings.length > 0 ? (
                  upcomingBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="flex items-start justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="font-semibold">{booking.event_name}</span>
                          <StatusBadge status={booking.status} />
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {getClientName(booking.client_id)}
                        </div>
                        <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(booking.event_date)}
                          </span>
                          <span className="font-medium text-foreground">
                            ${booking.total_amount.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <Calendar className="mb-3 h-10 w-10 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      No upcoming events in the next 7 days
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest system events and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 rounded-lg border p-4"
                    >
                      <div className={`rounded-full bg-muted p-2 ${activity.iconColor}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.message}</div>
                        <div className="text-sm text-muted-foreground">
                          {activity.details}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Low Stock Alerts */}
          <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-400">
                <AlertCircle className="h-5 w-5" />
                Low Stock Alerts
              </CardTitle>
              <CardDescription>
                Items requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lowStockItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-900 dark:bg-amber-950/40"
                  >
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {item.available_quantity} of {item.total_quantity} available
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Restock
                    </Button>
                  </div>
                ))}
                {lowStockItems.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <CheckCircle2 className="mb-2 h-10 w-10 text-green-600" />
                    <p className="text-sm text-muted-foreground">
                      All inventory levels are healthy
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Financial Summary */}
          <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-900 dark:text-green-400">
                <DollarSign className="h-5 w-5" />
                Financial Summary
              </CardTitle>
              <CardDescription>
                Revenue and payment tracking
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border border-green-200 bg-white p-4 dark:border-green-900 dark:bg-green-950/40">
                  <div>
                    <div className="text-sm text-muted-foreground">Total Revenue</div>
                    <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-amber-200 bg-white p-4 dark:border-amber-900 dark:bg-amber-950/40">
                  <div>
                    <div className="text-sm text-muted-foreground">Outstanding</div>
                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">
                      ${outstandingAmount.toLocaleString()}
                    </div>
                  </div>
                  <Clock className="h-8 w-8 text-amber-600" />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-blue-200 bg-white p-4 dark:border-blue-900 dark:bg-blue-950/40">
                  <div>
                    <div className="text-sm text-muted-foreground">Collection Rate</div>
                    <div className="text-2xl font-bold">
                      {((1 - outstandingAmount / totalRevenue) * 100).toFixed(1)}%
                    </div>
                  </div>
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
