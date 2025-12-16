import Link from 'next/link';
import { Package, Calendar, Activity, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const dynamic = 'force-dynamic';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              AI-Powered CRM for Décor Rental
            </div>
          </div>

          <h1 className="text-5xl font-bold tracking-tight mb-6">
            Elegant Décor Rental CRM
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Streamline your décor rental business with real-time inventory tracking,
            automated booking management, and comprehensive client relationships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 text-lg px-8">
              <Link href="/inventory">
                <Package className="h-5 w-5" />
                Browse Inventory
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2 text-lg px-8">
              <Link href="/bookings">
                <Calendar className="h-5 w-5" />
                View Bookings
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <Link
            href="/inventory"
            className="group rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Package className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Live Inventory Dashboard</h3>
            <p className="text-muted-foreground mb-4">
              Visual product catalog with real-time availability tracking. Monitor stock levels,
              checked-out items, and prevent double bookings.
            </p>
            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
              Explore Inventory
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/bookings"
            className="group rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Client Booking Portal</h3>
            <p className="text-muted-foreground mb-4">
              Seamless booking management with automated invoicing, payment processing,
              and client communication tracking.
            </p>
            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
              Manage Bookings
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/operations"
            className="group rounded-xl border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:border-primary"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Operations Center</h3>
            <p className="text-muted-foreground mb-4">
              Real-time business intelligence with financial tracking, upcoming events,
              and automated alerts for low stock and overdue payments.
            </p>
            <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
              View Dashboard
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="mt-24 rounded-2xl border bg-card p-12 text-center shadow-sm">
          <h2 className="text-3xl font-bold mb-12">Built for Scale & Efficiency</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Real-Time Tracking</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Auto</div>
              <div className="text-sm text-muted-foreground">Invoice Generation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Inventory Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Secure</div>
              <div className="text-sm text-muted-foreground">Payment Processing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}