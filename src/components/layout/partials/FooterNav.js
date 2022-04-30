import React from "react";
import classNames from "classnames";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://hiddensocieties.org/">HIDDEN SOCIETIES</a>
        </li>
        <li>
          <a href="https://bofapes.vercel.app/">BOFA</a>
        </li>
        <li>
          <a href="https://discord.com/invite/Jx6rYQrqYd">DISCORD</a>
        </li>
        <li>
          <a href="https://twitter.com/nastypigsnft">TWITTER</a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
