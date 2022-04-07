import styles from "../../styles/Swing.module.css";
import Image from "next/image";

const HowToUse = props => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12 select-none">
            <Image class={styles.swing} src="https://cdn.discordapp.com/attachments/809184246072606751/961434922910892112/breadieswing.png" width={200} height={200} />
            <h1 className="text-sky-500 text-4xl">Welcome to my site!</h1>
            <p className="w-[40vw] text-center text-sky-500 text-lg">Hello, I'm Ethy. I have other names such as Breadie or Bread. I enjoy making random projects in my free time as well as currently studying Computer Science in college. To browse around the projects bar and items bar.</p>
        </div>
    )
};

export default HowToUse;