// --- ARTIST DATABASE ---
const db = {
    "durer": {
        name: "Albrecht Dürer",
        dates: "May 21, 1471 – April 6, 1528",
        tags: ["Nuremberg", "Printmaking", "Renaissance"],
        bio: [
            "Albrecht Dürer was born in the Imperial Free City of Nuremberg, Germany. The son of a goldsmith, he was apprenticed to his father at a young age, learning to work with metal and fine tools—skills that would later define his mastery of engraving. He later apprenticed with Michael Wolgemut, the leading artist in Nuremberg at the time.",
            "Dürer traveled extensively to Italy, where he was deeply influenced by the Italian Renaissance. He bridged the gap between the Gothic style of the North and the mathematical perspective and proportion theories of the South. He served as the official court artist to Holy Roman Emperors Maximilian I and Charles V.",
            "He is universally regarded as the greatest German artist of the Renaissance. He revolutionized printmaking, elevating it from a simple craft to an independent art form capable of high tonal range and dramatic depth."
        ],
        works: [
            {
                title: "Young Hare",
                meta: "1502 | Watercolor and bodycolor",
                desc: "A masterpiece of observational art. Dürer likely sketched a wild hare in his workshop, capturing the texture of fur with almost photographic precision.",
                full: "images/durer/youngharehigh.jpg",
                thumb: "images/durer/youngharelow.jpg"
            },
            {
                title: "Praying Hands",
                meta: "1508 | Brush and ink on blue paper",
                desc: "Perhaps Dürer's most famous drawing, originally a preparatory sketch for an altarpiece. It highlights his mastery of form using white heightening on colored paper.",
                full: "images/durer/phandshigh.jpg",
                thumb: "images/durer/phandslow.jpg"
            },
            {
                title: "Four Horsemen of the Apocalypse",
                meta: "1498 | Woodcut",
                desc: "From the 'Apocalypse' series. It depicts Conquest, War, Famine, and Death riding over the people of the earth, showcasing revolutionary dynamic movement in woodcut.",
                full: "images/durer/fourhahigh.jpg",
                thumb: "images/durer/fourhalow.jpg"
            },
            {
                title: "Knight, Death and the Devil",
                meta: "1513 | Engraving",
                desc: "One of the three 'Meisterstiche' (Master Prints). It represents the active life of the Christian soldier who rides past death and temptation without fear.",
                full: "images/durer/hddhigh.jpg",
                thumb: "images/durer/hddlow.jpg"
            },
            {
                title: "Melencolia I",
                meta: "1514 | Engraving",
                desc: "A complex allegorical work depicting the intellectual state of melancholy. It is filled with mathematical objects, tools, and a winged genius in deep contemplation.",
                full: "images/durer/m1high.jpg",
                thumb: "images/durer/m1low.jpg"
            },
            {
                title: "Saint Jerome in His Study",
                meta: "1514 | Engraving",
                desc: "This engraving masterfully uses light to create a serene, scholarly atmosphere. It depicts the translator of the Bible working peacefully, guarded by his lion.",
                full: "images/durer/sainthigh.jpg",
                thumb: "images/durer/saintlow.jpg"
            },
            {
                title: "Adam and Eve",
                meta: "1504 | Engraving",
                desc: "A study in ideal human proportions based on Vitruvian theory. The animals surrounding the figures symbolize the four humors of the body.",
                full: "images/durer/aeehigh.jpg",
                thumb: "images/durer/aeelow.jpg"
            },
            {
                title: "Self-Portrait at 28",
                meta: "1500 | Oil on panel",
                desc: "Famous for its Christ-like frontal pose, this portrait asserts the divine nature of the artist's creativity. It is one of the most iconic images in art history.",
                full: "images/durer/selfphigh.jpg",
                thumb: "images/durer/selfplow.jpg"
            },
            {
                title: "Great Piece of Turf",
                meta: "1503 | Watercolor",
                desc: "A groundbreaking botanical study. Dürer treats a random patch of meadow with the same dignity and scientific detail as a religious subject.",
                full: "images/durer/greatturfhigh.jpg",
                thumb: "images/durer/greatturflow.jpg"
            },
            {
                title: "The Rhinoceros",
                meta: "1515 | Woodcut",
                desc: "Dürer never saw a rhinoceros; he based this on descriptions. Despite anatomical inaccuracies, it remained the standard illustration of the animal for centuries.",
                full: "images/durer/rhinohigh.png",
                thumb: "images/durer/phinolow.png"
            },
            {
                title: "Portrait of the Artist's Father",
                meta: "1490 | Oil on panel",
                desc: "Painted before Dürer left for his travels. It depicts Albrecht Dürer the Elder, a goldsmith, holding a rosary, painted with deep respect and realism.",
                full: "images/durer/fatherhigh.jpg",
                thumb: "images/durer/fatherlow.jpg"
            },
            {
                title: "Feast of the Rosary",
                meta: "1506 | Oil on panel",
                desc: "Painted in Venice, this work proved to the Italians that Dürer was a master of color, not just printmaking. It shows the Virgin Mary distributing rose garlands.",
                full: "images/durer/feasthigh.jpg",
                thumb: "images/durer/feastlow.jpg"
            },
            {
                title: "Small Passion (Title Page)",
                meta: "1511 | Woodcut",
                desc: "The title page of one of Dürer's most popular books. The Small Passion series made his religious imagery accessible to a wider audience through print.",
                full: "images/durer/passionhigh.png",
                thumb: "images/durer/passionlow.jpg"
            },
            {
                title: "Martyrdom of the Ten Thousand",
                meta: "1508 | Oil on canvas",
                desc: "Commissioned by Frederick the Wise, this crowded scene depicts a legendary massacre. Dürer included a self-portrait of himself in the center holding a banner.",
                full: "images/durer/tenhigh.jpg",
                thumb: "images/durer/tenhigh.jpg"
            },
            {
                title: "Portrait of a Venetian Woman",
                meta: "1505 | Oil on panel",
                desc: "Painted during his second trip to Italy. The soft modeling of the face and the warmth of the colors show the strong influence of Venetian painters like Bellini.",
                full: "images/durer/womanhigh.jpg",
                thumb: "images/durer/womanlow.jpg"
            }
        ]
    },
    "leonardo": {
        name: "Leonardo da Vinci",
        dates: "April 15, 1452 – May 2, 1519",
        tags: ["Florence", "Anatomy", "High Renaissance"],
        bio: [
            "Leonardo da Vinci was born in Vinci, Italy, the illegitimate son of a notary and a peasant woman. He was apprenticed to Andrea del Verrocchio in Florence, where he learned drafting, chemistry, metallurgy, and painting. His curiosity knew no bounds, leading him to study nature with scientific rigor.",
            "Although famous for paintings like the Mona Lisa, Leonardo left behind thousands of pages of drawings. These notebooks (Codices) contain sketches of anatomy, geology, flying machines, and weaponry. He saw drawing not just as art, but as a tool for understanding the universe.",
            "He is the archetype of the 'Renaissance Man.' His studies of the human body were centuries ahead of their time, and his drafting techniques—using left-handed hatching and silverpoint—remain a benchmark for mastery in the ink medium."
        ],
        works: [
            {
                title: "Mona Lisa",
                meta: "c. 1503–1519 | Oil on poplar wood",
                desc: "Arguably the most famous painting in the world. Known for Lisa Gherardini's enigmatic smile, the painting showcases Leonardo’s mastery of sfumato.",
                full: "images/leonardo/lisa.jpg",
                thumb: "images/leonardo/lisa.jpg"
            },
            {
                title: "The Last Supper",
                meta: "c. 1495–1498 | Tempera and oil on plaster",
                desc: "This massive mural captures the dramatic moment immediately after Jesus announces that one of his disciples will betray him.",
                full: "images/leonardo/supperh.jpg",
                thumb: "images/leonardo/supperh.jpg"
            },
            {
                title: "Vitruvian Man",
                meta: "c. 1490 | Pen and ink on paper",
                desc: "Based on the writings of the Roman architect Vitruvius, the sketch depicts a male figure in two superimposed positions inscribed within a circle and a square.",
                full: "images/leonardo/manh.jpg",
                thumb: "images/leonardo/manh.jpg"
            },
            {
                title: "Lady with an Ermine",
                meta: "c. 1489–1491 | Oil on walnut board",
                desc: "This portrait of Cecilia Gallerani is celebrated for its dynamic composition. She holds a muscular white ermine, a symbol of purity.",
                full: "images/leonardo/ladyh.jpg",
                thumb: "images/leonardo/ladyh.jpg"
            },
            {
                title: "Salvator Mundi",
                meta: "c. 1500 | Oil on walnut board",
                desc: "Depicting Christ as the 'Savior of the World,' this painting became the most expensive work of art ever sold at auction ($450.3 million).",
                full: "images/leonardo/mundih.jpg",
                thumb: "images/leonardo/mundih.jpg"
            },
            {
                title: "Virgin of the Rocks",
                meta: "c. 1483–1486 | Oil on panel",
                desc: "Shows the Virgin Mary, Christ Child, John the Baptist, and an angel in a mysterious, rocky landscape. Prime example of chiaroscuro.",
                full: "images/leonardo/rocksh.jpg",
                thumb: "images/leonardo/rocksh.jpg"
            },
            {
                title: "Ginevra de' Benci",
                meta: "c. 1474–1478 | Oil on wood",
                desc: "The only painting by Leonardo in the Americas. The juniper bush (ginepro) behind her is a visual pun on her name.",
                full: "images/leonardo/benci.jpg",
                thumb: "images/leonardo/benci.jpg"
            },
            {
                title: "St. John the Baptist",
                meta: "c. 1513–1516 | Oil on walnut wood",
                desc: "Believed to be Leonardo’s final painting. The intense use of sfumato gives the figure a glowing, ethereal quality.",
                full: "images/leonardo/jhonh.jpg",
                thumb: "images/leonardo/jhonh.jpg"
            },
            {
                title: "The Annunciation",
                meta: "c. 1472–1475 | Oil and tempera on panel",
                desc: "One of Leonardo’s earliest works. The intricately detailed botanical elements and the bird-like wings of the angel highlight his scientific curiosity.",
                full: "images/leonardo/annuciation.jpg",
                thumb: "images/leonardo/annuciation.jpg"
            },
            {
                title: "Self-Portrait in Red Chalk",
                meta: "c. 1512 | Red chalk on paper",
                desc: "Widely accepted as the only surviving self-portrait of Leonardo. It depicts an aged, bearded man with deep lines of wisdom and weariness.",
                full: "images/leonardo/selfportrait.jpg",
                thumb: "images/leonardo/selfportrait.jpg"
            },
            {
                title: "La Scapigliata",
                meta: "c. 1508 | Oil, earth, white lead",
                desc: "Meaning 'The Disheveled Woman,' this unfinished sketch is renowned for the contrast between the serene face and wildly painted hair.",
                full: "images/leonardo/lasacpigliata.jpg",
                thumb: "images/leonardo/lasacpigliata.jpg"
            },
            {
                title: "Adoration of the Magi",
                meta: "c. 1481 | Oil on wood (unfinished)",
                desc: "The unfinished underpainting offers a rare look into Leonardo's process, showing his mastery of perspective and dynamic figure grouping.",
                full: "images/leonardo/magi.jpg",
                thumb: "images/leonardo/magi.jpg"
            },
            {
                title: "La Belle Ferronnière",
                meta: "c. 1490–1496 | Oil on walnut wood",
                desc: "Named after the ferronnière (an ornament worn on the forehead), this portrait is celebrated for the subject's intense, confrontational gaze.",
                full: "images/leonardo/belle.jpg",
                thumb: "images/leonardo/belle.jpg"
            },
            {
                title: "Madonna of the Carnation",
                meta: "c. 1478–1480 | Oil on panel",
                desc: "One of his earliest independent works. The background features a beautifully detailed mountain range viewed through a pair of arched windows.",
                full: "images/leonardo/madonna.jpg",
                thumb: "images/leonardo/madonna.jpg"
            },
            {
                title: "Portrait of a Musician",
                meta: "c. 1483–1487 | Oil on walnut wood",
                desc: "The only known surviving portrait of a male subject by Leonardo. The subject's face is highly detailed and expressive, holding a sheet of music.",
                full: "images/leonardo/musician.jpg",
                thumb: "images/leonardo/musician.jpg"
            }
        ]
    }
};
