import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';

import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostlistComponent} from './post-list/post-list.component';
import {PostDetailMainComponent} from './post-detail-main/post-detail-main.component';
import {PostCommentComponent} from './post-comment/post-comment.component';


import {postRoutes} from './post.routes';
import {PostHomeComponent} from './post-home/post-home.component';
import {SitestatComponent} from '../sitestat/sitestat.component';


@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        RouterModule.forChild(postRoutes)
    ],
    exports: [],
    declarations: [
        SitestatComponent,
        PostHomeComponent,
        PostlistComponent,
        PostDetailMainComponent,
        PostDetailComponent,
        PostCommentComponent
    ],
    providers: []
})
export class PostModule {
}
