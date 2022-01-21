import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    font-family: 'Poppins', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-variant-numeric: tabular-nums;
    
      }

  html {
    scroll-behavior: smooth;
  }

  body {
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
    font-size: 14px;
    
  }

  button:focus {
    outline: 0
  }

  a {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  /* Hide arrows from input numbers */
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
  /* End of hide arrows from input numbers */

  html {
    font-size: 1rem;
  }

  h1, .h1 {
    font-weight: 500;
    font-size: 3.5rem;
    letter-spacing: -0.15rem;
    color: ${({ theme }) => theme.color.primary};
  }

  h2, .h2 {
    font-weight: 500;
    font-size: 2.15rem;
    color: ${({ theme }) => theme.color.primary};
  }

  h3, .h3 {
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color.primary};
  }
  
  p, .p {
    color: ${({ theme }) => theme.color.primary};
    font-size: 1.15rem;
  }

  small, .small {
    line-height: 0.7rem;
    display: inline-block;
    font-size: 0.7rem;
  }

  .text-success {
    color: #3B82EC !important;
  }
  
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color.primary};
  }

  // Modal background blur
  .modal-open .container-fluid, .modal-open  .container {
    -webkit-filter: blur(4px);
  }
  
`;
