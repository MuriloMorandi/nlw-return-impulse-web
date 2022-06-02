import { FormEvent, useState } from "react";
import { ArrowLeft } from "phosphor-react";
import { feedbackTypes, FeedbackType } from ".."
import { CloseButton } from "../../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { sendFeedback } from "../../../../Api/api";

interface FeedbackContentStepProps{
    feedbackType: FeedbackType;
    onClickReturn: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({ feedbackType, onClickReturn, onFeedbackSent }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState("");

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()
        
        sendFeedback({
            data: {   
                type: feedbackType,
                screenshot,
                comment
            }
        });
        
        onFeedbackSent();
    }

    return (
        <>
            <header className="flex flex-1">
                <button type="button" onClick={onClickReturn} className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                    <ArrowLeft />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypeInfo.image.source}
                        alt={feedbackTypeInfo.image.alt}
                        className="w-6 h-6"
                    />
                    
                    {feedbackTypeInfo.title}         
                </span>
                <CloseButton/>
            </header>
            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
                <textarea
                    className="min-w-[300px] w-full min-h-[112px] text-sm placeholder:-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={e=>setComment(e.target.value)}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton onScreenshotTook={setScreenshot} screenshot={screenshot}/>

                    <button
                        type="submit"
                        disabled={comment.length ===0 }
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm houver:bg-brand-250 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar Feedback
                    </button>
                </footer>
            </form>
        </>
    )
}