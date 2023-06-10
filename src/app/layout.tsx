"use client";
import Navbar from "../components/navbar/Navbar";
import "./globals.css";
import { Courier_Prime } from "next/font/google";

const inter = Courier_Prime({
	weight: ["400", "700"],
	subsets: ["latin"],
	fallback: ["monospace"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className='fixed -z-[1] opacity-50 blur inset-0 bg-[url("/bg.jpg")] bg-cover bg-center bg-fixed' />
				<Navbar />
				<div className="mx-auto mt-16 py-10 max-w-3xl px-4">{children}</div>
			</body>
		</html>
	);
}

