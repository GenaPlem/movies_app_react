import {useEffect} from "react";

const useGetData = (url, setData, results) => {
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.results ? setData(data.results) : setData(data);
            })
            .catch(error => console.log(error));
    },[results])
}

export default useGetData;