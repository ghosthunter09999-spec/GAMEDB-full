import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { suggestGameAxiosFunction } from '../../Services/FormApi'

const schema = z.object({
  gameTitle: z.string().min(1, 'Game title is required').min(2, 'Title must be at least 2 characters'),
  developer: z.string().min(1, 'Developer is required'),
  releaseYear: z
    .number({ invalid_type_error: 'Release year is required' })
    .min(1970, 'Year must be 1970 or later')
    .max(2035, 'Year must be 2035 or earlier'),
  genre: z.enum(['Action', 'RPG', 'Strategy', 'Adventure', 'Sports', 'Indie', 'Horror', 'Other'], {
    errorMap: () => ({ message: 'Please select a genre' }),
  }),
  platforms: z.array(z.string()).min(1, 'Select at least one platform'),
  reason: z
    .string()
    .min(1, 'Reason is required')
    .min(20, 'Please provide at least 20 characters explaining why')
    .max(1000, 'Reason must be at most 1000 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
})

function SuggestGameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      gameTitle: '',
      developer: '',
      releaseYear: undefined,
      genre: '',
      platforms: [],
      reason: '',
      email: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      await suggestGameAxiosFunction(data)
      alert('Game suggestion submitted!')
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
          <div className="col-md-8 col-lg-7">
            <div className="card form-card shadow">
              <div className="card-header text-center py-3">
                <h3 className="text-warning mb-0">Suggest a Game</h3>
              </div>
              <div className="card-body p-4">
                <p className="text-secondary text-center mb-4">
                  Missing a game from our database? Let us know!
                </p>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <label htmlFor="gameTitle" className="form-label">Game Title</label>
                    <input
                      type="text"
                      id="gameTitle"
                      className={`form-control ${errors.gameTitle ? 'is-invalid' : ''}`}
                      placeholder="e.g. Hollow Knight: Silksong"
                      {...register('gameTitle')}
                    />
                    {errors.gameTitle && (
                      <div className="invalid-feedback">{errors.gameTitle.message}</div>
                    )}
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="developer" className="form-label">Developer</label>
                      <input
                        type="text"
                        id="developer"
                        className={`form-control ${errors.developer ? 'is-invalid' : ''}`}
                        placeholder="Studio name"
                        {...register('developer')}
                      />
                      {errors.developer && (
                        <div className="invalid-feedback">{errors.developer.message}</div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="releaseYear" className="form-label">Release Year</label>
                      <input
                        type="number"
                        id="releaseYear"
                        className={`form-control ${errors.releaseYear ? 'is-invalid' : ''}`}
                        placeholder="2025"
                        {...register('releaseYear', { valueAsNumber: true })}
                      />
                      {errors.releaseYear && (
                        <div className="invalid-feedback">{errors.releaseYear.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="genre" className="form-label">Genre</label>
                    <select
                      id="genre"
                      className={`form-select ${errors.genre ? 'is-invalid' : ''}`}
                      {...register('genre')}
                    >
                      <option value="">Select genre</option>
                      <option value="Action">Action</option>
                      <option value="RPG">RPG</option>
                      <option value="Strategy">Strategy</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Sports">Sports</option>
                      <option value="Indie">Indie</option>
                      <option value="Horror">Horror</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.genre && (
                      <div className="invalid-feedback">{errors.genre.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Platforms</label>
                    <div className="d-flex flex-wrap gap-3">
                      {['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile'].map((p) => (
                        <div className="form-check" key={p}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`platform-${p}`}
                            value={p}
                            {...register('platforms')}
                          />
                          <label className="form-check-label text-secondary" htmlFor={`platform-${p}`}>
                            {p}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.platforms && (
                      <div className="invalid-feedback d-block">{errors.platforms.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="reason" className="form-label">Why should we add it?</label>
                    <textarea
                      id="reason"
                      rows={4}
                      className={`form-control ${errors.reason ? 'is-invalid' : ''}`}
                      placeholder="Tell us why this game belongs on GameDB..."
                      {...register('reason')}
                    />
                    {errors.reason && (
                      <div className="invalid-feedback">{errors.reason.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Your Email</label>
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

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Suggestion'}
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

export default SuggestGameForm
