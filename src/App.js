import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import About from './components/About';
import UseCases from './components/UseCases';
import Footer from './components/Footer';
// (mais tarde: About, HowItWorks, Testimonials, Footer...)
const App = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(Mission, {}), _jsx(About, {}), _jsx(UseCases, {}), _jsx(Footer, {})] }));
};
export default App;
