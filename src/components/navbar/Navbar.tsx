import Logo from "./Logo";
import Menu from "./Menu";

export default function Navbar() {
	return (
		<>
			<div className="bg-zinc-200/80 backdrop-blur-sm z-10 border-b border-black/10 fixed w-full left-0 right-0 top-0">
				<div className="max-w-3xl mx-auto flex justify-between px-4 items-center py-4">
					<Logo />
					<Menu />
				</div>
			</div>
		</>
	);
}

