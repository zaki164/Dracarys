import { Category, FollowInsta, Landing, LatestBlogs, OurAdvantages, Testimonials, Trending } from "../../Sections";

const Home = () => {
  return (
    <>
      <Landing />
      <Category />
      <Trending />
      {/* <LatestBlogs /> */}
      {/* <FollowInsta /> */}
      <Testimonials />
      <OurAdvantages />
    </>
  );
};

export default Home;
