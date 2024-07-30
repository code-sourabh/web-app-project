import React from "react";
import { useParams } from "react-router-dom";
import Framework from "./Framework";
import image1 from "../../../image/workflow1.jpg";

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

          Frameworkimage: image1,
          cards: [
            {
              title: "Incident Management",
              description:
                "Proactively monitoring Resource (Servers/applications) and ensuring comprehensive L1, L2, and L3 support involves a structured approach to IT service management.",
            },
            {
              title: "Service Request Management",
              description:
                "Operating an ITSM-enabled (IT Service Management) Service Desk involves leveraging ITSM best practices and tools to efficiently manage and fulfill customer requests while increasing comprehensive team productivity.",
            },
            {
              // image: image2,
              title: "Problem Management",
              description:
                "Maintaining performance against Experience Level Agreements (XLAs) involves not only meeting traditional SLAs but also focusing on the quality of the user experience. This requires integrating customer-centric metrics, generating actionable alerts, and deriving insights to continuously enhance customer satisfaction.",
            },
            {
              title: "Change Management",
              description:
                "DevSecOps implementation success factors include output data with improvements in releases, over 30% lower build failure in advanced environments, over 20% improvement in remediation and false positives, and complete elimination of security breaches.",
            },
          ],
        };
      case "cloud-consulting-strategy-and-migration":
        return {
          headerTitle: "Cloud Consulting, Strategy and Migration",
          // headerImage: cloud,
          cards: [
            {
              title: "Cloud Consulting",
              description: `Craft a precise and easily understandable strategy and pathway for migrating to the cloud. Utilize reputable scanning tools and engage in discussions with stakeholders to grasp the current infrastructure and application landscape. Using this information, develop a customized migration strategy, sorting applications into categories like rehosting, re-platforming, re-architecting, and refactoring.`,
            },
            {
              title: "Cloud Strategy",
              description: `Webrass cloud consultants and architects possess a thorough understanding of business objectives, current IT infrastructure, technological landscape, and overall IT budget. Following workshops with CXOs, often accompanied by a cloud center of excellence team, they craft a comprehensive cloud roadmap. This roadmap serves as a guiding document for the entire transformation journey, ensuring alignment with strategic goals and efficient resource utilization.`,
            },
            {
              title: "Cloud Migration & Deployment",
              description: `Based on insights gained from the consulting phase, proceed with either migrating or redeploying applications. Begin by establishing a secure cloud landing zone, followed by the migration or deployment process. Employ Blazeclan’s proprietary frameworks, featuring robust automation capabilities, to facilitate an agile migration. These frameworks come equipped with pre-defined technical artifacts, ensuring a smooth and efficient transition to the cloud.`,
            },
          ],
        };
      case "cloud-native-application-development-and-testing":
        return {
          headerTitle: "Cloud Native Application Development & Testing",
          cards: [
            {
              title: "Microservices",
              description:
                "Organize applications into a collection of microservices to enhance continuous delivery and deployment capabilities. Deploy cloud-native applications incorporating best practices seamlessly and rapidly, ensuring efficiency and scalability at every stage of development and deployment..",
            },
            {
              title: "Agile Development",
              description:
                "Streamline and expedite the application development process by adopting an agile approach that fosters innovation. Implement DevOps integration to seamlessly transition applications from design to production, accelerating the delivery timeline and enhancing operational efficiency.",
            },
            {
              title: "System Integration",
              description:
                "Efficiently merge diverse applications to simplify IT infrastructure and enhance ROI. Utilize API integration to create competitive advantages, boosting agility and optimizing process efficiency.",
            },
            {
              title: "Testing and Quality Assurance",
              description:
                "Streamline and expedite the testing and quality assurance process for cloud-native applications by implementing a fault-tolerant framework with a zero-trust approach. Ensure smooth application releases and proactively mitigate issues before deploying updates to production environments.",
            },
          ],
        };
      case "cloud-governance-and-reporting":
        return {
          headerTitle: "Cloud Governance & Reporting",
          // headerImage: cyber,
          cards: [
            {
              title: "Cloud Governance",
              description:
                "Utilize WeBrass's intelligent cloud management platform to enable automatic alerts and triggers for security incidents and budget thresholds. Implement resilient guardrails to ensure robust security measures and establish dynamic control over the cloud environment through a centralized governance approache.",
            },
            {
              title: "Automation Reporting",
              description:
                "Automate the generation of monthly and quarterly reports for cloud operations, security, and costs. Enhance decision-making with real-time health reports of cloud resources, metric graph reports of critical servers, and incident or service request reports distributed via Slack channels. This ensures deep insights and facilitates proactive management of cloud infrastructure.",
            },
          ],
        };
      case "cloud-discovery-and-optimization":
        return {
          headerTitle: "Cloud Discovery and Optimization",
          // headerImage: data,
          cards: [
            {
              title: "Single-Pane View",
              description:
                "Replace manual tracking with WeBrass's agile monitoring driven by automated discovery, eliminating the need for manual effort in keeping track of application and workload locations and their interaction paradigms. This automated approach ensures efficient and accurate monitoring, enhancing visibility and control over the infrastructure.",
            },
            {
              title: "Automated Cloud Optimization",
              description:
                "Automate the monitoring, correlation, and visualization of cloud resources and their health metrics to enable real-time corrective responses. Enhance operational efficiency and optimize cloud service utilization by implementing well-defined and manageable IT processes. This approach ensures proactive management and maximizes the benefits of cloud infrastructure..",
            },
          ],
        };
      case "cloud-and-platform-modernization":
        return {
          headerTitle: "Cloud and Platform Modernization",
          // headerImage: automation,
          cards: [
            {
              title: "Approach",
              description:
                "Identify applications with the potential to yield a minimum of 30% cost-benefit in the short-to-medium term while aiming for close to a 99.5% uptime improvement. Maintain platforms and applications strategically to serve as catalysts for future business augmentation. This approach ensures optimal resource allocation and maximizes the impact of technology investments on business growth and agility.",
            },
            {
              title: "Identify and Design",

              description:
                "Analyze applications and components considering factors such as business agility, demand, criticality, expansion plans, performance, OPEX, and CAPEX. Prioritize those with the greatest potential for improvement. Conduct minimal refactoring to enhance high availability, scalability, and end-to-end DevOps integration. For areas showing significant gains in consumption costs and availability, undertake containerization and refactoring efforts. This approach optimizes resource allocation and enhances the efficiency of IT infrastructure..",
            },
          ],
        };
      case "application-assessment":
        return {
          headerTitle: "Application Assessment ",
          // headerImage: image,
          image: image1,
          cards: [
            {
              title: "Design",
              description:
                "Starting with stakeholder meetings is a solid foundation for a standardized application assessment approach. By engaging with stakeholders early on, the assessment process can align closely with the needs and goals of the organization. Capturing key requirements such as the future roadmap and scalability ensures that the assessment accounts for both short-term needs and long-term growth potential.",
              // popupImage: work1,
            },
            {
              // image: image3,
              title: "Define",
              description:
                "Utilizing a tool-centric assessment methodology, examine the insights gathered during the discovery phase and derive conclusions from the conducted meetings. Select between automated or manual assessment techniques to evaluate the current application suite and determine subsequent steps.",
              // popupImage: work2,
            },
            {
              // image: image2,
              title: "Deliver",
              description:
                "Maintaining performance against Experience Level Agreements (XLAs) involves not only meeting traditional SLAs but also focusing on the quality of the user experience. This requires integrating customer-centric metrics, generating actionable alerts, and deriving insights to continuously enhance customer satisfaction.",
              // popupImage: work3,
            },
          ],
        };
      case "saas-product-and-platform-development":
        return {
          headerTitle: "SaaS Product and Platform Development ",
          // headerImage: image,
          image: image1,
          cards: [
            {
              title: "Consulting",
              description:
                "Evaluate the current software to gauge its level of SaaS maturity and devise a plan for SaaS adoption. Obtain guidance on best practices for processes and technologies, utilizing specialized expertise in databases, networks, and systems.",
              // popupImage: work1,
            },
            {
              // image: image3,
              title: "Implementation",
              description:
                "Deploy the SaaS framework employing cutting-edge technologies and tools within a microservices infrastructure. Our approach to SaaS implementation prioritizes streamlined processes and user-friendly interfaces, facilitating an agile Software Development Life Cycle (SDLC) and guaranteeing full compliance with regulations.",
              // popupImage: work2,
            },
            {
              // image: image2,
              title: "Management",
              description:
                "Oversee the SaaS offerings through streamlined automation, backed by round-the-clock support for the underlying infrastructure. Employ intelligent monitoring and ticketing systems powered by AI to swiftly address issues and uphold resilience in application workloads.",
              // popupImage: work3,
            },
          ],
        };
      case "saas-factory-model":
        return {
          headerTitle: "SaaS Factory Model ",
          // headerImage: image,
          image: image1,
          cards: [
            {
              title: "UI/UX Design",
              description:
                "Determine business objectives in alignment with the current strategy and planning to outline underlying challenges and formulate a problem statement. Develop design concepts, principles, and essential components for crafting both the prototype and final design framework.",
              // popupImage: work1,
            },
            {
              // image: image3,
              title: "Microservices Acceleration",
              description:
                "We offer pre-built microservices accelerators organized into core, technical, and peripheral categories tailored to meet diverse business needs. These accelerators directly enhance business value, facilitate API management, and offer blueprints along with reusable building blocks.",
              // popupImage: work2,
            },
            {
              // image: image2,
              title: "SQUAD Resource Model",
              description:
                "Our scaled Center of Excellence is characterized by its rapid, distinctive, and dynamic approach to addressing real business challenges. Each member of the SQUAD is supported by dedicated technology resource pools, ensuring ongoing assistance and following a scalable model for product-focused delivery.",
              // popupImage: work3,
            },
            {
              // image: image2,
              title: "Quality Engineering & Assurance",
              description:
                "SaaS Console's quality engineering covers functional suitability, performance efficiency, security, and maintainability. Automate testing scripts and implement robust encryption measures to address privacy concerns. Organize the application's core areas into groups and establish performance benchmarks to achieve testing objectives.",
              // popupImage: work3,
            },
          ],
        };
      case "application-maintenance-and-enhancement":
        return {
          headerTitle: "Application Maintenance and Enhancement",
          // headerImage: image,
          image: image1,
          cards: [
            {
              title: "Corrective",
              description:
                "Obtain ITIL support for application management, establish standard operating procedures (SOPs) for applications, and ensure compliance with application security standards.",
              // popupImage: work1,
            },
            {
              // image: image3,
              title: "Adaptive",
              description:
                "Enhance the application, ensure compatibility updates for mobile applications across devices and operating systems, and maintain application knowledge through a known error database.",
              // popupImage: work2,
            },
            {
              // image: image2,
              title: "Preventive",
              description:
                "Attain SaaS-based multi-tenancy, configure settings, manage patches, ensure application availability, and monitor errors.",
              // popupImage: work3,
            },
            {
              // image: image2,
              title: "Quality Engineering & Assurance",
              description:
                "SaaS Console's quality engineering covers functional suitability, performance efficiency, security, and maintainability. Automate testing scripts and implement robust encryption measures to address privacy concerns. Organize the application's core areas into groups and establish performance benchmarks to achieve testing objectives.",
              // popupImage: work3,
            },
          ],
        };
      case "application-modernization":
        return {
          headerTitle: "Application Modernization",
          // headerImage: image,
          image: image1,
          cards: [
            {
              title: "Assess",
              description:
                "Perform a tool-based evaluation of the current architecture and infrastructure, then proceed with system integration. Utilize insights from the discovery process alongside recommendations derived from the 6Rs of migration. Implement the best practices outlined in the Well-Architected Framework while identifying any assessment deductions.",
              // popupImage: work1,
            },
            {
              // image: image3,
              title: "Modernize",
              description:
                "Deploy and orchestrate containerization of application components in the cloud through a microservices architecture. Facilitate a smooth transition of applications from legacy systems to the cloud, relieving infrastructure management burdens. Ensure high- performance application workloads are maintained at scale.",
              // popupImage: work2,
            },
            {
              // image: image2,
              title: "Preventive",
              description:
                "Attain SaaS-based multi-tenancy, configure settings, manage patches, ensure application availability, and monitor errors.",
              // popupImage: work3,
            },
            {
              // image: image2,
              title: "Optimize",
              description:
                "Utilize robust monitoring tools such as Cloudlytics and New Relic for ongoing monitoring and optimization of application performance. Integrate security, disaster recovery, and resilience capabilities to streamline the development team's efforts. Improve application productivity while reducing the total cost of ownership (TCO).",
              // popupImage: work3,
            },
          ],
        };

      case "data-strategy":
      return {
        headerTitle: "Data Strategy",
        // headerImage: image,
        image: image1, // No specific image provided on the page
        cards: [
          {
            title: "Consulting & Strategy",
            description:
              "Establish best practices for setting up a Data Center of Excellence (COE) aligned with industry standards. Develop a data strategy and guidance tailored to the organizational infrastructure and business objectives.",
            // popupImage: work1,
          },
          {
            title: "Assessment",
            description:
              "Evaluate the current data pipeline and devise an architecture that meets requirements and aligns with the data maturity stage. Receive recommendations for enhancing the data pipeline to address present and future challenges. Prioritize the next steps for data transformation.",
            // popupImage: work2,
          },
          {
            title: "Knowledge Management",
            description:
              "Enhance data processing and delivery by establishing comprehensive knowledge management across the entire organization. Evaluate technology needs and oversee all knowledge management initiatives with an integrated framework and holistic roadmap.",
            // popupImage: work3,
          },
        ],
      };
  
    case "data-governance-and-engineering":
      return {
        headerTitle: "Data Governance and Engineering",
        // headerImage: image,
        image: image1, // No specific image provided on the page
        cards: [
          {
            title: "Data Security",
            description:
              "Secure data both in transit and at rest through encryption managed keys, and folder-level access control lists (ACLs). Establish access control with object-level security, multi-factor authentication, and network security measures. Implement a set of control and audit procedures to ensure consistent compliance, thereby reducing operational complexity and meeting privacy regulations.",
            // popupImage: work1,
          },
          {
            title: "Data Lineage",
            description:
              "Comprehend, document, and visualize data as it progresses from inception to consumption stages. Identify data origins and visualize the flow from the source to the end-user. Enhance data value by mapping assets and their interrelationships within the data ecosystem. Improve decision-making by effectively managing data input from the cloud.",
            // popupImage: work1,
          },
          {
            title: "Metadata Management",
            description:
              "Comprehend, document, and visualize data as it progresses from inception to consumption stages. Identify data origins and visualize the flow from the source to the end-user. Enhance data value by mapping assets and their interrelationships within the data ecosystem. Improve decision-making by effectively managing data input from the cloud.",
            // popupImage: work1,
          },
        ],
      };
  
    case "cloud-security-engineering":
      return {
        headerTitle: "Cloud Security Engineering",
        // headerImage: image,
        image: image1, // No specific image provided on the page
        cards: [
          {
            title: "Requirement Gathering",
            description:
              "Our cloud security engineering methodology commences with a comprehensive grasp of existing security guidelines, policies, tools, and licenses. Data forms the foundation for security assessment and implementation.",
            // popupImage: work1,
          },
          {
            title: "Security Assessment and Gap Analysis",
            description:
              "Evaluate the current security implementation against established guidelines and policies. Utilize comprehensive workshops and tool findings to generate a scorecard of the current security posture, accompanied by a detailed gap analysis report.",
            // popupImage: work2,
          },
          {
            title: "Remediation, Testing, and Validation",
            description:
              "Develop a roadmap outlining short-term and long-term security goals, incorporating a remediation plan, testing plan, and validation plan. Ensure a highly secure environment with defined timelines to achieve desired outcomes.",
            // popupImage: work3,
          },
          {
            title: "Planning Security Design Implementation",
            description:
              "Leverage our cloud-managed services and CISO teams to execute security controls and remediation actions effectively. Optimize automation to streamline security operations and fully realize the tangible benefits of the cloud environment.",
            // popupImage: work4,
          },
        ],
      };
  
      case "cloud-security-operations":
        return {
          headerTitle: "Cloud Security Operations",
          // headerImage: image,
          image: image1, // No specific image provided on the page
          cards: [
            {
              title: "Security Monitoring and Analytics",
              description:
                "Perform event log and firewall log analyses with continuous cloud monitoring implemented. Safeguard systems from DDoS attacks, enable endpoint protection, establish perimeter security, and implement proactive incident response measures.",
              // popupImage: work1,
            },
            {
              title: "Incident Management and Response",
              description:
                "Develop an agile, enterprise-focused response mechanism to effectively address security incidents. Utilize secure and scalable service models to manage and respond to security incidents promptly.",
              // popupImage: work2,
            },
            {
              title: "Audits and Assessments",
              description:
                "Design robust compliance with over 1100 controls spanning across cloud platforms and receive near real-time alerts on non-compliance configurations. Utilize more than 15 out-of-the-box audit checklists aligned with standards such as PCI-DSS, ISO27001, and HIPAA. Compile and maintain a proficient knowledge base alongside actionable reports.",
              // popupImage: work3,
            },
            {
              title: "Vulnerability Management and Threat Intelligence",
              description:
                "Perform thorough security risk assessments and implement effective mitigations. Safeguard devices from external threats through expert recommendations, remediations, robust configurations, and guidelines.",
              // popupImage: work4,
            },
          ],
    
      };
      case "managed-analytics":
        return {
          headerTitle: "Managed Analytics ",
          // headerImage: image,
          image: image1, // No specific image provided on the page
          cards: [
            {
              title: "Initiation and Planning",
              description:
                "We analytics experts commence with a preliminary study to identify key contacts, accompanied by a knowledge transfer template to facilitate achieving a steady state. Finalize critical data resources to strategize a robust weekly managed analytics activity.",
              // popupImage: work1,
            },
            {
              title: "Knowledge Sharing and Support",
              description:
                "We evaluate the current analytics setup to gain a comprehensive understanding of processes and workflows. Implement knowledge management, including essential process and skill training, to address priority requirements such as access and metrics monitoring.",
              // popupImage: work2,
            },
            {
              title: "Steady State",
              description:
                "Analyze the metrics collected and reports generated through weekly status meetings. Maintain a comprehensive knowledge repository to update analytics processes and workflows as needed.",
              // popupImage: work3,
            },
          ],
    
      };
      case "devsecops":
        return {
          headerTitle: "DevSecOps",
          // headerImage: image,
          image: image1, // No specific image provided on the page
          cards: [
            {
              title: "Approach",
              description:
                "By integrating security with DevOps, Our DevSecOps workflow ensures the utilization of top-notch tools for static application security testing (SAST) and dynamic application security testing (DAST) at every stage, including coding, development, integration, deployment, and monitoring.",
              // popupImage: work1,
            },
            {
              title: "Course of Action",
              description:
                "DoT is seamlessly integrated with globally acclaimed, proven, and tested SAST and DAST tools, ensuring a consistent software lifecycle from coding to production release. This integration aims to eradicate all security vulnerabilities as an integral part of the software development process.",
              // popupImage: work2,
            },
            {
              title: "Success Factors",
              description:
                "Key success factors for DevSecOps implementation include output data showcasing improvements in releases, achieving over a 30% reduction in build failures in advanced environments, realizing over a 20% enhancement in remediation and reduction of false positives, and attaining the complete elimination of security breaches.",
              // popupImage: work3,
            },
          ],
    
      };
      case "devops-transformation":
        return {
          headerTitle: "DevOps Transformation",
          // headerImage: image,
          image: image1, // No specific image provided on the page
          cards: [
            {
              title: "Define Metrics",
              description:
                "Utilize a comprehensive range of metrics and select those most pertinent to business goals. Define quantitative targets for each metric in alignment with the time frame and scale of the DevSecOps Transformation (DoT).",
              // popupImage: work1,
            },
            {
              title: "Ready-to-Deploy Pipeline",
              description:
                "Efficiently deploy and integrate a pre-configured DevOps pipeline with cutting-edge open-source tools and technologies. Customize the identified metrics to align with specific project requirements.",
              // popupImage: work2,
            },
            {
              title: "Measure",
              description:
                "Utilize the data collected from the configured metrics and compare them with the defined quantitative targets to assess areas of improvement accurately.",
              // popupImage: work3,
            },
            {
              title: "Learn and Improve",
              description:
                "With insights driven by measurement, categorize metrics into those showing improvement and those that can be improved. Take decisive actions on the latter category to efficiently achieve the set targets.",
              // popupImage: work3,
            },
          ],
    
      };
