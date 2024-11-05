import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Product = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 w-full sm:w-72 sm:h-96 md:w-80 md:h-[400px] lg:w-96 lg:h-[450px] rounded-md border-2 border-gray-100 px-5 py-8 text-center overflow-hidden"
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4 sm:p-6 lg:p-8">
          {icon}
        </div>
      </div>
      <h4 className="text-lg font-bold sm:text-xl lg:text-2xl">{title}</h4>
      <p className="my-3 text-sm sm:text-base lg:text-lg">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 sm:text-base"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default Product;
