import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Holding } from "../models/holdings.model.js";

const getAllHoldings = asyncHandler(async (req, res) => {
  let allHoldings = await Holding.find();

  if (!allHoldings.length > 0) {
    throw new ApiError(401, "Error in fetching all the holdings");
  }

  res
    .status(200)
    .send(
      new ApiResponse(200, allHoldings, "All holdings fetched successfully"),
    );
});

export { getAllHoldings };
