// Create new layout component that will act as a wrapper for all pages
// imported styles for Layout wrapper component
import styles from "./layout.module.css";
// Imported utility styles
import utilStyles from "../styles/utils.module.css";
// imported Head from Next.js lib
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Variables used for SEO
const name = "Robert";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    // Added .container style from CSS module
    <div className={styles.container}>
      <Head>
        {/* All SEO tags here */}
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              // Added image style from utility CSS module
              className={utilStyles.borderCircle}
              height={400}
              width={400}
              alt=""
            />
            {/* Added heading style from utility CSS module */}
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                // Added image style from utility CSS module
                className={utilStyles.borderCircle}
                height={400}
                width={400}
                alt=""
              />
            </Link>
            {/* Added heading style from utility CSS module */}
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
