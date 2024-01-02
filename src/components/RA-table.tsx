import { FerryRouteModel } from '../modules/ferry-departues/models/departure/departure.model'
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from 'react-aria-components'
import { tw } from 'twind'
import { CarIcon } from './icons/car-icon'
import clsx from 'clsx'
import { PersonIcon } from './icons/person-icon'

type Props = FerryRouteModel & {
  isDirectionHome: boolean
}

export function RATable({ departures, isDirectionHome }: Props) {
  return (
    <Table
      className={tw`table-fixed w-full max-w-[358px] md:min-w-[370px] md:max-w-full border-spacing-0 border-collapse`}
      aria-label={
        isDirectionHome
          ? 'Afgange Endelave Snaptun'
          : 'Afgange Snaptun Endelave'
      }
    >
      <TableHeader
        className={tw`md:table-header-group border-b-solid border-b-1 border-b-gray-200 bg-gray-100`}
      >
        <Column
          className={tw` py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:pl-3`}
          isRowHeader
        >
          AFGANG
        </Column>
        <Column
          className={tw` py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:pl-3`}
          isRowHeader
        >
          ANKOMST
        </Column>
        <Column
          className={tw` py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:pl-3`}
          isRowHeader
        >
          BOOK
        </Column>
        <Column
          className={tw` py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:pl-3`}
          isRowHeader
        >
          LEDIGE PLADSER
        </Column>
      </TableHeader>

      <TableBody>
        {departures.map((departure, i) => (
          <Row
            key={departure.departureId}
            className={tw`${i % 2 === 0 ? '' : 'bg-gray-100'}`}
          >
            <Cell
              className={tw`md:table-cell whitespace-nowrap py-3 px-4 text-sm `}
            >
              {new Date(departure.depart).toLocaleTimeString('da-DK', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Europe/Copenhagen',
              })}
            </Cell>
            <Cell
              className={tw`md:table-cell whitespace-nowrap py-3 px-4 text-sm `}
            >
              {new Date(departure.arrival).toLocaleTimeString('da-DK', {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Europe/Copenhagen',
              })}
            </Cell>

            <Cell
              className={tw`md:table-cell whitespace-nowrap py-3 px-4 text-sm`}
            >
              {departure.bookUrl ? (
                <a
                  aria-label={'book afgang'}
                  className={tw`text-[#1892FF] no-underline`}
                  target={'_blank'}
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
            </Cell>

            <Cell
              className={tw`md:table-cell whitespace-nowrap py-3 px-4 text-sm`}
            >
              <div className={tw`flex space-x-[5px]`}>
                <CarIcon aria-hidden className={tw`w-[16px]`} />{' '}
                <span
                  aria-label={`ledig antal biler ${departure.availableCars}`}
                  className={tw`opacity-50${clsx({
                    'text-[#00C767] opacity-100':
                      departure.availableCars > 0 && departure.bookUrl,
                  })}}`}
                >
                  {departure.availableCars}
                </span>
              </div>
              <div className={tw`flex space-x-[5px]`}>
                <PersonIcon aria-hidden className={tw`w-[16px]`} />
                <span
                  aria-label={`ledig antal biler ${departure.availablePax}`}
                  className={tw`opacity-50 ${clsx({
                    'text-[#00C767] opacity-100':
                      departure.availablePax > 0 && departure.bookUrl,
                  })}}`}
                >
                  {departure.availablePax}
                </span>
              </div>
            </Cell>
          </Row>
        ))}
      </TableBody>
    </Table>
  )
}
