import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/about/about.component';
import { GalleryComponent } from 'src/app/gallery/gallery.component';
import { PostComponent } from 'src/app/post/post.component';
import { PostsComponent } from 'src/app/posts/posts.component';
import { TodoComponent } from 'src/app/todo/todo.component';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'posts/:id',
    component: PostComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
