import { Meta, MetaProvider, Link, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Header from "~/components/Header";
import Menubar from "~/components/Menubar";
import "./app.css";

export default function App() {
  return (
    <MetaProvider>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <Link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      <Title>Brew Assistant</Title>

      <Router root={props => (
        <>
          <Header />
          <main>
            <Suspense>{props.children}</Suspense>
          </main>
          <Menubar />
        </>
      )}>
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
