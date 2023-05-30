import { CalendarState } from 'react-stately'
import { AriaCalendarGridProps, useCalendarGrid, useLocale } from 'react-aria'
import { CalendarDate, getWeeksInMonth } from '@internationalized/date'
import { CalendarCell } from './calender-cell'
import { tw } from 'twind'

type GridProps = {
  state: CalendarState
  startDate: CalendarDate
} & AriaCalendarGridProps

export const CalendarGrid = ({ state, startDate, ...props }: GridProps) => {
  const { locale } = useLocale()
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state)

  // Get the number of weeks in the month, so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(startDate, locale)

  return (
    <table {...gridProps} className={tw`table-fixed text-center w-full max-w-[328px] min-w-[280px] border-spacing-0 border-collapse`}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th className={tw`text-center box-content h-[40px] w-[40px] relative`} key={index}>{day}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    currentMonth={startDate}
                    key={i}
                    state={state}
                    date={date}
                  />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
