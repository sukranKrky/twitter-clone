import { createElement } from "react";
import classNames from "classnames"
import PropsTypes from "prop-types"
export default function Button({as,size,children, variant, className, ...props}){
    return createElement(as,{
        type:"button",
        className: classNames(" rounded-full justify-center font-bold flex items-center  transition-all",{
           "px-4 h-8 text-sm":size=="small",
            "px-4 h-9 ": size ==="normal",
            "px-4 h-[52px] w-full text-[1.063rem] h-[3.25rem] w-full": size=== "large",
            "bg-[color:var(--color-primary)] hover:opacity-90 text-white  ":variant=== "primary",
            "bg-[#eff3f4] hover:bg-[#d7dbdc] text-black":variant==="white",
            "border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]":variant==="white-outline",
            [className]:true

        }),
        ...props
    }, children)

}

Button.propsTypes={
    as: PropsTypes.any,
    size: PropsTypes.oneOf(["small",'normal','large']),
    variant: PropsTypes.oneOf(['primary','white',"white-outline"]),
    props:PropsTypes.object,
    className:PropsTypes.string, //props ile geçince ustteki clasName'i eziyor
}

Button.defaultProps= {
    as:"button",
    size:'normal',
    variant:'primary'
}