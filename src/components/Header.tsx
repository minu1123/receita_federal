<header className="main-header">
  <div className="container">
    <div className="header-left">
      <a href="#inicio" className="logo">Enervape</a>
    </div>

    {/* ✅ menu-toggle fora da header-center */}
    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="menu-icon">☰</label>

    <div className="header-center">
      <nav className="nav-links">
        <a href="#mission">Missão</a>
        <a href="#about">Sobre</a>
        <a href="#usecases">Casos de uso</a>
        <a href="#footer">Enervape</a>
      </nav>
    </div>

    <div className="header-right">
      <a href="#contato" className="header-button">Fale Conosco</a>
    </div>
  </div>
</header>
