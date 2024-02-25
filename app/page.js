import Feed from "@components/Feed.component";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> AI-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
    Promptify, a contemporary open-source AI prompting solution, facilitates the exploration, generation, and dissemination of imaginative prompts
    </p>

    <Feed />
  </section>
);

export default Home;