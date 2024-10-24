export type GetImagesResult = {
    success: ImagesResult | null;
    error: ImagesErrorResult | null;
}

export type ImagesErrorResult = {
    status_code: string;
    message: string;
}

export type ImagesResult = {
    data: ImageDto[];
    limit: number;
    page: number;
    total: number;
}

export type ImageDto = {
    author: string;
    created_at: string;
    id: number;
    liked: boolean;
    likes_count: number;
    links: LinkAction[];
    main_attachments: Attachment;
    price: number;
    title: string;
    type: string;
}

export type LinkAction = {
    methods: string;
    rel: string;
    uri: string;
}

export type Attachment = {
    big: string;
    small: string;
}