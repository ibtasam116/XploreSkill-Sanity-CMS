import Image from "next/image";
import Navbar from "../(components)/navbar/navbar";

import img from "../../public/img/post.png"
import Blog_para from "./(components)/blog_para/blog_para";
import Blog_input from "./(components)/blog_input/blog_input";
import Button from "../(components)/button/button";
import Blog_categories from "./(components)/blog_categories/blog_categories";

export default function Blog() {
    return (
        <>
            <Navbar header_title="OUR POST" />

            <section class="blog-content">
                <div class="row">
                    <div class="blog-left">

                        <h2>Our Certificate & Online Program</h2>
                        <h5>Aug 1, 2021</h5>

                        <Image src={img} width={300} height={470} />

                        <Blog_para para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum." />

                        <br />

                        <Blog_para para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                facilis?"/>

                        <br />

                        <Blog_para para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                            incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                            aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                            ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                            facilis?" />

                        <br />

                        <Blog_para para="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                            incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                            aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                            ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                            facilis?" />

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
