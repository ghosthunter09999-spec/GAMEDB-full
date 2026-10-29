import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import LoginForm from './components/forms/LoginForm'
import SignupForm from './components/forms/SignupForm'
import ContactForm from './components/forms/ContactForm'
import NewsletterForm from './components/forms/NewsletterForm'
import ReviewForm from './components/forms/ReviewForm'
import SearchForm from './components/forms/SearchForm'
import FeedbackForm from './components/forms/FeedbackForm'
import SuggestGameForm from './components/forms/SuggestGameForm'
import ReportBugForm from './components/forms/ReportBugForm'
import CommentForm from './components/forms/CommentForm'
import RatingForm from './components/forms/RatingForm'
import PremiumForm from './components/forms/PremiumForm'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/newsletter" element={<NewsletterForm />} />
          <Route path="/review" element={<ReviewForm />} />
          <Route path="/search" element={<SearchForm />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/suggest-game" element={<SuggestGameForm />} />
          <Route path="/report-bug" element={<ReportBugForm />} />
          <Route path="/comment" element={<CommentForm />} />
          <Route path="/rating" element={<RatingForm />} />
          <Route path="/premium" element={<PremiumForm />} />
        </Routes>
      </main>
      <footer className="footer text-center text-muted">
        <div className="container">
          <p className="mb-1">
            <strong className="text-warning">GameDB</strong> — Your ultimate source for gaming reviews &amp; news
          </p>
          <p className="mb-0 small">
            &copy; {new Date().getFullYear()} GameDB. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
