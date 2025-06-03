"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, AlertTriangle, CheckCircle, Clock, DollarSign, Users, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function ExplorerPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSkill, setSelectedSkill] = useState(null)

  const skillsData = [
    {
      name: "Data Entry Clerk",
      automationRisk: 95,
      category: "Administrative",
      timeline: "1-2 years",
      aiCompetitors: ["UiPath", "Automation Anywhere", "Blue Prism"],
      avgSalary: "$35,000",
      jobCount: "2.1M",
      riskLevel: "critical",
    },
    {
      name: "Software Developer",
      automationRisk: 35,
      category: "Technology",
      timeline: "5-10 years",
      aiCompetitors: ["GitHub Copilot", "Tabnine", "CodeT5"],
      avgSalary: "$95,000",
      jobCount: "1.8M",
      riskLevel: "moderate",
    },
    {
      name: "Therapist",
      automationRisk: 15,
      category: "Healthcare",
      timeline: "10+ years",
      aiCompetitors: ["Woebot", "Wysa", "Replika"],
      avgSalary: "$75,000",
      jobCount: "850K",
      riskLevel: "low",
    },
    {
      name: "Financial Analyst",
      automationRisk: 75,
      category: "Finance",
      timeline: "2-5 years",
      aiCompetitors: ["Bloomberg Terminal AI", "Kensho", "DataSnipper"],
      avgSalary: "$85,000",
      jobCount: "950K",
      riskLevel: "high",
    },
    {
      name: "UX Designer",
      automationRisk: 25,
      category: "Design",
      timeline: "5-8 years",
      aiCompetitors: ["Figma AI", "Adobe Sensei", "Uizard"],
      avgSalary: "$78,000",
      jobCount: "650K",
      riskLevel: "low",
    },
    {
      name: "Truck Driver",
      automationRisk: 85,
      category: "Transportation",
      timeline: "3-7 years",
      aiCompetitors: ["Tesla Autopilot", "Waymo", "Aurora"],
      avgSalary: "$55,000",
      jobCount: "3.5M",
      riskLevel: "critical",
    },
  ]

  const filteredSkills = skillsData.filter(
    (skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getRiskColor = (risk) => {
    if (risk >= 80) return "text-red-600"
    if (risk >= 50) return "text-yellow-600"
    return "text-green-600"
  }

  const getRiskBadge = (riskLevel) => {
    switch (riskLevel) {
      case "critical":
        return <Badge variant="destructive">Critical Risk</Badge>
      case "high":
        return <Badge className="bg-orange-100 text-orange-800">High Risk</Badge>
      case "moderate":
        return <Badge variant="secondary">Moderate Risk</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-800">Low Risk</Badge>
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AI-Proof</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>
            <Link href="/skills" className="text-gray-600 hover:text-blue-600">
              Skill Tree
            </Link>
            <Link href="/analyzer" className="text-gray-600 hover:text-blue-600">
              Resume Analyzer
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Automation Risk Explorer</h1>
          <p className="text-gray-600 mb-6">
            Search any skill, task, or job title to understand its automation potential and AI competition
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search for skills, jobs, or tasks (e.g., 'Data Analyst', 'Customer Service')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills List */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {searchQuery ? `Search Results (${filteredSkills.length})` : "Popular Skills & Jobs"}
            </h2>

            {filteredSkills.map((skill, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedSkill?.name === skill.name ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedSkill(skill)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                      <p className="text-sm text-gray-600">{skill.category}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getRiskColor(skill.automationRisk)}`}>
                        {skill.automationRisk}%
                      </div>
                      {getRiskBadge(skill.riskLevel)}
                    </div>
                  </div>

                  <Progress value={skill.automationRisk} className="mb-4" />

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{skill.timeline}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-gray-400" />
                      <span>{skill.avgSalary}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{skill.jobCount} jobs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Analysis Panel */}
          <div className="space-y-6">
            {selectedSkill ? (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{selectedSkill.name}</span>
                      {getRiskBadge(selectedSkill.riskLevel)}
                    </CardTitle>
                    <CardDescription>Detailed automation risk analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Automation Risk</span>
                        <span className={`text-lg font-bold ${getRiskColor(selectedSkill.automationRisk)}`}>
                          {selectedSkill.automationRisk}%
                        </span>
                      </div>
                      <Progress value={selectedSkill.automationRisk} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-gray-700">Timeline</p>
                        <p className="text-gray-600">{selectedSkill.timeline}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Category</p>
                        <p className="text-gray-600">{selectedSkill.category}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Avg Salary</p>
                        <p className="text-gray-600">{selectedSkill.avgSalary}</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-700">Job Market</p>
                        <p className="text-gray-600">{selectedSkill.jobCount}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="h-5 w-5" />
                      <span>AI Competitors</span>
                    </CardTitle>
                    <CardDescription>Tools already automating this role</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {selectedSkill.aiCompetitors.map((competitor, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <span className="text-sm font-medium">{competitor}</span>
                          <Badge variant="outline" className="text-xs">
                            Active
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Risk Factors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {selectedSkill.automationRisk > 70 && (
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">High Repetition</p>
                          <p className="text-xs text-gray-600">Tasks are highly repetitive and rule-based</p>
                        </div>
                      </div>
                    )}
                    {selectedSkill.automationRisk > 50 && (
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Data-Driven</p>
                          <p className="text-xs text-gray-600">Role heavily relies on data processing</p>
                        </div>
                      </div>
                    )}
                    {selectedSkill.automationRisk < 40 && (
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Human Connection</p>
                          <p className="text-xs text-gray-600">Requires empathy and interpersonal skills</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {selectedSkill.automationRisk > 70 ? (
                      <>
                        <p className="text-sm text-red-600 font-medium">High Priority: Consider Career Transition</p>
                        <ul className="text-sm space-y-1 text-gray-600">
                          <li>• Explore adjacent AI-resistant roles</li>
                          <li>• Develop human-centric skills</li>
                          <li>• Learn to work with AI tools</li>
                        </ul>
                      </>
                    ) : selectedSkill.automationRisk > 40 ? (
                      <>
                        <p className="text-sm text-yellow-600 font-medium">Medium Priority: Adapt and Evolve</p>
                        <ul className="text-sm space-y-1 text-gray-600">
                          <li>• Become an AI power user</li>
                          <li>• Focus on creative aspects</li>
                          <li>• Develop leadership skills</li>
                        </ul>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-green-600 font-medium">Low Priority: Stay Current</p>
                        <ul className="text-sm space-y-1 text-gray-600">
                          <li>• Maintain current expertise</li>
                          <li>• Learn complementary AI tools</li>
                          <li>• Mentor others in transition</li>
                        </ul>
                      </>
                    )}
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Skill to Analyze</h3>
                  <p className="text-gray-600">
                    Click on any skill or job from the list to see detailed automation risk analysis, AI competitors,
                    and personalized recommendations.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
