import { Metadata } from "next";
import Hero from "../components/hero/Hero";
import Projects from "../components/project/Projects";

export const metadata: Metadata = {
	title: "This is a title",
};

export default function Home() {
	return (
		<>
			<Hero />
			<div className="hr h-10 bg-black/20" />
			<Projects />
		</>
	);
}

