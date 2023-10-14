import Accounts from "./Components/Accounts";
import Projects from "./Components/Projects";
import { arabic } from "./lib/Fonts";

export default async function Home() {
  return (
    <>
      <h1
        className={`${arabic.className} mt-8 mb-8 text-center sm:text-5xl text-4xl`}
      >
        فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ
      </h1>
      <h1 className="text-center sm:text-xl text-sm font-serif font-bold text-gray-300">
        and the flood seized them while they were wrongdoers.
      </h1>
      <p className={`${arabic.className} text-center text-gray-400`}>
        طوفان_الاقصى#
      </p>
      <p className="text-center text-sm mt-2 text-gray-400">#Toofan Al-Aqsa</p>
      <div className="flex justify-center mt-12">
        <Accounts />
      </div>
      <Projects />
    </>
  );
}
