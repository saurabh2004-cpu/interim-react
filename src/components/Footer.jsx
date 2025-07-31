import styled from 'styled-components';

const Footer = () => {
    return (
        <div>
            <div className="bg-[#1f3630] py-16 mx-2 md:mx-10 sm:px-6 lg:px-8 rounded-lg">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4" >
                        {/* Left Side - Contact Info */}
                        <div className="  px-8 text-[#fdfcee]" >
                            <div className="space-y-6">
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
                <footer className="bg-[#1d322d] text-white px-6 mx-10 my-10 rounded-lg py-10 font-inter">
                    <div className="flex flex-col md:flex-row justify-space-between gap-12 mb-8">
                        {/* Left Column */}
                        <div className="flex flex-col gap-8 flex-1">
                            {/* Social Section */}
                            <div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-wrap gap-4">
                                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="uppercase text-sm hover:opacity-80">FACEBOOK</a>
                                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="uppercase text-sm hover:opacity-80">TWITTER</a>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        <a href="https://behance.com" target="_blank" rel="noopener noreferrer" className="uppercase text-sm hover:opacity-80">BEHANCE</a>
                                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="uppercase text-sm hover:opacity-80">YOUTUBE</a>
                                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="uppercase text-sm hover:opacity-80">LINKEDIN</a>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter Section */}
                            <div>
                                <h3 className="text-base font-medium uppercase mb-4">Subscribe to the newsletter</h3>
                                <form className="flex gap-2 max-w-md">
                                    <input
                                        type="email"
                                        placeholder="jane@farmer.com"
                                        className="flex-1 px-4 py-3 rounded-md border border-white/10 bg-white/5 text-white placeholder-white/50"
                                    />
                                    <button
                                        type="submit"
                                        className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-gray-200"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex-2">
                            <div className="flex flex-col md:flex-row gap-12">
                                {/* Menu */}
                                <div>
                                    <h3 className="text-base font-semibold uppercase mb-4">Menu</h3>
                                    <div className="flex flex-col gap-2 text-sm">
                                        {['Home', 'About', 'Projects', 'Gallery', 'Videos', 'Blog', 'Review', 'Contact'].map((item) => (
                                            <a key={item} href={`/${item.toLowerCase()}`} className="hover:opacity-80">{item}</a>
                                        ))}
                                    </div>
                                </div>

                                {/* Services */}
                                <div>
                                    <h3 className="text-base font-semibold uppercase mb-4">Services</h3>
                                    <div className="flex flex-col gap-2 text-sm">
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
                                            <a key={service} href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z-]/g, '')}`} className="hover:opacity-80">
                                                {service}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
        </div>
    )
}


export default Footer
