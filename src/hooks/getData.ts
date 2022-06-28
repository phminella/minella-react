import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { setWorkExperience } from "../store/themeSlice";

interface dataArray {
    id: number,
    company: string,
    location: string,
    year: number,
    position: string,
    details: string,
    bgImg: string,
    flagImg: string
}

export default async function useGetData(fetchUrl: any) {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    let dataArray: dataArray[] = [];
    // fetch data from server
    try {
        const response: any = await fetch(fetchUrl);
        //error?
        if(!response.ok) {
            throw new Error("hmmm.. this is not right");
        }
        const data = await response.json();
        const temp: any = data[i18n.language];
        for (const id in temp) {
            dataArray = [...dataArray, temp[id]];
        }
    }
    catch (error) {
        console.log(error);
    }
    dispatch(setWorkExperience(dataArray))
}