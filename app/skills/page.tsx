"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Target, ArrowRight, TrendingUp, Brain, Zap, Shield, BookOpen, Award } from "lucide-react"
import Link from "next/link"

export default function SkillsPage() {
  const [selectedPath, setSelectedPath] = useState(null)

  const skillTree = {
    current: {
      role: "Data Analyst",
      level: "Mid-Level",
      aiResistance: 35,
      skills: ["Excel", "SQL", "Python", "Tableau", "Statistics"],
    },
    paths: [
      {
        id: "ai-strategist",
        title: "AI Strategy Consultant",
        aiResistance: 85,
        salaryIncrease: 40,
        timeToTransition: "8-12 months",
        difficulty: "Medium",
        description: "Help organizations implement AI while maintaining human oversight",
        requiredSkills: [
          { name: "AI Ethics", current: 0, target: 85, category: "Strategy" },
          { name: "Change Management", current: 30, target: 90, category: "Leadership" },
          { name: "Business Strategy", current: 45, target: 85, category: "Strategy" },
          { name: "Stakeholder Communication", current: 60, target: 95, category: "Communication" },
        ],
        learningPath: [
          { phase: "Foundation", duration: "2 months", focus: "AI fundamentals and ethics" },
          { phase: "Strategy", duration: "3 months", focus: "Business strategy and consulting" },
          { phase: "Leadership", duration: "3 months", focus: "Change management and communication" },
          { phase: "Specialization", duration: "2 months", focus: "Industry-specific AI applications" },
        ],
      },
      {
        id: "data-storyteller",
        title: "Data Storytelling Specialist",
        aiResistance: 75,
        salaryIncrease: 25,
        timeToTransition: "4-6 months",
        difficulty: "Easy",
        description: "Transform complex data into compelling narratives for decision-makers",
        requiredSkills: [
          { name: "Visual Design", current: 20, target: 80, category: "Creative" },
          { name: "Narrative Techniques", current: 35, target: 90, category: "Communication" },
          { name: "Psychology", current: 10, target: 70, category: "Human Behavior" },
          { name: "Presentation Skills", current: 55, target: 95, category: "Communication" },
        ],
        learningPath: [
          { phase: "Storytelling", duration: "1 month", focus: "Narrative and presentation techniques" },
          { phase: "Design", duration: "2 months", focus: "Visual design and data visualization" },
          { phase: "Psychology", duration: "1 month", focus: "Cognitive psychology and persuasion" },
          { phase: "Practice", duration: "2 months", focus: "Portfolio building and real projects" },
        ],
      },
      {
        id: "ai-trainer",
        title: "AI Training Specialist",
        aiResistance: 80,
        salaryIncrease: 30,
        timeToTransition: "6-9 months",
        difficulty: "Medium",
        description: "Train teams to work effectively with AI tools and systems",
        requiredSkills: [
          { name: "Adult Learning", current: 25, target: 85, category: "Education" },
          { name: "AI Tool Mastery", current: 40, target: 90, category: "Technical" },
          { name: "Curriculum Design", current: 15, target: 80, category: "Education" },
          { name: "Empathy & Patience", current: 70, target: 95, category: "Interpersonal" },
        ],
        learningPath: [
          { phase: "Education Theory", duration: "2 months", focus: "Adult learning and curriculum design" },
          { phase: "AI Mastery", duration: "2 months", focus: "Deep dive into AI tools and capabilities" },
          { phase: "Training Skills", duration: "2 months", focus: "Facilitation and presentation skills" },
          { phase: "Certification", duration: "1 month", focus: "Professional training certifications" },
        ],
      },
    ],
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600"
      case "Medium":
        return "text-yellow-600"
      case "Hard":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getDifficultyBadge = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return <Badge className="bg-green-100 text-green-800">Easy Transition</Badge>
      case "Medium":
        return <Badge className="bg-yellow-100 text-yellow-800">Medium Effort</Badge>
      case "Hard":
        return <Badge variant="destructive">High Effort</Badge>
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
            <Link href="/explorer" className="text-gray-600 hover:text-blue-600">
              Risk Explorer
            </Link>
            <Link href="/analyzer" className="text-gray-600 hover:text-blue-600">
              Resume Analyzer
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Skill Tree of the Future</h1>
          <p className="text-gray-600">
            Interactive career evolution map showing AI-resistant transition paths from your current role
          </p>
        </div>

        {/* Current Position */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Your Current Position</span>
              <Badge variant="secondary">Starting Point</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h3 className="font-semibold text-lg">{skillTree.current.role}</h3>
                <p className="text-gray-600">{skillTree.current.level}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">AI-Resistance Score</p>
                <div className="flex items-center space-x-2">
                  <Progress value={skillTree.current.aiResistance} className="flex-1" />
                  <span className="text-sm font-medium">{skillTree.current.aiResistance}%</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Current Skills</p>
                <div className="flex flex-wrap gap-1">
                  {skillTree.current.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <Button asChild>
                  <Link href="/analyzer">
                    Analyze Current Skills <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Career Paths */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {skillTree.paths.map((path) => (
            <Card
              key={path.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedPath?.id === path.id ? "ring-2 ring-blue-500 bg-blue-50" : ""
              }`}
              onClick={() => setSelectedPath(path)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">{path.title}</CardTitle>
                  {getDifficultyBadge(path.difficulty)}
                </div>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">AI-Resistance</p>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="font-semibold text-green-600">{path.aiResistance}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Salary Increase</p>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-blue-500" />
                      <span className="font-semibold text-blue-600">+{path.salaryIncrease}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Timeline</p>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-purple-500" />
                      <span className="font-semibold">{path.timeToTransition}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Difficulty</p>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-gray-500" />
                      <span className={`font-semibold ${getDifficultyColor(path.difficulty)}`}>{path.difficulty}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button variant={selectedPath?.id === path.id ? "default" : "outline"} className="w-full">
                    {selectedPath?.id === path.id ? "View Details" : "Select Path"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Path Analysis */}
        {selectedPath && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-blue-600" />
                  <span>Detailed Path Analysis: {selectedPath.title}</span>
                </CardTitle>
                <CardDescription>
                  Complete roadmap and skill development plan for your career transition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">{selectedPath.aiResistance}%</div>
                    <p className="text-sm text-gray-600">AI-Resistance Score</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">+{selectedPath.salaryIncrease}%</div>
                    <p className="text-sm text-gray-600">Salary Increase</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-purple-600">{selectedPath.timeToTransition}</div>
                    <p className="text-sm text-gray-600">Time to Transition</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Required Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Skill Development Plan</span>
                  </CardTitle>
                  <CardDescription>Skills you need to develop for this career path</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedPath.requiredSkills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Current: {skill.current}%</span>
                          <span>Target: {skill.target}%</span>
                        </div>
                        <Progress value={(skill.current / skill.target) * 100} className="h-2" />
                        <p className="text-xs text-gray-600">Gap: {skill.target - skill.current} points to develop</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Learning Path */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Learning Roadmap</span>
                  </CardTitle>
                  <CardDescription>Phase-by-phase learning plan to reach your goal</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedPath.learningPath.map((phase, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold">{phase.phase}</h4>
                          <Badge variant="outline" className="text-xs">
                            {phase.duration}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">{phase.focus}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg">
                Start Learning Path
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download Career Plan
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/analyzer">Analyze Current Skills</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
