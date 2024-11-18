import { ProductData } from "../../pages/product/ProductData";
import catchError from "../../utils/catchError";

type FakeJsonResponse = {
	products: ProductData[];
};

const fetchProducts = async (): Promise<ProductData[]> => {
	const res = await fetch(`https://dummyjson.com/products?limit=0`);

	if (!res.ok) {
		throw new Response("Product not found", { status: 404 });
	}

	const [err, jsonResopnse] = await catchError<FakeJsonResponse>(res.json());
	if (err) {
		console.error(err);
		throw new Response("Product not found", { status: 404 });
	}

	return jsonResopnse.products;
};

export default fetchProducts;
