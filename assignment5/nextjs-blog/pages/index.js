import Head from "next/head";
import Link from "next/link";
// Uses named export on siteTitle
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilStyles.heading}>
          Dad, developer and fantasy football enthusiast. w4a5
        </p>

        {/* Added card link to first post */}
        <Link href="/posts/first-post" className={utilStyles.card}>
          <h2>First Post</h2>
          <p>Read my first post!</p>
        </Link>

        <p className={utilStyles.footer}>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
