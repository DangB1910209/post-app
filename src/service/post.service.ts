import { map, Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root',
})

export class PostService {
    private postsSubject = new ReplaySubject<Post[]>();
    posts$: Observable<Post[]> | undefined = this.postsSubject.asObservable();

    constructor(private httpClient: HttpClient) {}

    getAllPost() {
        this.httpClient
            .get<Post[]>('https://jsonplaceholder.typicode.com/todos')
            .pipe(map((posts: Post[]) => posts.slice(0, 10)))
            .subscribe((res) => this.postsSubject.next(res));
    }
}
