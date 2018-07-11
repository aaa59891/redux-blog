interface PostDefault {
    title?: string;
    categories?: string;
    content?: string;
}

export interface Post extends PostDefault {
    id?: number;
}

export interface PostFormModel extends PostDefault {}

export interface Posts {
    [key: number]: Post
}