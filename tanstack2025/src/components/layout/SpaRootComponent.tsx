import { HeadContent, Outlet } from "@tanstack/react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NavBar from "@/components/NavBar.tsx";
import { showQueryDevTools } from "@/demo-config.ts";

export default function SpaRootComponent() {
  return (
    <div className="bg-glaze-subtle text-brown font-fredoka font-a min-h-screen">
      <HeadContent />
      <>
        {/*<Colors />*/}
        <Outlet />

        {showQueryDevTools && <ReactQueryDevtools />}
      </>
    </div>
  );
}

function Colors() {
  return (
    <div className={"flex flex-col gap-y-8"}>
      <div className={"font-caveat text-8xl font-extrabold"}>
        Caveat is more or less here
      </div>
      <div className={"font-fredoka"}>Moin</div>
      <div className={"flex gap-x-8"}>
        <div className={"bg-pink h-16 w-16"} />
        <div className={"bg-brown h-16 w-16"} />
        <div className={"bg-dough h-16 w-16"} />
        <div className={"bg-sprinkleBlue h-16 w-16"} />
        <div className={"bg-sprinkleYellow h-16 w-16"} />
        <div className={"bg-sprinkleWhite h-16 w-16"} />
        <div className={"bg-sprinkleOrange h-16 w-16"} />
        <div className={"bg-bg h-16 w-16"} />
      </div>
    </div>
  );
}
