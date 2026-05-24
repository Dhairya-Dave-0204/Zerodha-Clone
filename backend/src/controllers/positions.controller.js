import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Position } from "../models/positions.model.js";

const getAllPositions = asyncHandler(async (req, res) => {
  const allPositions = await Position.find();

  if (!allPositions.length > 0) {
    throw new ApiError(401, "Error in finding all position data");
  }

  res
    .status(200)
    .send(
      new ApiResponse(200, allPositions, "Positions data fetched successfully"),
    );
});

export { getAllPositions };
