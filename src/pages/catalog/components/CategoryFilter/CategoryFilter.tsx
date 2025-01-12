import { FormEvent } from "react";
import style from "./CategoryFilter.module.css";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { ProductData } from "../../../product/ProductData";
import {
  selectAllProducts,
  setToFilterByCategory,
} from "../../../../features/catalog/catalogSlice";

const CategoryFilter = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(selectAllProducts);

  const categories: string[] = getCategoriesFromProducts(products);

  const onChange = (e: FormEvent<HTMLSelectElement>) => {
    const category = e.currentTarget.value;

    dispatch(setToFilterByCategory(category));
  };

  return (
    <div className={style.container}>
      <label htmlFor="categoryFilter">Category</label>
      <select id="categoryFilter" onChange={onChange} defaultValue="">
        <option value="">none</option>
        {categories.map((categoryName, inx) => (
          <option key={inx} value={categoryName}>
            {categoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

const getCategoriesFromProducts = (products: ProductData[]): string[] => {
  const uniqueCategories = new Set<string>();

  products.map((product) => {
    uniqueCategories.add(product.category);
  });

  return Array.from(uniqueCategories.values());
};

export default CategoryFilter;
