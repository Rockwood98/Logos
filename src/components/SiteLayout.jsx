import { Outlet } from "react-router-dom";
import PageNav from "./PageNav";
import styled from "styled-components";
import Footer from "./Footer";
const Layout = styled.section`
  padding: 4.8rem 1.2rem;
  background-color: var(--color-bg-01);
`;
const OutletLayout = styled(Layout)`
  background-color: transparent;
  padding: 4.8rem 1.2rem;
`;

function SiteLayout() {
  return (
    <>
      <Layout>
        <PageNav />
      </Layout>
      <OutletLayout>
        <Outlet />
      </OutletLayout>
      <Footer />
    </>
  );
}

export default SiteLayout;
