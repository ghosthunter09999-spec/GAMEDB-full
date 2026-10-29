import { Link } from 'react-router-dom'

// Sample data for the landing page
const featuredReviews = [
  {
    id: 1,
    title: 'Elden Ring: Shadow of the Erdtree',
    genre: 'Action RPG',
    rating: 9.5,
    excerpt: 'FromSoftware delivers another masterpiece. The expansion expands the Lands Between with breathtaking new areas and challenging bosses.',
    author: 'Alex Chen',
  },
  {
    id: 2,
    title: 'Black Myth: Wukong',
    genre: 'Action Adventure',
    rating: 9.2,
    excerpt: 'A stunning adaptation of Journey to the West. Fluid combat, gorgeous visuals, and a rich mythology make this a must-play.',
    author: 'Sarah Kim',
  },
  {
    id: 3,
    title: 'Astro Bot',
    genre: 'Platformer',
    rating: 9.4,
    excerpt: 'Pure platforming joy. Creative levels, charming characters, and endless surprises — a love letter to PlayStation history.',
    author: 'Marcus Lee',
  },
]

const latestNews = [
  {
    id: 1,
    title: 'GTA VI Trailer 2 Confirmed for December',
    date: 'Oct 18, 2026',
    summary: 'Rockstar Games has officially confirmed the second trailer will drop next month.',
  },
  {
    id: 2,
    title: 'Nintendo Switch 2 Launch Window Leaked',
    date: 'Oct 17, 2026',
    summary: 'Industry sources point to a March 2027 release with backward compatibility confirmed.',
  },
  {
    id: 3,
    title: 'The Last of Us Part III in Early Development',
    date: 'Oct 16, 2026',
    summary: 'Naughty Dog is reportedly exploring a new chapter focusing on Abby and Lev.',
  },
  {
    id: 4,
    title: 'Steam Deck OLED 2 Announced',
    date: 'Oct 15, 2026',
    summary: 'Valve unveils an upgraded handheld with brighter display and longer battery life.',
  },
]

const topRated = [
  { rank: 1, title: 'The Legend of Zelda: Tears of the Kingdom', score: 9.7, year: 2023 },
  { rank: 2, title: 'Elden Ring', score: 9.6, year: 2022 },
  { rank: 3, title: 'Baldur\'s Gate 3', score: 9.6, year: 2023 },
  { rank: 4, title: 'Red Dead Redemption 2', score: 9.5, year: 2018 },
  { rank: 5, title: 'The Witcher 3: Wild Hunt', score: 9.5, year: 2015 },
  { rank: 6, title: 'God of War Ragnarök', score: 9.4, year: 2022 },
  { rank: 7, title: 'Hades II', score: 9.4, year: 2025 },
  { rank: 8, title: 'Celeste', score: 9.3, year: 2018 },
]

const upcoming = [
  { title: 'Grand Theft Auto VI', platform: 'PS5 / Xbox', date: 'Fall 2026' },
  { title: 'Death Stranding 2', platform: 'PS5', date: '2026' },
  { title: 'Metroid Prime 4', platform: 'Switch', date: '2026' },
  { title: 'Fable', platform: 'Xbox / PC', date: '2026' },
  { title: 'Perfect Dark', platform: 'Xbox / PC', date: '2027' },
  { title: 'The Elder Scrolls VI', platform: 'Xbox / PC', date: 'TBA' },
]

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center text-white">
        <div className="container">
          <h1 className="display-3 mb-3">
            Discover. Review. <span className="text-warning">Play.</span>
          </h1>
          <p className="lead mb-4 col-lg-8 mx-auto">
            Your ultimate source for gaming reviews &amp; news — like IMDb for games
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link to="/search" className="btn btn-warning btn-lg px-4">
              Search Games
            </Link>
            <Link to="/review" className="btn btn-outline-warning btn-lg px-4">
              Write a Review
            </Link>
            <Link to="/premium" className="btn btn-outline-light btn-lg px-4">
              Go Premium
            </Link>
          </div>
        </div>
      </section>

      <div className="container py-5">
        {/* Featured Reviews */}
        <section className="mb-5">
          <h2 className="section-title text-white">Featured Reviews</h2>
          <div className="row g-4">
            {featuredReviews.map((game) => (
              <div className="col-md-4" key={game.id}>
                <div className="card game-card h-100 shadow">
                  <div
                    className="card-img-top d-flex align-items-center justify-content-center text-warning"
                    style={{ fontSize: '3rem' }}
                  >
                    🎮
                  </div>
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title text-white mb-0">{game.title}</h5>
                      <span className="badge rating-badge">{game.rating}</span>
                    </div>
                    <p className="text-muted small mb-2">{game.genre}</p>
                    <p className="card-text text-secondary flex-grow-1">{game.excerpt}</p>
                    <p className="text-warning small mb-0">— {game.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest News + Top Rated side by side */}
        <div className="row g-4 mb-5">
          {/* Latest News */}
          <div className="col-lg-5">
            <h2 className="section-title text-white">Latest News</h2>
            {latestNews.map((item) => (
              <div className="news-item" key={item.id}>
                <small className="text-warning">{item.date}</small>
                <h6 className="text-white mb-1">{item.title}</h6>
                <p className="text-secondary small mb-0">{item.summary}</p>
              </div>
            ))}
            <Link to="/newsletter" className="btn btn-outline-warning btn-sm mt-2">
              Subscribe to Newsletter
            </Link>
          </div>

          {/* Top Rated Games Table */}
          <div className="col-lg-7">
            <h2 className="section-title text-white">Top Rated Games</h2>
            <div className="table-responsive">
              <table className="table table-dark table-hover align-middle">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Year</th>
                    <th scope="col">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {topRated.map((game) => (
                    <tr key={game.rank}>
                      <td className="text-warning fw-bold">{game.rank}</td>
                      <td>{game.title}</td>
                      <td className="text-secondary">{game.year}</td>
                      <td>
                        <span className="badge rating-badge">{game.score}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upcoming Releases */}
        <section className="mb-4">
          <h2 className="section-title text-white">Upcoming Releases</h2>
          <div className="row g-3">
            {upcoming.map((game, idx) => (
              <div className="col-sm-6 col-lg-4" key={idx}>
                <div className="card game-card shadow-sm">
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-white mb-1">{game.title}</h6>
                      <small className="text-secondary">{game.platform}</small>
                    </div>
                    <span className="badge bg-warning text-dark">{game.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-4">
          <div className="card form-card shadow p-4">
            <h3 className="text-warning mb-2">Join the GameDB Community</h3>
            <p className="text-secondary mb-3">
              Rate games, write reviews, and stay updated with the latest gaming news.
            </p>
            <div className="d-flex gap-2 justify-content-center flex-wrap">
              <Link to="/signup" className="btn btn-warning">
                Create Free Account
              </Link>
              <Link to="/feedback" className="btn btn-outline-warning">
                Send Feedback
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
