import React, { HtmlHTMLAttributes, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'


interface Idata {    
    alternativeTitle? : string,
    description? : string,
    imageObject?: string,
    localId?: string,
    period?: boolean,
    subDescription?: string,
    title?: string,
    url?: string,
    viewCount? : string ,
}



const Home = () => {
    const [datas, setDatas] = useState<Idata[]>()
    const [search, setSearch] = useState<string>("")
    const [keyword, setKeyword]= useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    
    useEffect(() => {
        console.log(datas)
        console.log(keyword)
    }, [keyword, search, setDatas])

    // 인풋 이벤트
    
    const onChangeHandler = (event : React.FormEvent<HTMLInputElement>)=>{
        setSearch(event.currentTarget.value);
        setKeyword(encodeURI(event.currentTarget.value))
    }

    // 완료 이벤트
    const onSubmitHandler = async (event : React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const response = await fetch(`http://api.kcisa.kr/API_CNV_054/request?serviceKey=${process.env.REACT_APP_APIKEY}&numOfRows=10&pageNo=1&keyword=${keyword}
           `, {
                headers: {
                    Accept: "application / json",
                }
            })
        const json = await response.json();
        
        setDatas(json.response.body.items.item)

        
        setOpen(!open)
        
        setSearch("")
    }

    // 창 닫기
    const closeHandler = () => {
        setOpen(!open)
    }
    return (
        <Wrap>
            <TextBox>
                <h1>세상을 밝게 만들겠습니다.</h1>
                <p>Bright 지금 시작하세요.</p>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" value={search} onChange={onChangeHandler}/>
                    <button type='button'>검색하기</button>
                </form>
            </TextBox>
            <InfoWrap open={open}>
                <span onClick={closeHandler}>&#215;</span>
               {datas?.map((item)=> {
                return (
                    <div>
                        <h5>{item.title}</h5>
                    </div>
                )
               })}
            </InfoWrap>
        </Wrap>
    )
}

const Wrap = styled.section`
    width: 100%;
    min-height: 100vh;
    background: url('pexels-jackson-david-4500711.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextBox = styled.div`
    color: ${props => props.theme.textColor};
    text-align: center;
    h1{
        font-size: 24px;
    }
    p{
        margin-top: 10px;
        font-size: 18px;
    }
    form {
        margin-top: 20px;
        input, button {
            color : ${prop => prop.theme.textColor};
            background-color: ${prop => prop.theme.bgColor};
            border: 1px solid ${prop => prop.theme.textColor};
            border-radius: 20px;
            padding: 10px 20px;
        }
        button {
            margin-left: 10px;
            transition: all 0.3s;
            cursor: pointer;
            &:hover{
                background-color: white;
                color: #999;
                font-weight: 500;
            }
        }
    }
`

const InfoWrap = styled.div<{ open : boolean }>`
    position: absolute;
    width: 100%;
    min-height: 100vh;
    background: rgb(0, 0, 0, 0.6);
    backdrop-filter: blur(3.5px);
    transition: 0.3s;
    transform: ${prop => prop.open ? "translateY(0%)" : "translateY(-100%)"};
    color: ${prop => prop.theme.textColor};

    span {
        font-size: 60px;
        display: inline-block;
        position: absolute;
        right: 10px;
        top: 10px;
        margin-right: 16px;
        cursor: pointer;
        transition: 0.3s all;
        &:hover{
            transform: rotate(45deg);
            transform-origin: 50% 50%;
        }
    }
`

export default Home