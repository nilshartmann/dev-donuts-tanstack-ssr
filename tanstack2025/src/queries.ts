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
  method: "POST",
})
  .validator((data) => {
    if (typeof data === "string") {
      return data;
    }

    throw new Error("invalid data :-(");
  })
  .handler(async ({ data: donutId }) => {
    console.log("LOADING DONUT ON SERVER WITH ID", donutId);
    const r = await ky
      // "Eigentlich" müssten jetzt auf Donut + Kommentare insg.
      // 1200ms gewartet werden (s. slow unten)
      // es dauert aber länger, weil beide Request NACHEINANDER
      // ausgeführt werden
      .get(`http://localhost:7200/api/donuts/${donutId}?slow=125`)
      .json();
    return DonutDto.parse(r);
  });

export const fetchDonutDetailOpts = (donutId: string) =>
  queryOptions({
    queryKey: ["donuts", "detail", donutId],
    async queryFn() {
      // Wenn wir jetzt durhc die App navigieren,
      // werden die Donuts auf dem Server geladen 😋

      return loadDonut({
        data: donutId,
      });
    },
  });

export const fetchCommentsOpts = (donutId: string) =>
  queryOptions({
    queryKey: ["donuts", "detail", donutId, "comments"],
    async queryFn() {
      const r = await ky
        // gleiche slow-Zeit wie beim Donut
        .get(`http://localhost:7200/api/donuts/${donutId}/comments?slow=1200`)
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
