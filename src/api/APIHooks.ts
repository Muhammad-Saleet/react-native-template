import {
    useInfiniteQuery,
    useMutation,
    useQuery,
    UseQueryOptions,
    UseInfiniteQueryOptions, UseMutationOptions,
} from 'react-query'
import * as API from "./API"
import { queryClient } from "./APIProvider"
import { PostType } from "types"

const getNextPageParam = (limit, lastPage) => {
    if (lastPage.data.length < limit) {
        return undefined // to indicate that no more pages exists
    }
    return lastPage.page + 1
}

// squash the array of items of every page into one array with all items, since in mobile apps
// infinite scrolling is usually used, and data should not be segmented by page
const squashPages = (data) => data.pages.reduce((accumulator, currentPage) => accumulator.concat(currentPage.data), [])

export const useGetPost = (id, overrides?: UseQueryOptions) => {
    return useQuery({
        queryKey: ["getPost", { id }],
        queryFn: () => API.getPost(id),
        ...overrides,
    })
}

export const useListPosts = (limit: number, overrides?: UseInfiniteQueryOptions) => {
    return useInfiniteQuery({
        queryKey: ["listPosts", { limit }],
        queryFn: ({ pageParam }) => API.listPosts({ limit, page: pageParam }),
        getNextPageParam: (lastPage) => getNextPageParam(limit, lastPage),
        select: squashPages,
        ...overrides, // override or add arguments
    })
}

export const useUpdatePost = (overrides?: UseMutationOptions) => {
    // @ts-ignore
    return useMutation({
        mutationFn: (post: PostType) => API.updatePost(post),
        onSuccess: (updatedPost: PostType) => queryClient.invalidateQueries(
            ['getPost', { id: updatedPost.id }], // key of the query to be invalidated
        ),
        ...overrides,
    })
}
