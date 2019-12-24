import { combineReducers } from 'redux';
import home from './home'
import category from './category'

const productReducers = combineReducers({
  home,
  category
})

export default productReducers