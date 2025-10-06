import Layout from "../../components/layout";
// Imported getAllPostIds & getPostData from Posts utility file
import { getAllPostIds, getPostData } from "../../lib/posts";
// Imported Date component to format date
import Date from "../../components/date";
// Added utility styles for [id]
import utilStyles from "../../styles/utils.module.css";
// Added head's Next.js component for setting metadata
import Head from "next/head";
// Added PostStyles for individual post styling - carried over posts styles from [id] styling
import postStyles from "../../styles/post.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={postStyles.post}>
        <h1 className={postStyles.title}>{postData.title}</h1>
        <div className={postStyles.description}>
          Release Date: <Date dateString={postData.date} />
        </div>
        <div
          className={postStyles.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Added await to getPostData call to handle async function
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
