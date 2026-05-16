import ChapterGrid from "./components/ChapterGrid/ChapterGrid";
import Hero from "./components/Hero/Hero";
import WisdomVerse from "./components/WisdomVerse/WisdomVerse";
import ChariotAllegory from "./components/ChariotAllegory/ChariotAllegory";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import WhyGita from "./components/WhyGita/WhyGita";
import ShankaraLegacy from "./components/ShankaraLegacy/ShankaraLegacy";
import DivineLineage from "./components/DivineLineage/DivineLineage";
import CommentaryTimeline from "./components/CommentaryTimeline/CommentaryTimeline";
import GitaManual from "./components/GitaManual/GitaManual";
import Characters from "./components/Characters/Characters";

export default function Home() {
  const wisdomData = {
    primary: {
      citation: "Chapter 2 • Verse 47",
      sanskrit_text: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |",
      translation:
        "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
    },
  };

  return (
    <main className="bg-black font-sans selection:bg-amber-500/30">
      <Hero />
      <ScrollToTop />
      <WisdomVerse slice={wisdomData} />
      <ChariotAllegory />
      <WhyGita />
      <GitaManual />
      <Characters />
      <ShankaraLegacy />
      <DivineLineage />
      <CommentaryTimeline />
      <ChapterGrid />
    </main>
  );
}
