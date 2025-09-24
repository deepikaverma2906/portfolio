import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  profileImageUrl: string = '';
  resumeDownloadUrl: string = '';

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    // this.aboutService.getProfileImage().subscribe((res) => {
    //   if (res.length > 0) {
    //     this.profileImageUrl = this.aboutService.getImageFullPath(res[0].path);
    //   }
    // });

    this.aboutService.getProfileImage().subscribe((res: any) => {
      if (res && res.imageUrl) {
        this.profileImageUrl = this.aboutService.getImageFullPath(res.imageUrl);
      } else {
        this.profileImageUrl = 'assets/profile.jpg'; // fallback
      }
    });


    this.aboutService.getResumeUrl().subscribe((res) => {
      if (res.length > 0) {
        this.resumeDownloadUrl = this.aboutService.downloadResumeUrl(res[0].filename);
      }
    });
  }
}
