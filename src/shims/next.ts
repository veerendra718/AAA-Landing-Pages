/** Next.js page metadata. Ported pages keep `export const metadata: Metadata`
 *  so their real titles and descriptions survive; the router reads them to set
 *  document.title. See src/app.tsx. */
export type Metadata = {
  title?: string;
  description?: string;
};
