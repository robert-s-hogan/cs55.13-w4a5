import Head from "next/head";
import Link from "next/link";
// Uses named export on siteTitle
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
// import getSortedPostsData function from utility file
import { getSortedPostsData } from "../lib/posts";

// Static generation function from NExt.js
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Passed allPostsData from Static Generation function
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className={utilStyles.heading}>
          Dad, developer and fantasy football enthusiast
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
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
