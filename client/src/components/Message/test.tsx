import { render, screen } from '@testing-library/react'

import Message from '.'

describe('<Message />', () => {
  it('should render the heading', () => {
    const { container } = render(<Message />)

    expect(screen.getByRole('heading', { name: /Message/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchInlineSnapshot()
  })
})
