import Link from "next/link";

const page = () => {
  return (
    <>
      <div>Artikel Utama</div>
      <h1>
        <Link href={"/artikel/artikel-pertama"}>Artikel Pertama</Link>
      </h1>
    </>
  );
};

export default page;
