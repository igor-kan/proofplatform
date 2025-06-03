import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Shield, Users, Globe, Target, BookOpen, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">AI-Proof</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
              Dashboard
            </Link>
            <Link href="/explorer" className="text-gray-600 hover:text-blue-600 transition-colors">
              Risk Explorer
            </Link>
            <Link href="/skills" className="text-gray-600 hover:text-blue-600 transition-colors">
              Skill Tree
            </Link>
            <Link href="/analyzer" className="text-gray-600 hover:text-blue-600 transition-colors">
              Resume Analyzer
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">🚀 The Future of Work Intelligence</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stay <span className="text-blue-600">AI-Proof</span> in the Age of Automation
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Navigate AI-driven job disruption with clarity, tools, and purpose. Get personalized insights, automation
            risk analysis, and future-proof career guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href="/dashboard">
                Start Your Analysis <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
              <Link href="/demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive AI-Resistance Toolkit</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to understand, adapt, and thrive in an AI-transformed workplace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-red-500" />
                  <CardTitle>AI Risk Explorer</CardTitle>
                </div>
                <CardDescription>
                  Search any skill or job to get automation risk scores and AI competitor analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Data Analyst</span>
                    <Badge variant="destructive">75% Risk</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">UX Designer</span>
                    <Badge variant="secondary">35% Risk</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Therapist</span>
                    <Badge className="bg-green-100 text-green-800">15% Risk</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-purple-500" />
                  <CardTitle>Skill Tree of the Future</CardTitle>
                </div>
                <CardDescription>Interactive skill evolution map showing career transition paths</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600">
                  <div className="mb-2">🎯 Current: Web Developer</div>
                  <div className="mb-2">🔄 Transition: AI Product Manager</div>
                  <div>📈 Growth: +40% salary potential</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-6 w-6 text-blue-500" />
                  <CardTitle>Resume Risk Analyzer</CardTitle>
                </div>
                <CardDescription>Upload your resume for color-coded automation risk assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Leadership Skills</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Data Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Manual Reporting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-orange-500" />
                  <CardTitle>Team Risk Analysis</CardTitle>
                </div>
                <CardDescription>Enterprise-grade workforce automation impact assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600">
                  <div>📊 Team Automation Risk: 45%</div>
                  <div>💡 Recommended Actions: 8</div>
                  <div>🎯 Training Priority: High</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-green-500" />
                  <CardTitle>Upskill Navigator</CardTitle>
                </div>
                <CardDescription>Personalized learning paths and course recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600">
                  <div>🎓 Recommended Courses: 12</div>
                  <div>⏱️ Estimated Time: 6 months</div>
                  <div>💰 ROI Projection: +25% salary</div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-indigo-500" />
                  <CardTitle>Global Automation Map</CardTitle>
                </div>
                <CardDescription>Country and industry-wide automation trends and forecasts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600">
                  <div>🌍 195 Countries Tracked</div>
                  <div>🏭 50+ Industries Analyzed</div>
                  <div>📈 Real-time Updates</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Everyone</h2>
            <p className="text-lg text-gray-600">
              Tailored experiences for individuals, educators, enterprises, and governments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Individual Mode</CardTitle>
                <CardDescription>Personal career coaching and skill development</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Educator Mode</CardTitle>
                <CardDescription>Curriculum planning and skill demand insights</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Enterprise Mode</CardTitle>
                <CardDescription>Workforce planning and retraining programs</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Gov/NGO Mode</CardTitle>
                <CardDescription>Regional workforce and policy planning</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Future-Proof Your Career?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who are already using AI-Proof to navigate the future of work
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <Link href="/dashboard">
                Start Free Analysis <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/enterprise">Enterprise Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">AI-Proof</span>
              </div>
              <p className="text-gray-400">Helping humanity adapt and thrive in the age of AI automation.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/explorer" className="hover:text-white transition-colors">
                    Risk Explorer
                  </Link>
                </li>
                <li>
                  <Link href="/skills" className="hover:text-white transition-colors">
                    Skill Tree
                  </Link>
                </li>
                <li>
                  <Link href="/analyzer" className="hover:text-white transition-colors">
                    Resume Analyzer
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-white transition-colors">
                    API Access
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/individual" className="hover:text-white transition-colors">
                    For Individuals
                  </Link>
                </li>
                <li>
                  <Link href="/education" className="hover:text-white transition-colors">
                    For Educators
                  </Link>
                </li>
                <li>
                  <Link href="/enterprise" className="hover:text-white transition-colors">
                    For Enterprise
                  </Link>
                </li>
                <li>
                  <Link href="/government" className="hover:text-white transition-colors">
                    For Government
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI-Proof. All rights reserved. Built to help humanity thrive.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
