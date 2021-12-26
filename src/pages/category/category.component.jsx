import CollectionItem from '../../components/collection-item/collection-item.component';

import { useParams } from 'react-router-dom';

import './category.styles.scss';

const CategoryPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

export default CategoryPage;
