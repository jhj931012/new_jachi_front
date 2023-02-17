import Link from 'next/link';
import { H1 } from './Header.styles';

function Logo() {
  return (
    <H1>
      <Link href="/" legacyBehavior>
        <a>
          <img src="logo.jpg" alt="logo" />
        </a>
      </Link>
    </H1>
  );
}

export default Logo;