import type { InventoryItem, Client, Booking, Payment } from '@/lib/types/crm';

// Mock Inventory Data
export const mockInventoryItems: InventoryItem[] = [
  {
    id: '1',
    name: 'Vintage Gold Charger Plates',
    description: 'Elegant vintage-style gold charger plates, perfect for formal events',
    category: 'Tableware',
    sku: 'CHG-GOLD-001',
    image_url: 'https://images.unsplash.com/photo-1551974974-4be6c00945d1?w=400',
    total_quantity: 30,
    available_quantity: 24,
    checked_out_quantity: 6,
    damaged_quantity: 0,
    rental_price_per_day: 5.00,
    replacement_cost: 25.00,
    status: 'available',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  },
  {
    id: '2',
    name: 'Crystal Centerpiece Collection',
    description: 'Stunning crystal centerpieces with LED lighting',
    category: 'Centerpieces',
    sku: 'CEN-CRY-002',
    image_url: 'https://images.unsplash.com/photo-1519167758481-83f29da8c0b0?w=400',
    total_quantity: 15,
    available_quantity: 0,
    checked_out_quantity: 15,
    damaged_quantity: 0,
    rental_price_per_day: 45.00,
    replacement_cost: 200.00,
    status: 'unavailable',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  },
  {
    id: '3',
    name: 'Rustic Wooden Sign Collection',
    description: 'Handcrafted wooden welcome signs with custom engraving',
    category: 'Signage',
    sku: 'SIGN-WD-003',
    image_url: 'https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?w=400',
    total_quantity: 12,
    available_quantity: 10,
    checked_out_quantity: 2,
    damaged_quantity: 0,
    rental_price_per_day: 20.00,
    replacement_cost: 85.00,
    status: 'available',
    created_at: '2024-02-01T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  },
  {
    id: '4',
    name: 'Elegant White Linens Set',
    description: 'Premium white table linens, 90x156 inch',
    category: 'Linens',
    sku: 'LIN-WHT-004',
    image_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400',
    total_quantity: 50,
    available_quantity: 5,
    checked_out_quantity: 45,
    damaged_quantity: 0,
    rental_price_per_day: 15.00,
    replacement_cost: 60.00,
    status: 'low_stock',
    created_at: '2024-01-10T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  },
  {
    id: '5',
    name: 'Geometric Metal Arch',
    description: 'Modern hexagonal wedding arch with gold finish',
    category: 'Ceremony',
    sku: 'ARCH-GEO-005',
    image_url: 'https://images.unsplash.com/photo-1519167758481-83f29da8c0b0?w=400',
    total_quantity: 3,
    available_quantity: 3,
    checked_out_quantity: 0,
    damaged_quantity: 0,
    rental_price_per_day: 150.00,
    replacement_cost: 800.00,
    status: 'available',
    created_at: '2024-03-01T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  },
  {
    id: '6',
    name: 'Vintage China Tea Set',
    description: 'Delicate floral china tea sets for 8 guests',
    category: 'Tableware',
    sku: 'TEA-CHN-006',
    image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400',
    total_quantity: 20,
    available_quantity: 18,
    checked_out_quantity: 2,
    damaged_quantity: 0,
    rental_price_per_day: 30.00,
    replacement_cost: 120.00,
    status: 'available',
    created_at: '2024-02-15T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  },
  {
    id: '7',
    name: 'LED String Lights - Warm White',
    description: '100ft warm white LED fairy lights, battery operated',
    category: 'Lighting',
    sku: 'LIGHT-LED-007',
    image_url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400',
    total_quantity: 40,
    available_quantity: 2,
    checked_out_quantity: 38,
    damaged_quantity: 0,
    rental_price_per_day: 8.00,
    replacement_cost: 35.00,
    status: 'low_stock',
    created_at: '2024-01-20T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  },
  {
    id: '8',
    name: 'Velvet Lounge Chair - Emerald',
    description: 'Luxurious emerald green velvet lounge chair',
    category: 'Furniture',
    sku: 'FURN-CHR-008',
    image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
    total_quantity: 8,
    available_quantity: 7,
    checked_out_quantity: 1,
    damaged_quantity: 0,
    rental_price_per_day: 55.00,
    replacement_cost: 450.00,
    status: 'available',
    created_at: '2024-02-28T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  }
];

// Mock Client Data
export const mockClients: Client[] = [
  {
    id: 'c1',
    name: 'Sarah Martinez Events',
    email: 'sarah@martinezevents.com',
    phone: '(555) 123-4567',
    company_name: 'Martinez Events Co.',
    address_line1: '123 Event Plaza',
    city: 'Los Angeles',
    state: 'CA',
    postal_code: '90001',
    country: 'USA',
    status: 'active',
    payment_terms: 'due_on_booking',
    credit_limit: 5000,
    created_at: '2024-01-05T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  },
  {
    id: 'c2',
    name: 'Emily Johnson',
    email: 'emily.j@email.com',
    phone: '(555) 234-5678',
    address_line1: '456 Celebration Ave',
    city: 'San Diego',
    state: 'CA',
    postal_code: '92101',
    country: 'USA',
    status: 'active',
    payment_terms: 'due_on_booking',
    credit_limit: 2000,
    created_at: '2024-02-10T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  },
  {
    id: 'c3',
    name: 'Corporate Events Plus',
    email: 'bookings@corpeventsplus.com',
    phone: '(555) 345-6789',
    company_name: 'Corporate Events Plus LLC',
    address_line1: '789 Business Park Dr',
    city: 'San Francisco',
    state: 'CA',
    postal_code: '94102',
    country: 'USA',
    status: 'active',
    payment_terms: 'net_30',
    credit_limit: 10000,
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  }
];

// Mock Booking Data
export const mockBookings: Booking[] = [
  {
    id: 'b1',
    booking_number: 'BK-2024-001',
    client_id: 'c1',
    event_name: 'Johnson Wedding',
    event_date: '2024-12-28',
    pickup_date: '2024-12-27',
    return_date: '2024-12-29',
    delivery_address: '123 Vineyard Estate, Napa, CA',
    status: 'confirmed',
    subtotal: 1200.00,
    tax_amount: 96.00,
    total_amount: 1296.00,
    paid_amount: 648.00,
    balance_due: 648.00,
    created_at: '2024-11-15T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  },
  {
    id: 'b2',
    booking_number: 'BK-2024-002',
    client_id: 'c2',
    event_name: 'Holiday Corporate Gala',
    event_date: '2024-12-20',
    pickup_date: '2024-12-19',
    return_date: '2024-12-21',
    delivery_address: '456 Grand Hotel Ballroom, San Francisco, CA',
    status: 'in_progress',
    subtotal: 3500.00,
    tax_amount: 280.00,
    total_amount: 3780.00,
    paid_amount: 3780.00,
    balance_due: 0.00,
    created_at: '2024-10-20T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  },
  {
    id: 'b3',
    booking_number: 'BK-2024-003',
    client_id: 'c3',
    event_name: 'Birthday Celebration',
    event_date: '2024-12-30',
    pickup_date: '2024-12-29',
    return_date: '2024-12-31',
    status: 'pending',
    subtotal: 850.00,
    tax_amount: 68.00,
    total_amount: 918.00,
    paid_amount: 0.00,
    balance_due: 918.00,
    created_at: '2024-12-10T10:00:00Z',
    updated_at: '2024-12-16T10:00:00Z'
  }
];

// Mock Payment Data
export const mockPayments: Payment[] = [
  {
    id: 'p1',
    payment_number: 'PAY-2024-001',
    booking_id: 'b1',
    client_id: 'c1',
    amount: 648.00,
    payment_method: 'credit_card',
    status: 'completed',
    payment_date: '2024-11-15T14:30:00Z',
    transaction_id: 'TXN-891234567'
  },
  {
    id: 'p2',
    payment_number: 'PAY-2024-002',
    booking_id: 'b2',
    client_id: 'c2',
    amount: 3780.00,
    payment_method: 'bank_transfer',
    status: 'completed',
    payment_date: '2024-10-22T09:15:00Z',
    transaction_id: 'TXN-891234568'
  }
];

// Helper functions
export function getInventoryByCategory(): Record<string, InventoryItem[]> {
  return mockInventoryItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, InventoryItem[]>);
}

export function getClientBookings(clientId: string): Booking[] {
  return mockBookings.filter(b => b.client_id === clientId);
}

export function getBookingsByStatus(status: string): Booking[] {
  return mockBookings.filter(b => b.status === status);
}

export function getTotalRevenue(): number {
  return mockBookings.reduce((sum, booking) => sum + booking.total_amount, 0);
}

export function getTotalOutstanding(): number {
  return mockBookings.reduce((sum, booking) => sum + booking.balance_due, 0);
}
