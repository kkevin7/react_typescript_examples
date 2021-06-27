import { useEffect, useReducer } from "react";

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: '',
}

type LoginPayload = {
    username: string;
    nombre: string;
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: '',
            };

        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'ABC123',
                nombre,
                username,
            }

        default:
            return state;
    }
}

export const Login = () => {
    const [state, dispatch] = useReducer(authReducer, initialState)
    const { validando, token, nombre, username } = state;

    const login = () => {
        dispatch({
            type: 'login',
            payload: { nombre: 'Kevin', username: 'kevin123' }
        });
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, [])


    if (state.validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>
            {(token) ? (
                <>
                    <div className="alert alert-success">
                        Autenticado como : {nombre}
                    </div>
                    <button className="btn btn-danger">
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <div className="alert alert-danger">
                        No Autenticado
                    </div>
                    <button className="btn btn-primary" onClick={login}>
                        Login
                    </button>
                </>
            )}

        </>
    )
}
