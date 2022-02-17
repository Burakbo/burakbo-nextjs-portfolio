import Link from 'next/link'
import styles from '../SCSS/modules/404.module.scss'
import Image from "next/image";

const DeadLink = () => {
    return (
        <div className={styles.error}>
            <h1>404</h1>
            <h2>This page seems to be spirited away...</h2>
            <Image src="/images/spirited-away.png" width={300} height={300} alt="spirited away..."/>
            <button className={styles.cta}>
                <Link href={"/"}><span>Go back</span></Link>
            </button>
        </div>
    )
}

export default DeadLink;