import AdminCard from "./components/AdminCard";
import ArticleCard from "./components/ArticleCard";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import StoryCard from "./components/StoryCard";


export default function Home() {
  return (
    <main className="min-h-screen ml-[240px] w-[calc(100%-240px)] bg-[#F8FAFB] pb-4">
      {/* ********************nav part******************** */}
      <Navbar />

      <div className="pl-5 pt-8 space-y-6">

        <section className="pr-5">
          <h2 className="text-[35px] font-semibold">Hello Admin,</h2>
          <p className="text-[17px] text-[#A0A3BD] ">This is what we got you for today.</p>
          <div className="flex justify-between w-full mt-5">
            <AdminCard heading="Articles" text="4,950 New Updates" image='helloadmin1.png' />
            <AdminCard heading="Categories" text="10,275 New Updates" image='helloadmin2.png' />
            <AdminCard heading="Stories" text="4,193 New Updates" image='helloadmin3.png' />
            <AdminCard heading="Advertisements" text="928 New Updates" image='helloadmin4.png' />

          </div>
        </section>
        {/* ***************Top articles ***** */}
        <section>
          <div className="flex justify-between w-full pr-5">
            <h2 className="text-[24px] font-semibold">Top Articles</h2>
            <a className="text-[20px] text-[var(--violet-text)] font-semibold" href="">See all</a>
          </div>

          <div className=" space-x-2 mt-3 overflow-x-auto whitespace-nowrap ">
            <ArticleCard
              image='toparticlesmain1.png'
              tags={['Branding', 'Communication', 'Branding']}
              type='Buisness'
              status='Created'
              heading='7 Rules of Effective Branding' />
            <ArticleCard
              image='toparticlemain3.png'
              tags={['World', 'Population']}
              type='Economy'
              status=''
              heading='Research on biodiversity an..' />
            <ArticleCard
              image='toparticlemain2.png'
              tags={['Politics', 'Defence']}
              type='Politics'
              status=''
              heading='Close and historical ties to h..' />
            <ArticleCard
              image='toparticlesmain1.png'
              tags={['Branding', 'Communication', 'Branding']}
              type='Buisness'
              status='Created'
              heading='7 Rules of Effective Branding' />


          </div>
        </section>
        {/* ***************Top Stories ***** */}
        <section>
          <div className="flex justify-between w-full pr-5">
            <h2 className="text-[24px] font-semibold">Top Stories</h2>
            <a className="text-[20px] text-[var(--violet-text)] font-semibold" href="">See all</a>
          </div>

          <div className="mt-3 w-full space-x-2 overflow-hidden overflow-x-auto whitespace-nowrap">
            <StoryCard
              image='topstory1.png'
              type='Buisness'
              heading='How 7 lines code turned into
               $36 Billion Empire'/>  <StoryCard
              image='topstory1.png'
              type='Buisness'
              heading='How 7 lines code turned into
               $36 Billion Empire'/>  <StoryCard
              image='topstory1.png'
              type='Buisness'
              heading='How 7 lines code turned into
               $36 Billion Empire'/>

            <StoryCard
              image='topstory1.png'
              type='Buisness'
              heading='How 7 lines code turned into
               $36 Billion Empire'/> <StoryCard
              image='topstory1.png'
              type='Buisness'
              heading='How 7 lines code turned into
               $36 Billion Empire'/> <StoryCard
              image='topstory1.png'
              type='Buisness'
              heading='How 7 lines code turned into
               $36 Billion Empire'/>



          </div>
        </section>
        <div className="flex justify-between w-full pr-5">
          <h2 className="text-[24px] font-semibold">Advertisements</h2>
          <a className="text-[20px] text-[var(--violet-text)] font-semibold" href="">See all</a>
        </div>
        <section>

          <div className="flex mt-3 space-x-2 overflow-hidden overflow-x-auto">
            <Card
              title="Build your business"
              para="lorem"
              image="topstory1.png" />
            <Card
              title="Build your business"
              para="lorem"
              image="topstory1.png" />
           
              </div>
        </section>
      </div>
    </main>
  );
}
