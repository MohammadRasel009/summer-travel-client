
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/LzQh8nZm/img-bg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h2 className="mb-5 text-5xl font-semibold">Summer  </h2>
          <h1 className="mb-5 text-5xl font-bold">Travel</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
