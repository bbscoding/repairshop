import { PgTable,serial,varchar,boolean,timestamp,integer,text, pgTable } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { Phone } from "lucide-react";
import { create } from "domain";
import { title } from "process";

export const customers = pgTable("customers", {
    id:serial("id").primaryKey(),
    firstName:varchar("first_name").notNull(),
    lastName:varchar("last_name").notNull(),
    email:varchar("email").unique().notNull(),
    phone:varchar("phone").unique().notNull(),
    address1:varchar("address1").notNull(),
    address2:varchar("address2"),
    city:varchar("city").notNull(),
    zip:varchar("zip",{length:5}).notNull(),
    notes:text("notes"),
    active:boolean("active").notNull().default(true),
    created_at:timestamp("created_at").notNull().defaultNow(),
    updated_at:timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
})


export const tickets = pgTable("tickets", {
    id:serial("id").primaryKey(),
    customerId:integer("customer_id").notNull().references(() => customers.id),
    title:varchar("title").notNull(),
    description:text("description").notNull(),
    completed:boolean("completed").notNull().default(false),
    tech:varchar("tech").notNull().default("unassigned"),
    created_at:timestamp("created_at").notNull().defaultNow(),
    updated_at:timestamp("updated_at").notNull().defaultNow().$onUpdate(() => new Date()),
})

//Create Relations
export const customerRelations = relations(customers,
    ({many}) => ({
        tickets:many(tickets),
    })
)

export const ticketsRelations = relations(tickets,
    ({one}) => ({
        customer:one(customers, {
            fields:[tickets.customerId],
            references:[customers.id],
        }),
    })
)