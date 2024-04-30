import Nav from "@/components/Nav";
import Container from "@/components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-2">
      <Image src={"/logo.png"} alt="logo" width={50} height={50}></Image>
      <div className=" absolute top-7 left-20">
        <Nav />
      </div>
      <div>
        <Container />
      </div>
    </div>
  );
}
