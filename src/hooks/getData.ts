import { useTranslation } from 'react-i18next';
import { useDispatch } from "react-redux";
import { setWorkExperience } from "../store/themeSlice";

export default function useGetData(fetchUrl: any, actionName: any) {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    // fetch data from server
    fetch(fetchUrl)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            const dataArray = [];
            const temp = data[i18n.language];
            for (const id in temp) {
                // Change array structure to adapt to your data
                dataArray.push({
                    id: id,
                    company: temp[id].company,
                    location: temp[id].location,
                    year: temp[id].year,
                    position: temp[id].position,
                    details: temp[id].details,
                    bgImg: temp[id].bgImg,
                    flagImg: temp[id].flagImg
                });
            }
            dispatch(setWorkExperience(dataArray))
        })
        .catch((error) => {
            console.log("error:" + error);
        });
}