import styles from "../../styles/Swing.module.css";
import Image from "next/image";

const Goals = props => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12 select-none">
            <div className="flex flex-row justify-center items-center">
                <Image class={styles.swing} alt="logo" src="https://cdn.discordapp.com/attachments/809184246072606751/961434922910892112/breadieswing.png" width={200} height={200} />
                <h1 className="text-sky-500 text-4xl">Goals</h1>
            </div>
            <p className="w-[40vw] text-center text-sky-500 text-lg">My goal is to at least change someones life for the better. I hope that my plan, to become a full stack developer after college, will turn into a lifetime of enjoyment.</p>
        </div>
    )
};

export default Goals;