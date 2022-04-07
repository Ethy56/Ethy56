import { useState } from "react";
import Image from "next/image";
import ChannelsFor from "./channelsfor.js";
import Link from "next/link";

function getFancy(id) {
    if (id === "about") {
        return "About Me";
    } else if (id === "disadvantages") {
        return "Disadvantages";
    } else if (id === "breadcord") {
        return "Breadcord";
    } else if (id === "github") {
        return "GitHub";
    } else {
        return "Ethy"
    }
}

const Channels = props => {
    var router = props.router;
    var id = "", item = "";
    if (router.query !== {} && router.query.id) {
        id = router.query.id;
    }
    return (
        <div className="w-full h-full bg-inherit flex flex-col">
            <div className="h-[94vh] flex flex-col">
                <h1 className="text-white text-xl text-left p-4 select-none">
                    {getFancy(id)}
                </h1>
                <div className='rounded-full w-full h-[0.3vh] bg-[#232428]' />
                {<ChannelsFor id={id} />}
            </div>
            <div className="h-[6vh] bg-[#292b2f] text-white flex justify-around items-center gap-1 select-none">
                <Image src="https://cdn.discordapp.com/attachments/809184246072606751/961326617987284992/breadiepfp.png" alt="logo" width={40} height={40} />
                <div className="flex flex-col items-left justify-center">
                    <h1 className="font-bold text-md">Ethy</h1>
                    <h2 className="text-xs">Hello World!</h2>                    
                </div>
                <div className="transition-all rounded-lg cursor-pointer flex justify-center items-center hover:bg-[#36393f] p-2">
                    <Link href="https://github.com/Ethy56">
                        <Image className="brightness-[-100%]" src="https://cdn.discordapp.com/attachments/809184246072606751/961345410276921424/unknown.png" alt="github" width={25} height={25} />
                    </Link>
                </div>
                <div className="transition-all rounded-lg cursor-pointer flex justify-center items-center hover:bg-[#36393f] p-2">
                    <Link href="https://ethy.vercel.app/">
                        <Image className="brightness-[-100%]" src="https://cdn.discordapp.com/attachments/809184246072606751/961346707407392819/unknown.png" alt="github" width={25} height={25} />
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Channels;