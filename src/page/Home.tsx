import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrap>
        <TextBox>
            <h1>세상을 밝게 만들겠습니다.</h1>
            <p>Bright 지금 시작하세요.</p>
        </TextBox>
    </Wrap>
  )
}

const Wrap = styled.section`
    width: 100%;
    min-height: 100vh;
    background: url('pexels-jackson-david-4500711.jpg');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextBox = styled.div`
    color: ${props => props.theme.textColor};
    text-align: center;
`

export default Home