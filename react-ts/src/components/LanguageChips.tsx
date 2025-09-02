import { clsx } from "clsx"
import type { JSX } from "react"
import type { Language } from "../languages"

export default function LanguageChips({ languages, wrongGuessCount }: {
    languages: Language[],
    wrongGuessCount: number
}): JSX.Element {
    const languageElements = languages.map((lang: Language, index: number): JSX.Element => {
        const isLanguageLost: boolean = index < wrongGuessCount
        const styles: Omit<Language, "name"> = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const className: string = clsx("chip", isLanguageLost && "lost")
        return (
            <span
                className={className}
                style={styles}
                key={lang.name}
            >
                {lang.name}
            </span>
        )
    })

    return <section className="language-chips">{languageElements}</section>
}