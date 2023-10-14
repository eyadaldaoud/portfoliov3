import Accounts from "./Components/Accounts";
import Projects from "./Components/Projects";
import { arabic } from "./lib/Fonts";

export default async function Home() {
  return (
    <>
      <h1 className={`${arabic.className} mt-8 mb-8 text-center text-5xl`}>
        فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ
      </h1>
      <h1 className="text-center text-xl font-serif">
        and the flood seized them while they were wrongdoers.
      </h1>
      <p className={`${arabic.className} text-center`}>طوفان_الاقصى#</p>
      <p className="text-center text-sm  mt-2">#Toofan Al-Aqsa</p>
      <div className="flex justify-center mt-12">
        <Accounts />
      </div>
      <Projects />
    </>
  );
}
