import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/donuts/$donutId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { donutId } = Route.useParams();
  //        ^--- typesafe!

  return <div>Hello Donut {donutId}</div>;
}
