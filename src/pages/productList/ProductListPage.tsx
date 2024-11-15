import PaginatedProductList from "./PaginatedProductList";
import { useLoaderData } from "react-router-dom";
import { LoaderData } from "../../utils/LoaderData";
import { productListLoader } from "./productListLoader";
import { ProductData } from "../product/ProductData";
import { FormEventHandler, useState } from "react";
import debounce from "../../utils/debounce";

const ProductListPage = () => {
  const loadedData = useLoaderData() as LoaderData<typeof productListLoader>;

  const [filteredProducts, setFilteredProducts] = useState<ProductData[]>(
    loadedData.products,
  );

  const searchUpdateHandler = (foundProducts: ProductData[]) => {
    setFilteredProducts(foundProducts);
  };

  return (
    <div>
      <SearchBar
        products={loadedData.products}
        updateHandler={searchUpdateHandler}
      />
      <PaginatedProductList itemsPerPage={15} productItems={filteredProducts} />
    </div>
  );
};

type SearchBarProps = {
  products: ProductData[];
  updateHandler: (foundProducts: ProductData[]) => void;
};

const SearchBar = ({ products, updateHandler }: SearchBarProps) => {
  const filterProductsPredicate = (
    query: string,
    product: ProductData,
  ): boolean => {
    const productTitle = product.title.toLowerCase();
    return productTitle.includes(query);
  };

  const inputHandler = (input: string) => {
    const query = input.toLowerCase();

    if (query === "") {
      updateHandler(products);
      return;
    }

    const filteredProducts = products.filter((product) => {
      return filterProductsPredicate(query, product);
    });

    updateHandler(filteredProducts);
  };

  const debouncedInputHandler = debounce(inputHandler, 300);

  const onInput: FormEventHandler<HTMLInputElement> = (event) => {
    const inputVal = event.currentTarget.value;

    debouncedInputHandler(inputVal);
  };

  return <input onInput={onInput} aria-label="Search products" />;
};

export default ProductListPage;
