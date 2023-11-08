import React, { useEffect } from 'react';

export const favoritosContext = React.createContext();

const favoritosProvider = (props) => {
    const [favoritos, setFavoritos] = React.useState(() => {
        // Inicio local storgae
        const storedfavoritos = localStorage.getItem('favoritos');
        return storedfavoritos ? JSON.parse(storedfavoritos) : [];
    });

    useEffect(() => {
        // Update LocalStorage whenever favoritos changes
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }, [favoritos]);

    return (
        <favoritosContext.Provider value={{ favoritos, setFavoritos }}>
            {props.children}
        </favoritosContext.Provider>
    );
}

export default favoritosProvider;