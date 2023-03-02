import { features } from "../constants"
import styles, { layout } from "../style"
import Button from './Button'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] gap-6 feature-card`}>
    <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
      
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          ¿Por qué somos la mejor <br className="sm:block hidden" />
          opción para tu presencia digital?
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          En Dr.Web, somos una agencia digital especializada en la
          creación de páginas web de alta calidad, que te ayudarán a
          destacar en el mercado y a impulsar tu negocio al siguiente
          nivel.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business