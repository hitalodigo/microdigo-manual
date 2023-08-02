import * as D from './styles.js';

const DropdownRoot = ({ orientation = 'left', children }) => {
  return (
    <D.Container
      orientation={orientation}
    >
      <ul>{children}</ul>
    </D.Container>
  );
};

export default DropdownRoot;
