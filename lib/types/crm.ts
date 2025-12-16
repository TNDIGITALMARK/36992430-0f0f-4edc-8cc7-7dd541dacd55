// CRM Type Definitions

export type InventoryStatus = 'available' | 'low_stock' | 'unavailable' | 'discontinued';
export type BookingStatus = 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';
export type ClientStatus = 'active' | 'inactive' | 'blacklisted';
export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'partially_paid' | 'overdue' | 'cancelled';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface InventoryItem {
  id: string;
  name: string;
  description?: string;
  category: string;
  sku: string;
  image_url?: string;
  total_quantity: number;
  available_quantity: number;
  checked_out_quantity: number;
  damaged_quantity: number;
  rental_price_per_day: number;
  replacement_cost: number;
  status: InventoryStatus;
  created_at: string;
  updated_at: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company_name?: string;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  status: ClientStatus;
  payment_terms: string;
  credit_limit: number;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Booking {
  id: string;
  booking_number: string;
  client_id: string;
  client?: Client;
  event_name: string;
  event_date: string;
  pickup_date: string;
  return_date: string;
  delivery_address?: string;
  delivery_notes?: string;
  status: BookingStatus;
  subtotal: number;
  tax_amount: number;
  total_amount: number;
  paid_amount: number;
  balance_due: number;
  created_at: string;
  updated_at: string;
  items?: BookingItem[];
}

export interface BookingItem {
  id: string;
  booking_id: string;
  inventory_item_id: string;
  inventory_item?: InventoryItem;
  quantity: number;
  unit_price: number;
  total_price: number;
  status: string;
  damaged_quantity: number;
  lost_quantity: number;
  damage_notes?: string;
}

export interface Invoice {
  id: string;
  invoice_number: string;
  booking_id: string;
  client_id: string;
  invoice_type: 'rental' | 'damage' | 'replacement' | 'additional';
  subtotal: number;
  tax_amount: number;
  total_amount: number;
  status: InvoiceStatus;
  issue_date: string;
  due_date: string;
  paid_date?: string;
  notes?: string;
  created_at: string;
}

export interface Payment {
  id: string;
  payment_number: string;
  booking_id: string;
  invoice_id?: string;
  client_id: string;
  amount: number;
  payment_method: string;
  status: PaymentStatus;
  payment_date: string;
  transaction_id?: string;
  notes?: string;
}

export interface StockMovement {
  id: string;
  inventory_item_id: string;
  booking_id?: string;
  movement_type: 'check_out' | 'return' | 'damage' | 'loss' | 'adjustment' | 'initial';
  quantity: number;
  condition_on_return?: 'good' | 'damaged' | 'lost';
  notes?: string;
  movement_date: string;
}
