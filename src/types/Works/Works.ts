export interface WorksListResponseApi {
    errors: [],
    messages: [],
    list: WorkDetails[],
}

export interface WorkDetails {
    topics_id: number,
    ymd: string,
    contents: string,
    subject: string,
    image: {
        desc: string,
        url_org: string,
    }
}

export interface WorkDetailsResponseApi {
    errors: [],
    messages: [],
    details: WorkDetails,
}