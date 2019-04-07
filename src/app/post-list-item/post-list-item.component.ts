import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() postLoveIts: number;

	postDate:any;

  constructor() { 
  	setTimeout (
  		() => {
  			this.postDate = new Date();
  		}, 1000

  		);

  }
  loveUp(){
  	this.postLoveIts = this.postLoveIts+1;
  	console.log('love + 1');
  	console.log(this.postLoveIts);
  }
  loveDown(){
  	this.postLoveIts = this.postLoveIts-1;
  	console.log('love - 1');
  	console.log(this.postLoveIts);
  }

  ngOnInit() {
  }

}
