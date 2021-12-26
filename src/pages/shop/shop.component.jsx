import { Routes, Route, Outlet } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import CollectionPage from '../../pages/collection/collection.component';

const ShopPage = () => (
  <div>
    {/* <Routes>
      <Route path="/" element={<CollectionsOverview />} />
      <Route path="/:categoryId" element={<CategoryPage />} />
    </Routes> */}
    <Outlet />
  </div>
);

export default ShopPage;
