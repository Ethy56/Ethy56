import Image from "next/image";
import Link from "next/link";

var dict = {
    about: [
        "beginnings",
        "currently-working-on",
        "goals"
    ],
    github: [
        "link"
    ],
    disadvantages: [
        "about",
        "download"
    ],
    breadcord: [
        "about",
        "download",
        "usage"
    ],
    ethy: [
        "how-to-use"
    ] 
}

const ChannelsFor = props => {
    var id = props.id === "" ? "ethy": props.id;
    var items = dict[id];
    return (
        <div className="select-none px-4 py-2 flex flex-col justify-center gap-2">
            {items.map(item=>{
                return (
                    <Link key={id+item} href={"/?id="+ id + "&item="+item}>
                        <div className="cursor-pointer w-full h-[2.5vh] py-2 flex justify-left items-center transition-all text-gray-300 hover:text-gray-100 hover:bg-[#393c43]">
                            <Image src="https://cdn.discordapp.com/attachments/814236503000744016/961361927043444766/hashtagthing.png" width={20} height={20} />
                            <h1 className="text-md">{item}</h1>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ChannelsFor;