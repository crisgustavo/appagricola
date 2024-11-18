import { LogoNewTopBar, MenuBar, MenuButton, MenuButtonImg, MenuNavigator, TopBar } from './styles'
import menubuttonimg from '../../assets/images/menu.png'
import topbarimg from '../../assets/images/logo.png'
import { useRef, useState } from 'react';
import ListMenu from '../ListMenu';



function NewTopBar() {

    const dropDownRef = useRef(null)
    const [isActive, setIsActive] = useState(false);
    const onClick = () => { setIsActive(!isActive) }

    return (
        <TopBar>
            <MenuBar className={`menu-bar ${isActive ? "active" : "inactive"}`}>
                <MenuButton onClick={() => onClick()} className='menu-button'>
                    <MenuButtonImg src={menubuttonimg} onClick={() => navigate('/')} />
                </MenuButton>

                <MenuNavigator ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
                    <ListMenu />
                </MenuNavigator>
            </MenuBar>
            <LogoNewTopBar src={topbarimg} />
        </TopBar>
    )
}

export default NewTopBar