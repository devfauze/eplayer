import EmptyAlbumIcon from "./icons/emptyAlbumIcon";
import DeleteIcon from "./icons/deleteIcon";
import AddIcon from "./icons/addIcon";

export default function MusicInList({music}){
    function handleExcluirMusica(music) {
        window.eplayerAPI.SendToElectron('music-delete', music)
    }

    function handleAdicionarMusica(music) {
        window.eplayerAPI.SendToElectron('music-to-play', music)
    }

    return(
        <div className="m-5 p-2 flex flex-row border border-gray-500 w-full gap-2">
            <EmptyAlbumIcon/>
            <div className="flex justify-between w-full">
                <div>
                    <h1 className="text-white">Nome</h1>
                </div>
                <div>
                    <h2 className="text-white">{music}</h2>
                </div>

                <div className="flex flex-row justify-center gap-5 h-full">
                    <AddIcon onClick={() => handleAdicionarMusica(music)}/>
                    <DeleteIcon onClick={() => handleExcluirMusica(music)}/>
                </div>
            </div>
        </div>
    )
}