// import CollectionItem from '../../components/collection-item/collection-item.component';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import { useParams } from 'react-router-dom';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const collectionUrlParam = useParams().collectionId;
  console.log(collection(collectionUrlParam));
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
      {collection(collectionUrlParam).items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collection: (collectionUrlParam) =>
    selectCollection(collectionUrlParam)(state, collectionUrlParam),
});

export default connect(mapStateToProps)(CollectionPage);
