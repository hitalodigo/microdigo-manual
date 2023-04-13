import {
    HeaderContainer,
    LogoContainer,
    MenuIcon,
    MenuItem,
    MenuList
} from "./styles";

import imgLogoMicrodigo from '../../assets//images/logo-microdigo.svg';
import { useState } from "react";

function Header() {

    const [isActive, setIsActive] = useState(false);

    const disableMenu = () => setIsActive(false);

    return (
        <HeaderContainer>

            <LogoContainer>
                <img
                    src={imgLogoMicrodigo}
                    alt="logo da digomaker"
                    loading='lazy'
                />
            </LogoContainer>

            <MenuList isActive={isActive}>
                <MenuItem
                    onClick={() => {
                        if (isActive) {
                            disableMenu();
                        }
                    }}
                >
                    <a href="#home">Início</a>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        if (isActive) {
                            disableMenu();
                        }
                    }}
                >
                    <a href="#header-section">Cabeçalho</a>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        if (isActive) {
                            disableMenu();
                        }
                    }}
                >
                    <a href="#sidebar-section">Barra lateral</a>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        if (isActive) {
                            disableMenu();
                        }
                    }}
                >
                    <a href="#mouting-panel-section">
                        Painel de montagem
                    </a>
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        if (isActive) {
                            disableMenu();
                        }
                    }}
                >
                    <a href="#using-platform-section">
                        Usando plataforma
                    </a>
                </MenuItem>
            </MenuList>
            <MenuIcon
                className={`${isActive ? 'isActive' : ''}`}
                onClick={() => {
                    setIsActive((prevActive) => !prevActive);
                }}
            ></MenuIcon>
        </HeaderContainer>
    )
}

export default Header;