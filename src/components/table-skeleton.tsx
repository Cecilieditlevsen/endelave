import { tw } from 'twind'

export const TableSkeleton = () => {
  return (
    <table
      className={tw`divide-y table-fixed w-full max-w-[358px] md:min-w-[370px] md:max-w-full border-spacing-0 border-collapse`}
    >
      <thead className={tw`hidden md:table-header-group border-b-solid border-b-gray-200 border-b-1`}>
        <tr className={tw`bg-gray-100 `}>
          <th
            scope="col"
            className={tw` py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:pl-3`}
          >
            AFGANG
          </th>
          <th
            scope="col"
            className={tw` py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:pl-3`}
          >
            ANKOMST
          </th>
          <th
            scope="col"
            className={tw` py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:pl-3`}
          >
            BOOK
          </th>
          <th
            scope="col"
            className={tw` py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:pl-3`}
          >
            LEDIGE PLADSER
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className={tw`bg-white`}>
          <td className={tw`px-4 py-4 whitespace-nowrap`}>
            <div className={tw`flex items-center`}>
              <div
                className={tw`animate-pulse text-sm font-medium text-gray-900 w-full`}
              >
                Loading...
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
