export function findUniqueGenres(genres) {

    const uniqueGenres = [];

    for(let i=0; i<genres.length; i++) {

        const movie = genres[i];

        for(let j=0; j< movie.length; j++) {

            const currentGenre = movie[j];

            if(!uniqueGenres.includes(currentGenre)) {

                uniqueGenres.push(currentGenre);
            }
        }
    }

    return uniqueGenres;

}