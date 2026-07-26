import React from 'react'

export default function Hero() {
  const movies = [
    {
      title: "Underwater",
      year: 2020,
      cast: [
        "Kristen Stewart",
        "Vincent Cassel",
        "Jessica Henwick",
        "John Gallagher Jr.",
        "Mamoudou Athie",
        "T.J. Miller"
      ],
      genres: ["Action", "Horror", "Science Fiction"],
      href: "Underwater_(film)",
      extract: "Underwater is a 2020 American science fiction action horror film directed by William Eubank. The film stars Kristen Stewart, Vincent Cassel, Jessica Henwick, John Gallagher Jr., Mamoudou Athie, and T.J. Miller.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg",
      thumbnail_width: 250,
      thumbnail_height: 398
    },
    {
      title: "Like a Boss",
      year: 2020,
      cast: [
        "Tiffany Haddish",
        "Rose Byrne",
        "Salma Hayek",
        "Jennifer Coolidge",
        "Billy Porter"
      ],
      genres: ["Comedy"],
      href: "Like_a_Boss_(film)",
      extract: "Like a Boss is a 2020 American comedy film directed by Miguel Arteta, written by Sam Pitman and Adam Cole-Kelly, and starring Tiffany Haddish, Rose Byrne, and Salma Hayek. The plot follows two friends who attempt to take back control of their cosmetics company from an industry titan.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg",
      thumbnail_width: 259,
      thumbnail_height: 383
    },
    {
      title: "Three Christs",
      year: 2020,
      cast: [
        "Richard Gere",
        "Peter Dinklage",
        "Walton Goggins",
        "Bradley Whitford"
      ],
      genres: ["Drama"],
      href: "Three_Christs",
      extract: "Three Christs, also known as State of Mind, is a 2017 American drama film directed, co-produced, and co-written by Jon Avnet and based on Milton Rokeach's nonfiction book The Three Christs of Ypsilanti.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg",
      thumbnail_width: 259,
      thumbnail_height: 383
    },
    {
      title: "Inherit the Viper",
      year: 2020,
      cast: [
        "Josh Hartnett",
        "Margarita Levieva",
        "Chandler Riggs",
        "Bruce Dern",
        "Owen Teague"
      ],
      genres: ["Crime", "Drama"],
      href: "Inherit_the_Viper",
      extract: "Inherit the Viper is a 2019 American crime drama film directed by Anthony Jerjen.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg",
      thumbnail_width: 236,
      thumbnail_height: 350
    },
    {
      title: "The Sonata",
      year: 2020,
      cast: [
        "Freya Tingley",
        "Simon Abkarian",
        "Rutger Hauer",
        "James Faulkner"
      ],
      genres: ["Mystery", "Thriller"],
      href: "The_Sonata_(film)",
      extract: "The Sonata is a 2018 mystery thriller film, directed by Andrew Desmond.",
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg",
      thumbnail_width: 246,
      thumbnail_height: 350
    },
    {
    title: "The Murder of Nicole Brown Simpson",
    year: 2020,
    cast: [
      "Mena Suvari",
      "Nick Stahl",
      "Taryn Manning"
    ],
    genres: ["Crime", "Horror"],
    href: "The_Murder_of_Nicole_Brown_Simpson",
    extract: "The Murder of Nicole Brown Simpson is a 2019 American crime horror film directed by Daniel Farrands.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Murder_of_Nicole_Brown_Simpson_poster.jpg",
    thumbnail_width: 263,
    thumbnail_height: 380
  },
  {
    title: "Bad Boys for Life",
    year: 2020,
    cast: [
      "Will Smith",
      "Martin Lawrence",
      "Vanessa Hudgens",
      "Alexander Ludwig",
      "Charles Melton",
      "Paola Núñez",
      "Kate del Castillo",
      "Nicky Jam",
      "Joe Pantoliano"
    ],
    genres: ["Action", "Comedy"],
    href: "Bad_Boys_for_Life",
    extract: "Bad Boys for Life is a 2020 American buddy cop action comedy film.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
    thumbnail_width: 219,
    thumbnail_height: 325
  },
  {
    title: "Dolittle",
    year: 2020,
    cast: [
      "Robert Downey Jr.",
      "Antonio Banderas",
      "Michael Sheen",
      "Emma Thompson",
      "Rami Malek",
      "John Cena",
      "Kumail Nanjiani",
      "Octavia Spencer",
      "Tom Holland",
      "Craig Robinson",
      "Ralph Fiennes",
      "Selena Gomez",
      "Marion Cotillard"
    ],
    genres: ["Adventure", "Fantasy"],
    href: "Dolittle_(film)",
    extract: "Dolittle is a 2020 American fantasy adventure film directed by Stephen Gaghan.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png",
    thumbnail_width: 220,
    thumbnail_height: 326
  },
  {
    title: "A Fall from Grace",
    year: 2020,
    cast: [
      "Crystal R. Fox",
      "Phylicia Rashad",
      "Bresha Webb",
      "Mehcad Brooks",
      "Cicely Tyson",
      "Tyler Perry"
    ],
    genres: ["Thriller"],
    href: "A_Fall_from_Grace",
    extract: "A Fall from Grace is a 2020 American thriller film written and directed by Tyler Perry.",
    thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png",
    thumbnail_width: 259,
    thumbnail_height: 383
  }
];



  return (
    <>
      <div className='relative bg-gray-800 h-[89vh]'>
        <img src="./assets/images/hero.jpeg" className='absolute inset-0 z-10 h-full w-full'/>
        {/* <h1 className='text-4xl font-bold text-rose-100 text-center bg-gray-800'>OUR LATEST MOVIES</h1> */}
        
        <div className='flex flex-row h-full w-full items-center justify-center gap-0.5 z-10 relative pt-90'>
          {movies.map((movie) => {
            return (
              <div className='flex flex-col gap-5 items-center justify-center w-40 h-60 p-2 rounded-lg'>
                <img src={movie.thumbnail} className='w-40 h-60' />
                <div>
                  {/* <p className='text-gray-400'>{movie.title}</p> */}
                </div>
              </div>
            )
          }
          )}
        </div>
      </div>
    </>
  )
}
