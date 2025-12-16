# Décor Rental CRM System

## 🎯 Overview

A modern, AI-powered CRM system designed specifically for décor rental companies. The platform provides real-time inventory management, automated booking processing, comprehensive client relationship tracking, and intelligent financial management.

## ✨ Features Implemented

### 1. **Live Inventory Dashboard** (`/inventory`)
- **Real-time product catalog** with visual cards displaying all rental items
- **Availability tracking** showing total, available, and checked-out quantities
- **Smart filtering** by category, status, and search terms
- **Status indicators**: Available (green), Low Stock (amber), Unavailable (red)
- **Pricing display**: Rental price per day and replacement costs
- **Stock progress bars** for quick visual assessment
- **Product images** with hover effects
- **Category organization** for easy browsing

### 2. **Client Booking Portal** (`/bookings`)
- **Comprehensive booking table** with all essential booking information
- **Client management** with contact details and booking history
- **Event tracking** with pickup/return dates
- **Financial summary** showing totals, payments, and outstanding balances
- **Status management**: Pending, Confirmed, In Progress, Completed, Cancelled
- **Payment processing** interface for collecting deposits and full payments
- **Search and filter** capabilities across bookings, clients, and events

### 3. **Real-Time Operations Center** (`/operations`)
- **Business intelligence dashboard** with key metrics
- **Upcoming events calendar** (next 7 days view)
- **Recent activity feed** tracking system events
- **Low stock alerts** with automatic notifications
- **Financial summary cards** showing revenue, outstanding payments, and collection rates
- **Real-time status indicators** for live data updates
- **Color-coded alert cards** for different priority levels

## 🗂️ Database Schema

### Core Tables Created:

1. **inventory_items**
   - Product catalog with SKU, categories, pricing
   - Real-time quantity tracking (total, available, checked-out, damaged)
   - Rental pricing and replacement costs
   - Image URLs and descriptions

2. **clients**
   - Complete client profiles with contact information
   - Addresses and company details
   - Payment terms and credit limits
   - Status tracking (active, inactive, blacklisted)

3. **bookings**
   - Event information and scheduling
   - Pickup and return date tracking
   - Delivery addresses and notes
   - Financial totals and payment tracking
   - Status workflow management

4. **booking_items**
   - Line items for each booking
   - Quantity and pricing per item
   - Damage/loss tracking
   - Link between bookings and inventory

5. **invoices**
   - Automated invoice generation
   - Multiple invoice types (rental, damage, replacement)
   - Payment status tracking
   - Due date management

6. **payments**
   - Payment transaction records
   - Multiple payment methods supported
   - Transaction ID tracking
   - Payment status management

7. **stock_movements**
   - Complete audit trail for inventory
   - Check-out and return tracking
   - Damage and loss logging
   - Condition reporting

## 🎨 Design System

### Color Palette
- **Primary Blue**: `hsl(217, 91%, 60%)` - Professional, trustworthy
- **Success Green**: `hsl(142, 76%, 45%)` - Available inventory
- **Warning Amber**: `hsl(38, 92%, 50%)` - Low stock alerts
- **Error Red**: `hsl(0, 84%, 60%)` - Unavailable items
- **Info Blue**: `hsl(199, 89%, 48%)` - Checked-out items

### Typography
- **Primary Font**: Inter - Clean, professional UI font
- **Monospace Font**: JetBrains Mono - For SKUs, codes, and data

### Components
- **Status Badges**: Color-coded pills for statuses
- **Stat Cards**: Dashboard metric cards with icons and trends
- **Product Cards**: Inventory items with images and availability
- **Data Tables**: Sortable, filterable booking tables

## 📁 Project Structure

```
/app
├── inventory/          # Live Inventory Dashboard
├── bookings/          # Client Booking Portal
├── operations/        # Real-Time Operations Center
└── page.tsx           # Home page with navigation

/components
└── crm/
    ├── navbar.tsx     # Main navigation component
    ├── status-badge.tsx  # Status indicator component
    └── stat-card.tsx     # Metric display component

/lib
├── types/
│   └── crm.ts         # TypeScript type definitions
├── data/
│   └── mock-data.ts   # Sample data for demonstration
└── supabase/
    └── client.ts      # Supabase database client

/src/app
└── globals.css        # Global styles and design tokens
```

## 🚀 Key Functionality

### Inventory Management
- Track total quantity, available units, and checked-out items
- Monitor damaged items separately
- Automatic status calculation (available, low stock, unavailable)
- SKU-based organization
- Category filtering for easy browsing

### Booking System
- Create bookings with event details
- Link multiple inventory items to each booking
- Track pickup and return dates
- Calculate rental periods automatically
- Monitor payment status and outstanding balances

### Financial Tracking
- Automated invoice generation
- Multiple invoice types (rental, damage, replacement)
- Payment processing with multiple payment methods
- Outstanding balance tracking
- Revenue analytics and trends

### Stock Movement
- Complete audit trail of all inventory movements
- Check-out tracking when items are dispatched
- Return processing with condition assessment
- Automatic damage invoice generation for lost/damaged items
- Historical movement data for analytics

## 💡 Mock Data

The system includes realistic mock data for demonstration:

- **8 Inventory Items** across categories: Tableware, Centerpieces, Signage, Linens, Ceremony, Lighting, Furniture
- **3 Clients** including event planners and corporate accounts
- **3 Active Bookings** with various statuses
- **2 Payment Records** showing transaction history

## 🔐 Security Features

- **Row Level Security (RLS)** on all database tables
- **Tenant isolation** ensuring data separation
- **Project-level scoping** for multi-tenant architecture
- **Authentication-based access control**
- **JWT token validation** for all database operations

## 🎯 MVP Achievement

This implementation delivers on the 3-page architecture:

1. ✅ **Live Inventory Dashboard** - Visual catalog with real-time availability
2. ✅ **Client Booking Portal** - Seamless booking and payment management
3. ✅ **Real-Time Operations Center** - Complete business visibility

## 🔮 Future Enhancements

The foundation supports these advanced features:

- **Automated Marketing** based on booking patterns
- **Predictive Analytics** for inventory optimization
- **Multi-location Management** for growing businesses
- **Mobile Apps** for field teams
- **Accounting Integration** (QuickBooks, Xero)
- **Delivery Management** with route optimization
- **Loyalty Programs** and referral tracking
- **Maintenance Scheduling** for inventory items
- **Subscription Billing** for corporate clients

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Database**: Supabase PostgreSQL with RLS
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Inter (UI), JetBrains Mono (code)

## 📊 Performance

- **Responsive Design**: Works on desktop, tablet, and mobile
- **Optimized Images**: Lazy loading with progressive enhancement
- **Fast Navigation**: Client-side routing with prefetching
- **Real-time Updates**: Live data synchronization capabilities

## 🎓 Design Decisions

1. **Professional Blue Theme**: Chosen for trustworthiness and clarity
2. **Card-Based Layouts**: Easier scanning and better visual hierarchy
3. **Status Color Coding**: Immediate visual feedback for inventory status
4. **Table + Card Hybrid**: Tables for bookings (data-heavy), cards for inventory (visual)
5. **Sticky Navigation**: Easy access to all sections
6. **Inter Font**: Excellent readability and modern appearance
