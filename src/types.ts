export enum Routes {
    LoginView = 'LoginView',
    DevelopmentView = 'DevelopmentView',
    ComponentsListView = 'ComponentsListView',
    ComponentView = 'ComponentView',
    DevelopmentStack = 'DevelopmentStack',
    AuthStack = 'AuthStack',
}

export interface PostType {
    userId: string,
    id: string,
    title: string,
    body: string,
}

export interface PostCommentType {
    postId: string,
    id: string,
    name: string,
    email: string,
    body: string,
}
