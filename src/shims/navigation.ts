import { useNavigate } from "react-router-dom";

/** Full URLs (another site, e.g. the student app) leave the SPA through the
 *  browser; the SPA router only knows this site's own routes. */
const isExternal = (href: string) => /^https?:\/\//.test(href);

export function useRouter() {
  const navigate = useNavigate();
  return {
    push: (href: string) => (isExternal(href) ? window.location.assign(href) : navigate(href)),
    replace: (href: string) =>
      isExternal(href) ? window.location.replace(href) : navigate(href, { replace: true }),
    back: () => navigate(-1),
    prefetch: async () => {},
  };
}
