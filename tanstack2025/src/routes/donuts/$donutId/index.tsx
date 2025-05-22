import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchCommentsOpts, fetchDonutDetailOpts } from "@/queries.ts";
import DonutDetail from "@/components/DonutDetail.tsx";

export const Route = createFileRoute("/donuts/$donutId/")({
  component: RouteComponent,
  loader({ params, context }) {
    context.queryClient.ensureQueryData(fetchCommentsOpts(params.donutId));

    return context.queryClient.ensureQueryData(
      fetchDonutDetailOpts(params.donutId),
    );
  },
});

function RouteComponent() {
  const donutId = Route.useParams().donutId;

  const { data: donut } = useSuspenseQuery(fetchDonutDetailOpts(donutId));

  return <DonutDetail donut={donut} />;
}
