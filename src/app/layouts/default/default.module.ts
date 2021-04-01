import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent} from './default.component';

import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule} from '@angular/router';
import { SharedModule} from 'src/app/shared/shared/shared.module';
import { MatSidenavModule} from '@angular/material/sidenav';
import { PostsComponent } from 'src/app/modules/posts/posts.component';

@NgModule({
  declarations: [DefaultComponent, DashboardComponent,PostsComponent],
  imports: [
    CommonModule, RouterModule, SharedModule, MatSidenavModule
  ]
})
export class DefaultModule { }
