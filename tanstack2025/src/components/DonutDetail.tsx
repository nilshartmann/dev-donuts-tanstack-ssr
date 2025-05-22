import { DonutDto } from "@/types.ts";
import DonutCommentList from "@/components/DonutCommentList.tsx";
import Donut from "@/components/Donut.tsx";

type DonutDetailProps = {
  donut: DonutDto;
};
export default function DonutDetail({ donut }: DonutDetailProps) {
  return (
    <div
      className={
        "container mx-auto my-8 flex items-start justify-center space-x-8"
      }
    >
      <Donut donut={donut} />

      <DonutCommentList donutId={donut.id} />
    </div>
  );
}
