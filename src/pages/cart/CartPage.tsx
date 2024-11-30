import { getAllProducts } from "../../features/shoppingCart/shoppingCartSlice";
import ProductCard from "./CartProduct/CartProduct";
import style from "./CartPage.module.css";
import { useAppSelector } from "../../hooks/reduxHooks";
import CartOrder from "./CartOrder/CartOrder";

const CartPage = () => {
	const products = useAppSelector(getAllProducts);

	return (
		<div className={style.page}>
			<div className={style.cartContainer}>
				{products.map((product, id) => (
					<ProductCard key={id} cardProduct={product} />
				))}
			</div>
			<CartOrder />
		</div>
	);
};

export default CartPage;
