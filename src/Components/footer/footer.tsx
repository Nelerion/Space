
import styled from "styled-components";

const FooterComponent = styled.div`
  width: 100%;
  height: 70px;
  background-color: #f7f2f2;
  padding: 20px;
  border-top:1px solid #c9c7c5;
  
`;
const Link = styled.a`
  color:blue;
`
const Footer = () => {
  
  return (<FooterComponent>
  <Link href="https://github.com/Nelerion" target="_blank">by Nelerion</Link>
  </FooterComponent>);
};

export default Footer;
