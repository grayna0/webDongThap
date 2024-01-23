
const useLocalStorage = () => {
    let localItem
    const getItemStorage = (key: string) => {

        localItem = localStorage.getItem(key)
        if (localItem) {
            return JSON.parse(localItem)

        }
        return null;
    }
    const setItemStorage = (key: string,data:any) => {
        localStorage.setItem(key ,JSON.stringify(data))
    }
    const removeItemStorage = (key: string) => {
        localStorage.removeItem(key)
    }
    return {getItemStorage, setItemStorage, removeItemStorage}
}
export default useLocalStorage