import { Link, createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchDonutListOpts } from "@/queries.ts";
import { DonutDto } from "@/types.ts";

export const Route = createFileRoute("/donuts/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: donuts } = useSuspenseQuery(fetchDonutListOpts());
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
        <DonutDetail key={d.id} donut={d} />
      ))}
    </div>
  );
}

type DonutDetailProps = {
  donut: DonutDto;
};
function DonutDetail({ donut }: DonutDetailProps) {
  return (
    <div
      className={
        "group border-sprinkleBlue bg-sprinkleWhite text-dough shadow-sprinkleBlue hover:bg-bg flex items-center space-x-8 rounded-2xl border-2 px-8 py-8 hover:drop-shadow-2xl"
      }
    >
      <img
        className={
          "max-h-24 transform rounded-2xl rounded-t-lg object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
        }
        src={`/images/${donut.image}`}
      />
      <Link
        to={"/donuts/$donutId"}
        params={{ donutId: donut.id }}
        className={
          "hover:text-sprinkleOrange text-brown no-underline underline-offset-8 hover:underline"
        }
      >
        <h2 className={"font-caveat text-3xl"}>{donut.name}</h2>
      </Link>
    </div>
  );
}
