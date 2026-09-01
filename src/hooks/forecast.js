import { useQuery } from "@tanstack/react-query";
import { getForecast } from "../services/weatherApi";


export const useForecast = (city) => {
    return useQuery({
        queryKey: ["forecast",city],
        queryFn: () => getForecast(city),
        enabled: !!city,
        staleTime: 5*60*100, 
        retry: 2,
        refetchInterval: 5 * 60 * 1000,

    })
}