"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "facts",
      [
        {
          name: "Vorstengraf ",
          content:
            'In Oss, a grave dating from around 500 BC was found in a burial mound 52 m wide (and thus the largest of its kind in western Europe). Dubbed the "king\'s grave" (Vorstengraf (Oss)), it contained extraordinary objects, including an iron sword with an inlay of gold and coral.',
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/1e/Vorstengraf_Oss.JPG",
          placeId: 1,
          timePeriodId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brittenburg",
          content:
            "Time of the Roman settlements in the Netherlands. Perhaps the most evocative Roman ruin is the mysterious Brittenburg, which emerged from the sand at the beach in Katwijk several centuries ago, only to be buried again. These ruins were part of Lugdunum Batavorum.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Valkenburg_-_N206_-_Romeinse_weg.jpg/1920px-Valkenburg_-_N206_-_Romeinse_weg.jpg",
          placeId: 1,
          timePeriodId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The St. Elizabeth's flood",
          content:
            "In 1275 has been founded Amsterdam! Yeeey! But in 1421 the storm causes a flood that drowned approximately 10.000 inhabitants.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/5/54/Sint_Elisabethsvloed_1421.jpg",
          placeId: 1,
          timePeriodId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wooden buildings ban",
          content:
            "Amsterdam is famous for its brickwork, but it wasn’t always this way. The original medieval buildings were made of wood, but following devastating fires in 1421 and 1452, most of the city burned down and houses were no longer allowed to be built with wooden sides. In 1669, timber construction was banned outright. Now there are just two wooden houses left: Begijnhof 34 and Zeedijk 1.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/3/30/RM371_Amsterdam_-_Begijnhof_34.jpg",
          placeId: 1,
          timePeriodId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Two brothers Bonaparte",
          content:
            "Napoleon made his brother Louis the king of Holland, but in a few years get a serious quarrel with his brother. Napoleon wanted Dutch troops for his invasion of Russia. Louis refused; Napoleon then suggested that Louis should abdicate but he refused. Napoleon removed Louis from the Dutch throne and took over the entire Kingdom of Holland on July 1, 1810.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/1/1b/307-Portret_van_Lodewijk_Napoleon%2C_koning_van_Holland.jpg",
          placeId: 1,
          timePeriodId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The last flood",
          content:
            'The last major flood in the Netherlands took place in early-February 1953, when a huge storm caused the collapse of several dikes in the southwest of the Netherlands. More than 1,800 people drowned in the ensuing inundation. The Dutch government subsequently decided on a large-scale program of public works (the "Delta Works") to protect the country against future floods. The project took more than thirty years to complete. According to Dutch government engineers, the odds of a major inundation anywhere in the Netherlands are now one in 10,000 years.',
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/b1/Schaalmodel_Maeslantkering.jpg",
          placeId: 1,
          timePeriodId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "End of matriarchy",
          content:
            "King Willem-Alexander was the first Dutch king in 123 years. The coronation in April 2013 came after his mother, Queen Beatrix, abdicated at the age of 75, ending a female reign that spanned three generations since 1890. King Willem-Alexander serves as the current head of state.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/Zijne_Majesteit_Koning_Willem-Alexander_met_koningsmantel_april_2013.jpeg",
          placeId: 1,
          timePeriodId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dutch Bicycles Going Crazy",
          content:
            "You’d definitely give this thing a second look if you saw it gliding down the street past you… and straight into a lake. The Di-Cycle concept bicycle is amphibious and was designed specifically for the Dutch city of Helmond to allow residents a smooth transition between land and water travel. Holland would have to construct entire parking garages for these gargantuan things if they were to actually catch on.",
          imageUrl:
            "https://weburbanist.com/wp-content/uploads/2009/02/di-cycle.jpg",
          placeId: 1,
          timePeriodId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gomel Region",
          content:
            "The most significant Stone Age settlements have been discovered in the Gomel region. Sites discovered from the Palaeolithic period in the village of Yurovichi (Kalinkovichi area) existed approximately 26 000 years ago. Here, the remains of the hearth, tools, and also the bones and skulls of mammoths used for housing construction were found.",
          imageUrl:
            "https://storage.needpix.com/rsynced_images/dinosaur-skull-in-sand.jpg",
          placeId: 2,
          timePeriodId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Slavs area",
          content:
            "The area was one of the earliest to be inhabited by Slavs. Invaders from Asia, among whom were the Huns and Avars, swept through c. 400–600 AD, but were unable to dislodge the Slavic presence.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/f/f0/Belarus_in_Europe_%28-rivers_-mini_map%29.svg",
          placeId: 2,
          timePeriodId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Grand Duchy of Lithuania ",
          content:
            "The Grand Duchy of Lithuania was the largest state in Europe in the 14-15th century. The duchy grew to include large parts of the former Kievan Rus' and other Slavic lands. It covered the land of present-day Belarus, Latvia, Lithuania and parts of Estonia, Moldova, Poland, Russia and Ukraine. There was great diversity in languages, religion, and cultural heritage.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag-map_of_the_Grand_Duchy_of_Lithuania.svg/550px-Flag-map_of_the_Grand_Duchy_of_Lithuania.svg.png",
          placeId: 2,
          timePeriodId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Francysk Skaryna",
          content:
            "Francysk Skaryna, the eminent philosopher, humanist, writer, and Renaissance scholar, left his footprint in history as the “father” of Eastern European book printing. He was the first to print the Bible in the Old Belarusian language in 1517.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/f/f9/Franci%C5%A1ak_Skaryna.jpg",
          placeId: 2,
          timePeriodId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Konstanty Kalinowski",
          content:
            "The January Uprising is the longest-lasting insurgency in the history of Belarus. One of the leaders was Konstanty Kalinowski, who created one of the first periodicals in Belarusian language and wrote one of his most notable works - the Letter from Beneath the Gallows (‘List z-pad szybienicy’), a passionate credo for his compatriots. ",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/c/c8/Kanstantyn_Kalino%C5%ADski_stamp.jpg",
          placeId: 2,
          timePeriodId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Belarus in World War II",
          content:
            "Belarus lost a quarter of its pre-war population in World War II including practically all its intellectual elite. The major towns of Minsk and Vitsebsk lost over 80% of their buildings and city infrastructure. For the defense against the Germans, and the tenacity during the German occupation, the capital Minsk was awarded the title Hero City after the war. After the end of War in 1945, Belarus became one of the founding members of the United Nations Organisation. ",
          imageUrl: "https://by.odb-office.eu/files/un_002.jpg",
          placeId: 2,
          timePeriodId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The last dictatorship of Europe",
          content:
            "Belarus is an independent country since 1991. And for already 26 years there is one and the only president - Alexander Lukashenko, so-called ‘the last dictator of Europe’. Lukashenko heads an authoritarian regime in Belarus. Elections are not free and fair, opponents of the regime are repressed, and the media is not free. Since 2006, the European Union and the United States have imposed on-again/off-again sanctions on Lukashenko and on other Belarusian officials for human-rights violations.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Vladimir_Putin_and_Aleksandr_Lukashenko%2C_BRICS_summit_2015_04.jpg/1280px-Vladimir_Putin_and_Aleksandr_Lukashenko%2C_BRICS_summit_2015_04.jpg",
          placeId: 2,
          timePeriodId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "New president on the way",
          content:
            "Presidential elections will be held in August 2020. The current president Lukashenko is already making everything possible to not let anyone else replace him: 2 candidates are in prison, the signatures for himself are fake, etc. But in the nearest future, hopefully, he will lost his power and Belarus will become GREAT without him! :)",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/e/ee/Minsk._A_view_of_Svislach_river.jpg",
          placeId: 2,
          timePeriodId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cave With Bones - Anina",
          content:
            '34,950-year-old remains of modern humans with a possible Neanderthalian trait were discovered in present-day Romania when the Peștera cu Oase ("Cave with Bones") was uncovered in 2002. In 2011, older modern human remains were identified in the UK (Kents Cavern 41,500 to 44,200 years old) and Italy (Grotta del Cavallo 43,000 to 45,000 years old) but the Romanian fossils are still among the oldest remains of Homo sapiens in Europe, so they may be representative of the first such people to have entered Europe. The remains present a mixture of archaic, early modern human and Neanderthal morphological features.',
          imageUrl:
            "https://adevarul.ro/assets/adevarul.ro/MRImage/2015/06/23/558973650a48ab845f000001/978x0.jpg",
          placeId: 3,
          timePeriodId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Romanian Language",
          content:
            'The Romanian language descends from the Vulgar Latin dialects spoken in the Roman provinces north of the "Jireček Line" (a proposed notional line separating the predominantly Latin-speaking territories from the Greek-speaking lands in Southeastern Europe) in Late Antiquity. The theory of Daco-Roman continuity argues that the Romanians are mainly descended from the Daco-Romans, a people developing through the cohabitation of the native Dacians and the Roman colonists in the province of Dacia Traiana (primarily in present-day Romania) north of the river Danube.',
          imageUrl:
            "https://s.cdnmpro.com/129510318/p/l/8/tablou-colectia-lac-munte-05~1543058.jpg",
          placeId: 3,
          timePeriodId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Maramures",
          content:
            "Romania has seven Unesco World Heritage Sites, including the eight churches of northern Moldavia, covered in wonderful frescos (the Voroneț Monastery has been dubbed Romania’s Sistine Chapel), and the wooden churches of Maramureş, of which there is also eight, including Sapanta Peri, which claims to be the tallest wooden church in the world. ",
          imageUrl:
            "https://www.telegraph.co.uk/content/dam/Travel/2017/May/romania-facts-wooden-church.jpg?imwidth=1240",
          placeId: 3,
          timePeriodId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Count Dracula - The Castle Bran",
          content:
            "Irishman, Bram Stoker, published his classic Gothic horror novel “Dracula” back in 1897. The cursed count, based in Castle Dracula, Transylvania, was on a mission to reach British shores in search of fresh blood. Van Helsing and a group of upstanding citizens who knew all about vampires, garlic and stakes, did battle with the Count, preventing the vampire’s curse from spreading throughout England. But Bram Stoker didn’t invent vampires. Transylvania isn’t a fictitious location and the Count is thought to have been based on a historical figure - The Emperor Vlad Tepes.",
          imageUrl:
            "https://i2.wp.com/www.bizbrasov.ro/wp-content/uploads/2017/08/castelul-bran.jpg",
          placeId: 3,
          timePeriodId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Merry Cemetery - Sapanta",
          content:
            "The Merry Cemetery (Romanian: Cimitirul Vesel pronounced [t͡ʃimiˈtirul ˈvesel]) is a cemetery in the village of Săpânța, Maramureş county, Romania. It is famous for its colourful tombstones with naïve paintings describing, in an original and poetic manner, the people who are buried there as well as scenes from their lives. The Merry Cemetery became an open-air museum and a national tourist attraction. The unusual feature of this cemetery is that it diverges from the prevalent belief, culturally shared within European societies – a belief that views death as something indelibly solemn. Connections with the local Dacian culture have been made, a culture whose philosophical tenets presumably vouched for the immortality of the soul and the belief that death was a moment filled with joy and anticipation for a better life",
          imageUrl:
            "https://whenonearth.net/wp-content/uploads/Merry-Cemetery.jpg",
          placeId: 3,
          timePeriodId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Palace of Parliament - Bucharest",
          content:
            "The Palace of the Parliament (Romanian: Palatul Parlamentului) is the seat of the Parliament of Romania, located atop Dealul Spirii in Bucharest, the national capital. The Palace has a height of 84 metres (276 ft), a floor area of 365,000 square metres (3,930,000 sq ft) and a volume of 2,550,000 cubic metres (90,000,000 cu ft). The Palace of the Parliament is the heaviest building in the world, weighing about 4,098,500,000 kilograms (9.0356×109 lb). It's the second largest building in the world, after the Pentagon",
          imageUrl:
            "https://i.pinimg.com/originals/b0/dc/70/b0dc7091df21b96075c77927fa9e5594.jpg",
          placeId: 3,
          timePeriodId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Transfagarasan - Transylvania",
          content:
            "In his search for the “world’s best driving road” Jeremy Clarkson declared that he had found it in the middle of Romania – in the form of the Transfagarasan highway. Whichever way you look at it, it is an extraordinary feat of engineering: a stretch of tarmac packed with tunnels, viaducts and bridges and which takes the skill of navigating hairpin bends to new heights. The road was another Ceaușescu creation. He wanted to ensure that in the event of a Soviet invasion there was a speedy way of escaping through the strategic (and scenic) mountain passes of the Southern Carpathians (not that it was ever used for that purpose).",
          imageUrl:
            "https://www.telegraph.co.uk/content/dam/Travel/2016/September/roads-romania.jpg?imwidth=1240",
          placeId: 3,
          timePeriodId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Forever Drinkers",
          content:
            "Romania is the fisrt booziest country in the world. They make their own wine, they make their own liquor - palinca, this never faded and it will never fade. Poor, rich, doesn't matter, when it comes to having a drink everyone is friend with each other... And forever happy!",
          imageUrl:
            "https://cramahistria.ro/wp-content/uploads/2017/03/cele-mai-bune-vinuri-Crama-Histria.jpg",
          placeId: 3,
          timePeriodId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Belgica",
          content:
            "Belgium didn’t actually exist in this time period. There was a region named  Gallia Belgica where the ancestors of Belgians lived and it was ruled by the romans. From Belgica the current name of Belgium is derived.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Map_Gallia_Tribes_Towns.png/520px-Map_Gallia_Tribes_Towns.png",
          placeId: 4,
          timePeriodId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Language border",
          content:
            "In the 5th century the northern part of Belgica was conquered by the Huns. They started mingling with the local population and introduced the germanic language, while the southern part of Belgica was unaffected. Because of this a language border came to be and explains why there is a dutch and french part belgium",
          imageUrl:
            "https://sandeshsardardotcom.files.wordpress.com/2018/07/language-row-engulfs-new-belgian-stadium-136383285727703901-130913134036.jpg?w=648",
          placeId: 4,
          timePeriodId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mosan art",
          content:
            "During the 11th and 12th centuries Belgium was the cultural center of the Rheno-Mosan or Mosan art movement and was the source for many beautiful abbeys and cathedrals",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/e/e6/MaastrichtOLV11.jpg",
          placeId: 4,
          timePeriodId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The golden age  of Bruges and Gent",
          content:
            "During the 14th century due to great economic wealth Gent and Bruges had grown a lot in size and even boasting populations of around 45.000. Which let its architecture be even more prominent thanks to talented architectures.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Bruges_H%C3%B4tel_de_Ville2.JPG/2560px-Bruges_H%C3%B4tel_de_Ville2.JPG",
          placeId: 4,
          timePeriodId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The founding of Belgium",
          content:
            "In the 18-19 centuries, Belgium was split from the Netherlands and became its own country",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/9/90/Wappers_belgian_revolution.jpg",
          placeId: 4,
          timePeriodId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Olympics of 1920",
          content:
            "These Olympics were the first in which the Olympic Oath was voiced, the first in which doves were released to symbolize peace, and the first in which the Olympic Flag was flown.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/7/73/1920_olympics_poster.jpg",
          placeId: 4,
          timePeriodId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "A record not to be proud of",
          content:
            "Belgium is known to have gone the longest period of time without a government, a whole 589 days.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/b9/Cinquantenairerally.jpg",
          placeId: 4,
          timePeriodId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Finally the great divide",
          content:
            "After enduring all the time that the name of French fries is not Flemish fries, Flanders had decided to split from Wallonia as a statement to the world",
          imageUrl:
            "https://static.nieuwsblad.be/Assets/Images_Upload/2011/02/16/belgique.jpg?maxheight=280&maxwidth=400&scale=both",
          placeId: 4,
          timePeriodId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Vredefort Dome",
          content:
            "Vredefort Dome, approximately 120 km south-west of Johannesburg, is a representative part of a larger meteorite impact structure, or astrobleme. Dating back 2,023 million years, it is the oldest astrobleme yet found on Earth. With a radius of 190 km, it is also the largest and the most deeply eroded. Vredefort Dome bears witness to the world’s greatest known single energy release event, which had devastating global effects including, according to some scientists, major evolutionary changes. It provides critical evidence of the Earth’s geological history and is crucial to understanding of the evolution of the planet. Despite the importance of impact sites to the planet’s history, geological activity on the Earth’s surface has led to the disappearance of evidence from most of them, and Vredefort is the only example to provide a full geological profile of an astrobleme below the crater floor.",
          imageUrl:
            "https://i.pinimg.com/originals/37/1e/11/371e113efa8cdc1a3daf930790841e2f.jpg",
          placeId: 5,
          timePeriodId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Border Cave",
          content:
            "Border Cave is a rock shelter on the western scarp of the Lebombo Mountains in KwaZulu-Natal near the border between South Africa and Swaziland. Border Cave has a remarkably continuous stratigraphic record of occupation spanning about 200 ka. Anatomically modern Homo sapiens skeletons together with stone tools and chipping debris were recovered. Dating by carbon-14, amino acid racemisation and electron spin resonance (ESR) places the oldest sedimentary ash at some 200 kiloannum.",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtMn4vJCBXWPGMOZzIm8afDibDQIp_nOzogQ&usqp=CAU",
          placeId: 5,
          timePeriodId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Table Mountain",
          content:
            "Table Mountain, one of the iconic landmarks of South Africa, is one of the oldest mountains in the world and has more than 2,200 species of plants, 70 percent of which are endemic.",
          imageUrl:
            "https://cdn.britannica.com/41/75841-050-FAAE44F0/Table-Mountain-Cape-Town-Western-Bay-South.jpg",
          placeId: 5,
          timePeriodId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fights over South Africa",
          content:
            "The Dutch and the British fought over South Africa. The first Europeans settlers were Dutch traders on the Europe-Far East spice route who founded Cape Colony (now Cape Town) in 1652. The British seized Cape Colony in 1795 and a few years later the Dutch farmers (boers) fled north to claim lands and establish the Orange Free State and the Transvaal. At the end of the 19th century and beginning of the 20th, the British fought two wars with the Boers and one with the Zulus for control of the region. British victories resulted in the formation of the Union of South Africa in 1910. South Africa became a ‘sovereign independent state’ and part of the British Commonwealth in 1934. After it became a republic in 1961, South Africa’s official name became the Republic of South Africa.",
          imageUrl:
            "https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2015/04/south-africa-main.jpg",
          placeId: 5,
          timePeriodId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cullinan",
          content:
            "The world’s largest diamond was found in the Premier Mine in Pretoria, South Africa on 25 January 1905. The 3,106-carat stone weighed 1.33 pounds and was called the ‘Cullinan’ after the owner of the mine. It was later cut into nine large stones and about 100 smaller ones; the largest, the 530.2 carat Cullinan I or Great Star of Africa, is the world’s largest colourless cut diamond and can be seen on top of the Queen of England’s Septre with the Cross in the Tower of London. The world’s leading diamond company, De Beers, was set up in Kimberley South Africa by Cecil Rhodes in 1881. Today the company operates all over the world and sells more than a third of the world’s rough diamonds. South African diamond mines account for 9.10 percent of the world’s diamonds.",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/b/b7/Rough_cullinan_diamond.jpg",
          placeId: 5,
          timePeriodId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "First African Country to Host The World Cup",
          content:
            "Many different peoples make up South Africa, each with their own language and history. The country has 11 official languages, and many more unofficial languages. This colourful mix of cultures gives South Africa its nickname “rainbow nation“. South Africans are passionate about music, often using song and dance to express social and political ideas. They’re also known worldwide for their skill in sports, including rugby, cricket, golf and soccer. In 2010, South Africa became the first African nation to host the World Cup. Goal!",
          imageUrl:
            "https://www.natgeokids.com/wp-content/uploads/2016/11/South-Africa-Facts-8.jpg",
          placeId: 5,
          timePeriodId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rovos Trains",
          content:
            "South Africa has one of the world’s most luxurious trains. Up to 72 passengers can travel in lavish wood-panelled Rovos trains; the Royal Suites occupy half a carriage and have full-sized bathrooms, separate shower, permanent double bed and two armchairs.",
          imageUrl:
            "https://cdn.rhinoafrica.com/tmp/image-thumbnails/objects/service-providers/rovos-rail/_img/image-thumb__46491__background-cover/rovos-rail-interior-events-lounge-01-main.jpeg",
          placeId: 5,
          timePeriodId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Cullinan 2.0 Diamond",
          content:
            "South Africans dicovered a second huge diamond, and they decided to call it The Cullinan 2.0 Diamond, because they considered it being a better version than the first one!",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/1038/5396/products/tiny-diamond-nose-stud.jpg?v=1496716475",
          placeId: 5,
          timePeriodId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("facts", null, {});
  },
};
