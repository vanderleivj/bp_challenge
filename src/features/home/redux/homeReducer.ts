import {
  GET_HOME_PAGE_INFO,
} from './homeConstants';

const INITIAL_STATE = {
  listHomePageInfo: [],
  listOfSeries: [],
  listOfTraining: [],
  listSingleCardInfo: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_HOME_PAGE_INFO:
      var _listHomePageInfo
      var _listOfSeries
      var _listOfTraining

      _listHomePageInfo = action.data
      _listOfSeries = action.data.series
      _listOfTraining = action.data.training

      return {
        ...state,
        listHomePageInfo: _listHomePageInfo,
        listOfSeries: _listOfSeries,
        listOfTraining: _listOfTraining
      }
  }

  return state;
};