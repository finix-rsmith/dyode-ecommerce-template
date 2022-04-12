import Icons from './images/icons-import-map.js'

const mainNav = [
	{
		title: "Men's",
		link: '/mens'
	},
	{
		title: "Women's",
		link: '/womens'
	},
	{
		title: "Accessories",
		link: '/accessories'
	},
	{
		title: "Sale!",
		link: '/sale'
	}
]

const navUtilities = [
	{
		title: 'Search',
		link: '/search',
		icon: Icons.Search
	},
	{
		title: 'Profile',
		link: '/profile',
		icon: Icons.Profile
	},
	{
		title: 'Cart',
		link: '/cart',
		icon: Icons.Cart
	}
]

const customerServiceNav = [
	{
		title: 'Accessibility',
		link: '/accessibility'
	},
	{
		title: 'Contact Us',
		link: '/contact'
	},
	{
		title: 'Return Policy',
		link: '/returns'
	},
	{
		title: 'FAQ',
		link: '/faq'
	},
	{
		title: 'Gift Certificates',
		link: '/gifts'
	},
	{
		title: 'Wishlist',
		link: '/wishlist'
	}
]

const companyNav = [
	{
		title: 'About Us',
		link: '/about'
	},
	{
		title: 'Careers',
		link: '/careers'
	},
	{
		title: 'Press',
		link: '/press'
	},
	{
		title: 'Affiliates',
		link: '/affiliates'
	}
]

const socialNav = [
	{
		title: 'Facebook',
		icon: Icons.Facebook,
		link: 'https://www.facebook.com'
	},
	{
		title: 'Instagram',
		icon: Icons.Instagram,
		link: 'https://www.instagram.com'
	}
]

export { mainNav, Icons, navUtilities, customerServiceNav, companyNav, socialNav }