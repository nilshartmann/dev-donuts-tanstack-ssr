import _ky from "ky";
import { queryOptions } from "@tanstack/react-query";
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  CardDto,
  CardDtoList,
  CommentDtoList,
  DonutCommentDtoList,
  DonutDto,
  DonutDtoList,
} from "@/types";

const ky = _ky.extend({
  retry: 0,
  timeout: 30000,
});

export const fetchCardDetailOpts = (cardId: string) =>
  queryOptions({
    queryKey: ["cards", "detail", cardId],
    async queryFn() {
      console.log("fetchCardDetailOpts", cardId);
      const r = await ky
        .get(`http://localhost:7200/api/cards/${cardId}`)
        .json();
      return CardDto.parse(r);
    },
  });

export const fetchDonutDetailOpts = (donutId: string) =>
  queryOptions({
    queryKey: ["donuts", "detail", donutId],
    async queryFn() {
      const r = await ky
        .get(`http://localhost:7200/api/donuts/${donutId}`)
        .json();
      return DonutDto.parse(r);
    },
  });

export const fetchDonutCommentsOpts = (donutId: string) =>
  queryOptions({
    queryKey: ["donuts", "detail", donutId, "comments"],
    async queryFn() {
      const r = await ky
        .get(`http://localhost:7200/api/donuts/${donutId}/comments?slow=1200`)
        .json();
      return DonutCommentDtoList.parse(r);
    },
  });

export const fetchCommentsOpts = (cardId: string) =>
  queryOptions({
    queryKey: ["cards", "detail", cardId, "comments"],
    async queryFn() {
      const r = await ky
        .get(`http://localhost:7200/api/cards/${cardId}/comments?slow=1200`)
        .json();
      return CommentDtoList.parse(r);
    },
  });

export const fetchCardListOpts = () =>
  queryOptions({
    queryKey: ["cards", "list"],
    async queryFn() {
      const r = await ky.get("http://localhost:7200/api/cards").json();
      return CardDtoList.parse(r);
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
