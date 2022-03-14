import { useLottie } from "lottie-react";

import LoadJson from './loading.json'
import { Container } from "./loadingStyle";

export function Lottie() {
  const options = {
    animationData: LoadJson,
    loop: true,
    autoplay: true,
  };
    
  const { View } = useLottie(options);
    
  return View;
}

export function Loader({open}:any) {
  return (
    <Container visibility={open}>
      <div style={{width:'30%'}}><Lottie/></div>
    </Container>
  );
}