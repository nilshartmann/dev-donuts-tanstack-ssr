import { Link } from "@tanstack/react-router";
import { DonutDto, DonutDtoList } from "@/types.ts";

type DonutListProps = {
  donuts: DonutDtoList;
};

export default function DonutList({ donuts }: DonutListProps) {
  return (
    <div
      className={
        "container mx-auto flex flex-col items-center justify-center space-y-10"
      }
    >
      <h1 className={"text-4xl tracking-wider text-pink-600"}>
        The only ring worth scrolling for
      </h1>
      {donuts.map((d) => (
        <DonutItem key={d.id} donut={d} />
      ))}
    </div>
  );
}

type DonutDetailProps = {
  donut: DonutDto;
};
function DonutItem({ donut }: DonutDetailProps) {
  return (
    <div className={"DonutItem group"}>
      <img
        className={
          "max-h-24 transform rounded-2xl rounded-t-lg object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
        }
        src={`/images/${donut.image}`}
      />
      {/* todo: link! */}
      <h2 className={"font-caveat text-3xl"}>{donut.name}</h2>
    </div>
  );
}
