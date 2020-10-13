declare type PlaylistItem = {
  url: string,
  leftOff: number,
  added: Date,
}

declare type Playlist = {
  items: Array<PlaylistItem>,
  name: string,
  userList: boolean,
  collectionUrl?: string,
}

declare type PlaylistState = {
  lists: {[string]: Playlist},
}