case "bi-modernization":
        return {
          headerTitle: "Bi-Modernization",
          // headerImage: image,
          image: image1, // No specific image provided on the page
          cards: [
            {
              title: "Data Visualization",
              description:
                "Utilize data reporting powered by natural language generation (NLG) to extract valuable insights and enhance decision-making. Employ visuals for enterprise data warehouse (EDW) implementation to leverage both self-service and pre-processed data effectively.",
              // popupImage: work1,
            },
            {
              title: "Dashboarding",
              description:
                "Enhance business decision-making with advanced BI dashboards featuring best-in- breed applications. Access multiple dashboarding options on modernized data, enabling data scientists to drive value more rapidly.",
              // popupImage: work2,
            },
            {
              title: "Self-Service Reporting",
              description:
                "Empower users to construct their dashboards and reports independently, without requiring support from the IT team. Enable periodic or ad-hoc reporting on modernized data tailored to specific business use cases and requirements.",
              // popupImage: work3,
            },
          ],
    
      };
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
        {content.image && <Framework img={content.image} />}
      </div>
    </div>
  );
};

export default Methodology;


// import React from "react";
// import { useParams } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Framework from "./Framework";
// import image1 from "../../../image/workflow1.jpg";

// const Banner = ({ headerTitle }) => {
//   const { t } = useTranslation();
//   return (
//     <div className="relative h-64 bg-[#ff6600] overflow-hidden">
//       <div className="relative h-full flex flex-col justify-center items-center text-white p-4">
//         <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center">
//           {t(headerTitle)}
//         </h1>
//       </div>
//     </div>
//   );
// };

