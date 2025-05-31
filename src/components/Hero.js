import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Hero.css';
import vapeImg from '../assets/vape.png'; // ajuste para o nome real do arquivo
const Hero = () => {
    return (_jsx("section", { className: "hero-modern", id: "inicio", children: _jsxs("div", { className: "hero-container", children: [_jsxs("div", { className: "hero-text", children: [_jsx("h1", { children: "Transformando Vapes em Energia Sustent\u00E1vel" }), _jsx("p", { children: "Uma solu\u00E7\u00E3o ecol\u00F3gica e inovadora que reutiliza dispositivos eletr\u00F4nicos descart\u00E1veis como carregadores solares de emerg\u00EAncia." }), _jsx("a", { href: "#mission", className: "hero-cta", children: "Ver Miss\u00E3o" })] }), _jsx("div", { className: "hero-image", children: _jsx("img", { src: vapeImg, alt: "Vape roxo transformado em carregador solar" }) })] }) }));
};
export default Hero;
