import { styled } from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  padding: 5.75rem 0;

  .info {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }

  .title {
    color: var(--base-title, #272221);

    /* Title/Title XL */
    font-family: "Baloo 2";
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 3.9rem */
  }

  .subtitle {
    color: var(--base-subtitle, #403937);
    margin-top: 1.5rem;
    margin-bottom: 3rem;

    /* Text/Regular L */
    font-family: Roboto;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.625rem */
  }

  .differential {
    /* height: 15rem; */
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    /* gap: 0.5rem; */

    p {
      width: 18.375rem;
      margin: 0.725rem 0;

      color: var(--base-text, #574f4d);

      /* Text/Regular M */
      font-family: Roboto;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 1.3rem */

      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;

      .icon {
        width: 2rem;
        height: 2rem;
        border: 0;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .shopping-cart {
        background: ${(props) => props.theme["yellow-dark"]};
      }
      .timer {
        background: ${(props) => props.theme["gray-800"]};
      }
      .package {
        background: ${(props) => props.theme["yellow"]};
      }
      .coffee {
        background: ${(props) => props.theme["purple"]};
      }
    }
  }

  .coffee-list {
    margin-top: 2rem;
    color: ${(props) => props.theme["--base-subtitle"]};

    /* Title/Title L */
    font-family: "Baloo 2";
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 2.6rem */

    .cards {
      margin-top: 3rem;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: flex-start;

      gap: 2rem;
    }
  }
`;
