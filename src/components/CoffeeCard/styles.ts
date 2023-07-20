import { styled } from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  flex-shrink: 0;

  border-radius: 0.375rem 2.25rem;
  background: ${(props) => props.theme["--base-card"]};

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  /* justify-content: space-around; */

  .characteristics {
    display: flex;
    align-items: center;
    flex-direction: row;
    /* justify-content: space-between; */

    gap: 0.5rem;

    .characteristic {
      max-width: fit-content;
      padding: 0 0.5rem;
    }
  }

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.3rem;
  }

  .characteristic {
    /* width: 6rem; */
    height: 1.25rem;
    margin: 1rem 0;
    color: ${(props) => props.theme["yellow-dark"]};
    background: ${(props) => props.theme["yellow-light"]};
    border-radius: 8px;

    font-family: "Roboto";
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 0.8125rem */
    text-transform: uppercase;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .type {
    color: ${(props) => props.theme["--base-subtitle"]};
    text-align: center;
    margin-bottom: 0.5rem;

    /* Title/Title S */
    font-family: "Baloo 2";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 1.625rem */
  }

  > p {
    color: ${(props) => props.theme["--base-label"]};
    text-align: center;

    /* Text/Regular S */
    font-family: "Roboto";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.1375rem */

    padding: 0 1.5rem;
  }

  footer {
    height: 2.375rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;

    .price {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.25rem;
    }

    span:nth-child(1) {
      height: inherit;
      color: var(--base-text, #574f4d);
      text-align: right;

      /* Text/Regular S */
      font-family: "Roboto";
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 1.1375rem */

      display: flex;
      align-items: center;
      justify-content: center;
    }

    span:nth-child(2) {
      height: inherit;
      color: var(--base-text, #574f4d);

      /* Title/Title M */
      font-family: "Baloo 2";
      font-size: 1.725rem;
      font-style: normal;
      font-weight: 800;
      line-height: 130%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .input-container {
      width: 4.5rem;
      height: 2.375rem;
      padding: 0.5rem;

      color: var(--base-title, #272221);
      text-align: center;

      > span {
        /* Text/Regular M */
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%; /* 1.3rem */
      }

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      border-radius: 0.375rem;
      background: ${(props) => props.theme["base-button"]};

      input {
        width: 1.5rem;
      }
    }

    button {
      width: 3rem;
      height: inherit;
      border: 0;
      border-radius: 8px;
      /* color: ${(props) => props.theme["white"]}; */
      background: ${(props) => props.theme["purple-dark"]};

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
