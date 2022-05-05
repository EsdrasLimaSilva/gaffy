import React, { useEffect } from "react";

const NavMenu = function () {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50">
      <div id="cover-close" />
      <nav>
        <ul>
          <li>Genre</li>
          <li>Setting</li>
          <li>Combat</li>
          <li>Graphics</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
