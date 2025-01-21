import { SelectedPage } from "@/shared/types";

import { motion } from "framer-motion";
import HText from "@/shared/HText";

// const classes: Array<ClassType> = [
//   {
//     name: "Weight Training Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image1,
//   },
//   {
//     name: "Yoga Classes",
//     image: image2,
//   },
//   {
//     name: "Ab Core Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image3,
//   },
//   {
//     name: "Adventure Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image4,
//   },
//   {
//     name: "Fitness Classes",
//     image: image5,
//   },
//   {
//     name: "Training Classes",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     image: image6,
//   },
// ];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="whynextunit" className="w-full bg-home-img py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.WhyNextUnit)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Why NextUnit</HText>
            <ul className="py-5 list-disc ml-4">
              <li>
                Expertise: Proven experience in aligning IT strategies with
                business goals.
              </li>
              <li className="pt-2">
                Reliability: Dependable support for small businesses and growing
                organizations.
              </li>
              <li className="pt-2">
                Customization: Tailored solutions to meet your unique needs.
              </li>
              <li className="pt-2">
                Cost-Effectiveness: Affordable services designed to maximize
                cost efficient.
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
