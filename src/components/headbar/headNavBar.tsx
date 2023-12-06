import { ALIGN, HeaderNavigation } from 'baseui/header-navigation';
import { NavigationItem, NavigationList } from 'baseui/header-navigation/styled-components';
import { FaThList } from "react-icons/fa";
import { Button } from 'baseui/button';
import { StatefulPopover } from "baseui/popover";
import { StatefulSelect as Search, TYPE } from 'baseui/select';
import { GoBellFill } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { ListItem, ListItemLabel } from 'baseui/list';

const HeadNavBar = () => {
  const [css, theme] = useStyletron();
  const content = <ul
    className={css({
      width: '375px',
      padding: 0,
      backgroundColor: 'white',
    })}
  >
    <ListItem>
      <ListItemLabel>Label One</ListItemLabel>
    </ListItem>
    <ListItem>
      <ListItemLabel>Label Two</ListItemLabel>
    </ListItem>
    <ListItem>
      <ListItemLabel>Label Three</ListItemLabel>
    </ListItem>
    <ListItem>
      <ListItemLabel>Label Four</ListItemLabel>
    </ListItem>
  </ul>
  return (
    <HeaderNavigation overrides={{ Root: { style: { backgroundColor: 'black' } } }}>
      <NavigationList $align={ALIGN.left}>
        <NavigationItem className={css({ color: 'white' })}>Logo</NavigationItem>
        <NavigationItem>
          <StatefulPopover content={() => content} overrides={{ Body: { style: { backgroundColor: 'white', marginLeft: '50px' } } }}>
            <Button size='compact'>
              <FaThList size={20} />
            </Button>
          </StatefulPopover>
        </NavigationItem>
      </NavigationList>
      <NavigationList $align={ALIGN.center}>
        <Block width={'500px'} margin={'auto'} display={'flex'}>
          <Search placeholder='search' onChange={() => { }} size='compact' type={'search'} />
        </Block>
      </NavigationList>
      <NavigationList $align={ALIGN.right}>
        <NavigationItem>
          <Button size='compact'>
            <GoBellFill size={20} />
          </Button>
        </NavigationItem>
        <NavigationItem>
          <Button size='compact'>
            <FaRegUser size={20} />
          </Button></NavigationItem>
      </NavigationList>
    </HeaderNavigation>
  )
}

export default HeadNavBar;