import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 90vw;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    color: var(--grey-500);
    margin-bottom: 1rem;
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`
export default Wrapper
