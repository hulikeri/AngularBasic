import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-itmes',
  templateUrl: './media-itmes.component.html',
  styleUrls: ['./media-itmes.component.scss']
})
export class MediaItmesComponent implements OnInit {
  @Input() MediaInput: any;
  constructor() { }

  ngOnInit(): void {
  }
  

  OnDelete(){
    console.log("Deleted");
  }

}
