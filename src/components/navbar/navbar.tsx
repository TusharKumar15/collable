import {AppNavBar} from 'baseui/app-nav-bar'

const navItems = [
  {label: 'Articles'},
  {label: 'Projects'},
  {label: 'Job description'},
  {label: 'Competetion'},
  {label: 'Community'}
]

const Navbar = () => {
  return (
    <AppNavBar mainItems={navItems}/>
  )
}

export default Navbar;
