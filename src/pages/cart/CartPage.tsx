import { useSelector } from "react-redux";
import { getAllProducts } from "../../features/shoppingCart/shoppingCartSlice";
import ProductCard from "./CartProductCart/ProductCart";

const CartPage = () => {
	const products = useSelector(getAllProducts);

	return (
		<div className="cart-page">
			<h1>Cart</h1>
			{products.map((product, id) => (
				<ProductCard key={id} cardProduct={product} />
			))}
		</div>
	);
};

export default CartPage;
