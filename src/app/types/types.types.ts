export type YearData = {
    year: number,
    playlist: string,
    buttonColor: string;
    backColor: string,
    people: Person[]
}

export type Person = {
    name: string,
    songs: Song[]
}

export type Song = {
    name: string,
    artist: string,
    link: string,
    image: string,
    imageBase64?: string
}