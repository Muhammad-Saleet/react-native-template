import axiosInstance from './AxiosInstance'
import { AxiosRequestConfig } from 'axios'
import { PostCommentType, PostType } from "types"

export const getPost = async (id: string): Promise<PostType> => {
    const config: AxiosRequestConfig = {
        method: "get",
        url: `/posts/${id}`,
    }

    const response = await axiosInstance(config)
    return response.data
}

export const getPostComments = async (postId: string): Promise<PostCommentType> => {
    const config: AxiosRequestConfig = {
        method: "get",
        url: 'comments/',
        params: { postId },
    }

    const response = await axiosInstance(config)
    return response.data
}
