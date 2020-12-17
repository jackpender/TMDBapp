class StubAPI {
    constructor() {
        this.favoriteMovies = [];
        this.watchlist= [];
    }

    add(movie, upcoming) {
        this.favoriteMovies.push(movie);
        this.watchlist.push(upcoming);
    }

    getAll() {
        return this.favoriteMovies;
    }

    getAll() {
        return this.watchlist;
    }
}

export default new StubAPI();