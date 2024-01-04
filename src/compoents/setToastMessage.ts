import { toast } from "react-toastify"


const setToastMessage = (message:string, type:string ="success") => {
    if(message && type) {
        return toast[type](message)
    }
}
export default setToastMessage