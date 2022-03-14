import { apiRequest } from '../../../core/services/api';
import { 
  GET_SINGLE_CARD_INFO
} from './singlePageContentConstants';

const getSingleCardEnd = (dispatch:any, data:any) => {
  dispatch({type: GET_SINGLE_CARD_INFO, data})
};

export const getSingleCard = (id:string,callback: any) => {
	return (dispatch:any) => {
    apiRequest.get(`/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((responseJson:any) => {
      getSingleCardEnd(dispatch,responseJson?.data)
      callback(responseJson.status)
    })
    .catch((err: any) => {
      callback(err.response);
    });
	};
};