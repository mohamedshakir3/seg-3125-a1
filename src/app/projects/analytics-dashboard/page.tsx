import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AnalyticsDashboardPage() {
	return (
		<main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-amber-100 dark:from-gray-900 dark:to-amber-900 p-4">
			<div className="max-w-md w-full bg-white dark:bg-gray-950 rounded-xl shadow-lg p-8 text-center">
				<h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
					Analytics Dashboard
				</h1>
				<p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
					Coming soon!
				</p>
				<Link href="/">
					<Button>Return Home</Button>
				</Link>
			</div>
		</main>
	)
}
