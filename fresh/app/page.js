import Link from "next/link";

export default function Home() {
  let name = '0biin0'
  return (
    <div>
      <div className="navbar">
        <Link href="/">홈</Link>
        <Link href="/list">List</Link>
      </div>
      <h4 className="title">Bin's Fresh</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  );
}
