import { InferSelectModel } from 'drizzle-orm';
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const transactions = pgTable('transaction', {
  id: uuid('transaction_id').defaultRandom().primaryKey(),
  uploaded_file: text('uploaded_file').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
});

export type Transaction = InferSelectModel<typeof transactions>;
export type NewTransaction = InferSelectModel<typeof transactions>;
