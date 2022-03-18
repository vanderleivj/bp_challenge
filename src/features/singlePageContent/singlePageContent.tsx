import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

//Interface
import { SelectProps, SeriesListProps } from '../home/homeInterface';

//Local imports
import { BpButton } from '../../shared/components/bpButton/bpButton';
import { BpCarrousel, BpCarrouselContainer } from '../../shared/components/bpCarrousel/bpCarrousel';
import { BpContainer } from '../../shared/components/bpContainer/bpContainer';
import { BpText } from '../../shared/components/bpText/bpText';
import { useWindowSize } from '../../shared/components/hooks/useWindowSize';
import { Loader } from '../../shared/components/loader/loading';
import { MainBanner } from '../../shared/components/mainBanner/mainBanner';

//Mobile
import { MainMenu } from '../../shared/components/mainMenu/menu';
import { MobileMenu } from '../../shared/components/mobileMenu/mobileMenu';

//Redux
import { getSingleCard } from './redux/singlePageContentActions';
import { getHomePageInfo } from '../home/redux/homeActions';

//Css
import './singlePageContent.css'
import { 
  ContainerInfos, 
  MainBannerEffect,Text 
} from './singlePageContentStyle';


export function SinglePageContent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const size = useWindowSize();
  const params = useParams();
  
  const [loading, setLoading] = useState(false)
  const [newSeriesList, setNewSeriesList]: any = useState([])
  const [modalVideoOpen, setModalVideoOpen] = useState(false)
  const [videoLink, setVideoLink] = useState('')
  
  const listSingleCardInfo = useSelector((state:any) => state.SinglePageReducer?.listSingleCardInfo);

  useEffect(() => {
    setLoading(true)
    const contentId: any = params.id
    dispatch(getSingleCard(contentId,() => {
      setLoading(false)
    }))

    dispatch(getHomePageInfo((res: any) => {
      setLoading(false)
      if(res?.status === 200){
        let mergeList = []
        let seriesList = res.data?.series;
        let trainingList = res.data?.training;
        mergeList = seriesList.concat(trainingList)

        const list: SelectProps = mergeList.sort(() => Math.random() - 0.5)
        setNewSeriesList(list)
      }
    }))
  },[params.id])

  const handleOpenLink = (link: string) => {
    let splitLink = link.split('=')
    setVideoLink(splitLink[1])
    setModalVideoOpen(true)
  }

  const handleSelectCard = (item: SelectProps) => {
    navigate(`${item.id}`)
  }

  return (
    <>
      <Loader open={loading}/>
      <Modal 
        open={modalVideoOpen} 
        onClose={() => setModalVideoOpen(false)}
        center
        classNames={{
          modal: 'customModal',
        }}
      >
        <iframe
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${videoLink}`}
          title={listSingleCardInfo?.tittle}
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </Modal>
      {size.width > 767 ? <MainMenu /> : <MobileMenu/>}
      <MainBanner 
        image={listSingleCardInfo?.image_url}
        height='479px'
        backgroundPosition={size.width > 767 ? '0px 50px' : '50% 0px'}
      />
      <MainBannerEffect />
      <BpContainer 
        marginLeft={size.width > 767 ? '61px' : '8px'}
        marginRight={size.width > 767 ? '61px' : '8px'}
      >
        <BpText fontSize='39px'>{listSingleCardInfo?.title}</BpText>
        <ContainerInfos>
          {listSingleCardInfo?.tags.map((item: any) => {
            return (
              <div> {item} </div>
            )
          })}
        </ContainerInfos>
        <BpButton onClick={() => handleOpenLink(listSingleCardInfo?.link)}>Assista Agora</BpButton>
        <Text>
          {listSingleCardInfo?.description}
        </Text>
        <BpText fontSize='20px'>Veja também</BpText>
        <div style={{marginTop:10}} />
        <BpCarrousel>
          {newSeriesList.map((item: SeriesListProps,index:number) => {
            return(
              index < 5 ? 
              <BpCarrouselContainer 
                backgroundImage={item?.image_url}
                onClick={() => {handleSelectCard(item)}}
              >
                <div/>
                <p>{item?.title}</p>
                {item?.launch_date ?
                  <span>
                    {item?.launch_date} - {item?.episodes_counter} episódios - {item?.views} visualizações
                  </span> :
                  <span></span>
                }
              </BpCarrouselContainer>
              : ''
            )
          })}
        </BpCarrousel>
        <div style={{marginTop:size.width > 767 ? '16px' : '100px'}}/>
      </BpContainer>
    </>
  );
}