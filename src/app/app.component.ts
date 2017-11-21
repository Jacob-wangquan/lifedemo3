import { Component, OnInit,AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, AfterContentChecked,AfterViewInit{
  title="wang";

  divContent = "<div>hhhhhhhhh</div>";

  message= 'hello';

  constructor(){

  }

  ngOnInit():void{

  }
  ngAfterContentInit():void{
console.log('父组件投影内容初始化完毕');
    this.message = 'hello world';
  }
  ngAfterContentChecked():void{
    console.log('父组件投影内容变更检测完毕');
  }
  ngAfterViewInit():void{
    console.log('父组件视图内容初始化完毕');
  }

}
