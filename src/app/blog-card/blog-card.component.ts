import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Blog} from '../interfaces/blog.interface';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() data: Blog
  @Output() onSelect = new EventEmitter<Blog>();

  constructor() { }

  ngOnInit(): void {

  }


  ngAfterViewInit() {

  }

  ngOnDestroy() {
  }

  onClickBtn() {
    this.onSelect.emit(this.data);
  }
}
