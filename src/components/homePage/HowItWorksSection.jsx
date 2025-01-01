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
            "Type your questions about the PDF content in natural language.",
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
                        <div className="flex" key={step.id}>
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500">
                                    <span className="text-base font-bold leading-7">{step.id}</span>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="mb-2 text-base font-bold leading-tight text-dark-grey-900">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-300  relative z-10 ">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                            {
                                step.id != 3 &&
                                <div className="rotate-90 lg:rotate-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="43"
                                        height="42"
                                        viewBox="0 0 43 42"
                                        fill="none"
                                    >
                                        <path
                                            d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                                            fill="#68769F"
                                        />
                                    </svg>
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