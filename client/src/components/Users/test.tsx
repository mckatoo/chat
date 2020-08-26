import { render, screen } from '@testing-library/react'

import Users from '.'

describe('<Users />', () => {
  it('should render the heading', () => {
    const { container } = render(<Users />)

    expect(screen.getByRole('heading', { name: /Users/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot()
  })
})
