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
    link: string,
    image: ImageType,
    sub_images: ImageType[],
}

export interface ServiceDetailsResponseApi {
    errors: [],
    messages: [],
    details: ServiceDetails,
}

interface ImageType {
    desc: string,
    url_org: string,
}