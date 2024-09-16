export interface BlogListResponseApi {
    errors: [],
    messages: [],
    list: BlogDetail[],
    pageInfo: {
        totalCnt: number,
        endPageNo: number,
    }
}

export interface BlogDetailResponseApi {
    errors: [],
    messages: [],
    details: BlogDetail,
}

export interface BlogDetail {
    topics_id: number,
    ymd: string,
    contents: string,
    subject: string,
    tags: Tag[],
}

export interface Tag {
    key: string,
    label: string,
}