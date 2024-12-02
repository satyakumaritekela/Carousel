import React from "react";

const Footer: React.FC = React.memo(() => {
  console.log("Footer rendered"); // For testing re-renders
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
    </footer>
  );
});

export default Footer;
