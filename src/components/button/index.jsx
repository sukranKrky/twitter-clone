import { createElement } from "react";
import classNames from "classnames"
import PropsTypes from "prop-types"
export default function Button({size,children}){
    return createElement('button',{
        className: classNames("bg-[#1d9bf0] rounded-full font-bold flex items-center hover:bg-[#0000] transition-colors",{
            "px-4 h-9 ": size ==="normal"

        })
    }, children)

}

Button.propsTypes={
    size: PropsTypes.oneOf(['normal','large'])
}

Button.defaultProps= {
    size:'normal'
}