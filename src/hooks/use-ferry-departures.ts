import { DateValue } from '@internationalized/date'
import { useCallback, useState } from 'react'
import { FerryRoutesModel } from '../modules/ferry-departues/models/departure/departure.model'
import { getFerryDepartures } from '../api/get-ferry-departures'

export const useFerryDepartures = () => {
  const [data, setData] = useState<FerryRoutesModel>()
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)

  const fetcher = useCallback(async ({ day, month, year }: DateValue) => {
    try {
      setLoading(true)
      setData(undefined)
      const data = await getFerryDepartures(`${year}-${month}-${day}`)

      setData(data)
    } catch (error) {
      console.error(error)
      setError('Kunne ikke hente færgeafgange')
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    data,
    error,
    loading,
    fetcher,
  }
}
