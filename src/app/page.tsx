import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="py-20 w-1/2 items-end">
      <div className="projects-cards">
        <div className="card"></div>
      </div>
      <div className="about-me p-3 bg-zinc-900 rounded-md">
        <h1 className="text-xl text-sky-50 mb-3">About Me</h1>
        <div className="flex">
          <div className="image-left">
            <Image
              src="/buyuk.jpg"
              width={1250}
              height={1250}
              alt="Picture"
              className="rounded-md border-sky-100 border-2"
            />
          </div>
          <div className="p-right">
            <p className="leading-6 text-m ml-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              consequatur sed delectus, facilis numquam iure, quo reprehenderit
              explicabo temporibus nesciunt iusto tempora doloremque labore
              recusandae?
            </p>
          </div>
        </div>
      </div>
      <div className="contact-form"></div>
    </div>
  );
}
