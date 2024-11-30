import { toast, ToastOptions } from "react-toastify";
import Button from "../../../components/BuyButton/Button";
import {
	getCartItemsCount,
	getCartTotalPrice,
	removeAllProducts,
} from "../../../features/shoppingCart/shoppingCartSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { getPriceString } from "../../../utils/getPriceString";
import style from "./CartOrder.module.css";

const CartOrder = () => {
	const itemsCount = useAppSelector(getCartItemsCount);
	const totalPrice = useAppSelector(getCartTotalPrice);

	const dispatch = useAppDispatch();

	const onClick = () => {
		cleanCart();
		showBuyNotification();
	};

	const cleanCart = () => {
		dispatch(removeAllProducts());
	};

	const showBuyNotification = () => {
		const toastConfig: ToastOptions = {
			type: "success",
		};

		toast("Successful order", toastConfig);
	};

	return (
		<div className={style.order}>
			<div className={style.count}>Items: {itemsCount}</div>
			<div className={style.price}>
				Total price:
				<span> {getPriceString(totalPrice)}</span>
				<Button content="Buy" onClick={onClick} isDisabled={itemsCount == 0} />
			</div>
		</div>
	);
};

export default CartOrder;
