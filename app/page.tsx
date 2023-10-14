import Accounts from "./Components/Accounts";
import Projects from "./Components/Projects";
import { arabic, en } from "./lib/Fonts";

export default async function Home() {
  return (
    <>
      <div className="text-center p-4">
        <h1 className={` mt-8 mb-4  sm:text-5xl text-4xl`}>
          فَأَخَذَهُمُ الطُّوفَانُ وَهُمْ ظَالِمُونَ
        </h1>
        <h1 className="sm:text-xl text-sm font-serif font-bold dark:text-gray-300 text-gray-700 mb-4">
          and the flood seized them while they were wrongdoers.
        </h1>
        <h2 className={`${en.className}`}>
          <q>IT ISN’T SELF-DEFENSE IF YOU ARE AN OCCUPYING FORCE</q>
        </h2>
        <p className={`${arabic.className} text-gray-400 mt-2`}>
          طوفان_الاقصى#
        </p>
        <p className={`${en.className} text-sm mt-2 text-gray-400`}>
          #Toofan_Al-Aqsa
        </p>
      </div>

      <div className="flex justify-center mt-12">
        <Accounts />
      </div>
      <Projects />
    </>
  );
}
