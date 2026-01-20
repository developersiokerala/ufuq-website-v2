import { getImagePath } from '../utils/imagePath';

export default function Hackathon() {
	return (
		<div className="bg-[color:var(--bg)] text-white leading-relaxed overflow-x-hidden">
			<header className="max-w-6xl mx-auto px-6 pt-10 fade">
				<nav className="flex items-center justify-between">
					<div className="flex items-center gap-3 slide-left"></div>
					<div id="nav-links" className="hidden sm:flex gap-4 items-center" aria-hidden="true">
						<a href="#themes" className="text-sm text-white/80 nav-link stagger-1">Themes</a>
						<a href="#timeline" className="text-sm text-white/80 nav-link stagger-2">Timeline</a>
						<a href="#prizes" className="text-sm text-white/80 nav-link stagger-3">Prizes</a>
						<a href="#rules" className="text-sm text-white/80 nav-link stagger-4">Rules</a>
						<a href="https://events.siokerala.org/event/26" className="px-4 py-2 rounded-full moving-gradient text-black text-sm font-medium btn-hover stagger-5">Register</a>
					</div>
				</nav>
			</header>

			<main className="max-w-6xl mx-auto px-6 pb-20">
				<section className="hero-section mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center fade-up">
					<div className="lg:col-span-7">
						<div className="relative overflow-hidden rounded-2xl grid-bg p-4 sm:p-6 lg:p-8" style={{ borderRadius: "24px" }}>
							<div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#06051a] to-[#0f0e22] pointer-events-none"></div>

							<div className="relative z-10">
								<div className="flex items-center gap-4 mb-4">

									<div>
										<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-reveal">
											<span className="stagger-1">Hackathon for</span> <br />
												<span className="text-[#8776ff]">Social Good</span>
										</h1>
										<div className="mt-1 text-sm text-white/70 stagger-3">November 2025 • <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/6 text-xs pulse">Hybrid</span></div>
									</div>
								</div>

								<p className="text-white/80 max-w-2xl stagger-4">
									The <span className="text-white font-semibold">Hackathon for Social Good</span> is more than just a competition —
									it&apos;s a movement to align <span className="text-[#a78bfa] font-semibold">science and technology with values</span>.
									Organized by <span className="text-[#a78bfa] font-semibold">SIO Kerala</span> as part of its
									<span className="text-[#a78bfa] font-semibold">UFUQ Science & Technology Fest</span>,
									this initiative seeks to inspire young minds to innovate with
									<span className="text-[#a78bfa] font-semibold">responsibility and justice</span>.
								</p>


								<div className="mt-6 flex flex-col sm:flex-row gap-3 stagger-5">
									<a id="register" href="https://events.siokerala.org/event/26" className="inline-flex items-center justify-center gap-3 px-5 py-3 rounded-full moving-gradient text-black font-semibold shadow-lg btn-hover w-full sm:w-auto">Register Now</a>
									<div className="flex flex-wrap gap-3 w-full sm:flex-1">
										<a href="#themes" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 text-sm text-white/90 hover:bg-white/5 transition-all duration-300 flex-1 min-w-0">View Themes</a>
										<a href="#rules" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 text-sm text-white/90 hover:bg-white/5 transition-all duration-300 flex-1 min-w-0">View Rules</a>
									</div>
								</div>

								<div className="mt-6 text-sm text-white/60 max-w-xl fade stagger-6">
									<strong className="text-white">Form a team of 1–5 members.</strong>
								</div>
							</div>
						</div>
					</div>

					<aside className="lg:col-span-5 slide-right">

						<div className="mt-6 glow-card p-6 card-hover tilt-3d">
							<h4 className="font-semibold mb-3 stagger-1">Register</h4>
							<p className="text-sm text-white/80 stagger-2">Scan QR or click register to submit your team. Open to students and changemakers across Kerala & beyond.</p>
							<div className="pt-2 stagger-3"><img src={getImagePath("/images/hackathon/image.png")} alt="" className="rounded-2xl hover:scale-105 transition-transform duration-300 w-full" /></div>
							<div className="mt-4 flex gap-3 stagger-4">
								<div className="flex-1">
									<a href="https://events.siokerala.org/event/26" className="block px-4 py-2 rounded-full moving-gradient text-black text-center font-medium btn-hover">Register Now</a>
								</div>
							</div>
						</div>
					</aside>
				</section>

				{/* <!-- THEMES --> */}
				<section id="themes" className="mt-14 fade-up">
					<h2 className="text-2xl font-bold mb-6 slide-left">Themes & Challenges</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* <!-- card 1 --> */}
						<article className="p-5 rounded-2xl bg-white/3 border border-white/5 card-hover stagger-1">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-lg accent-gradient flex items-center justify-center text-black font-bold float">1</div>
								<div>
									<h3 className="font-semibold">Science & Technology for Society</h3>
									<ul className="mt-2 text-sm text-white/80 space-y-1">
										<li>• Using science and technology to create fair opportunities for all.</li>
										<li>• Innovating to reduce inequality and support underserved communities.</li>
									</ul>
								</div>
							</div>
						</article>

						{/* <!-- card 2 --> */}
						<article className="p-5 rounded-2xl bg-white/3 border border-white/5 card-hover stagger-2">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-lg accent-gradient flex items-center justify-center text-black font-bold float">2</div>
								<div>
									<h3 className="font-semibold">Ethical & Responsible AI</h3>
									<ul className="mt-2 text-sm text-white/80 space-y-1">
										<li>• AI tools that are transparent, fair, and accountable.</li>
										<li>• AI to counter misinformation, bias, or manipulation.</li>
									</ul>
								</div>
							</div>
						</article>

						{/* <!-- card 3 --> */}
						<article className="p-5 rounded-2xl bg-white/3 border border-white/5 card-hover stagger-3">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-lg accent-gradient flex items-center justify-center text-black font-bold float">3</div>
								<div>
									<h3 className="font-semibold">Science & Tech Against Oppression</h3>
									<ul className="mt-2 text-sm text-white/80 space-y-1">
										<li>• Exposing/resisting surveillance, biometric control, or drone warfare.</li>
										<li>• Using tech to stand with the oppressed and defend truth.</li>
									</ul>
								</div>
							</div>
						</article>

						{/* <!-- card 4 --> */}
						<article className="p-5 rounded-2xl bg-white/3 border border-white/5 card-hover stagger-4">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-lg accent-gradient flex items-center justify-center text-black font-bold float">4</div>
								<div>
									<h3 className="font-semibold">Islamic Knowledge & Empowerment Tools</h3>
									<ul className="mt-2 text-sm text-white/80 space-y-1">
										<li>• Quran/Hadith learning apps and digital pedagogy.</li>
										<li>• Ethical digital sadaqah, open-source education, or empowerment platforms.</li>
									</ul>
								</div>
							</div>
						</article>
					</div>
				</section>

				{/* <!-- TEAM & TIMELINE --> */}
				<section className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start fade-up">
					<div className="lg:col-span-1 slide-left">
						<h2 className="text-2xl font-bold stagger-1">Team Formation & Eligibility</h2>
						<p className="mt-3 text-white/80 stagger-2">Register as a team of 1–5 members. Open to students, innovators, and changemakers across Kerala and beyond.</p>
						<div className="mt-4 stagger-3">
							<a href="https://events.siokerala.org/event/26" className="inline-flex items-center gap-3 px-4 py-2 rounded-full moving-gradient text-black font-medium btn-hover">Register Now</a>
						</div>
					</div>

					<div className="lg:col-span-2 slide-right">
						<h3 className="text-lg font-semibold mb-4 stagger-1">Timeline</h3>
						<div className="overflow-hidden rounded-2xl bg-white/3 p-4 card-hover">
							<table className="w-full text-left text-sm">
								<thead className="sr-only"><tr><th>Phase</th><th>Dates</th><th>Description</th></tr></thead>
								<tbody className="divide-y divide-white/6">
									<tr className="py-2 stagger-1">
										<td className="py-4 font-medium">Registration</td>
										<td className="py-4">Starts on Sep 27</td>
										<td className="py-4 text-white/80">Participants register as teams.</td>
									</tr>
									<tr className="stagger-2">
										<td className="py-4 font-medium">Orientation Session</td>
										<td className="py-4">Oct 27</td>
										<td className="py-4 text-white/80">Orientation about hackathon, themes & mentorship.</td>
									</tr>
									<tr className="stagger-3">
										<td className="py-4 font-medium">Idea Proposal</td>
										<td className="py-4">Nov 20</td>
										<td className="py-4 text-white/80">Submit problem statement & approach.</td>
									</tr>
									<tr className="stagger-4">
										<td className="py-4 font-medium">8-hour Hackathon</td>
										<td className="py-4">Nov 29</td>
										<td className="py-4 text-white/80">Build, experiment and refine solutions.</td>
									</tr>
									<tr className="stagger-5">
										<td className="py-4 font-medium">Winner Announcement</td>
										<td className="py-4">Nov 29</td>
										<td className="py-4 text-white/80">Winner of the hackathon will be announced.</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</section>

				{/* <!-- PRIZES & JUDGING --> */}
				<section id="prizes" className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 fade-up">
					<div className="slide-left">
						<h2 className="text-2xl font-bold stagger-1">Prizes & Recognition</h2>
						<div className="mt-4 grid grid-cols-3 gap-4">
							<div className="p-4 rounded-xl bg-white/4 text-center card-hover stagger-1">
								<div className="text-sm uppercase text-white/70">1st Prize</div>
								<div className="mt-2 text-2xl font-bold ">₹15,000</div>
							</div>
							<div className="p-4 rounded-xl bg-white/4 text-center card-hover stagger-2">
								<div className="text-sm uppercase text-white/70">2nd Prize</div>
								<div className="mt-2 text-2xl font-bold ">₹10,000</div>
							</div>
							<div className="p-4 rounded-xl bg-white/4 text-center card-hover stagger-3">
								<div className="text-sm uppercase text-white/70">3rd Prize</div>
								<div className="mt-2 text-2xl font-bold ">₹5,000</div>
							</div>
						</div>

						<div className="mt-4 flex gap-3 stagger-4">
							<div className="flex-1 p-3 rounded-xl bg-white/6 text-sm card-hover">Prizes for category winners (in each team)</div>
							<div className="flex-1 p-3 rounded-xl bg-white/6 text-sm card-hover">All participants get Certificates of Participation</div>
						</div>
					</div>

					<div className="slide-right">
						<h2 className="text-2xl font-bold stagger-1">Judging Criteria</h2>
						<div className="mt-4 space-y-3 bg-white/4 p-4 rounded-2xl card-hover">
							<div className="flex items-start justify-between stagger-1">
								<div>
									<div className="font-semibold">Theme & Impact</div>
									<div className="text-sm text-white/80">How well it aligns with hackathon themes, ethics and social good.</div>
								</div>
								<div className="text-xl font-bold pulse">35%</div>
							</div>

							<div className="flex items-start justify-between stagger-2">
								<div>
									<div className="font-semibold">Technical Quality & Usability</div>
									<div className="text-sm text-white/80">Is the solution innovative, practical and easy to use?</div>
								</div>
								<div className="text-xl font-bold pulse">30%</div>
							</div>

							<div className="flex items-start justify-between stagger-3">
								<div>
									<div className="font-semibold">Creativity & Storytelling</div>
									<div className="text-sm text-white/80">Originality and how compelling the story is.</div>
								</div>
								<div className="text-xl font-bold pulse">20%</div>
							</div>

							<div className="flex items-start justify-between stagger-4">
								<div>
									<div className="font-semibold">Presentation & Teamwork</div>
									<div className="text-sm text-white/80">How clearly was the project presented and team collaboration.</div>
								</div>
								<div className="text-xl font-bold pulse">15%</div>
							</div>

							<div className="pt-2 border-t border-white/6 stagger-5">
								<div className="font-semibold">Bonus Points</div>
								<div className="text-sm text-white/80">Special recognition for projects guided by principles like Islamic ethics, justice, modesty, and truthfulness.</div>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- RULES AND GUIDELINES --> */}
				<section id="rules" className="mt-14 fade-up">
					<h2 className="text-2xl font-bold mb-6 slide-left stagger-1">Rules and Guidelines</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* <!-- Event Timing --> */}
						<article className="p-6 rounded-2xl bg-white/3 border border-white/5 card-hover stagger-1 md:order-2">
							<div className="flex items-start gap-4 mb-4">
								<div className="p-2 rounded-lg bg-[#8776ff]/20 text-[#a78bfa]">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="font-semibold text-lg">Event Timing</h3>
								</div>
							</div>
							<div className="space-y-3">
								<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors">
									<div className="flex-shrink-0 w-20 text-xs font-semibold text-[#a78bfa] pt-0.5">9:00 AM</div>
									<div className="flex-1 text-sm text-white/90">Hackathon begins</div>
								</div>
								<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors">
									<div className="flex-shrink-0 w-20 text-xs font-semibold text-[#a78bfa] pt-0.5">9:15 AM</div>
									<div className="flex-1 text-sm text-white/90">Inaugural session ends</div>
								</div>
								<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors">
									<div className="flex-shrink-0 w-20 text-xs font-semibold text-[#a78bfa] pt-0.5">Until 12:30 PM</div>
									<div className="flex-1 text-sm text-white/90">Participants may join upon arrival</div>
								</div>
								<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors">
									<div className="flex-shrink-0 w-20 text-xs font-semibold text-[#8776ff] pt-0.5">12:30 PM</div>
									<div className="flex-1 text-sm text-white/90">First round of evaluation begins</div>
								</div>
								<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors">
									<div className="flex-shrink-0 w-20 text-xs font-semibold text-[#a78bfa] pt-0.5">5:00 PM</div>
									<div className="flex-1 text-sm text-white/90">Product-building phase ends</div>
								</div>
								<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/8 transition-colors">
									<div className="flex-shrink-0 w-20 text-xs font-semibold text-[#8776ff] pt-0.5">5:00-7:00 PM</div>
									<div className="flex-1 text-sm text-white/90">Product pitches</div>
								</div>
								<div className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-[#8776ff]/20 to-[#a78bfa]/20 border border-[#8776ff]/30 hover:from-[#8776ff]/30 hover:to-[#a78bfa]/30 transition-all">
									<div className="flex-shrink-0 w-20 text-xs font-semibold text-[#8776ff] pt-0.5">7:00-8:00 PM</div>
									<div className="flex-1 text-sm text-white font-medium">Concluding session & winners&apos; announcement</div>
								</div>
							</div>
						</article>

						{/* <!-- Evaluation --> */}
						<article className="p-6 rounded-2xl bg-white/3 border border-white/5 card-hover stagger-2 md:order-1">
							<div className="flex items-start gap-4 mb-4">
								<div className="p-2 rounded-lg bg-[#8776ff]/20 text-[#a78bfa]">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="font-semibold text-lg">Evaluation</h3>
								</div>
							</div>
							<div className="space-y-4">
								<div className="p-4 rounded-xl bg-white/5 border-l-4 border-[#8776ff]">
									<div className="flex items-center gap-2 mb-2">
										<span className="px-2 py-1 rounded-md bg-[#8776ff]/20 text-[#a78bfa] text-xs font-semibold">Step 1</span>
										<span className="text-sm font-semibold text-white">Submission</span>
									</div>
									<p className="text-sm text-white/80">Teams must submit their ideas to the online portal that will be provided.</p>
								</div>
								<div className="p-4 rounded-xl bg-white/5 border-l-4 border-[#a78bfa]">
									<div className="flex items-center gap-2 mb-2">
										<span className="px-2 py-1 rounded-md bg-[#a78bfa]/20 text-[#a78bfa] text-xs font-semibold">Round 1</span>
										<span className="text-sm font-semibold text-white">Mentor Evaluation</span>
									</div>
									<p className="text-sm text-white/80">Mentors or jury members will visit teams for the first round of evaluation.</p>
								</div>
								<div className="p-4 rounded-xl bg-white/5 border-l-4 border-[#8776ff]">
									<div className="flex items-center gap-2 mb-2">
										<span className="px-2 py-1 rounded-md bg-[#8776ff]/20 text-[#8776ff] text-xs font-semibold">Round 2</span>
										<span className="text-sm font-semibold text-white">Product Pitch</span>
									</div>
									<p className="text-sm text-white/80">The second round will be the product pitch presentation.</p>
								</div>
								<div className="p-3 rounded-xl bg-white/6 border border-white/10">
									<p className="text-xs font-semibold text-white/90 mb-2">Shortlisting</p>
									<p className="text-sm text-white/80 mb-2">If the number of teams is high, we will shortlist <span className="text-[#a78bfa] font-semibold">15 teams</span> based on the first-round evaluation.</p>
									<div className="mt-2 pt-2 border-t border-white/10">
										<p className="text-xs text-white/70">Teams that are not shortlisted may still volunteer for early presentations. Early presentation slots will be opened depending on the number of teams. The timings will be announced after the first-round evaluation.</p>
									</div>
								</div>
								<div className="p-3 rounded-xl bg-white/6 border border-white/10">
									<p className="text-xs font-semibold text-white/90 mb-2">Team Collaboration</p>
									<p className="text-sm text-white/80">We encourage collaboration. Teams may merge, split, or share participants.</p>
								</div>
								<div className="p-3 rounded-lg bg-gradient-to-r from-[#8776ff]/10 to-[#a78bfa]/10 border border-[#8776ff]/20">
									<a href="/hackathon#prizes" className="text-sm text-[#a78bfa] hover:text-[#8776ff] font-medium hover:underline inline-flex items-center gap-1">
										View judging criteria <span>→</span>
									</a>
								</div>
							</div>
						</article>

						{/* <!-- Presentation --> */}
						<article className="p-6 rounded-2xl bg-white/3 border border-white/5 card-hover stagger-3 md:order-3">
							<div className="flex items-start gap-4 mb-4">
								<div className="p-2 rounded-lg bg-[#8776ff]/20 text-[#a78bfa]">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="font-semibold text-lg">Presentation</h3>
								</div>
							</div>
							<div className="space-y-4">
								<div className="p-4 rounded-xl bg-gradient-to-br from-[#8776ff]/20 to-[#a78bfa]/20 border border-[#8776ff]/30">
									<div className="flex items-center gap-3 mb-3">
										<div className="px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm">
											<span className="text-2xl font-bold text-white">6</span>
											<span className="text-xs text-white/80 ml-1">min</span>
										</div>
										<div className="flex-1">
											<p className="text-sm font-semibold text-white">Total Presentation Time</p>
											<p className="text-xs text-white/70">Per team</p>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-2 mt-3">
										<div className="p-2 rounded-lg bg-white/10 text-center">
											<div className="text-lg font-bold text-[#a78bfa]">4 min</div>
											<div className="text-xs text-white/70">Pitch</div>
										</div>
										<div className="p-2 rounded-lg bg-white/10 text-center">
											<div className="text-lg font-bold text-[#8776ff]">2 min</div>
											<div className="text-xs text-white/70">Q&A</div>
										</div>
									</div>
								</div>
								<div className="p-4 rounded-xl bg-white/5 border-l-4 border-[#8776ff]">
									<p className="text-sm font-semibold text-white mb-2">Submission Portal</p>
									<p className="text-sm text-white/80">All Teams must submit their entries via the online portal that will be provided.</p>
								</div>
								<div className="p-4 rounded-xl bg-white/5 border-l-4 border-[#a78bfa]">
									<p className="text-sm font-semibold text-white mb-2">Presentation Content</p>
									<p className="text-sm text-white/80">Teams are not required to deliver a completed product. They could present a working prototype, a design mockup, a theoretical model, a simulation, or even a polished pitch deck.</p>
								</div>
								<div className="p-4 rounded-xl bg-white/5 border-l-4 border-[#a78bfa]">
									<p className="text-sm font-semibold text-white mb-2">Online Participants</p>
									<div className="flex items-center gap-2 mb-2">
										<span className="px-2 py-1 rounded-md bg-[#a78bfa]/20 text-[#a78bfa] text-xs font-semibold">Video</span>
										<span className="text-sm text-white/80">Must upload a presentation video of no more than 4 minutes as part of their submission.</span>
									</div>
									<p className="text-xs text-white/60 mt-2">Online submissions will only be presented if time permits.</p>
								</div>
							</div>
						</article>

						{/* <!-- Travel & Hospitality --> */}
						<article className="p-6 rounded-2xl bg-white/3 border border-white/5 card-hover stagger-4 md:order-4">
							<div className="flex items-start gap-4 mb-4">
								<div className="p-2 rounded-lg bg-[#8776ff]/20 text-[#a78bfa]">
									<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
									</svg>
								</div>
								<div className="flex-1">
									<h3 className="font-semibold text-lg">Travel & Hospitality</h3>
								</div>
							</div>
							<div className="space-y-4">
								<div className="p-4 rounded-xl bg-white/5 border-l-4 border-[#8776ff]">
									<div className="flex items-start gap-3">
										<svg className="w-5 h-5 text-[#a78bfa] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
										</svg>
										<div className="flex-1">
											<a href="https://maps.app.goo.gl/8wFdSjA37cXAShQZ6" target="_blank" rel="noopener noreferrer" className="text-sm text-[#a78bfa] hover:text-[#8776ff] hover:underline inline-flex items-center gap-1">
												Find the venue on Maps <span>↗</span>
											</a>
										</div>
									</div>
								</div>
								<div className="p-4 rounded-xl bg-white/5 border-l-4 border-[#a78bfa]">
									<div className="flex items-start gap-3">
										<svg className="w-5 h-5 text-[#a78bfa] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
										</svg>
										<div className="flex-1">
											<p className="text-sm font-semibold text-white mb-1">Nearest Railway Station</p>
											<p className="text-sm text-white/80 mb-2">Feroke (2 km away)</p>
											<p className="text-xs text-white/70">Take an auto or bus to Petta. The venue is within walking distance from the Petta bus stop.</p>
										</div>
									</div>
								</div>
								<div className="p-4 rounded-xl bg-white/5 border-l-4 border-[#8776ff]">
									<div className="flex items-start gap-3">
										<svg className="w-5 h-5 text-[#8776ff] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"></path>
										</svg>
										<div className="flex-1">
											<p className="text-sm font-semibold text-white mb-1">From Kozhikode</p>
											<p className="text-sm text-white/80">Take a bus to Feroke–Petta</p>
										</div>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-3">
									<div className="p-4 rounded-xl bg-gradient-to-br from-[#8776ff]/20 to-[#a78bfa]/20 border border-[#8776ff]/30 text-center">
										<svg className="w-6 h-6 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
										</svg>
										<p className="text-sm font-semibold text-white">Lunch</p>
										<p className="text-xs text-white/70 mt-1">Provided at venue</p>
									</div>
									<div className="p-4 rounded-xl bg-gradient-to-br from-[#a78bfa]/20 to-[#8776ff]/20 border border-[#a78bfa]/30 text-center">
										<svg className="w-6 h-6 text-white mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
										</svg>
										<p className="text-sm font-semibold text-white">Refreshments</p>
										<p className="text-xs text-white/70 mt-1">Coffee & snacks</p>
									</div>
								</div>
							</div>
						</article>
					</div>
				</section>

			</main>

			{/* <!-- FOOTER --> */}
			<footer className="mt-12 border-t border-white/6 py-8">
				<div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<img src={getImagePath("/images/hackathon/footer.png")} className="h-10 w-auto rounded" alt="SIO Kerala Logo" />
					</div>
				</div>
			</footer>

			{/* <!-- Enhanced Scroll Animations --> */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
						window.addEventListener('load', () => {
							document.body.classList.add('loaded');
							// Keep all animations paused initially - they'll be triggered by scroll
							document.querySelectorAll('[class*="stagger-"]').forEach(el => {
								el.style.animationPlayState = 'paused';
							});
						});

						// Smooth scroll for anchor links
						document.querySelectorAll('a[href^="#"]').forEach(a => {
							a.addEventListener('click', e => {
								e.preventDefault();
								const target = document.querySelector(a.getAttribute('href'));
								if (target) {
									target.scrollIntoView({
										behavior: 'smooth',
										block: 'start'
									});
								}
							});
						});

						// Enhanced scroll reveal with different animation types
						const observerOptions = {
							threshold: 0.2,
							rootMargin: '0px 0px -100px 0px'
						};

						const observer = new IntersectionObserver((entries) => {
							entries.forEach(entry => {
								if (entry.isIntersecting) {
									const element = entry.target;

									// Add appropriate animation class based on element type
									if (element.classList.contains('fade-up')) {
										element.classList.add('animate');
									} else if (element.classList.contains('slide-left')) {
										element.classList.add('animate');
									} else if (element.classList.contains('slide-right')) {
										element.classList.add('animate');
									} else if (element.classList.contains('scale-in')) {
										element.classList.add('animate');
									} else if (element.classList.contains('bounce-in')) {
										element.classList.add('animate');
									}

									// Trigger staggered animations for child elements with scroll-triggered timing
									const staggerElements = element.querySelectorAll('[class*="stagger-"]');
									staggerElements.forEach((el, index) => {
										setTimeout(() => {
											el.style.animationPlayState = 'running';
											el.style.opacity = '1';
											el.style.transform = 'translateY(0)';
											el.classList.add('animate');
										}, index * 150);
									});

									observer.unobserve(element);
								}
							});
						}, observerOptions);

						document.querySelectorAll('section, .fade-up, .slide-left, .slide-right, .scale-in, .bounce-in').forEach(el => {
							observer.observe(el);
						});

						// 3D Tilt Effect 
						const tiltCard = document.querySelector('.tilt-3d');
						if (tiltCard) {
							tiltCard.addEventListener('mousemove', (e) => {
								const rect = tiltCard.getBoundingClientRect();
								const x = e.clientX - rect.left;
								const y = e.clientY - rect.top;

								const centerX = rect.width / 2;
								const centerY = rect.height / 2;

								const rotateX = (y - centerY) / 15;
								const rotateY = (centerX - x) / 15;

								tiltCard.style.setProperty('--mouse-x', rotateY + 'deg');
								tiltCard.style.setProperty('--mouse-y', rotateX + 'deg');
							});
							
							tiltCard.addEventListener('mouseleave', () => {
								tiltCard.style.setProperty('--mouse-x', '0deg');
								tiltCard.style.setProperty('--mouse-y', '0deg');
							});
						}

						const style = document.createElement('style');
						style.textContent = \`
							/* Performance optimizations */
							* {
								-webkit-font-smoothing: antialiased;
								-moz-osx-font-smoothing: grayscale;
							}

							.fade-up:not(.animate),
							.slide-left:not(.animate),
							.slide-right:not(.animate),
							.scale-in:not(.animate),
							.bounce-in:not(.animate) {
								opacity: 0;
							}

							[class*="stagger-"]:not(.animate) {
								opacity: 0;
								transform: translate3d(0, 20px, 0);
							}

							.animate {
								animation-play-state: running !important;
							}

							.fade-up, .slide-left, .slide-right, .scale-in, .bounce-in,
							[class*="stagger-"] {
								transition: opacity 0.4s ease-out, transform 0.4s ease-out;
							}

							@media (prefers-reduced-motion: reduce) {
								.fade-up, .slide-left, .slide-right, .scale-in, .bounce-in,
								[class*="stagger-"], .float, .pulse {
									animation: none !important;
									transition: opacity 0.3s ease !important;
									transform: none !important;
								}

								.fade-up:not(.animate),
								.slide-left:not(.animate),
								.slide-right:not(.animate),
								.scale-in:not(.animate),
								.bounce-in:not(.animate) {
									opacity: 0;
								}

								.animate {
									opacity: 1 !important;
								}
							}

							.btn-hover, .hover-glow {
								backface-visibility: hidden;
							}
						\`;
						document.head.appendChild(style);
					`
				}}
			/>
		</div>
	);
}