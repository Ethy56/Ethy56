import Items from "../components/items.js";
import Channels from "../components/channels.js";
import Deck from "../components/deck.js";
import { useRouter } from 'next/router'

// server column #202225
// channels column #2f3136
// main column #36393f

export default function Home() {
  const router = useRouter();
  return (
    <div className="max-w-[100vw] max-h-[100vh] min-w-[100vw] min-h-[100vh] w-full h-full flex flex-row">
      <div id="items" className="max-w-[3.7vw] w-full h-[100vh] bg-[#202225]">
        <Items router={router} />
      </div>
      <div id="options" className="max-w-[12.5vw] w-full h-[100vh]  bg-[#2f3136]">
        <Channels router={router} />
      </div>
      <div id="deck" className='w-full h-[100vh]  bg-[#36393f]'>
        <Deck router={router} />
      </div>
    </div>
  )
};