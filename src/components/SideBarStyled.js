import styled from "styled-components"


export const SideBarStyled = styled.div`
    padding: 1rem 0;
    width: 25%;
    height: 100%;
    background: #ffffff;
    position: fixed;
    top: 0;
    left: ${({ isVisible }) => (isVisible ? "0" : "-100%")};
    transition: left 0.3s ease-in-out;
    z-index: 10;
`

export const SideBarHeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 3rem;

    img {
        width: 4rem;
        height: 4rem;
    }
`
export const SideBarTitleStyled = styled.div`
    text-align: start;

    h2 {
        color: #000000;
        font-size: 2rem;
        margin: 0;
    }

    p {
        color: #5D5449;
        font-family: 'Poppins';
        font-weight: 400;
        font-size: .75rem;
        margin: 0;
    }
`

export const SidebarItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;

    svg {
        color: #799283;
        height: 1.5rem;
        width: 1.5rem;
    }

    p {
        font-family: 'Poppins';
        font-size: 1.125rem;
        font-weight: 600;
        color: #799283;
        margin: 2rem;
    }

    &:hover {
        border-left: .5rem solid red;
        border-radius: .2rem;

        svg {
            color: red;
        }

        p {
            color: red;
        }
    }
`

export const SideBarProfileStyled = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0rem 1rem;
    background: #ffffff;
    border-radius: 1rem;
    box-shadow: 0px 12px 16px #d5d5d5
`

export const SideBarProfilePhotoStyled = styled.div`
    padding: 10% 20% 0;
    margin-bottom: 1rem;

    img {
        width: 50%;
        height: auto;
        border-radius: 1rem
    }
`

export const SideBarProfileNameStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    font-weight: 500;
    color: #393939;
    margin: 0;
`

export const SideBarProfileEmailStyled = styled.p`
    font-family: 'Poppins';
    font-size: .75rem;
    font-weight: 300;
    color: #B2B2B2;
    margin: 0;    
`

export const SideBarProfileButtonStyled = styled.button`
    width: 60%;
    margin: 1rem auto;
    padding: .8rem 1rem;
    border-radius: .5rem;
    border: none;
    font-weight: 700;
    color: #135846;
    background: #EBF1EF;
`

export const SideBarCopyrightStyled = styled.div`
    text-align: start;
    padding: 1rem;
`

export const SideBarCopyrightTitleStyled = styled.p`
    font-family: 'Poppins';
    font-size: 1rem;
    color: #212121;
    font-weight: 500;
    margin: 0;
`

export const SideBarCopyrightTextStyled = styled.p`
    font-family: 'Poppins';
    font-size: .875rem;
    color: #799283;
    font-weight: 200;
    margin: 0;
    margin-bottom: 4rem;
`