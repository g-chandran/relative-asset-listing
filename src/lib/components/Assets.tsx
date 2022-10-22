import { MOCKDATA } from "../data/mockData";
import { NewContainer } from "./NewContainer";

export function Assets() {
  return (
    <div className="flex gap-16 flex-wrap justify-center mt-8">
      {MOCKDATA.map((element) => (
        <NewContainer {...element} />
      ))}
    </div>
  );
}
