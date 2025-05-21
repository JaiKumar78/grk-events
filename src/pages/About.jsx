import { Link } from 'react-router-dom';
import assets from '../assets/assets'
import FadeCarousel from '../components/FadeCarousel'
import TestimonialSlider from '../components/TestimonialSlider';

const stats = [
  { value: '+12', label: 'Years of Experience' },
  { value: '+1000', label: 'Events Delivered' },
  { value: '99%', label: 'Happy Clients' },
  { value: '+10k', label: 'Moments Captured' },
];


const About = () => {
  return (
    <>
      <div className='py-10 space-y-2 px-6 md:px-16 lg:px-40 max-w-4/5 mx-auto'>
        <p className='base-mustard text-mustard'>ABOUT US</p>
        <p className='main-statement text-main'>Every step of the way, you can count on us to bring your dreams to life</p>
      </div>
      <div className='w-full'>
        <FadeCarousel />
      </div>
      <div className=' py-15 px-6 md:px-16 lg:px-40 max-w-4/5 mx-auto flex flex-col justify-center items-center gap-10 lg:flex-row'>
        <div className='flex flex-col gap-3 items-start justify-center lg:w-1/2'>
          <p className='base-mustard text-mustard'>OUR MISSION</p>
          <p className='main-statement text-main text-left'>Where Every Detail Celebrates You.</p>
          <p className='base-mustard text-left'><b>We are committed to excellence, creativity, and heartfelt service in everything we do.</b> Every event we design is a promise to deliver not just an occasion, but a lasting memory — where every detail matters and every story shines.</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div>
            <img
              src={assets.stagedecorations2}
              alt=""
              className="max-w-[12rem] sm:max-w-72 max-h-32 sm:max-h-36 rounded-lg border-2 border-main"
            />
          </div>
          <div className="flex gap-3">
            <img
              src={assets.threerex}
              alt=""
              className="max-w-[12rem] sm:max-w-72 max-h-32 sm:max-h-36 rounded-lg border-2 border-main"
            />
            <img
              src={assets.stagedecorations5}
              alt=""
              className="max-w-[12rem] sm:max-w-72 max-h-36 sm:max-h-40 rounded-lg border-2 border-main"
            />
          </div>
        </div>
      </div>

      {/* stats */}
      <div
        className="w-full h-auto py-10 bg-center bg-cover flex items-center justify-center text-white text-3xl font-bold"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            linear-gradient(rgba(10, 74, 74, 0.7), rgba(10, 74, 74, 0.7)),
            url(${assets.experiencebg})
          `,
        }}
      >
        <div className='px-6 md:px-16 lg:px-40 max-w-4/5 mx-auto flex flex-col gap-3'>
          <p className='text-mustard base-mustard'>OUR VALUE</p>
          <p className='main-statement font-medium'>Passion. Precision. Personalization</p>
          <p className='base-mustard'>We believe every event should reflect the heart of the people behind it. Guided by creativity, integrity, and a client-first approach, we transform dreams into experiences and celebrations into lifelong memories.</p>
          <div className="w-full flex justify-center mt-10">
            <div className="xl:p-15 p-10 bg-white/20 backdrop-blur-[20px] rounded-[40px] shadow-md flex items-center gap-10 xl:gap-0 justify-around flex-wrap">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center px-4">
                  <p className="text-4xl md:text-6xl font-bold text-mustard leading-none">{stat.value}</p>
                  <p className="text-mustard text-base md:text-lg font-normal mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className='py-10 flex flex-col gap-3'>
        <p className='text-main main-statement'>What Our Clients Say</p>
        <p  className='base-mustard'>Every event we create holds a story close to someone's heart. Here's what our amazing clients have shared about their journey with us</p>
        <div className='w-full flex flex-wrap mt-5 items-center'>
          <TestimonialSlider />
        </div>
        {/* <div>
          <a href="" target='_blank' className='link-btn fle'>
              <img src={assets.google_icon} alt="" />
              Reviews
          </a>
        </div> */}
        <div className='mt-10 w-fit mx-auto'>
          <a href="https://www.google.com/search?sca_esv=340a42e2eabdb65d&rlz=1C1RXQR_enIN1050IN1050&sxsrf=AHTn8zr1C2k8tnuUlywkdKqzUWQoN6k_JQ:1747819681921&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzZke5W4L0mC0FEHSWkKfkaj2myvbbfEMxQsKIZVCe5ncRJ8vTiAtIMS6IRS7qg6AFMdI7M7ZC7NLRVfR01ZPLvP9-02_&q=GRK+Events+Reviews&sa=X&ved=2ahUKEwjn05ban7SNAxVNcGwGHclmI0UQ0bkNegQIJhAD&biw=1920&bih=911&dpr=1" target="_blank" rel="noopener noreferrer" className="link-btn w-fit flex items-center gap-2">
            <img src={assets.google_icon} alt="Google Icon" className="w-5 h-5" />
            Reviews
          </a>
        </div>
      </div>

      <div className='flex flex-col gap-7 items-center px-6 py-10 md:px-16 lg:px-40 max-w-4/5 mx-auto'>
        <p className='font-cursive base-mustard text-2xl md:text-3xl'>Every story shared here inspires us to create even more magical moments. Your memories are not just events to us — they are milestones we are honored to be part of.</p>
        <Link 
            to='/contact'
            onClick={() =>setActivePage('/contact')}
            className='link-btn w-fit text-white bg-mustard hover:text-mustard hover:bg-transparent hover:border-mustard inline-block'
          >CONTACT US</Link>
      </div>
    </>
  )
}

export default About