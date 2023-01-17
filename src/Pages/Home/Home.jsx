import { Category, Landing, OurAdvantages, Testimonials, Trending } from "../../Sections";
// import { FollowInsta, LatestBlogs } from "../../Sections";

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
