import { FeaturesSectionType } from "@/utils/types"
import { Card, CardDescription, CardTitle } from "../ui/card";

interface FeaturesSectionProps {
    data: FeaturesSectionType;
  }

export default function FeaturesSection ({data}: FeaturesSectionProps) {
    const featuresArray = Object.values(data.allfeatures);

    return (
        <section className="py-8">
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
              {data.title}
            </h2>
            <p className="my-3 text-xl text-muted-foreground">
              {data.description}
            </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuresArray?.map((feature, index) => {
              return (
                <Card key={index} className="group relative overflow-hidden shadow-lg transition-all hover:shadow-xl">
                  <img
                      src="https://placehold.co/300x200"
                      alt="Feature 1"
                      width="300"
                      height="200"
                      className="h-48 w-full object-cover object-center transition-all group-hover:scale-105"
                      style={{ aspectRatio: "300/200", objectFit: "cover" }}
                    />
                    <div className="p-6">
                      <CardTitle className="text-xl font-semibold"> {feature.title} </CardTitle>
                      <CardDescription className="mt-2 text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </div>
                </Card>
              )
            })}
            
          </div>
        </section>
    )
}