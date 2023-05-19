import Image from "next/image"
import styles from "./utils/style"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Business from "./components/Business"
import Billing from "./components/Billing"
import CardDeal from "./components/CardDeal"
import Testimonials from "./components/Testimonials"
import Clients from "./components/Clients"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          {/* <Clients /> */}
          <Footer />
        </div>
      </div>
    </>
  )
}
