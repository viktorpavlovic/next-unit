import HText from "@/shared/HText";
import { ProductType, SelectedPage } from "@/shared/types";
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Product from "./Product";
import {
  LightBulbIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
  ClipboardIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import ActionButton from "@/shared/ActionButton";

const ourProducts: Array<ProductType> = [
  {
    icon: <LightBulbIcon className="h-6 w-6" />,
    title: "Strategic Planning",
    description:
      "We offer advisory services to help clients assess their IT needs and formulate effective system implementation plans.",
  },
  {
    icon: <PuzzlePieceIcon className="h-6 w-6" />,
    title: "Architecture Planning",
    description:
      " Our services combine strategic plans with knowledge of emerging technologies to create logical system designs and the supporting infrastructure needed to meet customer requirements.",
  },
  {
    icon: <ChartBarIcon className="h-6 w-6" />,
    title: "Operational Assessment/Benchmarking",
    description:
      "We evaluate the operating efficiency and capacity of a client’s IT environment to identify opportunities for improvement.",
  },
  {
    icon: <ClipboardIcon className="h-6 w-6" />,
    title: "Implementation Planning",
    description:
      "We advise on the rollout and testing of new solutions to ensure seamless and efficient deployments.",
  },
  {
    icon: <LifebuoyIcon className="h-6 w-6" />,
    title: "IT Support Services",
    description:
      "Our team provides ongoing support and maintenance to small businesses, ensuring they have reliable and responsive technical assistance without the need for an internal IT department.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurProducts = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourproducts" className="mx-auto  w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurProducts)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>OUR PRODUCTS</HText>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {ourProducts.map((product: ProductType) => (
            <Product
              key={product.title}
              icon={product.icon}
              title={product.title}
              description={product.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        {/* <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex "> */}
        {/* GRAPHIC */}
        {/* <img
            className="mx-auto"
            src={BenefitPageGraphic}
            alt="benefits-page-graphic"
          /> */}
        {/* DESCRIPTION */}
        {/* <div> */}
        {/* TITLE */}
        {/* <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILIONS OF HAPPY MEMBERS GETTING
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div> */}

        {/* DESCRIPT */}
        {/* <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div> */}

        {/* BUTTON  */}
        {/* <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z=[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div> */}
      </motion.div>
    </section>
  );
};

export default OurProducts;
