import { PageShell } from "./PageShell";

/**
 * About Us wrapper over PageShell — keeps the About pages' call sites short.
 */
export function AboutShell({
  title,
  subtitle,
  closingCta,
  children,
}: {
  title: string;
  subtitle?: string;
  /** Passed through to PageShell. Off on Careers, whose readers are job
   *  applicants rather than families booking a visit. */
  closingCta?: boolean;
  children: React.ReactNode;
}) {
  return (
    <PageShell title={title} subtitle={subtitle} closingCta={closingCta}>
      {children}
    </PageShell>
  );
}
