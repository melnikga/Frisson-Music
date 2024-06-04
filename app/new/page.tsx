
import getNews from "@/actions/getNews";
import Header from "@/components/Header"
import NewsSlider from "@/components/NewsSlider";


export default async function Home() {
  const  data  = await getNews();
  return (
    <div
    className='
    bg-[#e4e4e4] 
    rounded-lg 
    h-full 
    w-full 
    overflow-hidden 
    overflow-y-auto'
    >
      <Header>
        <div className="mb-2">
          <h1 
            className="
            text-black 
              text-3xl 
              font-semibold
            ">
              Welcome back
          </h1>
          <div 
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
          >
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
        </div>
          <NewsSlider news={data}/>

      </div>
    </div>
  )
}
