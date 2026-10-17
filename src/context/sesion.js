import { createContext, useContext } from 'react'

export const SesionContext = createContext(null)

// Uso: const { usuario, esAdmin, login, registrar, actualizarPerfil, logout } = useSesion()
export function useSesion() {
  const sesion = useContext(SesionContext)
  if (!sesion) throw new Error('useSesion debe usarse dentro de <SesionProvider>')
  return sesion
}
