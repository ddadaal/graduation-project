import { TransactionType } from "src/models/TransactionType";

export interface AccountTransaction {
  id: string;
  time: string;
  amount: number;
  type: TransactionType;
  info?: string;
}
