import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";
import { Eye, Clock, ChevronRight, Share2, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Solar Blog | Saurabh Brothers",
    };
  }
  return {
    title: `${post.title} | Saurabh Brothers`,
    description: post.metaDescription,
    keywords: `${post.category} solar, solar panel ${post.slug.split("-").join(" ")}, Saurabh Brothers blog, solar UP`,
    alternates: {
      canonical: `https://saurabhbrothers.in/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Saurabh Brothers`,
      description: post.metaDescription,
      url: `https://saurabhbrothers.in/blog/${post.slug}`,
      type: "article",
      locale: "en_IN",
      images: [post.image || "/og-image.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Saurabh Brothers`,
      description: post.metaDescription,
      images: [post.image || "/og-image.jpg"],
    }
  };
}

function parseInlineText(text) {
  if (!text) return "";
  let html = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">$1</a>');
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function renderMarkdown(text) {
  if (!text) return null;
  const lines = text.split("\n");
  const elements = [];
  let currentList = null;
  let currentTable = null;
  let keyCounter = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line || line.startsWith("|---") || line.startsWith("| :---")) {
      if (currentList) {
        elements.push(currentList);
        currentList = null;
      }
      if (currentTable) {
        elements.push(currentTable);
        currentTable = null;
      }
      continue;
    }

    if (!line.startsWith("-") && currentList) {
      elements.push(currentList);
      currentList = null;
    }

    if (!line.startsWith("|") && currentTable) {
      elements.push(currentTable);
      currentTable = null;
    }

    if (line.startsWith("### ")) {
      const headingTextRaw = line.slice(3).trim();
      const id = headingTextRaw.replace(/\*\*/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const headingText = parseInlineText(headingTextRaw);
      elements.push(
        <h3 key={keyCounter++} id={id} className="text-[20px] font-bold text-[#141B34] mt-8 mb-4 scroll-mt-24">
          {headingText}
        </h3>
      );
      continue;
    }

    if (line.startsWith("## ")) {
      const headingTextRaw = line.slice(2).trim();
      const id = headingTextRaw.replace(/\*\*/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const headingText = parseInlineText(headingTextRaw);
      elements.push(
        <h2 key={keyCounter++} id={id} className="text-[22px] md:text-[24px] font-bold text-[#141B34] mt-10 mb-4 scroll-mt-24">
          {headingText}
        </h2>
      );
      continue;
    }

    if (line.startsWith(">")) {
      const blockquoteText = parseInlineText(line.slice(1).trim());
      elements.push(
        <blockquote key={keyCounter++} className="border-l-4 border-blue-600 pl-5 py-4 my-6 bg-blue-50/50 text-gray-800 rounded-r-xl font-medium text-[16px] leading-relaxed shadow-sm">
          {blockquoteText}
        </blockquote>
      );
      continue;
    }

    if (line.startsWith("-")) {
      const itemText = parseInlineText(line.slice(1).trim());
      if (!currentList) {
        currentList = {
          type: "list",
          items: [itemText],
        };
      } else {
        currentList.items.push(itemText);
      }
      continue;
    }

    if (line.startsWith("|")) {
      const cells = line.split("|").map(c => c.trim()).filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
      const cellElements = cells.map(c => parseInlineText(c));
      if (!currentTable) {
        currentTable = {
          type: "table",
          headers: cellElements,
          rows: [],
        };
      } else {
        currentTable.rows.push(cellElements);
      }
      continue;
    }

    const paraText = parseInlineText(line);
    elements.push(
      <p key={keyCounter++} className="text-gray-700 text-[16px] leading-relaxed mb-5">
        {paraText}
      </p>
    );
  }

  if (currentList) elements.push(currentList);
  if (currentTable) elements.push(currentTable);

  return elements.map((el, index) => {
    if (el.type === "list") {
      return (
        <ul key={index} className="list-disc pl-6 mb-6 flex flex-col gap-2">
          {el.items.map((item, idx) => (
            <li key={idx} className="text-gray-700 text-[16px] leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    if (el.type === "table") {
      return (
        <div key={index} className="overflow-x-auto my-6 border border-gray-100 rounded-xl shadow-sm">
          <table className="w-full border-collapse text-left text-sm text-gray-500">
            <thead className="bg-[#f8fafc] text-xs font-semibold uppercase text-gray-700">
              <tr>
                {el.headers.map((hdr, idx) => (
                  <th key={idx} className="px-6 py-4 border-b border-gray-100 font-bold">
                    {hdr}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {el.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-gray-50">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-6 py-4 border-b border-gray-100 text-gray-700 text-[14px]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return el;
  });
}

function extractTOC(content) {
  if (!content) return [];
  const lines = content.split("\n");
  const toc = [];
  lines.forEach(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ") || trimmed.startsWith("### ")) {
      const level = trimmed.startsWith("### ") ? 3 : 2;
      const titleText = trimmed.replace(/^#+\s/, "").replace(/\*\*/g, "").trim();
      const id = titleText.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      toc.push({ title: titleText, id, level });
    }
  });
  return toc;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <section className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 font-semibold">← Back to Blog</Link>
        </section>
        <Footer />
      </>
    );
  }

  const toc = extractTOC(post.content);
  // Default static "Reads" value to match reference aesthetic
  const readsCount = 120 + (post.slug.length % 50); 
  
  // The first 4 related posts
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://saurabhbrothers.in${post.image || "/og-image.jpg"}`,
    "datePublished": post.date,
    "dateModified": post.updatedAt || post.date,
    "author": {
      "@type": "Organization",
      "name": "Saurabh Brothers",
      "url": "https://saurabhbrothers.in",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Saurabh Brothers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://saurabhbrothers.in/logo.png",
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://saurabhbrothers.in/blog/${post.slug}`,
    }
  };

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-16 bg-[#FAFAFA] min-h-screen">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[13px] md:text-[14px] text-gray-500 mb-6 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 shrink-0 text-gray-400" />
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 shrink-0 text-gray-400" />
            <span className="text-gray-900 truncate max-w-[200px] md:max-w-md">{post.title}</span>
          </div>

          {/* Header Area */}
          <div className="max-w-4xl mb-10">
            <h1 className="text-[28px] md:text-[44px] font-bold text-[#141B34] leading-[1.2] mb-5">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-[14px] md:text-[15px] font-medium mb-6">
              <span className="flex items-center gap-1.5"><Eye className="w-4 h-4" /> {readsCount} Reads</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime.split(' ')[0]} mins</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#EBF3FF] text-[#3451B2] text-[13px] font-medium px-4 py-1.5 rounded-full">
                {post.category}
              </span>
              <span className="bg-[#EBF3FF] text-[#3451B2] text-[13px] font-medium px-4 py-1.5 rounded-full">
                Solar Panel Installation
              </span>
            </div>

            <div className="flex items-center gap-3 border-t border-gray-200 pt-6">
              <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold flex items-center justify-center text-sm uppercase tracking-wider">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                <span className="text-[#141B34] font-bold text-[15px]">{post.author}</span>
                <span className="text-gray-400 hidden md:inline">|</span>
                <span className="text-gray-500 text-[14px]">Created: {post.date} | Updated: {post.updatedAt || post.date}</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          {post.image && (
            <div className="w-full aspect-video rounded-3xl overflow-hidden mb-10 relative shadow-lg">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
            
            {/* Left Sidebar - TOC */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="bg-[#F4F6F9] rounded-2xl p-6 md:p-8 sticky top-28">
                <h3 className="flex items-center gap-2 font-bold text-[#141B34] text-[18px] mb-6">
                  <span className="w-4 h-0.5 bg-[#141B34]"></span> In this article
                </h3>
                <ul className="flex flex-col gap-4">
                  {toc.map((item, i) => (
                    <li key={i} className={item.level === 3 ? "ml-4" : ""}>
                      <a href={`#${item.id}`} className="text-gray-700 hover:text-[#3451B2] font-medium text-[15px] flex items-start gap-2 leading-snug">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0"></span>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Share links */}
              <div className="mt-8 px-2">
                <p className="text-gray-500 text-[14px] font-medium mb-4">Share on</p>
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#3b5998] hover:bg-blue-50 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#25D366] hover:bg-green-50 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#1DA1F2] hover:bg-blue-50 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-800 hover:bg-gray-50 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Content */}
            <article className="lg:col-span-8 order-1 lg:order-2">
              <div className="prose max-w-none prose-lg">
                {renderMarkdown(post.content)}
              </div>
            </article>

          </div>
        </div>
      </main>

      {/* Related Blogs */}
      <section className="py-16 bg-white pb-32">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#141B34]">Related Blogs</h2>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-[#141B34] font-bold text-[18px] hover:text-blue-600 transition-colors">
              See All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPosts.map((rPost) => (
              <Link key={rPost.slug} href={`/blog/${rPost.slug}`} className="group block bg-[#FAFAFA] rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-gray-100">
                <div className="relative h-[200px] w-full">
                  {rPost.image ? (
                    <Image src={rPost.image} alt={rPost.title} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-[#00AEEF] flex items-center justify-center">
                      <div className="w-16 h-16 border-4 border-dashed border-white/50 rounded-full"></div>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-[12px] font-bold px-3 py-1.5 rounded-full">
                      {rPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#141B34] text-[18px] leading-snug mb-4 line-clamp-3 group-hover:text-[#3451B2] transition-colors">
                    {rPost.title}
                  </h3>
                  <div className="flex items-center gap-3 text-gray-500 text-[13px] font-medium uppercase tracking-wide">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {rPost.readTime.split(' ')[0]} Min</span>
                    <span>{rPost.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Link href="/blog" className="flex items-center justify-center gap-2 text-[#141B34] font-bold text-[16px] border border-[#141B34] rounded-full py-3 px-8 w-full">
              See All Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 border-t border-gray-200 py-3 md:py-4 transform translate-y-0 transition-transform duration-300">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 md:gap-6">
          <p className="font-bold text-[#141B34] text-[15px] md:text-[18px] text-center md:text-left m-0">
            Save on electricity bills by switching to solar now!
          </p>
          <Link href="/#contact" className="bg-white border-2 border-[#141B34] text-[#141B34] font-bold text-[15px] px-8 py-2.5 rounded-full hover:bg-[#141B34] hover:text-white transition-all text-center">
            Go Solar Now!
          </Link>
        </div>
      </div>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
