import Accounts from "./Components/Accounts";
import Projects from "./Components/Projects";
import { arabic, en } from "./lib/Fonts";

export default async function Home() {
  return (
    <>
      <div className="flex justify-center mt-12">
        <Accounts />
      </div>
      <Projects />
    </>
  );
}
