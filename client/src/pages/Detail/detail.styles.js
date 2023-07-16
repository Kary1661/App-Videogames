import styled, { keyframes } from 'styled-components'

export const DetailWrapper = styled.section`
  padding: 50px 50px;
  scroll-behavior: smooth;
  background-color: #2C4152;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const FadeIn = keyframes`
from {
 opacity: 0;
}

to {
 opacity: 1;
}
`

export const DetailGame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  animation: ${FadeIn} 6s cubic-bezier(0.25, 1, 0.3, 1) both;
`

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
  }
`

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  h1, 
  p, 
  span {
   margin: 0;
  }
  h1 {
   font-size: 2.5rem;
   color: #9A9A9B;
  }
  p{
    color: #9A9A9B;
   text-align: left;
    font-weight: 700;
  }
`

export const ContentData = styled.div`
  display: flex;
  gap: 50px;
  align-self: center;
`

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
  width: 100%;
  font-weight: 500;
  color: #737373;
`

export const Feature = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const Gallery = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: repeat (3, 1fr);
  grid-template-columns: 1fr 1fr 1fr;
  img {
    width: 100%;
    height: auto;
    
  }
`

export const Trailers = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  video {
  width: 100%;
  height: auto;
}
`