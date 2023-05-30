import {
  AriaButtonProps,
  mergeProps,
  useButton,
  useFocusRing,
} from 'react-aria'
import React from 'react'
import { tw } from 'twind'
import clsx from 'clsx'

export const Button = ({ children, ...props }: AriaButtonProps) => {
  const ref = React.useRef(null)
  const { buttonProps } = useButton(props, ref)
  const { focusProps, isFocusVisible } = useFocusRing()

  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={tw`${clsx([`outline-none border-none rounded-full w-[30px] h-[30px] flex justify-center items-center bg-gray-100`], { 'ring-2 group-focus:z-2 ring-blue-600 ring-offset-2' : isFocusVisible })}`}
    >
      {children}
    </button>
  )
}
