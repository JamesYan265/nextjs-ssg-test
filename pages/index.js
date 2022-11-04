import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import utilStyles from "../styles/utils.module.css"

import Link from "next/link"
import { getPostsData } from '../lib/post'

//SSG Example, getStaticProps函數 return props為固定rules
//getStaticProps函數作用為當build packet的時候, 如果外部有數據導入, 先要取初始值去先render html的框格
export async function getStaticProps() {
  const allPostsData = getPostsData();
  

  return {
    props: {
      allPostsData : JSON.parse(JSON.stringify(allPostsData)),
    },
  };
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>
          你好，我叫JamesYan，正在學習不同的電腦語言，主要為Javascript
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>🌀 我的Blog </h2>
        <div className={styles.grid}>

          {allPostsData.map( ({id, title, date, image}) => (
            <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={`${image}`} className={styles.thumbnailImage}/>
            </Link>
            <Link href={`/posts/${id}`}>
              <b className={utilStyles.boldText}>{title}</b>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              {date.replace('T00:00:00.000Z', '')}
            </small>
          </article>
          ))}
        </div>
      </section>

    </Layout>
  )
}
