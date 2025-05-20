import {createInsertSchema,createSelectSchema} from "drizzle-zod"
import {customers} from "@/db/schema"

export const insertCustomerSchema = createInsertSchema(customers,{
    firstName: (schema) => schema.min(1,"First name is required"),
    lastName: (schema) => schema.min(1,"Last name is required"),
    address1: (schema) => schema.min(1,"Address is required"),
    city: (schema) => schema.min(1,"City is required"),
    email: (schema) => schema.email("Email is invalid"),
    zip: (schema) => schema.min(1,"Zip code is required"),
    phone: (schema) => schema.regex(/^\d{3}-\d{3}-\d{4}$/,"Phone number is invalid"),
})

export const selectCustomerSchema = createSelectSchema(customers)

export type insertCustomerSchemaType = typeof insertCustomerSchema._type

export type selectCustomerSchemaType = typeof selectCustomerSchema._type
