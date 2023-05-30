import { tw } from 'twind'
import { ComponentPropsWithoutRef } from 'react'

type ArrowIconProp = ComponentPropsWithoutRef<'svg'>

export const ArrowRight = (props: ArrowIconProp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    aria-label={'arrow right icon'}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
)

export const ArrowLeft = (props: ArrowIconProp) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-label={'arrow left icon'}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
)
