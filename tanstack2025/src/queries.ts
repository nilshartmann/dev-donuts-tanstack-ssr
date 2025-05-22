import _ky from "ky";
import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { DonutCommentDtoList, DonutDto, DonutDtoList } from "@/types";

const ky = _ky.extend({
  retry: 0,
  timeout: 30000,
});

const loadDonut = createServerFn({
  method: "GET",
})
  .validator((unknownData) => {
    if (typeof unknownData === "string") {
      return unknownData;
    }

    throw new Error("Schade, nix da. Kein Donut today!");
  })
  .handler(async ({ data }) => {
    const r = await ky
      .get(`http://localhost:7200/api/donuts/${data}?slow=1200`)
      .json();
    return DonutDto.parse(r);
  });

export const fetchDonutDetailOpts = (donutId: string) =>
  queryOptions({
    queryKey: ["donuts", "detail", donutId],
    async queryFn() {
      return loadDonut({ data: donutId });
    },
  });

export const fetchCommentsOpts = (donutId: string) =>
  queryOptions({
    queryKey: ["donuts", "detail", donutId, "comments"],
    async queryFn() {
      const r = await ky
        .get(`http://localhost:7200/api/donuts/${donutId}/comments?slow=2400`)
        .json();
      return DonutCommentDtoList.parse(r);
    },
  });

export const fetchDonutListOpts = () =>
  queryOptions({
    queryKey: ["donuts", "list"],
    async queryFn() {
      const r = await ky.get("http://localhost:7200/api/donuts").json();
      return DonutDtoList.parse(r);
    },
  });
