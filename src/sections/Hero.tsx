import Button from "../components/Button";
import arrowRight from "../assets/icons/arrow-right.svg";
import { statistics } from "../constants/index";

function Hero() {
  return (
    <section
      id="home"
      className="w-full 
      flex xl:flex-row flex-col justify-center 
      min-h-screen gap-10 max-container 
      border-2 border-red-500 "
    >
      <div
        className="relative xl:w-2/5 flex flex-col 
      justify-center items-center w-full max-xl:padding-x pt-28"
      >
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nike</span>
          Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={"Shop now"} iconURL={arrowRight}></Button>
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
