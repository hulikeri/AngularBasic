import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-itmes',
  templateUrl: './media-itmes.component.html',
  styleUrls: ['./media-itmes.component.scss']
})
export class MediaItmesComponent implements OnInit {
  @Input() MediaInput: any;
  @Output() Delete = new EventEmitter();
  @Output() Details = new EventEmitter();
  ngOnInit(): void {
  }
  

  OnDelete(){
    console.log("Deleted");
    this.Delete.emit(this.MediaInput);
  }

  OnWatched()
  {
    console.log("Watched");
    this.Details.emit(this.MediaInput);
  }
}
