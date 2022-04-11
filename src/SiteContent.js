import logo from './images/logo.png'
import hero1 from './images/hero-1.png'
import hero2 from './images/hero-2.png'
import hero3 from './images/hero-3.png'
import hero4 from './images/hero-4.png'
import product1 from './images/product-1.png'
import ProductCategoryWomens from './images/product-category-womens.png'
import ProductCategoryMens from './images/product-category-mens.png'
import ProductCategoryAccessories from './images/product-category-accessories.png'
import emailIcon from './images/icon-email.png'

const promoMessage = 'Free shipping on all orders over $75'

const brandLogo = logo

const heroSlides = [
	{
		title: 'Shop New Arrivals',
		subtitle: 'Our coolest new items are waiting for you!',
		image: hero1,
		theme: 'Dark',
		textBox: {
			top: 'calc(50% - 108px)',
			left: '133px'
		},
		index: 0
	},
	{
		title: 'Our Fave Tees',
		subtitle: 'Shop all of our favorites.',
		image: hero2,
		theme: 'Light',
		textBox: {
			top: 'calc(50% - 108px)',
			left: '133px'
		},
		index: 1
	},
	{
		title: "Men's Tees",
		subtitle: 'Find the perfect shirt.',
		image: hero3,
		theme: 'Light',
		textBox: {
			top: 'calc(50% - 108px)',
			left: '133px'
		},
		index: 2
	}
]

const heroStatic = [
	{
		title: 'Our Favorite Tees',
		subtitle: 'Everyday tees you need.',
		image: hero4,
		theme: 'Light',
		textBox: {
			top: '52px',
			right: '54px'
		},
		index: 0
	}
]

const storeCategories = [
	{
		title: "Women's",
		image: ProductCategoryWomens,
		link: '/womens'
	},
	{
		title: "Men's",
		image: ProductCategoryMens,
		link: '/mens'
	},
	{
		title: 'Accessories',
		image: ProductCategoryAccessories,
		link: '/accessories'
	}
]

const storeProducts = [
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: product1,
		price: '$19.99'
	},
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: product1,
		price: '$29.99'
	},
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: product1,
		price: '$39.99'
	},
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: product1,
		price: '$49.99'
	},
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: product1,
		price: '$59.99'
	},
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: product1,
		price: '$69.99'
	}
]

const signUpContent = {
	icon: emailIcon,
	title: 'Sign Up & Stay Connected',
	subtitle: 'Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!',
	callToAction: 'Enter Your Email Address',
	buttonText: 'Subscribe'
}

export {
	brandLogo,
	promoMessage,
	heroSlides,
	heroStatic,
	storeCategories,
	storeProducts,
	signUpContent
}