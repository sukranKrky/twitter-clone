import   {configureStore} from "@reduxjs/toolkit"
import auth from "./auth/index"
import modal from "./modal/index"
import appearance from "./appearance/index"


const store =configureStore({
    reducer:{
        auth,
        modal,
        appearance
        
        
    }
})

export default store