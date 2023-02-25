import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  title!: string;
  body!: string;
  posts!: Post[];
  itemsPerPage = 3;
  isShownEditModal = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadPosts(0, this.itemsPerPage);
  }

  loadPosts(start: number, limit: number): void {
    const URL = `//jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`;
    this.httpClient.get<Post[]>(URL).subscribe((posts) => {
      this.posts = posts;
    });
  }

  onPageChange({ page }: any): void {
    this.loadPosts(this.itemsPerPage * page, this.itemsPerPage);
  }

  addPost(): void {
    console.log(this.title, this.body);
  }

  showEditModal(): void {}

  updatePost(): void {}

  deletePost(): void {}
}
