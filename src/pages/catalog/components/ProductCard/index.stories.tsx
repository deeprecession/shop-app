import { ComponentProps } from "react";
import { Provider } from "react-redux";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import ProductCard from "./ProductCard";
import { store } from "../../../../store";
import { fn } from "@storybook/test";

type StoryProps = ComponentProps<typeof ProductCard>;

const meta: Meta<StoryProps> = {
	component: ProductCard,
	decorators: [
		(Story) => (
			<Provider store={store}>
				<BrowserRouter>
					<Story />
				</BrowserRouter>
			</Provider>
		),
	],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
	args: {
		product: {
			id: 1,
			category: "category",
			description: "description",
			isLiked: true,
			price: 123.12,
			rating: 3.1,
			title: "title",
			images: [
				"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
			],
		},
		addToCartHandler: fn(),
		toggleLikeHandler: fn(),
	},
};
