import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//Svg
import BpLogo from '../../assets/bpLogo.svg'

//Styles
import { Avatar, MenuBox, MenuContainer } from './menuStyle';


export function MainMenu() {
  const navigate = useNavigate();
  const listHomePageInfo = useSelector((state:any) => state.HomeReducer?.listHomePageInfo);

  return (
    <MenuContainer>
      <MenuBox>
        <img alt='logo' src={BpLogo}/>
        <p onClick={() => navigate('/')}>Início</p>
        <p>Conteúdo</p>
        <p>Formação</p>
        <p>Lives</p>
      </MenuBox>
      <div>
        <Avatar backgroundImage={listHomePageInfo?.profile_image}/>
      </div>
    </MenuContainer>
  );
}