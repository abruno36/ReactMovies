import ActorForm from './ActorForm'

export default function EditActor(){
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{name: 'Tom Holland', 
                dateOfBirth: new Date('1996-06-01T00:00:00'),
                biography: `Tom nasceu em Kingston upon Thames, Londres, filho de Nicola Elizabeth (nascida Frost), uma fotógrafa, e de Dominic Holland, um conhecido comediante e escritor britânico.[5] Tem três irmãos mais novos: os gêmeos Sam e Harry que são três anos mais novos, e Patrick, oito anos mais novo.[6][7] Os seus avós paternos nasceram na Ilha de Man e na Irlanda.[8]
                Frequentou a Donhead, uma escola primária católica em Wimbledon e, mais tarde, a Wimbledon College, uma escola gerida por jesuítas. A partir de dezembro de 2012, frequentou a BRIT School for Performing Arts and Technology, onde completou um curso de dois anos.[9]`,
                pictureURL: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/11/GettyImages-1159427480.jpg?w=876&h=484&crop=1'
            }}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}