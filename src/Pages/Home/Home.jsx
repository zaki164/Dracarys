import { Category, FollowInsta, Landing, LatestBlogs, OurAdvantages, Store, Testimonials, Trending } from "../../Sections";

const Home = () => {
  return (
    <>
      <Landing />
      <Category />
      <Trending />
      <LatestBlogs />
      <Store />
      <FollowInsta />
      <Testimonials />
      <OurAdvantages />
    </>
  );
};

export default Home;
