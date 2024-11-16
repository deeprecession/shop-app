import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ProductList } from "./ProductList";
import "./PaginationConroller.css";
import { useAppSelector } from "../../hooks/reduxHooks";
import { selectFilteredProducts } from "../../features/productList/productsListSlice";

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
		<div className="paginated-product-list">
			<ProductList products={currentItems} />

			<ReactPaginate
				className="pagination-control"
				breakLabel="..."
				nextLabel=">"
				previousLabel="<"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				renderOnZeroPageCount={null}
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakClassName="page-item"
				breakLinkClassName="page-link"
				containerClassName="pagination"
				activeClassName="active"
			/>
		</div>
	);
};

export default PaginatedProductList;
