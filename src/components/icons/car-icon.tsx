import { ComponentPropsWithoutRef } from 'react'

type CarIconProps = ComponentPropsWithoutRef<'svg'>

export const CarIcon = (props: CarIconProps) => (
  <svg
    aria-label={'car icon'}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 10"
    {...props}
  >
    <path
      fill="currentColor"
      d="m3.169 1.906-.612 1.665h6.886l-.612-1.665a.75.75 0 0 0-.708-.477H3.877a.75.75 0 0 0-.708.477ZM.929 3.68l.824-2.244C2.07.575 2.92 0 3.877 0h4.246c.957 0 1.807.576 2.124 1.435l.825 2.244c.544.214.928.725.928 1.321v4.286c0 .395-.335.714-.75.714h-.75c-.415 0-.75-.32-.75-.714V8.214h-7.5v1.072c0 .395-.335.714-.75.714H.75C.335 10 0 9.68 0 9.286V5c0-.596.384-1.107.928-1.321ZM3 5.714a.697.697 0 0 0-.22-.505A.77.77 0 0 0 2.25 5a.77.77 0 0 0-.53.21.697.697 0 0 0-.22.504c0 .19.079.371.22.505a.77.77 0 0 0 .53.21.77.77 0 0 0 .53-.21.697.697 0 0 0 .22-.505Zm6.75.715a.77.77 0 0 0 .53-.21.697.697 0 0 0 .22-.505.697.697 0 0 0-.22-.505A.77.77 0 0 0 9.75 5a.77.77 0 0 0-.53.21.697.697 0 0 0-.22.504c0 .19.079.371.22.505a.77.77 0 0 0 .53.21Z"
    />
  </svg>
)
