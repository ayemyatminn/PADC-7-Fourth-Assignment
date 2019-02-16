class Movie{
    constructor(movieImage,movieTitle,moviePreview){
        this.movieImage = movieImage
        this.moviePreview = moviePreview
        this.movieTitle = movieTitle        
    }
    render(template){
        this.detailTemplate = template;
        const result = this.detailTemplate
        .replace("https://pbs.twimg.com/media/Dpi3vFfU4AQAZ2F.jpg",this.movieImage)
        .replace("Card Title",this.movieTitle)
        .replace("I am a very simple card.",this.moviePreview);
        return result;
    }
}

export default Movie;