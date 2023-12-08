import   {configureStore} from "@reduxjs/toolkit"
import auth from "./auth/index"
const store =configureStore({
    reducer:{
        auth
        
    }
})

export default store