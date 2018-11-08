import { Component } from "@angular/core"

@Component({
   selector: 'my-app',
   template:`<div>
                <img src='{{imagePath}}'/>  
                <img [src]='imagePath'/>  
                <h1>{{getFullName()}}</h1>
                <p>{{'Employee Designation = ' + employeeDesignation}}</p>
                <button [disabled] = 'isDisabled' class="colorClass italicsClass boldClass" [class]='classessToApply'> Click Me </button>
                <button [class.colorClass] ='applyBoldClass'>Click</button>
                <br/><br/>
                <button [ngClass]='addClasses()'>ngClass</button>
                <input type="text" id="name" value="vicky"/>
                <button style="color:red" [style.font-weight]="isBold ? 'bold' : 'normal'">Style Binding</button>
                <button stlye='colo:blue' [style.font-size.rem]='fontSize'>fontSize</button><br/><br/>
                <button stlye='colo:blue' [ngStyle]='addStyles()'>ngStyle</button>
                <button (click)='onClick()'>EventBinding</button> <br/>
                InputName : <input [(ngModel)]='inputName'/> <br/>
               
                You entered : {{inputName}}
                <my-employee></my-employee>
             </div>`
})
export class AppComponent {
    /* Interpolation */
    pageHeader : string = "Employee Details";
    employeeDesignation : string = "Associate";
    imagePath : String = 'https://www.cognizant.com/content/dam/cognizant_foundation/Dotcomimage/COG-Logo-White.svg';
    firstName : string = 'VigneshwarKumaran';
    lastName : string = 'Vijayaraj';
    /*method typescript */
    getFullName() : string {

        return this.firstName + ' ' +this.lastName;
    }
    /*property Binding*/
    isDisabled : boolean = false;

    /*Class Binding*/
    /*class Binding method 1 */
    classessToApply : string = 'italicsClass boldClass colorClass';

    /*class Binding method 2 */
    applyBoldClass : Boolean = true;

    /*ng class directive*/
    applyItalicsClass : Boolean = true;
    
    addClasses() {
        let classes = {
            boldClass : this.applyBoldClass,
            italicsClass: this.applyItalicsClass,

        };
        return classes;


    }

    /*CSS Style Binding */
    isBold: Boolean = true;
    fontSize : number = 18;

    /*ngStyle*/
    isItalic : Boolean = true;
    addStyles(){
        let styles={
            'font-size.px':this.fontSize,
            'font-stlye':this.isItalic ? 'italic' : 'normal',
            'font-weight' : this.isBold ? 'bold' : 'normal',

        };
        return styles;
    }

    /*Event Binding*/
    onClick():void{

        console.log('Button clicked')
    }

   
     /*Two way Data Binding */
     inputName : string = 'Kumaran';

}
