import Link from "next/link"
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { BackgroundAnimation } from "@/components/background-animation"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <BackgroundAnimation />
      <div className="flex-1 relative">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              🎉 New Features Available
            </div>
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Build amazing products with{" "}
              <span className="text-primary">YourProduct</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Empower your development workflow with our intuitive platform.
              Build faster, deploy easier, and scale seamlessly.
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild>
                <Link href="/docs">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/docs">Documentation</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center">
                          <feature.icon className="h-12 w-12 mb-4 text-primary" />
                          <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section
          id="features"
          className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Features
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Everything you need to build modern applications.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative overflow-hidden rounded-lg border bg-background p-2"
              >
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                  <feature.icon className="h-12 w-12" />
                  <div className="space-y-2">
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="container py-8 md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Choose the perfect plan for your needs.
            </p>
          </div>
          <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
            <div className="grid gap-6">
              <h3 className="text-2xl font-bold sm:text-3xl">
                What&apos;s included in the PRO plan
              </h3>
              <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                {proFeatures.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 text-center">
              <div>
                <h4 className="text-7xl font-bold">$19</h4>
                <p className="text-sm font-medium text-muted-foreground">
                  /month
                </p>
              </div>
              <Button size="lg">Get Started</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

const features = [
  {
    title: "Fast Development",
    description: "Build and deploy applications faster with our intuitive tools and workflows.",
    icon: ArrowRight,
    link: "/docs/features/fast-development"
  },
  {
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing tools and services.",
    icon: ArrowRight,
    link: "/docs/features/easy-integration"
  },
  {
    title: "Powerful Analytics",
    description: "Get insights into your application's performance and usage.",
    icon: ArrowRight,
    link: "/docs/features/powerful-analytics"
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly with your team members.",
    icon: ArrowRight,
    link: "/docs/features/team-collaboration"
  },
  {
    title: "Security First",
    description: "Enterprise-grade security for your applications.",
    icon: ArrowRight,
    link: "/docs/features/security"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support from our expert team.",
    icon: ArrowRight,
    link: "/docs/features/support"
  }
]

const proFeatures = [
  "Unlimited Projects",
  "Advanced Analytics",
  "Priority Support",
  "Custom Domains",
  "Team Collaboration",
  "API Access",
  "99.9% Uptime SLA",
  "Enterprise Security",
]

