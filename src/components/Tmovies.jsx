import React from 'react'

export default function Tmovies() {
    const TrindingMov = [
        {
            title: "John Henry",
            year: 2020,
            cast: [
                "Terry Crews",
                "Ludacris",
                "Jamila Velazquez",
                "Ken Foree",
                "Tyler Alvarez",
                "Joseph Julian Soria"
            ],
            genres: ["Drama", "Thriller"],
            href: "John_Henry_(2020_film)",
            extract: "John Henry is a 2020 American thriller drama film starring Terry Crews and Ludacris.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/b8/JohnHenryPoster.jpeg",
            thumbnail_width: 220,
            thumbnail_height: 316
        },
        {
            title: "The Rhythm Section",
            year: 2020,
            cast: [
                "Blake Lively",
                "Jude Law",
                "Sterling K. Brown"
            ],
            genres: ["Action", "Thriller"],
            href: "The_Rhythm_Section",
            extract: "The Rhythm Section is a 2020 action thriller film directed by Reed Morano.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/98/The_Rhythm_Section_poster.jpg",
            thumbnail_width: 260,
            thumbnail_height: 382
        },
        {
            title: "Gretel & Hansel",
            year: 2020,
            cast: [
                "Sophia Lillis",
                "Sammy Leakey",
                "Charles Babalola",
                "Jessica De Gouw",
                "Alice Krige"
            ],
            genres: ["Fantasy", "Horror"],
            href: "Gretel_%26_Hansel",
            extract: "Gretel & Hansel is a 2020 dark fantasy horror film based on the German folklore tale.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/d/de/Gretel_%26_Hansel_-_A_Grim_Fairy_Tale_theatrical_poster.jpeg",
            thumbnail_width: 220,
            thumbnail_height: 326
        },
        {
            title: "The Assistant",
            year: 2020,
            cast: [
                "Julia Garner",
                "Matthew Macfadyen"
            ],
            genres: ["Drama"],
            href: "The_Assistant_(2019_film)",
            extract: "The Assistant is a 2019 American drama film written and directed by Kitty Green.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/9b/The_Assistant_poster.jpeg",
            thumbnail_width: 259,
            thumbnail_height: 383
        },
        {
            title: "Birds of Prey",
            year: 2020,
            cast: [
                "Margot Robbie",
                "Mary Elizabeth Winstead",
                "Jurnee Smollett-Bell",
                "Rosie Perez",
                "Chris Messina",
                "Ella Jay Basco",
                "Ali Wong",
                "Ewan McGregor"
            ],
            genres: ["Superhero"],
            href: "Birds_of_Prey_(2020_film)",
            extract: "Birds of Prey is a 2020 American superhero film based on the DC Comics team.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg",
            thumbnail_width: 220,
            thumbnail_height: 326
        },
        {
            title: "The Lodge",
            year: 2020,
            cast: [
                "Riley Keough",
                "Jaeden Martell",
                "Lia McHugh",
                "Richard Armitage",
                "Alicia Silverstone"
            ],
            genres: ["Horror"],
            href: "The_Lodge_(film)",
            extract: "The Lodge is a 2019 psychological horror film directed by Veronika Franz and Severin Fiala.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/cf/The_Lodge_poster.jpg",
            thumbnail_width: 220,
            thumbnail_height: 326
        },
        {
            title: "Timmy Failure: Mistakes Were Made",
            year: 2020,
            cast: [
                "Winslow Fegley",
                "Ophelia Lovibond",
                "Craig Robinson",
                "Wallace Shawn"
            ],
            genres: [
                "Adventure",
                "Comedy",
                "Drama",
                "Family",
                "Fantasy"
            ],
            href: "Timmy_Failure:_Mistakes_Were_Made",
            extract: "Timmy Failure: Mistakes Were Made is a 2020 adventure fantasy comedy-drama family film.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/c8/Timmy_Failure_Mistakes_Were_Made_Poster.jpeg",
            thumbnail_width: 259,
            thumbnail_height: 383
        },
        {
            title: "Horse Girl",
            year: 2020,
            cast: [
                "Alison Brie",
                "Debby Ryan",
                "John Paul Reynolds",
                "Molly Shannon",
                "John Ortiz",
                "Paul Reiser"
            ],
            genres: ["Drama"],
            href: "Horse_Girl",
            extract: "Horse Girl is a 2020 American psychological drama film directed by Jeff Baena.",
            thumbnail: "https://upload.wikimedia.org/wikipedia/en/3/37/Horse_Girl_poster.jpg",
            thumbnail_width: 259,
            thumbnail_height: 383
        }
    ];


    return (
        <>
            <div className='flex flex-row bg-[#131722]'>
                <div className='flex flex-row flex-wrap items-center justify-center relative bg-[#131722] h-screen'>

                    <div className='grid grid-cols-6 h-full w-full items-center justify-center gap-10 z-10 relative pt-30 p-10'>
                        <div className='flex flex-col col-span-2'>
                            <h1 className='text-white text-4xl font-semibold'>Trending Movies to Watch Right Now</h1>
                            <p className='text-gray-400'>Most watched movies by days</p>
                        </div>
                        {TrindingMov.map((movie) => {
                            return (
                                <div className='flex flex-col gap-5 items-center justify-center w-56 h-60 p-2 rounded-lg'>
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
