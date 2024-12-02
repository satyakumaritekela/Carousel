import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the layout spans the full viewport height */

  header {
    background-color: #333; /* Dark background for the header */
    color: white;
    padding: 1rem; /* Adds spacing inside the header */
    text-align: center;

    nav {
      margin-top: 1rem; /* Spacing between title and navigation */
      display: flex;
      justify-content: center;
      gap: 1rem; /* Space between navigation links */

      a {
        color: white; /* White text for navigation links */
        text-decoration: none;

        &:hover {
          text-decoration: underline; /* Underline on hover for links */
        }
      }

      @media (max-width: 768px) {
        flex-direction: column; /* Stack links vertically on smaller screens */
        gap: 0.5rem;
      }
    }
  }

  main {
    flex: 1; /* Takes up available vertical space */
    padding: 2rem; /* Adds spacing around the main content */
    background-color: #f9f9f9; /* Light background for the main content */

    @media (max-width: 768px) {
      padding: 1rem; /* Reduce padding on smaller screens */
    }
  }

  footer {
    background-color: #222; /* Dark background for the footer */
    color: white;
    text-align: center;
    padding: 1rem; /* Adds spacing inside the footer */

    a {
      color: #ddd; /* Slightly lighter text for links */
      text-decoration: none;

      &:hover {
        text-decoration: underline; /* Underline on hover */
      }
    }
  }
`;
