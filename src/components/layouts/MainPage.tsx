import { ReactNode } from "react";

interface MainPageProps {
  children: ReactNode;
}

export default function MainPage({ children }: MainPageProps): JSX.Element {
  return (
    <>
      <div className="bg-[#deb887] text-4xl h-full p-4">{children}</div>
    </>
  );
}
