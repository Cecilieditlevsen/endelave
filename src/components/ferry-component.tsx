import { Calendar } from './calender'
import { Table } from './table'
import { tw } from 'twind'
import { getLocalTimeZone, today } from '@internationalized/date'
import { useFerryDepartures } from '../hooks/use-ferry-departures'
import { TableSkeleton } from './table-skeleton'
import { FerryHeader } from './ferry-header'

export const FerryComponent = () => {
  const { fetcher, loading, error, data } = useFerryDepartures()

  return (
    <div className={tw`flex flex-col gap-6 lg:flex-row items-start w-full`}>
      <Calendar
        defaultValue={today(getLocalTimeZone())}
        onChange={fetcher}
        minValue={today(getLocalTimeZone())}
      />

      <div className={tw`flex flex-col md:flex-row gap-6 mx-auto`}>
        {data ? (
          data.ferryRoutes.map((route) => (
            <div
              key={route.crossingName}
              className={tw`border-solid border-2 border-gray-200 rounded-md bg-white`}
            >
              <FerryHeader isDirectionHome={route.isDirectionHome} />
              <Table key={route.crossingName} {...route} />
            </div>
          ))
        ) : loading ? (
          <>
            <div
              className={tw`border rounded-md border-solid border-2 border-gray-200 bg-white min-h-[334px]`}
            >
              <FerryHeader isDirectionHome={false} />
              <TableSkeleton />
            </div>

            <div
              className={tw`border rounded-md border-solid border-2 border-gray-200 bg-white`}
            >
              <FerryHeader isDirectionHome={true} />
              <TableSkeleton />
            </div>
          </>
        ) : (
          <span>Select a data</span>
        )}

        {error && <div>{error}</div>}
      </div>
    </div>
  )
}
