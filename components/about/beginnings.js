import styles from "../../styles/Swing.module.css";
import Image from "next/image";

const Beginnings = props => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12 select-none">
            <div className="flex flex-row justify-center items-center">
                <Image class={styles.swing} src="https://cdn.discordapp.com/attachments/809184246072606751/961434922910892112/breadieswing.png" width={200} height={200} />
                <h1 className="text-sky-500 text-4xl">About me</h1>
            </div>
            <p className="w-[40vw] text-center text-sky-500 text-lg">I have been devloping on multiple platforms for over 3 years now. I have built small games, discord bots, and websites of various uses. I plan to become a full stack developer after college and tackle the world.</p>
            <ul className="text-sky-500 text-lg">
                <li>
                    <h1 className="font-bold">This site</h1>
                    <h1>
                        &emsp;&emsp;This site doesn't have a name yet but this will be open source to the public on my github.
                    </h1>
                </li>
                <li>
                    <h1 className="font-bold">Disadvantages</h1>
                    <h1>
                        &emsp;&emsp;Disadvantages is a bakkesmod plugin built to help plats in rocket league beat ssls.
                    </h1>
                </li>
                <li>
                    <h1 className="font-bold">Breadcord</h1>
                    <h1>
                        &emsp;&emsp;Breadcord is a npm package that can be used to handle with the backend of discord bots.
                    </h1>
                </li>
                <li>
                <h1 className="font-bold">Text Speaker (no longer available)</h1>
                    <h1>
                        &emsp;&emsp;Text Speaker was a discord bot that allowed people who either weren't comfortable or couldn't talk in a voice channel have a voice.
                    </h1>
                </li>
            </ul>
        </div>
    )
};

export default Beginnings;