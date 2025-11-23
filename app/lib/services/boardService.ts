import httpClient from "../http/client";
import type {
  GetBoardCommentListsRequest,
  UpdateBoardRequest,
  CreateBoardCommentRequest,
  UpdateBoardCommentRequest,
  DeleteBoardCommentRequest,
} from "@/app/types/boardServiceType";

class BoardService {
  async updateBoard(payload: UpdateBoardRequest) {
    const response = await httpClient.patch(
      "/board/admin/update-board",
      payload
    );
    return response;
  }

  async createBoardComment(payload: CreateBoardCommentRequest) {
    const response = await httpClient.post(
      "/board/create-board-comment",
      payload
    );
    return response;
  }

  async updateBoardComment(payload: UpdateBoardCommentRequest) {
    const response = await httpClient.patch(
      "/board/update-board-comment",
      payload
    );
    return response;
  }

  async deleteBoardComment(payload: DeleteBoardCommentRequest) {
    const response = await httpClient.delete(
      `/board/delete-board-comment/${payload.board_comment_id}`
    );
    return response;
  }

  async getBoardCommentLists(payload: GetBoardCommentListsRequest) {
    const response = await httpClient.get(
      `/board/get-board-comment-lists/${payload.board_id}`,
      { params: { limit: payload.limit, cursor: payload.cursor } }
    );
    return response;
  }
}

export default new BoardService();
