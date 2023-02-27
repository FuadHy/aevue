export type Video = {
    title: string,
    timestamp: string,
    thumbnail: string,
    contentType: "video" | "audio",
    category: string,
    subject: string,
    tags: string[],
    reactions: {
        views: number,
        comment: number,
        likes: number
    },
    video: string,
    height: number,
    width: number,
    username: string,
    id: string,
    duration: number,
    creatorID: string,
}