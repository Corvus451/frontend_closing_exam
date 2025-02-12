export function findByActorNameAndGenre(allMovies, allActors, actorName, genre) {

    const actor = allActors.find((actor)=> actor.name == actorName);
    // console.log(actor);
    
    if(!actor) {
        return [];
    }

    // const found = allMovies.reduce((prev, current)=> {
    //     console.log("prev:", prev);
    //     return prev;
    // }, [])

    return allMovies.reduce((result, current)=> {
        if(current.actor_ids.includes(actor.id) && current.genres.includes(genre)) {

            result = [...result, current.title];
            console.log("result: ", result);
        }
        return result;
    }, []);
    

}