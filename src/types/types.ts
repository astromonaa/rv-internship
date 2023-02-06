import { SetStateAction, Dispatch } from "react";

export interface IChoosen {
  id: number;
  text: string;
  type: string;
  icon: React.JSXElementConstructor<any>
}

export interface IInputShow {
  inputShow: boolean
}

export interface IWorkSpaceType {
  id: number;
  name: string;
  goal: string;
  type: string;
  desc: string;
}

export interface IToolsCard {
  id: number;
  name: string;
  desc: string;
  icon: React.JSXElementConstructor<any>
}
export interface IToolsCardProps {
  tool: IToolsCard;
}
export interface WorkSpaceTypeChooseProps {
  choosenPlan: IWorkSpaceType,
  setChoosenPlan: Dispatch<SetStateAction<IWorkSpaceType>>;
}
export interface ICardProps {
  plan: IWorkSpaceType,
  choosen: IWorkSpaceType,
  setChoosen: Dispatch<SetStateAction<IWorkSpaceType>>;
}
export interface ICompanyNameInputProps {
  inputRef: any
  choosen: IChoosen | null;
  setChoosenType: Dispatch<SetStateAction<IChoosen | null>>;
}

export interface IProject {
  name: string;
  type: string;
  detecting: string;
}

export interface IWorkSpace {
  id: number|any;
  name: string|any;
  emails: string|any;
  plan: IWorkSpaceType|null|any;
  type: IChoosen|null|any;
  tool: IToolsCard|null|any;
  role: string|null|any;
  projects: IProject[]
}

export interface IPerAreaState {
  pagination: number[],
  paginationCurrent: number,
  helpText: string,
  inputShow: boolean,
  buttonActive: boolean,
  inputDescText: string;
  buttons: IChoosen[],
  workSpacePlans: IWorkSpaceType[],
  buttonText: string;
  toolsCards: IToolsCard[],
  workSpaces: IWorkSpace[],
  candidateTool: IToolsCard|null
}

export interface IBtnActiveFC {
  inputRef: any,
  setRole: Dispatch<SetStateAction<string>>;
}

export interface StartInfoProps {
  children?: React.ReactChild | React.ReactNode
  handleClick: () => void,
  workSpaceAdd: () => void
}

export interface ModalSliceState {
  modalShow: boolean;
  toolsModal: boolean
}