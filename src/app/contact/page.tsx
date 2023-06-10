export default function Contact() {
	return (
		<div>
			<h1 className="text-4xl">Contact me</h1>
			<div className="grid grid-cols-[auto_1fr] gap-2 my-10">
				<span className="font-bold">Address:</span>
				<span>Uzbekistan, Kharezm, Khiva</span>
				<span className="font-bold">Tel:</span>
				<span>
					<a href="tel:+99 891 424 50 14">+99 891 424 50 14</a>
				</span>
				<span className="font-bold">Email:</span>
				<span>madrimov5014@gmail.com</span>
				<span className="font-bold">Github: </span>
				<span>madrimovDev</span>
				<span className="font-bold">Twitter:</span>
				<span>@verve_md</span>
				<span className="font-bold">Instagram: </span>
				<span>@xudish.madrimov</span>
				<span className="font-bold">Facebook: </span>
				<span>@xudish.madrimov</span>
				<span className="font-bold">Telegram: </span>
				<span>@madrimov</span>
			</div>

			<form
				className="flex flex-col gap-2"
				autoComplete="off"
				autoCorrect="off"
				autoCapitalize="off"
			>
				<h2 className="text-2xl text-gray-500">Send me message</h2>
				<div className="flex flex-col gap-1">
					<label htmlFor="name">Name</label>
					<input
						className="p-2 rounded-md border border-black/20"
						type="text"
						placeholder="John Doe"
						id="name"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="email">Email</label>
					<input
						className="p-2 rounded-md border border-black/20"
						type="email"
						placeholder="@johndoe@mail.co"
						id="email"
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="email">Message</label>
					<textarea
						rows={6}
						className="p-2 rounded-md border border-black/20"
						placeholder="@johndoe@mail.co"
						id="message"
					/>
				</div>
				<button className="bg-teal-500 text-white p-3 rounded-md shadow-md text-lg mt-4 font-bold hover:bg-teal-400">
					Send Message
				</button>
			</form>
		</div>
	);
}

