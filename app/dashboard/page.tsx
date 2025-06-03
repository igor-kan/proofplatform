"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  Brain,
  Users,
  BookOpen,
  Globe,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Upload,
  Search,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [selectedMode, setSelectedMode] = useState("individual")

  const modes = [
    { id: "individual", name: "Individual", icon: Target, color: "blue" },
    { id: "educator", name: "Educator", icon: BookOpen, color: "green" },
    { id: "enterprise", name: "Enterprise", icon: Users, color: "purple" },
    { id: "government", name: "Gov/NGO", icon: Globe, color: "orange" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AI-Proof</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Badge variant="outline">Free Plan</Badge>
            <Button variant="outline" size="sm">
              Upgrade
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Mode Selection */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to AI-Proof</h1>
          <p className="text-gray-600 mb-6">Choose your mode to get started with personalized AI-resistance insights</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {modes.map((mode) => {
              const Icon = mode.icon
              return (
                <Card
                  key={mode.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedMode === mode.id ? "ring-2 ring-blue-500 bg-blue-50" : ""
                  }`}
                  onClick={() => setSelectedMode(mode.id)}
                >
                  <CardContent className="p-4 text-center">
                    <Icon className={`h-8 w-8 mx-auto mb-2 text-${mode.color}-600`} />
                    <h3 className="font-semibold">{mode.name}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Dashboard Content */}
        <Tabs value={selectedMode} onValueChange={setSelectedMode}>
          <TabsContent value="individual" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="h-5 w-5" />
                    <span>Resume Analysis</span>
                  </CardTitle>
                  <CardDescription>Upload your resume for instant automation risk assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href="/analyzer">
                      Analyze My Resume <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Search className="h-5 w-5" />
                    <span>Skill Explorer</span>
                  </CardTitle>
                  <CardDescription>Search any skill or job for automation risk insights</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/explorer">
                      Explore Skills <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="h-5 w-5" />
                    <span>Career Path</span>
                  </CardTitle>
                  <CardDescription>Discover future-proof career transitions</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/skills">
                      View Skill Tree <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Personal Insights */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your AI-Resistance Score</CardTitle>
                  <CardDescription>Based on your current skill profile</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">72%</div>
                    <Badge className="bg-green-100 text-green-800">AI-Resistant</Badge>
                  </div>
                  <Progress value={72} className="w-full" />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Creative Skills</span>
                      <span className="text-green-600">High</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Interpersonal Skills</span>
                      <span className="text-green-600">High</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Technical Skills</span>
                      <span className="text-yellow-600">Medium</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Actions</CardTitle>
                  <CardDescription>Personalized steps to improve your AI-resistance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Learn AI Collaboration</p>
                      <p className="text-sm text-gray-600">Become an AI power user in your field</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Develop Leadership Skills</p>
                      <p className="text-sm text-gray-600">Focus on human-centric capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Explore Adjacent Roles</p>
                      <p className="text-sm text-gray-600">Consider AI-resistant career pivots</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="educator" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Curriculum Intelligence</CardTitle>
                  <CardDescription>AI-proof curriculum recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Critical Thinking</span>
                      <Badge className="bg-green-100 text-green-800">High Priority</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">AI Literacy</span>
                      <Badge className="bg-blue-100 text-blue-800">Essential</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Data Analysis</span>
                      <Badge variant="secondary">Moderate</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Industry Demand Trends</CardTitle>
                  <CardDescription>Real-time skill demand analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Healthcare</span>
                      <span className="text-green-600">↗ +15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Education</span>
                      <span className="text-green-600">↗ +8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Manufacturing</span>
                      <span className="text-red-600">↘ -12%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Student Readiness</CardTitle>
                  <CardDescription>AI-resistance assessment tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Create Assessment</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="enterprise" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Workforce Risk Analysis</CardTitle>
                  <CardDescription>Team-wide automation impact assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-yellow-600">45%</div>
                    <p className="text-sm text-gray-600">Average Team Risk</p>
                  </div>
                  <Progress value={45} className="w-full mb-4" />
                  <Button className="w-full">View Full Report</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Retraining Recommendations</CardTitle>
                  <CardDescription>Prioritized skill development programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="p-2 bg-red-50 rounded">
                      <p className="font-medium text-sm">High Priority: 12 employees</p>
                      <p className="text-xs text-gray-600">AI collaboration skills</p>
                    </div>
                    <div className="p-2 bg-yellow-50 rounded">
                      <p className="font-medium text-sm">Medium Priority: 8 employees</p>
                      <p className="text-xs text-gray-600">Leadership development</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ROI Calculator</CardTitle>
                  <CardDescription>Training investment returns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+$2.4M</div>
                    <p className="text-sm text-gray-600">Projected 3-year ROI</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="government" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Regional Workforce Impact</CardTitle>
                  <CardDescription>Automation trends by geography</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Manufacturing Belt</span>
                      <Badge variant="destructive">High Risk</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tech Hubs</span>
                      <Badge className="bg-green-100 text-green-800">Adapting</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Service Sectors</span>
                      <Badge variant="secondary">Mixed</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Policy Recommendations</CardTitle>
                  <CardDescription>Data-driven workforce policies</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-1">
                    <li>• Expand retraining programs</li>
                    <li>• Invest in AI education</li>
                    <li>• Support transition industries</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Economic Impact Model</CardTitle>
                  <CardDescription>Automation economic forecasting</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Generate Report</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
