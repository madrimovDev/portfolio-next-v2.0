// "use client";
import Link from "next/link";
import { type MenuItem } from "./menu-items";
import { usePathname } from "next/navigation";
import classNames from "classnames";

interface Props {
	menuItem: MenuItem;
}

export default function MenuItem({ menuItem }: Props) {
	const pathname = usePathname();
	return (
		<li>
			<Link
				className={classNames('hover:text-teal-600',{
					"text-teal-500": pathname === menuItem.href,
				})}
				href={menuItem.href}
			>
				{menuItem.title}
			</Link>
		</li>
	);
}

