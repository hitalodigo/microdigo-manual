import { useMemo } from 'react';

import { Dropdown } from '@/components/shared/Dropdown';
import { interfaceAncors, usingPlatformAncors } from '@/data/menus';

import * as M from './styles';

const MenuDropdown = ({ title, keyActive, menuEnabled, disableMenu }) => {

  const selectedAncors = useMemo(() => {
    const ancors = {
      'interface': interfaceAncors,
      'usingPlatform': usingPlatformAncors
    }

    const currentAncors = ancors[keyActive];

    return currentAncors || null;

  }, [keyActive]);

  return (
    <>
      <M.TitleMenu >{title}</M.TitleMenu>

      {
        (menuEnabled === keyActive || menuEnabled === 'all') &&
        (
          <Dropdown.Root >
            {selectedAncors.map((item, index) => (
              <Dropdown.Item
                key={index}
              >
                <Dropdown.ItemAncor
                  ancor={item.ancor}
                  onClick={disableMenu}
                >
                  {item.text}
                </Dropdown.ItemAncor>
              </Dropdown.Item>
            ))}
          </Dropdown.Root>
        )
      }
    </>
  );
};

export default MenuDropdown;
