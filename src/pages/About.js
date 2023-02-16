import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function About() {
    return (
        <>
            <Navbar selected="about"/>
            <div>
                <section className="bg-background bg-slate-100 dark:text-white dark:bg-slate-900">
                    <div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:pt-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Powered by Students</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Everyone from Applicants to Alumni is involved in SkillVault.</p>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            
                        </div>                
                    </div>
                </section>
                <section class="bg-white dark:bg-gray-900">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">We are powered by students just like <span class="font-extrabold">YOU</span>!</h2>
                            <p class="mb-4 font-light">At SkillVault, we believe that everyone from applicants to alumni has something valuable to contribute to our team. That's why we strive to involve as many members of the SkillVault community as possible in the work we do.</p>
                            <p class="mb-4 font-light">As a student-run organization, we are committed to providing the highest level of support and assistance to our fellow students, faculty, and staff. Whether you need help with a technical issue, have a question about using a particular software program, or simply need some advice, we are here to help.</p>
                            <p class="mb-4 font-light">Our team is made up of talented and dedicated students who are passionate about using their technical skills to make a difference. We are always looking for new volunteers to join our team, and we welcome applicants from all majors and backgrounds.</p>
                            <p class="mb-4 font-medium">So whether you are an applicant looking to get involved, a current student looking for a way to give back, or an alumnus looking to stay connected, we encourage you to get involved with SkillVault. Together, we can make a positive impact on the community and beyond.</p>
                            {/* <a href="/" class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                                Learn more
                                <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </a> */}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}