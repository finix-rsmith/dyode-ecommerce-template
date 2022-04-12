import Images from './images/images-import-map.js'
import Icons from './images/icons-import-map.js'

const promoMessage = 'Free shipping on all orders over $75'

const brandLogo = Images.logo

const heroSlides = [
	{
		title: 'Shop New Arrivals',
		subtitle: 'Our coolest new items are waiting for you!',
		image: Images.hero1,
		theme: 'Dark',
		textBox: {
			top: 'calc(50% - 108px)',
			left: '133px'
		}
	},
	{
		title: 'Our Fave Tees',
		subtitle: 'Shop all of our favorites.',
		image: Images.hero2,
		theme: 'Light',
		textBox: {
			top: 'calc(50% - 108px)',
			left: '133px'
		}
	},
	{
		title: "Men's Tees",
		subtitle: 'Find the perfect shirt.',
		image: Images.hero3,
		theme: 'Light',
		textBox: {
			top: 'calc(50% - 108px)',
			left: '133px'
		}
	}
]

const heroStatic = [
	{
		title: 'Our Favorite Tees',
		subtitle: 'Everyday tees you need.',
		image: Images.hero4,
		theme: 'Light',
		textBox: {
			top: '52px',
			right: '54px'
		}
	}
]

const storeCategories = [
	{
		title: "Women's",
		image: Images.ProductCategoryWomens,
		link: '/womens'
	},
	{
		title: "Men's",
		image: Images.ProductCategoryMens,
		link: '/mens'
	},
	{
		title: 'Accessories',
		image: Images.ProductCategoryAccessories,
		link: '/accessories'
	}
]

const storeProducts = [
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: Images.product1,
		price: '$19.99'
	},
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: Images.product1,
		price: '$29.99'
	},
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: Images.product1,
		price: '$39.99'
	},
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: Images.product1,
		price: '$49.99'
	},
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: Images.product1,
		price: '$59.99'
	},
	{
		title: 'Product Title',
		subtitle: "Women's T-Shirt",
		image: Images.product1,
		price: '$69.99'
	}
]

const signUpContent = {
	icon: Icons.Email,
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