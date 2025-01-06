import { Metadata } from 'next'
import { ArrowRight, Zap, Clock, PenToolIcon as Tool } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Fast Development | Features',
  description: 'Build and deploy applications faster with our intuitive tools and workflows',
}

export default function FastDevelopment() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Fast Development</h1>
        <p className="text-xl text-muted-foreground">
          Build and deploy applications faster with our intuitive tools and workflows.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {developmentFeatures.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <feature.icon className="h-5 w-5 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </div>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                {feature.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="text-2xl font-semibold mb-4">Development Workflow</h2>
        <div className="space-y-4">
          {workflow.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const developmentFeatures = [
  {
    icon: Zap,
    title: "Quick Start Templates",
    description: "Get started quickly with pre-built templates and boilerplates",
    points: [
      "Multiple framework options",
      "Industry best practices built-in",
      "Customizable starter kits",
      "Optimized for performance"
    ]
  },
  {
    icon: Clock,
    title: "Rapid Iteration",
    description: "Iterate faster with development tools that speed up your workflow",
    points: [
      "Hot module replacement",
      "Fast refresh support",
      "Instant preview updates",
      "Quick deployment cycles"
    ]
  },
  {
    icon: Tool,
    title: "Developer Tools",
    description: "Comprehensive tools to enhance your development experience",
    points: [
      "Built-in debugging support",
      "Performance profiling",
      "Code analysis tools",
      "Testing utilities"
    ]
  },
  {
    icon: ArrowRight,
    title: "Streamlined Workflow",
    description: "Efficient processes that help you focus on writing code",
    points: [
      "Automated build process",
      "Integrated CI/CD",
      "One-click deployments",
      "Automatic optimizations"
    ]
  }
]

const workflow = [
  {
    title: "Initialize Project",
    description: "Start a new project with our CLI tool or web interface"
  },
  {
    title: "Develop",
    description: "Write code with real-time previews and instant feedback"
  },
  {
    title: "Test",
    description: "Run tests and quality checks automatically"
  },
  {
    title: "Deploy",
    description: "Push to production with confidence using our deployment pipeline"
  }
]

