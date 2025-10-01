// Created posts/first-post page and exported component
import Link from "next/link";
// Imported Head from Library for SEO
import Head from "next/head";
// Imported Layout (wrapper) component
import Layout from "../../components/layout";
// Imported Script from the next library
import Script from "next/script";
// Post Module CSS Module import
import postStyles from "../../styles/Post.module.css";

export default function FirstPost() {
  return (
    <Layout>
      {/* Added head element for SEO */}
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1 className={postStyles.title}>First Post</h1>
      <p className={postStyles.description}>
        Welcome to my super minimal blog!
      </p>
    </Layout>
  );
}
