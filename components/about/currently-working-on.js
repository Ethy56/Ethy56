import styles from "../../styles/Swing.module.css";
import Image from "next/image";

const CurrentlyWorkingOn = props => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12 select-none">
            <div className="flex flex-row justify-center items-center">
                <Image class={styles.swing} alt="logo" src="https://cdn.discordapp.com/attachments/809184246072606751/961434922910892112/breadieswing.png" width={200} height={200} />
                <h1 className="text-sky-500 text-4xl">Currently Working On</h1>
            </div>
            <ul className="text-sky-500 text-lg">
                <li>
                    <h1 className="font-bold">This site</h1>
                    <h1>
                        &emsp;&emsp;This site doesn{"'"}t have a name yet but this will be open source to the public on my github.
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
            </ul>
        </div>
    )
};

export default CurrentlyWorkingOn;