import styles from "../../styles/Swing.module.css";
import Image from "next/image";
import Link from "next/link";

const GitLink = props => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12 select-none">
            <div className="flex flex-row justify-center items-center">
                <Image class={styles.swing} alt="logo" src="https://cdn.discordapp.com/attachments/809184246072606751/961434922910892112/breadieswing.png" width={200} height={200} />
                <h1 className="text-sky-500 text-4xl">GitHub</h1>
            </div>
            <p className="w-[40vw] text-center text-sky-500 text-lg">I post a bunch of random things on GitHub. Pretty much anything I make for public use you can find there. The button below will take you to my GitHub.</p>
            <Link className="w-full h-full" href="https://github.com/Ethy56">
                <div className="cursor-pointer transition-all rounded-full px-4 py-1 bg-sky-800 text-white hover:bg-sky-600">
                    Github Page
                </div>
            </Link>
        </div>
    )
};

export default GitLink;