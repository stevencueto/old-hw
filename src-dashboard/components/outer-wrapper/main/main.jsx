import './main.css'
import Sections from './sections/Sections';
import LargerSection from './sections/LargerSection';


const Main = () => {
    return(
        <main className='inner-wrapper'>
            <Sections></Sections>
            <LargerSection></LargerSection>
        </main>
    )
}

export default Main;