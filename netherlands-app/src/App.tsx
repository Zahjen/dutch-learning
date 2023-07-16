import './content/view/style/global/global.css';
import './content/view/style/global/global-laptop.css';
import './content/view/style/global/global-mobile.css';
import NavBar from './content/view/component/nav-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './content/view/page/home-screen';
import ConjugationScreen from './content/view/page/conjugation';
import VocabularScreen from './content/view/page/vocabular';
import GrammarScreen from './content/view/page/grammar';
import { vocabularSectionProps, vocabularSections } from './content/text/vocabular';
import Category from './content/view/component/category';
import ContactScreen from './content/view/page/contact';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar/>
        <Routes>
          <Route path="/dutch-learning" element={ <HomeScreen/> } />
          <Route path="/conjugaison" element={ <ConjugationScreen/> } />
          <Route path="/vocabulaire" element={ <VocabularScreen/> } />
          <Route path="/grammaire" element={ <GrammarScreen/> } />
          <Route path="/contact" element={ <ContactScreen/> } />
          {
            vocabularSections.map((section: vocabularSectionProps) => {
              return <Route key={section.id} path={"/vocabular/" + section.id} element={ <Category section = { section }/> } />
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
