import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import CredentialContextProvider, {
  CredentialContext,
} from "../../contexts/credentialContext/CredentialContextProvider";
import { ContentWrapper } from "../../shared/components/styledComponent";
import "./MainLayout.css";

function MainLayout() {
  return (
    <section id="page">
      <Header />

      <main>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </main>
    </section>
  );
}
export default MainLayout;
