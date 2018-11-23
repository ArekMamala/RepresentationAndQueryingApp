import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { PostCreateComponent } from './post-create/post-create.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { MoviesComponent } from './movies/movies.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: PostDetailsComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'edit/:id',
    component: PostEditComponent
  },
  {
    path: 'create',
    component: PostCreateComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostCreateComponent,
    HomePageComponent,
    PostEditComponent,
    MoviesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
