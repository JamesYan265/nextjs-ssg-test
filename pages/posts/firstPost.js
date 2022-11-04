//Link 係可以唔需要重新載入轉跳不同路由
import Link from "next/link";
//Head 係Browser的頁面標題
import Head from "next/head";


export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>首次的投稿</title>
            </Head>
            <h1>首次的投稿</h1>
            <Link href='/'>返回首頁</Link>
        </div>
    );
}