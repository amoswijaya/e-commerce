import { Hero, About, Collections } from "./components";
import { Products } from "../constans/collections";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Collections data={Products} />
    </div>
  );
}
