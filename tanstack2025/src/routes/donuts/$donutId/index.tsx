import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchCommentsOpts, fetchDonutDetailOpts } from "@/queries.ts";
import DonutDetail from "@/components/DonutDetail.tsx";

export const Route = createFileRoute("/donuts/$donutId/")({
  component: RouteComponent,
  loader({ params, context }) {
    // diesen Request nur STARTEN (auf dem Server)
    // aber nicht auf das Ergebnis warten
    context.queryClient.ensureQueryData(fetchCommentsOpts(params.donutId));

    // jetzt wartet der SERVER mit dem Rendern
    // bis diese Daten geladen sind und schickt dann
    // den HTML-Code für die GANZE Seite!
    return context.queryClient.ensureQueryData(
      fetchDonutDetailOpts(params.donutId),
    );
  },
});

function RouteComponent() {
  const { donutId } = Route.useParams();

  const { data: donut } = useSuspenseQuery(fetchDonutDetailOpts(donutId));

  return <DonutDetail donut={donut} />;
}
