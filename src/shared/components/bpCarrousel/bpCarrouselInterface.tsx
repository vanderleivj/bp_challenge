import { ReactChild } from "react";

export interface BgCarrouselProps {
  children: ReactChild,
}

export interface BpCarrouselContainerProps {
  backgroundImage: string,
  onClick: () => void,
  children: any,
  testID?: string;
}