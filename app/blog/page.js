import Image from "next/image";
import Navbar from "../(components)/navbar/navbar";

import img from "../../public/img/post.png"
import Blog_para from "./(components)/blog_para/blog_para";
import Blog_input from "./(components)/blog_input/blog_input";
import Button from "../(components)/button/button";
import Blog_categories from "./(components)/blog_categories/blog_categories";
import { client } from "@/sanity/lib/client";

const fetchBlogHeader = async () => {
    const blogHeader = await client.fetch(`*[_type == 'blogHeader']`, {}, { cache: 'no-cache' });
    // console.log("Blog Header", blogHeader);
    return blogHeader
}

const fetchBlogCertificateAndOnlineProgram = async () => {
    const blogCertificateAndOnlineProgram = await client.fetch(`*[_type == 'blogCertificateAndOnlineProgram']`, {}, { cache: 'no-cache' });
    // console.log("Blog Certificate And Online Program", blogCertificateAndOnlineProgram);
    return blogCertificateAndOnlineProgram
}

const fetchBlogCertificateDetailParas = async () => {
    const blogCertificateDetailParas = await client.fetch(`*[_type == 'blogCertificateDetailParas']`, {}, { cache: 'no-cache' });
    console.log("Blog Certificate Detail Paragraphs", blogCertificateDetailParas);
    return blogCertificateDetailParas
}

// const fetchBlogComment = async () => {
//     const blogComment = await client.fetch(`*[_type == 'blogComment']`, {}, { cache: 'no-cache' });
//     console.log("Blog Comment", blogComment);
//     return blogComment
// }

// const fetchBlogPostHeading = async () => {
//     const blogPostHeading = await client.fetch(`*[_type == 'blogPostHeading']`, {}, { cache: 'no-cache' });
//     console.log("Blog Post Heading", blogPostHeading);
//     return blogPostHeading
// }

// const fetchBlogPosts = async () => {
//     const blogPosts = await client.fetch(`*[_type == 'blogPosts']`, {}, { cache: 'no-cache' });
//     console.log("Blog Posts", blogPosts);
//     return blogPosts
// }

export default async function Blog() {

    const blogHeader = await fetchBlogHeader();
    const blogCertificateAndOnlineProgram = await fetchBlogCertificateAndOnlineProgram();
    const blogCertificateDetailParas = await fetchBlogCertificateDetailParas();
    // const blogComment = await fetchBlogComment();
    // const blogPostHeading = await fetchBlogPostHeading();
    // const blogPosts = await fetchBlogPosts();

    return (
        <>

            {
                blogHeader.map((content) => {
                    return (
                        <>
                            <Navbar header_title={content.heading} />
                        </>
                    )
                })
            }

            {/* <Navbar header_title="OUR POST" /> */}

            <section class="blog-content">
                <div class="row">
                    <div class="blog-left">

                        {
                            blogCertificateAndOnlineProgram.map((content) => {
                                return (
                                    <>
                                        {/* <h2>{content.heading}</h2> */}
                                        <h5>{content.date}</h5>

                                        <Image src={img} width={300} height={470} />
                                    </>
                                )
                            })
                        }

                        {
                            blogCertificateDetailParas.map((para) => {
                                return (
                                    <>
                                        <Blog_para para={para.paragraph} />

                                        <br />
                                    </>
                                )
                            })
                        }

                        <div class="comment-box">
                            <h3>Leave a Comment</h3>
                            <form class="comment-form">

                                <Blog_input typr="text" placeholder="Enter Name" />
                                <Blog_input typr="email" placeholder="Enter Email" />

                                <textarea rows="5" placeholder="Your Comment"></textarea>

                                <Button btnTitle="POST COMMENT" btnClass="btn" />

                            </form>
                        </div>
                    </div>

                    <div class="blog-right">

                        <h3>Post Categories</h3>

                        <Blog_categories cate="Business Analytics" num="12" />
                        <Blog_categories cate="Machine Learning" num="29" />
                        <Blog_categories cate="Computer Science" num="15" />
                        <Blog_categories cate="Data Analytics" num="22" />
                        <Blog_categories cate="Full Stack" num="20" />

                    </div>
                </div>
            </section>
        </>
    )
}
