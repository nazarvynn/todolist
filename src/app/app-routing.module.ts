import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from 'src/app/welcome/welcome.component';
import { TodoComponent } from 'src/app/todo/todo.component';
import { PostsComponent } from 'src/app/posts/posts.component';
import { GalleryComponent } from 'src/app/gallery/gallery.component';
import { AboutComponent } from 'src/app/about/about.component';

const routes: Routes = [
  {
    path: '',
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
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
