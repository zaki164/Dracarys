import { AddToChart, RemoveChartItem, RemoveFavItem, AddToFav, IncreaseItem, DecreaseItem } from './type';

export const addItemtochart  = (product) => {
  return {
    type: AddToChart,
    payload: product
  }
}
export const deleteChartItem  = (product) => {
  return {
    type: RemoveChartItem,
    payload: product
  }
}
export const addItemtofav  = (product) => {
  return {
    type: AddToFav,
    payload: product
  }
}
export const deleteFavItem  = (product) => {
  return {
    type: RemoveFavItem,
    payload: product
  }
}
export const increaseItemQuantity  = (product) => {
  return {
    type: IncreaseItem,
    payload: product
  }
}
export const decreaseItemQuantity  = (product) => {
  return {
    type: DecreaseItem,
    payload: product
  }
}