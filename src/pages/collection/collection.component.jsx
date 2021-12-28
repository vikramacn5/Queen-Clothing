// import CollectionItem from '../../components/collection-item/collection-item.component';

import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import { useParams } from 'react-router-dom';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const collectionUrlParam = useParams().collectionId;
  const { title, items } = collection(collectionUrlParam);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collection: (collectionUrlParam) =>
    selectCollection(collectionUrlParam)(state, collectionUrlParam),
}); // collectionUrlParam should be passed along with state if we are not using the memoize way of createSelector

export default connect(mapStateToProps)(CollectionPage);
