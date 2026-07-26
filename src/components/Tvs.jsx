import React from 'react'

export default function Tmovies() {
    const TVs = [
        {
            title: "To All the Boys: P.S. I Still Love You",
            year: 2020,
            cast: [
                "Lana Condor",
                "Noah Centineo",
                "Jordan Fisher",
                "Anna Cathcart",
                "John Corbett"
            ],
            genres: ["Comedy", "Teen", "Romance"],
            href: "To_All_the_Boys:_P.S._I_Still_Love_You",
            extract: "To All the Boys: P.S. I Still Love You is a 2020 American teen romantic comedy film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/bc/To_All_the_Boys_-_P.S._I_Still_Love_You_official_release_poster.jpg",
            thumbnail_width: 220,
            thumbnail_height: 326
        },
        {
            title: "Sonic the Hedgehog",
            year: 2020,
            cast: [
                "James Marsden",
                "Ben Schwartz",
                "Tika Sumpter",
                "Natasha Rothwell",
                "Adam Pally",
                "Neal McDonough",
                "Jim Carrey"
            ],
            genres: ["Action", "Adventure", "Comedy"],
            href: "Sonic_the_Hedgehog_(film)",
            extract: "Sonic the Hedgehog is a 2020 action-adventure comedy film based on the video game series.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/45/Sonic_the_Hedgehog_film_poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 384
        },
        {
            title: "Fantasy Island",
            year: 2020,
            cast: [
                "Michael Peña",
                "Maggie Q",
                "Lucy Hale",
                "Austin Stowell",
                "Portia Doubleday",
                "Jimmy O. Yang",
                "Ryan Hansen",
                "Michael Rooker"
            ],
            genres: ["Horror", "Supernatural"],
            href: "Fantasy_Island_(film)",
            extract: "Fantasy Island is a 2020 American supernatural horror film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/7/7e/Fantasy_Island_poster.jpg",
            thumbnail_width: 220,
            thumbnail_height: 326
        },
        {
            title: "The Photograph",
            year: 2020,
            cast: [
                "Issa Rae",
                "Lakeith Stanfield",
                "Chelsea Peretti",
                "Lil Rel Howery",
                "Courtney B. Vance"
            ],
            genres: ["Drama", "Romance"],
            href: "The_Photograph_(2020_film)",
            extract: "The Photograph is a 2020 American romantic drama film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/c4/The_Photograph_poster.jpg",
            thumbnail_width: 251,
            thumbnail_height: 397
        },
        {
            title: "Downhill",
            year: 2020,
            cast: [
                "Julia Louis-Dreyfus",
                "Will Ferrell",
                "Miranda Otto",
                "Zoë Chao",
                "Zach Woods"
            ],
            genres: ["Comedy", "Drama"],
            href: "Downhill_(2020_film)",
            extract: "Downhill is a 2020 American black comedy-drama film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/6a/Downhill_poster.jpeg",
            thumbnail_width: 258,
            thumbnail_height: 386
        },
        {
            title: "Spy Intervention",
            year: 2020,
            cast: [
                "Drew Van Acker",
                "Poppy Delevingne",
                "Natasha Bassett",
                "Max Silvestri",
                "Brittany Furlan",
                "Blake Anderson"
            ],
            genres: ["Action", "Comedy", "Spy"],
            href: "Spy_Intervention",
            extract: "Spy Intervention is a 2020 American action comedy spy film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/cf/Spy_Intervention_%282020%29_Film_Poster.jpg",
            thumbnail_width: 236,
            thumbnail_height: 350
        },
        {
            title: "The Kindness of Strangers",
            year: 2020,
            cast: [
                "Andrea Riseborough",
                "Tahar Rahim",
                "Zoe Kazan",
                "Bill Nighy",
                "Caleb Landry Jones",
                "Jay Baruchel"
            ],
            genres: ["Drama"],
            href: "The_Kindness_of_Strangers_(film)",
            extract: "The Kindness of Strangers is a 2019 internationally co-produced drama film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/8/8d/The_Kindness_of_Strangers_poster.jpg",
            thumbnail_width: 263,
            thumbnail_height: 379
        },
        {
            title: "The Call of the Wild",
            year: 2020,
            cast: [
                "Harrison Ford",
                "Omar Sy",
                "Cara Gee",
                "Dan Stevens",
                "Karen Gillan",
                "Bradley Whitford"
            ],
            genres: ["Adventure"],
            href: "The_Call_of_the_Wild_(2020_film)",
            extract: "The Call of the Wild is a 2020 American adventure film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/43/The_Call_of_the_Wild_poster.jpg",
            thumbnail_width: 251,
            thumbnail_height: 397
        },
        {
            title: "Emma",
            year: 2020,
            cast: [
                "Anya Taylor-Joy",
                "Johnny Flynn",
                "Josh O'Connor",
                "Callum Turner",
                "Mia Goth",
                "Miranda Hart",
                "Bill Nighy"
            ],
            genres: ["Comedy", "Historical", "Romance"],
            href: "Emma_(2020_film)",
            extract: "Emma is a 2020 period romantic comedy film based on Jane Austen's novel.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/53/Emma_poster.jpeg",
            thumbnail_width: 220,
            thumbnail_height: 326
        },
        {
            title: "The Last Thing He Wanted",
            year: 2020,
            cast: [
                "Anne Hathaway",
                "Ben Affleck",
                "Rosie Perez",
                "Edi Gathegi",
                "Mel Rodriguez",
                "Toby Jones",
                "Willem Dafoe"
            ],
            genres: ["Political", "Thriller"],
            href: "The_Last_Thing_He_Wanted_(film)",
            extract: "The Last Thing He Wanted is a 2020 political thriller film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Last_Thing_He_Wanted.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383
        },
        {
            title: "Brahms: The Boy II",
            year: 2020,
            cast: [
                "Katie Holmes",
                "Owain Yeoman",
                "Christopher Convery",
                "Ralph Ineson"
            ],
            genres: ["Horror", "Supernatural"],
            href: "Brahms:_The_Boy_II",
            extract: "Brahms: The Boy II is a 2020 American supernatural horror film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/51/Brahms_The_Boy_Poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383
        },
        {
            title: "The Night Clerk",
            year: 2020,
            cast: [
                "Tye Sheridan",
                "Ana de Armas",
                "Helen Hunt",
                "John Leguizamo"
            ],
            genres: ["Crime", "Drama"],
            href: "The_Night_Clerk",
            extract: "The Night Clerk is a 2020 American crime drama film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/9f/The_Night_Clerk_poster.jpeg",
            thumbnail_width: 220,
            thumbnail_height: 330
        },
        {
            title: "Impractical Jokers: The Movie",
            year: 2020,
            cast: [
                "Brian Quinn",
                "Joe Gatto",
                "Sal Vulcano",
                "James Murray",
                "Paula Abdul"
            ],
            genres: ["Comedy"],
            href: "Impractical_Jokers:_The_Movie",
            extract: "Impractical Jokers: The Movie is a 2020 American reality comedy film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/6a/Impractical_Jokers_The_Movie_poster.png",
            thumbnail_width: 220,
            thumbnail_height: 325
        }
    ];


    return (
        <>
            <div className='flex flex-row bg-[#131722] h-screen'>
                <div className='flex flex-row flex-wrap items-center justify-center relative bg-[#131722] h-screen'>
                    
                    <div className='grid grid-cols-8 h-full w-full items-center justify-center gap-10 z-10 relative pt-30 p-10'>
                        <div className='flex flex-col col-span-2'>
                            <h1 className='text-white text-4xl font-semibold'>Trending TV Movies To Watch Right Now</h1>
                            <p className='text-gray-400'>Most watched movies by days</p>
                        </div>
                        {TVs.map((movie) => {
                            return (
                                <div className='flex flex-col gap-5 items-center justify-center w-40 h-60 p-2 rounded-lg'>
                                    <img src={movie.thumbnail} className='w-40 h-60' />
                                    <div>
                                        <p className='text-gray-400'>{movie.title}</p>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
