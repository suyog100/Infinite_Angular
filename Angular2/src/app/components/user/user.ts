import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get("username"))

    // Get individual username
    this.route.paramMap.subscribe(params => {
      console.log(params, "subscribedValue")
    })
  }

  goToHomePage() {
    this.router.navigate([""])
    // this.router.navigate(["users", 'addUser'])
  }
}
