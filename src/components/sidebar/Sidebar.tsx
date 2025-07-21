import { ElementType } from "react";
import { UniversalIcon } from "../common/unversalIcon";
import { MenuItem } from "./MenuItem";
import s from './sidebar.module.scss';

export const Path = {
    Feed: '/feed',
    Create: '/create',
    Profile: '/profile',
    Messenger: '/messenger',
    Search: '/search',
    Stats: '/stats',
    Favorites: '/favorites',
    Logout: '/logout',
  } as const
   

const menuItems = [
    {text: 'Feed', icon: <UniversalIcon name={'home-outline'} />, href: Path.Feed},
    {text: 'Create', icon: <UniversalIcon name={'plus-square-outline'}/>, href: Path.Create},
    {text: 'My Profile', icon: <UniversalIcon name={'person-outline'}/>, href: Path.Profile},
    {text: 'Messanger', icon: <UniversalIcon name={'message-circle-outline'}/>, href: Path.Messenger},
    {text: 'Search', icon: <UniversalIcon name={'search'}/>, href: Path.Search},
    {text: 'Statistics', icon: <UniversalIcon name={'trending-up-outline'}/>, href: Path.Stats},
    {text: 'Favorites', icon: <UniversalIcon name={"bookmark-outline"}/>, href: Path.Favorites},
]
const menuFooter = [
    {text: 'Log out', icon: <UniversalIcon name={'log-out'}/>, href: Path.Logout},
]

type SidebarProps = {
as?: ElementType
}

export const Sidebar = ({as}:SidebarProps) => {
  return (
    <nav className={s.sidebar}>
      <ul className ={s.sidebar_menu}>
        {menuItems.map((menuItem, index)=>(
            <MenuItem key={index} {...menuItem} as={as}/>
        ))}
      </ul>
      <ul className={s.footer}>
        <MenuItem {...menuFooter[0]} as={as} /> 
      </ul>
    </nav>
  );
};
