import type {
  CreateBoardCommentRequest,
  DeleteBoardCommentRequest,
  GetBoardCommentListsRequest,
  UpdateBoardCommentRequest,
  UpdateBoardRequest,
} from "@/app/types/boardServiceType";
import httpClient from "../http/client";

class BoardService {
  async updateBoard(payload: UpdateBoardRequest) {
    return httpClient.patch("/board/admin/update-board", payload);
  }

  async createBoardComment(payload: CreateBoardCommentRequest) {
    return httpClient.post("/board/create-board-comment", payload);
  }

  async updateBoardComment(payload: UpdateBoardCommentRequest) {
    return httpClient.patch("/board/update-board-comment", payload);
  }

  async deleteBoardComment(payload: DeleteBoardCommentRequest) {
    return httpClient.delete(`/board/delete-board-comment/${payload.board_comment_id}`);
  }

  async getBoardCommentLists(payload: GetBoardCommentListsRequest) {
    return httpClient.get(`/board/get-board-comment-lists/${payload.board_id}`, {
      params: { limit: payload.limit, cursor: payload.cursor },
    });
  }
}

export const boardService = new BoardService();
export default boardService;
