import { MainBannerProps } from './mainBannerInterface';
import { Container } from './mainBannerStyle';


export function MainBanner({
  image,isMobile,height,backgroundPosition
}: MainBannerProps) {

  return (
    <Container 
      backgroundImage={image} 
      isMobile={isMobile} 
      height={height} 
      backgroundPosition={backgroundPosition}
    />
  );
}