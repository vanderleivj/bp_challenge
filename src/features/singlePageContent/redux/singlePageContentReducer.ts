import {
  GET_SINGLE_CARD_INFO
} from './singlePageContentConstants';

const INITIAL_STATE = {
  listSingleCardInfo: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_SINGLE_CARD_INFO:
      var _listSingleCardInfo
      _listSingleCardInfo = action.data

      return {
        ...state,
        listSingleCardInfo: _listSingleCardInfo,
      }
  }

  return state;
};