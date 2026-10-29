import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { reviewAxiosFunction } from '../../Services/FormApi'

const schema = z.object({
  gameTitle: z.string().min(1, 'Game title is required').min(2, 'Title must be at least 2 characters'),
  rating: z
    .number({ invalid_type_error: 'Rating is required' })
    .min(1, 'Rating must be at least 1')
    .max(10, 'Rating must be at most 10'),
  title: z.string().min(1, 'Review title is required').min(5, 'Title must be at least 5 characters'),
  review: z
    .string()
    .min(1, 'Review is required')
    .min(50, 'Review must be at least 50 characters')
    .max(5000, 'Review must be at most 5000 characters'),
  spoilers: z.boolean().optional(),
  platform: z.enum(['PC', 'PlayStation', 'Xbox', 'Nintendo Switch', 'Mobile', 'Other'], {
    errorMap: () => ({ message: 'Please select a platform' }),
  }),
})

function ReviewForm() {
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
      title: '',
      review: '',
      spoilers: false,
      platform: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      await reviewAxiosFunction(data)
      alert('Review submitted successfully!')
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
                <h3 className="text-warning mb-0">Write a Review</h3>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <label htmlFor="gameTitle" className="form-label">Game Title</label>
                    <input
                      type="text"
                      id="gameTitle"
                      className={`form-control ${errors.gameTitle ? 'is-invalid' : ''}`}
                      placeholder="e.g. Elden Ring"
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
                        step={0.1}
                        className={`form-control ${errors.rating ? 'is-invalid' : ''}`}
                        placeholder="9.5"
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

                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Review Title</label>
                    <input
                      type="text"
                      id="title"
                      className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                      placeholder="A short headline for your review"
                      {...register('title')}
                    />
                    {errors.title && (
                      <div className="invalid-feedback">{errors.title.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="review" className="form-label">Your Review</label>
                    <textarea
                      id="review"
                      rows={6}
                      className={`form-control ${errors.review ? 'is-invalid' : ''}`}
                      placeholder="Share your thoughts (min. 50 characters)..."
                      {...register('review')}
                    />
                    {errors.review && (
                      <div className="invalid-feedback">{errors.review.message}</div>
                    )}
                  </div>

                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="spoilers"
                      {...register('spoilers')}
                    />
                    <label className="form-check-label text-secondary" htmlFor="spoilers">
                      This review contains spoilers
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
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

export default ReviewForm
