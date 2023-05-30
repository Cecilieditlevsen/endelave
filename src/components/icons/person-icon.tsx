import { ComponentPropsWithoutRef } from 'react'

type PersonIconProps = ComponentPropsWithoutRef<'svg'>

export const PersonIcon = (props: PersonIconProps) => (
  <svg
    aria-label={"Person icon"}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 8a2.79 2.79 0 0 0 2.02-.879A3.078 3.078 0 0 0 10.857 5c0-.796-.3-1.559-.837-2.121A2.79 2.79 0 0 0 8 2a2.79 2.79 0 0 0-2.02.879A3.078 3.078 0 0 0 5.143 5c0 .796.3 1.559.837 2.121A2.79 2.79 0 0 0 8 8ZM6.98 9.125C4.78 9.125 3 10.995 3 13.304c0 .384.297.696.663.696h8.674c.366 0 .663-.312.663-.696 0-2.309-1.781-4.179-3.98-4.179H6.98Z"
    />
  </svg>
)
