import { useQuery } from "@tanstack/react-query";
import { useStarredShows } from "../lib/useStarredShows";
import { getShowsbyIds } from "../api/tvmaze";
import ShowGrid from "../components/shows/ShowGrid";
import {TextCenter} from "../components/common/TextCenter"

const Started = () =>{
    const [starredShowsIds]=useStarredShows();

    const { data: starredShows, error: starredShowsError } = useQuery({
        queryKey: ['starred', starredShowsIds],
        queryFn: () => getShowsbyIds(starredShowsIds).then(result => result.map(show =>({show}))) ,
        
        refetchOnWindowFocus: false,
    });

    console.log({starredShows});
    
    if(starredShows?.length === 0){
        return <TextCenter>No Shows were Starred</TextCenter>
    }

    if(starredShows?.length > 0){
        return <ShowGrid shows={starredShows} />
    }

    if(starredShowsError){
        return <TextCenter>Error Occured: {starredShowsError.message}</TextCenter>
    }

    return <TextCenter>Kindly slow down...Shows are still loading</TextCenter>;
    

};

export default Started;