// const MethodologyCard = ({ title, description }) => {
//   const { t } = useTranslation();
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-[calc(33.333%-1rem)] transition-transform duration-300 ease-in-out hover:scale-105">
//       <div className="text-orange-500 text-3xl mb-4">{t("methodologyCard.icon")}</div>
//       <h3 className="text-xl font-semibold mb-2">{t(title)}</h3>
//       <p className="text-gray-600">{t(description)}</p>
//     </div>
//   );
// };


//   const Methodology = () => {
//     const { t } = useTranslation();
//     const { methodType } = useParams();
  
//     const getContent = (type) => {
//       switch (type) {
//         case "managed-services":
//           return {
//             headerTitle: "methodology.managed_services.header",
//             Frameworkimage: image1,
//             cards: [
//               {
//                 title: "methodology.managed_services.incident_management.title",
//                 description: "methodology.managed_services.incident_management.description",
//               },
//               {
//                 title: "methodology.managed_services.service_request_management.title",
//                 description: "methodology.managed_services.service_request_management.description",
//               },
//               {
//                 title: "methodology.managed_services.problem_management.title",
//                 description: "methodology.managed_services.problem_management.description",
//               },
//               {
//                 title: "methodology.managed_services.change_management.title",
//                 description: "methodology.managed_services.change_management.description",
//               },
//             ],
//           };
//         case "cloud-consulting-strategy-and-migration":
//           return {
//             headerTitle: "methodology.cloud_consulting.header",
//             cards: [
//               {
//                 title: "methodology.cloud_consulting.consulting.title",
//                 description: "methodology.cloud_consulting.consulting.description",
//               },
//               {
//                 title: "methodology.cloud_consulting.strategy.title",
//                 description: "methodology.cloud_consulting.strategy.description",
//               },
//               {
//                 title: "methodology.cloud_consulting.migration.title",
//                 description: "methodology.cloud_consulting.migration.description",
//               },
//             ],
//           };
//         case "cloud-native-application-development-and-testing":
//           return {
//             headerTitle: "methodology.cloud_native.header",
//             cards: [
//               {
//                 title: "methodology.cloud_native.microservices.title",
//                 description: "methodology.cloud_native.microservices.description",
//               },
//               {
//                 title: "methodology.cloud_native.agile_development.title",
//                 description: "methodology.cloud_native.agile_development.description",
//               },
//               {
//                 title: "methodology.cloud_native.system_integration.title",
//                 description: "methodology.cloud_native.system_integration.description",
//               },
//               {
//                 title: "methodology.cloud_native.testing_qa.title",
//                 description: "methodology.cloud_native.testing_qa.description",
//               },
//             ],
//           };
//         // Add more cases for other method types as needed
//         default:
//           return {
//             headerTitle: "Unknown Service",
//             cards: [],
//           };
//       }
//     };


//   const content = getContent(methodType);

//   return (
//     <div className="bg-gray-100 mt-[5rem]">
//       <Banner headerTitle={`methodologies.${methodType}.headerTitle`} />

//       <div className="container mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold mb-4">{t("bannerMethod.title")}</h2>
//           <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
//         </div>
//         <div className="flex flex-wrap justify-center gap-8">
//           {content.cards && content.cards.length > 0 ? (
//             content.cards.map((item, index) => (
//               <MethodologyCard
//                 key={index}
//                 title={`methodologies.${methodType}.cards.${index}.title`}
//                 description={`methodologies.${methodType}.cards.${index}.description`}
//               />
//             ))
//           ) : (
//             <p>{t("noCards")}</p>
//           )}
//         </div>
//         {content.Frameworkimage && <Framework img={content.Frameworkimage} />}
//       </div>
//     </div>
//   );
// };

// export default Methodology;