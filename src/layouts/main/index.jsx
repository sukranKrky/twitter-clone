import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RigthBar from "./rightbar";
import { useModal } from "../../store/modal/hooks";
import Modal from "../../modals";
import { useAppearance } from "../../store/appearance/hoooks";
import { useEffect } from "react";

export default function MainLayouts(){
const modal=useModal()
// console.log("modallllMain Layout",modal);

const appearance=useAppearance()
useEffect(() => {
document.documentElement.style.setProperty('--background-primary',appearance.backgroundColor.primary)
document.documentElement.style.setProperty('--background-secondary',appearance.backgroundColor.secondary)
document.documentElement.style.setProperty('--background-third',appearance.backgroundColor.third)
document.documentElement.style.setProperty('--background-modal',appearance.backgroundColor.modal)
document.documentElement.style.setProperty('--background-primary-alpha',appearance.backgroundColor.primaryApha)



document.documentElement.style.setProperty('--color-primary', appearance.color.primary)
document.documentElement.style.setProperty('--color-secondary',appearance.color.secondary)
document.documentElement.style.setProperty('--color-base',appearance.color.base)
document.documentElement.style.setProperty("--color-base-secondary",appearance.color.baseSecondary)

document.documentElement.style.setProperty('--font-size', appearance.fontSize + 'px')
document.documentElement.style.setProperty('--box-shadow', appearance.boxShadow)



//  console.log("appearance :" ,appearance);
}, [appearance])

    return(
      
        <div className="w-[1265px] mx-auto flex "> 
         {modal && <Modal/>}
         <Sidebar/>
         <main className="flex-1 flex gap-[30px]">
             <main className="flex-1 border-x border-[color:var(--backgroun-third)]  " >
            <Outlet/>
         </main>
         <RigthBar/>
         </main>
        
        </div>
    )
}