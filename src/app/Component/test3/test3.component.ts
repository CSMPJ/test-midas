import { Component } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component {
  inputValues = {
    value1: '',
    value2: '',
    value3: ''
  };
  result: string[] =[];
  constructor() {
}

calculateResult()
  {
    this.result =[];

      // let firstWord = "BEFRIEND".split("");
      let firstWord = this.inputValues.value1.split("");
      // console.log("firstWord = ",firstWord)

      // let secondWord = "GIRLFRIEND".split("");
      let secondWord = this.inputValues.value2.split("");
      // console.log("secondWord = ",secondWord)

      // let thirdWord = "FRIENDSHIP".split("");
      let thirdWord = this.inputValues.value3.split("");
      // console.log("thirdWord = ",thirdWord)

      let KeyWord: string[] = [];
      let SpellWord = "";
      let count = 0;
      let MaxSpellWord = "";
      let MaxKeyWord: string[]= [];
      for(let a = 0;a<firstWord.length;a++)
      {
        let sameB = false;
        let sameC = false;
        if(count == 0)
        {
          for(let b = 0;b<secondWord.length;b++)
          {
            if(firstWord[a] == secondWord[b] )
              {
                sameB = true;
                console.log("First = ",firstWord[a])
                break;
              }
          }
          for(let c = 0;c<thirdWord.length;c++)
          {
            if(firstWord[a] == thirdWord[c] )
              {
                sameC = true;
                break;
              }
          }
        }
        else
        {
          let newKeyWord = false;
          for(let d = 1; d< KeyWord.length+1;d++){
            for(let b = 0;b<secondWord.length;b++)
            {
              if(KeyWord[d-1] == secondWord[b] )
              {
                console.log("KeyWord[d-1] == "+KeyWord[d-1]+" / secondWord[b] == "+secondWord[b]+" ")
                console.log("firstWord[a] == "+firstWord[a]+" / secondWord[b+count == "+secondWord[b+count]+" ")
                if(firstWord[a]==secondWord[b+count])
                {
                  sameB = true;
                  break;
                }
                else
                {
                  count = 0;
                  KeyWord = [];
                  SpellWord = "";
                  for(let b = 0;b<secondWord.length;b++)
                  {
                    if(firstWord[a] == secondWord[b])
                    {
                      console.log("เข้าๆๆๆๆๆๆ");

                      sameB = true;
                      newKeyWord = true;
                      break;
                    }
                    else if(b == secondWord.length && firstWord[a] != secondWord[b])
                    {
                      sameB = false;

                      break;
                    }
                  }
                }
              }
              if(count == 0 || sameB == true){
                break;
              }
            }
            if(count == 0 || sameB == true){
              break;
            }
          }
          if(newKeyWord == true)
          {
            for(let c = 0;c<thirdWord.length;c++)
            {
              if(firstWord[a] == thirdWord[c] )
                {
                  sameC = true;
                  break;
                }
            }
          }
          else
          {
            for(let d = 1; d< KeyWord.length+1;d++){

              for(let c = 0;c<thirdWord.length;c++)
              {
                console.log("KeyWord[d-1] == "+KeyWord[d-1]+" / thirdWord[c] == "+thirdWord[c]+" ")
                if(KeyWord[d-1] == thirdWord[c] )
                {
                  console.log("KeyWord[d-1] == "+KeyWord[d-1]+" / thirdWord[c] == "+thirdWord[c]+" ")
                  console.log("firstWord[a] == "+firstWord[a]+" / thirdWord[c+count] == "+thirdWord[c+count]+" ")
                  if(firstWord[a]==thirdWord[c+count])
                  {

                    sameC = true;
                    break;
                  }
                  else if(c == thirdWord.length)
                  {
                    count = 0;
                      KeyWord = [];
                      SpellWord = "";
                      for(let c = 0;c<thirdWord.length;c++)
                      {
                        if(firstWord[a] == thirdWord[c])
                        {


                          sameC = true;
                          newKeyWord = true;
                          break;
                        }
                        else if(c == thirdWord.length && firstWord[a] != thirdWord[c])
                        {
                          sameC = false;

                          break;
                        }
                      }
                  }
                }
                if(sameC == true)
                {
                  break;
                }
              }

            }
          }
        }

        if(sameB == true && sameC == true)
        {
          count++;
          console.log("count = ",count)
          SpellWord+=firstWord[a];
          KeyWord.push(firstWord[a]);
          console.log("SpellWord = ",SpellWord);
          console.log("KeyWord = ",KeyWord);
        }
        if(MaxKeyWord.length < KeyWord.length)
        {
          MaxKeyWord = KeyWord;
        }

        MaxSpellWord = MaxKeyWord.join('');
        console.log("MaxSpellWord = ",MaxSpellWord)

      }
      this.result.push(this.inputValues.value1.replace(MaxSpellWord, ""));
      this.result.push(this.inputValues.value2.replace(MaxSpellWord, ""));
      this.result.push(this.inputValues.value3.replace(MaxSpellWord, ""));
      console.log("this.result = ",this.result);
  }

}
