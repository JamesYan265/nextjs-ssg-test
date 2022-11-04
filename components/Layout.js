import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "James Yan"
export const siteTitle = "Next js Blog"
function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Blog Next Js</title>
            </Head>
            <header className={styles.header}>
            {home ? (
                <>
                    <Link href="/"><img src="/images/icon.png" alt="icon" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}/></Link>
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <Link href="/"><img src="/images/icon.png" alt="icon" className={`${utilStyles.borderCircle} ${styles.headerImage}`} /></Link>
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            )}
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">⬅️返回首頁</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;