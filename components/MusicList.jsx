import { useEffect, useState } from "react"
import MusicInList from "./MusicInList"

export default function MusicList(){
    const [musicList, setMusicList] = useState([])

    const fetchMusicList = async () => {
        try {
            await window.eplayerAPI.SendToElectron('music-get')
            await window.eplayerAPI.RecieveFromElectron('music-list', (event, arg) => {
                setMusicList(arg)
            })
        } catch (error) {
            console.log(`Erro ao obter a lista de músicas ${error}`)
        }
    }
    useEffect(() => {
        fetchMusicList()
    }, [])
    return(
        <div className="w-11/12">
            <h2 className="ml-5 text-white text-2xl"></h2>
            {musicList.length === 0 ? <p className="text-zinc-400">Vazio</p> : musicList.ma((music, index) => {
                return <MusicInList key={index}music={music}/>
            })
        }
        </div>
    )
}