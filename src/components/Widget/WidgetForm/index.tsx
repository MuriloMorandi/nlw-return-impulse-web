import { useState } from "react";

import BugImageSource from '../../../assets/Bug.svg'
import IdeaImageSource from '../../../assets/Idea.svg'
import OutherImageSource from '../../../assets/Thought.svg'


import { FeedbackTypeSteps } from "./Steps/FeedbackTypeSteps";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: BugImageSource,
            alt:'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: IdeaImageSource,
            alt:'Imagem de um lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: OutherImageSource,
            alt:'Imagem de um balão de pensamento'
        }
    },
}
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [typeFeedback, setTypeFeedback] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);
    
    function handleRestartFeedback() {
        setTypeFeedback(null);
        setFeedbackSent(false);
    }

    function handleTypeFeedback(type:FeedbackType) {
        setTypeFeedback(type)
    }
    
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            

            {feedbackSent ? (
                <FeedbackbackSuccessStep onClickNewFeedback={handleRestartFeedback}/>
            ) : (
                <>
                    {!typeFeedback ? (
                        <FeedbackTypeSteps onClick={handleTypeFeedback}/>
                    ) : (
                        <FeedbackContentStep
                            feedbackType={typeFeedback}
                            onClickReturn={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )
                    }
                </>
            )
                
            }
            
            <footer className="text-xs text-neutral-400">
                Feito com ♥ por{" "}
                <a className="underline underline-offset-2"
                    href="https://www.linkedin.com/in/murilomorandi/"
                    >
                    Murilo M. Alexandre
                </a>
            </footer>
        </div>
    )
}