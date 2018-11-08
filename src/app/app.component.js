"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        /* Interpolation */
        this.pageHeader = "Employee Details";
        this.employeeDesignation = "Associate";
        this.imagePath = 'https://www.cognizant.com/content/dam/cognizant_foundation/Dotcomimage/COG-Logo-White.svg';
        this.firstName = 'VigneshwarKumaran';
        this.lastName = 'Vijayaraj';
        /*property Binding*/
        this.isDisabled = false;
        /*Class Binding*/
        /*class Binding method 1 */
        this.classessToApply = 'italicsClass boldClass colorClass';
        /*class Binding method 2 */
        this.applyBoldClass = true;
        /*ng class directive*/
        this.applyItalicsClass = true;
        /*CSS Style Binding */
        this.isBold = true;
        this.fontSize = 18;
        /*ngStyle*/
        this.isItalic = true;
        /*Two way Data Binding */
        this.inputName = 'Kumaran';
    }
    /*method typescript */
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicsClass: this.applyItalicsClass,
        };
        return classes;
    };
    AppComponent.prototype.addStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-stlye': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal',
        };
        return styles;
    };
    /*Event Binding*/
    AppComponent.prototype.onClick = function () {
        console.log('Button clicked');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div>\n                <img src='{{imagePath}}'/>  \n                <img [src]='imagePath'/>  \n                <h1>{{getFullName()}}</h1>\n                <p>{{'Employee Designation = ' + employeeDesignation}}</p>\n                <button [disabled] = 'isDisabled' class=\"colorClass italicsClass boldClass\" [class]='classessToApply'> Click Me </button>\n                <button [class.colorClass] ='applyBoldClass'>Click</button>\n                <br/><br/>\n                <button [ngClass]='addClasses()'>ngClass</button>\n                <input type=\"text\" id=\"name\" value=\"vicky\"/>\n                <button style=\"color:red\" [style.font-weight]=\"isBold ? 'bold' : 'normal'\">Style Binding</button>\n                <button stlye='colo:blue' [style.font-size.rem]='fontSize'>fontSize</button><br/><br/>\n                <button stlye='colo:blue' [ngStyle]='addStyles()'>ngStyle</button>\n                <button (click)='onClick()'>EventBinding</button> <br/>\n                InputName : <input [(ngModel)]='inputName'/> <br/>\n               \n                You entered : {{inputName}}\n                <my-employee></my-employee>\n             </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map