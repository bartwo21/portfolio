import Aboutme from "@/app/components/aboutme";
import Projectcards from "@/app/components/projectcards";
import Contact from "@/app/components/contact";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function Home() {
  return (
    <div className="xl:py-32 py-0 xl:mt-0 mt-40 w-1/2 items-end flex flex-col flex-wrap gap-16">
      <Suspense fallback={<Loading />}>
        <Projectcards />
      </Suspense>
      <Aboutme />
      <Contact />
    </div>
  );
}
