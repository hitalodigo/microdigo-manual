import * as DA from './styles.js';

const DropdownItemAncor = ({ ancor, children, ...rest }) => {
  return (
    <DA.ItemAncor
      href={ancor}
      {...rest}
    >
      {children}
    </DA.ItemAncor>
  );
};

export default DropdownItemAncor;
