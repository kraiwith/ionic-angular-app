import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonLabel, IonRow, IonCol, IonText, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { finalize, firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-check-award',
  templateUrl: './check-award.page.html',
  styleUrls: ['./check-award.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonText, IonCol, IonRow, IonLabel, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HttpClientModule]
})
export class CheckAwardPage implements OnInit {
  loading = false;

  prize: Prize | undefined;
  runningNumbers: Prize[] | undefined;
  prizes: Prize[] | undefined;

  constructor(
    private http: HttpClient,
  ) {
    this.getData();
  }

  ngOnInit() {
  }

  async getData() {
    this.loading = true;
    // this.http.get<ApiResponse>(`https://lotto.api.rayriffy.com/latest`).pipe(
    //   finalize(() => this.loading = false)
    // );
    const data = await firstValueFrom(ofData);
    if (data.status == 'success') {
      this.prize = data.response.prizes[0];
      this.prizes = data.response.prizes.slice(1);
      this.runningNumbers = data.response.runningNumbers;
    }
  }
}

interface ApiResponse {
  status: string;
  response: Response;
}

interface Response {
  date: string;
  endpoint: string;
  prizes: Prize[];
  runningNumbers: Prize[];
}

interface Prize {
  id: string;
  name: string;
  reward: string;
  amount: number;
  number: string[];
}


const ofData = of({
  "status": "success",
  "response": {
    "date": "2 พฤษภาคม 2567",
    "endpoint": "https://news.sanook.com/lotto/check/02052567",
    "prizes": [
      {
        "id": "prizeFirst",
        "name": "รางวัลที่ 1",
        "reward": "6000000",
        "amount": 1,
        "number": [
          "980116"
        ]
      },
      {
        "id": "prizeFirstNear",
        "name": "รางวัลข้างเคียงรางวัลที่ 1",
        "reward": "100000",
        "amount": 2,
        "number": [
          "980115",
          "980117"
        ]
      },
      {
        "id": "prizeSecond",
        "name": "รางวัลที่ 2",
        "reward": "200000",
        "amount": 5,
        "number": [
          "062041",
          "268817",
          "644812",
          "647084",
          "782648"
        ]
      },
      {
        "id": "prizeThird",
        "name": "รางวัลที่ 3",
        "reward": "80000",
        "amount": 10,
        "number": [
          "083872",
          "179445",
          "254426",
          "269704",
          "391036",
          "394109",
          "576298",
          "622241",
          "893930",
          "973985"
        ]
      },
      {
        "id": "prizeForth",
        "name": "รางวัลที่ 4",
        "reward": "40000",
        "amount": 50,
        "number": [
          "002704",
          "070350",
          "213851",
          "296360",
          "400412",
          "458579",
          "600370",
          "741384",
          "809555",
          "909104",
          "017612",
          "092164",
          "236594",
          "305155",
          "413829",
          "500758",
          "647086",
          "787550",
          "830668",
          "942459",
          "019209",
          "113503",
          "238339",
          "315925",
          "437249",
          "554410",
          "698981",
          "788180",
          "843525",
          "964513",
          "027545",
          "210071",
          "266781",
          "357122",
          "452425",
          "564636",
          "705937",
          "793800",
          "859072",
          "985943",
          "059895",
          "212161",
          "288111",
          "393023",
          "452639",
          "569904",
          "718684",
          "801724",
          "875542",
          "996805"
        ]
      },
      {
        "id": "prizeFifth",
        "name": "รางวัลที่ 5",
        "reward": "20000",
        "amount": 100,
        "number": [
          "013776",
          "086625",
          "165031",
          "274678",
          "375826",
          "438604",
          "528252",
          "664617",
          "771611",
          "902954",
          "023443",
          "095808",
          "169478",
          "290996",
          "403377",
          "456862",
          "531076",
          "665802",
          "797688",
          "903111",
          "029133",
          "098223",
          "174035",
          "298213",
          "403888",
          "457646",
          "538413",
          "667399",
          "815306",
          "910441",
          "036059",
          "106325",
          "181552",
          "311803",
          "407261",
          "464092",
          "554877",
          "671981",
          "825826",
          "930582",
          "051494",
          "133408",
          "189903",
          "313414",
          "413462",
          "466666",
          "593403",
          "704871",
          "838080",
          "936064",
          "055800",
          "144888",
          "198315",
          "314035",
          "416904",
          "469534",
          "610844",
          "713513",
          "849348",
          "939876",
          "056462",
          "155820",
          "225070",
          "323474",
          "419572",
          "469815",
          "613982",
          "727589",
          "854707",
          "960833",
          "058430",
          "156825",
          "225236",
          "336050",
          "421382",
          "489982",
          "621629",
          "743137",
          "858887",
          "972074",
          "066280",
          "158123",
          "248582",
          "341602",
          "423717",
          "503688",
          "646621",
          "743678",
          "866916",
          "977262",
          "081149",
          "163061",
          "267006",
          "369941",
          "434558",
          "504002",
          "650820",
          "755213",
          "878233",
          "997535"
        ]
      }
    ],
    "runningNumbers": [
      {
        "id": "runningNumberFrontThree",
        "name": "รางวัลเลขหน้า 3 ตัว",
        "reward": "4000",
        "amount": 2,
        "number": [
          "104",
          "763"
        ]
      },
      {
        "id": "runningNumberBackThree",
        "name": "รางวัลเลขท้าย 3 ตัว",
        "reward": "4000",
        "amount": 2,
        "number": [
          "634",
          "833"
        ]
      },
      {
        "id": "runningNumberBackTwo",
        "name": "รางวัลเลขท้าย 2 ตัว",
        "reward": "2000",
        "amount": 1,
        "number": [
          "17"
        ]
      }
    ]
  }
});
