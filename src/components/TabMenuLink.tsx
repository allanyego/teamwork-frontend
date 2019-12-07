import React from 'react';
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

interface LinkProps {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
}

function TabMenuLink({ label, to, activeOnlyWhenExact }: LinkProps) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link to={to} className={match ? "t-active" : ""}>{label}</Link>
  );
}

export default TabMenuLink;