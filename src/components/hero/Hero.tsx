"use client";
import {
	FacebookOutlined,
	GithubOutlined,
	InstagramOutlined,
	MailOutlined,
	SendOutlined,
} from "@ant-design/icons";

export default function Hero() {
	return (
		<div className="py-10 space-y-5 md:space-y-10">
			<h1 className="">
				<q className="text-2xl md:text-6xl font-bold">
					Make it work, make it right, make it fast.
				</q>
				<i className="text-gray-600 text-2xl">– Kent Beck</i>
			</h1>
			<p className="text-sm md:text-lg leading-loose">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, provident!
				Ducimus quis consectetur corrupti inventore iste saepe ab reiciendis
				dolor eveniet commodi! Esse suscipit quidem iste ratione facilis
				reprehenderit recusandae.
			</p>
			<p className="text-sm md:text-lg leading-loose">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
				culpa deserunt doloremque, mollitia soluta illum consectetur rerum
				ducimus rem ut, incidunt libero sequi recusandae ipsam facilis at
				molestiae nesciunt optio!
			</p>

			<div className="flex gap-4 items-center">
				<a
					href="https://github.com/madrimovdev"
					target="_blank"
					className="text-2xl hover:text-violet-800"
				>
					<GithubOutlined />
				</a>
				<a
					href="https://facebook.com/xudish.madrimov"
					target="_blank"
					className="text-2xl hover:text-sky-600"
				>
					<FacebookOutlined />
				</a>
				<a
					href="https://instagram.com/xudish.madrimov"
					target="_blank"
					className="text-2xl hover:text-rose-600"
				>
					<InstagramOutlined />
				</a>
				<a
					href="https://t.me/madrimov"
					target="_blank"
					className="text-2xl hover:text-blue-600"
				>
					<SendOutlined />
				</a>
			</div>
		</div>
	);
}


