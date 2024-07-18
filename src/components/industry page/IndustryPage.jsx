import React from "react";

import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BlogsComp from "./BlogsComp";

const IndustryPage = () => {
  const { t } = useTranslation();
  const { industriesType } = useParams();
  const getContent = (type) => {
    switch (type) {
      case "finance":
        return {
          title: "Financal Services",
          para1:
            "Financial services companies encounter significant challenges in securing digital payments, releasing affordable products, and navigating the complex regulatory landscape. To address these issues, they seek trusted experts in cloud computing for financial services to develop resilient digital infrastructures that facilitate technology-led innovation and keep pace with evolving value chains",
          para2:
            "Webrass’s financial industry experts have supported major firms such as ABFL in transforming their data and application ecosystems on the cloud. With innovative solutions like intelligent information extraction, SecOps, and AI/ML-driven operations, financial services companies trust Webrass's cloud operations to build fit-for-purpose infrastructures at scale.",
          keyFeatures: [
            {
              title: "Scalable Financial Solutions",
              description:
                "Delivering scalable solutions to manage financial transactions and operations.",
              
            },
            {
              title: "Secure Financial Infrastructure",
              description:
                "Ensuring the security and integrity of financial data and transactions.",
              
            },
            {
              title: "Innovative Financial Solutions",
              description:
                "Implementing innovative solutions to enhance financial services and customer experience.",
              
            },
          ],
          useCases: [
            {
              title: "Cloud-Based Platform Enabled hub.brussels Seamless Data Integration",
              description:
                "hub.brussels, a leading Brussels-Capital agency, supports local economic growth and town planning. Seeking better data management and analytics, hub.brussels aimed to enhance data collection and visualization for Brussels’ businesses and entrepreneurs. They partnered with Webrass to develop and deploy a cloud-based big data tool, ‘analytics.brussels’.",
                image: "hello",
            },
            {
              title: "Accelerated Analytics Workload Migration Resulted 75% Effort Reduction",
              description:
                "The customer, one of India's largest department store chains, has evolved from a single-brand shop into a comprehensive Fashion and Lifestyle store for families. They were seeking to transition from a traditional data center to a cost-effective, scalable, and modern data architecture. Webrass implemented a solution incorporating cloud computing and data modernization. Webrass assisted the customer in migrating their analytics workload to the cloud in just 8 weeks.",
                image: "hello",
            },
            {
              title: "Webrass Achieved 55% Cost Savings for hub.brussels",
              description:
                'hub.brussels, a prominent agency in the Brussels-Capital Region, supports economic growth and town planning. It partnered with Webrass to develop an advanced analytics tool designed to enhance the next-generation shopping sector and facilitate the establishment of new stores. This collaboration aims to optimize both business and district planning.',
                image: "hello",
            },
          ],
        };

        case "telecom":
        return {
          title: "Telecom",
          para1:
            "Webrass offers comprehensive digital transformation solutions for telecom companies. Our services include hybrid and multi-cloud models, ensuring quality and low latency services. We specialize in establishing virtualized infrastructures combining native cloud services and software-defined networks to provide scalability, agility, and performance.",
          para2:
            "Transform your telecom operations with Webrass's cutting-edge digital solutions. We specialize in designing and implementing hybrid and multi-cloud environments, ensuring robust performance and seamless connectivity. Our expertise extends to building virtualized infrastructures that leverage advanced cloud services and software-defined networks, empowering your business with unparalleled scalability, agility, and efficiency.",
          keyFeatures: [
            {
              title: "Network Optimization",
              description:
                "Enhances performance and reduces latency...",
              
            },
            {
              title: "Scalability",
              description:
                " Supports growth with flexible infrastructure...",
              
            },
            {
              title: "Real-Time Analytics",
              description:
                " Provides actionable insights for better decision-making.",
              
            },
          ],
          useCases: [
            {
              title: "Dashboard Enabled Real-Time Insights for Telekom Malaysia",
              description:
                "Telekom Malaysia Berhad (TM), the nation's leading telecommunications provider, sought Webrass's expertise to develop a reporting solution. This solution performs near real-time sentiment analysis on Twitter and community forum data, supporting TM's mission to enhance telecommunications technology and services for all Malaysians.",
                image: "hello",
            },
            {
              title: "Customer Automated Invoicing with ML/AI, Achieving ~99% Categorization Accuracy",
              description:
                "The customer, an alliance of premier telecom operators, creates innovative solutions and secures continuous revenue streams for its members. With a vast customer base, it operates across more than 30 countries in APAC and MEA, providing extensive support and opportunities for telecom growth and development.",
                image: "hello",
            },
            {
              title: "Sentiment Analysis Model Enhanced Insight Delivery for Telekom Malaysia",
              description:
                'elekom Malaysia Berhad (TM), the leading telecommunications provider in the nation, continuously enhances its tech and services for nationwide connectivity. They turned to Webrass to develop a reporting solution that performs near real-time sentiment analysis on Twitter and community forum data, improving their insights and decision-making capabilities.',
                image: "hello",
            },
          ],
        };

        case "technology":
        return {
          title: "Technology ",
          para1:
            "Webrass offers tailored digital solutions for technology companies to enhance performance and agility. Our services include cloud consulting, DevSecOps, AI, and automation, focusing on modernizing infrastructure and applications.",
          para2:
            "As cybersecurity and AI drive digital transformation, companies are partnering with cloud managed service providers to enhance automation and ensure business continuity. Technology leaders are leveraging Webrass’s digital solutions to boost agility, modernize strategies, and explore new business models through ML/AI, IoT, and automation.",
          keyFeatures: [
            {
              title: "Personalized Technology Solutions",
              description:
                "Tailored solutions to meet your specific needs...",
              
            },
            {
              title: "Seamless Integration",
              description:
                "Convenient access across platforms and devices...",
              
            },
            {
              title: "Responsive Technical Support",
              description:
                "Reliable assistance available whenever you need it...",
              
            },
          ],
          useCases: [
            {
              title: "AWS Migration Closed Data Center in 5 Months, Saving 30%.",
              description:
                "The customer partnered with Webrass to decommission their data center and migrate to AWS cloud, adhering to a strict timeline. Webrass assessed the infrastructure, planned a lift-and-shift migration, and redeployed restricted applications like Oracle E-Business Suite. The migration, including 4 TB of data, was completed in 4.5 months.",
                image: "hello",
            },
            {
              title: "AWS IoT Deployment Cut Customer Effort by 50%",
              description:
                " The customer aimed to become data-driven by adopting AWS IoT for video analytics. They sought to reduce in-vehicle violation detection using IoT devices and optimize algorithms on AWS IoT Greengrass. Webrass assisted in setting up the solution for actionable insights and improved detection capabilities",
                image: "hello",
            },
            {
              title: "Azure Migration Achieved ~30% Cost Savings",
              description:
                "The customer, a leading paints manufacturer, faced challenges with unmanaged disks in their Azure infrastructure, including limited IOPS, scaling issues, and costs associated with obsolete resources. They needed a solution to address these inefficiencies and optimize their Azure environment.",
                image: "hello",
            },
          ],
        };

        case "media":
        return {
          title: "Media and Entertainment",
          para1:
            "Media and entertainment companies are focused on hyper-personalization, immersive experiences, and consistent availability across platforms to meet modern customer expectations. To accelerate their digital transformation, they seek a skilled cloud technology partner. In today's landscape, delivering high-quality digital experiences is crucial.",
          para2:
            "Webrass has helped media and entertainment firms enhance quality engineering, develop SaaS products, utilize advanced analytics, optimize storage costs, and secure payment gateways, driving cloud adoption. With Webrass’s proprietary frameworks, these companies have achieved over 50% cost savings and accelerated quality assurance processes, resulting in exceptional user experiences.",
          keyFeatures: [
            {
              title: "Hyper-Personalization",
              description:
                "Tailored content and experiences for individual users.",
              
            },
            {
              title: "Immersive Entertainment",
              description:
                "Engaging multimedia experiences across platforms.",
              
            },
            {
              title: "High Availability",
              description:
                "Reliable access to content anytime, anywhere..",
              
            },
          ],
          useCases: [
            {
              title: "Azure Analytics Boosted Sports Media Giant’s Social Media Performance",
              description:
                "Webrass implemented an Azure-based data lake solution in two phases for the customer. The first phase consolidated data from all social media platforms—Facebook, Instagram, Twitter, and YouTube—into a single platform and created reports. The second phase included additional metrics and integrated Google Analytics data for YouTube.",
                image: "hello",
            },
            {
              title: "Asia School of Business Boosts AWS Performance by 70%",
              description:
                "Asia School of Business (ASB), established in 2015 with MIT Sloan and Bank Negara Malaysia, needed to optimize its AWS infrastructure due to expanding programs. To address this, ASB partnered with Webrass for managed services to enhance automation, cost efficiency, and overall performance of their cloud environment, meeting their growing infrastructure demands.",
                image: "hello",
            },
            {
              title: "AWS Secured Astro's Payment Gateway Efficiently",
              description:
                'Established in 1996, Astro is a leading Malaysian content and consumer company serving over 23 million people across various platforms. Faced with scalability and security issues in their on-premise payment gateway, Astro sought a more secure, scalable solution to reduce PCI-DSS compliance costs and improve user experience.',
                image: "hello",
            },
          ],
        };

        
      case "banking":
        return {
          title: "Banking",
          para1:
            "Banking and insurance companies face stringent regulations and demand for real-time process automation and digital decision-making. To overcome these challenges, they need dependable digitization partners and cloud banking solutions that ensure efficiency and compliance.",
          para2:
            "Webrass has revolutionized cloud computing for the banking and insurance sectors. By utilizing Webrass’s specialized cloud solutions, major players like AAGI swiftly migrated to the cloud, improved big data capabilities, reduced costs by over 50%, and achieved complete security compliance.",
          keyFeatures: [
            {
              title: "Personalized Financial Planning",
              description:
                "Tailored financial plans to achieve your goals.",
              
            },
            {
              title: "Seamless Digital Banking",
              description:
                "Convenient access anytime, anywhere.",
              
            },
            {
              title: "Responsive Customer Support",
              description:
                "Reliable assistance whenever you need it.",
              
            },
          ],
          useCases: [
            {
              title: "Cloud Transformation Boosted ABFL Delivery Time",
              description:
                "Aditya Birla Finance Ltd. (ABFL), a major provider of lending and wealth management solutions in India, sought a partner to oversee their digital lending platform on AWS. They required comprehensive management of their Loan Origination System (LOS) and other platform modules to enhance their service delivery",
                image: "hello",
            },
            {
              title: "Cloud-Based Sentiment Analysis Reduced Effort by 50%",
              description:
                "he customer, a major banking firm, aimed to enhance decision-making with actionable insights through a sentiment analysis model. Seeking to address client queries from various channels—social media, email, surveys, and reviews—the firm needed a cloud-based ML pipeline for data engineering and sentiment analysis to improve customer experience and decision-making.",
                image: "hello",
            },
            {
              title: "AXA Affin Enhances Data Control with Cloud-Based MDM",
              description:
                'AAGI faced data integrity issues and high costs with their existing master data management platform. They needed a scalable, cost-effective solution, leading them to choose AWS cloud. We conducted a thorough assessment and proposed replacing their MDM platform with AWS services and integrating their data lake with SFDC applications.',
                image: "hello",
            },
          ],
        };
    }
  };

  const content = getContent(industriesType);

  return (
    <div id="industry" className="bg-gradient-to-br from-orange-50 to-white flex flex-col mt-16">
      <div className="container mx-auto px-4 py-8 flex-grow flex flex-col justify-between">
        <div className="space-y-8 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
            {content.title}
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-2 mb-6">
          <div className="lg:w-full space-y-6">
            <p className="text-gray-700 text-center">{content.para1}</p>
            <p className="text-gray-700 text-center">{content.para2}</p>
          </div>
        </div>

        <div className="mt-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
              {t("industryPage.features.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {content.keyFeatures.map((feature) => (
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 7h-2V3H9v4H7l3 3 3-3zM7 9h2v4H7v2h6v-2h-2V9h2l-3-3-3 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-3">
          <BlogsComp useCases={content.useCases} />
        </div>
      </div>
    </div>
  );
};

export default IndustryPage;
