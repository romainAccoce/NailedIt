import {  useState, useEffect } from "react";
import axios from "axios";

interface Props {
    token: string;
}


const SearchField: React.FC<Props> = ({token}) => {

    const [searchKey, setSearchKey] = useState('');
    const [artists, setArtists] = useState<any>([]);

    const searchArtists = async (event: { preventDefault: () => void; }) => {

      event.preventDefault()
    const {data} = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        params: {
            q: searchKey,
            type: 'artist'
        }
    });
    console.log(data.artists.items);

    setArtists(data.artists.items);
    }

    useEffect(() => {
        console.log('artists:' + artists);
    }, [artists])

    return(
        <div>
            <form onSubmit={searchArtists}>
                <input type='text' onChange={e => setSearchKey(e.target.value)}/>
                <button type={'submit'}>Search</button>
            </form>
            {/* <div>
                artists.map((artist) => (
                    <div key={artist.name}>{artist.name}</div>
                )) 
            </div> */}
        </div>
    )
};

export default SearchField;