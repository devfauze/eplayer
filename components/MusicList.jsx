import { useState } from "react"
import MusicInList from "./MusicInList"

export default function MusicList(){
    const [musicList, setMusicList] = useState([])
    return(
        <div className="w-11/12">
            <h2 className="ml-5 text-white text-2xl"></h2>
            {musicList.length === 0 ? <p className="text-zinc-400">Vazio</p> : musicList.ma((music, list) => {
                return <MusicInList key={index}music={music}/>
            })
        }
        </div>
    )
}