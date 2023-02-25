import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import last from 'lodash-es/last';

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
  createTitle!: string;
  createBody!: string;
  editTitle!: string;
  editBody!: string;
  posts!: Post[];
  editPost!: Post | null;
  itemsPerPage = 3;
  isShownCreateModal = false;
  isShownEditModal = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadPosts(0, this.itemsPerPage);
  }

  loadPosts(start: number, limit: number): void {
    const URL = `${this.getBaseUrl()}/posts?_start=${start}&_limit=${limit}`;
    this.httpClient.get<Post[]>(URL).subscribe((posts) => {
      this.posts = posts;
    });
  }

  onPageChange({ page }: any): void {
    this.loadPosts(this.itemsPerPage * page, this.itemsPerPage);
  }

  showCreateModal(): void {
    this.isShownCreateModal = true;
  }

  hideCreateModal(): void {
    this.isShownCreateModal = false;
    this.createTitle = '';
    this.createBody = '';
  }

  createPost(): void {
    const userId = 1;
    const title = (this.createTitle || '').trim();
    const body = (this.createBody || '').trim();

    if (!title || !body) {
      return;
    }

    const URL = `${this.getBaseUrl()}/posts`;
    const headers = this.getHeaders();

    this.httpClient.post<Post>(URL, { userId, title, body }, { headers }).subscribe((post) => {
      const lastPost = last(this.posts);
      const nextId = lastPost ? lastPost!.id + 1 : post.id;

      this.posts = [{ ...post, id: nextId }, ...this.posts];
      this.hideCreateModal();
    });
  }

  showEditModal(post: Post): void {
    this.isShownEditModal = true;
    this.editPost = post;
  }

  hideEditModal(): void {
    this.isShownEditModal = false;
    this.editTitle = '';
    this.editBody = '';
    this.editPost = null;
  }

  updatePost(): void {}

  deletePost(post: Post): void {
    const URL = `${this.getBaseUrl()}/posts/${post.id}`;

    this.httpClient.delete<void>(URL).subscribe(() => {
      this.posts = this.posts.map((p) => (p.id === post.id ? null : p)).filter(Boolean) as Post[];
    });
  }

  private getBaseUrl(): string {
    return '//jsonplaceholder.typicode.com';
  }

  private getHeaders(): Record<string, string> {
    return { 'Access-Control-Expose-Headers': 'X-Total-Count' };
  }
}
