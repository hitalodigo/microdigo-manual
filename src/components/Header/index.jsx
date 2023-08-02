import { useEffect, useState } from "react";

import imgLogoMicrodigo from '@/assets/images/logo-microdigo.svg';

import * as H from "./styles";

import MenuDropdown from "./MenuDropdown";

function Header() {

  const [isActive, setIsActive] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [menuEnabled, setMenuEnabled] = useState(() => {
    if (screenWidth <= 968) return 'all';

    return ''
  });

  const handleDisableMenu = () => {
    console.log('CLICANDO NO MENU');
    setIsActive(false)
  };

  const handleActiveMenu = (typeMenu) => {

    if (screenWidth <= 968) return;

    setMenuEnabled(prev => {
      return prev === typeMenu ? '' : typeMenu
    });
  }

  const handleResize = (event) => {
    const newScreenWidth = event.target.innerWidth;

    if (newScreenWidth <= 968) {
      setMenuEnabled('all')
    } else {
      setMenuEnabled('')
    }

    setScreenWidth(newScreenWidth);
  }

  useEffect(() => {

    window.addEventListener('resize', handleResize);

    () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  return (
    <H.HeaderContainer>

      <H.LogoContainer>
        <img
          src={imgLogoMicrodigo}
          alt="logo da digomaker"
          loading='lazy'
        />
      </H.LogoContainer>

      <H.MenuList isActive={isActive}>
        <H.MenuItem
          onClick={() => handleActiveMenu('')}
        >
          <H.MenuLink
            href="#home"
            onClick={handleDisableMenu}
          >
            Início
          </H.MenuLink>
        </H.MenuItem>
        <H.MenuItem
          onMouseEnter={() => handleActiveMenu('interface')}
          onMouseLeave={() => handleActiveMenu('')}
        >
          <MenuDropdown
            title='Interface'
            keyActive={'interface'}
            menuEnabled={menuEnabled}
            disableMenu={handleDisableMenu}
          />
        </H.MenuItem>

        <H.MenuItem
          onMouseEnter={() => handleActiveMenu('usingPlatform')}
          onMouseLeave={() => handleActiveMenu('')}
        >
          <MenuDropdown
            title='Usando plataforma'
            keyActive={'usingPlatform'}
            menuEnabled={menuEnabled}
            disableMenu={handleDisableMenu}
          />
        </H.MenuItem>
      </H.MenuList>
      <H.MenuIcon
        className={`${isActive ? 'isActive' : ''}`}
        onClick={() => {
          setIsActive((prevActive) => !prevActive);
        }}
      ></H.MenuIcon>
    </H.HeaderContainer>
  )
}

export default Header;
