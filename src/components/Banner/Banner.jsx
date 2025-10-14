import heropic from '../../assets/hero.png'
const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='text-3xl my-5'>We Build <br />
                Productive Apps</h1>
            <p className='my-5 text-xl'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="my-5 flex gap-4">
                <a className='btn' href="https://play.google.com/store/apps/details?id=APP_PACKAGE_NAME">Google Play</a>
                <a className='btn' href="https://apps.apple.com/app/idYOUR_APP_ID">App Store</a>
            </div>
            <img src={heropic} alt="" />
            <section className='text-white p-5 px-50 w-full my-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                <h1 className='text-4xl my-10'>Trusted by Millions, Built for You</h1>
                <div className="flex justify-between items-center my-10">
                    <div className="text-2xl">
                        <p>Total Downloads</p>
                        <h1>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className="text-2xl">
                        <p>Total Reviews</p>
                        <h1>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className="text-2xl">
                        <p>Active Apps</p>
                        <h1>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner