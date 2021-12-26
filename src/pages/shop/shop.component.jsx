import { Routes, Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import CategoryPage from '../../pages/category/category.component';

const ShopPage = () => (
  <div>
    <Routes>
      <Route path="/" element={<CollectionsOverview />} />
      <Route path="/:categoryId" element={<CategoryPage />} />
    </Routes>
  </div>
);

export default ShopPage;
