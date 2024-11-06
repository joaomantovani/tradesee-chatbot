export function scrapper() {
  return {
    company: {
      name: "Resfri Ar",
      description:
        "Brazil's largest manufacturer of automotive roof air coolers and refrigerators",
      location: {
        address: "BR 116, KM 40,5 No.: 6350, Vêneto, Vacaria/RS",
        zip_code: "95210250",
        contact: {
          phone: "+55 54 3511 1111",
          technical_assistance: "+55 54 3511 1107",
        },
      },
      certifications: ["ISO 9001", "ISO 14001", "IATF 16949", "VDA"],
      benefits: [
        "Personalized service for each region",
        "Market leader company",
        "Periodic technical/commercial visit",
        "Free technical assistance service",
        "High quality products",
        "Recognized by the world's largest truck manufacturers",
      ],
    },
    products: {
      categories: [
        {
          name: "Roof Air Coolers",
          subcategories: [
            {
              name: "Truck Air Cooler",
              models: [
                {
                  model: "800R8",
                  description: "S8 Inspire Roof Air Cooler",
                  features: "Serie 8 Inspire",
                },
                {
                  model: "800R8I",
                  description: "S8 Inspire Internal",
                  features: "Roof Air Cooler Internal Serie 8 Inspire",
                },
              ],
            },
            {
              name: "Agricultural Air Cooler",
            },
            {
              name: "MotorHome Air Cooler",
            },
          ],
        },
        {
          name: "Refrigerators",
          subcategories: [
            {
              name: "Portable Refrigerators",
              models: [
                {
                  model: "RES60K1",
                  description: "60 Liters Portable Refrigerator",
                  capacity: "60 liters",
                },
                {
                  model: "RES45K1",
                  description: "45 Liters Portable Refrigerator",
                  capacity: "45 liters",
                },
                {
                  model: "RESGI22/NTG",
                  description: "Scania NTG R Truck Refrigerator",
                  capacity: "22 liters",
                },
                {
                  model: "RESGI25/ACTROS",
                  description: "Mercedes Actros Truck Refrigerator",
                  capacity: "25 liters",
                },
                {
                  model: "RESGP26",
                  description: "Portable Bivolt 26 Liters Refrigerator",
                  capacity: "26 liters",
                },
                {
                  model: "RES20J",
                  description: "Portable 20 Liters Refrigerator",
                  capacity: "20 liters",
                },
              ],
            },
            {
              name: "Motorhome Refrigerators",
              models: [
                {
                  model: "RESKS02",
                  description: "Digital Controller Motorhome Refrigerator",
                  capacity: "153 liters",
                },
              ],
            },
            {
              name: "Truck Refrigerators",
              models: [
                {
                  model: "RESGI32/FH",
                  description: "Volvo FH Truck Refrigerator",
                  capacity: "32 liters",
                },
              ],
            },
          ],
        },
        {
          name: "Cozinhas",
          products: [
            {
              model: "RES1140CR",
              description: "Kitchen Resfri Ar",
              size: "1140 mm",
            },
          ],
        },
        {
          name: "Accessories",
          products: ["Solar Panel Kit 200W", "Digital Controller"],
        },
        {
          name: "Air Conditioning",
          models: [
            {
              model: "200AC",
              description: "Digital Air Conditioning Series 2 Inverter",
            },
          ],
        },
      ],
    },
    distribution: {
      opportunity: "Be a distributor",
      description:
        "Resfri Ar offers a business opportunity for entrepreneurs who seek credibility with guaranteed customer satisfaction and support from a renowned brand.",
      contact: {
        sales_department: "+55 54 3511 1111",
        link: "I WANT TO KNOW MORE",
      },
    },
  };
}
