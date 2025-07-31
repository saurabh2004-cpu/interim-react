import styled from 'styled-components';
import { Instagram, Facebook, Twitter, Youtube, Linkedin, X, } from 'lucide-react';


const Footer = () => {
    return (
        <div>
            <div className="bg-[#1f3630] py-16 mx-2 md:mx-10 sm:px-6 lg:px-8 rounded-lg">
                <div className=" mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4" >
                        {/* Left Side - Contact Info */}
                        <div className=" px-4 md:px-8 text-[#fdfcee]" >
                            <div className="space-y-6 ">
                                {/* Email */}
                                <div className="bg-white/5 rounded-xl p-4">
                                    <div className="flex justify-between items-center">
                                        <span className=" text-sm font-medium inter-placeholder  '">EMAIL</span>
                                        <a href="mailto:interimstudio@email.com" className="text-[#f8f8f5] hover:underline text-[#fdfcee] inter-placeholder  '">
                                            interimstudio@email.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="bg-white/5 rounded-xl p-4 ">
                                    <div className="flex justify-between items-center ">
                                        <span className=" text-sm font-medium text-[#fdfcee] ' inter-placeholder">PHONE</span>
                                        <a href="tel:+1458741139" className="text-[#f8f8f5] hover:underline text-[#fdfcee] ' inter-placeholder">
                                            +1458741139
                                        </a>
                                    </div>
                                </div>

                                {/* Office */}
                                <div className="bg-white/5 rounded-xl p-4">
                                    <div className="flex justify-between items-center ' inter-placeholder">
                                        <span className="text-[#fdfcee] text-sm font-medium  ' inter-placeholder">OFFICE</span>
                                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-[#f8f8f5] hover:underline text-[#fdfcee] ml-12 md:ml-0 text-end inter-placeholder">
                                            123 Main Street Anytown, USA, 2141
                                        </a>
                                    </div>
                                </div>

                                {/* Opening Hours */}
                                <div className="bg-[#ffffff0d] rounded-xl p-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className=" text-[#fdfcee] text-[11px] inter-placeholder  font-bold ">OPENING HOURS</span>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Sunday */}
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-2">
                                                <svg className="w-4 h-4 text-[#f3ac85]" viewBox="0 0 256 256">
                                                    <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
                                                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" fill="currentColor" />
                                                </svg>
                                                <span className="text-white/70 text-md font-semibold">Sunday</span>
                                            </div>
                                            <span className="text-white  text-lg">Closed</span>
                                        </div>

                                        {/* Weekdays */}
                                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index, array) => (
                                            <div key={day}>
                                                <div className="flex justify-between items-center py-2">
                                                    <div className="flex items-center space-x-2">
                                                        <svg className="w-4 h-4 text-[#f3ac85]/90" viewBox="0 0 256 256">
                                                            <path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2" />
                                                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" fill="currentColor" />
                                                        </svg>
                                                        <span className="text-white/70 text-md font-semibold">{day}</span>
                                                    </div>
                                                    <span className="text-white font-semibold">9.00 AM - 6.00 PM</span>
                                                </div>

                                                {/* horizontal line, not after the last item */}
                                                {index !== array.length - 1 && (
                                                    <hr className="border-white/30 my-1" />
                                                )}
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="bg-[#fffef2] rounded-xl px-4 py-8 mx-4">
                            <h2 className="text-3xl md:text-6xl text-center font-black text-[#1d322d] mb-4 inter-placeholder tracking-tight drop-shadow-[0_2px_1px_rgba(0,0,0,0.15)]">
                                Get a Free Estimate
                            </h2>

                            <p className="text-[#1d322d] mb-8 inter-placeholder  ">
                                Reach out to us immediately to arrange for a customized quotation from one of our assessors.
                                Phone us or complete the form provided below!
                            </p>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 inter-placeholder ">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-[12px] font-semibold text-[#1d322d] mb-2 ">NAME</label>
                                        <input
                                            type="text"
                                            placeholder="Jane Smith"
                                            className="w-full bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#f3ac85]"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-[12px] font-semibold text-[#1d322d] mb-2">PHONE</label>
                                        <input
                                            type="tel"
                                            placeholder="(123) 456-7890"
                                            className="w-full bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#f3ac85]"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-[12px] font-bold text-[#1d322d] mb-2">EMAIL</label>
                                    <input
                                        type="email"
                                        placeholder="jane@framer.com"
                                        className="w-full bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#f3ac85]"
                                    />
                                </div>

                                {/* Project Type */}
                                <div>
                                    <label className="block text-[12px] font-bold text-[#1d322d] mb-2">PROJECT TYPE</label>
                                    <select className="w-full bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-blue-300 text-[12px] font-bold">
                                        <option value="" className='bg-gray-300'>Select...</option>
                                        <option value="Residential" className='text-[12px] font-semibold'>Residential</option>
                                        <option value="Commercial" className='text-[12px] font-semibold'>Commercial</option>
                                        <option value="Office" className='text-[12px] font-semibold'>Office</option>
                                        <option value="Retail" className='text-[12px] font-semibold'>Retail</option>
                                        <option value="Hospitality" className='text-[12px] font-semibold'>Hospitality</option>
                                        <option value="Other" className='text-[12px] font-semibold'>Other</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Location */}
                                    <div>
                                        <label className="block text-[12px] font-bold text-[#1d322d] mb-2">LOCATION</label>
                                        <input
                                            type="text"
                                            placeholder="City, State"
                                            className="w-full bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                                        />
                                    </div>

                                    {/* Budget */}
                                    <div>
                                        <label className="block text-[12px] font-bold text-[#1d322d] mb-2">BUDGET</label>
                                        <input
                                            type="text"
                                            placeholder="Enter your budget"
                                            className="w-full bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-ring-black"
                                        />
                                    </div>

                                    {/* Project Size */}
                                    <div>
                                        <label className="block text-[12px] font-bold text-[#1d322d] mb-2">PROJECT SIZE (SQFT)</label>
                                        <input
                                            type="text"
                                            placeholder="e.g., 1500"
                                            className="w-full bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-ring-black"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Preferred Start Date */}
                                    <div>
                                        <label className="block text-[12px] font-bold text-[#1d322d] mb-2">PREFERRED START DATE</label>
                                        <input
                                            type="date"
                                            className="w-full text-[12px] font-bold bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-ring-black"
                                        />
                                    </div>

                                    {/* Desired Completion Date */}
                                    <div>
                                        <label className="block text-[12px] font-bold text-[#1d322d] mb-2">DESIRED COMPLETION DATE</label>
                                        <input
                                            type="date"
                                            className="w-full bg-[#f7f6e9] text-[12px] font-bold border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-ring-black"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-[12px] font-bold text-[#1d322d] mb-2">MESSAGE</label>
                                    <textarea
                                        placeholder="Write your message here"
                                        rows="4"
                                        className="w-full bg-[#f7f6e9] border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-ring-black"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-[#f3ac85] text-[#1d322d] font-medium py-3 px-6 rounded-lg hover:bg-[#f3ac85]/90 transition-colors"
                                >
                                    Request Free Estimate
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-[#1f3630] py-16 mx-2 mt-10 md:mx-10 sm:px-6 lg:px-8 rounded-lg ">
                <div className="flex flex-col lg:flex-row gap-12 mb-8">
                    <div className="w-full lg:w-1/2">

                        {/* Social Cards Section */}
                        <div className="mb-10 ">
                            <div className="grid grid-cols-3 md:grid-cols-3 gap-3 mb-6 px-4 md:px-20 py-16">
                                <SocialCard
                                    icon={<Instagram className="w-8 h-8" />}
                                    name="INSTAGRAM"
                                    href="https://facebook.com"
                                />
                                <SocialCard
                                    icon={<Facebook className="w-8 h-8" />}
                                    name="FACEBOOK"
                                    href="https://twitter.com"
                                />
                                <SocialCard
                                    icon={<X className="w-8 h-8" />}
                                    name="TWITTER"
                                    href="https://youtube.com"
                                />
                                <SocialCard
                                    icon={<Linkedin className="w-8 h-8" />}
                                    name="BEHANCE"
                                    href="https://linkedin.com"
                                />
                                <SocialCard
                                    icon={<Youtube className="w-8 h-8" />}
                                    name="YOUTUBE"
                                    href="https://youtube.com"
                                />
                                <SocialCard
                                    icon={<Linkedin className="w-8 h-8" />}
                                    name="LINKEDIN"
                                    href="https://linkedin.com"
                                />
                            </div>


                        </div>

                        {/* Newsletter Section */}
                        <div className='px-4 md:px-20'>
                            <h3 className="text-sm font-semibold uppercase mb-4 tracking-wider inter-placeholder text-[#fdfcee] ">Subscribe to the newsletter</h3>
                            <form className="flex flex-col sm:flex-row gap-3 max-w-md">
                                <input
                                    type="email"
                                    placeholder="jane@framer.com"
                                    className="flex-1 px-4 py-3 rounded-md border border-white/10 bg-white/5 text-white placeholder-white/50 text-sm text-[#fdfcee]"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 rounded-md bg-white text-[#1d322d] font-medium hover:bg-gray-200 text-sm uppercase whitespace-nowrap"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column (50% width) */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col md:flex-row  items-center ">
                            {/* Menu Column */}
                            <div className="w-full md:w-1/2 relative bottom-12">
                                <h3 className="text-lg font-medium uppercase px-4 mb-4 py-8 md:text-center pb-2 text-[#f3ac85] inter-placeholder ">Menu</h3>
                                <div className="flex flex-col gap-3 text-sm px-4 md:items-center ">
                                    {['Home', 'About', 'Projects', 'Gallery', 'Videos', 'Blog', 'Review', 'Contact'].map((item) => (
                                        <a
                                            key={item}
                                            href={`/${item.toLowerCase()}`}
                                            className={`flex w-1/8 text-start hover:opacity-80 transition-opacity text-[16px] font-medium inter-placeholder hover:text-[#f3ac85] hover:underline animate-underline duration-900 ease-in-out text-[#fdfcee] text-start ${item === 'Home' ? 'text-[#f3ac85]' : ''}`}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Services Column */}
                            <div className="w-full md:w-1/2">
                                <h3 className="text-lg font-medium uppercase mb-4 tracking-wider border-b px-4 border-white/20 pb-2 text-[#f3ac85]">Services</h3>
                                <div className="flex flex-col gap-3 text-sm">
                                    {[
                                        'Residential Interior Design',
                                        'Commercial Interior Design',
                                        'Space Planning',
                                        'Design Consultation',
                                        'Lighting Design',
                                        'Custom Furniture Design',
                                        'Art and Accessory Procurement',
                                        'Color Consultation',
                                        'Outdoor and Landscape Design',
                                        'Renovation and Remodeling',
                                        'Project Management',
                                        'Styling and Staging'
                                    ].map((service) => (
                                        <a
                                            key={service}
                                            href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="hover:opacity-80 text-[#fdfcee] transition-opacity text-[16px] px-4 font-medium inter hover:text-[#f3ac85] hover:underline animate-underline duration-900 ease-in-out"
                                        >
                                            {service}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Company Name */}
                <div className="w-full flex justify-center items-center text-center font-inter px-4">
                    <div className="text-[clamp(80px,27vw,300px)]  md:text-[clamp(160px,28vw,500px)] lg:text-[clamp(200px,28vw,600px)] font-black text-[#f3ac85] leading-[0.85] tracking-[-0.04em] mb-10">
                        interim
                    </div>
                </div>


                <div className="text-white px-6 font-sans">
                    {/* Top Border Line */}
                    <div className="h-[1px] bg-white/10 w-full" />

                    {/* Footer Content */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-6 px-4 sm:px-6 md:px-8">

                        {/* Links Section */}
                        <div className="w-full md:w-auto flex justify-center md:justify-start">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center md:text-left">
                                <a href="/privacy" className="text-sm sm:text-md hover:underline inter-placeholder">Privacy Policy</a>
                                <a href="/terms" className="text-sm sm:text-md hover:underline inter-placeholder">Terms</a>
                            </div>
                        </div>

                        {/* Copyright Section */}
                        <div className="w-full md:w-auto flex flex-col sm:flex-row justify-center md:justify-end items-center gap-2 sm:gap-6 text-sm sm:text-md inter-placeholder text-center md:text-right">
                            <span>© Template by RealMehedi</span>
                            <span>Built in Framer</span>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

// Social Card Component
const SocialCard = ({ icon, name, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-white/5 rounded-lg md:p-4 hover:bg-white/10 py-4 md:py-10 hover:ring-1 ring-white/10 transition-colors hover:scale-105"
        >
            <div className="mb-2 text-white">
                {icon}
            </div>
            <span className="text-sm uppercase tracking-wider inter-placeholder my-2 text-white">{name}</span>
        </a>
    );
};



export default Footer
