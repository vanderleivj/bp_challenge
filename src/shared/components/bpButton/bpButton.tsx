import { BpButtonProps } from "./bpButtonInterface";
import { Button } from "./bpButtonStyle";

export function BpButton({onClick,children}:BpButtonProps) {

  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
}