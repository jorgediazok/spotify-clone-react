import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './DataLayer';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import Login from './Login';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    // @ts-ignore
    let _token = hash.access_token;
    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(user);
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });      
      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
      
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1DX9qRMAPlxxDn").then(response=>{
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
