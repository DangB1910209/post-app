import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post, PostService } from 'src/service/post.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
    posts$: Observable<Post[]> | undefined;
    constructor(private postService: PostService) {
        this.posts$ = this.postService.posts$;
    }

    ngOnInit(): void {
        this.postService.getAllPost();
    }
}
