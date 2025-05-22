import { Link, createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchDonutListOpts } from "@/queries.ts";
import DonutList from "@/components/DonutList.tsx";

export const Route = createFileRoute("/donuts/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: donuts } = useSuspenseQuery(fetchDonutListOpts());

  return <DonutList donuts={donuts} />;
}
