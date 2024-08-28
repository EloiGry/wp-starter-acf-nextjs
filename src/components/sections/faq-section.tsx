import { FAQSectionType } from "@/utils/types"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  interface FAQSectionProps {
    data: FAQSectionType;
  }

export default function FaqSection ({data} : FAQSectionProps) {
    const faqArray = Object.values(data.allfaqs);
    return (
        <section className="py-8">
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight mb-4">
              {data.title}
            </h2>
            {faqArray?.map((faq, index) => {
                return (
                    <Accordion key={index} type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                            {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )
            })} 
        </section>
    )
}