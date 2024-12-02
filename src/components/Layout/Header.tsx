import Link from "next/link";
import React from "react";

const Header: React.FC = React.memo(() => {
  return (
    <header>
      <h1>My App</h1>
      <nav>
        <Link href="/">Home</Link>
      </nav>
    </header>
  );
});

export default Header;
