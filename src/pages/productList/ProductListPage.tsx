import { useEffect } from "react";
import PaginatedProductList from "./PaginatedProductList";
import SearchBar from "./SearchBar";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { fetchProductsThunk } from "../../features/productList/productsListSlice";
import LikeFilterCheckbox from "./LikeFilter";
import CategoryFilter from "./CategoryFilter";

const ProductListPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <div className="product-list-page">
      <SearchBar />
      <LikeFilterCheckbox />
      <CategoryFilter />
      <PaginatedProductList itemsPerPage={15} />
    </div>
  );
};

export default ProductListPage;
