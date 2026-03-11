import React from "react";
import { Link } from "react-router-dom";
import { SiAdobeillustrator, SiAdobephotoshop, SiFigma } from "react-icons/si";

import { Carousel } from "../Carousel";

const Ro = () => {
	const base = import.meta.env.BASE_URL;

	const images = [
		{ src: `${base}pics/ro/roLogo.webp`, alt: "RO logotype", caption: "Primary logo and color variations" },
		{ src: `${base}pics/ro/Sk%C3%A4rmbild%202024-12-05%20125016.png`, alt: "Brand board", caption: "Color palette, typography, and spacing" },
		{ src: `${base}pics/ro/Sk%C3%A4rmbild%202026-01-09%20120835.png`, alt: "Manual pages", caption: "Logo usage, grids, and imagery" },
		{ src: `${base}pics/ro/skog.webp`, alt: "Imagery style", caption: "Photo direction and tonal range" },
		{ src: `${base}pics/ro/skugga.webp`, alt: "Graphic element", caption: "Gradients, shadows, and lighting" },
	];

	const videoSrc = `${base}pics/ro/water.webm`;

	return (
		<>
		<div className="h-full w-full bg-gradient-to-b bg-gradient-to-br from-base via-green-900 to-black flex flex-col items-center justify-center">	
			<div className="max-w-6xl mx-auto mt-28 my-11 shadow-xl rounded-2xl overflow-hidden">
				<div className="p-6 md:p-10 space-y-6 mt-2">
					<div className="space-y-4">
						<p className="uppercase tracking-[0.2em] text-xs text-secondary font-semibold font-onest">Brand identity</p>
						<h2 className="text-3xl font-bold text-primary font-onest">RO – Brand Manual</h2>
						<p className="text-text-primary font-onest text-base md:text-lg">
							A project where I and a team developed a comprehensive brand manual for RO, a fictional wellness retreat. We covered logo design,
							color palette, typography, imagery, and usage guidelines. The manual explains formats, clear space, contrast, and how the brand
							should behave across digital and print channels. Here are a few spreads and visualizations.
						</p>
					</div>



					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-primary">
						<div className="rounded-2xl bg-base-200/60 p-5 space-y-3 shadow-sm">
							<h3 className="text-xl font-semibold text-secondary">Deliverables</h3>
							<ul className="list-disc list-inside text-sm md:text-base space-y-2">
								<li>Primary and secondary logo, negative/positive and monochrome variants</li>
								<li>Color palette with contrast tests and accessibility guidance</li>
								<li>Typography hierarchy for headings, body, and accents</li>
								<li>Imagery direction, patterns, gradients, and lighting</li>
								<li>Layout rules: grids, margins, clear space, and minimum sizes</li>
								<li>Templates for social media, presentations, and internal docs</li>
							</ul>
						</div>

						<div className="rounded-2xl bg-base-200/60 p-5 space-y-4 shadow-sm">
							<h3 className="text-xl font-semibold text-secondary">Focus</h3>
							<p className="text-sm md:text-base text-text-primary">
								The foundation is nature and water—calm blues and greens with soft shadows to reflect a tranquil yet confident brand.
								The manual includes practical do&apos;s and don&apos;ts plus examples of how the identity scales across print, digital, and motion.
							</p>
							<div className="grid grid-cols-3 gap-4 text-center text-sm">
								<div className="flex flex-col items-center gap-2">
									<SiFigma className="text-[#F24E1E] text-3xl" />
									<span>Wireframes</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<SiAdobeillustrator className="text-[#FF9A00] text-3xl" />
									<span>Logotyp</span>
								</div>
								<div className="flex flex-col items-center gap-2">
									<SiAdobephotoshop className="text-[#31A8FF] text-3xl" />
									<span>Mockups</span>
								</div>
							</div>
						</div>
					</div>

					<div className="rounded-2xl bg-base-200/60 p-5 shadow-sm space-y-4">
						<div className="flex items-center justify-between gap-4 flex-wrap">
							<span className="text-xs uppercase tracking-[0.2em] text-secondary">Motion preview</span>
							<Link
								to="https://youtu.be/ScmRBXGp2jo"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-sm btn-ghost gap-2"
							>
								Watch on YouTube
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
							</Link>
						</div>
						
						<div className="aspect-video rounded-lg overflow-hidden bg-black">
							<iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/ScmRBXGp2jo"
								title="RO Brand Manual Motion Preview"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="w-full h-full"
							></iframe>
						</div>
						
					</div>
				</div>
			</div>

			<Carousel
				images={images}
				autoPlay={4000}
				showIndicators
				showArrows
				className="aspect-video max-w-6xl mx-auto shadow-xl rounded-xl overflow-hidden"
			/>

			<div className="flex justify-between mt-8 max-w-6xl mx-auto gap-10 mb-8">
				<Link
					to="/projects/personalbrand"
					className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
					Previous Project
				</Link>

				<Link
					to="/projects/patches"
					className="btn btn-outline btn-secondary flex items-center gap-2 md:min-w-64 min-w-32"
				>
					Next Project
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
				</Link>
			</div>
			</div>
		</>
	);
};

export default Ro;
