import { useCallback, useEffect, useState } from 'react';

const getUrlId = (url) => url.match(/\d+/).join("");

const isNotEmpty = (obj) => {
    if (Array.isArray(obj)) return obj.length > 0;
    return Object.keys(obj).length > 0;
}

const useGetData = (method, dataToGet = []) => {
    const [data, setData] = useState([]);
    const getData = useCallback(async (id) => method(id), [method]);

    const getAllData = useCallback(async () => {
        const newData = await Promise.all(dataToGet.map(async (url) => await getData(getUrlId(url))));

        setData(newData.filter(obj => isNotEmpty(obj)));
    }, [dataToGet.length]);

    useEffect(() => {
        getAllData();
    }, [dataToGet.length]);

    return data;        
};

export default useGetData;