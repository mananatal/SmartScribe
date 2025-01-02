import { ChevronRight } from "lucide-react";
import React from "react";

function HowItWorksSection() {

const steps = [
    {
        id: 1,
        title: "Upload Your PDF",
        description:
            "Simply upload your PDF document to our secure SmartScribe platform.",
    },
    {
        id: 2,
        title: "Ask Questions",
        description:
            "Write your question about the PDF content, select it, and then press the AI Assist button to get answer.",
    },
    {
        id: 3,
        title: "Get Instant Answers",
        description:
            "Receive accurate, AI-generated answers based on your PDF content.",
    },
];


return (
    <div id="working" className="max-w-sm md:max-w-7xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 ">
        <div className="container mx-auto mb-10 flex flex-col items-center gap-16">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-2 text-center">
                    <h2 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                        How SmartScribe works?
                    </h2>

                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10">
                {
                    steps.map((step) => (
                        <div className="flex  items-center" key={step.id}>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500">
                                    <span className="text-base font-bold leading-7">{step.id}</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm max-w-sm text-neutral-600 dark:text-neutral-300  relative z-10 ">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                            {
                                step.id != 3 &&
                                <div className="rotate-90 lg:rotate-0">
                                    <ChevronRight className="h-12 w-12 text-neutral-600"/>
                                </div>
                            }
                        </div>
                    ))
                }


            </div>
        </div>
    </div>
);
}

export default HowItWorksSection;
