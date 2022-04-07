import styles from "../../styles/Swing.module.css";
import Image from "next/image";

const About = props => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12 select-none">
            <div className="flex flex-row justify-center items-center">
                <Image class={styles.swing} src="https://cdn.discordapp.com/attachments/809184246072606751/961434922910892112/breadieswing.png" width={200} height={200} />
                <h1 className="text-sky-500 text-4xl">Download Breadcord</h1>
            </div>
            <p className="w-[40vw] text-center text-sky-500 text-lg">Breadcord can be downloaded using npm. A copy pasta can be found below to download</p>
            <p className="rounded-xl border-2 border-[#5865f2] bg-[#202225] min-w-[30vw] min-h-[5vh] p-4 text-center text-[#5865f2] text-lg select-all">npm i breadcord --save</p>
        </div>
    )
};

export default About;