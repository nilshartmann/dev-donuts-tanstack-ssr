import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchDonutDetailOpts } from "@/queries.ts";
import { DonutDto } from "@/types.ts";
import CommentList from "@/components/CommentList.tsx";
import DonutCommentList from "@/components/DonutCommentList.tsx";
import { LikesWidget } from "@/components/LikesWidget.tsx";
import LoadingIndicator from "@/components/LoadingIndicator.tsx";

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
        "container mx-auto my-8 flex items-start justify-center space-x-8"
      }
    >
      <Donut donut={donut} />

      <DonutCommentList donutId={donut.id} />

      {/*<LikesWidget cardId={"1"} currentLikes={7} />*/}
    </div>
  );
}

type DonutProps = {
  donut: DonutDto;
};
function Donut({ donut }: DonutProps) {
  return (
    <div
      className={
        "border-sprinkleBlue bg-sprinkleWhite text-dough shadow-sprinkleBlue flex w-1/2 flex-col items-center justify-center space-y-8 rounded-2xl border-2 px-8 py-8 drop-shadow-2xl"
      }
    >
      <h1 className={"text-sprinkleOrange text-4xl tracking-wider"}>
        {donut.name}
      </h1>
      <img className={""} src={`/images/${donut.image}`} />
      <p className={"text-brown font-caveat text-center text-4xl"}>
        {donut.description}
      </p>
    </div>
  );
}
