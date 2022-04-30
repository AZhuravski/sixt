import styled from "@emotion/styled"

const Header = () => {
    return (
        <StyledHeader>  
            <StyledLogoWrapper>
                Logo
            </StyledLogoWrapper>
        </StyledHeader>
    )
}

export default Header


const StyledHeader = styled.header({
    position: 'relative',
})

const StyledLogoWrapper = styled.div({
    background: '#fff',
    margin: '0 auto',
    minHeight: '4.375rem',
    padding: '0.5rem 1.25rem',
    position: 'relative',
})