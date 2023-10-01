import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function MainLayouts(){
    return(
        <div className="w-[1265px] mx-auto flex">
         <Sidebar/>
         <main className="flex-1 border-x border-[#c1c1c9]" >
            
            <Outlet/>
         </main>
        </div>
    )
}