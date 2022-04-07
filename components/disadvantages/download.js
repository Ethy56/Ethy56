import Image from "next/image";
import Link from "next/link";

const About = props => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12 select-none">
            <div className="flex flex-row justify-center items-center gap-4">
                <Image className="rounded-[2rem]" alt="logo" src="https://cdn.discordapp.com/attachments/814236503000744016/961444893459365968/unknown.png" width={430} height={250} />
                <h1 className="text-sky-500 text-4xl">Download Disadvantages</h1>
            </div>
            <p className="w-[40vw] text-center text-sky-500 text-lg">To download Disadvantages, first have bakkesmod installed. From there you can click the button below to go to the bakkes mod page for Disadvantages.</p>
            <Link className="w-full h-full" href="https://bakkesplugins.com/plugins/view/305">
                <div className="cursor-pointer transition-all rounded-full px-4 py-1 bg-sky-800 text-white hover:bg-sky-600">
                    Bakkes Mod Page
                </div>
            </Link>
        </div>
    )
};

export default About;