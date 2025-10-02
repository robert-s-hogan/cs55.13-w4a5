import Layout from "../../components/layout";
// Imported getAllPostIds & getPostData from Posts utility file
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
