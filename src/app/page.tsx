import Aboutme from "@/app/components/aboutme";
import Projectcards from "@/app/components/projectcards";
import Contact from "@/app/components/contact";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className=" py-0 mt-16 w-1/2 items-end flex flex-col flex-wrap gap-16">
      <ToastContainer stacked />
      <Projectcards />
      <Aboutme />
      <Contact />
    </div>
  );
}
