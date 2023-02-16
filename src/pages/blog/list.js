import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import parse from 'html-react-parser';

const BlogList = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("https://public-api.wordpress.com/rest/v1.1/sites/computersciencesource.wordpress.com/posts/?order_by=date&order=DESC&fields=title,author,slug,excerpt,featured_image")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setBlogs(data.posts);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <div className=" bg-slate-100 border-gray-200 dark:bg-gray-900">
                <Navbar selected="blog" />
                <div className="columns-1 md:columns-3 min-h-[100vh]">
                    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-700 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-700 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-blue-300 shadow rounded-md p-4 m-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-blue-300 shadow rounded-md p-4 m-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                            <div className="flex-1 space-y-6 py-1">
                            <div className="h-2 bg-slate-700 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                </div>
                                <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    } else {
        return (
            <div className=' bg-slate-100 border-gray-200 dark:bg-gray-900 '>
                <Navbar selected="blog"/>
                <div className='container  mx-auto p-4 min-h-[100vh]'>
                <h1 className='mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-whi'>Blog List</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            {blogs.map(blog => (
                            <div key={(blog.slug).toString()}>
                                <Link to={`${blog.slug}`}>
                                    <div className="my-4 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{parse(blog.title)}</h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{parse(blog.excerpt)}</p>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Written By: {parse(blog.author.name)}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            ))}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default BlogList;