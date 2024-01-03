import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { mainMenü } from "../../../../utils/consts";
import Button from "../../../../components/button";
import More from "./more";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenü.map((menu, index) => (
        <NavLink key={index} to={menu.path} className="py-[0.188rem] block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)] transition-colors",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[1.641rem] h-[1.641rem]  relative">
                {menu?.notification && (
                  <span className=" w-[1.125rem] h-[1.125rem] rounded-full bg-[color:var(--color-primary)] absolute -top-1.5 -right-1 flex items-center justify-center text-[color:var(--background-primary)] text-[0.688rem] ">
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
