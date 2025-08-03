/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { BlogGrid } from "@/components/sections/blog/blog-grid";

export default function BlogPage() {
  return (
    <>
      <Header />

      <BlogGrid />

      <Footer />
    </>
  );
}
