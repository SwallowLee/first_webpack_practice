import React from 'react'
import { withRouter,Link } from 'react-router-dom'
import style from '../Scss/NavBar.scss'

const NavItem = withRouter((props) => (
	<Link to={props.archor}>
		<div className={`navItem ml-5 ${props.location.pathname===props.archor? 'active': 'nonactive'}`}>
			{props.name}
		</div>
	</Link>
))

class NavBar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
  			<span className='navbar-brand head ml-2'>Shoptime</span>
  			<NavItem name='HOME' archor='/'/>
  			<NavItem name='ORDERS' archor='/orders'/>
  			<NavItem name='PRODUCTS' archor='/product'/>
  			<span className='admin'>ADMIN</span>
			</nav>
		)
	}
}

export default NavBar;