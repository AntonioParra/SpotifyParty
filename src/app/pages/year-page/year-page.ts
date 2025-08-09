import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../../services/data-service';
import { ActivatedRoute } from '@angular/router';
import { Person, Song, YearData } from '../../types/types.types';
import { TiltedCardComponent } from "../../components/tilted-card-component/tilted-card-component";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { SelectableButtonComponent } from "../../components/selectable-button-component/selectable-button-component";
import { FillPageComponent } from "../../components/fill-page-component/fill-page-component";
import { FillContentDirective } from '../../directives/fill-content-directive';
import { Header } from "../../components/header/header";
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-year-page',
  imports: [TiltedCardComponent, SelectableButtonComponent, FillPageComponent, FillContentDirective, Header],
  templateUrl: './year-page.html',
  styleUrl: './year-page.scss'
})
export class YearPage {

  @ViewChild('songs') songsElement!: ElementRef;
  @ViewChild('spotifyIframe') spotifyIframeElement!: ElementRef;

  year: number | undefined;
  data: YearData | undefined;

  spotifyUrl: SafeResourceUrl | undefined;
  spotifyEmbedUrl: SafeResourceUrl | undefined;

  selectedPerson: Person | undefined;
  selectedPersonIndex: number | undefined;

  spotifyMode: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.year = +url[0].path;

      this.dataService.loadYearData(this.year).subscribe(data => {
        this.data = data;
        this.spotifyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/playlist/${data.playlist}`);
        this.spotifyEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/embed/playlist/${data.playlist}?utm_source=generator`);
      });
    });

    window.addEventListener('message', (event) => {
      if(event.origin === 'https://open.spotify.com') {
        this.onSpotifyMessage(event.data);
      }
    });
  }

  selectPerson(person: Person, index: number) {
    this.selectedPerson = person;
    this.selectedPersonIndex = index;

    this.selectedPerson.songs.forEach(song => {
      if(!song.imageBase64) {
        this.dataService.getImageBase64(song.image).subscribe(base64 => song.imageBase64 = base64);
      }
    });

    setTimeout(() => this.cdr.detectChanges(), 100);
    setTimeout(() => this.songsElement.nativeElement.scrollIntoView({ behavior: 'smooth' }), 100);
  }

  getImage(url: string) {
    return this.dataService.getImageBase64(url);
  }

  songSelected(song: Song) {
    // if(!this.spotifyMode) {
      window.open(song.link, '_blank');
    // } else {
    //   debugger
    // }
  }

  onSpotifyMessage(data: any) {
    console.log(JSON.stringify(data))
  }

}
