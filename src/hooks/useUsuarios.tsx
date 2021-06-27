import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRest";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);

    useEffect(() => {
        getUsuarios();
    }, [])

    const getUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        });
        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        } else {
            paginaRef.current--;
            alert('No hay registros');
        }
    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        getUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            getUsuarios();
        }
    }

    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente,
    }
}
