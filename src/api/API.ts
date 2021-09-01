import axiosInstance from './AxiosInstance'
import { AxiosRequestConfig } from 'axios'
import { ListDataFunctionType, PostType } from "types"

export const getPost = async (id: string): Promise<PostType> => {
    const config: AxiosRequestConfig = {
        method: "get",
        url: `/posts/${id}`,
    }

    const response = await axiosInstance(config)
    return response.data
}

export const listPosts: ListDataFunctionType<PostType> = async ({
    limit = 0,
    page = 1,
}): Promise<{data: Array<PostType>, page: number, limit: number}> => {
    const config: AxiosRequestConfig = {
        method: "get",
        url: "/posts",
        params: {
            _page: page,
            _limit: limit,
        },
    }

    const response = await axiosInstance(config)
    return { data: response.data, page, limit }
}

export const updatePost = async (post: PostType): Promise<PostType> => {
    const config: AxiosRequestConfig = {
        method: "put",
        url: `/posts/${post.id}`,
        data: post,
    }

    console.log("post: --- ", JSON.stringify(post, null, 2))

    const response = await axiosInstance(config)
    console.log("response.data: --- ", JSON.stringify(response.data, null, 2))
    return response.data
}
