import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { model } from "../gemini/geminiConf.js";

const chatWithGemini = asyncHandler(async (req, res) => {
    const { prompt } = req.body;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                { text: text },
                "Gemini response fetched Successfully."
            )
        );
});

export { chatWithGemini };
