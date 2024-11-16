import { doublePrecision, pgTable, text, uuid } from "drizzle-orm/pg-core";
import { profiles } from "./profiles";

export const game = pgTable("game", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  rating: doublePrecision("rating").default(0),
  profileId: uuid("profile_id")
    .notNull()
    .references(() => profiles.id),
});
