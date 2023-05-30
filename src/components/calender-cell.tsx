import {
  AriaCalendarCellProps,
  mergeProps,
  useCalendarCell,
  useHover,
} from 'react-aria'
import { CalendarState } from 'react-stately'
import React, { useRef } from 'react'
import { tw } from 'twind'
import clsx from 'clsx'
import { CalendarDate, isSameMonth, isToday } from '@internationalized/date'
import { content } from '@twind/content'

type CellProps = AriaCalendarCellProps & {
  state: CalendarState
  currentMonth: CalendarDate
}

export const CalendarCell = ({
  state,
  currentMonth,
  date,
  ...props
}: CellProps) => {
  const ref = useRef(null)
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isFocused,
    isUnavailable,
  } = useCalendarCell(
    { ...props, date, isDisabled: !isSameMonth(date, currentMonth) },
    state,
    ref
  )

  const { hoverProps, isHovered } = useHover({
    isDisabled: isDisabled || isUnavailable || state.isReadOnly,
  })

  return (
    <td
      {...cellProps}
      className={tw`text-center rounded-full box-content h-[40px] py-[4px] w-[40px] relative cursor-default`}
    >
      <span
        {...mergeProps(hoverProps, buttonProps)}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={tw`box-border h-[40px] outline-none w-full my-[4px] rounded-full whitespace-nowrap block absolute top-0 left-0 text-center after::${content(
          "''"
        )} after::(absolute rounded-full top-[calc(50% - 20px)] left-[calc(50% - 20px)] transition-all duration-150 w-[40px] h-[40px] bwlock whitespace-nowrap)
        ${clsx({
          'text-gray-200': isDisabled,
          'after::(bg-blue-500) text-white': isSelected,
          'after::bg-gray-200': isToday(date, state.timeZone) && !isSelected,
          'after::(ring-2 ring-blue-500 ring-offset-2)':
            isFocused,
          'after::bg-gray-100': isHovered,
          'hidden': isOutsideVisibleRange,
        })}
        `}
      >
        <span
          className={tw`mr-[4px] ml-auto w-[40px] h-[40px] flex rounded-full items-center justify-center`}
        >
          <span className={tw`z-10`}>{date.day}</span>
        </span>
      </span>
    </td>
  )
}
