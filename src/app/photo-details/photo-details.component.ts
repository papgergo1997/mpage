import { Component, Input, OnInit } from '@angular/core';
import { snapshotChanges } from '@angular/fire/database';
import { Photo } from '../model/photo';
import { PhotoUploadService } from '../service/photo-upload.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {

  @Input() photo: Photo;

  constructor(private pUService: PhotoUploadService) { }

  ngOnInit(): void {
  }

  deletePhoto(photo): void {
    this.pUService.deleteFile(photo);
  }
}
