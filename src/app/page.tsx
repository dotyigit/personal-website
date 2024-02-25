import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <span className="mb-2">hello world</span>
      <p className="text-xl font-bold">
        i&apos;m omer yigit aker a.k.a.{" "}
        <span className="text-purple-700">dotyigit</span>
      </p>
      <p className="text-sm">
        i&apos;m an industrial engineer and i don&apos;t love building things
      </p>
      <Image
        className="mt-4"
        src="/hugs.gif"
        alt="hugs"
        width="300"
        height="300"
      />
    </main>
  );
}
