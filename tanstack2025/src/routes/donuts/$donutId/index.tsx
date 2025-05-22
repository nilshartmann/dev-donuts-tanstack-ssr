import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchDonutDetailOpts } from "@/queries.ts";
import { DonutDto } from "@/types.ts";

export const Route = createFileRoute("/donuts/$donutId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { donutId } = Route.useParams();

  const { data: donut } = useSuspenseQuery(fetchDonutDetailOpts(donutId));

  return <DonutDetail donut={donut} />;
}

type DonutDetailProps = {
  donut: DonutDto;
};
function DonutDetail({ donut }: DonutDetailProps) {
  return (
    <div
      className={
        "border-sprinkleBlue bg-sprinkleWhite text-dough shadow-sprinkleBlue container mx-auto my-8 flex max-w-[48rem] flex-col items-center space-y-8 rounded-2xl border-2 px-8 py-8 drop-shadow-2xl"
      }
    >
      <Donut donut={donut} />
    </div>
  );
}

type DonutProps = {
  donut: DonutDto;
};
function Donut({ donut }: DonutProps) {
  return (
    <div className={"flex flex-col items-center justify-center space-y-8"}>
      <h1 className={"text-sprinkleOrange text-4xl tracking-wider"}>
        {donut.name}
      </h1>
      <img className={"w-[24rem]"} src={`/images/${donut.image}`} />
      <p className={"text-brown font-caveat text-center text-4xl"}>
        {donut.description}
      </p>
    </div>
  );
}
