export interface ServiceListResponseApi {
    errors: [],
    messages: [],
    list: ServiceDetails[],
}

export interface ServiceDetails {
    topics_id: number,
    ymd: string,
    contents: string,
    subject: string,
    image: {
        desc: string,
        url_org: string,
    }
}

export interface ServiceDetailsResponseApi {
    errors: [],
    messages: [],
    details: ServiceDetails,
}