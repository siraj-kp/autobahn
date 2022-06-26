import { Outlet } from 'react-router-dom';
import Header from './header';

interface Props {
  children?: React.ReactNode;
}
const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
