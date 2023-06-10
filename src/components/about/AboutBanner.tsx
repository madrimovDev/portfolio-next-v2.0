import Image from "next/image";

export default function AboutBanner() {
	return (
		<>
			<Image
				className="w-full h-80 object-cover object-center rounded-md grayscale shadow-lg"
				src="/about.jpg"
				width={1200}
				height={600}
				alt="Madrimov Xudoshukur"
			/>
			<div className="my-10">
				<h1 className="text-4xl md:text-5xl">Madrimov Xudoshukur</h1>
				<h2 className="text-xl text-gray-500">Front-end Engineer / Mentor</h2>
			</div>
		</>
	);
}

