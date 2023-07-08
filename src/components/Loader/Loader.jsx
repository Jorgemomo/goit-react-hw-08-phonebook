import { Oval } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer role="alert">
      <Oval
        height={80}
        width={80}
        color="black"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="yellow"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderContainer>
  );
};
