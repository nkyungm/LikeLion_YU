let movies=[
    {
        id:1,
        title:"하울의 움직이는 성",
        director:"미야자키 히야오",
        category:"일본 애니메이션",
        detail:"아버지가 물려준 모자..."
    },
    {
        id:2,
        title:"보스 베이비2",
        director:"톰 맥그라스",
        category:"미국 애니메이션",
        detail:"각자의 삶을 살아가던..."
    }
];

export function getMovies(){
    return movies;
}

export function getMovie(id){
    return movies.find((movie)=>movie.id===id);
}