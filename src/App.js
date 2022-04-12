import './App.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PromoBar from './components/PromoBar/PromoBar.js'
import NavBar from './components/NavBar/NavBar.js'
import CarouselSlider from './components/CarouselSlider/CarouselSlider.js'
import HeroSection from './components/HeroSection/HeroSection.js'
import ProductCategories from './components/ProductCategories/ProductCategories.js'
import ProductSlider from './components/ProductSlider/ProductSlider.js'
import SignUp from './components/SignUp/SignUp.js'
import FooterMenu from './components/FooterMenu/FooterMenu.js'
import { brandLogo, promoMessage, heroSlides, heroStatic, storeCategories, storeProducts, signUpContent } from './assets/SiteContent.js'
import { customerServiceNav, companyNav, socialNav } from './assets/SiteMap.js'

const App = () => (
  <div className='App'>
    <div className='Menu'>
      <PromoBar Message={promoMessage} />
      <NavBar Logo={brandLogo} />
    </div>
    <div className='Body'>
      <CarouselSlider Template='Hero' Nav='Dots' Slides={heroSlides} />
      <ProductCategories Categories={storeCategories} />
      <CarouselSlider Template='Product' Nav='Arrows' Slides={storeProducts} />
      <HeroSection Slides={heroStatic} />
      <SignUp Content={signUpContent}/>
      <FooterMenu Primary={customerServiceNav} Secondary={companyNav} Social={socialNav} />
    </div>
  </div>
)

export default App