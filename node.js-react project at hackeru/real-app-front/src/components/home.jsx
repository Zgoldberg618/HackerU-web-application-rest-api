import PageHeader from "./common/pageHeader";

const Home = () => {
  return (
    <>
      <PageHeader
        title={
          <>
            Real<i className="bi bi-geo-fill"></i>App Home Page
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

export default Home;
