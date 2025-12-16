'use client';

import { useState } from 'react';
import { Calendar, Users, Plus, DollarSign, Clock, MapPin } from 'lucide-react';
import { mockBookings, mockClients } from '@/lib/data/mock-data';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function BookingsPage() {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate stats
  const totalBookings = mockBookings.length;
  const confirmedBookings = mockBookings.filter(b => b.status === 'confirmed').length;
  const totalRevenue = mockBookings.reduce((sum, b) => sum + b.total_amount, 0);
  const outstandingBalance = mockBookings.reduce((sum, b) => sum + b.balance_due, 0);

  // Filter bookings
  const filteredBookings = mockBookings.filter(booking => {
    const client = mockClients.find(c => c.id === booking.client_id);
    const matchesSearch = booking.event_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.booking_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client?.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getClientName = (clientId: string) => {
    return mockClients.find(c => c.id === clientId)?.name || 'Unknown Client';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Client Booking Portal</h1>
              <p className="mt-2 text-muted-foreground">
                Manage bookings, process payments, and track events
              </p>
            </div>
            <Button size="lg" className="gap-2">
              <Plus className="h-4 w-4" />
              Create New Booking
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Bookings"
            value={totalBookings}
            description="Active and completed"
            icon={Calendar}
            trend={{ value: '8%', positive: true }}
          />
          <StatCard
            title="Confirmed"
            value={confirmedBookings}
            description="Ready to process"
            icon={Users}
          />
          <StatCard
            title="Total Revenue"
            value={`$${totalRevenue.toLocaleString()}`}
            description="All time"
            icon={DollarSign}
            trend={{ value: '15%', positive: true }}
          />
          <StatCard
            title="Outstanding"
            value={`$${outstandingBalance.toLocaleString()}`}
            description="Payment pending"
            icon={Clock}
          />
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 items-center gap-4">
            <Input
              placeholder="Search bookings, clients, or events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="confirmed">Confirmed</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="rounded-lg border bg-card shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking #</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Event Date</TableHead>
                <TableHead>Pickup / Return</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-right">Balance Due</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono font-medium">
                    {booking.booking_number}
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{getClientName(booking.client_id)}</div>
                      {booking.delivery_address && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span className="line-clamp-1">{booking.delivery_address}</span>
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{booking.event_name}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {formatDate(booking.event_date)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-xs">
                      <div className="text-muted-foreground">
                        Pickup: {formatDate(booking.pickup_date)}
                      </div>
                      <div className="text-muted-foreground">
                        Return: {formatDate(booking.return_date)}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <StatusBadge status={booking.status} />
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    ${booking.total_amount.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right">
                    {booking.balance_due > 0 ? (
                      <span className="font-semibold text-amber-600">
                        ${booking.balance_due.toLocaleString()}
                      </span>
                    ) : (
                      <span className="text-green-600 font-medium">Paid</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      {booking.balance_due > 0 && (
                        <Button size="sm">
                          Process Payment
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Empty State */}
        {filteredBookings.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
            <Calendar className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">No bookings found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search or create a new booking
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
