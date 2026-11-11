import type { Metadata } from "next";
import { useSearchParams } from "react-router-dom";

import { toBlogPage } from "@/components/landing/blog-data";
import { BlogList } from "@/components/landing/BlogList";

export const metadata: Metadata = {
  title: "Knowledge Desk | Arjunaa Academy for Achievers",
  description: "Explore the latest updates about NEET, JEE, IIT exams and foundation courses.",
};

/** /landing/knowledge-desk?page=N. In Next.js this is a server page that
 *  passes `toBlogPage((await searchParams).page)` to the same BlogList. */
export default function KnowledgeDeskPage() {
  const [params] = useSearchParams();
  return <BlogList page={toBlogPage(params.get("page"))} />;
}
