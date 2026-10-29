import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { commentAxiosFunction } from '../../Services/FormApi'

const schema = z.object({
  gameTitle: z.string().min(1, 'Game title is required'),
  username: z.string().min(1, 'Username is required').min(2, 'Username must be at least 2 characters'),
  comment: z
    .string()
    .min(1, 'Comment is required')
    .min(10, 'Comment must be at least 10 characters')
    .max(1000, 'Comment must be at most 1000 characters'),
  parentId: z.string().optional(),
})

function CommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      gameTitle: '',
      username: '',
      comment: '',
      parentId: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      await commentAxiosFunction(data)
      alert('Comment posted successfully!')
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
                <h3 className="text-warning mb-0">Leave a Comment</h3>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <label htmlFor="gameTitle" className="form-label">Game Title</label>
                    <input
                      type="text"
                      id="gameTitle"
                      className={`form-control ${errors.gameTitle ? 'is-invalid' : ''}`}
                      placeholder="Which game are you commenting on?"
                      {...register('gameTitle')}
                    />
                    {errors.gameTitle && (
                      <div className="invalid-feedback">{errors.gameTitle.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                      type="text"
                      id="username"
                      className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                      placeholder="Your display name"
                      {...register('username')}
                    />
                    {errors.username && (
                      <div className="invalid-feedback">{errors.username.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea
                      id="comment"
                      rows={5}
                      className={`form-control ${errors.comment ? 'is-invalid' : ''}`}
                      placeholder="Share your thoughts..."
                      {...register('comment')}
                    />
                    {errors.comment && (
                      <div className="invalid-feedback">{errors.comment.message}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="parentId" className="form-label">Reply to Comment ID (optional)</label>
                    <input
                      type="text"
                      id="parentId"
                      className="form-control"
                      placeholder="Leave blank for top-level comment"
                      {...register('parentId')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Posting...' : 'Post Comment'}
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

export default CommentForm
