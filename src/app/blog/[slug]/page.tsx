/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { BlogPost } from "@/components/sections/blog/blog-post";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header />
      <BlogPost slug={params.slug} />
      <Footer />
    </>
  );
}
