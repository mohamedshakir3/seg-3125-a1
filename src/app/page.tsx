import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
			{/* Navigation */}
			<nav className="border-b border-gray-200 dark:border-gray-800 py-4 px-6 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-10 transition-colors duration-200">
				<div className="max-w-6xl mx-auto flex justify-between items-center">
					<div className="flex items-center gap-2">
						<Button variant="ghost" size="icon" className="rounded-full">
							<span className="text-lg font-semibold">MS</span>
						</Button>
					</div>
					<div className="flex items-center gap-4">
						<div className="hidden md:flex gap-6">
							<a
								href="#about"
								className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
							>
								About
							</a>
							<a
								href="#work"
								className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
							>
								How I Work
							</a>
							<a
								href="#projects"
								className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
							>
								Case Studies
							</a>
						</div>
						<ThemeToggle />
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
				<div className="max-w-4xl mx-auto text-center">
					<Avatar className="w-40 h-40 mx-auto border-4 border-white dark:border-gray-700 shadow-xl">
						<AvatarImage src="/profile-image.png" alt="Mohamed Shakir" />
						<AvatarFallback className="text-2xl">MS</AvatarFallback>
					</Avatar>

					<h1 className="mt-8 text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
						Mohamed Shakir
					</h1>
					<p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
						Student at University of Ottawa
					</p>
					<div className="flex justify-center gap-4 mt-8">
						<Button
							variant="outline"
							size="lg"
							className="gap-2 border-gray-200 dark:border-gray-700"
						>
							<Linkedin className="h-5 w-5" />
							<span>LinkedIn</span>
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="gap-2 border-gray-200 dark:border-gray-700"
						>
							<Github className="h-5 w-5" />
							<span>GitHub</span>
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="gap-2 border-gray-200 dark:border-gray-700"
						>
							<Mail className="h-5 w-5" />
							<span>Contact</span>
						</Button>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto px-6 py-16">
				{/* About Section */}
				<section id="about" className="mb-20 scroll-mt-20">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">About Me</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
								Hi! I&apos;m Mohamed, a passionate full-stack developer and
								UI/UX design student at the University of Ottawa. With extensive
								experience in modern web technologies, particularly Next.js,
								I&apos;m now expanding my expertise into user experience design
								and interface principles.
							</p>
							<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
								My technical background gives me a unique perspective on design
								- I understand both the possibilities and constraints of
								implementation, allowing me to create designs that are not only
								beautiful but also technically feasible and performant.
							</p>
							<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
								I believe the best digital experiences happen at the
								intersection of solid engineering and thoughtful design. My goal
								is to bridge this gap and create products that users love and
								developers can build efficiently.
							</p>
						</div>
						<div className="relative">
							<div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-lg">
								<h3 className="text-xl font-semibold mb-4">
									Technical Background
								</h3>
								<ul className="space-y-3 text-gray-700 dark:text-gray-300">
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
										<span>Full-Stack Web Development</span>
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
										<span>Next.js & React Specialist</span>
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-purple-500 rounded-full"></div>
										<span>UI/UX Design Student</span>
									</li>
									<li className="flex items-center gap-3">
										<div className="w-2 h-2 bg-pink-500 rounded-full"></div>
										<span>University of Ottawa</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* How I Work Section */}
				<section id="work" className="mb-20 scroll-mt-20">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">How I Work</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
					</div>

					<Card className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
						<CardContent className="p-8">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
										Technical Foundation
									</h3>
									<p className="text-gray-700 dark:text-gray-300 mb-4">
										With extensive full-stack development experience, I bring a
										developer&apos;s perspective to design challenges. I
										understand the technical implications of design decisions
										and can create solutions that are both user-friendly and
										implementation-ready.
									</p>
									<ul className="space-y-2 text-gray-700 dark:text-gray-300">
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
											<span>Next.js & React Development</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
											<span>Full-Stack Architecture</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
											<span>Performance Optimization</span>
										</li>
										<li className="flex items-start gap-2">
											<div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
											<span>Modern Web Technologies</span>
										</li>
									</ul>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
										Design Learning Journey
									</h3>
									<p className="text-gray-700 dark:text-gray-300 mb-4">
										Currently expanding my skillset through formal UI/UX
										education, learning to apply design thinking and
										user-centered methodologies to complement my technical
										expertise.
									</p>
									<div className="space-y-3">
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
												1
											</div>
											<span className="text-gray-700 dark:text-gray-300">
												User Research & Analysis
											</span>
										</div>
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
												2
											</div>
											<span className="text-gray-700 dark:text-gray-300">
												Design & Prototyping
											</span>
										</div>
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 font-semibold text-sm">
												3
											</div>
											<span className="text-gray-700 dark:text-gray-300">
												Technical Implementation
											</span>
										</div>
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-400 font-semibold text-sm">
												4
											</div>
											<span className="text-gray-700 dark:text-gray-300">
												Testing & Iteration
											</span>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
								<h3 className="text-lg font-semibold mb-4">
									Learning Resources & References
								</h3>
								<div className="flex flex-wrap gap-4">
									<Button variant="outline" size="sm" className="gap-2">
										<ExternalLink className="h-4 w-4" />
										<span>Nielsen Norman Group</span>
									</Button>
									<Button variant="outline" size="sm" className="gap-2">
										<ExternalLink className="h-4 w-4" />
										<span>UI/UX Course Materials</span>
									</Button>
									<Button variant="outline" size="sm" className="gap-2">
										<ExternalLink className="h-4 w-4" />
										<span>Next.js Documentation</span>
									</Button>
									<Button variant="outline" size="sm" className="gap-2">
										<ExternalLink className="h-4 w-4" />
										<span>Design Communities</span>
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</section>

				{/* Case Studies Section */}
				<section id="projects" className="scroll-mt-20">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Case Studies</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
						<p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
							Throughout this semester, I&apos;ll be working on four
							comprehensive design projects, each showcasing the intersection of
							technical implementation and user-centered design.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Service Site */}
						<Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
							<CardContent className="p-0">
								<div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 overflow-hidden">
									<Image
										src="/placeholder.svg"
										alt="Service Site Design"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors duration-300"></div>
									<div className="absolute top-4 right-4">
										<span className="bg-white/90 dark:bg-gray-900/90 text-xs font-medium px-3 py-1 rounded-full">
											Coming Soon
										</span>
									</div>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										Service Website
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
										A professional service website combining user trust
										principles with modern web development practices and
										responsive design.
									</p>
									<div className="flex items-center justify-between">
										<span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
											Design 1
										</span>
										<Link href="/projects/service-website">
											<Button variant="ghost" size="sm">
												View Project
											</Button>
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Game Design */}
						<Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
							<CardContent className="p-0">
								<div className="relative h-48 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 overflow-hidden">
									<Image
										src="/placeholder.svg"
										alt="Game Design"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-purple-600/20 group-hover:bg-purple-600/10 transition-colors duration-300"></div>
									<div className="absolute top-4 right-4">
										<span className="bg-white/90 dark:bg-gray-900/90 text-xs font-medium px-3 py-1 rounded-full">
											Coming Soon
										</span>
									</div>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										Interactive Game
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
										An interactive web game built with modern JavaScript
										frameworks, focusing on engaging UX and smooth performance.
									</p>
									<div className="flex items-center justify-between">
										<span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
											Design 2
										</span>
										<Link href="/projects/interactive-game">
											<Button variant="ghost" size="sm">
												View Project
											</Button>
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* E-commerce Site */}
						<Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
							<CardContent className="p-0">
								<div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 overflow-hidden">
									<Image
										src="/placeholder.svg"
										alt="E-commerce Design"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-green-600/20 group-hover:bg-green-600/10 transition-colors duration-300"></div>
									<div className="absolute top-4 right-4">
										<span className="bg-white/90 dark:bg-gray-900/90 text-xs font-medium px-3 py-1 rounded-full">
											Coming Soon
										</span>
									</div>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										E-commerce Platform
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
										A full-featured e-commerce platform with focus on conversion
										optimization, built with Next.js and modern payment
										integration.
									</p>
									<div className="flex items-center justify-between">
										<span className="text-sm text-green-600 dark:text-green-400 font-medium">
											Design 3
										</span>
										<Link href="/projects/ecommerce-platform">
											<Button variant="ghost" size="sm">
												View Project
											</Button>
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Analytics Site */}
						<Card className="group hover:shadow-xl transition-all duration-300 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
							<CardContent className="p-0">
								<div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 overflow-hidden">
									<Image
										src="/placeholder.svg"
										alt="Analytics Dashboard"
										fill
										className="object-cover group-hover:scale-105 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-orange-600/20 group-hover:bg-orange-600/10 transition-colors duration-300"></div>
									<div className="absolute top-4 right-4">
										<span className="bg-white/90 dark:bg-gray-900/90 text-xs font-medium px-3 py-1 rounded-full">
											Coming Soon
										</span>
									</div>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										Analytics Dashboard
									</h3>
									<p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
										A real-time analytics dashboard with interactive data
										visualizations, built with modern charting libraries and
										optimized performance.
									</p>
									<div className="flex items-center justify-between">
										<span className="text-sm text-orange-600 dark:text-orange-400 font-medium">
											Design 4
										</span>
										<Link href="/projects/analytics-dashboard">
											<Button variant="ghost" size="sm">
												View Project
											</Button>
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>
			</div>

			{/* Footer */}
			<footer className="border-t border-gray-200 dark:border-gray-800 py-8 px-6 mt-20">
				<div className="max-w-6xl mx-auto text-center">
					<p className="text-gray-600 dark:text-gray-400">
						© 2024 Mohamed Shakir.
					</p>
				</div>
			</footer>
		</main>
	)
}
