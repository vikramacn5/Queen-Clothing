import { createSelector } from 'reselect';

import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

/*
const collectionUrlParamFind = (state, collectionUrlParam) =>
  collectionUrlParam;

const selectionCollectionSelectorFunction = createSelector(
  [selectShopCollections, collectionUrlParamFind],
  (collections, collectionUrlParam) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
);

export const selectCollection = (collectionUrlParam) =>
  selectionCollectionSelectorFunction;

*/

/*
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) => {
    console.log('rendering from selectors - selectCollections');
    return collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP['hats']
    );
  });
*/

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )
);
