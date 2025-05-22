import { DonutDto } from "@/types.ts";

type DonutProps = {
  donut: DonutDto;
};
export default function Donut({ donut }: DonutProps) {
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
