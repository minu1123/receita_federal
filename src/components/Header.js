import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Header.css';
const Header = () => {
    return (_jsx("header", { className: "main-header", children: _jsxs("div", { className: "container", children: [_jsx("a", { href: "#inicio", children: _jsx("div", { className: "logo", children: "Enervape" }) }), _jsxs("nav", { className: "nav-links", children: [_jsx("a", { href: "#mission", children: "Miss\u00E3o" }), _jsx("a", { href: "#about", children: "Sobre" }), _jsx("a", { href: "#usecases", children: "Casos de uso" }), _jsx("a", { href: "#footer", children: "Enervape" })] }), _jsx("a", { href: "#contato", className: "header-button", children: "Fale Conosco" })] }) }));
};
export default Header;
