import ControlMusic from "./ControlMusic";
import PlaylistIcon from "./icons/playlistIcon";

export default function BottomBar(){
    return(
        <>
            <nav className="fixed bottom-0 pt-4 w-full h-20 bg-[#1f1f22] flex justify-center">
                <ControlMusic/>
            </nav>
            <div className="absolute flex justify-end items-center bottom-0 right-0 p-7">
                <PlaylistIcon/>
            </div>
        </>
    )
}