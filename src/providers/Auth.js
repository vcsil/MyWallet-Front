import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    token: "",
    entrou: false,
  });

  useEffect(() => {
    if (localStorage.getItem("usuario")) {
      const usuario = localStorage.getItem("usuario");
      const objetoUsuario = JSON.parse(usuario);
      setUser({
        ...user,
        name: objetoUsuario.name,
        email: objetoUsuario.email,
        token: objetoUsuario.token,
        entrou: objetoUsuario.entrou,
      });
    }
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const usuario = { user, setUser };

  return (
    <AuthContext.Provider value={usuario}>{children}</AuthContext.Provider>
  );
}
