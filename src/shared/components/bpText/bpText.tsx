import { BpTextProps } from './bpTextInterfce';
import {Text} from './bpTextStyle';

export function BpText({fontSize,children}: BpTextProps) {
  return (
    <Text fontSize={fontSize}>
      {children}
    </Text>
  );
}