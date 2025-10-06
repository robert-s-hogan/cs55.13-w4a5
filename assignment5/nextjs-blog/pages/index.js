import Head from "next/head";
import Link from "next/link";
// Uses named export on siteTitle
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
// import getSortedPostsData function from utility file
import { getSortedPostsData } from "../lib/posts";
// Imported dating format function
import Date from "../components/date";
// Added PostStyles for individual post styling
import postStyles from "../styles/post.module.css";

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
      </section>
      <section className={`${postStyles.post}`}>
        <h2 className={postStyles.title}>Blog</h2>
        <ul className={postStyles.content}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={`${utilStyles.listItem}`} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.description}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <p className={utilStyles.footer}>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
