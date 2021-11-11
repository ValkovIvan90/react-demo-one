import Header from './components/Header';

import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';

import style from './App.module.css';

function App() {
    return (
        <div className={style.app}>
            <Header />
            <div className="style.container">
                <Menu />
                <Main />

            </div>
        </div>
    );
}

export default App;
