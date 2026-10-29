import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { searchAxiosFunction } from '../../Services/FormApi'

const schema = z.object({
  query: z.string().min(1, 'Search query is required').min(2, 'Query must be at least 2 characters'),
  genre: z.string().optional(),
  platform: z.string().optional(),
  yearFrom: z
    .number({ invalid_type_error: 'Must be a number' })
    .min(1970, 'Year must be 1970 or later')
    .max(2030, 'Year must be 2030 or earlier')
    .optional()
    .or(z.nan().transform(() => undefined)),
  yearTo: z
    .number({ invalid_type_error: 'Must be a number' })
    .min(1970, 'Year must be 1970 or later')
    .max(2030, 'Year must be 2030 or earlier')
    .optional()
    .or(z.nan().transform(() => undefined)),
  sortBy: z.enum(['relevance', 'rating', 'release', 'title']).optional(),
})

function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      query: '',
      genre: '',
      platform: '',
      yearFrom: undefined,
      yearTo: undefined,
      sortBy: 'relevance',
    },
  })

  const onSubmit = async (data) => {
    try {
      await searchAxiosFunction(data)
      alert('Search saved successfully!')
      
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
                <h3 className="text-warning mb-0">Search Games</h3>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="mb-3">
                    <label htmlFor="query" className="form-label">Search Query</label>
                    <input
                      type="text"
                      id="query"
                      className={`form-control ${errors.query ? 'is-invalid' : ''}`}
                      placeholder="Game title, developer, or keyword..."
                      {...register('query')}
                    />
                    {errors.query && (
                      <div className="invalid-feedback">{errors.query.message}</div>
                    )}
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="genre" className="form-label">Genre</label>
                      <select id="genre" className="form-select" {...register('genre')}>
                        <option value="">Any genre</option>
                        <option value="action">Action</option>
                        <option value="rpg">RPG</option>
                        <option value="strategy">Strategy</option>
                        <option value="adventure">Adventure</option>
                        <option value="sports">Sports</option>
                        <option value="indie">Indie</option>
                        <option value="horror">Horror</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="platform" className="form-label">Platform</label>
                      <select id="platform" className="form-select" {...register('platform')}>
                        <option value="">Any platform</option>
                        <option value="pc">PC</option>
                        <option value="ps5">PlayStation 5</option>
                        <option value="xbox">Xbox Series X|S</option>
                        <option value="switch">Nintendo Switch</option>
                        <option value="mobile">Mobile</option>
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-4">
                      <label htmlFor="yearFrom" className="form-label">Year From</label>
                      <input
                        type="number"
                        id="yearFrom"
                        className={`form-control ${errors.yearFrom ? 'is-invalid' : ''}`}
                        placeholder="2010"
                        {...register('yearFrom', { valueAsNumber: true })}
                      />
                      {errors.yearFrom && (
                        <div className="invalid-feedback">{errors.yearFrom.message}</div>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="yearTo" className="form-label">Year To</label>
                      <input
                        type="number"
                        id="yearTo"
                        className={`form-control ${errors.yearTo ? 'is-invalid' : ''}`}
                        placeholder="2026"
                        {...register('yearTo', { valueAsNumber: true })}
                      />
                      {errors.yearTo && (
                        <div className="invalid-feedback">{errors.yearTo.message}</div>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="sortBy" className="form-label">Sort By</label>
                      <select id="sortBy" className="form-select" {...register('sortBy')}>
                        <option value="relevance">Relevance</option>
                        <option value="rating">Rating</option>
                        <option value="release">Release Date</option>
                        <option value="title">Title A–Z</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Searching...' : 'Search'}
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

export default SearchForm
