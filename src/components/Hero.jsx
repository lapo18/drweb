import styles from "../style"
import { discount, robot } from '../assets'
import GetStarted from "./GetStarted"

const Hero = () => {
  return (
    <section
      id="home"
      className={` flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-8 h-8" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{' '}
            <span className="text-white ">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]">
            Dr. Web <br className="xs:block hidden" />{' '}
            <span className="text-gradient">Tu solucion</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] w-full">
          Digital
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          En Dr. Web, creemos en la innovación y el progreso. Te
          brindamos soluciones digitales personalizadas para
          satisfacer las necesidades de tu negocio.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 m-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-full h-full relative z-[5]"
        />
        <div className="absolute z-0 w-2/5 h-[35%] top-0 pink__gradient "></div>
        <div className="absolute z-[1] w-4/5 h-4/5 rounded-full bottom-40 white__gradient "></div>
        <div className="absolute z-0 w-1/2 h-1/2 right-20 bottom-20 blue__gradient "></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero