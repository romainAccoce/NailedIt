import {useEffect, useState} from 'react';

const Login: React.FC = () => {
    const CLIENT_ID: String = '692c8e8d7adf4ee5975d0135a0c8be98';
    const REDIRECT_URI: String = 'http://localhost:3000';
    const AUTH_ENDPOINT: String = 'https://accounts.spotify.com/authorize';
    const RESPONSE_TYPE: String = 'token';

    const [token, setToken] = useState('');

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem('nailedit_token');

    if (!token && hash) {
        console.log(hash)
        token = new URLSearchParams(hash).get('#access_token');
        console.log(token);

        window.location.hash = "";
        window.localStorage.setItem('nailedit_token', token!);
    };

    setToken(token!);

    }, []);

    const logout = () => {
        setToken('');
        window.localStorage.removeItem('nailedit_token');
    };

    return(
        <div className='login'>
            {
                !token ? 
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
                :
                <button onClick={logout}>Logout</button>
            }    

        </div>

    )
}

export default Login;