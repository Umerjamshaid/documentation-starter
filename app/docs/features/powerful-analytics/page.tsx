import { Metadata } from 'next'
import { BarChart, PieChart, LineChart, Activity } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Powerful Analytics | Features',
  description: 'Get insights into your application's performance and usage',
}

export default function PowerfulAnalytics() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Powerful Analytics</h1>
        <p className="text-xl text-muted-foreground">
          Get insights into your application's performance and usage.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {analyticsFeatures.map((feature) => (
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
        <h2 className="text-2xl font-semibold mb-4">Analytics Dashboard</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {dashboardFeatures.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border bg-muted">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-muted p-6">
        <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
        <div className="space-y-4">
          {dataCollection.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const analyticsFeatures = [
  {
    icon: BarChart,
    title: "Performance Metrics",
    description: "Track and analyze your application's performance",
    points: [
      "Response time monitoring",
      "Resource utilization",
      "Error tracking",
      "Custom metrics"
    ]
  },
  {
    icon: PieChart,
    title: "User Analytics",
    description: "Understand your users and their behavior",
    points: [
      "User engagement",
      "Feature usage",
      "User flow analysis",
      "Conversion tracking"
    ]
  },
  {
    icon: LineChart,
    title: "Business Insights",
    description: "Make data-driven decisions with business metrics",
    points: [
      "Revenue tracking",
      "Growth metrics",
      "Customer retention",
      "ROI analysis"
    ]
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Monitor your application in real-time",
    points: [
      "Live dashboards",
      "Instant alerts",
      "Anomaly detection",
      "System health"
    ]
  }
]

const dashboardFeatures = [
  {
    icon: BarChart,
    title: "Customizable Dashboards",
    description: "Create personalized views of your analytics data"
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    description: "Beautiful charts and graphs for better understanding"
  },
  {
    icon: LineChart,
    title: "Trend Analysis",
    description: "Identify patterns and trends in your data"
  },
  {
    icon: Activity,
    title: "Automated Reports",
    description: "Schedule and receive regular analytics reports"
  }
]

const dataCollection = [
  {
    title: "Data Collection",
    description: "Automatically collect data from your application"
  },
  {
    title: "Processing",
    description: "Process and analyze data in real-time"
  },
  {
    title: "Visualization",
    description: "View insights through interactive dashboards"
  },
  {
    title: "Action",
    description: "Take action based on data-driven insights"
  }
]

