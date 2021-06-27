import { useForm } from "../hooks/useForm"

export const Formularios = () => {

    const initialState = {
        email: 'kevinmartinez@gmail.com',
        password: 'password123'
    }

    const { state: formulario, onChange } = useForm(initialState);
    const { email, password } = formulario;

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => onChange(e.target.value, 'email')}
            />
            <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={password}
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
