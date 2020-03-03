import { Menu, Container, Image, Icon } from 'semantic-ui-react';
import Link from 'next/link';
// react router hooks in next
// React Router Dom give us some parts of the lifecyle of a route change from one route to another
import Router, { useRouter } from 'next/router';
// import nprogress package apply to Router
import NProgress from 'nprogress';

// Apply progress bar
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
  // react router hooks: router.pathname
  const router = useRouter();
  // To user authentication
  const user = false;

  // helper function
  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu fluid id='menu' inverted>
      <Container text>
        <Link href='/'>
          <Menu.Item header active={isActive('/')}>
            <Image
              size='mini'
              src='/static/logo.svg'
              style={{ marginRight: '1em' }}
            />
            Home
          </Menu.Item>
        </Link>

        <Link href='/cart'>
          <Menu.Item header active={isActive('/cart')}>
            <Icon name='cart' size='large' />
            Cart
          </Menu.Item>
        </Link>

        {/* if user is true  */}
        {user && (
          <Link href='/create'>
            <Menu.Item header active={isActive('/create')}>
              <Icon name='add square' size='large' />
              Create
            </Menu.Item>
          </Link>
        )}

        {/* set of fragment to ternary statement */}
        {user ? (
          <>
            <Link href='/account'>
              <Menu.Item header active={isActive('/account')}>
                <Icon name='user' size='large' />
                Account
              </Menu.Item>
            </Link>

            <Menu.Item header>
              <Icon name='sign out' size='large' />
              Logout
            </Menu.Item>
          </>
        ) : (
          <>
            <Link href='/login'>
              <Menu.Item header active={isActive('/login')}>
                <Icon name='sign in' size='large' />
                Login
              </Menu.Item>
            </Link>

            <Link href='/signup'>
              <Menu.Item header active={isActive('/signup')}>
                <Icon name='signup' size='large' />
                Sing-Up
              </Menu.Item>
            </Link>
          </>
        )}
      </Container>
    </Menu>
  );
}

export default Header;
