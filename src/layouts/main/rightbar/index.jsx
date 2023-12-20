
import Premium from "./premium";
import Search from "./search";
import Topicks from "./topics";
import WhoFollow from "./who-follow";

export default function RigthBar(){
    return(
        <aside className="w-[350px] mr-2.5 ">
           <Search/>
           <Premium/>
           <Topicks/>
           <WhoFollow/>
        </aside>
    )

}