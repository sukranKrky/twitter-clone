import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "../../../../store/hoooks";
import More   from "./more";

export default function Account() {
  const account = useAccount();
  return (
    <div className="mt-auto">
      <Popover>
        <Popover.Button className="my-3 p-3  w-full  rounded-full flex text-left  hover:bg-[#eff3f41a] outline-none">
          <img src={account.avatar} alt="" className="w-10 h-10 rounded-full" />

          <div className="mx-3 text-[15px]"> 
          <h6 className="font-bold leading-[20px]">{account.fullName} </h6>
         
            
           
            <div className=" text-[#71767b] leading-[20px]">
                @{account.userName}
            </div>
             </div>
             <svg viewBox="0 0 24 24" className="ml-auto mt-3 h-[1.172rem]">
							<path
								fill="currentColor"
								d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
							/>
					</svg>
        </Popover.Button>
        <Transition
            enter="transition duration-200 ease-out"
            enterFrom="transform s opacity-0"
            enterTo="transform opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform  opacity-100"
            leaveTo="transform opacity-0"
          >

        <Popover.Panel className=" overflow-hidden py-3 absolute bottom-24 w-[300px] -left-40 1 translate-x-1/2  bg-black shadow-box rounded-2xl ">
            {({close})=>(
<More close={close} />
  )}
            </Popover.Panel>
     </Transition>
      </Popover>
    </div>
  );
}
