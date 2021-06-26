interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion{
    pais: string;
    casaNo: number
}

export const ObjectosTilerales = () => {

    const persona: Persona = {
        nombreCompleto: 'Kevin Martinez',
        edad: 25,
        direccion: {
            pais: 'Canadá',
            casaNo: 615
        }
    }

    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}
