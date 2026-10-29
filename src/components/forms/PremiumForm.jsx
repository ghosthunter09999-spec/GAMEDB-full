import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { premiumAxiosFunction } from '../../Services/FormApi'

const schema = z.object({
  fullName: z.string().min(1, 'Full name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  plan: z.enum(['monthly', 'yearly', 'lifetime'], {
    errorMap: () => ({ message: 'Please select a plan' }),
  }),
  cardNumber: z
    .string()
    .min(1, 'Card number is required')
    .regex(/^\d{16}$/, 'Card number must be 16 digits'),
  expiry: z
    .string()
    .min(1, 'Expiry is required')
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Use MM/YY format'),
  cvv: z
    .string()
    .min(1, 'CVV is required')
    .regex(/^\d{3,4}$/, 'CVV must be 3 or 4 digits'),
  agree: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms' }),
  }),
})

function PremiumForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      plan: '',
      cardNumber: '',
      expiry: '',
      cvv: '',
      agree: false,
    },
  })

  const selectedPlan = watch('plan')

  const planPrices = {
    monthly: '$4.99 / month',
    yearly: '$39.99 / year (save 33%)',
    lifetime: '$99.99 one-time',
  }

  const onSubmit = async (data) => {
    try {
      await premiumAxiosFunction({ fullName: data.fullName, email: data.email, plan: data.plan })
      alert('Premium subscription saved!')
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
                <h3 className="text-warning mb-0">Go Premium</h3>
              </div>
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <p className="text-secondary mb-2">
                    Unlock ad-free browsing, exclusive reviews, early access, and more.
                  </p>
                  {selectedPlan && (
                    <span className="badge bg-warning text-dark fs-6">
                      {planPrices[selectedPlan]}
                    </span>
                  )}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                      placeholder="John Doe"
                      {...register('fullName')}
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback">{errors.fullName.message}</div>
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
                    <label className="form-label">Select Plan</label>
                    <div className="d-flex flex-column gap-2">
                      {[
                        { value: 'monthly', label: 'Monthly — $4.99/mo' },
                        { value: 'yearly', label: 'Yearly — $39.99/yr (Best Value)' },
                        { value: 'lifetime', label: 'Lifetime — $99.99 once' },
                      ].map((p) => (
                        <div className="form-check" key={p.value}>
                          <input
                            type="radio"
                            className={`form-check-input ${errors.plan ? 'is-invalid' : ''}`}
                            id={`plan-${p.value}`}
                            value={p.value}
                            {...register('plan')}
                          />
                          <label className="form-check-label text-secondary" htmlFor={`plan-${p.value}`}>
                            {p.label}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.plan && (
                      <div className="invalid-feedback d-block">{errors.plan.message}</div>
                    )}
                  </div>

                  <hr className="border-secondary" />

                  <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                    <input
                      type="text"
                      id="cardNumber"
                      maxLength={16}
                      className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                      placeholder="1234567890123456"
                      {...register('cardNumber')}
                    />
                    {errors.cardNumber && (
                      <div className="invalid-feedback">{errors.cardNumber.message}</div>
                    )}
                  </div>

                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="expiry" className="form-label">Expiry (MM/YY)</label>
                      <input
                        type="text"
                        id="expiry"
                        className={`form-control ${errors.expiry ? 'is-invalid' : ''}`}
                        placeholder="12/28"
                        {...register('expiry')}
                      />
                      {errors.expiry && (
                        <div className="invalid-feedback">{errors.expiry.message}</div>
                      )}
                    </div>
                    <div className="col-6">
                      <label htmlFor="cvv" className="form-label">CVV</label>
                      <input
                        type="text"
                        id="cvv"
                        maxLength={4}
                        className={`form-control ${errors.cvv ? 'is-invalid' : ''}`}
                        placeholder="123"
                        {...register('cvv')}
                      />
                      {errors.cvv && (
                        <div className="invalid-feedback">{errors.cvv.message}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className={`form-check-input ${errors.agree ? 'is-invalid' : ''}`}
                      id="agree"
                      {...register('agree')}
                    />
                    <label className="form-check-label text-secondary" htmlFor="agree">
                      I agree to the Premium Terms of Service
                    </label>
                    {errors.agree && (
                      <div className="invalid-feedback d-block">{errors.agree.message}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Subscribe Now'}
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

export default PremiumForm
