import { getAllProducts } from "../../features/shoppingCart/shoppingCartSlice";
import ProductCard from "./CartProduct/CartProduct";
import "./CartPage.css";
import { useAppSelector } from "../../hooks/reduxHooks";

const CartPage = () => {
	const products = useAppSelector(getAllProducts);

	return (
		<div className="cart-page">
			<h1>Cart</h1>
			<div className="cart-products">
				{products.map((product, id) => (
					<ProductCard key={id} cardProduct={product} />
				))}
			</div>
		</div>
	);
};

export default CartPage;
