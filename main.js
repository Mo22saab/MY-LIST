// ============ قاعدة البيانات المركزية ============
const moviesDatabase = {
     heroMovies: [
         { 
             id: "hero_001",
             title: "THE WITCHER", 
             year: "2019", 
             rating: "TV-MA",
             imdbRating: 7.9,
             desc: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
             duration: "45min",
             genre: "Sci-Fi, Action",
             director: "Joseph Kosinski",
             fullDesc: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
             link: "https://egydead.rip/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-witcher-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
             watchFullLink: "https://egydead.rip/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-witcher-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
             image: "https://res.cloudinary.com/du5jfl3ng/image/upload/v1771355355/THE_WITCHER_okqkt8.jpg",
             videoUrl: "https://res.cloudinary.com/du5jfl3ng/video/upload/v1771357128/THE_WITCHER_MAIN_TRAILER_NETFLIX_-_Netflix_1080p_h264_1_dzb1be.mp4",
             actors: ["Freya Allan", "Anya Chalotra", "Henry Cavill", "Joey Batey"],
             tags: ["Action", "Drama"],
             quality: "4K HDR",
             specialMoments: [
                 {
                     id: "moment_hbo_001",
                     title: "The Witcher - Geralt vs Renfri 4K UHD",
                     description: "",
                     duration: "2.46",
                     image: "smh/witcher 1.jpg",
                     videoUrl: "smh/witcher 1.mp4",
                     type: "Epic Scene"
                 },
                 {
                     id: "moment_hbo_002",
                     title: "The Witcher Season 2 | Burn Butcher Burn Scene",
                     description: "",
                     duration: "1:41",
                     image: "smh/witcher 2.avif",
                     videoUrl: "smh/witcher 2.mp4",
                     type: "Epic Scene"
                 },
                 {
                     id: "moment_hbo_003",
                     title: "Geralt and the Dwarves fighting Nilfgaardians",
                     description: "",
                     duration: "1:31",
                     image: "smh/witcher 3.jpg",
                     videoUrl: "smh/witcher 3.mp4",
                     type: "Epic Scene"
                 },
                 {
                     id: "moment_hbo_004",
                     title: "Fight scene at the banquet",
                     description: "",
                     duration: "1:44",
                     image: "smh/witcher 4.jpg",
                     videoUrl: "smh/witcher 4.mp4",
                     type: "Epic Scene"
                 }
             ]
         },
         { 
             id: "hero_002",
             title: "TWIN PEAKS", 
             year: "1991", 
             rating: "PG-13", 
             imdbRating: 8.7,
             desc: "An idiosyncratic FBI agent investigates the murder of a young woman in the even more idiosyncratic town of Twin Peaks.",
             duration: "60min",
             genre: "Sci-Fi, Drama",
             director: "Christopher Nolan",
             fullDesc: "An idiosyncratic FBI agent investigates the murder of a young woman in the even more idiosyncratic town of Twin Peaks.",
             link: "https://egydead.rip/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d9%85%d8%b3%d9%84%d8%b3%d9%84-twin-peaks-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
             watchFullLink: "https://egydead.rip/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d9%85%d8%b3%d9%84%d8%b3%d9%84-twin-peaks-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
             image: "https://res.cloudinary.com/du5jfl3ng/image/upload/v1771355346/twin_peaks_noe7xr.webp",
             videoUrl: "https://res.cloudinary.com/du5jfl3ng/video/upload/v1771356986/TWIN_PEAKS_Seasons_1_2_Official_Teaser_June_13_on_MUBI_-_MUBI_1080p_h264_lnssuj.mp4",
             actors: ["Michael Ontkean", "Kyle MacLachlan", "Mädchen Amick", "Peggy Lipton"],
             tags: ["Sci-Fi", "Drama"],
             quality: "4K HDR",
             specialMoments: [
                 {
                     id: "moment_hbo_001",
                     title: "Dale Cooper's best advice",
                     description: "",
                     duration: "1:45",
                     image: "smh/twin peaks 1.jpg",
                     videoUrl: "smh/twin peaks 1.mp4",
                     type: "Iconic Moment"
                 },
                
             ]
         },
         { 
             id: "hero_003",
             title: "karma", 
             year: "2025", 
             rating: "TV-MA", 
             imdbRating: 7.6,
             desc: "Bound by their harrowing destinies, a physician plagued by nightmares, a man shaken after his world was unexpectedly disrupted and a debtor drowning in private loans become caught in inescapable circumstances.",
             duration: "1h",
             genre: "Drama, Thriller",
             director: "Christopher Nolan",
             fullDesc: "Bound by their harrowing destinies, a physician plagued by nightmares, a man shaken after his world was unexpectedly disrupted and a debtor drowning in private loans become caught in inescapable circumstances.",
             link: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-%d9%83%d8%a7%d8%b1%d9%85%d8%a7-karma-2025-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84-%d8%a7/",
             watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-%d9%83%d8%a7%d8%b1%d9%85%d8%a7-karma-2025-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84-%d8%a7/",
             image: "https://res.cloudinary.com/du5jfl3ng/image/upload/v1771356538/karma_itn6pv.webp",
             videoUrl: "https://res.cloudinary.com/du5jfl3ng/video/upload/v1771356290/Karma_Official_Trailer_Netflix_-_Netflix_1080p_h264_s9hcxd.mp4",
             actors: ["Shin Do-Hyun", "Scarlett Johansson", "Joaquin Phoenix", "Shin Min-a"],
             tags: ["Drama", "Thriller"],
             quality: "4K HDR",
             specialMoments: [
                
             ]
         },
         { 
             id: "hero_004",
             title: "THE LAST OF US", 
             year: "2023", 
             rating: "TV-MA", 
             imdbRating: 8.5,
             desc: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
             duration: "50min",
             genre: "Action, Drama",
             director: "Christopher Nolan",
             fullDesc: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope.",
             link: "https://egydead.rip/season/the-last-of-us-s01/",
             watchFullLink: "https://egydead.rip/season/the-last-of-us-s01/",
             image: "https://res.cloudinary.com/du5jfl3ng/image/upload/v1771356526/the_last_of_us_w76po1.jpg",
             videoUrl: "https://res.cloudinary.com/du5jfl3ng/video/upload/v1771357403/The_Last_of_Us_Official_Trailer_Max_-_HBO_Max_1080p_h264_vamlxv.mp4",
             actors: ["Bella Ramsey", "Pedro Pascal", "Isabela Merced", "Gabriel Luna"],
             tags: ["Sci-Fi", "Action"],
             quality: "4K HDR",
             specialMoments: [
                 {
                     id: "moment_hbo_001",
                     title: "Ellies shocking of the infected city",
                     description: "",
                     duration: "1:55",
                     image: "smh/last 1.jpg",
                     videoUrl: "smh/last 1.mp4",
                     type: "Epic Scene"
                 },
                 {
                    id: "moment_hbo_002",
                    title: "The Last of Us | Joel Doesn t Like Ellie",
                    description: "",
                    duration: "3:44",
                    image: "smh/last 2.jpg",
                    videoUrl: "smh/last 2.mp4",
                    type: "Epic Scene"
                }
             ]
         },
         { 
             id: "hero_005",
             title: "OLIVE KITTERIDGE", 
             year: "2014", 
             rating: "TV-14", 
             imdbRating: 8.3,
             desc: "Middle-school math teacher Olive marries Henry Kitteridge; they have a 25-year marriage and a son, Christopher.",
             duration: "1h",
             genre: "Drama, Psychological Drama",
             director: "Christopher Nolan",
             fullDesc: "Middle-school math teacher Olive marries Henry Kitteridge; they have a 25-year marriage and a son, Christopher.",
             link: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-olive-kitteridge-2014-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
             watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-olive-kitteridge-2014-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
             image: "https://res.cloudinary.com/du5jfl3ng/image/upload/v1771355362/olive-kitteridge-_unrpyo.avif",
             videoUrl: "https://res.cloudinary.com/du5jfl3ng/video/upload/v1771356510/Olive_Kitteridge_-_Trailer_-_Official_HBO_UK_-_HBO_UK_1080p_h264_nd65dh.mp4",
             actors: ["Frances McDormand", "Richard Jenkins", "Aaron Eckhart", "Maggie Gyllenhaal"],
             tags: ["Drama", "Psychological Drama"],
             quality: "4K HDR",
             specialMoments: [
                 {
                     id: "moment_hbo_001",
                     title: "Olive Kitteridge on depression/ dinner scene",
                     description: "",
                     duration: "0:59",
                     image: "smh/olive 1.jpg",
                     videoUrl: "smh/olive 1.mp4",
                     type: "Iconic Scene"
                 },
             ]
         },
         { 
             id: "hero_006",
             title: "THE OUTSIDER", 
             year: "2020", 
             rating: "TV-MA", 
             imdbRating: 7.6,
             desc: "When an insidious supernatural force edges its way into a seemingly straightforward investigation into the gruesome murder of a young boy, it leads a seasoned cop and an unorthodox investigator to question everything they believe in.",
             duration: "1h",
             genre: " Drama",
             director: "James Cameron",
             fullDesc: "When an insidious supernatural force edges its way into a seemingly straightforward investigation into the gruesome murder of a young boy, it leads a seasoned cop and an unorthodox investigator to question everything they believe in.",
             link: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-outsider-20-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
             watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-outsider-20-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
             image: "https://res.cloudinary.com/du5jfl3ng/image/upload/v1771355341/the_outsider_bndr9z.jpg",
             videoUrl: "https://res.cloudinary.com/du5jfl3ng/video/upload/v1771356798/The_Outsider_Official_Trailer_HBO_-_HBO_1080p_h264_s5hnsq.mp4",
             actors: ["Ben Mendelsohn", "Bill Camp", "Sigourney Weaver", "Stephen Lang"],
             tags: ["Folk Horror", "Drama"],
             quality: "4K HDR",
             specialMoments: [
                
             ]
         },
         { 
             id: "hero_007",
             title: "OUTER BANKS", 
             year: "2020", 
             rating: "TV-MA", 
             imdbRating: 7.5,
             desc: "On an island of haves and have-nots, teen John B enlists his three best friends to hunt for a legendary treasure linked to his father's disappearance.",
             duration: "50min",
             genre: "Action, Drama",
             director: "David Benioff",
             fullDesc: "On an island of haves and have-nots, teen John B enlists his three best friends to hunt for a legendary treasure linked to his father's disappearance.",
             link: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-outer-banks-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%b1%d8%a7%d8%a8%d8%b9-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
             watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-outer-banks-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%b1%d8%a7%d8%a8%d8%b9-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
             image: "https://res.cloudinary.com/du5jfl3ng/image/upload/v1771355314/Outer-Banks_zltzax.webp",
             videoUrl: "https://res.cloudinary.com/du5jfl3ng/video/upload/v1771357438/OUTER_BANKS_Trailer_2020_Netflix_-_Zero_Media_1080p_h264_lznsgy.mp4",
             actors: ["Chase Stokes", "Madelyn Cline", "Madison Bailey", "Lena Headey"],
             tags: ["Action", "Drama"],
             quality: "4K HDR",
             specialMoments: [
                 {
                     id: "moment_hbo_001",
                     title: "sarah & rafe scene pack",
                     description: "",
                     duration: "5:01",
                     image: "smh/outer 1.png",
                     videoUrl: "smh/outer 1.mp4",
                     type: "Shocking Scene"
                 },
                 {
                    id: "moment_hbo_002",
                    title: "sad and weak rafe",
                    description: "",
                    duration: "2:34",
                    image: "smh/outer 2.png",
                    videoUrl: "smh/outer 2.mp4",
                    type: "Shocking Scene"
                }
             ]
         }
     ],
     
     top5ByPlatform: {
         hbo: [
             {
                 id: "hbo_001",
                 rank: 1,
                 title: "THE LEFTOVERS",
                 year: "2014",
                 genre: "drama",
                 imdbRating: 8.8,
                 duration: "1h",
                 description: "Three years after the disappearance of 2% of the global human population, a group of people in a small New York community try to continue their lives while coping with the tragedy of the unexplained nature of the event.",
                 fullDesc: "Three years after the disappearance of 2% of the global human population, a group of people in a small New York community try to continue their lives while coping with the tragedy of the unexplained nature of the event.",
                 watchFullLink: "https://egydead.rip/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-leftovers-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
                 image: "top 5 data/left.jpg",
                 videoUrl: "traillers series/The Leftovers Season 3 Trailer (HD) Final Season - TV Promos (720p, h264).mp4",
                 tags: ["Fantasy", "Drama"],
                 quality: "4K HDR",
                 specialMoments: [
                     {
                         id: "moment_hbo_001",
                         title: "Emotional Confession",
                         description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                         duration: "4:20",
                         image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                         videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                         type: "Emotional Scene"
                     }
                 ]
             },
             {
                id: "hbo_002",
                rank: 2,
                title: "CHERNOBYL",
                year: "2019",
                genre: "drama",
                imdbRating: 9.3,
                duration: "1h",
                description: "In April 1986, the city of Chernobyl in the Soviet Union suffers one of the worst nuclear disasters in the history of mankind. Consequently, many heroes put their lives on the line in the following days, weeks and months.",
                fullDesc: "In April 1986, the city of Chernobyl in the Soviet Union suffers one of the worst nuclear disasters in the history of mankind. Consequently, many heroes put their lives on the line in the following days, weeks and months.",
                watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-chernobyl-2019-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
                image: "top 5 data/chernobly.jpg",
                videoUrl: "traillers series/Chernobyl (2019) ｜ Official Trailer ｜ HBO - HBO (1080p, h264).mp4",
                tags: ["Fantasy", "Drama"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
            {
                id: "hbo_003",
                rank: 3,
                title: "TRUE DETECTIVE",
                year: "2014",
                genre: "drama",
                imdbRating: 8.8,
                duration: "1h",
                description: "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
                fullDesc: "Anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
                watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-true-detective-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%ab%d8%a7%d9%84%d8%ab-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
                image: "top 5 data/tru.jpg",
                videoUrl: "traillers series/True Detective - Season 1： Trailer - Official HBO UK - HBO UK (1080p, h264).mp4",
                tags: ["Crime", "Drama"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
            {
                id: "hbo_004",
                rank: 4,
                title: "BARRY",
                year: "2018",
                genre: "drama",
                imdbRating: 8.3,
                duration: "30min",
                description: "A hit man from the Midwest moves to Los Angeles and gets caught up in the city's theatre arts scene.",
                fullDesc: "A hit man from the Midwest moves to Los Angeles and gets caught up in the city's theatre arts scene.",
                watchFullLink: "https://egydead.rip/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-%d9%85%d8%b3%d9%84%d8%b3%d9%84-barry-2018-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
                image: "top 5 data/barry.jpg",
                videoUrl: "traillers series/Barry Season 4 Teaser Trailer (HD) Final Season ｜ Bill Hader HBO series - TV Promos (1080p, h264).mp4",
                tags: ["Crime", "Drama"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
            {
                id: "hbo_005",
                rank: 5,
                title: "THE NIGHT OF",
                year: "2016",
                genre: "drama",
                imdbRating: 8.4,
                duration: "1h",
                description: "After a night of partying with a woman he picked up, a man wakes up to find her stabbed to death and is charged with her murder.",
                fullDesc: "After a night of partying with a woman he picked up, a man wakes up to find her stabbed to death and is charged with her murder.",
                watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-the-night-of-2016-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
                image: "top 5 data/night.jpg",
                videoUrl: "traillers series/The Night Of - Trailer - Official HBO UK - HBO UK (1080p, h264).mp4",
                tags: ["Crime", "Drama"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            }
         ],
         apple: [
            {
                id: "apple_001",
                rank: 1,
                title: "PRESUMED INNOCENT",
                year: "2024",
                genre: "drama",
                imdbRating: 7.7,
                duration: "1h",
                description: "A horrific murder upends the Chicago Prosecuting Attorney's' office when one of its own is suspected of the crime.",
                fullDesc: "A horrific murder upends the Chicago Prosecuting Attorney's' office when one of its own is suspected of the crime.",
                watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-presumed-innocent-2024-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84-%d8%a7%d9%88%d9%86-%d9%84%d8%a7/",
                image: "top 5 data/presumid.jpg",
                videoUrl: "traillers series/Presumed Innocent — Official Trailer ｜ Apple TV - Apple TV (1080p, h264).mp4",
                tags: ["Crime", "Drama"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
            {
                id: "apple_002",
                rank: 2,
                title: "DARK MATTER",
                year: "2024",
                genre: "drama",
                imdbRating: 7.6,
                duration: "1h",
                description: "A man is abducted into an alternate version of his life. Amid the mind-bending landscape of lives he could've lived, he embarks on a harrowing journey to get back to his true family and save them from a most terrifying foe: himself..",
                fullDesc: "A man is abducted into an alternate version of his life. Amid the mind-bending landscape of lives he could've lived, he embarks on a harrowing journey to get back to his true family and save them from a most terrifying foe: himself..",
                watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-dark-matter-224-%d9%85%d9%88%d8%b3%d9%85-1-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84-%d8%a7%d9%88%d8%a7%d9%8a%d9%86-1/",
                image: "top 5 data/dark matter.jpg",
                videoUrl: "traillers series/Dark Matter — Official Trailer ｜ Apple TV - Apple TV (1080p, h264).mp4",
                tags: ["Crime", "Drama"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
            {
                id: "apple_003",
                rank: 3,
                title: "SEE",
                year: "2019",
                genre: "drama",
                imdbRating: 7.6,
                duration: "1h",
                description: "Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins are born with sight.",
                fullDesc: "Far in a dystopian future, the human race has lost the sense of sight, and society has had to find new ways to interact, build, hunt, and to survive. All of that is challenged when a set of twins are born with sight.",
                watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-see-%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%88%d9%84-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
                image: "top 5 data/see.jpg",
                videoUrl: "traillers series/SEE — Official Trailer ｜ Apple TV - Apple TV (1080p, h264).mp4",
                tags: ["Crime", "Drama"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
            {
                id: "apple_004",
                rank: 4,
                title: "SEVERANCE",
                year: "2022",
                genre: "drama",
                imdbRating: 8.6,
                duration: "50min",
                description: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
                fullDesc: "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
                watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-severance-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84-%d8%a7/",
                image: "top 5 data/severance.jpg",
                videoUrl: "traillers series/Severance — Official Trailer ｜ Apple TV - Apple TV (1080p, h264).mp4",
                tags: ["Crime", "Drama"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
            {
                id: "apple_005",
                rank: 5,
                title: "",
                year: "2022",
                genre: "",
                imdbRating: 0.0,
                duration: "50min",
                description: "",
                fullDesc: "",
                watchFullLink: "",
                image: "top 5 data/progress-loading-bar-buffering-download-upload-and-loading-icon-vector.jpg",
                videoUrl: "traillers series",
                tags: ["Crime", "Drama"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
         ],
         netflix: [
            {
                id: "netflix_001",
                rank: 1,
                title: "DARK",
                year: "2017",
                genre: "psychological drama",
                imdbRating: 8.7,
                duration: "1h",
                description: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
                fullDesc: "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.",
                watchFullLink: "https://egydead.rip/serie/%D8%AC%D9%85%D9%8A%D8%B9-%D9%85%D9%88%D8%A7%D8%B3%D9%85-%D9%85%D8%B3%D9%84%D8%B3%D9%84-dark-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D9%83%D8%A7%D9%85%D9%84/",
                image: "top 5 data/dark.jpg",
                videoUrl: "traillers series/Dark ｜ Teaser [HD] ｜ Netflix - Netflix (1080p, h264).mp4",
                tags: ["Crime", "Drama" ,"Psychological Drama"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
            {
                id: "netflix_002",
                rank: 2,
                title: "NARCOS",
                year: "2015",
                genre: "drama",
                imdbRating: 8.7,
                duration: "50min",
                description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
                fullDesc: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
                watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-narcos-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
                image: "top 5 data/narcos.jpg",
                videoUrl: "traillers series/Narcos - Main Trailer - Netflix [HD].mp4",
                tags: ["Crime", "Drama" ],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
            {
                id: "netflix_003",
                rank: 3,
                title: "OZARK",
                year: "2017",
                genre: "drama",
                imdbRating: 8.4,
                duration: "1h",
                description: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
                fullDesc: "A financial advisor drags his family from Chicago to the Missouri Ozarks, where he must launder money to appease a drug boss.",
                watchFullLink: "https://egydead.rip/serie/%d8%ac%d9%85%d9%8a%d8%b9-%d9%85%d9%88%d8%a7%d8%b3%d9%85-ozark-%d9%85%d8%aa%d8%b1%d8%ac%d9%85%d8%a9-%d9%83%d8%a7%d9%85%d9%84%d8%a9/",
                image: "top 5 data/ozark.jpg",
                videoUrl: "traillers series/Ozark ｜ Official Trailer [HD] ｜ Netflix - Netflix (1080p, h264).mp4",
                tags: ["Crime", "Drama" ,"Psychological Drama"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
            {
                id: "netflix_004",
                rank: 4,
                title: "STRANGER THINGS",
                year: "2016",
                genre: "drama",
                imdbRating: 8.6,
                duration: "1h",
                description: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
                fullDesc: "In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
                watchFullLink: "https://egydead.rip/serie/stranger-things-2016/",
                image: "top 5 data/stranger.jpg",
                videoUrl: "traillers series/Stranger Things 5 ｜ Official Trailer ｜ Netflix - Netflix (1080p, h264).mp4",
                tags: ["Fantasy", "Teen Drama" ],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
            {
                id: "netflix_005",
                rank: 5,
                title: "MONEY HEIST",
                year: "2017",
                genre: "drama",
                imdbRating: 8.2,
                duration: "1h",
                description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
                fullDesc: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
                watchFullLink: "https://egydead.rip/season/%d9%85%d8%b3%d9%84%d8%b3%d9%84-la-casa-de-papel-%d8%a7%d9%84%d9%85%d9%88%d8%b3%d9%85-%d8%a7%d9%84%d8%a7%d9%88%d9%84-%d9%85%d8%aa%d8%b1%d8%ac%d9%85-%d9%83%d8%a7%d9%85%d9%84/",
                image: "top 5 data/casa.webp",
                videoUrl: "traillers series/Money Heist ｜ Series Trailer ｜ Netflix - Netflix (720p, h264).mp4",
                tags: ["Crime", "Drama" ,"Action"],
                quality: "4K HDR",
                specialMoments: [
                    {
                        id: "moment_hbo_001",
                        title: "Emotional Confession",
                        description: "Joel reveals his tragic past to Ellie in a heartbreaking scene.",
                        duration: "4:20",
                        image: "https://images.unsplash.com/photo-1598899134739-24c6565f5c7b9?auto=format&fit=crop&q=80&w=800",
                        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                        type: "Emotional Scene"
                    }
                ]
            },
         ]
     },
     
     mubiPhotos: [
         {
             id: "mubi_001",
             title: "City Lights Dream",
             description: "A stunning view of city lights blending with the night sky, creating a dreamlike atmosphere that captures the essence of modern urban life.",
             duration: "1:45",
             image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=800",
             videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
             type: "Visual Poetry",
             tags: ["Urban", "Night", "Aesthetic"],
             year: "2023",
             imdbRating: 8.2
         },
         {
             id: "mubi_002",
             title: "Mountain Majesty",
             description: "Majestic mountain peaks piercing through the clouds, a testament to nature's grandeur and timeless beauty that inspires awe in every viewer.",
             duration: "2:20",
             image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800",
             videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
             type: "Nature Documentary",
             tags: ["Mountains", "Nature", "Epic"],
             year: "2022",
             imdbRating: 8.5
         },
         {
             id: "mubi_003",
             title: "Ocean Depths",
             description: "The mysterious depths of the ocean where sunlight barely reaches, home to fascinating creatures and underwater landscapes.",
             duration: "3:15",
             image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800",
             videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
             type: "Underwater",
             tags: ["Ocean", "Depth", "Mystery"],
             year: "2023",
             imdbRating: 8.0
         },
         {
             id: "mubi_004",
             title: "Desert Silence",
             description: "The vast, silent expanse of the desert at golden hour, where sand dunes create mesmerizing patterns and shadows play.",
             duration: "1:30",
             image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=800",
             videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
             type: "Landscape",
             tags: ["Desert", "Silence", "Beauty"],
             year: "2021",
             imdbRating: 7.8
         },
         {
             id: "mubi_005",
             title: "Forest Whispers",
             description: "Ancient forests where light filters through dense canopies, creating magical patterns on the forest floor filled with life.",
             duration: "2:45",
             image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
             videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
             type: "Forest Scene",
             tags: ["Forest", "Magic", "Nature"],
             year: "2022",
             imdbRating: 8.3
         },
         {
             id: "mubi_006",
             title: "City Symphony",
             description: "The rhythmic pulse of a bustling metropolis captured in perfect harmony, showcasing urban life in all its dynamic glory.",
             duration: "2:10",
             image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800",
             videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
             type: "Urban Symphony",
             tags: ["City", "Dynamic", "Life"],
             year: "2023",
             imdbRating: 8.1
         },
         {
             id: "mubi_007",
             title: "Aurora Borealis",
             description: "The mesmerizing dance of the Northern Lights across the Arctic sky, a natural phenomenon of breathtaking beauty.",
             duration: "3:30",
             image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&q=80&w=800",
             videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
             type: "Natural Wonder",
             tags: ["Aurora", "Sky", "Magic"],
             year: "2023",
             imdbRating: 9.0
         },
         {
             id: "mubi_008",
             title: "Sunset Serenity",
             description: "A peaceful sunset over calm waters, where the sky paints itself in shades of orange, pink, and purple.",
             duration: "2:00",
             image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
             videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
             type: "Sunset Scene",
             tags: ["Sunset", "Peace", "Beauty"],
             year: "2022",
             imdbRating: 8.4
         }
     ]
 };
 
 // ============ شريط التمرير البطولي ============
 let currentSlide = 0;
 let slideInterval;
 const slideBox = document.getElementById('slideBox');
 const heroContent = document.getElementById('heroContent');
 
 function initHeroSlider() {
     // اختيار فهرس عشوائي للبدء
     const randomIndex = Math.floor(Math.random() * moviesDatabase.heroMovies.length);
     currentSlide = randomIndex;
     
     // مسح الصور القديمة أولاً
     slideBox.innerHTML = '';
     
     // إنشاء جميع الصور
     moviesDatabase.heroMovies.forEach((movie, index) => {
         const img = document.createElement('img');
         img.className = `img-slide ${index === randomIndex ? 'active' : ''}`;
         img.src = movie.image;
         img.alt = movie.title;
         img.loading = "lazy";
         slideBox.appendChild(img);
     });
     
     // تحديث المحتوى بالبطاقة العشوائية
     updateHeroContent(moviesDatabase.heroMovies[randomIndex]);
     startAutoSlide();
 }
 
 function updateHeroContent(movie) {
     const contentArea = document.getElementById('content-area');
     contentArea.style.opacity = '0';
     contentArea.style.transform = 'translateY(20px)';
     
     setTimeout(() => {
         document.getElementById('rating').textContent = movie.rating;
         document.getElementById('imdbRating').textContent = movie.imdbRating;
         document.getElementById('year').textContent = movie.year;
         document.getElementById('title').textContent = movie.title;
         document.getElementById('desc').textContent = movie.desc;
         document.getElementById('watchBtn').href = movie.watchFullLink;
         
         contentArea.style.opacity = '1';
         contentArea.style.transform = 'translateY(0)';
         contentArea.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
     }, 300);
 }
 
 function changeSlide() {
     const slides = document.querySelectorAll('.img-slide');
     const totalSlides = slides.length;
     
     slides[currentSlide].classList.remove('active');
     currentSlide = (currentSlide + 1) % totalSlides;
     slides[currentSlide].classList.add('active');
     updateHeroContent(moviesDatabase.heroMovies[currentSlide]);
 }
 
 function startAutoSlide() {
     if (slideInterval) clearInterval(slideInterval);
     slideInterval = setInterval(changeSlide, 8000);
 }
 
 function stopAutoSlide() {
     if (slideInterval) clearInterval(slideInterval);
 }
 
 heroContent.addEventListener('mouseenter', stopAutoSlide);
 heroContent.addEventListener('mouseleave', startAutoSlide);
 
 // ============ وظائف شريط التنقل ============
 const notificationBtn = document.getElementById('notificationBtn');
 const profileBtn = document.getElementById('profileBtn');
 const notificationDropdown = document.getElementById('notificationDropdown');
 const profileDropdown = document.getElementById('profileDropdown');
 const mobileSearchBtn = document.getElementById('mobileSearchBtn');
 const searchDropdown = document.getElementById('searchDropdown');
 const mobileSearchInput = document.getElementById('mobileSearchInput');
 const desktopSearchInput = document.getElementById('desktopSearchInput');
 const notificationBadge = document.getElementById('notificationBadge');
 const notificationList = document.getElementById('notificationList');
 const markReadBtn = document.getElementById('markReadBtn');
 const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
 const desktopNavLinks = document.querySelectorAll('.nav-links a');
 
 const notifications = [
     { id: 1, title: "New Episode Available!", message: "The latest episode of 'Dark Shadows' is now streaming.", time: "2 hours ago", icon: "fa-film", unread: true },
     { id: 2, title: "Friend Activity", message: "Sarah added 'Inception' to her watchlist.", time: "5 hours ago", icon: "fa-user-group", unread: true },
     { id: 3, title: "New Music Album", message: "Check out the latest soundtrack from your favorite series.", time: "1 day ago", icon: "fa-music", unread: true }
 ];
 
 function populateNotifications() {
     notificationList.innerHTML = '';
     const unreadCount = notifications.filter(n => n.unread).length;
     notificationBadge.textContent = unreadCount;
     notificationBadge.style.display = unreadCount === 0 ? 'none' : 'flex';
     
     if (notifications.length === 0) {
         notificationList.innerHTML = '<div class="no-notifications">No notifications yet</div>';
         return;
     }
     
     notifications.forEach(notification => {
         const item = document.createElement('div');
         item.className = `notification-item ${notification.unread ? 'unread' : ''}`;
         item.dataset.id = notification.id;
         item.innerHTML = `
             <div class="notification-icon"><i class="fa-solid ${notification.icon}"></i></div>
             <div class="notification-content">
                 <p><strong>${notification.title}</strong> ${notification.message}</p>
                 <div class="notification-time">${notification.time}</div>
             </div>
         `;
         item.addEventListener('click', () => {
             if (notification.unread) {
                 notification.unread = false;
                 item.classList.remove('unread');
                 const newUnreadCount = notifications.filter(n => n.unread).length;
                 notificationBadge.textContent = newUnreadCount;
                 if (newUnreadCount === 0) notificationBadge.style.display = 'none';
             }
         });
         notificationList.appendChild(item);
     });
 }
 
 populateNotifications();
 
 notificationBtn.addEventListener('click', (e) => {
     e.stopPropagation();
     notificationDropdown.classList.toggle('active');
     profileDropdown.classList.remove('active');
     searchDropdown.classList.remove('active');
 });
 
 profileBtn.addEventListener('click', (e) => {
     e.stopPropagation();
     profileDropdown.classList.toggle('active');
     notificationDropdown.classList.remove('active');
     searchDropdown.classList.remove('active');
 });
 
 mobileSearchBtn.addEventListener('click', (e) => {
     e.stopPropagation();
     searchDropdown.classList.toggle('active');
     notificationDropdown.classList.remove('active');
     profileDropdown.classList.remove('active');
     
     if (searchDropdown.classList.contains('active')) {
         setTimeout(() => mobileSearchInput.focus(), 300);
     }
 });
 
 mobileSearchInput.addEventListener('input', function() {
     const suggestions = document.getElementById('searchSuggestions');
     suggestions.classList.toggle('active', this.value.length > 0);
 });
 
 document.querySelectorAll('.suggestion-tag').forEach(tag => {
     tag.addEventListener('click', function() {
         mobileSearchInput.value = this.textContent;
         document.getElementById('searchSuggestions').classList.add('active');
         mobileSearchInput.focus();
     });
 });
 
 document.addEventListener('click', (e) => {
     if (!notificationDropdown.contains(e.target) && !notificationBtn.contains(e.target)) {
         notificationDropdown.classList.remove('active');
     }
     
     if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
         profileDropdown.classList.remove('active');
     }
     
     if (!searchDropdown.contains(e.target) && !mobileSearchBtn.contains(e.target)) {
         searchDropdown.classList.remove('active');
     }
 });
 
 markReadBtn.addEventListener('click', () => {
     notifications.forEach(notification => notification.unread = false);
     document.querySelectorAll('.notification-item').forEach(item => item.classList.remove('unread'));
     notificationBadge.textContent = '0';
     notificationBadge.style.display = 'none';
 });
 
 mobileNavLinks.forEach(link => {
     link.addEventListener('click', function(e) {
         e.preventDefault();
         const href = this.getAttribute('href');
         
         if (href === '#') return;
         
         mobileNavLinks.forEach(l => l.classList.remove('active'));
         desktopNavLinks.forEach(l => l.classList.remove('active'));
         
         this.classList.add('active');
         
         notificationDropdown.classList.remove('active');
         profileDropdown.classList.remove('active');
         searchDropdown.classList.remove('active');
         
         setTimeout(() => {
             window.location.href = href;
         }, 300);
     });
 });
 
 desktopNavLinks.forEach(link => {
     link.addEventListener('click', function(e) {
         e.preventDefault();
         const href = this.getAttribute('href');
         
         if (href === '#') return;
         
         desktopNavLinks.forEach(l => l.classList.remove('active'));
         mobileNavLinks.forEach(l => l.classList.remove('active'));
         
         this.classList.add('active');
         
         setTimeout(() => {
             window.location.href = href;
         }, 300);
     });
 });
 
 // ============ وظائف البوب أب الحديث ============
 const modernPopup = document.getElementById('modernPopup');
 const modernPopupContent = document.getElementById('modernPopupContent');
 let currentVideo = null;
 let currentMovieData = null;
 let currentMomentData = null;
 let activeMomentCard = null;
 let activeMubiCard = null;
 let currentPopupType = null;
 let isScrolledToTop = false;
 
 function openModernPopup(movieData, popupType = 'movie') {
     currentMovieData = movieData;
     currentMomentData = null;
     currentPopupType = popupType;
     isScrolledToTop = false;
     
     if (activeMomentCard) {
         activeMomentCard.classList.remove('active');
         activeMomentCard = null;
     }
     
     if (activeMubiCard) {
         activeMubiCard.classList.remove('active');
         activeMubiCard = null;
     }
     
     let popupContent = '';
     
     if (popupType === 'movie') {
         popupContent = createMoviePopupContent(movieData);
     } else if (popupType === 'mubi') {
         popupContent = createMubiPopupContent(movieData);
     }
     
     modernPopupContent.innerHTML = popupContent;
     
     modernPopupContent.scrollTop = 0;
     
     modernPopupContent.addEventListener('scroll', handlePopupScroll);
     
     if (movieData.videoUrl) {
         currentVideo = document.getElementById('popupVideo');
         if (currentVideo) {
             currentVideo.volume = 0.5;
             currentVideo.muted = false;
             currentVideo.play().catch(e => {
                 console.log("Auto-play prevented:", e);
             });
         }
     }
     
     document.body.classList.add('popup-open');
     
     modernPopup.style.display = 'flex';
     setTimeout(() => {
         modernPopup.classList.add('active');
         
         if (window.innerWidth <= 768) {
             modernPopupContent.classList.add('mobile-popup');
         }
     }, 10);
 }
 
 function handlePopupScroll() {
     const scrollTop = modernPopupContent.scrollTop;
     const videoHeight = document.querySelector('.modern-video-box')?.offsetHeight || 0;
     
     if (scrollTop > videoHeight - 100 && !isScrolledToTop && currentMomentData) {
         modernPopupContent.scrollTo({
             top: 0,
             behavior: 'smooth'
         });
         isScrolledToTop = true;
     }
 }
 
 function createMoviePopupContent(movieData) {
     return `
         <button class="modern-close-btn" onclick="closeModernPopup()">✕</button>
         
         <div class="modern-layout">
             <div class="modern-video-box" id="videoContainer">
                 ${movieData.videoUrl ? `
                     <video id="popupVideo" controls autoplay>
                         <source src="${movieData.videoUrl}" type="video/mp4">
                         Your browser does not support the video tag.
                     </video>
                 ` : `
                     <div class="video-placeholder">
                         <i class="fa-solid fa-play-circle"></i>
                         <p>Trailer not available</p>
                         <p class="text-sm mt-2">${movieData.title}</p>
                     </div>
                 `}
             </div>
 
             <div class="modern-info-box">
                 <div class="tag-row">
                     ${movieData.tags ? movieData.tags.map(tag => `<span class="modern-tag">${tag}</span>`).join('') : ''}
                 </div>
 
                 <h1 class="modern-movie-title">${movieData.title}</h1>
 
                 <div class="modern-rating-row">
                     <div class="modern-imdb-box">
                         <i class="fab fa-imdb"></i> ${movieData.imdbRating}
                     </div>
                     <span class="modern-quality">${movieData.quality || '4K HDR'}</span>
                     <span style="color: var(--text-dim); font-size: 14px;">${movieData.year} • ${movieData.duration}</span>
                 </div>
 
                 <p class="modern-synopsis">
                     ${movieData.fullDesc || movieData.description}
                 </p>
 
                 <div class="modern-actor-chips">
                     ${movieData.actors ? movieData.actors.map(actor => `<span class="modern-actor">${actor}</span>`).join('') : ''}
                 </div>
 
                 <button class="modern-btn-play" onclick="watchFullMovie()">
                     <span>▶</span> WATCH FULL MOVIE
                 </button>
             </div>
         </div>
 
         ${createSpecialMomentsSection(movieData)}
     `;
 }
 
 function createMubiPopupContent(mubiData) {
     return `
         <button class="modern-close-btn" onclick="closeModernPopup()">✕</button>
         
         <div class="modern-layout">
             <div class="modern-video-box" id="videoContainer">
                 ${mubiData.videoUrl ? `
                     <video id="popupVideo" controls autoplay>
                         <source src="${mubiData.videoUrl}" type="video/mp4">
                         Your browser does not support the video tag.
                     </video>
                 ` : `
                     <div class="video-placeholder">
                         <i class="fa-solid fa-play-circle"></i>
                         <p>Video not available</p>
                         <p class="text-sm mt-2">${mubiData.title}</p>
                     </div>
                 `}
             </div>
 
             <div class="modern-info-box">
                 <div class="tag-row">
                     ${mubiData.tags ? mubiData.tags.map(tag => `<span class="modern-tag">${tag}</span>`).join('') : ''}
                 </div>
 
                 <h1 class="modern-movie-title">${mubiData.title}</h1>
 
                 <div class="modern-rating-row">
                     <div class="modern-imdb-box">
                         <i class="fab fa-imdb"></i> ${mubiData.imdbRating || 8.0}
                     </div>
                     <span class="modern-quality">${mubiData.type || 'Visual Art'}</span>
                     <span style="color: var(--text-dim); font-size: 14px;">${mubiData.year || '2023'} • ${mubiData.duration}</span>
                 </div>
 
                 <p class="modern-synopsis">
                     ${mubiData.description}
                 </p>
 
                 <button class="modern-btn-play" onclick="watchFullMovie()">
                     <span>▶</span> PLAY FULL SCENE
                 </button>
             </div>
         </div>
 
         ${createMubiPopupGrid(mubiData)}
     `;
 }
 
 function createMubiPopupGrid(currentMubi) {
     const allMubiPhotos = moviesDatabase.mubiPhotos;
     const otherMubiPhotos = allMubiPhotos.filter(m => m.id !== currentMubi.id);
     const momentsCount = allMubiPhotos.length;
     
     return `
         <div class="mubi-popup-section">
             <div class="mubi-popup-header">
                 <div class="mubi-popup-title">
                     <i class="fas fa-images"></i>
                     More Visual Moments
                     <span class="mubi-popup-count">${momentsCount}</span>
                 </div>
             </div>
             
             <div class="empty-moments-section">
                 <div class="empty-icon">
                     <i class="fas fa-photo-video"></i>
                 </div>
                 <h3 class="empty-title">No More Moments Available</h3>
                 <p class="empty-description">
                     This section is currently empty. More visual moments will be added soon.
                 </p>
             </div>
         </div>
     `;
 }
 
 function playMomentVideo(momentData, momentCard, type = 'movie') {
     currentMomentData = momentData;
     isScrolledToTop = false;
     
     const videoContainer = document.getElementById('videoContainer');
     videoContainer.innerHTML = `
         ${momentData.videoUrl ? `
             <video id="popupVideo" controls autoplay>
                 <source src="${momentData.videoUrl}" type="video/mp4">
                 Your browser does not support the video tag.
             </video>
         ` : `
             <div class="video-placeholder">
                 <i class="fa-solid fa-play-circle"></i>
                 <p>Moment not available</p>
                 <p class="text-sm mt-2">${momentData.title}</p>
             </div>
         `}
     `;
     
     if (type === 'movie') {
         if (activeMomentCard) activeMomentCard.classList.remove('active');
         momentCard.classList.add('active');
         activeMomentCard = momentCard;
     } else if (type === 'mubi') {
         if (activeMubiCard) activeMubiCard.classList.remove('active');
         momentCard.classList.add('active');
         activeMubiCard = momentCard;
     }
     
     modernPopupContent.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
     
     if (momentData.videoUrl) {
         currentVideo = document.getElementById('popupVideo');
         if (currentVideo) {
             currentVideo.volume = 0.5;
             currentVideo.muted = false;
             currentVideo.play().catch(e => {
                 console.log("Auto-play prevented:", e);
             });
         }
     }
 }
 
 function watchFullMovie() {
     if (currentMomentData && currentMomentData.watchFullLink) {
         window.open(currentMomentData.watchFullLink, '_blank');
     } else if (currentMovieData && currentMovieData.watchFullLink) {
         window.open(currentMovieData.watchFullLink, '_blank');
     } else if (currentMovieData && currentMovieData.link) {
         window.open(currentMovieData.link, '_blank');
     }
 }
 
 function closeModernPopup() {
     if (currentVideo) {
         currentVideo.pause();
         currentVideo.currentTime = 0;
         currentVideo = null;
     }
     
     if (activeMomentCard) {
         activeMomentCard.classList.remove('active');
         activeMomentCard = null;
     }
     
     if (activeMubiCard) {
         activeMubiCard.classList.remove('active');
         activeMubiCard = null;
     }
     
     modernPopupContent.removeEventListener('scroll', handlePopupScroll);
     
     modernPopup.classList.remove('active');
     setTimeout(() => {
         modernPopup.style.display = 'none';
         
         document.body.classList.remove('popup-open');
         
         modernPopupContent.classList.remove('mobile-popup');
     }, 500);
 }
 
 modernPopup.addEventListener('click', (e) => {
     if (e.target === modernPopup) {
         closeModernPopup();
     }
 });
 
 // ============ وظائف قسم اللحظات الخاصة ============
 function createSpecialMomentsSection(movieData) {
     const moments = movieData.specialMoments || getDefaultSpecialMoments(movieData);
     const momentsCount = moments.length;
     
     return `
         <div class="special-moments-section">
             <div class="special-moments-header">
                 <div class="special-moments-title">
                     <i class="fas fa-star"></i>
                     Special Moments
                     <span class="special-moments-count">${momentsCount}</span>
                 </div>
             </div>
             
             <div class="moments-grid" id="momentsGrid">
                 ${renderSpecialMoments(moments, movieData)}
             </div>
         </div>
     `;
 }
 
 function getDefaultSpecialMoments(movieData) {
     return [
         {
             id: `moment_${movieData.id}_001`,
             title: `${movieData.title} - Epic Scene`,
             description: "The most memorable scene from this masterpiece that will leave you breathless.",
             duration: "3:30",
             image: movieData.image,
             videoUrl: movieData.videoUrl,
             type: "Iconic Moment"
         }
     ];
 }
 
 function renderSpecialMoments(moments, movieData) {
     let momentsHTML = '';
     
     moments.forEach(moment => {
         momentsHTML += `
             <div class="moment-card" data-moment-id="${moment.id}">
                 <img src="${moment.image}" alt="${moment.title}" loading="lazy">
                 
                 <div class="hover-play-btn"></div>
                 
                 <div class="moment-overlay">
                     <div class="moment-details">
                         <div class="moment-title">${moment.title}</div>
                         <div class="moment-meta">
                             <span class="moment-duration">${moment.duration}</span>
                             <span>${moment.type || 'Special Moment'}</span>
                         </div>
                         <div class="moment-description">
                             ${moment.description}
                         </div>
                     </div>
                 </div>
             </div>
         `;
     });
     
     setTimeout(() => {
         document.querySelectorAll('.moment-card').forEach(card => {
             card.addEventListener('click', function() {
                 const momentId = this.getAttribute('data-moment-id');
                 const moment = moments.find(m => m.id === momentId);
                 if (moment) {
                     playMomentVideo(moment, this);
                 }
             });
         });
     }, 100);
     
     return momentsHTML;
 }
 
 // ============ وظائف قسم موبي ============
 function initializeMubiGrid() {
     const mubiGrid = document.getElementById('mubiGrid');
     mubiGrid.innerHTML = '';
     
     const photos = moviesDatabase.mubiPhotos;
     
     if (!photos || photos.length === 0) {
         mubiGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-dim);">No photos available</div>';
         return;
     }
     
     photos.forEach(photo => {
         const photoCard = document.createElement('div');
         photoCard.className = 'mubi-photo-card';
         photoCard.setAttribute('data-id', photo.id);
         
         photoCard.innerHTML = `
             <img src="${photo.image}" alt="${photo.title}" loading="lazy">
             
             <div class="mubi-hover-play-btn"></div>
             
             <div class="mubi-overlay">
                 <div class="mubi-details">
                     <div class="mubi-title">${photo.title}</div>
                     <div class="mubi-meta">
                         <span class="mubi-duration">${photo.duration}</span>
                         <span>${photo.type || 'Visual Art'}</span>
                     </div>
                     <div class="mubi-description-text">
                         ${photo.description}
                     </div>
                 </div>
             </div>
         `;
         
         photoCard.addEventListener('click', (e) => {
             e.preventDefault();
             openModernPopup(photo, 'mubi');
         });
         
         mubiGrid.appendChild(photoCard);
     });
 }
 
 // ============ وظائف القسم العلوي 5 - المعدلة ============
 let currentPlatform = 'hbo';
 
 function initializeTop5Grid(platform) {
     const top5Grid = document.getElementById('top5Grid');
     top5Grid.innerHTML = '';
     
     const movies = moviesDatabase.top5ByPlatform[platform];
     
     if (!movies || movies.length === 0) {
         top5Grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-dim);">No movies available for this platform</div>';
         return;
     }
     
     movies.forEach(movie => {
         const movieCard = document.createElement('div');
         movieCard.className = 'top5-card';
         movieCard.setAttribute('data-id', movie.id);
         
         movieCard.innerHTML = `
             <img src="${movie.image}" alt="${movie.title}" loading="lazy">
             
             <div class="card-content">
                 <div class="card-genre">${movie.genre}</div>
                 <div class="card-title">${movie.title}</div>
                 <div class="card-meta">
                     <div class="card-rating">
                         <i class="fas fa-star"></i> ${movie.imdbRating}
                     </div>
                     <span>${movie.duration}</span>
                 </div>
             </div>
             
             <div class="hover-content">
                 <div class="hover-rank-badge">${movie.rank}</div>
                 <div class="hover-title">${movie.title}</div>
                 <div class="hover-meta">
                     <div class="hover-rating">
                         <i class="fas fa-star"></i> ${movie.imdbRating}
                     </div>
                     <div class="hover-genre">${movie.genre}</div>
                 </div>
                 <div class="hover-description">
                     ${movie.description}
                 </div>
                 <button class="hover-btn" data-movie-id="${movie.id}">
                     <i class="fas fa-play"></i> Watch Now
                 </button>
             </div>
         `;
         
         const watchBtn = movieCard.querySelector('.hover-btn');
         watchBtn.addEventListener('click', (e) => {
             e.stopPropagation();
             openModernPopup(movie);
         });
         
         movieCard.addEventListener('click', (e) => {
             if (!e.target.closest('.hover-btn')) {
                 openModernPopup(movie);
             }
         });
         
         top5Grid.appendChild(movieCard);
     });
 }
 
 function changePlatform(platform) {
     currentPlatform = platform;
     
     document.querySelectorAll('.platform-tab-btn').forEach(tab => {
         tab.classList.remove('active');
         if (tab.getAttribute('data-platform') === platform) {
             tab.classList.add('active');
         }
     });
     
     document.getElementById('current-platform').textContent = 
         platform === 'hbo' ? 'HBO MAX' : 
         platform === 'apple' ? 'APPLE TV+' : 
         'NETFLIX';
     
     initializeTop5Grid(platform);
 }
 
 // ============ التهيئة عند تحميل الصفحة ============
 document.addEventListener('DOMContentLoaded', () => {
     initHeroSlider();
     changePlatform('hbo');
     initializeMubiGrid();
     
     document.querySelectorAll('.platform-tab-btn').forEach(btn => {
         btn.addEventListener('click', () => {
             const platform = btn.getAttribute('data-platform');
             changePlatform(platform);
         });
     });
     
     document.getElementById('infoBtn').addEventListener('click', () => {
         openModernPopup(moviesDatabase.heroMovies[currentSlide]);
     });
     
     document.addEventListener('keydown', (e) => {
         if (e.key === 'Escape') {
             closeModernPopup();
             notificationDropdown.classList.remove('active');
             profileDropdown.classList.remove('active');
             searchDropdown.classList.remove('active');
         }
     });
     
     window.addEventListener('resize', () => {
         initializeTop5Grid(currentPlatform);
         initializeMubiGrid();
     });
     
     setTimeout(() => {
         moviesDatabase.heroMovies.forEach(movie => {
             const img = new Image();
             img.src = movie.image;
         });
         
         moviesDatabase.mubiPhotos.forEach(photo => {
             const img = new Image();
             img.src = photo.image;
         });
     }, 1000);
 });