import { Navbar } from "@creatorhub/navbar";
import { MusicDurationSelector, MusicTypeSelector, MusicResults } from "@creatorhub/ui";
import { getServerSidePropsAdmin } from "@creatorhub/utils";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useState } from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const adminResponse = await getServerSidePropsAdmin(ctx);
	if ("props" in adminResponse) {
		const { type, duration } = ctx.query;
		const getSingle = (x: string | string[] | undefined) => (Array.isArray(x) ? x[0] : x);

		(adminResponse.props as Record<string, any>) = {
			...adminResponse.props,
			type: getSingle(type) || null,
			duration: getSingle(duration) || null
		};
		return adminResponse;
	}

	return adminResponse;
};

interface Props {
	duration: string | undefined;
	type: string | undefined;
}

const MusicPage: NextPage<Props> = ({ type: _type, duration: _duration }) => {
	const { t } = useTranslation();
	const router = useRouter();
	const [type, setType] = useState<string | undefined>(_type);
	const [duration, setDuration] = useState<string | undefined>(_duration);

	const typeSelector = (type: string) => {
		setType(type);
		void router.push({ query: { type } });
	};

	const durationSelector = (duration: string) => {
		setDuration(duration);
		void router.push({ query: { duration, type } });
	};

	return (
		<main className="min-h-screen grid place-items-center">
			<Navbar />
			<NextSeo title={t("music:title")} />
			{duration ? (
				<MusicResults duration={duration} type={type!} />
			) : type ? (
				<MusicDurationSelector type={type} setDuration={durationSelector} />
			) : (
				<MusicTypeSelector setType={typeSelector} />
			)}
		</main>
	);
};

// TODO: remove coments when feature is released
// MusicPage.getInitialProps = (ctx) => {
// 	const { type, duration } = ctx.query;
// 	const getSingle = (x: string | string[] | undefined) => (Array.isArray(x) ? x[0] : x);

// 	return { type: getSingle(type), duration: getSingle(duration) };
// };

export default MusicPage;
