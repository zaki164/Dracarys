import { AddToChart, RemoveChartItem, RemoveFavItem, AddToFav, IncreaseItem, DecreaseItem } from './action/type';

let initialState = {
  chart: [],
  fav: [],
}

const handlechart = (state = initialState, action) => {
  let product = action.payload;
  switch (action.type) {
    case AddToFav:
      let currentFavItem = state.fav.find(ele => ele.id === product.id);
      if (currentFavItem) {
        return state
      } else {
        return { ...state, fav: [...state.fav, product] }
      }
    case RemoveFavItem:
      let deletedItem = state.fav.find(ele => ele.id === product.id);
      if (deletedItem) {
        return { ...state, fav: state.fav.filter(ele => ele !== deletedItem) }
      } else {
        return state;
      }
    case AddToChart:
      let currentChartItem = state.chart.find(ele => ele.id === product.id);
      if (currentChartItem) {
        return state
      } else {
        return { ...state, chart: [...state.chart, product] }
      }
    case RemoveChartItem:
      let deletedChartItem = state.chart.find(ele => ele.id === product.id);
      if (deletedChartItem) {
        return { ...state, chart: state.chart.filter(ele => ele !== deletedChartItem) }
      } else {
        return state;
      }
      case IncreaseItem:
        return {...state, chart: state.chart.map(li => li.id === product.id ? {...li, num: li.num + 1} : li) }
      case DecreaseItem:
        return {...state, chart: state.chart.map(li => li.id === product.id ? {...li, num: li.num - 1} : li) }
    default:
      return state
  }
}

export default handlechart