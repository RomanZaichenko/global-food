import '../styles/header.css'

export function Header() {
  return (
    <>
      <header className="header">
        <div className="header-title"><h1>Global food</h1></div>
        <div className="header-logo">
          <img className="log" src="src/images/logo.png" alt="LOGO"/>
        </div>
      </header>
    </>
  )
}