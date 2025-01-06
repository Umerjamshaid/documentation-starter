import { Metadata } from 'next'
import { Puzzle, LinkIcon, Box, RefreshCw } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Easy Integration | Features',
  description: 'Seamlessly integrate with your existing tools and services',
}

export default function EasyIntegration() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Easy Integration</h1>
        <p className="text-xl text-muted-foreground">
          Seamlessly integrate with your existing tools and services.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {integrationFeatures.map((feature) => (
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
        <h2 className="text-2xl font-semibold mb-4">Supported Integrations</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {supportedIntegrations.map((category) => (
            <div key={category.name}>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <ul className="space-y-2">
                {category.tools.map((tool, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const integrationFeatures = [
  {
    icon: Puzzle,
    title: "API Integration",
    description: "Connect with external services through our robust API",
    points: [
      "RESTful API endpoints",
      "GraphQL support",
      "Webhook integrations",
      "Real-time data sync"
    ]
  },
  {
    icon: LinkIcon,
    title: "Third-party Connections",
    description: "Connect with your favorite tools and services",
    points: [
      "OAuth authentication",
      "SSO integration",
      "Custom connectors",
      "Secure data transfer"
    ]
  },
  {
    icon: Box,
    title: "Plugin System",
    description: "Extend functionality with our plugin architecture",
    points: [
      "Custom plugin development",
      "Plugin marketplace",
      "Version management",
      "Security scanning"
    ]
  },
  {
    icon: RefreshCw,
    title: "Data Synchronization",
    description: "Keep your data in sync across all platforms",
    points: [
      "Bi-directional sync",
      "Conflict resolution",
      "Automated backups",
      "Data validation"
    ]
  }
]

const supportedIntegrations = [
  {
    name: "Authentication",
    tools: [
      "Auth0",
      "Okta",
      "Firebase Auth",
      "Custom OAuth"
    ]
  },
  {
    name: "Development",
    tools: [
      "GitHub",
      "GitLab",
      "Bitbucket",
      "VS Code"
    ]
  },
  {
    name: "Monitoring",
    tools: [
      "DataDog",
      "New Relic",
      "Grafana",
      "Prometheus"
    ]
  }
]

