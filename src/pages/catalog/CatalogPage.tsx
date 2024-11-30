import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import style from "./CatalogPage.module.css";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import LikeFilterCheckbox from "./components/LikeFilter/LikeFilter";
import PaginatedProductList from "./components/PaginationController/PaginationController";
import { fetchProductsThunk } from "../../features/catalog/catalogSlice";

const CatalogPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <div className={style.page}>
      <div className={style.filterPanel}>
        <div className={style.searchBar}>
          <SearchBar />
        </div>

        <div className={style.selectCategory}>
          <CategoryFilter />
        </div>

        <div className={style.likeFilter}>
          <LikeFilterCheckbox />
        </div>
      </div>

      <PaginatedProductList itemsPerPage={15} />
    </div>
  );
};

export default CatalogPage;
