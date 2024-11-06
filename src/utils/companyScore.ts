import OpenAI from "openai";

const config = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true, // Permite uso no navegador; use com cautela
});

export const generateCompanyScore = () => {
  return {
    previous_company: {
      name: "Resfri Ar",
    },
    search_results: [
      {
        Name: "HOLLEN",
        Description:
          "HOLLEN is a company that provides support to automotive OEM manufacturers and their suppliers in the area of quality assurance of delivered parts. Our task is to eliminate defects that could affect the performance and safety of vehicles. We are a Slovak company with German know-how in the automotive industry, operating since 2001. We provide services professionally and with guaranteed quality in accordance with our certificates and specific customer requirements.\n\nOur services include the following benefits:\n- Response time max 1 hour and start of implementation within 2 hours 24/7/365, which means that we are always ready to solve any problem with your parts.\n- Increasing the quality of delivered work by internal trained auditors VDA 6.3, which means that our processes are in line with international standards and norms.\n- Unique experience with the operation of Warenfilter for VW Slovakia and Škoda Auto, which means that we are able to filter and check a large amount of parts for these renowned brands.\n- Own, trained team of more than 90 technicians and coordinators and 600 collaborators, which means that we have enough human resources and expertise to perform our work effectively and qualitatively.\n- Provision of work tools, tools and materials, which means that we have all the necessary equipment and material to perform our work without unnecessary delays or additional costs.\n- Preparation of standard reports and specific statistical outputs, which means that we provide transparent and detailed information about our work and its results.",
        "Reason for Selection":
          "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
        score_fit: 10,
      },
      {
        Name: "MATADOR Group",
        Description:
          "The MATADOR Group established a key position in the Central European market as a system supplier of automotive and non-automotive solutions. The company was founded more than 114 years ago and significantly influenced the history of the Slovak industry. \nFor global customers we provide services that help shaping the mobility universe. Whether it is engineering and design of vehicles or serial production of structural parts we are ready to go the extra mile. To support this, we offer broad range of industrial services including factory automation, stamping tools production or mechanical engineering.  All together our portfolio represents a well versed range of possibilities for bringing ideas to life. \nOur more than 1800 employees are located at our premises in Slovakia, Czech Republic and Russia. This global orientation enables us to provide our customers best services in time and quality which we see as a precondition to be the first choice for them.",
        "Reason for Selection":
          "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
        score_fit: 10,
      },
      {
        Name: "SEVOTECH s.r.o.",
        Description:
          "More than 25 years reliable partner for armed forces.\n*Supply, repair, maintenance and production military technologies.\n- Tactical communications systems\n- Optical devices for armoured vehicles\n- Repair and maintenance wheeled and tracked armoured vehicles",
        "Reason for Selection":
          "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
        score_fit: 10,
      },
      {
        Name: "FYSAM Auto Decorative Slovakia s.r.o.",
        Description:
          "From the construction to the raw part production, the anodization to final assembly - the FYSAM Auto Decorative offers its customers the entire production chain from one source.\nIn addition to the development of new, innovative products, our development and sales departments are above all distinguished by the ability to customize solutions precisely to the customers requirements. The FYSAM Auto Decorative can also implement special customer requests quickly and with short notice.\nThe manufacturing and delivery of complete system elements, like window trims with prefabricated seals, support the optimization of the operating procedures and reduce the process costs for the customers.",
        "Reason for Selection":
          "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
        score_fit: 10,
      },
      // {
      //   Name: "Shapkin",
      //   Description:
      //     "Our company represents a branch of engineering concerned with the design, construction and operation of machines for sporting contests, specifically including but not limited to ground vehicles, aerobatic and water crafts in all disciplines.\n\nOver the course of many years weve brought in specialized focus on prototyping, fabrication, performance analysis and improvement of suspension components, particularly hydraulic dampers (chassis shock absorbers) .\n\nMoreover to the above, we provide technical consulting, test procedure and racing event support, dedicated specialist training and problem-solving activity for suspension workshops.\n\nEngaged in racing damper maintenance works from the beginning of our business we are pushing forward the provision of services of all dampers brands for our customers.\n\nIn the special context of our professional practice we are worthful source of speific tooling and parts for suspension oriented interaction.",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "Centrum bezpečnej jazdy",
      //   Description:
      //     "Prvé profesionálne centrum pre výcvik a vzdelávanie vodičov osobných, nákladných vozidiel, autobusov a motocyklov. Sme súčasťou areálu motoristického okruhu Slovakia Ring v Orechovej Potôni. \n\nwww.cbj.sk\n\nAkadémia vzdelávania vodičov s.r.o. represents the first Center of Safe Driving in the area of speedway of Slovakia Ring in Orechová Potôň. We provide courses for all types of drivers, for individual riders and for business groups as well for handling unexpected crisis situation. Practices are for the riders of motorcycles, cars and for goods vehicles. Test your skills and ability, assume the best techniques to control your vehicle in each situations.",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "DefTech Slovakia",
      //   Description:
      //     "We are a R&D/manufacturing company based in Slovakia, specializing in UAVs, data links, radars, signal processing, RF/antenna design, automotive systems and armored vehicles.",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "SiSi Sped spol, s.r.o",
      //   Description:
      //     "The company was established in 2009 , in Trnava - Modranka . \nMain focus of the company is domestic and international truck tranportation and spedition . \nCurren employee headcount is 40 along whit 20 mega trailers and 10 furgons . \nThe SiSi Sped, s.r.o. is focusing on transportation  forwarding, goods transportation and commercial activities. The company specializes in international and domestic forwarding and truck transportation. Since its establishment the company has been undergoing constant development and thus responds to the needs of current and future customers. We do our best to adapt to all requirements and ideas of our customers for a reasonable price. \n\nThe company has a stable position on the transportation market. Our car pool has cars that can transport goods of 100 kg up to 24 000 kg. Our main goal is customer satisfaction, a high quality of the offered services and a reliable car pool. Every year we invest into education as well as the modernization of our companys car pool. \n\nSince 2009 the company has been a holder of the quality management certificate ISO 9001:2000 / EN ISO 9001: 2000. \n\nGoods transportation is provided by curtainsider semi-trailers. \n\nWe transport: \n» goods subject to the ADR Agreement concerning the Carriage of Dangerous Goods \n» industrial goods \n» goods insured according to the CMR Convention \n\nOur vehicles \n» are exclusively Volvo, Scania and Man  top quality from Sweden and Germany \n» are equipped with a navigation and tracking system \n» are equipped with GSM devices with roaming \n» meet the EURO 5 and EURO 6 emission standards \n» are under legal protection of DAS \n» are subject to regular servicing by an authorized garage with 24-hour customer service across Europe",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "Porsche Slovakia",
      //   Description:
      //     "Importer of automotive brands Volkswagen, Audi, SEAT, CUPRA and Volkswagen commercial vehicles.\nOperates a network of independent partners with approximately 50 sales and after-sales dealers in Slovakia. Porsche Slovakia is one of the largest vehicle importers in Slovakia.",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "Interimyou International",
      //   Description:
      //     "A team of experienced HR professionals and automotive industry managers with a focus on development, projects and series in the automotive segment. \nSpecializing in securing workers and providing external and internal specialists with expertise. \nAn established partner on the Czech and Slovak markets as well as on foreign markets within Europe.",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "Motor Group Poprad, Spol. s r.o.",
      //   Description:
      //     "Our philosophy is to provide quality products in conjunction with quality services, with the greatest emphasis on customer satisfaction.\nWe will never leave a customer question unanswered.\nThe Best or Nothing.",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "PATAK MOTORS",
      //   Description:
      //     "PATAK MOTORS microcar combines the classy, timeless design inspired by the gentlemans cars of the 30s with contemporary driving qualities and the braveness to stand out.\n\nWith a silhouette reminiscent of classic cars, the Rodster shows off a beautiful art deco front grille, the distinguished Patak Motors logo masthead, boat tail, retro headlamps and sprocket wheels. This new take on a classic derives inspiration from the gentlemans cars of the 30s, when cars were beautiful, lightweight and efficient without all the extra fuss. Clean, intuitive and in petrol version even analogue interior features, including a wooden dashboard and ergonomic leather seats. Topped off with detailed accessories in chrome or matte black. \n\nA compact size of 3360x1360x1395 mm, aerodynamic shape, and low vehicle weight of 400kg without battery translates into a range of 250 km, easy handling, increased dynamics, enhanced safety and energy efficiency. \n\nWith minimalistic yet steady construction and high-quality materials, the Rodster is designed to be a low maintenance car. \n\nThe Patak Rodster has been designed both as a fully electric or combustion engine vehicle.\n\nThere are two electric versions with a range of 100 km or 250 km respectively. The vehicle can be fully charged with a house plug in just 4 to 9 hours. Electric models have a maximum speed of 130 km/hour, while the combustion engine model with automatic transmission reaches up to 125km/hour. Driving comfort is enhanced by independent, super triangle suspension and rear-wheel drive.\n\n\nRodster has the ambition to become the 2nd or 3rd car for those who are not afraid to stand out and really want to experience the full range of driving emotions. Thanks to the driving licence of B/B1 in the heavy quadricycle category, in some countries the Rodster can be driven from age 16.\n\nPre-order your Rodster at https://patakmotors.com/ now!  \n#electriccar #microcar #citycar #quadricycle #retrocar #urbanmobility #smallcar #greencar",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "Phoenix Quality Services s.r.o.",
      //   Description:
      //     "Our company was established to provide efficient, expert solutions in the area of Quality Assurance and Control services, primarily to manufacturing organizations throughout multiple industry sectors, in particular automotive. \n\nOur primary services include 3rd part inspection, AQL sampling, auditing, proactive and reactive containment, controlled shipping, and supplier development for OEM's and there 1st, 2nd and 3rd tier supply chain. Our working methodology is based on LEAN principles, and we are accredited and certified to ISO9001:2008.\n\nBased in SLovakia, close to the capital Bratislava, Phoenix Quality Services is already a partner to many well known and respected global manufacturing companies.\nOur focus is on providing a flexible cost option, while maintaining the highest service level, achieved by strict internal standards for service delivery, and disciplined cost & waste control. Our company is compact enough to provide you a personal service, but experienced enough to manage a range of large operations.",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "Asseco Solutions SK",
      //   Description:
      //     "As a pioneer and visionary in the ERP sector, Asseco Solutions has been delivering the most up-to-date technologies in the area of cutting-edge business software for twenty years. Thanks to a constant dialog with existing and prospective customers, we always have our finger on the pulse of current market trends and individual company and industry-specific needs.How we work\nThe company philosophy we embody in day-to-day business results in tailored solutions for the larger end of medium-sized companies involved in mechanical and plant engineering, vehicle construction and automotive, series production, wholesale and service providers.\n\nMore than 32,000 customers currently rely on our cutting-edge technological and specialized ERP solutions. This is because we speak our customer's language, making us the ideal partner for demonstrating potential for optimization, improving relevant processes and increasing the growth of your company over the long term.\n\nAlways dependable, always on the level  for absolute investment assurance. As part of the ASSECO Group employing more than 16,600 people, we are the standard bearer for technology of the future in one of the most innovative and fastest growing software companies in Europe. A medium-sized traditional company with the security of the seventh-largest IT provider in Europe.",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "AUBIRI",
      //   Description:
      //     "We specialize in providing the spare parts that keep your vehicles in top condition. \n\n️ With years of experience and a precise approach, we ensure you get the right part the first time, using your vehicles VIN. \n️ Our priorities are quality, express delivery and professional advice, available to you wherever you are in the world.\n️ Order today  well ship today.\n\nAUTORICAMBI s.r.o., now operating under the AUBIRI brand, is a leading European distributor of spare parts for IVECO, Fiat, Peugeot, Citroën, Renault and Ford commercial vehicles and trucks. \nWe take pride in our extensive experience in the automotive parts industry, which led to the founding of AutoRicambi in 2010.\n\nIn 2024, in response to growing global demand, we rebranded to AUBIRI, expanding our reach and solidifying our position in the global market. \n\nOur mission is to keep your business on the road, ensuring your vehicles are always ready for a safe drive.\n\nDiscover why AUBIRI is synonymous with reliability on the road.",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "LOGMAN - POVAŽAN akciová spoločnosť",
      //   Description:
      //     "The company has been established in 1992 and in 1996 became one of the European leader in manufacturing of warning triangles. Until 2017 we produced more than 25 mio. of warning triangles with shipment all over the world. Nowadays is company focused not only on production of warning triangles but also is a significant supplier in automotive industry, electro industry and thanks to blowing machines in food Industry.",
      //   "Reason for Selection":
      //     "Operates in automotive or related industries, making it a potential fit for products like automotive air coolers and refrigerators.",
      //   score_fit: 10,
      // },
      // {
      //   Name: "Plastcom, s.r.o.",
      //   Description:
      //     "Plastcom, spol. s r.o., provides complex services in research, production, recycling and application of engineering plastics for injection moulding, including technical support.\n\nOur product range covers engineering plastics for injection moulding on the basis of the basic polymers polyamide 6 (PA6), polyamide 66 (PA 66), polypropylene (PP), polybutylenetherephtalate (PBT) with chemical reinforcement of glass fibre, glass beads, talc, calc, non-flammable modification, heat and UV resistance and antistatic stabilization.\n\nWe are certified by TÜV SÜD for ISO 9001:2008 (Quality Management System), ISO/TS 16949:2009 (Quality Management System with application for the automotive industry) and ISO 14001:2004 (Environmental Management System).",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "K-Residents",
      //   Description:
      //     "We started with the basic actions of a resident, as for example the support by the start of sorting actions, collected scrap report based on the periodical reports, etc., ending with a technical support in the PPAP of the parts, a detailed support in the SOP phase of the new car models, etc..\n\nThe company K-Residents, is also providing a wide spectrum of actions. Such as Process Optimization, Interim-Management, Quality Management, Consultant, Project Management, Sampling Engineering and the field of resident activities.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "PARMEL s.r.o.",
      //   Description:
      //     "The company PARMEL, founded in 1993, has established itself well on the international market as a software and system house for CAD/CAM special applications, including those for automatic leather cutting. With highly qualified employees and global sales partners, they sell, install and service the specialised applications. It boasts several notable international, large international companies as part of its customer base.\n\nThe team has almost 30 years of experience in the scope of automatic surface optimisation and cutting of leather hides and flat textile materials. Experts in previously manual processes have not only maintained the know-how and implemented them into modern solutions with the support of scientific studies but have to the present day, pushed the level of quality-assured automation in many applications to the 99% mark.\n\nToday PARMEL provides overall solutions for the automotive, upholstered furniture and clothing industries and integrates premium cutters of the latest cutting technology. They count on modern, fully automated trough roller technology for an endless, automatic material feed.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "Compass Europe",
      //   Description:
      //     'In 2004, Zoltán and Miro, the company\'s founders, met and decided to build up a business together. Both had families with children and houses with pools. However, Zoltán was worried that his children had red eyes from the chlorinated water when swimming. They looked for a more gentle pool disinfectant, which they found it in Australia, and saw Compass Pools ceramic pools there for the first time. Since it was difficult to import them to Europe, they opened up a factory for their own production in Senec, Slovakia, within a year.\n\nSince then, under the leadership of Compass Europe, they have been producing luxury swimming pools that have:\n⭐️ a 40 year waterproof guarantee thanks to a ceramic core\n⭐️ Quality and durable surface that protects the color of the pool from UV radiation (15-year warranty)\n⭐️ Stressed parts of the pool reinforced with carbon\n\nThe advantage of the pools produced in this way is a simple and quick installation without a concrete base plate.\n\nAt Compass, we follow the motto "one pool ahead" and constantly innovate. And so our pools are getting better every year:\n\nWe have a self-cleaning pool that requires minimal care\n️ We teach customers to save water - they do not drain the pool during the winter thanks to our HydroEco system.\n We have developed an integrated skimmer for high water levels\n We have improved the structure of the pool by adding carbon mats\n  We are the only pool company gained two RED DOT and IF Product design awards for our YACHT POOL\n In 2022, we will launch an application that will allow customers to place a virtual swimming pool in the garden using augmented reality.\n\nTo date, we have produced more than 30,000 pools at Compass and sell them through a network of independent distributors in 35 countries. Our salespeople belong to #compassfamily and our business relationships have grown into strong friendships. We meet regularly at workshops and pool conferences that we organize ourselves.',
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "GERGONNE SLOVENSKO",
      //   Description:
      //     "GERGONNE SLOVENSKO is the adhesive solution provider.\n The industrial activities are: \n -\tconverting of pressure-sensitive adhesive tapes\n -\tmanufacturing of precise die-cut components from technical rubber, foams and other materials with or without adhesive layer\n\nGERGONNE SLOVENSKO was established as a daughter company of GERGONNE GROUP in 2005. The first Sales office was in Bratislava, from 2006 the manufacturing plant was opened in Liptovský Mikuláš, in the North of Slovakia. \n\nAffiliated sales offices are in:\n-\tPoland \n-\tCzech Republic \n-\tHungary\n-\tRomania\n\nAt the end Gergonne's components are being integrated in more than 100 car models under 25 Brands. \n\nGERGONNE GROUP is a French, industrial, family-owned and independent group. Serving the industry since 1962, GERGONNE offers its clients unique expertise in the manufacturing and converting of technical industrial adhesive tapes, as well as the die-cutting of adhesive or non-adhesive items. \n\nGERGONNE SLOVENSKO is a global supplier in Automotive industry, delivering its customized adhesive solution to 250 clients, located in 24 Countries on 5 continents.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "IPECON",
      //   Description:
      //     "IPECON is a leading provider of innovative solutions in thermal engineering, energy efficiency, and renewable energy technologies. With a team of highly qualified experts, we specialize in the design, implementation, and maintenance of advanced thermal systems and energy solutions tailored to meet the unique needs of our clients.\n\nAt IPECON, we are committed to driving sustainability and efficiency in the energy sector. Our comprehensive range of services includes:\n\n- Thermal Engineering: Development of efficient heating and cooling systems \n   for residential, commercial, and industrial applications.\n- Energy Efficiency Consulting: Providing expert advice and solutions to \n   optimize energy consumption and reduce costs.\n- Renewable Energy Solutions: Designing and implementing systems that \n   harness renewable resources such as solar and wind energy.\n\nFor inquiries, please contact us at: ipecon@ipecon.sk.\n\nWith a focus on innovation and quality, IPECON aims to be your trusted partner in achieving energy sustainability. Our commitment to excellence ensures that we deliver reliable and effective solutions that contribute to a greener future.\n\nJoin us in transforming the energy landscape!",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "3D SYSTEMS Europe",
      //   Description:
      //     "3D Systems is providing following services in automotive industry: \n3D scanning\n3D printing\nMetrology\nDesign and production fixation tools\nReverse engeneering, \nAutomatization \n\n***** Dimensional measurements ***** \nWe will ensure full dimensional measurement including measurement of deviations with contactless, highly precise optical scanner. \nUsable in: \n- Full dimensional measurements according to drawing (PPAP, product validation) \n- Investigation of real product shape and comparison with CAD model \n- Calibration of measurement jigs \n- Large measurement volume (possibility of measurement miniature and oversized objects) \n- Statistical evaluation \n\n***** 3D Scanning ***** \nEffective option how to transfer physical objects in to a digital form with very high precision without further moulding. \nUsable in: \n- Reverse engineering \n- Polygonal model creation \n- Creation of models for 3D printing \n\n***** Reverse engineering and construction ***** Technological process where technical documentation such as CAD models, drawings are created based on finished product. \nUsable in: \n- Creation and modifications of existing CAD models based on scanned data (Step, Catia, etc.) \n- Support in production without technical documentation \n- Creation and modification of drawing documentation \n- Prototyping",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "SLUŽBA NITRA, s.r.o.",
      //   Description:
      //     "SLUŽBA NITRA, s.r.o. was established in 1955. From the 70s company started to focus on industrial section and got its first contract in automotive industry. This cooperation has been growing ever since. Customer portfolio has been spreading as well. Our strategy is to offer to our customers and partners experience, services and know-how in terms of design, development and production. We currently supply more than 35 automotive customers worldwide at the Tier 1 and Tier 2 level. We produce small car interior & exterior lighting products, car electronics and fuse boxes. We are based in Nitra, Slovakia. SLUŽBA NITRA is open for new cooperation & production challenges, do not hesitate to contact us anytime.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "CR-DAT s. r. o.",
      //   Description:
      //     "The company CR-DAT was established in 1991. Main activities in the first few years included delivery of computer technique, designing and realization of computer network, program coding and services in the area of IT . In the year 1996 our company started co-operation with the company OKM GmbH Jena, by distribution of their products, installation, calibration of measuring technique, technical support and training of customers. In the year 2000 our activities were expanded by co-operation with the company Wenzel Präzision GmbH Wiesthal, leading European producer of 3D measuring machines, which is the main supplier for the automobile industry. Our company provides service in Slovakia, Czech republic, Poland, Russia, Belorussia and baltic countries. In the year 2004 the company CR-DAT has finished the building of managment quality system and received the certificate of Quality managment system. In June 2006 we completed accreditation for calibration laboratory by STN EN ISO/IEC 17025:2005 from Slovak national accreditation service.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "Klimasoft s.r.o.",
      //   Description:
      //     "Company established 1997 focused on Industrial Automation, Robotics, Building Automation",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "COMPRESSED GAS s.r.o.",
      //   Description:
      //     "COMPRESSED GAS s.r.o. company specializes mainly in a supply, setting up, installation, repairs and servicing of compressors, blowers, vacuum pumps and compressed gas dryers.  \n\nWe provide the repair of air-conditioning, refrigerating equipment, heat pumps, filters, and chillers and all compressed gas production and treatment equipment. \n\nWe also specialize in fittings. We can provide our clients with acoustic hoods for their compressors, blowers and compressor and refrigerator stations.\n\nWe also supply turnkey compressor stations. If needed, we can provide drawing up of the project and documentation on the project.  \n\nWe provide other additional services for individual customers like servicing, rental, second hand, repairs, revisions, maintenance, compressed gas consumption measuring or technical consultancy.\n_________________________________________________________________________________________________________________________\n\nŠpecializujeme sa najmä na dodávky, montáž, inštaláciu, opravy a servis kompresorov, dúchadiel, vývev a sušičov stlačeného vzduchu.\n\nZabezpečujeme tiež opravu klimatizácii, chladiarenských zariadení, tepelných čerpadiel, filtrov, chillerov a všetkých zariadení na výrobu a úpravu stlačeného vzduchu.\n\nZameriavame sa aj na príslušenstvo. Klientom vieme dodať protihlukové kryty pre kompresory, dúchadlá, kompresorové a chladiace stanice.\n\nTaktiež dodávame kompresorové stanice na kľúč. V prípade potreby zabezpečíme vypracovanie projektov a projektovej dokumentácie.\n\nPre individuálnych zákazníkov tu máme aj ďalšie doplnkové služby ako servis, prenájom, požičovňa, second hand, opravy, revízie, údržba, merania spotreby stlačeného vzduchu, či technické poradenstvo.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "exe, a.s. L10N",
      //   Description:
      //     "exe, a.s. L10N has been providing translation and localization services for global partners since 1993.\nSince then, we have accumulated the know-how to reach the highest levels of optimization of translation processes and trained a family of accomplished linguists who maintain the best standards of language services for humans, by humans.\nWe hone these skills to attain the ideal synergy between fidelity and transparency, the cornerstones of translation we believe in. \n\nAs a subsidiary of a reputable IT solutions provider operating in three CE countries, and historically, we have high affinity for software localisation, however our highly skilled team has successfully grown to encompass technical, automotive, life sciences, legal and marketing projects into over 50 languages.\n\nWe are ISO17100, ISO 9001:2015,  ISO 27001 and ISO 18587 certified and we have been named among TOP 25 Language Service Providers in Eastern Europe by the CSA Research.\n\nGet in touch with us today to explore how we can help you go global.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "VÚZ - Welding Research Institute",
      //   Description:
      //     "The Welding Research institute is an internationally acknowledged, scientific-research, development and manufacturing  centre, active mainly in the field of welding and allied technologies and processes. In was established in Bratislava in the year 1949 and it provides continually the innovative solutions for the industry in the field of material research, welding, surfacing, brazing/soldering, spraying, thermal cutting and heat treatment on the highest professional level for almost 70 years. It is also the member of the International Institute of Welding (IIW) and the European Welding Federation for welding joining and cutting (EWF).\n\nThe Welding Research institute is organising the education of welding personnel in accordance with EWF, IAB and NDT guidelines. It certifies the welding and NDT personnel, the quality management systems for welding and products. It also acts as a Notified Person with authorisation to certify the selected welding equipments.\n\nThe Welding Research Institute is extremely active in the solution of excellence research and development and other professional projects within the international partnerships, including the prestigious projects of the Seventh Framework Programme and Horizont 2020.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "Heneken Conductors",
      //   Description:
      //     "Heneken Conductors is a manufacturer of conductors for power lines that form the infrastructure of transmission and distribution networks. The factory with more than 50-year tradition produces drawn aluminum wires and overhead conductors.\n\nThe conductor production activities are focused on various projects realized for national transmission and distribution companies. \n\nWe prepare our wires on a modern rod breakdown line from Euroalpha. Using stranding machines from Mario Frigerio and SKET we achieve annual capacity over 15.000 tons of finished products. The precision tubes programme operates with 500 tons annual capacity and serves customers from several industries ranging from automotive to construction. Significant investment in laboratory equipment in 2019 guarantees proper testing and quality outputs. Nevertheless, our engineers are constantly improving products and developing new conductor and wire types for different applications.\n\nGet to know with our products: \n\n- Aluminium drawn wires\n- ACSR aluminium conductors steel reinforced\n- SAL conductors\n- AAC all aluminium conductors\n- AAAC all aluminium alloy conductors\n\nWe are part of the Heneken Group, \n\na company founded in 2007 in Slovakia with a focus on metal trade, which gradually entered the manufacturing world as well. The group these days got over 13 members with almost 600 employees around the world who helped to achieve revenue over 500 mil. .\n\nMembers of the Heneken Group:\n\n- Heneken Conductors - Conductors for power lines\n- Heneken Mazak - Zinc Alloys Producer\n- Heneken Melts - Secondary Aluminum and Master Alloys Producer\n- Heneken Metalürji Döküm - Secondary Aluminum and Master Alloys Producer\n- Heneken Ferro Alloys - Trading company focused Ferro Alloys\n- Heneken Helps - Non profit organization\n- Heneken Capital Management - Trading company focused in LME Futures & Options derivatives\n- Heneken Alloys & Minerals - Production of various ferrous and nonferrous metals and various mineral products.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "Sinidbau s.r.o.",
      //   Description:
      //     "Company Sinidbau s.r.o specialises in processing and machining metals with a professional approach tailored to customer needs and specifications. We distribute hard-to-find fasteners and hardware. \nTo guarantee the best quality we are using modern and up-to-date technologies and machinery such as Bystronic 3015 and LVD 134/40 CAD/CNC. Advanced technologies allow us to be precise in cutting with the use of a laser. This approach saves time and can process scales of larger orders without any problem. Furthermore, we offer TIG, Mig and orbital welding for the installation of the pipelines",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "ToolSquare s.r.o.",
      //   Description:
      //     "ToolSquare s.r.o. was founded in the 1999. The company specialize in development and production of molds for plastics with complicated design and production of accurate plastic components mostly for automotive and electrotechnical industry, as well as custom assembly production consisting of several plastic parts. ToolSquare is currently expanding into areas of serial production.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "Infor ERP Experts",
      //   Description:
      //     "At Infor ERP Experts, we specialize in transforming the operational capabilities of manufacturing and automotive industries through advanced ERP solutions. Founded in 2005, we've established ourselves as a leading provider of ERP Infor LN and CloudSuite Industrial Enterprise systems.\n\nOur Expertise:\n\n Custom ERP Implementation: Tailored systems for unique business needs, ensuring seamless integration both on-premises and in the cloud.\n 24/7 Technical Support: Dedicated support to ensure your operations run smoothly around the clock.\n Advanced Programming & Web Development: Custom solutions that extend the functionality and efficiency of your existing systems.\n Integration with Microsoft Technologies: Leveraging tools like Server Products, Office 365, and Azure to enhance your ERP environment.\n\nWhat Sets Us Apart:\n\n Global Reach: With clients across North America, Europe, and Asia, our solutions are designed to meet diverse international compliance and business requirements.\n Data Security and Compliance: Our systems are fortified with robust security measures, ensuring data integrity and regulatory compliance.\n Scalable Solutions: From mid-sized businesses to large enterprises, our ERP systems grow with your company, ensuring longevity and adaptability.\n\nOur Mission:\nTo provide cutting-edge ERP solutions that empower businesses to streamline operations, enhance productivity, and drive sustainable growth. We are passionate about helping our clients leverage technology to gain a competitive edge in their respective industries.\n\nStay Connected:\nWe invite you to follow our page for insights into ERP trends, success stories from our clients, and updates on our services. For more information about how we can assist your business, visit our websites",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "PKZ Logistics",
      //   Description:
      //     "PKZ is a provider of comprehensive logistics services and has been operating in the logistics market for more than 20 years. The main goal of the joint company is to provide our customers with quality logistics services. Since the beginning of its existence, PKZ has been providing full-truck loading and groupage forwarding services, customs services, contract logistics and consultation in the area of logistics and forwarding. \n\nBy actively operating in all areas of logistics services, PKZ has become a reliable and stable provider of logistics services in the Slovak Republic as well as in other countries. As early as in 2006, PKZ was successfully certified according to ISO 9001: 2000 and continually works on improving the quality of its logistic services. In 1996, PKZ began its cooperation with Hellmann Worldwide Logistics, one of the most reputable logistics companies in the world. \n\nThrough cooperation with Hellmann Worldwide Logistics, PKZ is able to secure logistics services for its customers all over the world. This cooperation continues to this day. \nWithin the dynamic development, PKZ founded its subsidiary PKZ Logistics CZ based in the Czech Republic in 2014, and now through its innovative solutions successfully provides logistics services to its customers.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "2J Antennas",
      //   Description:
      //     "2J Antennas is a worldwide supplier of antenna solutions casting our net over Automotive, Marine, Telematic, Automation, and M2M markets.\n\nWith our three RF development sites in the USA, UK, and Slovakia, we have developed a reputation for engineering excellence and self-sufficiency, allowing us to provide rapid custom antenna solutions, supplementing our extensive range of off-the-shelf antenna.\n\nWe utilise a plethora of modern engineering tools, from network analyzers and anechoic chambers to simulation software and 3D printers. These tools help reduce design phases and enable us to react to our customers needs promptly and efficiently.\n\nOur ISO/TS16949:2009 certified production site in Central Europe ensures production of the highest quality products. Our antennas are all manufactured under the RoHS directive and are REACH compliant. Plastic injection, SMD pick and place, product assembly and quality control are all carried out in-house, aiding us to be flexible in manufacturing and provide competitively priced products.\n\nOur close-knit team of engineers and commercial personnel have established strong bonds with customers and suppliers, ensuring a good communication of needs, requirements, and solutions.\n\nEnsuring the continued development of products to meet the rapidly evolving wireless world remains our primary focus, be it for 5G, 4G (LTE), Iridium communications or Galileo satellite-based applications. We work closely with technological innovators to ensure that we have a clear vision for future projects, maintaining our strong position in commercial antenna design.\n\nAfter 2J Antennas has been acquired by discoverIE Group PLC September 2023, 2J Antennas and Antenova have forged an unparalleled partnership committed to innovation and excellence. Our collaboration stands poised to revolutionize antenna technology, providing premium wireless solutions to address the most pressing challenges in RF design.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "REFIMA s.r.o.",
      //   Description:
      //     "Welcome to REFIMA s.r.o., a family-owned business that has been a reliable player in the industry and design since its establishment in 2008. Located in the heart of Europe - Slovakia, we specialize in creating exceptional acoustic parts, self-adhesive components, and insulation solutions that cater to a diverse range of industrial and design applications.\n\nOur unwavering commitment to innovation and customer-centricity defines our journey. With a keen focus on automotive, industry, and design, we understand the nuanced requirements of each project. Our strength lies in meticulously tailoring solutions that align precisely with our customers' unique needs, setting us apart as a trusted partner in materializing their visions.\n\nFrom the outset, our approach revolves around a comprehensive analysis of the client's needs. We take the time to understand the intricacies of each project, which enables us to recommend the most effective and efficient solutions. This collaborative process ensures that every aspect is fine-tuned to perfection before moving forward.\n\nAt REFIMA s.r.o., our commitment doesn't end with recommendations. We stand beside our clients throughout the entire journey. From the inception of prototypes to serial production, our dedicated team provides unwavering support and guidance, ensuring a seamless transition from concept to reality. \n\nWe process a diverse range of premium materials, including felts, foams, self-adhesive tapes, and rubbers, all carefully selected for their quality and performance characteristics. Our relentless pursuit of innovative solutions allows us to consistently deliver results that exceed expectations.\n\nDiscover how REFIMA s.r.o. can elevate your projects to new heights. Join hands with us as we explore uncharted territories of possibility, crafting solutions that resonate with your needs, aspirations, and the future of design and industry.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "IPS Logistics s.r.o.",
      //   Description:
      //     "For more than 20 years, we have been providing world-class transport and logistics services. We specialize in road transport within EU and the UK;\n\n- full truck load transports - FTL\n- less than a truck load transports - LTL\n- express shipments\n- transportation of heavy and oversized loads\n- transportation of loose substrates by dump trucks and walking floor trailers\n- transport of dangerous goods - ADR\n\nWhen transporting, we are guided by three basic pillars: speed, safety and a reasonable price",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "SonataSW",
      //   Description:
      //     "SonataSW has been operating since 2002. We started as a consulting subcontractor for custom software deployment.\n\nDuring our 21-year experience, we consulted and analyzed the processes of companies in various industries. We incorporated this knowledge into the initial DriveBizz platform and its first modules, for which we won the Best Business app - Business wall of fame award in 2014.\n\nIn 2017, we focused on BI in the automotive segment, thanks to which we became a partner of important global companies such as Mercedes-Benz SK/CZ and Daimler Truck & Bus Slovakia.\n\nWe are currently building and improving a new CRM cloud service called Sales-docs, which is intended not only for large companies, but also for entrepreneurs who want to move with the times and innovate their business.\n\nOur company has taken responsibility for a sustainable future. We contribute to this sustainability by caring - for people and for our planet.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "ECOFIL, spol. s r.o.",
      //   Description:
      //     "The main activity is the production of filtration devices, filter elements for filtration all kinds of oils and inflammable liquids. Expansion of the range of services - filtration, offers its customers a very efficient and quick cleaning of all types of oils. This operation contributes directly to reducing the volume of hazardous waste.\nThe customer satisfaction and good quality cares an ECOFIL experienced team and production technicians and external consultants.\n\nSince year 1991 the production program of Ecofil is still adjusting to the newest knowledge and requirements of praxis and technical trends of oil filtration, emulsions and nonnflammable fluids.\nEcofil was always adapting to requirements of own product certifications and certificates TI SR - CEOC the manufacture of filtration equipment with international validity",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "Spanner SK, k.s.",
      //   Description:
      //     "SPANNER SK is a modern company engaged in the design and construction of products and the serial production of machines and equipment for various uses. We take care of all activities of customer engineering production, from the design to the shipment of serial produced products.\n\nSince 2005, we have been helping our business partners progress and expand faster. We save customers time, energy and resources by taking care of complex project management and the production process itself. From the design, through the processing of technical documentation, to the serial production of machines and equipment under the customer's brand. We pay attention for efficient use of resources and materials in the entire production process, open communication with business partners and we place maximum emphasis on the quality of our outputs. Thanks to this, our customers are leading European multinational companies, but also smaller innovative companies that follow the same principles as us.\nWe have two operations in Slovakia. The headquarters of SPANNER SK in Považská Bystrica is located in area with good highway infrastructure, just two hours away from Vienna airport. The second operation of the company is located in Medzilaborce, close to the borders with Poland and Ukraine.\n\nOur professional colleagues perform their maximum, in an effort to fulfill customer requirements. Thanks to them, we are able to meet the specific requirements of our customers, whether it is large-scale machines and equipment or special products requiring maximum precision and top quality. Sustainability and creating long-term partnerships are our core values that drive us forward.\n\nWe want to work with the best and for the best companies, because we believe that the energy we put into every single activity, contributes to building a better future.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "Salt06",
      //   Description:
      //     "Salt06 is a brand that ensures the high-quality composite products. From design, engineering to manufacturing and assembly. Company has a strong engineering department and manufacturing structural and visual components using wide range of applications for automotive, motorsport, defense, medical and aerospace industry. Company designs and manufactures his own tools, jigs to ensure the first-class quality result.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "ARRIVA Slovakia",
      //   Description:
      //     "ARRIVA worldwide\nARRIVA is European provider of passenger transport and was acquired by Deutsche Bahn in August 2010. On European market ARRIVA operates in 14 countries local buses, inter-urban commuter coaches, local, regional and national train services, trams and waterbuses.\n\nARRIVA in Slovakia\nARRIVA operates in Slovakia since 2008 and is the strongest private player in bus multimodal transport provider in Slovak Republic. Actually operates in four regions regional transport and in 19 cities city transport, bike sharing systems in Nitra (ariva bike) and in Žilina (BikeKIA). Operation is guaranted by: ARRIVA NITRA a. s., ARRIVA Nové Zámky, a. s., ARRIVA Michalovce, a. s., ARRIVA Trnava, a.s., ARRIVA Liorbus, a.s.. ARRIVA employs in Slovakia 2.400 employees and operates more than 1.350 buses. \n\nARRIVA in Slovakia transports more than 70 million passengers and drives more than 72 million km yearly.\n\nThe ARRIVA group contains following companies in Slovakia:\nARRIVA Slovakia a.s.\nARRIVA NITRA a.s.\nARRIVA Nové Zámky, a.s.\nARRIVA Michalovce, a.s.\nARRIVA Trnava, a.s.\nARRIVA Liorbus, a.s.\nARRIVA Service s.r.o.",
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "HMH, s.r.o.",
      //   Description:
      //     'HMH is a well-established and dynamically developing Slovak company operating in the field of industrial automation. We have been placing our products and services in selected markets in Central and Western Europe since 1993. Thanks to our unique know-how, clear vision of partners and business relationship based on long-term partnership, we have become a leading company for development, production, supply and service of electronic devices for rail transport. HMH has developed the modular MIREL system, which has become the basis for most rail applications. Based on its own know-how and its own development, production and service capacities, HMH ensures a complete life cycle of MIREL systems for applications in the demanding environment of railway transport. At the same time, HMH has also been publishing since 1994, which includes periodicals (ATP Journal), non-periodical publications (review studies, books) and electronic publications. You can "browse" the electronic version of ATP Journal at www.atpjournal.sk. You can find more about us and our products at www.hmh.sk.',
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      // {
      //   Name: "ZVL AUTO spol. s r.o.",
      //   Description:
      //     'ZVL AUTO is prominent partner of world\'s leading manufacturers of gearboxes, axles, retarders, tractors, harvesters and other agricultural equipment, earthmoving machines, trucks and other´s engineering industry \n\nAs a proud partner of the world-famous OEM customers,\nwe manufacture tapered roller bearings,\nin the Slovak republic,\nunder brand "ZVL".\n\nZVL AUTO spol. s r.o. seated in Presov Slovak republic has manufactured bearings in Presov for more than 63 years beginning in 1959 when bearings manufacturing was separated from the ZKL Brno-Lisen plant in Czechoslovakia.\n\nAt present with registered capital at amount 12.387.606 Euro continually extends production of tapered roller bearings.\n\n228 types of tapered roller bearings, include:\n- 178 types of bearings in metric dimensions produced according STN and ISO,\n- 31 types of bearings in inch dimensions,\n- 19 non-standard types\nThis assortment increases according customers requirements.\n\nStandard tapered roller bearings are manufactured in the following design series: 302, 303, 313, 320X, 322, 323, 329, 330, 331 and 332.\n\nInstalled technology allows production of tapered roller bearings in range:\n- outer diameter from 35 to 400mm\n-  inner diameter from 15 to 190 mm.\n\n ZVL AUTO has been assessed and certified as meeting the requirements of EN ISO 9001:2015, IATF 16949:2016 and ISO 14001.',
      //   "Reason for Selection":
      //     "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
      //   score_fit: 7,
      // },
      {
        Name: "INFOCOM Ltd - Automation and control systems",
        Description:
          'INFOCOM Ltd is an international innovative engineering company in field of industrial automation, software development, control systems designing, unmanned technologies, artificial intelligence and computer vision with offices in Ukraine and Slovakia. \nFor more than 25 years, Engineering company INFOCOM LTD has been working on Automation Control Processes on enterprises in Ukraine and in 40 countries all over the world for more than 25 years.\nINFOCOM Ltd is an official partner of Siemens Ukraine," Industry Automation and Drive Technologies" Department (IA&DT) starting from 1996.  At the end of 2008 INFOCOM Ltd has become a member of the international Siemens program Solution Partner Program and received Siemens Solution Partner Automation status for the following modules:\n    *      Automation Systems SIMATIC;\n    *      Human Machine Interface SIMATIC HMI;\n    *      Process Control System SIMATIC PCS7.\nINFOCOM Ltd received a competency Data Management Solutions and starting from June 2009 is an official Microsoft Certified Partner.\nSince 1996 INFOCOM Ltd had successfully implemented more than 600 projects on control systems and drives in various industries both in Ukraine and abroad.\nINFOCOM Ltd provides full range of services on bulding of vertically integrated automated control systems of production from encoders and actuating mechanisms up to MES level with integration into ERP system of an enterprise.',
        "Reason for Selection":
          "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
        score_fit: 7,
      },
      {
        Name: "Wermaly s.r.o.",
        Description:
          "Wermaly s.r.o. is a trading and service company that has been operating on the market for more than 12 years. Our main activity is the sale and service of peripheral equipment and spare parts, mainly for the plastics industry. We focus on providing high quality and reliable products, therefore we offer our customers products exclusively from reputable and European manufacturers. This approach allows us to guarantee high reliability and short delivery times. Of course, we also offer warranty and post-warranty service, which includes spare parts replacement, diagnostics and advice. These services are an integral part of our commitment to provide comprehensive care and support to our customers. We provide a wide range of services and products for our customers, including: * Thermoregulating equipment * Bulk material drying and conveying equipment * Belt conveyors * Spare parts for injection chambers * Hot runner controllers * Heaters * Water manifolds * Hydraulic pump and cylinder repairs * Machine removals * Machine diagnostics * Service and expert advice These services are the foundation of our offering, aimed at providing complete solutions for our customers' needs in the plastics industry.",
        "Reason for Selection":
          "Involved in industries that could benefit from cooling or refrigeration solutions (e.g., logistics, machinery, HVAC).",
        score_fit: 7,
      },
    ],
    scoring_parameters: {
      relevance_weight: 0.8,
      industry_weight: 0.6,
    },
    summary: "Generated company scores based on industry and relevance.",
  };
};
