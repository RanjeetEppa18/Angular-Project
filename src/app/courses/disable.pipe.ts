import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'disable'
})
export class DisablePipe implements PipeTransform{
    transform(value: boolean,student: number,method: string) {
        if(method == 'minus') {return student == 0 && true}
        else if(method == 'route') {return student == undefined && true}
        else {return student >29 && true}
        
        throw new Error("Method not implemented.");
        
    }
    
}