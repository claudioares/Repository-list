import styled from "styled-components";


export const Header = styled.div`
    background-color: #272B33;

    width: 100%;
    height: 6rem;
    padding: 0 31.5px;
`
export const InfoUser = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 0.70%;
`
export const Img = styled.div`
    display: flex;
    align-items: center;
 
    img{
        width: 32.9px;
        height: 32.9px;
        border-radius: 50%;
    }
`
export const IconSearch = styled.div`
    position: absolute;
    display: flex;
    align-items: center;

    height: 2.7rem;

    top: 9%;
    right: 2%;

    img{
        width: 1.9rem;
        height: 2rem;
    }
`
export const InputHeader = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    
    input{
        background-color: #0A0C10;
        border: none;
        border: 0.1rem solid #f0f3f64e;
        border-radius: 0.6rem;
        color: #f0f3f6ab;
        font-size: 15px;
        
        width: 27.2rem;
        height: 2.7rem;
        
        padding: 0 1.2rem;

        &::placeholder{
           color: #f0f3f65e;
           font-size: 15px;
        }
    }
`