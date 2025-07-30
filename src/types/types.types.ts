export type YearData = {
    year: number,
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
    image: string
}