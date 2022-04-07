import styles from "../../styles/Swing.module.css";
import Image from "next/image";

const About = props => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12 select-none">
            <div className="flex flex-row justify-center items-center">
                <Image class={styles.swing} alt="logo" src="https://cdn.discordapp.com/attachments/809184246072606751/961434922910892112/breadieswing.png" width={200} height={200} />
                <h1 className="text-sky-500 text-4xl">About Breadcord</h1>
            </div>
            <p className="w-[40vw] text-center text-sky-500 text-lg">Breadcord is a npm package that can be used to handle with the backend of discord bots. It is simple to use and provides help to the harder parts of advanced bots.</p>
        </div>
    )
};

export default About;