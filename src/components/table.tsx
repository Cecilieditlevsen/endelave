import { tw } from 'twind'
import { CarIcon } from './icons/car-icon'
import { PersonIcon } from './icons/person-icon'
import { FerryRouteModel } from '../modules/ferry-departues/models/departure/departure.model'
import clsx from 'clsx'
import { ArrowRight } from './icons/arrow-right'

export const Table = ({ departures, isDirectionHome }: FerryRouteModel) => {
  return (
    <table
      className={tw`table-fixed w-full max-w-[358px] md:min-w-[370px] md:max-w-full border-spacing-0 border-collapse`}
    >
      <thead
        className={tw`hidden md:table-header-group border-b-solid border-b-1 border-b-gray-200`}
      >
        <tr className={tw`bg-gray-100 `}>
          <th
            scope="col"
            className={tw` py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:pl-3`}
          >
            AFGANG
          </th>

          <th
            scope="col"
            className={tw`px-4 py-3.5 text-left text-sm font-semibold text-gray-900`}
          >
            ANKOMST
          </th>

          <th
            scope="col"
            className={tw`px-4 py-3.5 text-left text-sm font-semibold text-gray-900`}
          >
            BOOK
          </th>

          <th
            scope="col"
            className={tw`px-4 py-3.5 text-left text-sm font-semibold text-gray-900`}
          >
            LEDIGE PLADSER
          </th>
        </tr>
      </thead>

      <tbody>
        {departures.map((departure, personIdx) => {
          return (
            <tr
              key={personIdx}
              className={tw`${personIdx % 2 === 0 ? '' : 'bg-gray-100'}`}
            >
              {/*cell with vertical table for mobile stacked view*/}
              <td className={tw`md:hidden p-[15px]`}>
                <table
                  className={tw`table-fixed w-full border-spacing-[200px] border-separate`}
                >
                  <tbody>
                    <tr className={tw`text-left`}>
                      <th className={tw`font-medium pt-[15px]`}>Afgang</th>
                      <td className={tw`pt-[15px]`}>
                        {new Date(departure.depart).toLocaleTimeString(
                          'da-DK',
                          {
                            hour: 'numeric',
                            minute: 'numeric',
                          }
                        )}
                      </td>
                    </tr>

                    <tr className={tw`text-left`}>
                      <th className={tw`font-medium pt-[15px]`}>Ankomst</th>
                      <td className={tw`pt-[15px]`}>
                        {new Date(departure.arrival).toLocaleTimeString(
                          'da-DK',
                          {
                            hour: 'numeric',
                            minute: 'numeric',
                          }
                        )}
                      </td>
                    </tr>

                    <tr className={tw`text-left`}>
                      <th className={tw`font-medium pt-[15px]`}>Book</th>
                      <td className={tw`pt-[15px]`}>
                        {departure.bookUrl ? (
                          <a
                            className={tw`text-[#1892FF] no-underline`}
                            target={'_blank'}
                            href={departure.bookUrl}
                          >
                            Book
                          </a>
                        ) : (
                          <p className={tw`opacity-50 m-0`}>Booking lukket</p>
                        )}
                      </td>
                    </tr>

                    <tr className={tw`text-left`}>
                      <th className={tw`font-medium pt-[15px]`}>
                        Ledige pladser
                      </th>
                      <td className={tw`pt-[15px]`}>
                        <div className={tw`flex space-x-4`}>
                          <div className={tw`flex space-x-1`}>
                            <PersonIcon className={tw`w-[16px]`} />
                            <span
                              className={tw`opacity-50 ${clsx({
                                'text-[#00C767] opacity-100':
                                  departure.availablePax > 0 &&
                                  departure.bookUrl,
                              })}}`}
                            >
                              {departure.availablePax}
                            </span>
                          </div>
                          <div className={tw`flex space-x-1`}>
                            <CarIcon className={tw`w-[16px]`} />
                            <span
                              className={tw` opacity-50 ${clsx({
                                'text-[#00C767] opacity-100':
                                  departure.availableCars > 0 && departure.bookUrl,
                              })}}`}
                            >
                              {departure.availableCars}
                            </span>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>

              <td
                className={tw`hidden md:table-cell whitespace-nowrap py-3 px-4 text-sm `}
              >
                {new Date(departure.depart).toLocaleTimeString('da-DK', {
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </td>

              <td
                className={tw`hidden md:table-cell whitespace-nowrap py-3 px-4 text-sm `}
              >
                {new Date(departure.arrival).toLocaleTimeString('da-DK', {
                  hour: 'numeric',
                  minute: 'numeric',
                })}
              </td>

              <td
                className={tw`hidden md:table-cell whitespace-nowrap py-3 px-4 text-sm`}
              >
                {departure.bookUrl ? (
                  <a
                    target={'_blank'}
                    className={tw`text-[#1892FF] no-underline`}
                    href={departure.bookUrl}
                  >
                    Book
                  </a>
                ) : (
                  <p className={tw`flex flex-col m-0`}>
                    <span className={tw`opacity-50`}>Booking</span>
                    <span className={tw`opacity-50`}>lukket</span>
                  </p>
                )}
              </td>

              <td
                className={tw`hidden md:table-cell whitespace-nowrap py-3 px-4 text-sm`}
              >
                <div className={tw`flex space-x-[5px]`}>
                  <CarIcon className={tw`w-[16px]`} />{' '}
                  <span
                    className={tw`opacity-50${clsx({
                      'text-[#00C767] opacity-100':
                        departure.availableCars > 0 && departure.bookUrl,
                    })}}`}
                  >
                    {departure.availableCars}
                  </span>
                </div>
                <div className={tw`flex space-x-[5px]`}>
                  <PersonIcon className={tw`w-[16px]`} />
                  <span
                    className={tw`opacity-50 ${clsx({
                      'text-[#00C767] opacity-100':
                        departure.availablePax > 0 && departure.bookUrl,
                    })}}`}
                  >
                    {departure.availablePax}
                  </span>
                </div>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
