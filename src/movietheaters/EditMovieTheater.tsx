import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater(){
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm 
                model={{name: 'São Bernardo do Campo', 
                latitude: -23.71791409608463, 
                longitude: -46.55487484442402}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}