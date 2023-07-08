import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import {
  PageHomeSection,
  PageHomeTitle,
  PageHomeText,
  PageHomeTitle2,
} from './PageHome.styled';

function PageHome() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <PageHomeSection>
        <PageHomeTitle>Welcome</PageHomeTitle>
        <PageHomeTitle2>
          Now you'll never forget your contacts!
        </PageHomeTitle2>
        {!isLoggedIn && (
          <PageHomeText>
            {' '}
            <b>Sign up</b> <em>or</em> <b>Log in</b>{' '} <br/>
            <em>to have access to the Phonebook!</em><br/>
            📖🙍‍♂️🙍‍♀️
          </PageHomeText>
        )}
      </PageHomeSection>
    </>
  );
}

export default PageHome;
