import heropic from '../../assets/hero.png'
const Banner = () => {
    return (
        <div className='flex my-15 flex-col justify-center items-center text-center'>
            <h1 className='text-5xl text-[#4538ac] font-black my-5'>We Build <br />
                Productive Apps</h1>
            <p className='my-5 text-xl'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="my-10 flex gap-4">
                <a className='btn bg-[#4538ac]' href="https://play.google.com/store/apps/details?id=APP_PACKAGE_NAME">Google Play</a>
                <a className='btn ' href="https://apps.apple.com/app/idYOUR_APP_ID">App Store</a>
            </div>
            <img src={heropic} alt="" />
            <section className='text-white p-5 px-50 w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                <h1 className='text-4xl font-black my-10'>Trusted by Millions, Built for You</h1>
                <div className="flex justify-between items-center my-10">
                    <div>
                        <p>Total Downloads</p>
                        <h1 className='text-4xl font-bold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <h1 className='text-4xl font-bold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h1 className='text-4xl font-bold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner