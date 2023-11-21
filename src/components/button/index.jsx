import { createElement } from "react";
import classNames from "classnames"
import PropsTypes from "prop-types"
export default function Button({size,children}){
    return createElement('button',{
        className: classNames("bg-[#1d9bf0] rounded-full justify-center font-bold flex items-center hover:bg-[#1a8cd8] transition-colors",{
            "px-4 h-9 ": size ==="normal",
            "px-4 h-[52px] w-full text-[17px] ": size=== "large"

        })
    }, children)

}

Button.propsTypes={
    size: PropsTypes.oneOf(['normal','large'])
}

Button.defaultProps= {
    size:'normal'
}