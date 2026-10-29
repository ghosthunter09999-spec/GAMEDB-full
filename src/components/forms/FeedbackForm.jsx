import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { feedbackAxiosFunction } from '../../Services/FormApi'

const schema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  category: z.enum(['ui', 'feature', 'performance', 'content', 'other'], {
    errorMap: () => ({ message: 'Please select a category' }),
  }),
  rating: z
    .number({ invalid_type_error: 'Please rate your experience' })
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  feedback: z
    .string()
    .min(1, 'Feedback is required')
    .min(20, 'Feedback must be at least 20 characters')
    .max(2000, 'Feedback must be at most 2000 characters'),
})

function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      category: '',
      rating: undefined,
      feedback: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      await feedbackAxiosFunction(data)
      alert('Thank you for your feedback!')
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
          <div className="col-md-8 col-lg-6">
            <div className="card form-card shadow">
              <div className="card-header text-center py-3">
                <h3 className="text-warning mb-0">Send Feedback</h3>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="row mb-3">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
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
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="category" className="form-label">Category</label>
                      <select
                        id="category"
                        className={`form-select ${errors.category ? 'is-invalid' : ''}`}
                        {...register('category')}
                      >
                        <option value="">Select category</option>
                        <option value="ui">UI / Design</option>
                        <option value="feature">Feature Request</option>
                        <option value="performance">Performance</option>
                        <option value="content">Content</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.category && (
                        <div className="invalid-feedback">{errors.category.message}</div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="rating" className="form-label">Experience (1–5)</label>
                      <input
                        type="number"
                        id="rating"
                        min={1}
                        max={5}
                        className={`form-control ${errors.rating ? 'is-invalid' : ''}`}
                        placeholder="5"
                        {...register('rating', { valueAsNumber: true })}
                      />
                      {errors.rating && (
                        <div className="invalid-feedback">{errors.rating.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="feedback" className="form-label">Your Feedback</label>
                    <textarea
                      id="feedback"
                      rows={5}
                      className={`form-control ${errors.feedback ? 'is-invalid' : ''}`}
                      placeholder="Tell us what you think..."
                      {...register('feedback')}
                    />
                    {errors.feedback && (
                      <div className="invalid-feedback">{errors.feedback.message}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Feedback'}
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

export default FeedbackForm
