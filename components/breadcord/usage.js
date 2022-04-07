import styles from "../../styles/Swing.module.css";
import Image from "next/image";
import Link from "next/link";

const Usage = props => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12 select-none">
            <div className="flex flex-row justify-center items-center">
                <Image class={styles.swing} src="https://cdn.discordapp.com/attachments/809184246072606751/961434922910892112/breadieswing.png" width={200} height={200} />
                <h1 className="text-sky-500 text-4xl">Breadcord Usage</h1>
            </div>
            <p className="w-[40vw] text-center text-sky-500 text-lg">Breadcord usage is best to see at the github page. You can find examples of breadcord in action with the button below.</p>
            <Link className="w-full h-full" href="https://github.com/Ethy56/Breadcord/tree/main/examples">
                <div className="cursor-pointer transition-all rounded-full px-4 py-1 bg-sky-800 text-white hover:bg-sky-600">
                    Breadcord Examples
                </div>
            </Link>
        </div>
    )
};

export default Usage;