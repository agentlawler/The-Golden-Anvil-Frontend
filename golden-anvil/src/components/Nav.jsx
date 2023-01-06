import { Container, Navbar as NavbarGa } from 'react-bootstrap'
import { useNavigate, NavLink } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()

    return (
        
                <nav>
                  <ul className='navbar-links'>
                    <li><NavLink to="/additem" >Create Item</NavLink></li>
                    <li><NavLink to="/items" >Item Page</NavLink></li>
                    <li><NavLink to="/register" >Register</NavLink></li>
                    <li><NavLink to='/login'>Log In</NavLink></li>
                    {/* <li><NavLink to="/logout" >Logout</NavLink></li> */}
                    <li><NavLink onClick={(() => navigate(-1))}>Back</NavLink></li>
                  </ul>
                </nav>
        
    )

}
export default Nav



   
