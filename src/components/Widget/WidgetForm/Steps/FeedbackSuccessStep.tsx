import { CloseButton } from "../../../CloseButton"
import Success from "../../../../assets/Success.svg"
interface FeedbackbackSuccessStepProps{
    onClickNewFeedback: () => void
}

export function FeedbackbackSuccessStep({onClickNewFeedback}:FeedbackbackSuccessStepProps) {
    return (
        <>
            <header className="flex flex-1">    
                <CloseButton/>
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                
                <img src={Success} alt="Sucesso"></img>

                <span className="text-xl mt-2">
                    Agredecemos o feedback!!!
                </span>

                <button
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 houver:bg-zinc-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
                    onClick={()=> onClickNewFeedback()}
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}