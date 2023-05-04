import { ReactNode } from "react";
import Header from "./Header";
import MainPage from "./MainPage";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div>
      <Header />
      <MainPage>{children}</MainPage>
    </div>
  );
}
