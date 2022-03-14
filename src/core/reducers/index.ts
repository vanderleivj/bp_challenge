import { combineReducers } from 'redux';
import HomeReducer from '../../features/home/redux/homeReducer';
import SinglePageReducer from '../../features/singlePageContent/redux/singlePageContentReducer'

export default combineReducers({ 
  HomeReducer: HomeReducer,
  SinglePageReducer: SinglePageReducer
});