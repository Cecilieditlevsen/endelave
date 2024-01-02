import { z } from 'zod'

export const departureSchema = z.object({
  departureId: z.number(),
  depart: z.string(),
  arrival: z.string(),
  availableCars: z.number(),
  availablePax: z.number(),
  note: z.string(),
  bookUrl: z.union([z.string(), z.null()]),
  cssClass: z.string(),
  isDangerousGoods: z.boolean(),
  isActive: z.boolean(),
})

export const ferryRouteSchema = z.object({
  ferryRouteId: z.number(),
  crossingName: z.string(),
  isDirectionHome: z.boolean(),
  departures: z.array(departureSchema),
})

export const ferryRoutesSchema = z.object({
  ferryRoutes: z.array(ferryRouteSchema),
})

export type FerryRouteModel = z.infer<typeof ferryRouteSchema>
export type FerryRoutesModel = z.infer<typeof ferryRoutesSchema>
