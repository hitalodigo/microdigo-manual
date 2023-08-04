import { createContext, useState, useRef } from "react";


export const AnchorContext = createContext();


export const AnchorProvider = ({ children }) => {

  const [sectionRefs, setSectionRefs] = useState({});

  const registerSection = ({ name, ref }) => {

    setSectionRefs(prevRefs => {

      return {
        ...prevRefs,
        [`${name}`]: ref
      }
    })
  }

  return (
    <AnchorContext.Provider value={{
      sectionRefs,
      registerSection
    }}>
      {children}
    </AnchorContext.Provider>
  )
}
