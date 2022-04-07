import Link from "next/link";
import dynamic from 'next/dynamic'

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

const Deck = props => {
    var router = props.router;
    var id = "", item = "";
    if (router.query !== {} && router.query.id) {
        id = router.query.id;
    } else {
        id = "ethy";
    }
    if (router.query !== {} && router.query.item) {
        item = router.query.item;
    } else {
        item = dict[id][0];
    }
    var Item = dynamic(()=> import("./"+id+"/"+item+".js"));
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Item router={router} />
        </div>
    )
};

export default Deck;