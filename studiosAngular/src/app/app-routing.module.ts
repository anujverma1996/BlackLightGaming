import {NgModule} from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import {MatchdetailsComponent} from "./matchdetails/matchdetails.component"
import {UserdetailsComponent} from "./userdetails/userdetails.component"

const routes: Routes = [
  {
    path: '',
    component: UserdetailsComponent
  } , 
    {
        path: 'matchdetails',
        component: MatchdetailsComponent
      } , 
      {
        path: 'userdetails',
        component: UserdetailsComponent
      } , 

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{ }
export const routingComponents = [MatchdetailsComponent,UserdetailsComponent]