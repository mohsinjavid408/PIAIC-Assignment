function make_album(artist: string, title: string, tracks?: number): object {
    let album: any = {
        "artist": artist,
        "title": title
    };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}

console.log(make_album("Atif Aslam", "Doorie"));
console.log(make_album("Linkin Park", "Meteora", 13));
console.log(make_album("Coldplay", "A Head Full of Dreams", 11));


// { artist: 'Atif Aslam', title: 'Doorie' }
// { artist: 'Linkin Park', title: 'Meteora', tracks: 13 }
// { artist: 'Coldplay', title: 'A Head Full of Dreams', tracks: 11 }