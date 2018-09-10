import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    //featureSelected is an event created  using EventEmitter
    //this @Output() keywords expose this featureSelected Event to its parent's component
    //to other components so they can listen to this event 
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string){
        //the event is emitted when this onSelect event is triggerd 
        //this event emits a string called 'feature'
            //this string feature is passed into onSelected Event
            //and this featureSelected event emits out this string called feature
        //this event is being used in the header.component.html.
        this.featureSelected.emit(feature);
    }
}