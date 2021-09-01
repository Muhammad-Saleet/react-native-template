export enum Routes {
    // stacks
    DevelopmentStack = 'DevelopmentStack',
    AuthStack = 'AuthStack',
    APIDemoStack = 'APIDemoStack',

    // screens
    LoginView = 'LoginView',
    DevelopmentView = 'DevelopmentView',
    ComponentsListView = 'ComponentsListView',
    ComponentView = 'ComponentView',
    APIDemoHome = 'APIDemoHome',
    DemoUseQuery = 'DemoUseQuery',
    DemoUseInfiniteQuery = 'DemoUseInfiniteQuery',
}

// Use for typing paginated endpoints. This is specific to the ones using page/limit pagination strategy.
export interface ListDataFunctionType<DataType> {
    (
        args: {
            page?: number,
            limit?: number,
            [key: string]: any // additional args specific to an endpoint
        }
    )
        : Promise<{
        data: Array<DataType>,
        page: number,
        limit: number,
    }>;
}

export interface PostType {
    userId: string,
    id: string,
    title: string,
    body: string,
}
