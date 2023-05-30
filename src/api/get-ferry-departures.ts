import { endelaveClient } from './client'
import { ferryRoutesSchema } from '../modules/ferry-departues/models/departure/departure.model'

type Date = `${string}-${string}-${string}`

export const getFerryDepartures = async (date: Date) => {
  const response = await endelaveClient.get(`departures?date=${date}`).json()

  return ferryRoutesSchema.parse(response)
}
