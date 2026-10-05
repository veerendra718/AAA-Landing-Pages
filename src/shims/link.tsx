import { Link as RouterLink } from "react-router-dom";

import { ROUTE_PATHS } from "@/route-paths";

type LinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  "aria-label"?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
};

function isInternalRoute(href: string) {
  if (!href.startsWith("/")) return false;
  const path = href.split("#")[0].split("?")[0];
  return (ROUTE_PATHS as readonly string[]).includes(path);
}

/** next/link stand-in. Only hrefs that exist as SPA routes go through the
 *  router; anything else — the student app's login and register pages on
 *  feature.samvitai.com, other sites — stays a plain anchor, as do
 *  in-page hashes, tel: and mailto: links. */
export default function Link({ href, children, ...rest }: LinkProps) {
  if (isInternalRoute(href)) {
    return (
      <RouterLink to={href} {...rest}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
