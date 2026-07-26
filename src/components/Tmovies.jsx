import React from 'react'

export default function Tmovies() {
  const TrindingMov = [
    {
      title: "John Henry",
      year: 2020,
      cast: ["Terry Crews", "Ludacris"],
      genres: ["Drama", "Thriller"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/b8/JohnHenryPoster.jpeg"
    },
    {
      title: "The Rhythm Section",
      year: 2020,
      cast: ["Blake Lively", "Jude Law"],
      genres: ["Action", "Thriller"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/98/The_Rhythm_Section_poster.jpg"
    },
    {
      title: "Gretel & Hansel",
      year: 2020,
      cast: ["Sophia Lillis", "Sammy Leakey"],
      genres: ["Fantasy", "Horror"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/d/de/Gretel_%26_Hansel_-_A_Grim_Fairy_Tale_theatrical_poster.jpeg"
    },
    {
      title: "The Assistant",
      year: 2020,
      cast: ["Julia Garner", "Matthew Macfadyen"],
      genres: ["Drama"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/9b/The_Assistant_poster.jpeg"
    },
    {
      title: "Birds of Prey",
      year: 2020,
      cast: ["Margot Robbie", "Ewan McGregor"],
      genres: ["Superhero"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/1/1c/Birds_of_Prey_%282020_film%29_poster.jpg"
    },
    {
      title: "The Lodge",
      year: 2020,
      cast: ["Riley Keough", "Jaeden Martell"],
      genres: ["Horror"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/cf/The_Lodge_poster.jpg"
    },
    {
      title: "Timmy Failure: Mistakes Were Made",
      year: 2020,
      cast: ["Winslow Fegley", "Ophelia Lovibond"],
      genres: ["Adventure", "Comedy"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/c8/Timmy_Failure_Mistakes_Were_Made_Poster.jpeg"
    },
    {
      title: "Horse Girl",
      year: 2020,
      cast: ["Alison Brie", "Debby Ryan"],
      genres: ["Drama"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/3/37/Horse_Girl_poster.jpg"
    }
  ];

  return (
    <section className='bg-[#131722] py-12 px-4 sm:px-8 min-h-screen text-white'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-start'>
        
        {/* العنوان الجانبي (بياخد مساحة أكبر في الشاشات العادية ويطلع لفوق في الموبايل) */}
        <div className='col-span-2 flex flex-col justify-center gap-3 border-l-4 border-cyan-400 pl-4 my-auto py-4'>
          <h2 className='text-2xl sm:text-4xl font-bold leading-tight'>
            Trending Movies <br className='hidden sm:block' /> To Watch Right Now
          </h2>
          <p className='text-gray-400 text-sm sm:text-base'>
            Most watched movies by days
          </p>
        </div>

        {/* كروت الأفلام */}
        {TrindingMov.map((movie, index) => (
          <div 
            key={index} 
            className='group flex flex-col items-center bg-gray-800/40 p-2.5 rounded-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 border border-gray-700/40'
          >
            <div className='w-full aspect-[2/3] overflow-hidden rounded-lg mb-2'>
              <img 
                src={movie.thumbnail} 
                alt={movie.title}
                className='w-full h-full object-cover group-hover:opacity-90 transition-opacity'
              />
            </div>
            <h3 className='text-gray-200 text-sm font-semibold text-center line-clamp-1 w-full group-hover:text-cyan-400 transition-colors'>
              {movie.title}
            </h3>
            <span className='text-gray-400 text-xs mt-1'>{movie.year}</span>
          </div>
        ))}

      </div>
    </section>
  )
}