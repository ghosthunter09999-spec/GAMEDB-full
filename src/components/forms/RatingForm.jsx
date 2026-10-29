import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ratingAxiosFunction } from '../../Services/FormApi'

const schema = z.object({
  gameTitle: z.string().min(1, 'Game title is required').min(2, 'Title must be at least 2 characters'),
  rating: z
    .number({ invalid_type_error: 'Rating is required' })
    .min(1, 'Rating must be at least 1')
    .max(10, 'Rating must be at most 10'),
  platform: z.enum(['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile', 'Other'], {
    errorMap: () => ({ message: 'Please select a platform' }),
  }),
  hoursPlayed: z
    .number({ invalid_type_error: 'Must be a number' })
    .min(0, 'Hours cannot be negative')
    .max(10000, 'Please enter a realistic number')
    .optional()
    .or(z.nan().transform(() => undefined)),
  recommend: z.enum(['yes', 'no', 'maybe'], {
    errorMap: () => ({ message: 'Please select a recommendation' }),
  }),
  notes: z.string().max(500, 'Notes must be at most 500 characters').optional(),
})

function RatingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      gameTitle: '',
      rating: undefined,
      platform: '',
      hoursPlayed: undefined,
      recommend: '',
      notes: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      await ratingAxiosFunction(data)
      alert('Rating submitted successfully!')
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
          <div className="col-md-7 col-lg-6">
            <div className="card form-card shadow">
              <div className="card-header text-center py-3">
                <h3 className="text-warning mb-0">Rate a Game</h3>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <label htmlFor="gameTitle" className="form-label">Game Title</label>
                    <input
                      type="text"
                      id="gameTitle"
                      className={`form-control ${errors.gameTitle ? 'is-invalid' : ''}`}
                      placeholder="e.g. Baldur's Gate 3"
                      {...register('gameTitle')}
                    />
                    {errors.gameTitle && (
                      <div className="invalid-feedback">{errors.gameTitle.message}</div>
                    )}
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="rating" className="form-label">Rating (1–10)</label>
                      <input
                        type="number"
                        id="rating"
                        min={1}
                        max={10}
                        step={0.5}
                        className={`form-control ${errors.rating ? 'is-invalid' : ''}`}
                        placeholder="8.5"
                        {...register('rating', { valueAsNumber: true })}
                      />
                      {errors.rating && (
                        <div className="invalid-feedback">{errors.rating.message}</div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="platform" className="form-label">Platform</label>
                      <select
                        id="platform"
                        className={`form-select ${errors.platform ? 'is-invalid' : ''}`}
                        {...register('platform')}
                      >
                        <option value="">Select platform</option>
                        <option value="PC">PC</option>
                        <option value="PlayStation">PlayStation</option>
                        <option value="Xbox">Xbox</option>
                        <option value="Nintendo Switch">Nintendo Switch</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.platform && (
                        <div className="invalid-feedback">{errors.platform.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="hoursPlayed" className="form-label">Hours Played (optional)</label>
                      <input
                        type="number"
                        id="hoursPlayed"
                        min={0}
                        className={`form-control ${errors.hoursPlayed ? 'is-invalid' : ''}`}
                        placeholder="50"
                        {...register('hoursPlayed', { valueAsNumber: true })}
                      />
                      {errors.hoursPlayed && (
                        <div className="invalid-feedback">{errors.hoursPlayed.message}</div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="recommend" className="form-label">Would you recommend?</label>
                      <select
                        id="recommend"
                        className={`form-select ${errors.recommend ? 'is-invalid' : ''}`}
                        {...register('recommend')}
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="maybe">Maybe</option>
                      </select>
                      {errors.recommend && (
                        <div className="invalid-feedback">{errors.recommend.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="notes" className="form-label">Quick Notes (optional)</label>
                    <textarea
                      id="notes"
                      rows={3}
                      className={`form-control ${errors.notes ? 'is-invalid' : ''}`}
                      placeholder="Any short thoughts..."
                      {...register('notes')}
                    />
                    {errors.notes && (
                      <div className="invalid-feedback">{errors.notes.message}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Rating'}
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

export default RatingForm
