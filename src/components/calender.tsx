import {
  AriaCalendarProps,
  useCalendar,
  useDateFormatter,
  useLocale,
} from 'react-aria'
import { useCalendarState } from 'react-stately'
import {
  CalendarDate,
  createCalendar,
  getLocalTimeZone,
  today,
} from '@internationalized/date'
import { Button } from './button'
import { CalendarGrid } from './calender-grid'
import { DateValue } from '@react-types/calendar'
import { tw } from 'twind'
import { ArrowLeft, ArrowRight } from './icons/arrow-right'

export function Calendar<T extends DateValue>({
  minValue,
  defaultValue,
  ...props
}: AriaCalendarProps<T>) {
  const { locale } = useLocale()

  // @ts-ignore
  const state = useCalendarState({
    ...props,
    createCalendar,
    locale,
    minValue,
  })

  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    { minValue, defaultValue, ...props },
    state
  )

  const currentMonth = state.visibleRange.start

  const monthDateFormatter = useDateFormatter({
    month: 'long',
    year: 'numeric',
  })

  return (
    <div {...calendarProps} className={tw`border-2 border-solid border-gray-200 rounded-md p-[15px] mx-auto bg-white`}>
      <div className={tw`flex justify-between pb-[20px]`}>
        <Button {...prevButtonProps}>
          <ArrowLeft className={tw`w-5 h-5`} />
        </Button>

        <h2 className={tw`text-lg font-bold`}>
          {monthDateFormatter.format(currentMonth.toDate(state.timeZone))}
        </h2>

        <Button {...nextButtonProps}>
          <ArrowRight className={tw`w-5 h-5`} />
        </Button>
      </div>

      <CalendarGrid startDate={currentMonth} state={state} />
    </div>
  )
}
