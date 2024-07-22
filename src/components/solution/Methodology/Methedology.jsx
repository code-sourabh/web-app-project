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
      case 'cloud-consulting-strategy-and-migration':
        return {
          headerTitle: 'Cloud Consulting, Strategy and Migration',
          // headerImage: cloud,
          cards: [
            {
                
                title: 'Cloud Consulting',
                description: `Craft a precise and easily understandable strategy and pathway for migrating to the cloud. Utilize reputable scanning tools and engage in discussions with stakeholders to grasp the current infrastructure and application landscape. Using this information, develop a customized migration strategy, sorting applications into categories like rehosting, re-platforming, re-architecting, and refactoring.`,
                
              },
              {
                title: 'Cloud Strategy',
                description: `Webrass cloud consultants and architects possess a thorough understanding of business objectives, current IT infrastructure, technological landscape, and overall IT budget. Following workshops with CXOs, often accompanied by a cloud center of excellence team, they craft a comprehensive cloud roadmap. This roadmap serves as a guiding document for the entire transformation journey, ensuring alignment with strategic goals and efficient resource utilization.`,
                
              },
              {
                
                title: 'Cloud Migration & Deployment',
                description: `Based on insights gained from the consulting phase, proceed with either migrating or redeploying applications. Begin by establishing a secure cloud landing zone, followed by the migration or deployment process. Employ Blazeclan’s proprietary frameworks, featuring robust automation capabilities, to facilitate an agile migration. These frameworks come equipped with pre-defined technical artifacts, ensuring a smooth and efficient transition to the cloud.`,
                
              },
              
          ]
        };
      case 'cloud-native-application-development-and-testing':
        return {
          headerTitle: 'Cloud Native Application Development & Testing',
          cards: [
            {
              
              title: 'Microservices',
              description: 'Organize applications into a collection of microservices to enhance continuous delivery and deployment capabilities. Deploy cloud-native applications incorporating best practices seamlessly and rapidly, ensuring efficiency and scalability at every stage of development and deployment..',
            
            },
            {
           
              title: 'Agile Development',
              description: 'Streamline and expedite the application development process by adopting an agile approach that fosters innovation. Implement DevOps integration to seamlessly transition applications from design to production, accelerating the delivery timeline and enhancing operational efficiency.',
              
            },
            {
        
              title: 'System Integration',
              description: 'Efficiently merge diverse applications to simplify IT infrastructure and enhance ROI. Utilize API integration to create competitive advantages, boosting agility and optimizing process efficiency.',
             
            },
            {
            
              title: 'Testing and Quality Assurance',
              description: 'Streamline and expedite the testing and quality assurance process for cloud-native applications by implementing a fault-tolerant framework with a zero-trust approach. Ensure smooth application releases and proactively mitigate issues before deploying updates to production environments.',
             
            },
          ]
        };
      case 'cloud-governance-and-reporting':
        return {
          headerTitle: 'Cloud Governance & Reporting',
          // headerImage: cyber,
          cards: [
            {
              
              title: 'Cloud Governance',
              description: "Utilize WeBrass's intelligent cloud management platform to enable automatic alerts and triggers for security incidents and budget thresholds. Implement resilient guardrails to ensure robust security measures and establish dynamic control over the cloud environment through a centralized governance approache." ,
              
            },
            {
             
              title: 'Automation Reporting',
              description: 'Automate the generation of monthly and quarterly reports for cloud operations, security, and costs. Enhance decision-making with real-time health reports of cloud resources, metric graph reports of critical servers, and incident or service request reports distributed via Slack channels. This ensures deep insights and facilitates proactive management of cloud infrastructure.',
             
            },
           
          ]
        };
      case 'cloud-discovery-and-optimization':
        return {
          headerTitle: 'Cloud Discovery and Optimization',
          // headerImage: data,
          cards: [
            {
              
              title: 'Single-Pane View',
              description: "Replace manual tracking with WeBrass's agile monitoring driven by automated discovery, eliminating the need for manual effort in keeping track of application and workload locations and their interaction paradigms. This automated approach ensures efficient and accurate monitoring, enhancing visibility and control over the infrastructure.",
            
            },
            {
             
              title: 'Automated Cloud Optimization',
              description: 'Automate the monitoring, correlation, and visualization of cloud resources and their health metrics to enable real-time corrective responses. Enhance operational efficiency and optimize cloud service utilization by implementing well-defined and manageable IT processes. This approach ensures proactive management and maximizes the benefits of cloud infrastructure..',
              
            },
          ]
        };
      case 'cloud-and-platform-modernization':
        return {
          headerTitle: 'Cloud and Platform Modernization',
          // headerImage: automation,
          cards: [
            {
             
              title: 'Approach',
              description: 'Identify applications with the potential to yield a minimum of 30% cost-benefit in the short-to-medium term while aiming for close to a 99.5% uptime improvement. Maintain platforms and applications strategically to serve as catalysts for future business augmentation. This approach ensures optimal resource allocation and maximizes the impact of technology investments on business growth and agility.',
             
            },
            {
              title: 'Identify and Design',

              description: 'Analyze applications and components considering factors such as business agility, demand, criticality, expansion plans, performance, OPEX, and CAPEX. Prioritize those with the greatest potential for improvement. Conduct minimal refactoring to enhance high availability, scalability, and end-to-end DevOps integration. For areas showing significant gains in consumption costs and availability, undertake containerization and refactoring efforts. This approach optimizes resource allocation and enhances the efficiency of IT infrastructure..',
            
            },
          ]
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

export default Methodology
