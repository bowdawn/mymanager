export interface ProductCardType {
  Name: string;
  tags: Array<string>;
  Company: string;
  Amount: number;
  Premium: Array<{ Age: number; Amount: number; Difference: number }>;
}
