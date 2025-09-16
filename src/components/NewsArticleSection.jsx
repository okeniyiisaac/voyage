import NewArticleCard from "./NewArticleCard"

const NewsArticleSection = () => {
  return (
    <div className='lg:px-8 px-3 mt-20'>
            <section data-aos="fade-right" data-aos-duration="2000" className="w-full text-center pb-20">
                <div className="items-start lg:items-center gap-6 ">
                    <div className="">
                        <span className="text-[#1CA8CB] text-base font-medium sub-title mb-2">
                            News & Updates
                        </span>
                        <div className='flex justify-center'>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[3.5rem] leading-[2rem] w-[65%]">
                                Our Latest News & Articles
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
    
            <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                <NewArticleCard articleBg="https://turmet-react.vercel.app/assets/img/news/04.jpg" articleTitle="The Magic of Sunrise at Poon Hill"/>
                <NewArticleCard articleBg="https://turmet-react.vercel.app/assets/img/news/05.jpg" articleTitle="Why Travel is the Best Investment"/>
                <NewArticleCard articleBg="https://turmet-react.vercel.app/assets/img/news/06.jpg" articleTitle="Tips for Stress-Free Travel"/>
                <NewArticleCard articleBg="https://turmet-react.vercel.app/assets/img/news/07.jpg" articleTitle="Discovering Hidden Gems"/>
            </div>
        </div>
  )
}

export default NewsArticleSection