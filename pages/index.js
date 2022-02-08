import Head from 'next/head'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import BigCard from '../Components/BigCard'
import BodyBanner from '../Components/BodyBanner'
import Footer from '../Components/Footer'

export default function Home({exploreData}) 
{
  return (
    <div className="">
      <Head>

        <title>AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/*Header*/}
    <Header/>
    {/*Banner*/}
    <Banner/>
    <main className='overflow-x-hidden'>
    <section>
        <h2 className='m-[3rem] text-[2rem] font-semibold mobilex:text-[1.5rem] mobilex:mx-[2rem]'>Inspiration for your next trip</h2>
        <div className = 'cardContainer mx-[2rem] o my-10 flex tabx:w-[100vw] overflow-x-scroll'>
          {exploreData?.map((item)=>(
            <Card key={item.img} img = {item.img} location = {item.location} distance = {item.distance}/>
          ))}
        </div>
      </section>
    <section>
    <h2 className='mx-[3rem] text-[2rem] font-semibold mobilex:text-[1.5rem] mobilex:mx-[2rem]'>Discover Airbnb Experiences</h2>
     <div className='flex justify-centre p-10 mobile:flex-col mobilex:p-5'>
      <BigCard heading = {`Things to do  on your trip`} img = {'https://images.pexels.com/photos/2450296/pexels-photo-2450296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
      <BigCard heading = {'Things to do from home'} img = {'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
     </div>
    </section>
    </main>
    <BodyBanner/>
    <Footer/>
    </div>
  )
}
 export async function getStaticProps(){
  const exploreData = await fetch('https://jsonkeeper.com/b/4E88').then((res)=>res.json())
  return{
    props:{
      exploreData:exploreData
    }
  }
 }