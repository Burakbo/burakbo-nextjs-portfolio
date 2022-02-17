import styles from "../SCSS/modules/Projects.module.scss";
import Image from "next/image";
import {GithubOutlined, PlayCircleOutlined} from "@ant-design/icons";
import mexpoProject from '/public/images/mexpo-project.png';
import portfolioProjectLight from '/public/images/portfolio-light.png';
import portfolioProjectDark from '/public/images/portfolio-dark.png';
import shaconda from '/public/images/shaconda.png';
import terminalRicing from '/public/images/terminal-ricing.png';
import catmemory from '/public/images/catmemory.png';


import {useTheme} from "next-themes";


const Projects = () => {

    const { resolvedTheme } = useTheme()

    return(
        <div className={styles.columnCenter}>
            <div className={styles.rowCenter}>
                <ruby className={styles.title}>Projects <rt>プロジェクト</rt> </ruby>
                <p className={styles.secondTitle}>Stuff I work on /<br/> Things I like to explore.</p>
            </div>
            <span className={styles.projectCardContainer}>
                <span className={styles.projectCard}>
                    <Image src={mexpoProject} objectFit={"cover"}/>
                </span>
            </span>
            <p className={styles.projectTitle}>mexpo android app <a href="https://github.com/Burakbo/mexpoApp"><GithubOutlined/></a>
            </p>
            <p className={styles.projectDesc}>
                a multi exchange crypto portfolio app.
                helps me avoid checking various
                centralised exchanges on my smartphone
                by fetching all my assets and
                displaying them in one place.
            </p>
            <p className={styles.projectDesc}>
                (side-project) built with: <br/>Kotlin / Jetpack Compose / Ktor
            </p>
            <span className={styles.projectCardContainer}>
                <span className={styles.projectCard}>
                    <Image src={shaconda} objectFit={"cover"}/>
                </span>
            </span>
            <p className={styles.projectTitle}>shaconda | keep sharing. stay connected. (tba)
            </p>
            <p className={styles.projectDesc}>
                I am the technical co-founder of a marketplace application aiming
                to be a game changer in the field of sharing economy. responsible for
                building a full-stack / mobile app (ios / android) while keeping an eye on our current budget.
            </p>
            <p className={styles.projectDesc}>
                (startup) built with: <br/>Flutter / Firebase / Cloud Functions
            </p>
            <span className={styles.projectCardContainer}>
                <span className={styles.projectCard}>
                    <Image src={resolvedTheme === 'dark' ? portfolioProjectLight : portfolioProjectDark} objectFit={"cover"}/>
                </span>
            </span>
            <p className={styles.projectTitle}>Personal Portfolio <a href="https://github.com/Burakbo/burakbo-nextjs-portfolio"><GithubOutlined/></a>
            </p>
            <p className={styles.projectDesc}>
                built my developer portfolio with Nextjs, TypeScript and plain sass.
                this project helped me learn more about the Nextjs framework and get
                my head around server side rendered web-applications.
            </p>
            <span className={styles.projectCardContainer}>
                <span className={styles.projectCard}>
                    <Image src={terminalRicing} objectFit={"cover"}/>
                </span>
            </span>
            <p className={styles.projectTitle}> 🍙🍣 ricing everything  <a href="https://github.com/Burakbo/pretty-windows-terminal"><GithubOutlined/></a></p>
            <p className={styles.projectDesc}>
                I love to customize / rice things. be it my web-browser, terminal,
                my entire linux system or widgets on my phone - everything is
                custom design aided by custom made little scripts.
            </p>
            <span className={styles.projectCardContainer}>
                <span className={styles.projectCard}>
                    <Image src={catmemory} objectFit={"cover"}/>
                </span>
            </span>
            <p className={styles.projectTitle}>
                Cat Memory <a href="https://play.google.com/store/apps/details?id=com.catmemapp.memory"><PlayCircleOutlined/></a>
            </p>
            <p className={styles.projectDesc}>
                my first android application released on the Google Play Store.
                this project helped me learn about building a production ready
                app from writing the code to actually deploying it on a third party store
                and monetizing it with ads.
                <p className={styles.projectDesc}>
                    (android app) built with: <br/>Kotlin / Google AdMob
                </p>
            </p>
        </div>
    )
}

export default Projects;