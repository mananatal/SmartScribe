import { cn } from "@/lib/utils";
import { IconEye, IconHeart, IconTarget, IconUsers } from "@tabler/icons-react";


export function AboutUs() {
    const aboutUsFeatures = [
        {
          title: "Our Vision",
          description:
            "Empowering users with AI-driven tools to simplify complex tasks and enhance productivity. Our vision is to make knowledge management smarter and more efficient.",
          icon: <IconEye />,
        },
        {
          title: "Our Mission",
          description:
            "To deliver cutting-edge AI solutions that help students, professionals, and organizations manage, process, and interact with information effortlessly.",
          icon: <IconTarget />,
        },
        {
          title: "Team of Innovators",
          description:
            "A diverse group of thinkers and builders passionate about creating smart solutions for real-world challenges.",
          icon: <IconUsers />,
        },
        {
          title: "Customer-Centric Approach",
          description:
            "We prioritize our users by designing intuitive tools, providing timely support, and constantly evolving to meet their needs.",
          icon: <IconHeart />,
        },
      ];
      
      
  return (
    <>
    <div id="about" className="py-8 ">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
            About Us
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            At SmartScribe, we’re on a mission to redefine how you interact with knowledge. Our AI-powered platform transforms static PDFs into dynamic, interactive tools, making learning faster, smarter, and more engaging. Whether you’re a student, professional, or lifelong learner, SmartScribe empowers you to ask, explore, and achieve more.
        </p>
    </div>
    (<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-6 max-w-7xl mx-auto">
      {aboutUsFeatures.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>)
    </>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    (<div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>)
  );
};
