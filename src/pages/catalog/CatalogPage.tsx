import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { fetchProductsThunk } from "../../features/productList/productsListSlice";
import "./CatalogPage.css";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import LikeFilterCheckbox from "./components/LikeFilter/LikeFilter";
import PaginatedProductList from "./components/PaginationController/PaginationController";

const Catalog = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <div className="product-list-page">
      <div className="filter-panel">
        <SearchBar />
        <CategoryFilter />
        <LikeFilterCheckbox />
      </div>

      <PaginatedProductList itemsPerPage={15} />
    </div>
  );
};

export default Catalog;
