import * as DI from './styles.js';

const DropdownItem = ({ children }) => {
  return (
    <DI.ItemContainer>
      {children}
    </DI.ItemContainer>
  );
};


export default DropdownItem;
