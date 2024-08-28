import { KeyNumbersSectionType } from "@/utils/types"

interface KeyNumbersSectionProps {
    data: KeyNumbersSectionType;
  }

export default function KeyNumbersSection ({data}: KeyNumbersSectionProps) {
    const numbersArray = Object.values(data.allkeynumbers);
    return (
        <section className="py-8">
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
                {data.title}
            </h2>
            <div  className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-8">
                {numbersArray.map((item, index) => {
                    return (
                            <div key={index} className="flex flex-col items-center justify-center gap-2">
                                <div className="text-4xl font-bold">+ {item.number}</div>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                    )
                })}
            </div>
    </section>
    )
}