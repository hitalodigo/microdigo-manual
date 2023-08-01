import * as SL from './styles';

const SpinnerLoaderRoot = ({ children }) => {
  return (
    <SL.LoaderContainer>
      {children}
    </SL.LoaderContainer>
  );
};

export default SpinnerLoaderRoot;
