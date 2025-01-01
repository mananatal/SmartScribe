import React from 'react';
import Logo from '../Logo';
import Link from 'next/link';
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import { Copyright } from 'lucide-react';

const Footer = ({handleSmoothScroll}) => {

    const footerItems=[
        {
            id:"about",
            title:"About Us"
        },
        {
            id:"features",
            title:"Features"
        },
        {
            id:"working",
            title:"How it Works"
        },
        {
            id:"testimonials",
            title:"Testimonials"
        },
        {
            id: "#",
            title: "Resources",
        },
        {
            id: "#",
            title: "Partners",
        },
        {
            id: "#",
            title: "Help",
        },
        {
            id: "#",
            title: "Terms",
        },
    ]

  return (
    <div className="w-full bg-slate-100 ">
      <div className="container mx-auto flex flex-col">
        <div className=" flex w-full flex-col items-center">
          <div className="pb-6 shrink-0 pt-10">
            <Logo/>
          </div>
          <div className=" flex flex-col items-center gap-6">
          
            <div className="flex flex-wrap items-center justify-center gap-5 gap-y-3 lg:flex-nowrap lg:gap-12">
                {
                    footerItems.map((item,index)=>(
                        <Link
                            key={index}
                            href={'#about'}
                            className="text-sm font-medium leading-7 text-dark-grey-600"
                            onClick={(e) => handleSmoothScroll(e, `#${item.id}`)}
                        >
                            {item.title}
                        </Link>
                    ))
                }
            </div>
            <div className="flex items-center gap-8">
              <Link href="https://www.linkedin.com/in/manan-atal" target='_blank'>
                <IconBrandLinkedin/>
              </Link>
              <Link href="https://instagram.com/mananatal"  target='_blank'>
                <IconBrandInstagram/>
              </Link>
              <Link href="https://github.com/mananatal" target='_blank'>
                <IconBrandGithub/>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm font-normal text-dark-grey-500 text-center">
          <p className='flex items-center justify-center gap-2'><Copyright/> 2025 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
