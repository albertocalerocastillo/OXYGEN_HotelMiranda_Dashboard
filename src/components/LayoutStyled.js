import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  transition: all 0.3s ease;
`;

export const MainContent = styled.div`
  flex-grow: 1;
  transition: margin-left 0.3s ease;
  margin-left: ${(props) => (props.sidebarVisible ? "475px" : "0")}; /* Ajusta según el ancho del sidebar */
`;

export const Content = styled.div`
  padding: 20px;
`;