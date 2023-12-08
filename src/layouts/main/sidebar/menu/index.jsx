import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { mainMenü } from "../../../../utils/consts";
import Button from "../../../../components/button";
import More from "./more";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenü.map((menu, index) => (
        <NavLink key={index} to={menu.path} className="py-2 block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[#282828] transition-colors",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notification && (
                  <span className=" w-[18px] h-[18px] rounded-full absolute -top-1.5 -right-1 flex items-center justify-center text-[11px] bg-[#1d9bf0]">
                    {menu?.notification}
                  </span>
                )}
                {!isActive && menu.icon.active}
                {isActive && menu.icon.passive}
              </div>
              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}

     <More/>

      <div className="py-4 w-[90%]">
      <Button size="large">Gönder</Button>

      </div>

     
    </nav>

  );
}
