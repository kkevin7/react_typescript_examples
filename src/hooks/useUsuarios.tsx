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

        if(resp.data.data){
            setUsuarios(resp.data.data);
            paginaRef.current ++;
        }else{
            alert('No hay registros');
        }
        setUsuarios(resp.data.data);
    }

    return{
        usuarios,
        getUsuarios,
    }
}
