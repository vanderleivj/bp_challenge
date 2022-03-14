import { useNavigate } from 'react-router-dom';

//Svg
import HomeIco from '../../assets/ico_home.svg'
import ConteudoIco from '../../assets/ico_conteudo.svg'
import FormacaoIco from '../../assets/ico_formacao.svg'
import LivesIco from '../../assets/ico_lives.svg'
import PerfilIco from '../../assets/ico_perfil.svg'

//Styles
import { MenuContainer, MobileButtonContainer } from './mobileMenuStyle';

export function MobileMenu() {
  const navigate = useNavigate();

  return (
    <MenuContainer>
      <MobileButtonContainer 
        isSelected={true}
        onClick={() => navigate('/')}
      >
        <img alt='ico' src={HomeIco} />
        <p>Início</p>
      </MobileButtonContainer>
      <MobileButtonContainer isSelected={false}>
        <img alt='ico' src={ConteudoIco} />
        <p>Conteúdo</p>
      </MobileButtonContainer>
      <MobileButtonContainer isSelected={false}>
        <img alt='ico' src={FormacaoIco} />
        <p>Formação</p>
      </MobileButtonContainer>
      <MobileButtonContainer isSelected={false}>
        <img alt='ico' src={LivesIco} />
        <p>Lives</p>
      </MobileButtonContainer>
      <MobileButtonContainer isSelected={false} lastOne={true}>
        <img alt='ico' src={PerfilIco} />
        <p>Perfil</p>
      </MobileButtonContainer>
    </MenuContainer>
  );
}