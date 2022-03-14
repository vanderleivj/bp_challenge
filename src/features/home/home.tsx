import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//Interface
import { SelectProps, SeriesListProps, TrainingListProps } from './homeInterface';

//Local imports
import { BpCarrousel, BpCarrouselContainer } from '../../shared/components/bpCarrousel/bpCarrousel';
import { BpContainer } from '../../shared/components/bpContainer/bpContainer';
import { BpText } from '../../shared/components/bpText/bpText';
import { useWindowSize } from '../../shared/components/hooks/useWindowSize';
import { Loader } from '../../shared/components/loader/loading';
import { MainBanner } from '../../shared/components/mainBanner/mainBanner';

//Menus
import { MainMenu } from '../../shared/components/mainMenu/menu';
import { MobileMenu } from '../../shared/components/mobileMenu/mobileMenu';

//Redux
import { getHomePageInfo } from './redux/homeActions';

export function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const size = useWindowSize();

  const [loading, setLoading] = useState(false)
  
  const listHomePageInfo = useSelector((state:any) => state.HomeReducer?.listHomePageInfo);
  const listOfSeries = useSelector((state:any) => state.HomeReducer?.listOfSeries);
  const listOfTraining = useSelector((state:any) => state.HomeReducer?.listOfTraining);

  useEffect(() => {
    setLoading(true)
    dispatch(getHomePageInfo((res: any) => {
      setLoading(false)
      if(res !== 200){}
    }))
  },[])

  const handleSelectCard = (item: SelectProps | TrainingListProps) => {
    setLoading(true)
    navigate(`conteudo/${item.id}`)
  }

  return (
    <>
      <Loader open={loading}/>
      {size.width > 767 ? <MainMenu /> : <MobileMenu/>}
      <MainBanner
        isMobile={size.width < 767}
        image={  size.width > 767 ? 
          listHomePageInfo?.featured_image 
          : 
          listHomePageInfo?.featured_image_mobile 
        }
        height={size.width > 767 ? '479px' : '600px'}
        backgroundPosition='center'
      />
      <BpContainer marginLeft={size.width > 767 ? '61px' : '8px'}>
        <div style={size.width > 767 ?{marginTop:54} : {marginTop:33}} />
        <BpText>Séries</BpText>
        <div style={{marginTop:10}} />
        <BpCarrousel>
          {listOfSeries.map((item: SeriesListProps) => {
            return(
              <BpCarrouselContainer 
                backgroundImage={item?.image_url}
                onClick={() => handleSelectCard(item)}
              >
                <div/>
                <p>{item?.title}</p>
                <span>
                  {item?.launch_date} - {item?.episodes_counter} episódios - {item?.views} visualizações
                </span>
              </BpCarrouselContainer>
            )
          })}
        </BpCarrousel>
        <div style={{marginTop:40}} />
        <BpText>Núcleo de formação</BpText>
        <div style={{marginTop:10}} />
        <BpCarrousel>
          {listOfTraining.map((item: TrainingListProps) => {
            return(
              <BpCarrouselContainer 
                backgroundImage={item?.image_url}
                onClick={() => {handleSelectCard(item)}}
              >
                <div/>
                <p>{item?.title}</p>
                <span> {item?.teacher} </span>
              </BpCarrouselContainer>
            )
          })}
        </BpCarrousel>
        <div style={{marginTop:40}} />
      </BpContainer>
    </>
  );
}