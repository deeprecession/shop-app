import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import "./CatalogPage.css";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import LikeFilterCheckbox from "./components/LikeFilter/LikeFilter";
import PaginatedProductList from "./components/PaginationController/PaginationController";
import { fetchProductsThunk } from "../../features/catalog/catalogSlice";
import { Link } from "react-router-dom";

const CatalogPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <div className="product-list-page">
      <Link to="/cart">
        <h2>Cart</h2>
      </Link>

      <div className="filter-panel">
        <SearchBar />
        <CategoryFilter />
        <LikeFilterCheckbox />
      </div>

      <PaginatedProductList itemsPerPage={15} />
    </div>
  );
};

export default CatalogPage;
