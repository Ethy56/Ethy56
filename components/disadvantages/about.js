import Image from "next/image";

const About = props => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-12 select-none">
            <div className="flex flex-row justify-center items-center gap-4">
                <Image className="rounded-[2rem]" alt="logo" src="https://cdn.discordapp.com/attachments/814236503000744016/961444893459365968/unknown.png" width={430} height={250} />
                <h1 className="text-sky-500 text-4xl">About Disadvantages</h1>
            </div>
            <p className="w-[40vw] text-center text-sky-500 text-lg">The basic idea of Disadvantages is too make the game more fair for those lovely plats who try to beat ssls. Disadvantages allows you to make one team (or both if your really evil) get stopped (the velocity of their car is set to 0). That{"'"}s not all, with the interval slider you can change how much the team(s) get stopped. The lower the value, the more the plugin will stop the players of that team.</p>
        </div>
    )
};

export default About;