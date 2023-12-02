import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './Components/news/news.component';

const routes: Routes = [
  {
    path: "",
    component: NewsComponent,
    data: { category: "general" }
  },
  {
    path: "technology",
    component: NewsComponent,
    data: { category: "technology" }
  },
  {
    path: "entertainment",
    component: NewsComponent,
    data: { category: "entertainment" }
  },
  {
    path: "health",
    component: NewsComponent,
    data: { category: "health" }
  },
  {
    path: "sports",
    component: NewsComponent,
    data: { category: "sports" }
  },
  {
    path: "business",
    component: NewsComponent,
    data: { category: "business" }
  },
  {
    path: "science",
    component: NewsComponent,
    data: { category: "science" }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
