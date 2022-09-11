import styled from "styled-components";

export const AppContainer = styled.main`
  padding: 1em;
  background-color: rgb(78, 74, 74);
  height: 30em;
  width: 18em;
  border-radius: 1.5em;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.253);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 1.5em;
`;

export const PokemonInfoContainer = styled.div`
  div {
    background-image: url("./images/background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 1em;
    height: 18em;
    position: relative;
  }

  div img {
    position: absolute;
    bottom: 15%;
    left: 25%;
    width: 50%;
  }

  h3 {
    padding: 1em 0em 0em 0.4em;
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.514);
  }
`;

export const DivContainer = styled.div`
  height: 7em;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;

  input {
    width: 100%;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.089),
      2px 2px 2px rgba(0, 0, 0, 0.116);
    border: solid 1px rgba(0, 0, 0, 0.226);
    padding: 0.5em;
    outline: 0px;
    margin-top: 1em;
    background-color: rgb(180, 179, 179);
  }
`;

export const SuggestionsList = styled.form`
  height: 5em;
  width: 100%;
  font-size: 14px;
  background-color: rgb(109, 108, 108);
  overflow: hidden;
  overflow-y: auto;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.082);
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;

  ::-webkit-scrollbar {
    display: none;
  }
`;
