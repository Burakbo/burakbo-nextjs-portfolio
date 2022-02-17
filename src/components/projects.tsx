import styles from "../SCSS/modules/Projects.module.scss";
import Image from "next/image";
import mexpoProject from '/public/images/mexpo-project.png';
import portfolioProjectLight from '/public/images/portfolio-light.png';
import portfolioProjectDark from '/public/images/portfolio-dark.png';
import terminalRicing from '/public/images/terminal-ricing.png';
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
            <p className={styles.projectTitle}>mexpo android app</p>
            <p className={styles.projectDesc}>
                a multi exchange crypto portfolio app.
                helps me avoid checking various
                centralised exchanges on my smartphone
                by fetching them all and
                displaying it in one place.
            </p>
            <p className={styles.projectDesc}>
                (side-project) built with: <br/>Kotlin / Jetpack Compose / Ktor </p>
            <span className={styles.projectCardContainer}>
                <span className={styles.projectCard}>

                    <Image src={resolvedTheme === 'dark' ? portfolioProjectLight : portfolioProjectDark} objectFit={"cover"}/>
                </span>
            </span>
            <p className={styles.projectTitle}>Next.js Portfolio</p>
            <p className={styles.projectDesc}>
                built this portfolio with nextjs on TypeScript and plain sass.
            </p>
            <span className={styles.projectCardContainer}>
                <span className={styles.projectCard}>
                    <Image src={terminalRicing} objectFit={"cover"}/>
                </span>
            </span>
            <p className={styles.projectTitle}>terminal ricing</p>
            <p className={styles.projectDesc}>
                as someone who stares at the terminal more than occasionally,
                why not customize it to make it more appealing and
                maybe bring it alive by making your shell tell you when to
                sleep or when to get some more coffee?
            </p>
        </div>
    )
}

export default Projects;