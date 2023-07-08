import { Link } from './AuthForm.styled';

export function AuthForm() {
  return (
    <nav>
      <Link to="/register" exact>
        Sign up
      </Link>
      <Link to="/login" exact>
        Log in
      </Link>
    </nav>
  );
}

