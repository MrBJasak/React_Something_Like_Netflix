import React from "react";
import styles from "./App.module.css";
import Row from "./Row";
import requests from "./requests";

function App() {
    return (
        <div className={""}>
            <Row title='Netflix' fetchUrl={requests.fetchNetflix} isLargeRow />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Filmy Akcji' fetchUrl={requests.fetchActionMovies} />
            <Row title='Komedie' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Horrory' fetchUrl={requests.fetchHorrorMovies} />
            <Row title='Dokumenty' fetchUrl={requests.FetchDocumetaries} />
            <Row title='Romantyczne' fetchUrl={requests.fetchRomanceMovies} />
        </div>
    );
}

export default App;
