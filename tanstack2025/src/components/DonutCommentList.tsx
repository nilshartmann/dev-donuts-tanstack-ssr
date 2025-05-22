import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import { CommentDtoList } from "@/types";
import { fetchCommentsOpts, fetchDonutCommentsOpts } from "@/queries.ts";
import LoadingIndicator from "@/components/LoadingIndicator.tsx";

type DonutCommentListProps = {
  donutId: string;
};
export default function DonutCommentList({ donutId }: DonutCommentListProps) {
  return (
    <div className={"CommentList"}>
      <h1>What the Snackers Say</h1>
      <Suspense fallback={<CommentLoadingIndicator />}>
        <DonutCommentListView cardId={donutId} />
      </Suspense>
    </div>
  );
}

type DonutCommentListViewProps = {
  cardId: string;
};
function DonutCommentListView({ cardId }: DonutCommentListViewProps) {
  const { data: comments } = useSuspenseQuery(fetchDonutCommentsOpts(cardId));

  return comments.map((c) => (
    <div key={c.id} className={"CommentItem"}>
      <p>{c.text}</p>
    </div>
  ));
}

function CommentLoadingIndicator() {
  return <LoadingIndicator>Comments loading...</LoadingIndicator>;
}
