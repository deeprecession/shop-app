import { FormEvent } from "react";
import { setToFilterLiked } from "../../features/productList/productsListSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import "./LikeFilter.css";

const LikeFilterCheckbox = () => {
	const dispatch = useAppDispatch();

	const onChange = (e: FormEvent<HTMLInputElement>) => {
		const formValue = e.currentTarget.checked;
		dispatch(setToFilterLiked(formValue));
	};

	return (
		<div className="like-filter-container">
			<input
				id="likeFilter"
				onChange={onChange}
				name="likeFilter"
				type="checkbox"
			/>
			<label htmlFor="likeFilter">Show only liked items</label>
		</div>
	);
};

export default LikeFilterCheckbox;
