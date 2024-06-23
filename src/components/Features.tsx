import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import image from "../assets/Genio.jpeg";
import image3 from "../assets/SOÑE.jpg";
import image4 from "../assets/CONDENA.jpg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const features: FeatureProps[] = [
  {
    title: "Bujan Ft Noyret - TE SOÑÉ",
    description:
      '',
    image: image3,
    link: "https://www.youtube.com/watch?v=ArSh-robcU4",
  },
  {
    title: "Bujan Ft El perla - CONDENÁ",
    description:
      "",
    image: image4,
    link: "https://www.youtube.com/watch?v=2f-F9KXoius",
  }
];

const featureList: string[] = [
   "Descubre lo último de INTEGRITY OFICIAL",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          NOVEDADES
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-xl"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map(({ title, description, image, link }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>
            <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
              {description}</CardContent>

            <CardFooter>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
