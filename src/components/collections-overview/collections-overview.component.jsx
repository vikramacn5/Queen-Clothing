import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectShopCollections } from '../../redux/shop/shop.selectors';

import { createStructuredSelector } from 'reselect';

import './collections-overview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {Object.values(collections).map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
