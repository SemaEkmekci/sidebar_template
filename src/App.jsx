
import Sidebar from './components/Sidebar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProgramingLanguage from './components/ProgramingLanguage';
import  Python from './images/python.webp';
import { responsive } from './data/data';
import { languageData } from './data/data';

function App() {

 const programingLanguage = languageData.map((item,index) => (
  <ProgramingLanguage
    key={index} 
    img={item.img}
    language={item.language}
    description={item.description}
  />
 ));
  
  return (
    <div className='App'>
      {/* <div className='container'>
        <div className='columns'>
          <div className='column'>
              <MyProjects image = {Python} projectName="Python"/>
          </div>
        </div>
      </div> */}
      <Sidebar/>
      <Carousel responsive={responsive}>{programingLanguage}</Carousel>

    </div>



  )
}

export default App
