import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { page, text } from "../examples/home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <h1>Home Page!</h1>
        <p className={text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt aliquam eos odit ducimus, ex dignissimos! Delectus magni pariatur quo distinctio, sunt laborum sint harum veniam quae atque voluptatem incidunt eum.
        Nobis molestiae quod quos? Aliquam eaque voluptatibus nulla suscipit esse placeat voluptatem ratione explicabo in assumenda. Ea soluta placeat magnam, earum esse dolore id tenetur cupiditate ipsam, commodi vero explicabo.
        Error a debitis architecto reprehenderit esse ducimus, harum sed nihil eveniet molestiae culpa eligendi voluptatum tempore accusamus aut? A excepturi deleniti voluptate, fuga totam quo harum quidem explicabo quisquam quaerat?
        Sunt, nihil, laudantium maiores sapiente corrupti dignissimos placeat reiciendis libero aspernatur blanditiis unde. Dolorum molestias vitae neque laboriosam dicta eius quibusdam veritatis ipsam, cum voluptatibus, sapiente quas hic totam. Maiores.
        Praesentium accusamus atque rerum molestias quod veniam fugit iste modi molestiae odio. Porro voluptate, illum veniam fugit dolorum repellendus qui minima incidunt provident. Tempore ullam, corrupti officia repudiandae fuga odio.
        
        Veritatis impedit consectetur, architecto quasi, minima laborum incidunt vitae atque culpa quia asperiores facilis nihil quod ratione ipsa voluptatum voluptas fugiat rem exercitationem iure quo ea blanditiis harum? Accusantium, facere!</p>
      </div>
    </Layout>
  );
}
