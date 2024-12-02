import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutWrapper } from "./styles";

const Layout: React.FC<{ children: React.ReactNode }> = React.memo(({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
});

export default Layout;
