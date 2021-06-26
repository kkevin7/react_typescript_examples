import React from 'react'

export const TipoBasicos = () => {
    const nombre: string | number = 'Kevin';
    const edad: number = 35;
    const estaActivo: boolean = true;
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

    return (
        <>
            <h3>Tipos Basicos</h3>
            {nombre} - {edad}, {estaActivo ? 'activo' : 'inactivo'}
            <br/>
            {poderes.join(', ')}
        </>
    )
}
