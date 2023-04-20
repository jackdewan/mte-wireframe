import { createContext, useContext } from "react";

export interface DisclosureContextProps {
  openKey: string | null;
  setOpenKey: (key: string | null) => void;
}

export const DisclosureContext = createContext<DisclosureContextProps>({
  openKey: "Hello World",
  setOpenKey: () => {},
});

export const useDisclosureContext = () => useContext(DisclosureContext);
