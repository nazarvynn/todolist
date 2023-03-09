import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenubarModule } from 'primeng/menubar';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './gallery/gallery.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PaginatorModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ImageModule,
    ToastModule,
    CardModule,
    InputTextareaModule,
    DialogModule,
    DynamicDialogModule,
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    TodoComponent,
    PostsComponent,
    GalleryComponent,
    AboutComponent,
    PostComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
