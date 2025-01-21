import HText from "@/shared/HText";
import { ProductType, SelectedPage } from "@/shared/types";
import Product from "./Product";
import {
  LightBulbIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
  ClipboardIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const ourProducts: Array<ProductType> = [
  {
    icon: <LightBulbIcon className="h-6 w-6" />,
    title: <p className="text-left"> Strategic Planning</p>,
    description: (
      <>
        <p className="text-left">
          <b>Plan Smarter, Work Smarter</b>. <br /> Our Strategic Planning
          services help businesses assess their IT requirements and develop
          tailored system implementation plans. We work closely with you to
          understand your business goals and ensure your technology roadmap is
          aligned with your overall strategy. With NextUnit, you gain a partner
          who focuses on future-proofing your IT investments while maximizing
          your current infrastructure’s value.
        </p>
        <ul className="text-left pt-2 list-disc">
          <b>What You Get:</b>
          <li className="pt-2 ml-3">
            In-depth analysis of current IT systems and business processes.
          </li>
          <li className=" ml-3">
            Customized technology strategies aligned with your goals.
          </li>
          <li className="ml-3">
            Clear implementation plans designed to minimize risk and maximize
            ROI.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <PuzzlePieceIcon className="h-6 w-6" />,
    title: <p className="text-left">Architecture Planning</p>,
    description: (
      <>
        <p className="text-left">
          <b> Designing the Future of Your IT Infrastructure.</b> <br />
          NextUnit combines strategic insights with expertise in emerging
          technologies to create robust system architectures tailored to your
          business. Whether it’s designing a secure cloud environment or
          building an infrastructure to support growth, our solutions are
          scalable, reliable, and aligned with your vision.
        </p>
        <ul className="text-left pt-2 list-disc">
          <b>What You Get:</b>
          <li className="pt-2 ml-3">
            Logical system designs tailored to your needs.
          </li>
          <li className=" ml-3">
            Scalable and secure IT infrastructure recommendations.
          </li>
          <li className="ml-3">Guidance on adopting emerging technologies.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <ChartBarIcon className="h-6 w-6" />,
    title: (
      <>
        <p className="text-left">Operational Assessment</p>
        <p className="text-left">Benchmarking</p>
      </>
    ),
    description: (
      <>
        <p className="text-left">
          Optimize and Elevate Your IT Operations NextUnit’s Operational
          Assessment and Benchmarking services evaluate the performance and
          capacity of your IT environment. We identify inefficiencies, benchmark
          against industry standards, and provide actionable insights to enhance
          your IT operations.
        </p>
        <ul className="text-left pt-2 list-disc">
          <b>What You Get:</b>
          <li className="pt-2 ml-3">
            Comprehensive evaluation of your IT systems’ efficiency.
          </li>
          <li className=" ml-3">
            Performance benchmarks compared to industry standards.
          </li>
          <li className="ml-3">
            Actionable recommendations for improving reliability and capacity.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <ClipboardIcon className="h-6 w-6" />,
    title: <p className="text-left">Implementation Planning</p>,
    description: (
      <>
        <p className="text-left">
          <b>Seamless Deployments, Superior Results.</b>
          <br /> We ensure your IT solutions are rolled out smoothly and
          effectively. From planning to testing, NextUnit offers expert guidance
          throughout the implementation process, reducing risks and accelerating
          adoption.
        </p>
        <ul className="text-left pt-2 list-disc">
          <b>What You Get:</b>
          <li className="pt-2 ml-3">
            End-to-end planning for IT solution rollouts.
          </li>
          <li className=" ml-3">
            Thorough testing processes to ensure seamless integration.
          </li>
          <li className="ml-3">
            Expert advice on minimizing downtime and disruptions.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <LifebuoyIcon className="h-6 w-6" />,
    title: <p className="text-left">IT Support Services</p>,
    description: (
      <>
        <p className="text-left">
          <b> Reliable IT Support Without the Overhead.</b> <br />
          Small businesses without an in-house IT department can count on
          NextUnit for ongoing IT support and maintenance. Our team ensures your
          technology operates efficiently, letting you focus on growing your
          business.
        </p>
        <ul className="text-left pt-2 list-disc">
          <b>What You Get:</b>
          <li className="pt-2 ml-3">
            24/7 technical support tailored to small business needs.
          </li>
          <li className=" ml-3">
            Regular maintenance to prevent issues before they arise.
          </li>
          <li className="ml-3">
            Scalable solutions to grow with your business.
          </li>
        </ul>
      </>
    ),
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
    <section id="ourproducts" className="mx-auto w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurProducts)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="md:my-5 md:w-3/5"
        >
          <HText>OUR PRODUCTS</HText>
        </motion.div>

        {/* PRODUCTS */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 mt-5"
          initial="hidden"
          animate="visible"
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
