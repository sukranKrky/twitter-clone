import React from "react";
import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { numberFormat } from "../../../../../utils/formats";

export default function Topic({ item }) {
  return (
    <Link
      to="/"
      className="py-3  px-4 transition-colors hover:bg-white[0.03] hover:bg-[#eff3f41a] flex"
    >
      <div className="w-[290px]">
        <div className="text-[0.813rem] text-[color:var(--color-base-secondary)] leading-4 ">
          {item.title}
        </div>
        <div className=" font-bold leading-5 mt-0.5 ">
          {item.topic.type === "tag" && "#"}
          {item.topic.value}
        </div>

        {item?.postCount && (
          <div className="text-[0.813rem] text-[color:var(--color-base-secondary)]  mt-1 leading-4 ">
            {numberFormat(item.postCount)}
          </div>
        )}
      </div>{" "}
      <div className="left-85px">
        <Popover className="relative">
          <Popover.Button
              className="w-[34.75px] h-[34.75px] outline-none rounded-full relative top-0 right-0 flex items-center justify-center hover:bg-[#1d9bf01a]  transition-colors  "
              >
         
              <svg viewBox="0 0 24 24" className="h-[1.172rem]">
                <path
                  fill="currentColor"
                  d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                />
              </svg>
          </Popover.Button>
          <Popover.Panel className="w-[24rem] rounded-xl grid absolute top-2 overflow-hidden right-0 bg-[color:var(--background-primary)]  shadow-box z-[2]">
					<button type="button" className="hover:bg-[#1d9bf01a] transition-colors text-left py-3 px-4 flex items-center gap-3 leading-5 font-bold ">
						<svg viewBox="0 0 24 24" className="h-[1.172rem]">
								<path
									fill="currentColor"
									d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
								/>
						</svg>
						İlgimi çekmiyor
					</button>
					<button type="button" className="hover:bg-[#1d9bf01a] transition-colors text-left py-3 px-4 flex items-center gap-3 leading-5 font-bold">
						<svg viewBox="0 0 24 24" className="h-[1.172rem]">
								<path
									fill="currentColor"
									d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
								/>
						</svg>
						Bu gündem başlığı zararlı veya spam içeriyor
					</button>
				</Popover.Panel>
        </Popover>


        
      </div>
    </Link>
  );
}
