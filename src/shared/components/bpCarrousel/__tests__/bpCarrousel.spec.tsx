import { render } from '@testing-library/react';
import { BpCarrouselContainer } from '../bpCarrousel';

describe('BpCarrousel', () => {
  it('should render correctly', () => {
    const props = {
      backgroundImage:'https://res.cloudinary.com/hvzbb2hdx/image/upload/v1613566417/exercicios/frontend/th01.png'
    }
    const bpCarrousel = render(
      <BpCarrouselContainer onClick={() => {}} {...props}>
        <p>teste</p>
      </BpCarrouselContainer>
    );
    expect(bpCarrousel).toBeTruthy();
  })
})
