import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './courses/courses.service';
import { HeaderComponent } from './header/header.component';
import { DisablePipe } from './courses/disable.pipe';
import { CourseCountComponent } from './course-count/course-count.component';
import { NewPageComponent } from './new-page/new-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { CourseComponent } from './course/course.component'
import { DisableRoutePipe } from './course/disaleroute.pipe';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { shoppingListReducer } from './shopping-list/store/shopping.reducer';
import { CartComponent } from './cart/cart.component';


const appRoutes: Routes = [
  {path:'home', component: CoursesComponent},
  {path:'home/:code', component: CourseComponent},
  {path: '', redirectTo:'/home',pathMatch: 'full'},
  {path: 'newpage', component: NewPageComponent},
  {path: 'pagenotfound', component: PageNotFoundComponent},
  {path: 'shopping',  component: ShoppingListComponent},
  {path: 'cart',  component: CartComponent},
  {path: '**',  redirectTo: 'pagenotfound',pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    DisablePipe,
    DisableRoutePipe,
    CourseCountComponent,
    NewPageComponent,
    PageNotFoundComponent,
    CourseComponent,
    ShoppingListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,{useHash: true}),
    StoreModule.forRoot({shopping: shoppingListReducer})
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
