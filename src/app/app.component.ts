import {Component, OnInit} from '@angular/core';
import {Blog} from './interfaces/blog.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  blogs: Blog[] = [];
  selectedBlog: Blog;


  ngOnInit() {
    // Auto Call first
    console.log('ngOnInit')

    setTimeout(() => {
     this.blogs = [
       {
         title: 'Post 1 Headline',
         image: 'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/547a5e7a7c055d3ba51b0720/5t.jpg?version=',
         date: new Date('Jun 19 2020'),
         commands: 10
       },
       {
         title: 'Post 2 Headline',
         image: 'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/103f51be2e5a503f9541f47c/Untitled-9.jpg?version=',
         date: new Date('Jun 20 2020'),
         commands: 20
       },
       {
         title: 'Post 3 Headline',
         image: 'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/e25cd49e77b55df28d2dd068/-min.jpg',
         date: new Date('Jun 21 2020'),
         commands: 15
       },
       {
         title: 'Post 1 Headline',
         image: 'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/547a5e7a7c055d3ba51b0720/5t.jpg?version=',
         date: new Date('Jun 19 2020'),
         commands: 10
       },
       {
         title: 'Post 2 Headline',
         image: 'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/103f51be2e5a503f9541f47c/Untitled-9.jpg?version=',
         date: new Date('Jun 20 2020'),
         commands: 20
       },
       {
         title: 'Post 3 Headline',
         image: 'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/e25cd49e77b55df28d2dd068/-min.jpg',
         date: new Date('Jun 21 2020'),
         commands: 15
       }
     ]
    }, 100)


  }



  onAddNewBlog() {
    this.blogs.push(
      {
        title: 'Post 4 Headline',
        image: 'https://images03.nicepage.com/c461c07a441a5d220e8feb1a/547a5e7a7c055d3ba51b0720/5t.jpg?version=',
        date: new Date('Jun 12 2020'),
        commands: 100
      },
    )
  }

  onSelectBlog(event: Blog) {
    this.selectedBlog = event;
  }


}
