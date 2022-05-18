
import BottomNavigator from "./components/bottom-navigator";
import Header from "./components/header";
import { useTheme } from "./provider/LightDark";
import {Routes} from "./routes";
import { GlobalStyle } from "./styles/globalStyle";
import {reverseTheme,normalTheme} from './styles/themes'
import {Toaster} from 'react-hot-toast'
import { BrowserRouter } from "react-router-dom";

function App() {
  const {lightTheme} = useTheme()

  return (
    <BrowserRouter>
      <GlobalStyle theme={lightTheme ? normalTheme : reverseTheme} />
      <Header />
      <Toaster/>
      <Routes />
      <BottomNavigator />
    </BrowserRouter>
  );
}

export default App;
