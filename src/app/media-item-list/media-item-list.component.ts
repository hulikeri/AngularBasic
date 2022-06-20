import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.scss']
})
export class MediaItemListComponent implements OnInit {
MediaItems = [
  {
    id: 1,
    name: 'Linga',
    medium: 'Movie',
    category: 'Comedy',
    year: 2010,
    watchedOn: null,
    isFavorite: false
  },
  {
    id: 2,
    name: 'Deepa',
    medium: 'Series',
    category: 'Thriller',
    year: 2011,
    watchedOn: 45585542,
    isFavorite: true
  },
  {
    id: 3,
    name: 'Leisha',
    medium: 'Kids',
    category: 'Knowladge',
    year: 2021,
    watchedOn: null,
    isFavorite: true
  }
]
OnMediaItemDelete(MediaItem: any)
{

}

OnMediaItemWatched(MediaItem: any)
{

}
  constructor() { }

  ngOnInit(): void {
  }

}
