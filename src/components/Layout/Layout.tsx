type LayoutProps = {
  header: JSX.Element;
  children: JSX.Element;
  footer: JSX.Element;
};

const Layout = ({ header, children, footer }: LayoutProps): JSX.Element => {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
};

export default Layout;
