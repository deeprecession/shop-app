import {
	getCartItemsCount,
	getCartTotalPrice,
} from "../../../features/shoppingCart/shoppingCartSlice";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { getPriceString } from "../../../utils/getPriceString";
import "./CartOrder.css";

const CartOrder = () => {
	const itemsCount = useAppSelector(getCartItemsCount);
	const totalPrice = useAppSelector(getCartTotalPrice);

	return (
		<div className="cart-order">
			<div className="cart-order__count">Items: {itemsCount}</div>
			<div className="cart-order__total-price">
				Total price:
				<span> {getPriceString(totalPrice)}</span>
			</div>
		</div>
	);
};

export default CartOrder;
