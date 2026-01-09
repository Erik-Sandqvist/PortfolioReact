import React from "react";
import { asset } from "../../utils/asset";

const Covers = () => {
	const covers = [
		{ src: asset("pics/covers/img1.png"), title: "", caption: "" },
		{ src: asset("pics/covers/img2.png"), title: "", caption: "" },
		{ src: asset("pics/covers/img3.png"), title: "", caption: "" },
	];

	return (
		<div className="max-w-7xl mx-auto mt-24 mb-20 px-6">
			<h2 className="text-3xl font-bold text-primary mb-2">Catalog Covers</h2>
			<p className="text-text-primary mb-8">Three cover designs</p>

			<div className="flex flex-wrap gap-8">
				{covers.map((c, i) => (
					<div key={c.title} className="group">
						<div
							className={`relative rounded-xl overflow-hidden shadow-2xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary ${
								i === 0 ? "-rotate-1" : i === 1 ? "rotate-1" : "-rotate-1"
							}`}
						>
							<img
								src={c.src}
								alt={c.title}
								className="max-h-full max-w-full object-contain"
							/>
						</div>
						<div className="mt-3">
							<h3 className="text-xl font-semibold text-primary">{c.title}</h3>
							<p className="text-sm text-text-primary">{c.caption}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Covers;
