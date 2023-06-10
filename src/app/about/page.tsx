import { Metadata } from "next";
import AboutBanner from "~/components/about/AboutBanner";
import AboutExperience from "~/components/about/AboutExperience";
import AboutMe from "~/components/about/AboutMe";

export const metadata: Metadata = {
	title: "Madrimov.uz - Xudoshukur Madrimov",
	description: "Frontend engineer from Uzbekistan",
	category: "development",
	creator: "Madrimov Xudoshukur",
};

export default function About() {
	return (
		<>
			<AboutBanner />
			<div className="hr h-10 bg-black/20" />
			<AboutMe />
			<div className="hr h-10 bg-black/20" />
			<AboutExperience />
		</>
	);
}

