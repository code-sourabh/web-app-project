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
              name: "incident-management",
            },
            {
              image: image3,
              title: "Service Request Management",
              name: "service-request-management",
            },
            {
              image: image2,
              title: "Problem Management",
              name: "problem-management",
            },
            {
              image: image4,
              title: "Change Management",
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
              name: "managed-services",
            },
            {
              image: cloud,
              title: "Cloud Consulting, Strategy and Migration",
              name: "cloud-consulting-strategy-and-migration",
            },
            {
              image: cloud,
              title: "Cloud Native Application Development & Testing",
              name: "cloud-native-application-development-and-testing",
            },
            {
              image: cloud,
              title: "Cloud Governance & Reporting",
              name: "cloud-governance-and-reporting",
            },
            {
              image: cloud,
              title: "Cloud Discovery and Optimization",
              name: "cloud-discovery-and-optimization",
            },
            {
              image: cloud,
              title: "Cloud and Platform Modernization",
              name: "cloud-and-platform-modernization",
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
              name: "application-assessment",
            },
            {
              image: app,
              title: "SaaS Product and Platform Development",
              name: "saas-product-and-platform-development",
            },
            {
              image: app,
              title: "Application Maintenance and Enhancement",
              name: "application-maintenance-and-enhancement",
            },
            {
              image: app,
              title: "Application Modernization",
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
              name: "data-strategy",
            },
            {
              image: cyber,
              title: "Data Governance and Engineering",
              name: "data-governance-and-engineering",
            },
            {
              image: cyber,
              title: "Cloud Security Engineering",
              name: "cloud-security-engineering",
            },
            {
              image: cyber,
              title: "Cloud Security Operations",
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
              title: "Managed Analytics",
              name: "managed-analytics",
            },
            {
              image: data,
              title: "BI Modernization",
              name: "bi-modernization",
            },
          ],
        };
      case "automation":
        return {
          headerTitle: "Automation",
          headerImage: data,
          cards: [
            {
              image: data,
              title: "DevSecOps",
              name: "devsecops",
            },
            {
              image: data,
              title: "DevOps Transformation",
              name: "devops-transformation",
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
