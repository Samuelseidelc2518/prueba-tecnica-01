import { AxiosError } from "axios";
import { mockInstance } from "./axiosInstance";
import { isImagesResult } from "./guards";
import { GetImagesResult, ImagesResult } from "./types";

export const searchImages = async (page: number, limit: number = 5): Promise<GetImagesResult> => {
    try {
        const { data: result } = await mockInstance.get('/images', { params: { page, limit } });
        if(!isImagesResult(result)) {
            return {
                success: null,
                error: {
                    status_code: "500",
                    message: "El resultado del servidor no es el esperado"
                }
            } as GetImagesResult
        }
        return {
            success: result as ImagesResult,
            error: null
        } as GetImagesResult
    } catch (error: AxiosError | any) {
        return {
            success: null,
            error: {
                status_code: "500",
                message: error.message
            }
        } as GetImagesResult
    }
}