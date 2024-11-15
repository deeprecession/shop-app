import PaginatedProductList from "./PaginatedProductList";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../../utils/LoaderData";
import { productListLoader } from "./productListLoader";
import { ProductData } from "../product/ProductData";
import { useState } from "react";
import SearchBar from "./SearchBar";

const ProductListPage = () => {
  const loadedData = useLoaderData() as LoaderData<typeof productListLoader>;

  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>(
    loadedData.products,
  );

  const searchUpdateHandler = (foundProducts: ProductData[]) => {
    setFilteredProducts(foundProducts);
  };

  return (
    <div className="product-list-page">
      <SearchBar
        products={loadedData.products}
        updateHandler={searchUpdateHandler}
      />
      <PaginatedProductList itemsPerPage={15} productItems={filteredProducts} />
    </div>
  );
};

export default ProductListPage;
