import React from 'react'

export default function Tvs() {
  const TVs = [
    {
      title: "To All the Boys: P.S. I Still Love You",
      year: 2020,
      genres: ["Comedy", "Teen", "Romance"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/b/bc/To_All_the_Boys_-_P.S._I_Still_Love_You_official_release_poster.jpg"
    },
    {
      title: "Sonic the Hedgehog",
      year: 2020,
      genres: ["Action", "Adventure"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/45/Sonic_the_Hedgehog_film_poster.jpg"
    },
    {
      title: "Fantasy Island",
      year: 2020,
      genres: ["Horror", "Supernatural"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/7/7e/Fantasy_Island_poster.jpg"
    },
    {
      title: "The Photograph",
      year: 2020,
      genres: ["Drama", "Romance"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/c4/The_Photograph_poster.jpg"
    },
    {
      title: "Downhill",
      year: 2020,
      genres: ["Comedy", "Drama"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/6a/Downhill_poster.jpeg"
    },
    {
      title: "Spy Intervention",
      year: 2020,
      genres: ["Action", "Comedy"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/c/cf/Spy_Intervention_%282020%29_Film_Poster.jpg"
    },
    {
      title: "The Kindness of Strangers",
      year: 2020,
      genres: ["Drama"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/8/8d/The_Kindness_of_Strangers_poster.jpg"
    },
    {
      title: "The Call of the Wild",
      year: 2020,
      genres: ["Adventure"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/43/The_Call_of_the_Wild_poster.jpg"
    },
    {
      title: "Emma",
      year: 2020,
      genres: ["Comedy", "Romance"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/53/Emma_poster.jpeg"
    },
    {
      title: "The Last Thing He Wanted",
      year: 2020,
      genres: ["Political", "Thriller"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/4/4e/The_Last_Thing_He_Wanted.jpg"
    },
    {
      title: "Brahms: The Boy II",
      year: 2020,
      genres: ["Horror"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/5/51/Brahms_The_Boy_Poster.jpg"
    },
    {
      title: "The Night Clerk",
      year: 2020,
      genres: ["Crime", "Drama"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/9/9f/The_Night_Clerk_poster.jpeg"
    },
    {
      title: "Impractical Jokers: The Movie",
      year: 2020,
      genres: ["Comedy"],
      thumbnail: "https://upload.wikimedia.org/wikipedia/en/6/6a/Impractical_Jokers_The_Movie_poster.png"
    }
  ];

  return (
    <section className='bg-[#131722] py-12 px-4 sm:px-8 min-h-screen text-white border-t border-gray-800'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-start'>
        
        {/* العنوان الجانبي */}
        <div className='col-span-2 flex flex-col justify-center gap-3 border-l-4 border-cyan-400 pl-4 my-auto py-4'>
          <h2 className='text-2xl sm:text-4xl font-bold leading-tight'>
            Trending TV Shows <br className='hidden sm:block' /> To Watch Right Now
          </h2>
          <p className='text-gray-400 text-sm sm:text-base'>
            Most watched shows by days
          </p>
        </div>

        {/* كروت المسلسلات */}
        {TVs.map((show, index) => (
          <div 
            key={index} 
            className='group flex flex-col items-center bg-gray-800/40 p-2.5 rounded-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 border border-gray-700/40'
          >
            <div className='w-full aspect-[2/3] overflow-hidden rounded-lg mb-2'>
              <img 
                src={show.thumbnail} 
                alt={show.title}
                className='w-full h-full object-cover group-hover:opacity-90 transition-opacity'
              />
            </div>
            <h3 className='text-gray-200 text-sm font-semibold text-center line-clamp-1 w-full group-hover:text-cyan-400 transition-colors'>
              {show.title}
            </h3>
            <span className='text-gray-400 text-xs mt-1'>{show.year}</span>
          </div>
        ))}

      </div>
    </section>
  )
}