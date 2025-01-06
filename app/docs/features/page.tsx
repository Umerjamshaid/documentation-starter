import { Metadata } from 'next'
import { Check } from 'lucide-react'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: 'Features | YourProduct',
  description: 'Explore the powerful features of our platform',
}

export default function Features() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Features</h1>
        <p className="text-xl text-muted-foreground">
          Discover everything our platform has to offer to help you build better applications.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <Link href={feature.link} key={feature.title}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  {feature.badge && (
                    <Badge variant={feature.badge === 'New' ? 'default' : 'secondary'}>
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="rounded-lg border p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Coming Soon</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {upcomingFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-muted p-6">
        <h2 className="text-2xl font-semibold mb-4">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-2">Feature</th>
                <th className="text-center py-4 px-2">Free</th>
                <th className="text-center py-4 px-2">Pro</th>
                <th className="text-center py-4 px-2">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-4 px-2">{feature.name}</td>
                  <td className="text-center py-4 px-2">
                    {feature.free ? <Check className="inline h-5 w-5 text-primary" /> : "-"}
                  </td>
                  <td className="text-center py-4 px-2">
                    {feature.pro ? <Check className="inline h-5 w-5 text-primary" /> : "-"}
                  </td>
                  <td className="text-center py-4 px-2">
                    {feature.enterprise ? <Check className="inline h-5 w-5 text-primary" /> : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: "Development Tools",
    description: "Powerful tools to streamline your development workflow",
    badge: "New",
    capabilities: [
      "Advanced code editor with IntelliSense",
      "Integrated debugging tools",
      "Hot module replacement",
      "Custom plugin support",
      "Built-in testing framework"
    ],
    link: "/docs/features/fast-development"
  },
  {
    title: "Integration",
    description: "Deploy your applications with confidence",
    capabilities: [
      "One-click deployments",
      "Automatic SSL certificates",
      "Global CDN",
      "Zero-downtime updates",
      "Rollback capabilities"
    ],
    link: "/docs/features/easy-integration"
  },
  {
    title: "Analytics",
    description: "Gain insights into your application's performance",
    badge: "Updated",
    capabilities: [
      "Real-time metrics",
      "Custom dashboards",
      "Performance monitoring",
      "Error tracking",
      "User behavior analytics"
    ],
    link: "/docs/features/powerful-analytics"
  },
  {
    title: "Collaboration",
    description: "Work together seamlessly with your team",
    capabilities: [
      "Real-time collaboration",
      "Team permissions",
      "Activity history",
      "Comments and discussions",
      "Shared workspaces"
    ]
  }
]

const upcomingFeatures = [
  "AI-powered code suggestions",
  "Advanced security scanning",
  "Native mobile app support",
  "Custom workflow automation",
  "Enhanced team collaboration tools",
  "Advanced reporting features"
]

const comparisonFeatures = [
  {
    name: "Deployments",
    free: true,
    pro: true,
    enterprise: true
  },
  {
    name: "Custom Domains",
    free: false,
    pro: true,
    enterprise: true
  },
  {
    name: "Analytics",
    free: false,
    pro: true,
    enterprise: true
  },
  {
    name: "Team Collaboration",
    free: false,
    pro: true,
    enterprise: true
  },
  {
    name: "Priority Support",
    free: false,
    pro: false,
    enterprise: true
  },
  {
    name: "Custom Branding",
    free: false,
    pro: false,
    enterprise: true
  }
]

