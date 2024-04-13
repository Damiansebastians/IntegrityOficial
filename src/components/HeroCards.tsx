// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { Badge } from "./ui/badge";
// import { Button, buttonVariants } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
//   CardFooter,
// } from "@/components/ui/card";
// import { Check, Linkedin } from "lucide-react";
// import { LightBulbIcon } from "./Icons";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";
//import logoIntegrity from "../assets//logo_transp.png";
import video from "../assets//PRUEBA.mp4";

export const HeroCards = () => {
  return (
    <div className="lg:flex flex-row flex-wrap gap-8">
      {/* Testimonial 
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="https://media.licdn.com/dms/image/D4D03AQFG7EcXaK89xQ/profile-displayphoto-shrink_800_800/0/1684869696472?e=2147483647&v=beta&t=atP5Li0_SMokiplLkgDQbrwMKG2AYtimIkXCy0TSuBY"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Alexander Silvera</CardTitle>
            <CardDescription>@alexander_silvera</CardDescription>
          </div>
        </CardHeader>

        <CardContent>Expectacular! Será una bomba!</CardContent>

      Team */}
          {/* <img
          src={logoIntegrity}/> */}

      {/* Pricing 
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Free
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>
            Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Start Free Trial</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["4 Team member", "4 GB Storage", "Upto 6 pages"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card> */}

      {/* Service */}
      {/* <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className="text-md mt-2">
              Lorem ipsum dolor sit amet consect adipisicing elit. Consectetur
              natusm.
            </CardDescription>
          </div>
        </CardHeader>
      </Card> */}
      
 <div className="video-container w-full lg:w-1/2 relative">
 <video src={video} autoPlay controls className="w-full"></video>
  <div className="overlay" />
</div>
    </div>
  );
};
