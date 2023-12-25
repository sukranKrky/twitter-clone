import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RigthBar from "./rightbar";
import { useModal } from "../../store/modal/hooks";
import Modal from "../../modals";
import { useAppearance } from "../../store/appearance/hoooks";
import { useEffect } from "react";

export default function MainLayouts(){
const modal=useModal()
// console.log("modallllMain LLayout",modal);

const appearance=useAppearance()
useEffect(() => {
 console.log("appearance :" ,appearance);
}, [appearance])

    return(
      
        <div className="w-[1265px] mx-auto flex "> 
         {modal && <Modal/>}
         <Sidebar/>
         <main className="flex-1 flex gap-[30px]">
             <main className="flex-1 border-x border-[#2f3336]" >
            <Outlet/>
         </main>
         <RigthBar/>
         </main>
        
        </div>
    )
}