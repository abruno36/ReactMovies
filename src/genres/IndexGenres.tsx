import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { genreDTO } from "./genres.model";
import { urlGenres } from '../endpoints';
import IndexEntity from '../utils/IndexEntity';

export default function IndexGenres(){

    const [genres, setGenres] = useState<genreDTO[]>();
    
    useEffect(() => {
        axios.get(urlGenres)
            .then((Response: AxiosResponse<genreDTO[]>) => {
                setGenres(Response.data);
            })
    }, [])

    return (
        <>
            <IndexEntity<genreDTO>
                url={urlGenres} createURL="genres/create" title="Genres"
                entityName="Genre"
            >
                {(genres, buttons) =>
                    <>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {genres?.map(genre =>
                                <tr key={genre.id}>
                                    <td>
                                        {buttons(`genres/edit/${genre.id}`, genre.id)}
                                    </td>
                                    <td>
                                        {genre.name}
                                    </td>
                                </tr>)}
                        </tbody>
                    </>}

            </IndexEntity>
        </>
    )
}