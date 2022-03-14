import { BpContainerProps } from "./bpContainerInterface";
import { Container } from "./bpContainerStyle";

export function BpContainer(props: BpContainerProps) {

  return (
    <Container 
      marginLeft={props.marginLeft}
      marginRight={props.marginRight}
    >
      {props.children}
    </Container>
  );
}