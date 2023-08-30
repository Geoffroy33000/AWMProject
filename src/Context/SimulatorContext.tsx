import { createContext } from "react";

import {
  BoitiersMock,
  FondsMock,
  CouronneMock,
  BraceletsMock,
  AiguillesMock,
} from "../Mocks";

export interface SimulatorType {
  boitier: string;
  fond: string;
  couronne: string;
  bracelet: string;
  aiguille: string;
}

export const initialState: SimulatorType = {
  boitier: BoitiersMock[0].nom_image,
  fond: FondsMock[0].nom_image,
  couronne: CouronneMock[0].nom_image,
  bracelet: BraceletsMock[0].nom_image,
  aiguille: AiguillesMock[0].nom_image,
};

export const SimulatorContext = createContext(initialState);
