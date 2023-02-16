import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import parse from 'html-react-parser';
import Moment from 'moment';
import CourseModal from "./modal";
import '../../Blog.css';

export default function CourseDetails () {
    const { slug } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [course, setCourse] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState(null);
    const [modalVideo, setModalVideo] = useState(null);
    
    useEffect(() => {
        console.log(slug);
        fetch("https://joy1108.github.io/course_data/courses/" + slug)
            .then(res => res.json())
            .then(
                (data) => {
                    setCourse(data);
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
                <Navbar selected="course"/>
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
    
    if (course) {
        Moment.locale('en');

        return (
            <>
            {showModal ? (
        <CourseModal title={modalTitle} videoid={modalVideo} onClose={()=>setShowModal(false)} />
      ) : null}
            
            <div className=" bg-slate-100 border-gray-200 dark:bg-gray-900">
                <Navbar selected="course"/>
                <div className="sm:container mx-auto p-4 max-w-md lg:grid lg:grid-cols-4 lg:gap-8 min-h-[100vh]" >
                    <div className="lg:col-span-3">
                        <h4 className="mb-3 text-5xl font-semibold tracking-tight text-black dark:text-white">{parse(course.title)}</h4>
                        <h5 className="mb-3 text-2xl font-semibold tracking-tight text-slate-600 dark:text-white">{parse(course.description)}</h5>
                        <hr/>
                        <div className="blogContent text-gray-700 dark:text-white">
                        <div className=''>
                            {course.lectures.map(lecture=> (
                            <div key={(lecture.videoID).toString()}>
                                <div onClick={()=>{setModalTitle(lecture.title);setModalVideo(lecture.videoID);setShowModal(true)}}>
                                
                                    <div className="my-4 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div className="flex flex-col justify-between p-4 leading-normal">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{parse(lecture.title)}</h5>
                                            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{parse(blog.excerpt)}</p> */}
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{parse(lecture.description)}</p>
                                            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Runtime: {parse(lecture.runtime)}</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                        <hr/>
                        {/* <p className="my-5 italic text-gray-900 dark:text-white">Published On: {course.date}</p> */}
                    </div>
                    <div className="lg:col-span-1">
                        <div className="bg-slate-200  dark:bg-slate-800 p-4 max-w-3xl rounded-xl w-full">
                            <h4 className="mb-3 text-xl font-semibold tracking-tight dark:text-white">DETAILS</h4>

                            <div className="text-gray-700 dark:text-white">
                                <p className="mb-3">Lecturer: {(course.lecturer)}</p>
                                <p className="mb-3">Modified: {course.lectures.length}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            </>
        );
    }
}