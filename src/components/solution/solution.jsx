import React from "react";
import { useParams } from "react-router-dom";
import app from "../../image/app.jpg";
import automation from "../../image/automation.jpg";
import image4 from "../../image/change.jpg";
import cloud from "../../image/cloud.jpg";
import cyber from "../../image/cyber.jpg";
import data from "../../image/data.jpg";
import finops from "../../image/finops.jpg";
import devops from "../../image/devops.jpg";
import aiops from "../../image/aiops.jpg";
import image1 from "../../image/incident.jpg";
import image from "../../image/infrastructure.jpg";
import image2 from "../../image/product.jpg";
import image3 from "../../image/service.jpg";
import CardBody from "../solution/solutionbody/CardBody";
import CardHeader from "../solution/solutionheader/CardHeader";
import work1 from "../../image/workflow1.jpg";
import work2 from "../../image/workflow2.jpg";
import work3 from "../../image/workflow3.jpg";

function CardsPage() {
  const { serviceType } = useParams();

  const getContent = (type) => {
    switch (type) {
      case "infrastructure":
        return {
          headerTitle: "Infrastructure",
          headerImage: image,
          cards: [
            {
              image: image1,
              title: "Incident Management",
              description:
                "Proactively monitoring Resource (Servers/applications) and ensuring comprehensive L1, L2, and L3 support involves a structured approach to IT service management.",
              popupImage: work1,
              name: "incident-management",
            },
            {
              image: image3,
              title: "Service Request Management",
              description:
                "Operating an ITSM-enabled (IT Service Management) Service Desk involves leveraging ITSM best practices and tools to efficiently manage and fulfill customer requests while increasing comprehensive team productivity.",
              popupImage: work2,
              name: "service-request-management",
            },
            {
              image: image2,
              title: "Problem Management",
              description:
                "Maintaining performance against Experience Level Agreements (XLAs) involves not only meeting traditional SLAs but also focusing on the quality of the user experience. This requires integrating customer-centric metrics, generating actionable alerts, and deriving insights to continuously enhance customer satisfaction.",
              popupImage: work3,
              name: "problem-management",
            },
            {
              image: image4,
              title: "Change Management",
              description:
                "DevSecOps implementation success factors include output data with improvements in releases, over 30% lower build failure in advanced environments, over 20% improvement in remediation and false positives, and complete elimination of security breaches.",
              popupImage: work2,
              name: "change-management",
            },
          ],
        };
      case "cloud-services":
        return {
          headerTitle: "Cloud Services",
          headerImage: cloud,
          cards: [
            {
              image: cloud,
              title: "Managed Services",
              description: `Our Methodology\n
                                      - Incident Management: Proactively monitoring Resource (Servers/applications) and ensuring comprehensive L1, L2, and L3 support involves a structured approach to IT service management.\n
                                      - Service Request Management: Operating an ITSM-enabled (IT Service Management) Service Desk involves leveraging ITSM best practices and tools to efficiently manage and fulfill customer requests while increasing comprehensive team productivity.`,
              popupImage: work3,
              name: "managed-services",
            },
            {
              image: cloud,
              title: "Cloud Consulting, Strategy and Migration",
              description: `Our Methodology\n
                                      - Cloud Consulting: Craft a precise and easily understandable strategy and pathway for migrating to the cloud. Utilize reputable scanning tools and engage in discussions with stakeholders to grasp the current infrastructure and application landscape.\n
                                      - Cloud Migration Strategy: Develop a customized migration strategy, sorting applications into categories like rehosting, re-platforming, re-architecting, and refactoring.`,
              popupImage: work2,
              name: "cloud-consulting-strategy-and-migration",
            },
            {
              image: cloud,
              title: "Cloud Native Application Development & Testing",
              description: `Our Methodology\n
                                      - Microservices: Organize applications into a collection of microservices to enhance continuous delivery and deployment capabilities.\n
                                      - Agile Development: Streamline and expedite the application development process by adopting an agile approach that fosters innovation.`,
              popupImage: work1,
              name: "cloud-native-application-development-and-testing",
            },
            {
              image: cloud,
              title: "Cloud Governance & Reporting",
              description: `Our Solutions\n
                                      - Cloud Governance: Utilize Webress's intelligent cloud management platform to enable automatic alerts and triggers for security incidents and budget thresholds.\n
                                      - Automation Reporting: Automate the generation of monthly and quarterly reports for cloud management and optimization purposes.`,
              popupImage: work1,
              name: "cloud-governance-and-reporting",
            },
            {
              image: cloud,
              title: "Cloud Discovery and Optimization",
              description: `Our Methodology\n
                                      - Single-Pane View: Replace manual tracking with Webress's agile monitoring driven by automated discovery, enhancing visibility and control over the infrastructure.\n
                                      - Automated Cloud Optimization: Automate monitoring and optimization processes to ensure efficient resource utilization.`,
              popupImage: work2,
              name: "cloud-discovery-and-optimization",
            },
            {
              image: cloud,
              title: "Cloud and Platform Modernization",
              description: `Our Methodology\n
                                      - Approach: Identify applications with the potential to yield a minimum of 30% cost-benefit in the short-to-medium term while aiming for close to a 99.5% uptime improvement. Maintain platforms and applications strategically to serve as catalysts for future business augmentation.`,
              popupImage: work3,
              name: "-and-platform-mcloudodernization",
            },
          ],
        };
      case "application-services":
        return {
          headerTitle: "Application Services",
          headerImage: app,
          cards: [
            {
              image: app,
              title: "Application Assessment",
              description:
                "Our Methodology\nDesign: Starting with stakeholder meetings is a solid foundation for a standardized application assessment approach. By engaging with stakeholders early on, the assessment process can align closely with the needs and goals of the organization. Capturing key requirements such as the future roadmap and scalability ensures that the assessment accounts for both short-term and long-term needs.",
              popupImage: work1,
              name: "application-assessment",
            },
            {
              image: app,
              title: "SaaS Product and Platform Development",
              description:
                "Our Solution\nConsulting: Evaluate the current software to gauge its level of SaaS maturity and devise a plan for SaaS adoption. Obtain guidance on best practices for processes and technologies, utilizing specialized expertise in databases, networks, and systems.\nImplementation: Deploy the SaaS framework employing cutting-edge technologies and tools within a microservices infrastructure. Our approach to implementation ensures scalability, security, and compliance with industry standards.",
              popupImage: work2,
              name: "saas-product-and-platform-development",
            },
            {
              image: app,
              title: "Application Maintenance and Enhancement",
              description:
                "Our Methodology\nCorrective: Obtain ITIL support for application management, establish standard operating procedures (SOPs) for applications, and ensure compliance with application security standards.\nAdaptive: Enhance the application, ensure compatibility updates for mobile applications across devices and operating systems, and maintain application knowledge through a known error database.\nPreventive: Attain SaaS-based multi-tenancy, configure settings, manage patches, and perform regular upgrades to ensure optimal performance and security.",
              popupImage: work3,
              name: "application-maintenance-and-enhancement",
            },
            {
              image: app,
              title: "Application Modernization",
              description:
                "Our Methodology\nAssess: Perform a tool-based evaluation of the current architecture and infrastructure, then proceed with system integration. Utilize insights from the discovery process alongside recommendations derived from the 6Rs of migration.\nModernize: Deploy and orchestrate containerization of application components in alignment with cloud-native principles. Implement the best practices outlined in the Well-Architected Framework while identifying any assessment deductions.",
              popupImage: work1,
              name: "application-modernization",
            },
          ],
        };
      case "cyber-security":
        return {
          headerTitle: "Cyber-security",
          headerImage: cyber,
          cards: [
            {
              image: cyber,
              title: "Data Strategy",
              description:
                "Our Solutions\nConsulting & Strategy: Establish best practices for setting up a Data Center of Excellence (COE) aligned with industry standards. Develop a data strategy and guidance tailored to the organizational infrastructure and business objectives.\nAssessment: Evaluate the current data pipeline and devise an architecture that meets requirements and aligns with the data maturity stage.",
              popupImage: work1,
              name: "data-strategy",
            },
            {
              image: cyber,
              title: "Data Governance and Engineering",
              description:
                "Our Solutions\nData Security: Secure data both in transit and at rest through encryption managed keys, and folder-level access control lists (ACLs). Establish access control with object-level security, multi-factor authentication, and network security measures.\nCompliance and Audit: Implement a set of control and audit procedures to ensure consistent compliance, thereby reducing operational complexity and meeting privacy regulations.",
              popupImage: work2,
              name: "data-governance-and-engineering",
            },
            {
              image: cyber,
              title: "Cloud Security Engineering",
              description:
                "Our Methodology\nRequirement Gathering: Our cloud security engineering methodology commences with a comprehensive grasp of existing security guidelines, policies, tools, and licenses. Data forms the foundation for security assessment and implementation.\nSecurity Assessment and Gap Analysis: Evaluate the current security implementation against established guidelines and policies. Utilize comprehensive workshops and tool findings to generate actionable insights and bridge security gaps.",
              popupImage: work3,
              name: "cloud-security-engineering",
            },
            {
              image: cyber,
              title: "Cloud Security Operations",
              description:
                "Our Solutions\nSecurity Monitoring and Analytics: Perform event log and firewall log analyses with continuous cloud monitoring implemented. Safeguard systems from DDoS attacks, enable endpoint protection, establish perimeter security, and implement proactive incident response measures.\nIncident Management and Response: Develop an agile, enterprise-focused response mechanism to effectively address security incidents. Utilize secure and scalable service frameworks to ensure resilience and compliance.",
              popupImage: work1,
              name: "cloud-security-operations",
            },
          ],
        };
      case "data-analytics":
        return {
          headerTitle: "Data Analytics",
          headerImage: data,
          cards: [
            {
              image: data,
              title: "Data Strategy",
              description:
                "Our Solutions\nConsulting & Strategy: Establish best practices for setting up a Data Center of Excellence (COE) aligned with industry standards. Develop a data strategy and guidance tailored to the organizational infrastructure and business objectives.\nAssessment: Evaluate the current data pipeline and devise an architecture that meets requirements and aligns with the data maturity stage.",
              popupImage: work1,
              name: "data-strategy",
            },
            {
              image: data,
              title: "Data Governance and Engineering",
              description:
                "Our Solutions\nData Security: Secure data both in transit and at rest through encryption managed keys, and folder-level access control lists (ACLs). Establish access control with object-level security, multi-factor authentication, and network security measures.\nCompliance and Audit: Implement a set of control and audit procedures to ensure consistent compliance, thereby reducing operational complexity and meeting privacy regulations.",
              popupImage: work2,
              name: "data-governance-and-engineering",
            },
            {
              image: data,
              title: "Cloud Security Engineering",
              description:
                "Our Methodology\nRequirement Gathering: Our cloud security engineering methodology commences with a comprehensive grasp of existing security guidelines, policies, tools, and licenses. Data forms the foundation for security assessment and implementation.\nSecurity Assessment and Gap Analysis: Evaluate the current security implementation against established guidelines and policies. Utilize comprehensive workshops and tool findings to generate actionable insights and bridge security gaps.",
              popupImage: work3,
              name: "cloud-security-engineering",
            },
            {
              image: data,
              title: "Cloud Security Operations",
              description:
                "Our Solutions\nSecurity Monitoring and Analytics: Perform event log and firewall log analyses with continuous cloud monitoring implemented. Safeguard systems from DDoS attacks, enable endpoint protection, establish perimeter security, and implement proactive incident response measures.\nIncident Management and Response: Develop an agile, enterprise-focused response mechanism to effectively address security incidents. Utilize secure and scalable service frameworks to ensure resilience and compliance.",
              popupImage: work1,
              name: "cloud-security-operations",
            },
          ],
        };
      default:
        return {
          headerTitle: "Unknown Service",
          headerImage: image,
          cards: [],
        };
    }
  };

  //
  const content = getContent(serviceType);

  return (
    <div className="cards-page">
      <CardHeader title={content.headerTitle} image={content.headerImage} />
      {console.log(content.headerTitle)}
      <CardBody cards={content.cards} />
    </div>
  );
}

export default CardsPage;
