import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  data: any;
  inputValues = {
    value1: '',
    value2: '',
    value3: ''
  };

  constructor(){}

  ngOnInit(): void {

  }
  result: number | undefined;
  calculateResult()
  {
      let firstTypeCard = this.inputValues.value1.substring(0,1);
      let firstScoreCard = this.inputValues.value1.substring(1,this.inputValues.value1.length);

      let secondTypeCard = this.inputValues.value2.substring(0,1);
      let secondScoreCard = this.inputValues.value2.substring(1,this.inputValues.value2.length);

      let thirdTypeCard = this.inputValues.value3.substring(0,1);
      let thirdScoreCard = this.inputValues.value3.substring(1,this.inputValues.value3.length);

      let totalScore = 0;
      if(firstScoreCard == secondScoreCard && secondScoreCard == thirdScoreCard){
        if(firstScoreCard == "A")
        {
          totalScore = 35;
        }
        else{
          totalScore = 32.5;
        }
        console.log("totalScore = ",totalScore);
        return this.result = totalScore;

      }
      else{

        let firstScore = this.checkScore(firstScoreCard);
        let secondScore = this.checkScore(secondScoreCard);
        let thirdScore = this.checkScore(thirdScoreCard);
        const ScoreCard: number[] = [firstScore,secondScore,thirdScore];
        console.log(ScoreCard);

        const TypeCard: string[] = [firstTypeCard,secondTypeCard,thirdTypeCard];
        console.log(TypeCard);

        let heartsScore = 0;
        let clubsScore = 0;
        let diamondsScore = 0;
        let spadesScore = 0;
        for(let i = 0; i<TypeCard.length;i++){
          if(TypeCard[i] == 'H'){
            heartsScore += ScoreCard[i]
          }
          else if(TypeCard[i] == 'C'){
            clubsScore += ScoreCard[i]
          }
          else if(TypeCard[i] == 'D'){
            diamondsScore += ScoreCard[i]
          }
          else if(TypeCard[i] == 'S'){
            spadesScore += ScoreCard[i]
          }
        }
        const Score: number[] = [heartsScore,clubsScore,diamondsScore,spadesScore]
        for(let j = 0; j< Score.length;j++)
        {
          if(Score[j] > totalScore)
          {
            totalScore = Score[j]
          }
        }
        return this.result = totalScore;
      }

  }

  checkScore(E:string){

    let score = parseInt(E);
    if (!isNaN(score)) {
      return score
    } else {
      if(E == "A"){
        return  score = 11
      }
      else{
        return  score = 10
      }
    }

  }

}
