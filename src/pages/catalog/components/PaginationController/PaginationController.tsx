import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "./PaginationController.module.css";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { ProductList } from "../ProductList/ProductList";
import { selectFilteredProducts } from "../../../../features/catalog/catalogSlice";

type PaginationControlsProps = {
  itemsPerPage: number;
};

const PaginatedProductList = ({ itemsPerPage }: PaginationControlsProps) => {
  const [itemOffset, setItemOffset] = useState(0);
  const productItems = useAppSelector(selectFilteredProducts);

  useEffect(() => {
    setItemOffset(0);
  }, [productItems]);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = productItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productItems.length / itemsPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % productItems.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={styles.paginatedProductList}>
      <ProductList products={currentItems} />

      <ReactPaginate
        className={styles.paginationControl}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        pageClassName={styles.pageItem}
        pageLinkClassName={styles.pageLink}
        previousClassName={styles.pageItem}
        previousLinkClassName={styles.pageLink}
        nextClassName={styles.pageItem}
        nextLinkClassName={styles.pageLink}
        breakClassName={styles.pageItem}
        breakLinkClassName={styles.pageLink}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
      />
    </div>
  );
};

export default PaginatedProductList;
