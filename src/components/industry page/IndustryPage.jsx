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
          title: "Finance",
          para1:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quidem ut consectetur eum aliquam magni laudantium corrupti explicabo quibusdam nobis perferendis, repellendus non.",
          para2:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quidem ut consectetur eum aliquam magni laudantium corrupti explicabo quibusdam nobis perferendis, repellendus non.",
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
              title: "Remote Patient Monitoring",
              description:
                "Enabling remote monitoring of patients' health conditions, reducing hospital visits.",
                image: "hello",
            },
            {
              title: "Telemedicine",
              description:
                "Providing telemedicine services to connect patients with healthcare professionals remotely.",
                image: "hello",
            },
            {
              title: "Telemedicine",
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum odio magnam voluptates quibusdam commodi saepe iure asperiores ratione exercitationem beatae, quam aspernatur nesciunt architecto veniam quasi est iste eligendi aperiam placeat provident quidem dolor repellat? Voluptas officiis eos nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quaerat inventore porro, asperiores tempora hic modi ducimus voluptas earum cumque reiciendis similique! Tenetur debitis voluptatem minus quibusdam! Exercitationem rerum eaque repellat veniam, eligendi ut porro rem accusantium atque minus. Suscipit molestiae incidunt alias autem totam quasi eum hic aliquid qui.',
                image: "hello",
            },
          ],
        };
      case "tech":
        return {
          title: "Tech",
          para1:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quidem ut consectetur eum aliquam magni laudantium corrupti explicabo quibusdam nobis perferendis, repellendus non.",
          para2:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quidem ut consectetur eum aliquam magni laudantium corrupti explicabo quibusdam nobis perferendis, repellendus non.",
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
              title: "Remote Patient Monitoring",
              description:
                "Enabling remote monitoring of patients' health conditions, reducing hospital visits.",
                image: "hello",
            },
            {
              title: "Telemedicine",
              description:
                "Providing telemedicine services to connect patients with healthcare professionals remotely.",
                image: "hello",
            },
            {
              title: "Telemedicine",
              description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laborum odio magnam voluptates quibusdam commodi saepe iure asperiores ratione exercitationem beatae, quam aspernatur nesciunt architecto veniam quasi est iste eligendi aperiam placeat provident quidem dolor repellat? Voluptas officiis eos nihil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quaerat inventore porro, asperiores tempora hic modi ducimus voluptas earum cumque reiciendis similique! Tenetur debitis voluptatem minus quibusdam! Exercitationem rerum eaque repellat veniam, eligendi ut porro rem accusantium atque minus. Suscipit molestiae incidunt alias autem totam quasi eum hic aliquid qui.',
                image: "hello",
            },
          ],
        };
    }
  };

  const content = getContent(industriesType);

  return (
    <div className="bg-gradient-to-br from-orange-50 to-white flex flex-col mt-16">
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
