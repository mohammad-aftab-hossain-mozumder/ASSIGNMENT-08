import image from '../../assets/lin.png'
const Footer = () => {
  return (
    <footer className="bg-black text-[#A1A1AA]">
      <div className="grid grid-cols-1 lg:grid-cols-6 sm:grid-cols-2 gap-5 p-9">
        <div className="lg:col-span-2 col-span-1">
          <h1 className='font-bold text-xl text-white'>CONTACT</h1>
          <p>
            Street: 2017 Harron Drive <br />
            City: Baltimore <br />
            State Full: Maryland <br />
            Zip Code: 21201 <br />
            Phone Number: 443-498-7166 <br />
            Mobile Number: 443-934-9384</p>
        </div>
        <div className="">
          <h1 className='font-bold text-xl text-white'>Company</h1>
          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>
        <div className="">
          <h1 className='font-bold text-xl text-white'>Services</h1>
          <ul>
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div className="">
          <h1 className='font-bold text-xl text-white'>Information</h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className="">
          <h1 className='font-bold text-xl mb-2 text-white'>Social Links</h1>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current border-2 rounded-[20px] p-1 text-white">
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
            <p>@hero.io.net</p>
          </div>
          <div className="flex items-center gap-1 my-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-white">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
            <p>@hero.io.net</p>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="h-[1em] opacity-100 text-xl text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <p>support@hero.io</p>
          </div>
        </div>
      </div>
      <div className="text-center text-white border-gray-600 py-5">
        <p className='lg:text-[15px] text-[10px]'>&copy; 2025 HERO.IO. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer