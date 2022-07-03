import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: "",
    name: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/StadeFranceNationsLeague2018.jpg/800px-StadeFranceNationsLeague2018.jpg",
    token: "",
    done: 0,
    entrou: false,
  });

  // useEffect(() => {
  //     if (localStorage.getItem("usuario")) {
  //             const usuario = localStorage.getItem("usuario");
  //             const objetoUsuario = JSON.parse(usuario);
  //             setUser({...user,
  //                     id: objetoUsuario.id,
  //                     name: objetoUsuario.name,
  //                     entrou: objetoUsuario.entrou,
  //                     image: objetoUsuario.image,
  //                     token: objetoUsuario.token});
  //         }
  // }, [])

  const usuario = useMemo(() => ({ user, setUser }), []);

  return (
    <AuthContext.Provider value={usuario}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
