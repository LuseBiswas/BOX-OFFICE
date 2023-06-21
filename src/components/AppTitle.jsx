//It is nothing just a new way to dclare and export a function and use of props
import styled from "styled-components";
export default function AppTitle(props){

    const {title = "Movie-Maniac", subtitle = "Are you looking for a Movie or Actor?"} = props;
    return(
        <TitleWrapper>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </TitleWrapper>
    );

};

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;