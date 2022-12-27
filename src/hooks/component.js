import {useEffect} from "react";

const useGetData = (url, setData) => {
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.results ? setData(data.results) : setData(data);
            })
            .catch(error => console.log(error));
    },[url])
}

export default useGetData;