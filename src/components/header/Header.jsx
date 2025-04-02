import { NavLink } from 'react-router-dom'
import './Header.css'

function Header () {
    return (
        <header className="container">
            <div className='logo'>
                <img src="https://wallpapers.com/images/hd/macos-big-sur-1920-x-1920-background-b79vr3wrjof3nscd.jpg"/>
            </div>
            <nav className='navigation'>
                <ul>
                    <NavLink className={({isActive}) => isActive ? "active" : ""} to={'/'}>Home</NavLink>
                    <NavLink to={'/produto'}>Produtos</NavLink>
                    {/*<NavLink to={'/addProduto'}>Cadastrar Produto</NavLink>*/}
                    <NavLink to={'/sobre'}>Sobre</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header