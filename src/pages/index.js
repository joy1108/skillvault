import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Home.js';
import About from './About';
import BlogList from './blog/list';
import BlogDetails from './blog/details';
import Contact from './Contact.js';
import CourseList from './course/list.js';
import CourseDetails from './course/details.js';

const Pages = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element= {<Home/>} />
                <Route path = "/blog/" element = {<BlogList/>} />
                <Route path = "/blog/:slug" element = {<BlogDetails/>} />
                <Route path = "/about" element = {<About/>} />
                <Route path = "/contact" element={<Contact/>} />
                <Route path = "/course/" element = {<CourseList/>} />
                <Route path = "/course/:slug" element = {<CourseDetails/>} />
            </Routes>
        </Router>
    );
};

export default Pages;