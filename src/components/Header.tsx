import '../styles/header.css'

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header-title"><h1>Global food</h1></div>
        <div className="burger">
          <img src="/global-food/images/burger-menu.png" alt=""/>
        </div>
        <div className="header-logo">
          <img className="log" src="/global-food/images/logo.png" alt="LOGO"/>
        </div>
      </header>
    </>
  )
}