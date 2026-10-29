import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { reportBugAxiosFunction } from '../../Services/FormApi'

const schema = z.object({
  title: z.string().min(1, 'Title is required').min(5, 'Title must be at least 5 characters'),
  severity: z.enum(['low', 'medium', 'high', 'critical'], {
    errorMap: () => ({ message: 'Please select severity' }),
  }),
  page: z.string().min(1, 'Page / URL is required'),
  description: z
    .string()
    .min(1, 'Description is required')
    .min(30, 'Please describe the bug in at least 30 characters')
    .max(3000, 'Description must be at most 3000 characters'),
  steps: z.string().min(1, 'Steps to reproduce are required').min(20, 'Please provide clear steps'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  browser: z.string().optional(),
})

function ReportBugForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: '',
      severity: '',
      page: '',
      description: '',
      steps: '',
      email: '',
      browser: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      await reportBugAxiosFunction(data)
      alert('Bug report submitted! Thank you.')
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
                <h3 className="text-warning mb-0">Report a Bug</h3>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Bug Title</label>
                    <input
                      type="text"
                      id="title"
                      className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                      placeholder="Short summary of the issue"
                      {...register('title')}
                    />
                    {errors.title && (
                      <div className="invalid-feedback">{errors.title.message}</div>
                    )}
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="severity" className="form-label">Severity</label>
                      <select
                        id="severity"
                        className={`form-select ${errors.severity ? 'is-invalid' : ''}`}
                        {...register('severity')}
                      >
                        <option value="">Select severity</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                      </select>
                      {errors.severity && (
                        <div className="invalid-feedback">{errors.severity.message}</div>
                      )}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="page" className="form-label">Page / URL</label>
                      <input
                        type="text"
                        id="page"
                        className={`form-control ${errors.page ? 'is-invalid' : ''}`}
                        placeholder="/review or full URL"
                        {...register('page')}
                      />
                      {errors.page && (
                        <div className="invalid-feedback">{errors.page.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      id="description"
                      rows={4}
                      className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                      placeholder="What went wrong?"
                      {...register('description')}
                    />
                    {errors.description && (
                      <div className="invalid-feedback">{errors.description.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="steps" className="form-label">Steps to Reproduce</label>
                    <textarea
                      id="steps"
                      rows={4}
                      className={`form-control ${errors.steps ? 'is-invalid' : ''}`}
                      placeholder="1. Go to...&#10;2. Click on...&#10;3. See error..."
                      {...register('steps')}
                    />
                    {errors.steps && (
                      <div className="invalid-feedback">{errors.steps.message}</div>
                    )}
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
                      <label htmlFor="browser" className="form-label">Browser (optional)</label>
                      <input
                        type="text"
                        id="browser"
                        className="form-control"
                        placeholder="Chrome 130, Firefox 132..."
                        {...register('browser')}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Bug Report'}
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

export default ReportBugForm
