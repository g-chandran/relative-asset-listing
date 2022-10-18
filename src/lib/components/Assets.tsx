import { Container } from "./Container";
import { MOCKDATA } from "../data/mockData";

export function Assets() {
  return (
    <div className="flex gap-16 flex-wrap justify-center mt-8">
      {MOCKDATA.map((element) => (
        <Container {...element} />
      ))}
    </div>
  );
}
