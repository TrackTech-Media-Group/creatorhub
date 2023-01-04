import { TransparentButton } from "@creatorhub/buttons";
import type React from "react";

export const Footer: React.FC = () => {
	return (
		<div className="bg-black w-full mt-24 flex flex-col justify-center items-center p-8 gap-y-8 relative h-64">
			<div className="flex justify-between w-[32rem] max-sm:flex-col max-sm:w-auto max-sm:gap-y-4 max-sm:items-center max-sm:text-center">
				<div>
					<h1 className="text-lg">Products</h1>
					<div className="flex flex-col">
						<TransparentButton type="link" href="/videos" extra="!p-0 text-white-400 hover:text-white-600">
							Video
						</TransparentButton>
						<TransparentButton type="link" href="/images" extra="!p-0 text-white-400 hover:text-white-600">
							Images
						</TransparentButton>
					</div>
				</div>
				<div>
					<h1 className="text-lg">Company</h1>
					<div className="flex flex-col">
						<TransparentButton type="link" href="/tos" extra="!p-0 text-white-400 hover:text-white-600">
							Terms of Service
						</TransparentButton>
						<TransparentButton type="link" href="/privacy" extra="!p-0 text-white-400 hover:text-white-600">
							Privacy Policy
						</TransparentButton>
						<TransparentButton type="link" href="/about" extra="!p-0 text-white-400 hover:text-white-600">
							About Us
						</TransparentButton>
					</div>
				</div>
				<div>
					<h1 className="text-lg">Support</h1>
					<div className="flex flex-col">
						<TransparentButton type="link" href="/support/contact" extra="!p-0 text-white-400 hover:text-white-600">
							Contact Us
						</TransparentButton>
						<TransparentButton type="link" href="/support/faq" extra="!p-0 text-white-400 hover:text-white-600">
							FAQ
						</TransparentButton>
					</div>
				</div>
			</div>
			<div className="absolute right-8 bottom-8 flex flex-col justify-center items-center">
				<img className="w-48" src="/logo/track-tech.png" alt="Track Tech logo" />
				<p className="text-sm text-center">© TrackTech Media Group 2023</p>
			</div>
		</div>
	);
};
