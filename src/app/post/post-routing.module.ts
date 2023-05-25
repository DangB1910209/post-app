import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { PostComponent } from './post.component';

const routes: Route[] = [
    {
        path: 'post',
        component: PostComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostRoutingModule {}
