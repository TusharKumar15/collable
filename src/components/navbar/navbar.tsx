import {AppNavBar} from 'baseui/app-nav-bar'
import { useRouter } from 'next/router'

const navItems = [
  {label: 'Articles', info: {route: '/articles'}},
  {label: 'Projects', info: {route: '/projects'}},
  {label: 'Job description',  info: {route: '/job-description'}},
  {label: 'Competetion', info: {route: '/competetion'}},
  {label: 'Community', info: {route: '/community'}}
]

const Navbar = () => {

  const router = useRouter()

  return (
    <AppNavBar mainItems={navItems} onMainItemSelect={(item) => router.push('/'+item.info.route)}/>
  )
}

export default Navbar;
