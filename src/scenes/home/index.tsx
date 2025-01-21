import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="gap-16 bg-home-img py-10 md:h-full md:pb-0 ">
      {/* IMAGE AND MAIN HEADER */}

      <motion.div
        className="md:flex mx-auto w-5/6 flex-col items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-48 md:basis-3/5 ">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="mt-8 text-lg uppercase font-montserrat text-text-color-light">
              IT transformation & modernization
            </p>
            <p className="mt-8 text-6xl text-text-color-blue font-bold">
              Accelerate Growth. Reduce Costs.
            </p>
            <p className="mt-2 text-6xl text-text-color-blue font-bold">
              NextUnit!
            </p>
            <p className=" mt-8  text-lg uppercase font-mono text-text-color-light">
              Drive your business forward with comprehensive, secure, and
              scalable IT solutions.
            </p>
          </motion.div>
        </div>

        <div className="z-10 mt-20 md:basis-3/5">
          {/* HEADINGS */}

          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="mt-8 text-lg">
              NextUnit IT consulting company is advisory services company that
              helps clients assess different technology strategies and, in doing
              so, align their technology strategies with their business or
              process strategies. NextUnit supports customer IT initiatives by
              providing strategic, architectural, operational, and
              implementation planning. Additionally, we offer comprehensive IT
              services support for small businesses that may not have an
              in-house IT department, ensuring their technology runs smoothly
              and efficiently.
            </p>
          </motion.div>
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join now
            </ActionButton>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
