import { tw } from 'twind'
import { ArrowRight } from './icons/arrow-right'

type FerryHeaderProps = {
  isDirectionHome: boolean
}

export const FerryHeader = ({isDirectionHome}: FerryHeaderProps ) => {
  return (
    <div
      className={tw`w-full py-[20px] flex justify-center align-center border-b-solid border-b-1 border-gray-200`}
    >
      <h2 className={tw`text-lg m-0 font-semibold flex space-x-2`}>
        <span>{isDirectionHome? 'Snaptun' : 'Endelave'}</span> <ArrowRight className={tw`w-5`} />
        <span>{isDirectionHome? 'Endelave' : 'Snaptun'}</span>
      </h2>
    </div>
  )
}
