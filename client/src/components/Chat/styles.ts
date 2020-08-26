import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'main users'
    'message message';
`
