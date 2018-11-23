import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
post: any =[];

  constructor(private route: ActivatedRoute, private service:PostService,
  private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getPost(this.route.snapshot.params['id']).subscribe(data => 
    {
      this.post =data;
    });
    
  }

  onEditPost(form : NgForm){
    this.service.updatePost(this.post._id, form.value.title, form.value.content, 
      form.value.email).subscribe(() =>{

        this.router.navigate(['/list']);
      });

  }

}
