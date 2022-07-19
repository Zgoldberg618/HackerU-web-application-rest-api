import PageHeader from "./common/pageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            About Real<i className="bi bi-geo-fill"></i>App
          </>
        }
      />
      <div className="row">
        <div className="col-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores
            itaque aspernatur.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
