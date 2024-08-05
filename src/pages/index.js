import * as React from 'react'
import {Link} from 'gatsby'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello folks!</h1>
      <div><Link to="/about">About</Link></div>
      <div><Link to="/contact">Contact</Link></div>
      <div><a href="https://www.gatsbyjs.com/docs/how-to/">Gatsby Docs</a></div>
      
    </div>
  );
}
