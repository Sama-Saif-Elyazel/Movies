import React from 'react'

export default function Hero() {
  const movies = [
    {
      title: "Underwater",
      year: 2020,
      cast: ["Kristen Stewart", "Vincent Cassel", "Jessica Henwick"],
      genres: ["Action", "Horror", "Science Fiction"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4a/Underwater_poster.jpeg",
    },
    {
      title: "Like a Boss",
      year: 2020,
      cast: ["Tiffany Haddish", "Rose Byrne", "Salma Hayek"],
      genres: ["Comedy"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/9a/LikeaBossPoster.jpg",
    },
    {
      title: "Three Christs",
      year: 2020,
      cast: ["Richard Gere", "Peter Dinklage"],
      genres: ["Drama"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/a/a1/Three_Christs_poster.jpg",
    },
    {
      title: "Inherit the Viper",
      year: 2020,
      cast: ["Josh Hartnett", "Margarita Levieva"],
      genres: ["Crime", "Drama"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1c/Inherit_the_Viper_%282019%29_Film_Poster.jpg",
    },
    {
      title: "The Sonata",
      year: 2020,
      cast: ["Freya Tingley", "Simon Abkarian"],
      genres: ["Mystery", "Thriller"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Sonata_%282018%29_Film_Poster.jpg",
    },
    {
      title: "The Murder of Nicole Brown Simpson",
      year: 2020,
      cast: ["Mena Suvari", "Nick Stahl"],
      genres: ["Crime", "Horror"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Murder_of_Nicole_Brown_Simpson_poster.jpg",
    },
    {
      title: "Bad Boys for Life",
      year: 2020,
      cast: ["Will Smith", "Martin Lawrence"],
      genres: ["Action", "Comedy"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/90/Bad_Boys_for_Life_poster.jpg",
    },
    {
      title: "Dolittle",
      year: 2020,
      cast: ["Robert Downey Jr.", "Antonio Banderas"],
      genres: ["Adventure", "Fantasy"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1f/Dolittle_%282020_film_poster%29.png",
    },
    {
      title: "A Fall from Grace",
      year: 2020,
      cast: ["Crystal R. Fox", "Phylicia Rashad"],
      genres: ["Thriller"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4e/AFallFromGrace.png",
    }
  ];

  const featuredActor = {
    name: "Kristen Stewart",
    role: "Lead Actress in Underwater (2020)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Kristen_Stewart_at_the_2019_Toronto_International_Film_Festival_1_%28cropped%29.jpg/800px-Kristen_Stewart_at_the_2019_Toronto_International_Film_Festival_1_%28cropped%29.jpg",
    bio: "American actress best known for her roles in independent films and blockbusters including Underwater, Twilight, and Spencer."
  };

  return (
    <div className='relative min-h-screen bg-gray-900 py-8 px-4 sm:px-8'>
      <div className='max-w-7xl mx-auto flex flex-col gap-12'>
        
        <div className='flex flex-col md:flex-row items-center gap-6 bg-gray-800/90 p-6 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden'>
          <div className='w-full md:w-1/3 max-w-[280px] aspect-[3/4] overflow-hidden rounded-xl shadow-md'>
            <img 
              src="./assets/images/heroo.jpeg"
              alt={featuredActor.name} 
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
            />
          </div>
          <div className='w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left gap-3'>
            <span className='bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/20'>
              Featured Actor
            </span>
            <h1 className='text-3xl sm:text-5xl font-extrabold text-white'>
              {featuredActor.name}
            </h1>
            <p className='text-cyan-300 text-sm sm:text-base font-medium'>
              {featuredActor.role}
            </p>
            <p className='text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed'>
              {featuredActor.bio}
            </p>
          </div>
        </div>

        <div>
          <h2 className='text-xl sm:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-400 pl-3'>
            Our Latest Movies
          </h2>

          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6'>
            {movies.map((movie, index) => (
              <div 
                key={index} 
                className='group flex flex-col items-center bg-gray-800/60 p-3 rounded-xl hover:scale-105 hover:bg-gray-800 transition-all duration-300 border border-gray-700/50 shadow-md'
              >
                <div className='w-full aspect-[2/3] overflow-hidden rounded-lg mb-3'>
                  <img 
                    src={movie.thumbnail} 
                    alt={movie.title} 
                    className='w-full h-full object-cover group-hover:opacity-90 transition-opacity'
                  />
                </div>
                <h3 className='text-white font-semibold text-sm sm:text-base text-center line-clamp-1 w-full'>
                  {movie.title}
                </h3>
                <p className='text-gray-400 text-xs mt-1'>{movie.year}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}