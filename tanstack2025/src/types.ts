import { z } from "zod";

export const CardDto = z.object({
  id: z.string(),
  title: z.string().min(4),
  message: z.string(),
  image: z.string(),
  likes: z.number(),
});

export type CardDto = z.infer<typeof CardDto>;

export const CardDtoList = CardDto.array();
export type CardDtoList = z.infer<typeof CardDtoList>;

export const DonutDto = z.object({
  id: z.string(),
  name: z.string().min(4),
  description: z.string(),
  image: z.string(),
  // likes: z.number(),
});

export type DonutDto = z.infer<typeof DonutDto>;

export const DonutDtoList = DonutDto.array();
export type DonutDtoList = z.infer<typeof DonutDtoList>;

export const CommentDto = z.object({
  id: z.string(),
  author: z.string(),
  text: z.string(),
});
export type CommentDto = z.infer<typeof CommentDto>;

export const CommentDtoList = CommentDto.array();
export type CommentDtoList = z.infer<typeof CommentDtoList>;

export const DonutCommentDto = z.object({
  id: z.string(),
  author: z.string(),
  text: z.string(),
});
export type DonutCommentDto = z.infer<typeof DonutCommentDto>;

export const DonutCommentDtoList = DonutCommentDto.array();
export type DonutCommentDtoList = z.infer<typeof DonutCommentDtoList>;
