import { cn } from "@/lib/utils";

import { 
    IconUserCircle, 
    IconEdit, 
    IconBrain, 
    IconLayout, 
    IconDashboard, 
    IconSearch,
    IconGlobe,
    IconLock, 
  } from '@tabler/icons-react';
  
export function FeaturesSection() {
    const features = [
        {
          title: "Clerk Authentication",
          description: "Secure and seamless user authentication using Clerk for a robust login experience.",
          icon: <IconUserCircle />,
        },
        {
          title: "Rich Text Editor",
          description: "Create and format content effortlessly with the intuitive TipTap editor.",
          icon: <IconEdit />,
        },
        {
            title: "Security & Privacy",
            description: "Your data is protected with state-of-the-art security and privacy features.",
            icon: <IconLock />,
        },          
        {
          title: "Context-Aware Prompts",
          description: "Send precise context with prompts using LangChain for smarter responses.",
          icon: <IconBrain />,
        },
        {
          title: "Modern UI/UX Design",
          description: "Enjoy a sleek, responsive, and user-friendly interface designed for all devices.",
          icon: <IconLayout />,
        },
        {
          title: "Comprehensive Dashboard",
          description: "Access detailed analytics and manage everything from a single intuitive dashboard.",
          icon: <IconDashboard />,
        },
        {
          title: "AI-Powered Search",
          description: "Find what you need quickly with intelligent, context-aware search capabilities.",
          icon: <IconSearch />,
        },
        {
          title: "Multi-language Support",
          description: "Support for multiple languages, allowing users to interact in their preferred language.",
          icon: <IconGlobe  />,
        },
      ];
      
  return (
    <>
    <div id="features" className="px-8 mt-10">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
        Packed with thousands of features
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
            Unlock the full potential of your PDFs with AI-powered features—from text generation and context-driven prompts to real-time insights and data processing.
        </p>
    </div>
    (<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
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
