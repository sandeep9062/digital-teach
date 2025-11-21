"use client";

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Monitor,
  Smartphone,
  Brush,
  PencilRuler,
  Layers,
  Globe,
} from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";

const services = [
  {
    title: "Digital Marketing",
    desc: "We are a Google partner and deliver powerful digital marketing strategies to help you expand your business with real growth and conversions.",
    longDesc:
      "Our digital marketing services are designed to increase your online visibility and drive measurable results. We use a combination of proven strategies to attract, engage, and convert your target audience. Whether you're looking to improve your search engine rankings, run effective ad campaigns, or build a strong social media presence, our team of experts is here to help.",
    icon: <Monitor className="w-10 h-10 text-white" />,
    image: "/1.jpg",
    color: "bg-[#2E9AFE]",
    slug: "digital-marketing",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
    ],
    faqs: [
      {
        question: "What is digital marketing?",
        answer:
          "Digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps.",
      },
      {
        question: "Why is SEO important?",
        answer:
          "SEO (Search Engine Optimization) is crucial for improving the visibility of your website in search engine results, which in turn can drive more organic traffic and increase leads and sales.",
      },
    ],
    caseStudies: [
      {
        title: "Case Study 1: Boosting Organic Traffic by 200%",
        description:
          "Learn how we helped a local business increase their online visibility and drive a 200% increase in organic traffic through a comprehensive SEO strategy.",
        image: "/5.jpg",
      },
      {
        title: "Case Study 2: A Winning PPC Campaign",
        description:
          "This case study explores how we created a highly effective PPC campaign that generated a 5:1 return on ad spend for a growing e-commerce brand.",
        image: "/6.jpg",
      },
    ],
  },
  {
    title: "Android Development",
    desc: "We build custom Android apps that streamline your business operations and deliver top-tier performance.",
    longDesc:
      "Our Android development team creates high-quality, user-friendly apps that are tailored to your specific business needs. We follow a comprehensive development process, from initial concept to final deployment, to ensure your app is not only functional but also provides an exceptional user experience. Let us help you turn your app idea into a reality.",
    icon: <Smartphone className="w-10 h-10 text-white" />,
    image: "/2.jpg",
    color: "bg-[#2ECC71]",
    slug: "android-development",
    features: [
      "Custom Android App Development",
      "UI/UX Design for Android",
      "App Testing and QA",
      "App Maintenance and Support",
    ],
    faqs: [
      {
        question: "How long does it take to develop an app?",
        answer:
          "The timeline for app development can vary greatly depending on the complexity of the app, the features required, and the platforms you want to target. A simple app might take a few months, while a more complex one could take a year or longer.",
      },
      {
        question: "How much does it cost to build an app?",
        answer:
          "The cost of app development depends on various factors, including the app's features, complexity, and the development team's location and experience. We provide a detailed quote after understanding your specific requirements.",
      },
    ],
    caseStudies: [
      {
        title: "Project Showcase: Custom E-commerce App",
        description:
          "Discover how we developed a feature-rich Android app for an e-commerce client, resulting in a 30% increase in mobile sales and improved customer engagement.",
        image: "/1.jpg",
      },
      {
        title: "App Redesign: Enhancing User Experience",
        description:
          "This case study highlights our process for redesigning a popular lifestyle app, which led to a 50% improvement in user retention and higher App Store ratings.",
        image: "/2.jpg",
      },
    ],
  },
  {
    title: "Website Design",
    desc: "Using modern design concepts, we create highly optimized websites that attract customers and grow your business.",
    longDesc:
      "A great website is more than just a digital brochure. It's a powerful marketing tool that can help you attract and retain customers. Our website design services focus on creating visually appealing, easy-to-navigate websites that are optimized for both search engines and user experience. We'll work with you to create a website that not only looks great but also drives results.",
    icon: <Layers className="w-10 h-10 text-white" />,
    image: "/3.jpg",
    color: "bg-[#6A5ACD]",
    slug: "website-design",
    features: [
      "Responsive Web Design",
      "UI/UX Design",
      "E-commerce Design",
      "Landing Page Design",
    ],
    faqs: [
      {
        question: "What makes a good website design?",
        answer:
          "A good website design is visually appealing, easy to navigate, mobile-friendly, and optimized for search engines. It should effectively communicate your brand's message and guide visitors to take desired actions.",
      },
      {
        question: "Do you offer website redesign services?",
        answer:
          "Yes, we do. We can help you update your existing website with a fresh, modern design that improves user experience and aligns with your current business goals.",
      },
    ],
    caseStudies: [
      {
        title: "Portfolio: Modern Corporate Website",
        description:
          "Explore our design for a sleek and professional corporate website that helped our client attract top talent and establish a strong online presence.",
        image: "/3.jpg",
      },
      {
        title: "Portfolio: Engaging E-commerce Store",
        description:
          "This project showcases our ability to create a visually stunning and user-friendly e-commerce website that drives sales and enhances the customer shopping experience.",
        image: "/4.jpg",
      },
    ],
  },
  {
    title: "Web Development",
    desc: "From eCommerce to real estate websites, we build high-performing web solutions tailored for all industries.",
    longDesc:
      "Our web development services are focused on building robust, scalable, and secure web applications that meet the demands of today's digital landscape. We use the latest technologies and best practices to deliver high-performing web solutions that are tailored to your specific business needs. Whether you need a simple informational website or a complex e-commerce platform, we have the expertise to deliver.",
    icon: <Globe className="w-10 h-10 text-white" />,
    image: "/4.jpg",
    color: "bg-[#0093FF]",
    slug: "web-development",
    features: [
      "Custom Web Application Development",
      "E-commerce Development",
      "Content Management Systems (CMS)",
      "API Development and Integration",
    ],
    faqs: [
      {
        question: "What is the difference between web design and web development?",
        answer:
          "Web design focuses on the look and feel of a website, including its layout, color scheme, and typography. Web development, on the other hand, involves the actual coding and programming that makes a website functional.",
      },
      {
        question: "Which web development technologies do you use?",
        answer:
          "We use a wide range of modern web development technologies, including HTML, CSS, JavaScript, React, Node.js, and more. We choose the best technology stack based on your project's specific needs.",
      },
    ],
    caseStudies: [
      {
        title: "Project Spotlight: Scalable Web Application",
        description:
          "Learn how we built a robust and scalable web application for a fast-growing startup, enabling them to handle a massive influx of new users with ease.",
        image: "/5.jpg",
      },
      {
        title: "Success Story: E-commerce Platform Development",
        description:
          "This case study details our end-to-end development of a custom e-commerce platform that helped our client streamline their operations and increase revenue.",
        image: "/6.jpg",
      },
    ],
  },
  {
    title: "Logo Designing",
    desc: "Need a creative brand identity? We design unique, original logos to help your business stand out beautifully.",
    longDesc:
      "Your logo is the face of your brand. It's the first thing people see, and it's what they'll remember. Our logo design services are focused on creating a unique and memorable logo that accurately reflects your brand's identity and values. We'll work with you to create a logo that you'll be proud to display on your website, business cards, and marketing materials.",
    icon: <Brush className="w-10 h-10 text-white" />,
    image: "/5.jpg",
    color: "bg-[#2ECC71]",
    slug: "logo-designing",
    features: [
      "Custom Logo Design",
      "Brand Style Guides",
      "Business Card Design",
      "Letterhead Design",
    ],
    faqs: [
      {
        question: "What is the logo design process?",
        answer:
          "Our logo design process typically involves a discovery phase to understand your brand, followed by concept development, refinement based on your feedback, and final delivery of the logo in various formats.",
      },
      {
        question: "How many logo concepts will I receive?",
        answer:
          "The number of logo concepts we provide can vary depending on the package you choose. We'll work with you to find a solution that fits your needs and budget.",
      },
    ],
    caseStudies: [
      {
        title: "Brand Transformation: A Fresh Logo Design",
        description:
          "Discover how we created a modern and memorable logo that helped a local business rebrand and attract a new generation of customers.",
        image: "/1.jpg",
      },
      {
        title: "Identity Design: Crafting a Unique Brand",
        description:
          "This case study showcases our process for developing a comprehensive brand identity, including a logo, color palette, and typography, for a new startup.",
        image: "/2.jpg",
      },
    ],
  },
  {
    title: "Interior Designing",
    desc: "We turn spaces into beautiful, functional environments with professional interior design expertise.",
    longDesc:
      "Our interior design services are focused on creating beautiful and functional spaces that reflect your personal style and taste. We'll work with you to create a space that is not only aesthetically pleasing but also comfortable and inviting. Whether you're looking to redesign a single room or your entire home, we have the expertise to bring your vision to life.",
    icon: <PencilRuler className="w-10 h-10 text-white" />,
    image: "/6.jpg",
    color: "bg-[#6A5ACD]",
    slug: "interior-designing",
    features: [
      "Residential Interior Design",
      "Commercial Interior Design",
      "Space Planning",
      "Furniture Selection",
    ],
    faqs: [
      {
        question: "What is your interior design style?",
        answer:
          "We don't adhere to a single design style. Instead, we work closely with our clients to understand their personal taste and preferences, and then create a space that is a true reflection of their personality.",
      },
      {
        question: "Do you manage the entire interior design project?",
        answer:
          "Yes, we offer full-service interior design, which includes everything from initial concept development to final installation. We'll handle all the details so you can relax and enjoy the process.",
      },
    ],
    caseStudies: [
      {
        title: "Residential Redesign: A Modern Makeover",
        description:
          "Explore how we transformed a dated living space into a bright and modern oasis that perfectly reflects the homeowner's personal style.",
        image: "/3.jpg",
      },
      {
        title: "Commercial Space: Functional and Stylish",
        description:
          "This case study highlights our work on a commercial interior design project, where we created a functional and stylish workspace that fosters creativity and collaboration.",
        image: "/4.jpg",
      },
    ],
  },
];

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="bg-gray-50 mt-30 dark:bg-gray-900">
      <div
        className={`relative ${service.color} h-96 flex items-center justify-center`}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-extrabold">{service.title}</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">{service.desc}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              About the Service
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
              {service.longDesc}
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white">
            What's Included?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center"
              >
                <div className="mr-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-200">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Get a Free Consultation
          </a>
        </div>
        
        {service.faqs && service.faqs.length > 0 && (
          <div className="mt-20">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white">
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqs={service.faqs} />
          </div>
        )}

        {service.caseStudies && service.caseStudies.length > 0 && (
          <div className="mt-20">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-white">
              Our Work in Action
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {service.caseStudies.map((study, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{study.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{study.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePage;
