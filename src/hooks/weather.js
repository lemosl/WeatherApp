import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/weatherApi";

export const useWeather = (city) => {
    return useQuery({
        queryKey: ["weather", city], 
        queryFn: () => getWeather(city),
        enabled: !!city,
        staleTime: 5*60*100, 
        retry: 2,
    });   
}