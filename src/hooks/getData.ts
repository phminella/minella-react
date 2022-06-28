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

export default async function useGetData(fetchUrl: any, actionName: any) {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    // fetch data from server
    const response: any = await fetch(fetchUrl);
    const data = await response.json();
    let dataArray: dataArray[] = [];
    const temp: any = await data[i18n.language];
    for (const id in temp) {
        dataArray = [...dataArray, temp[id]];
    }
    dispatch(setWorkExperience(dataArray))
}