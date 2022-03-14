import { apiRequest } from '../../../core/services/api';
import { 
  GET_HOME_PAGE_INFO,
} from './homeConstants';

const getHomePageInfoEnd = (dispatch:any, data:any) => {
  dispatch({type: GET_HOME_PAGE_INFO, data})
};

export const getHomePageInfo = (callback: any) => {
	return (dispatch:any) => {
    apiRequest.get('/ec0b8704-9d4c-4806-8cf5-2fec2f4f0cdd', {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((responseJson:any) => {
      getHomePageInfoEnd(dispatch,responseJson?.data)
      callback(responseJson)
    })
    .catch((err: any) => {
      callback(err.response);
    });
	};
};