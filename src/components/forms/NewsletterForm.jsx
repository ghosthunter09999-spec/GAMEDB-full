import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { newsletterAxiosFunction } from '../../Services/FormApi'

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  frequency: z.enum(['daily', 'weekly', 'monthly'], {
    errorMap: () => ({ message: 'Please select a frequency' }),
  }),
  genres: z.array(z.string()).min(1, 'Select at least one genre'),
})

function NewsletterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      name: '',
      frequency: '',
      genres: [],
    },
  })

  const onSubmit = async (data) => {
    try {
      await newsletterAxiosFunction(data)
      alert('Subscribed successfully!')
      reset()
    } catch (error) {
      console.error(error)
      alert('Error saving data. Backend chal raha hai?')
    }
  }

  return (
    <div className="form-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card form-card shadow">
              <div className="card-header text-center py-3">
                <h3 className="text-warning mb-0">Newsletter Signup</h3>
              </div>
              <div className="card-body p-4">
                <p className="text-secondary text-center mb-4">
                  Get the latest gaming news, reviews, and exclusive deals delivered to your inbox.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      id="name"
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                      placeholder="Your name"
                      {...register('name')}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      id="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="you@example.com"
                      {...register('email')}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="frequency" className="form-label">Frequency</label>
                    <select
                      id="frequency"
                      className={`form-select ${errors.frequency ? 'is-invalid' : ''}`}
                      {...register('frequency')}
                    >
                      <option value="">Select frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                    {errors.frequency && (
                      <div className="invalid-feedback">{errors.frequency.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Preferred Genres</label>
                    <div className="d-flex flex-wrap gap-3">
                      {['Action', 'RPG', 'Strategy', 'Indie', 'Sports'].map((genre) => (
                        <div className="form-check" key={genre}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`genre-${genre}`}
                            value={genre}
                            {...register('genres')}
                          />
                          <label className="form-check-label text-secondary" htmlFor={`genre-${genre}`}>
                            {genre}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.genres && (
                      <div className="invalid-feedback d-block">{errors.genres.message}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm
