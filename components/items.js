import Image from 'next/image';
import Link from "next/link";

// highlight bg = 5865f2

var things = [
    "about",
    "disadvantages",
    "breadcord",
    "github"
].sort(); 

const Items = props => {
    var query = props.router.query;
    var id = "";
    if (query !== {} && query.id) {
        id = query.id;
    }
    return (
        <div className="w-full h-full bg-inherit flex flex-col items-center py-2 gap-2 select-none">
            <div className={"cursor-pointer pb-1 transition ease-in-out flex justify-center items-center " + (id == "" || id == "ethy" ? "rounded-2xl bg-[#5865f2]" : "rounded-full hover:rounded-2xl bg-[#36393f] hover:bg-[#5865f2]") + " w-[2.5vw] h-[5vh]"}>
                <Link href="/">
                    <Image src="https://cdn.discordapp.com/attachments/809184246072606751/961327730438307950/whitebread.png" width={40} height={40} />
                </Link>
            </div>
            <div className='rounded-full w-[1.75vw] h-[0.2vh] bg-[#2f3136]' />
            <div className="flex flex-col items-center gap-2">
                {things.map(thing => {
                    return (
                        <Link key={thing} href={"/?id="+thing}>
                            <div key={thing} className={"pb-1 text-white text-xl cursor-pointer transition ease-in-out flex justify-center items-center " + (id == thing ? "rounded-2xl bg-[#5865f2]" : "rounded-full hover:rounded-2xl bg-[#36393f] hover:bg-[#5865f2]") + " w-[2.5vw] h-[5vh]"}>
                                {thing[0].toUpperCase()}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};

export default Items;