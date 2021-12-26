import CollectionItem from '../../components/collection-item/collection-item.component';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import { useParams } from 'react-router-dom';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  const params = useParams();
  console.log(collection(params.collectionId));
  return (
    <div className="collection-page">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state) => ({
  collection: (params) => selectCollection(params)(state),
});

export default connect(mapStateToProps)(CollectionPage);
