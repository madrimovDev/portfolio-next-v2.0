"use client";
import { useState } from "react";
import { menuItems } from "./menu-items";
import MenuItem from "./MenuItem";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import classNames from "classnames";

export default function Menu() {
	const [show, setShow] = useState(false);

	const onToggle = () => setShow(!show);

	return (
		<>
			<button
				onClick={onToggle}
				className="border w-8 aspect-square grid place-items-center rounded-md md:hidden"
			>
				<MenuOutlined />
			</button>
			<div
				className={classNames(
					"flex flex-grow justify-end fixed md:static w-[300px] md:w-full bg-gray-50 md:bg-transparent h-screen md:h-auto md:transform-none top-0 right-0 transition-all",
					{
						"translate-x-full": !show,
					}
				)}
			>
				<button
					onClick={onToggle}
					className="border w-8 aspect-square grid place-items-center rounded-md md:hidden absolute top-4 right-4 border-red-400 text-red-400"
				>
					<CloseOutlined />
				</button>
				<ul className="flex flex-col md:flex-row w-full md:w-auto gap-4 md:gap-8 p-8 md:p-0">
					{menuItems.map((item) => {
						return (
							<MenuItem
								key={item.key}
								menuItem={item}
							/>
						);
					})}
				</ul>
			</div>
		</>
	);
}

