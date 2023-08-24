import { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  inputValues :string = "";
  result: number | undefined;
  constructor(){

  }
  calculateResult(){

    const SplitTime = this.inputValues.split(":");

    let minuteAngle = (360/60)*parseInt(SplitTime[1])
    console.log("minuteAngle = ",minuteAngle)

    let Hour = 0;
    if(parseInt(SplitTime[0]) >= 24){
      Hour = parseInt(SplitTime[0]) - 24
    }
    else if(parseInt(SplitTime[0]) >= 12){
      Hour = parseInt(SplitTime[0]) - 12
    }
    else{
      Hour = parseInt(SplitTime[0])
    }

    console.log("Hour = ",Hour);

    let HourAngle = ((360/12)*Hour) +  ((30/60)*parseInt(SplitTime[1]));
    console.log("HourAngle = ",HourAngle);
    if(HourAngle > minuteAngle)
    {
       this.result = HourAngle - minuteAngle;
    }
    else{
       this.result = minuteAngle - HourAngle;
    }

    if(this.result > 180){
      return this.result = 360-this.result;
    }
    return this.result

  }

}

