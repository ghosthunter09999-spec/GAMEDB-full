import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { contactAxiosFunction } from '../../Services/FormApi'

const schema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  subject: z.string().min(1, 'Subject is required').min(3, 'Subject must be at least 3 characters'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be at most 1000 characters'),
})

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  const onSubmit = async (data) => {
    try {
      await contactAxiosFunction(data)
      alert('Message sent successfully!')
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
                <h3 className="text-warning mb-0">Contact Us</h3>
              </div>
              <div className="card-body p-4">
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
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                      placeholder="What is this about?"
                      {...register('subject')}
                    />
                    {errors.subject && (
                      <div className="invalid-feedback">{errors.subject.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      placeholder="Write your message here..."
                      {...register('message')}
                    />
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message.message}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
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

export default ContactForm
