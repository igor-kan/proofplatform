"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Upload,
  FileText,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Download,
  Target,
  TrendingUp,
  BookOpen,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function AnalyzerPage() {
  const [resumeUploaded, setResumeUploaded] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const handleFileUpload = () => {
    setResumeUploaded(true)
    setAnalyzing(true)

    // Simulate analysis
    setTimeout(() => {
      setAnalyzing(false)
      setAnalysisComplete(true)
    }, 3000)
  }

  const resumeAnalysis = {
    overallScore: 68,
    aiResistantSkills: [
      { skill: "Team Leadership", strength: 95, category: "Management" },
      { skill: "Strategic Planning", strength: 88, category: "Strategy" },
      { skill: "Client Relations", strength: 92, category: "Communication" },
      { skill: "Creative Problem Solving", strength: 85, category: "Creativity" },
      { skill: "Cross-functional Collaboration", strength: 90, category: "Teamwork" },
    ],
    atRiskSkills: [
      { skill: "Data Analysis", risk: 65, category: "Technical" },
      { skill: "Report Generation", risk: 78, category: "Administrative" },
      { skill: "Market Research", risk: 55, category: "Research" },
    ],
    obsoleteSkills: [
      { skill: "Manual Data Entry", risk: 95, category: "Administrative" },
      { skill: "Basic Excel Reporting", risk: 88, category: "Technical" },
      { skill: "File Organization", risk: 92, category: "Administrative" },
    ],
  }

  const recommendations = [
    {
      type: "immediate",
      title: "Immediate Actions (Next 30 Days)",
      items: [
        "Remove manual data entry from resume",
        "Emphasize leadership and strategic thinking",
        "Add AI collaboration experience",
        "Highlight creative problem-solving examples",
      ],
    },
    {
      type: "short-term",
      title: "Short-term Development (3-6 Months)",
      items: [
        "Learn advanced data visualization tools",
        "Develop AI prompt engineering skills",
        "Take a course in strategic leadership",
        "Build portfolio of creative solutions",
      ],
    },
    {
      type: "long-term",
      title: "Long-term Strategy (6-12 Months)",
      items: [
        "Transition to AI-augmented analyst role",
        "Develop expertise in AI ethics and governance",
        "Build thought leadership in your industry",
        "Consider management or consulting roles",
      ],
    },
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
          <nav className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>
            <Link href="/explorer" className="text-gray-600 hover:text-blue-600">
              Risk Explorer
            </Link>
            <Link href="/skills" className="text-gray-600 hover:text-blue-600">
              Skill Tree
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume Risk Analyzer</h1>
          <p className="text-gray-600">
            Upload your resume to get a color-coded automation risk assessment and optimization recommendations
          </p>
        </div>

        {!resumeUploaded ? (
          /* Upload Section */
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Upload className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Your Resume</h3>
                  <p className="text-gray-600 mb-6">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>

                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 mb-6 hover:border-blue-400 transition-colors">
                    <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Drag and drop your resume here, or</p>
                    <Button onClick={handleFileUpload}>Choose File</Button>
                  </div>

                  <div className="text-sm text-gray-500 space-y-1">
                    <p>✓ Your data is processed securely and never stored</p>
                    <p>✓ Analysis typically takes 30-60 seconds</p>
                    <p>✓ Get instant color-coded risk assessment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : analyzing ? (
          /* Analyzing Section */
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="animate-spin mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Your Resume</h3>
                <p className="text-gray-600 mb-6">Our AI is evaluating your skills for automation risk...</p>
                <Progress value={65} className="w-full mb-4" />
                <p className="text-sm text-gray-500">Processing skills and experience...</p>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Results Section */
          <div className="space-y-8">
            {/* Overall Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Your AI-Resistance Score</span>
                  <Badge className="bg-green-100 text-green-800">Good</Badge>
                </CardTitle>
                <CardDescription>Based on your current skill profile and experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">{resumeAnalysis.overallScore}%</div>
                    <p className="text-sm text-gray-600">AI-Resistant</p>
                  </div>
                  <div className="flex-1">
                    <Progress value={resumeAnalysis.overallScore} className="w-full mb-4" />
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-green-600 font-semibold">{resumeAnalysis.aiResistantSkills.length}</div>
                        <div className="text-gray-600">AI-Resistant Skills</div>
                      </div>
                      <div className="text-center">
                        <div className="text-yellow-600 font-semibold">{resumeAnalysis.atRiskSkills.length}</div>
                        <div className="text-gray-600">At-Risk Skills</div>
                      </div>
                      <div className="text-center">
                        <div className="text-red-600 font-semibold">{resumeAnalysis.obsoleteSkills.length}</div>
                        <div className="text-gray-600">Obsolete Skills</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="skills">Skill Analysis</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                <TabsTrigger value="optimized">Optimized Resume</TabsTrigger>
                <TabsTrigger value="learning">Learning Path</TabsTrigger>
              </TabsList>

              <TabsContent value="skills" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  {/* AI-Resistant Skills */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                        <span>AI-Resistant Skills</span>
                      </CardTitle>
                      <CardDescription>Keep and emphasize these strengths</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {resumeAnalysis.aiResistantSkills.map((skill, index) => (
                        <div key={index} className="p-3 bg-green-50 rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{skill.skill}</span>
                            <Badge variant="outline" className="text-xs">
                              {skill.strength}%
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">{skill.category}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* At-Risk Skills */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-yellow-600">
                        <AlertTriangle className="h-5 w-5" />
                        <span>At-Risk Skills</span>
                      </CardTitle>
                      <CardDescription>Adapt or supplement these skills</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {resumeAnalysis.atRiskSkills.map((skill, index) => (
                        <div key={index} className="p-3 bg-yellow-50 rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{skill.skill}</span>
                            <Badge variant="outline" className="text-xs">
                              {skill.risk}% risk
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">{skill.category}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Obsolete Skills */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-red-600">
                        <XCircle className="h-5 w-5" />
                        <span>Obsolete Skills</span>
                      </CardTitle>
                      <CardDescription>Consider removing or reframing</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {resumeAnalysis.obsoleteSkills.map((skill, index) => (
                        <div key={index} className="p-3 bg-red-50 rounded-lg">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-sm">{skill.skill}</span>
                            <Badge variant="destructive" className="text-xs">
                              {skill.risk}% risk
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">{skill.category}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="recommendations" className="space-y-6">
                {recommendations.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        {section.type === "immediate" && <Target className="h-5 w-5 text-red-500" />}
                        {section.type === "short-term" && <TrendingUp className="h-5 w-5 text-yellow-500" />}
                        {section.type === "long-term" && <Lightbulb className="h-5 w-5 text-blue-500" />}
                        <span>{section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="optimized" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Optimized Resume Preview</CardTitle>
                    <CardDescription>
                      Your resume rewritten to emphasize AI-resistant skills and remove obsolete ones
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 p-6 rounded-lg mb-4">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Professional Summary</h3>
                          <p className="text-sm text-gray-700">
                            Strategic leader with proven expertise in{" "}
                            <span className="bg-green-100 px-1 rounded">cross-functional collaboration</span> and
                            <span className="bg-green-100 px-1 rounded"> creative problem-solving</span>. Experienced in
                            <span className="bg-green-100 px-1 rounded">team leadership</span> and
                            <span className="bg-green-100 px-1 rounded">strategic planning</span> with a track record of
                            driving innovation and building strong{" "}
                            <span className="bg-green-100 px-1 rounded">client relationships</span>.
                          </p>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-2">Core Competencies</h3>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-green-100 p-2 rounded">• Strategic Leadership</div>
                            <div className="bg-green-100 p-2 rounded">• Team Management</div>
                            <div className="bg-green-100 p-2 rounded">• Client Relations</div>
                            <div className="bg-green-100 p-2 rounded">• Creative Problem Solving</div>
                            <div className="bg-yellow-100 p-2 rounded">• AI-Augmented Analytics</div>
                            <div className="bg-yellow-100 p-2 rounded">• Data Visualization</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Download Optimized Resume
                      </Button>
                      <Button variant="outline">View Full Preview</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="learning" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5" />
                      <span>Personalized Learning Path</span>
                    </CardTitle>
                    <CardDescription>Curated courses and resources to boost your AI-resistance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">AI Leadership Fundamentals</h4>
                          <Badge>High Priority</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Learn to lead AI-augmented teams</p>
                        <div className="text-xs text-gray-500">
                          <p>Duration: 4 weeks • Platform: Coursera</p>
                          <p>ROI: +15% salary potential</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">Strategic Thinking & Innovation</h4>
                          <Badge variant="secondary">Medium Priority</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Develop human-centric strategic skills</p>
                        <div className="text-xs text-gray-500">
                          <p>Duration: 6 weeks • Platform: edX</p>
                          <p>ROI: +10% salary potential</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">AI Ethics & Governance</h4>
                          <Badge variant="outline">Future-Proof</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Become an AI ethics expert</p>
                        <div className="text-xs text-gray-500">
                          <p>Duration: 3 weeks • Platform: Udacity</p>
                          <p>ROI: +20% salary potential</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">Advanced Data Storytelling</h4>
                          <Badge variant="secondary">Skill Enhancement</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Transform data into compelling narratives</p>
                        <div className="text-xs text-gray-500">
                          <p>Duration: 5 weeks • Platform: LinkedIn Learning</p>
                          <p>ROI: +12% salary potential</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold">Learning Path Summary</h4>
                        <Badge className="bg-blue-100 text-blue-800">18 weeks total</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center text-sm">
                        <div>
                          <div className="font-semibold text-green-600">+25%</div>
                          <div className="text-gray-600">Projected Salary Increase</div>
                        </div>
                        <div>
                          <div className="font-semibold text-blue-600">85%</div>
                          <div className="text-gray-600">Target AI-Resistance Score</div>
                        </div>
                        <div>
                          <div className="font-semibold text-purple-600">$2,400</div>
                          <div className="text-gray-600">Total Investment</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" asChild>
                <Link href="/skills">Explore Career Paths</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/dashboard">Back to Dashboard</Link>
              </Button>
              <Button size="lg" variant="outline">
                Analyze Another Resume
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
