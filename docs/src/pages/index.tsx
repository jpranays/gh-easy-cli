import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import { useCanvasAnimation } from "../hooks/useCanvasAnimation";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--primary button--lg" to="/docs/intro">
						Get started
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	useCanvasAnimation("canvas-bubbles");

	return (
		<Layout
			title={`${siteConfig.title}`}
			description="A CLI tool to interact with Github"
			wrapperClassName="homepage-wrapper"
		>
			<canvas id="canvas-bubbles"></canvas>

			<HomepageHeader />
			<main
				style={{
					backgroundColor: "var(--background-color)",
				}}
			>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
