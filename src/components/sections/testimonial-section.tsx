import { TestimonialsSectionType } from "@/utils/types"
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface TestimonialsSectionProps {
    data: TestimonialsSectionType;
  }

export default function TestimonialSection ({data}: TestimonialsSectionProps) {
    const testiArray = Object.values(data.alltestimonials);
    return (
        <section className="w-full py-8">
      <div className="grid max-w-6xl items-center justify-center gap-10 text-center">
        <div className="space-y-4">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight">{data.title}</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {data.description}
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {testiArray.map((item, index) => {
                return (
                    <Card key={index} className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex items-center gap-4">
                        <Avatar className="border">
                            <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                            <AvatarFallback>!?</AvatarFallback>
                        </Avatar>
                            <CardTitle className="font-semibold">{item.author}</CardTitle>
                        </div>
                        <CardDescription className="text-muted-foreground">
                        "{item.review}"
                        </CardDescription>
                    </Card>
                )
            })}
        </div>
      </div>
    </section>
    )
}