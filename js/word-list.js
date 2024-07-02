const wordList = [{
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
    {
        word: "umbrella",
        hint: "Protects from rain or sun"
    },
    {
        word: "journey",
        hint: "A long travel or trip"
    },
    {
        word: "whisper",
        hint: "Speaking softly or quietly"
    },
    {
        word: "mystery",
        hint: "Something not easily understood"
    },
    {
        word: "courage",
        hint: "Bravery in facing difficult situations"
    },
    {
        word: "fortune",
        hint: "Luck or wealth"
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun"
    },
    {
        word: "fragrance",
        hint: "A pleasant or sweet smell"
    },
    {
        word: "echo",
        hint: "Sound reflection"
    },
    {
        word: "puzzle",
        hint: "A game or problem to solve"
    },
    {
        word: "adventure",
        hint: "Exciting and unusual experience"
    },
    {
        word: "balance",
        hint: "Equality or stability"
    },
    {
        word: "champion",
        hint: "Winner or advocate of a cause"
    },
    {
        word: "discover",
        hint: "Find something for the first time"
    },
    {
        word: "elegant",
        hint: "Graceful and stylish"
    },
    {
        word: "festival",
        hint: "Celebration or event"
    },
    {
        word: "harmony",
        hint: "Agreement or peaceful coexistence"
    },
    {
        word: "illuminate",
        hint: "Light up or clarify"
    },
    {
        word: "jubilation",
        hint: "Great joy or celebration"
    },
    {
        word: "kaleidoscope",
        hint: "Ever-changing pattern or sequence"
    },
    {
        word: "magnificent",
        hint: "Grand and impressive"
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing for the past"
    },
    {
        word: "optimistic",
        hint: "Having a positive outlook on life"
    },
    {
        word: "profound",
        hint: "Deep and thoughtful"
    },
    {
        word: "quench",
        hint: "Satisfy one's thirst or desire"
    },
    {
        word: "resilience",
        hint: "The ability to bounce back from challenges"
    },
    {
        word: "serendipity",
        hint: "Finding something good without looking for it"
    },
    {
        word: "tranquil",
        hint: "Calm and peaceful"
    },
    {
        word: "universe",
        hint: "All of space, time, matter, and energy"
    },
    {
        word: "vibrant",
        hint: "Full of energy and enthusiasm"
    }, {
        word: "effervescent",
        hint: "Bubbly and lively personality"
    },
    {
        word: "ephemeral",
        hint: "Lasting for a very short time"
    },
    {
        word: "garrulous",
        hint: "Talkative, chatty, loquacious"
    },
    {
        word: "luminous",
        hint: "Radiating light, shining brightly"
    },
    {
        word: "meticulous",
        hint: "Showing great attention to detail"
    },
    {
        word: "obfuscate",
        hint: "To deliberately make something unclear"
    },
    {
        word: "quixotic",
        hint: "Extremely idealistic; unrealistic and impractical"
    },
    {
        word: "resplendent",
        hint: "Shining brilliantly; radiant"
    },
    {
        word: "ubiquitous",
        hint: "Present everywhere; widespread"
    },
    {
        word: "vicarious",
        hint: "Experienced through another's actions"
    },
    {
        word: "cacophony",
        hint: "Harsh, discordant mixture of sounds"
    },
    {
        word: "ephemeral",
        hint: "Lasting for a very short time"
    },
    {
        word: "furtive",
        hint: "Attempting to avoid notice or attention"
    },
    {
        word: "gregarious",
        hint: "Fond of company; sociable"
    },
    {
        word: "halcyon",
        hint: "Denoting a period of time in the past that was idyllically happy and peaceful"
    },
    {
        word: "iconoclast",
        hint: "A person who attacks or criticizes traditional or widely held beliefs"
    },
    {
        word: "juxtapose",
        hint: "Place or deal with close together for contrasting effect"
    },
    {
        word: "kaleidoscope",
        hint: "Ever-changing pattern or sequence"
    },
    {
        word: "labyrinth",
        hint: "A complicated irregular network of passages or paths"
    },
    {
        word: "mellifluous",
        hint: "Sweet or musical; pleasant to hear"
    },
];