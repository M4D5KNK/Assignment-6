import FooterSection from '../views/components/FooterSection.jsx'
import HeaderSection from '../views/components/HeaderSection.jsx'
import HeroSection from '../views/components/HeroSection.jsx'

function HomeView() {

    return (

        <div>
            <div>
                <HeaderSection />
            </div>
            <div>
                <HeroSection />
            </div>
            <div>
                <FooterSection />
            </div>
        </div>
    )
}

export default HomeView