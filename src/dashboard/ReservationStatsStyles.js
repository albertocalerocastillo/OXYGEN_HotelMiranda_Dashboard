import styled from "styled-components";

export const StyledStatsContainer = styled.div`
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 650px;
`;

export const StyledHeader = styled.div`
  text-align: left;
  margin-bottom: 16px;
`;

export const StyledHeaderTop = styled.div`
  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #393939;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

export const StyledHeaderBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #393939;
    margin: 0 8px 0 0;
    margin-right: 3rem;
  }

  div {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    display: flex;
    align-items: baseline;

    span {
    }

    span:last-child {
      color: green;
      font-size: 16px;
    }
  }
`;

export const StyledBarChart = styled.div`
  .recharts-wrapper {
    border-radius: 8px;
  }

  .recharts-cartesian-axis-tick-value {
    font-size: 12px;
    color: #666;
  }

  .recharts-legend-wrapper {
    display: none;
  }

  .recharts-tooltip-wrapper {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .recharts-tooltip-label {
    font-size: 14px;
    font-weight: bold;
  }

  .recharts-tooltip-item {
    font-size: 12px;
    color: #555;
  }
`;