import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.css";

//動態路由設定
export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback : false, //除咗paths變數,其他會變成404
    }
}

//取得內文文本及資料
export async function getStaticProps({ params }) {
    let postData = await getPostData(params.id);
    postData = JSON.parse(JSON.stringify(postData));

    return {
        props : {
            postData,
        },
    };
}

export default function Post( {postData} ) {
    return (
        <Layout>
            <Head><title>{postData.title}</title></Head>
            <article>
                <h1 className={utilStyles.headingX1}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    {postData.date.replace('T00:00:00.000Z', '')}
                </div>
                {/* 將一堆html tag加文字重新運算 */}
                <div dangerouslySetInnerHTML={{__html : postData.blogContentHTML}}/>
            </article>
        </Layout>
    );
}