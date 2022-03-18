import IcoChat from '../../../shared/assets/ico_chat.svg'
import { useWindowSize } from '../hooks/useWindowSize';
import { Container } from './bpContactStyle';

export function BpContact() {
  const size = useWindowSize();
  
  return (
    <>
    {size.width > 767 ? 
      <Container>
        <img alt='ico' src={IcoChat} />
      </Container>
    : ''
    }
    </>
  );
}