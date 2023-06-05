import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";


const SinglePostPage: NextPage = () => {
	
	return (
	<>
		<Head>
			<title>Post</title>
		</Head>
		<main className="flex h-screen justify-center">
			<div>Post Info</div>
		</main>
	</>
	);
};

export default SinglePostPage;
