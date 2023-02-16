import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import parse from 'html-react-parser';
import Moment from 'moment';
import '../../Blog.css';

function BlogDetails () {
    const { slug } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [blog, setBlog] = useState([]);
    
    useEffect(() => {
        fetch("https://public-api.wordpress.com/rest/v1.1/sites/computersciencesource.wordpress.com/posts/slug:" + slug)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setBlog(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    })
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return (
            <div className=" bg-slate-100 border-gray-200 dark:bg-gray-900">
                <Navbar selected="blog"/>
                <div className="sm:container sm:mx-auto p-4 max-w-xs grid grid-cols-4 min-h-[100vh]" >
                    <div className="max-w-3xl w-full col-span-3">
                    <div role="status" className="max-w-sm animate-pulse">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    <div className="max-w-3xl w-full col-span-1">
                        <div role="status" className="max-w-sm animate-pulse">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div role="status" className="max-w-sm animate-pulse">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }  
    
    if (blog) {
        Moment.locale('en');

        return (
            
            
            <div className=" bg-slate-100 border-gray-200 dark:bg-gray-900">
                <Navbar selected="blog"/>
                <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
                  <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img class="mr-4 w-16 h-16 rounded-full" src={blog.author.avatar_URL} alt={blog.author.name}/>
                      <div>
                          <a rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{blog.author.name}</a>
                          <p class="text-base font-light text-gray-500 dark:text-gray-400">@{blog.author.login}</p>
                          <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime={Moment(blog.date).format('DD-MMMM-yyyy')} title={Moment(blog.date).format('MMMM DD, yyyy')}>{ Moment(blog.date).format('MMMM DD, yyyy') }</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{blog.title}</h1>
          </header>
          <p class="lead blogContent text-gray-900 dark:text-gray-200">
            {parse(blog.content)}
          </p>
      </article>
  </div>
</main>
                <Footer />
            </div>
        );
    }
}

export default BlogDetails;