import { FormEvent } from "react";
import { setToFilterLiked } from "../../features/productList/productsListSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

const LikeFilterCheckbox = () => {
	const dispatch = useAppDispatch();

	const onChange = (e: FormEvent<HTMLInputElement>) => {
		const formValue = e.currentTarget.checked;
		dispatch(setToFilterLiked(formValue));
	};

	return (
		<div>
			<input onChange={onChange} name="likeFilter" type="checkbox" />
			<label htmlFor="likeFilter">onlyLiked</label>
		</div>
	);
};

export default LikeFilterCheckbox;
