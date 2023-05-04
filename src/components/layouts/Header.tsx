import { useRouter } from "next/router";
import Link from "next/link";
export default function Header() {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent): void => {
    // console.log((e.target as HTMLElement).innerText);
    // console.log((e.target as Element).textContent);
    // console.log((e.target as HTMLElement).dataset.value);
    // router.push(`${(e.target as HTMLElement).dataset.value}`);
  };
  return (
    <>
      <div>Header</div>
      <div className="flex gap-2">
        {/* <button key="/" onClick={handleClick} data-value="/">
          Home
        </button>
        <button onClick={handleClick} data-value="/calculators/merch">
          Calculator
        </button> */}
        <Link href="/">Home</Link>
        <Link href="/calculators/merch">Merchant calculator</Link>
        <Link href="/calculators/about">About</Link>
      </div>
    </>
  );
}
