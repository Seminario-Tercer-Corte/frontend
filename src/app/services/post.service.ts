import { Injectable } from '@angular/core';
import { AngularFirestore, 
  AngularFirestoreCollection, 
  AngularFirestoreDocument } from '@angular/fire/firestore';
import { Post } from "../modelo/post";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private  postsCollection: AngularFirestoreCollection<Post>
  posts: Observable<Post[]>;
  private postDoc: AngularFirestoreDocument<Post>;

  constructor(private afs: AngularFirestore) {
    { 
      this.postsCollection = afs.collection<Post>('posts');
      this.posts = this.postsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    }
  }
  retornarposts(){
    return this.posts;
  }
  public getPosts() {
    return this.afs.collection('posts').snapshotChanges();
  }


  
  
  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`)
    return this.postDoc.valueChanges()
  }

  getPost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`)
  }

  create(data: Post) {
    this.postsCollection.add(data)
  }

  delete(id: string) {
    return this.getPost(id).delete()
  }

  update(id: string, formData) {
    return this.getPost(id).update(formData)
  }
}
