/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { BlogPost } from "@/components/sections/blog/blog-post";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <Header />
      <BlogPost slug={slug} />
      <Footer />
    </>
  );
}
