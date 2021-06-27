import { useState } from "react"

export const Formularios = () => {

    const [formulario, setFormulario] = useState({
        email: 'kevinmartinez@gmail.com',
        password: 'password123'
    });

    const onChange = (value: string, campo: string) => {
        setFormulario({
            ...formulario,
            [campo]: value,
        });
    }

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={formulario.email}
                onChange={(e) => onChange(e.target.value, 'email')}
            />
            <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={formulario.password}
                onChange={(e) => onChange(e.target.value, 'password')}
            />

            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}
