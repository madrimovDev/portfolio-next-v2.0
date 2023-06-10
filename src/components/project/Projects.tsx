import Image from "next/image";
import { projectItems } from "./projectList";

export default function Projects() {
	return (
		<div className="py-20">
			<h2 className="text-4xl font-bold mb-10">Projects</h2>
			{projectItems.slice(0, 2).map((item) => (
				<div
					key={item.key}
					className="flex flex-col md:flex-row border-2 rounded-lg overflow-hidden p-6 my-5 md:h-56 bg-white/50 backdrop-blur-sm"
				>
					<Image
						src={item.imgSrc}
						width={400}
						height={400}
						alt={item.title}
						className="w-full md:w-1/2 rounded-md object-cover object-center"
					/>
					<div className="md:pl-6 mt-5 md:mt-0 flex flex-col">
						<div className="flex-grow">
							<h3 className="text-2xl">{item.title}</h3>
							<p className="text-md">{item.description}</p>
						</div>
						<a
							href={item.source}
							target="_blank"
							className="underline"
						>
							Source
						</a>
					</div>
				</div>
			))}
		</div>
	);
}

