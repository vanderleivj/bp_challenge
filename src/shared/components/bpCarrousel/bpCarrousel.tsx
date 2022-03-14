import { BgCarrouselProps, BpCarrouselContainerProps } from "./bpCarrouselInterface";
import { CardsContainer, Container } from "./bpCarrouselStyle";

export function BpCarrousel(props: BgCarrouselProps) {

  return (
    <Container>
      {props.children}
    </Container> 
  );
}

export function BpCarrouselContainer(props:BpCarrouselContainerProps) {
  return (
    <CardsContainer 
      backgroundImage={props.backgroundImage} 
      onClick={props.onClick}
    >
      {props.children}
    </CardsContainer>
  )
}