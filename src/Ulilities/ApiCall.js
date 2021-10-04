import { useEffect, useState } from "react";


const UseApi = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('/ServiceApi.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return [service, setService]
}
export { UseApi }