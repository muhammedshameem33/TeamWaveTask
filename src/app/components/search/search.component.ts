import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  questions:any[]=[];
  clicked:Boolean=false;

  page=new FormControl('');
  pageSize=new FormControl('');
  fromDate=new FormControl('');
  toDate=new FormControl('');
  order=new FormControl('asc');
  min=new FormControl('');
  max=new FormControl('');
  sort=new FormControl('activity');
  question=new FormControl('');
  accepted=new FormControl('');
  answers=new FormControl('');
  body=new FormControl('');
  closed=new FormControl('');
  migrated=new FormControl('');
  notice=new FormControl('');
  notTagged=new FormControl('');
  tagged=new FormControl('');
  title=new FormControl('');
  user=new FormControl('');
  url=new FormControl('');
  views=new FormControl('');
  wiki=new FormControl('');

  constructor(private http:HttpService) { }

  ngOnInit(): void {
  }

  toTimeStamp(date){
    date = date.split("-");
    var newDate = new Date( date[0], date[1] - 1, date[2]);
    console.log(newDate.getTime());
  }

  getQuestion(){
    let parameters:string='search/advanced?site=stackoverflow&';
    let andSymbol:string='&';
    let sortParameter='sort='+this.sort.value+andSymbol;
    let orderParameter='order='+this.order.value;

    if(this.page.value!=''){
      parameters+='page='+this.page.value+andSymbol;
    }

    if(this.pageSize.value!=''){
      parameters+='pagesize='+this.pageSize.value+andSymbol;
    }
    if(this.fromDate.value!=''){
      parameters+='fromdate='+this.fromDate.value+andSymbol;
    }
    if(this.toDate.value!=''){
      parameters+='todate='+this.toDate.value+andSymbol;
    }
    if(this.min.value!=''){
      parameters+='min='+this.min.value+andSymbol;
    }
    if(this.max.value!=''){
      parameters+='max='+this.max.value+andSymbol;
    }
    if(this.question.value!=''){
      parameters+='q='+this.question.value+andSymbol;
    }
    if(this.answers.value!=''){
      parameters+='answers='+this.question.value+andSymbol;
    }
    if(this.body.value!=''){
      parameters+='body='+this.body.value+andSymbol;
    }
    if(this.closed.value!=''){
      parameters+='closed='+this.closed.value+andSymbol;
    }
    if(this.notice.value!=''){
      parameters+='notice='+this.notice.value+andSymbol;
    }
    if(this.notTagged.value!=''){
      parameters+='nottagged='+this.notTagged.value+andSymbol;
    }
    if(this.tagged.value!=''){
      parameters+='tagged='+this.tagged.value+andSymbol;
    }
    if(this.title.value!=''){
      parameters+='title='+this.title.value+andSymbol;
    }
    if(this.url.value!=''){
      parameters+='url='+this.url.value+andSymbol;
    }
    if(this.user.value!=''){
      parameters+='user='+this.user.value+andSymbol;
    }
    if(this.views.value!=''){
      parameters+='views='+this.views.value+andSymbol;
    }
    if(this.wiki.value!=''){
      parameters+='wiki='+this.wiki.value+andSymbol;
    }
    if(this.migrated.value!=''){
      parameters+='migrated='+this.migrated.value+andSymbol;
    }
    if(this.accepted.value!=''){
      parameters+='accepted='+this.accepted.value+andSymbol;
    }

    parameters+=sortParameter;
    parameters+=orderParameter;

    this.http.get(parameters).subscribe(
      res=>{
        let length=Object.entries(res['items']).length
        for(let i=0;i<length;i++){
          this.questions.push(res['items'][i]);
        }
        this.clicked=true;
        // parameters="questions/"+res['items'][0];
        // parameters+='?site=stackoverflow&'+sortParameter+orderParameter;
        // this.http.get(parameters).subscribe(
        //   res=>{
        //     console.log(res['items'][0]['link'])
        //   }
        // )
      },
      error=>{
        console.log(error)
      }
    )

  }

}
