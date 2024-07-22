import React from "react";
import { useParams } from "react-router-dom";
import Framework from "./Framework";
import image1 from '../../../image/workflow1.jpg'

const Banner = ({ headerTitle }) => (
  <div className="relative h-64  bg-[#ff6600] overflow-hidden">
    
    <div className="relative h-full flex flex-col justify-center items-center text-white p-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center">
        {headerTitle}
      </h1>
    </div>
  </div>
);

const MethodologyCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[calc(33.333%-1rem)] transition-transform duration-300 ease-in-out hover:scale-105">
    <div className="text-orange-500 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Methodology = () => {
  const { methodType } = useParams();

  const getContent = (type) => {
    switch (type) {
      case "managed-services":
        return {
          headerTitle: "Managed Services ",
          // headerImage: image,
          image: image1,
          cards: [
            {
              
              title: "Incident Management",
              description:
                "Proactively monitoring Resource (Servers/applications) and ensuring comprehensive L1, L2, and L3 support involves a structured approach to IT service management.",
              // popupImage: work1,
            },
            {
              // image: image3,
              title: "Service Request Management",
              description:
                "Operating an ITSM-enabled (IT Service Management) Service Desk involves leveraging ITSM best practices and tools to efficiently manage and fulfill customer requests while increasing comprehensive team productivity.",
              // popupImage: work2,
            },
            {
              // image: image2,
              title: "Problem Management",
              description:
                "Maintaining performance against Experience Level Agreements (XLAs) involves not only meeting traditional SLAs but also focusing on the quality of the user experience. This requires integrating customer-centric metrics, generating actionable alerts, and deriving insights to continuously enhance customer satisfaction.",
              // popupImage: work3,
            },
            {
              // image: image4,
              title: "Change Management",
              description:
                "DevSecOps implementation success factors include output data with improvements in releases, over 30% lower build failure in advanced environments, over 20% improvement in remediation and false positives, and complete elimination of security breaches.",
              // popupImage: work2,
            },
          ],
        };
      // case 'cloud-services':
      //   return {
      //     headerTitle: 'Cloud Services',
      //     headerImage: cloud,
      //     cards: [
      //       {
      //           image: cloud,
      //           title: 'Managed Services',
      //           description: `Our Methodology\n
      //                         - Incident Management: Proactively monitoring Resource (Servers/applications) and ensuring comprehensive L1, L2, and L3 support involves a structured approach to IT service management.\n
      //                         - Service Request Management: Operating an ITSM-enabled (IT Service Management) Service Desk involves leveraging ITSM best practices and tools to efficiently manage and fulfill customer requests while increasing comprehensive team productivity.`,
      //           popupImage: work3,
      //         },
      //         {
      //           image: cloud,
      //           title: 'Cloud Consulting, Strategy and Migration',
      //           description: `Our Methodology\n
      //                         - Cloud Consulting: Craft a precise and easily understandable strategy and pathway for migrating to the cloud. Utilize reputable scanning tools and engage in discussions with stakeholders to grasp the current infrastructure and application landscape.\n
      //                         - Cloud Migration Strategy: Develop a customized migration strategy, sorting applications into categories like rehosting, re-platforming, re-architecting, and refactoring.`,
      //           popupImage: work2,
      //         },
      //         {
      //           image: cloud,
      //           title: 'Cloud Native Application Development & Testing',
      //           description: `Our Methodology\n
      //                         - Microservices: Organize applications into a collection of microservices to enhance continuous delivery and deployment capabilities.\n
      //                         - Agile Development: Streamline and expedite the application development process by adopting an agile approach that fosters innovation.`,
      //           popupImage: work1,
      //         },
      //         {
      //           image: cloud,
      //           title: 'Cloud Governance & Reporting',
      //           description: `Our Solutions\n
      //                         - Cloud Governance: Utilize Webress's intelligent cloud management platform to enable automatic alerts and triggers for security incidents and budget thresholds.\n
      //                         - Automation Reporting: Automate the generation of monthly and quarterly reports for cloud management and optimization purposes.`,
      //           popupImage: work1,
      //         },
      //         {
      //           image: cloud,
      //           title: 'Cloud Discovery and Optimization',
      //           description: `Our Methodology\n
      //                         - Single-Pane View: Replace manual tracking with Webress's agile monitoring driven by automated discovery, enhancing visibility and control over the infrastructure.\n
      //                         - Automated Cloud Optimization: Automate monitoring and optimization processes to ensure efficient resource utilization.`,
      //           popupImage: work2,
      //         },
      //         {
      //           image: cloud,
      //           title: 'Cloud and Platform Modernization',
      //           description: `Our Methodology\n
      //                         - Approach: Identify applications with the potential to yield a minimum of 30% cost-benefit in the short-to-medium term while aiming for close to a 99.5% uptime improvement. Maintain platforms and applications strategically to serve as catalysts for future business augmentation.`,
      //           popupImage: work3,
      //         },
      //     ]
      //   };
      // case 'application-services':
      //   return {
      //     headerTitle: 'Application Services',
      //     headerImage: app,
      //     cards: [
      //       {
      //         image: app,
      //         title: 'Application Assessment',
      //         description: 'Our Methodology\nDesign: Starting with stakeholder meetings is a solid foundation for a standardized application assessment approach. By engaging with stakeholders early on, the assessment process can align closely with the needs and goals of the organization. Capturing key requirements such as the future roadmap and scalability ensures that the assessment accounts for both short-term and long-term needs.',
      //         popupImage: work1,
      //       },
      //       {
      //         image: app,
      //         title: 'SaaS Product and Platform Development',
      //         description: 'Our Solution\nConsulting: Evaluate the current software to gauge its level of SaaS maturity and devise a plan for SaaS adoption. Obtain guidance on best practices for processes and technologies, utilizing specialized expertise in databases, networks, and systems.\nImplementation: Deploy the SaaS framework employing cutting-edge technologies and tools within a microservices infrastructure. Our approach to implementation ensures scalability, security, and compliance with industry standards.',
      //         popupImage: work2,
      //       },
      //       {
      //         image: app,
      //         title: 'Application Maintenance and Enhancement',
      //         description: 'Our Methodology\nCorrective: Obtain ITIL support for application management, establish standard operating procedures (SOPs) for applications, and ensure compliance with application security standards.\nAdaptive: Enhance the application, ensure compatibility updates for mobile applications across devices and operating systems, and maintain application knowledge through a known error database.\nPreventive: Attain SaaS-based multi-tenancy, configure settings, manage patches, and perform regular upgrades to ensure optimal performance and security.',
      //         popupImage: work3,
      //       },
      //       {
      //         image: app,
      //         title: 'Application Modernization',
      //         description: 'Our Methodology\nAssess: Perform a tool-based evaluation of the current architecture and infrastructure, then proceed with system integration. Utilize insights from the discovery process alongside recommendations derived from the 6Rs of migration.\nModernize: Deploy and orchestrate containerization of application components in alignment with cloud-native principles. Implement the best practices outlined in the Well-Architected Framework while identifying any assessment deductions.',
      //         popupImage: work1,
      //       },
      //     ]
      //   };
      // case 'cyber-security':
      //   return {
      //     headerTitle: 'Cyber-security',
      //     headerImage: cyber,
      //     cards: [
      //       {
      //         image: cyber,
      //         title: 'Data Strategy',
      //         description: 'Our Solutions\nConsulting & Strategy: Establish best practices for setting up a Data Center of Excellence (COE) aligned with industry standards. Develop a data strategy and guidance tailored to the organizational infrastructure and business objectives.\nAssessment: Evaluate the current data pipeline and devise an architecture that meets requirements and aligns with the data maturity stage.',
      //         popupImage: work1,
      //       },
      //       {
      //         image: cyber,
      //         title: 'Data Governance and Engineering',
      //         description: 'Our Solutions\nData Security: Secure data both in transit and at rest through encryption managed keys, and folder-level access control lists (ACLs). Establish access control with object-level security, multi-factor authentication, and network security measures.\nCompliance and Audit: Implement a set of control and audit procedures to ensure consistent compliance, thereby reducing operational complexity and meeting privacy regulations.',
      //         popupImage: work2,
      //       },
      //       {
      //         image: cyber,
      //         title: 'Cloud Security Engineering',
      //         description: 'Our Methodology\nRequirement Gathering: Our cloud security engineering methodology commences with a comprehensive grasp of existing security guidelines, policies, tools, and licenses. Data forms the foundation for security assessment and implementation.\nSecurity Assessment and Gap Analysis: Evaluate the current security implementation against established guidelines and policies. Utilize comprehensive workshops and tool findings to generate actionable insights and bridge security gaps.',
      //         popupImage: work3,
      //       },
      //       {
      //         image: cyber,
      //         title: 'Cloud Security Operations',
      //         description: 'Our Solutions\nSecurity Monitoring and Analytics: Perform event log and firewall log analyses with continuous cloud monitoring implemented. Safeguard systems from DDoS attacks, enable endpoint protection, establish perimeter security, and implement proactive incident response measures.\nIncident Management and Response: Develop an agile, enterprise-focused response mechanism to effectively address security incidents. Utilize secure and scalable service frameworks to ensure resilience and compliance.',
      //         popupImage: work1,
      //       },
      //     ]
      //   };
      // case 'data-analytics':
      //   return {
      //     headerTitle: 'Data Analytics',
      //     headerImage: data,
      //     cards: [
      //       {
      //         image: data,
      //         title: 'Managed Analytics (DataOps)',
      //         description: 'Our Solutions\nInitiation and Planning: Our analytics experts commence with a preliminary study to identify key contacts, accompanied by a knowledge transfer template to facilitate achieving a steady state. Finalize critical data resources to strategize a robust weekly managed analytics activity.\nKnowledge Sharing and Support: We evaluate the current analytics setup to gain a comprehensive understanding of data sources, ensuring alignment with business goals and KPIs.',
      //         popupImage: work1,
      //       },
      //       {
      //         image: data,
      //         title: 'BI Modernization',
      //         description: 'Our Solutions\nData Visualization: Utilize data reporting powered by natural language generation (NLG) to extract valuable insights and enhance decision-making. Implement visuals for enterprise data warehouse (EDW) implementation to leverage both self-service and pre-processed data effectively.\nDashboarding: Enhance business decision-making with advanced BI dashboards featuring best-in-breed applications. Access multiple dashboarding options on modernized data, providing actionable insights in real-time.',
      //         popupImage: work2,
      //       },
      //     ]
      //   };
      // case 'automation':
      //   return {
      //     headerTitle: 'Automation',
      //     headerImage: automation,
      //     cards: [
      //       {
      //         image: automation,
      //         title: 'DevSecOps',
      //         description: 'Our Methodology\nApproach: By integrating security with DevOps, Our DevSecOps workflow ensures the utilization of top-notch tools for static application security testing (SAST) and dynamic application security testing (DAST) at every stage, including coding, development, integration, deployment, and monitoring.\nCourse of Action: DoT is seamlessly integrated with globally acclaimed, proven, and tested SAST and DAST tools, ensuring compliance and security throughout the software development lifecycle.',
      //         popupImage: work3,
      //       },
      //       {
      //         image: automation,
      //         title: 'DevOps Transformation (DoT)',
      //         description: 'Our Offerings\nDefine Metrics: Utilize a comprehensive range of metrics and select those most pertinent to business goals. Define quantitative targets for each metric in alignment with the time frame and scale of the DevSecOps Transformation (DoT).\nReady-to-Deploy Pipeline: Efficiently deploy and integrate a pre-configured DevOps pipeline with cutting-edge open-source tools and technologies. Customize the pipeline to meet specific business requirements and ensure seamless integration across development and operations teams.',
      //         popupImage: work1,
      //       },
      //     ]
      //   };
      // case 'finops':
      //   return {
      //     headerTitle: 'FinOps',
      //     headerImage: finops,
      //     cards: [
      //       {
      //         image: finops,
      //         title: 'Coming Soon',
      //         description: 'More content for FinOps will be added soon.',
      //         popupImage: work3,
      //       }
      //     ]
      //   };
      //   case 'devops':
      //   return {
      //     headerTitle: 'DevOps',
      //     headerImage: devops,
      //     cards: [
      //       {
      //         image: devops,
      //         title: 'Coming Soon',
      //         description: 'More content for devops will be added soon.',
      //         popupImage: work3,
      //       }
      //     ]
      //   };
      //   case 'aiops':
      // return {
      //   headerTitle: 'AIOps',
      //   headerImage: aiops,
      //   cards: [
      //     {
      //       image: aiops,
      //       title: 'Coming Soon',
      //       description: 'More content for Aiops will be added soon.',
      //       popupImage: work1,
      //     }
      //   ]
      // };
      default:
        return {
          headerTitle: "Unknown Service",
          // headerImage: image,
          cards: [],
        };
    }
  };

  const content = getContent(methodType);
  return (
    <div className=" bg-gray-100 mt-[5rem]">
      <Banner headerTitle={content.headerTitle} />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Methodology</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          
          {content.cards.map((item, index) => (
            <MethodologyCard
              icon="🔄"
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        {content.image && <Framework img={content.image}/>}
      </div>
    </div>
  );
};

export default Methodology;
