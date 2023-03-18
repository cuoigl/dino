import { User } from '@dino/users';
import { OrderItem } from './order-item';

export class Order {
  id?: string;
  orderItem?: OrderItem;
  skippingAddress1?: string;
  skippingAddress2?: string;
  city?: string;
  zip?: string;
  country?: string;
  phone?: string;
  status?: string;
  totalPrice?: string;
  user?: User;
  dateOrdered?: string;
}
