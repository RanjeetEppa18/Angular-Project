import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'disableroute'
})
export class DisableRoutePipe implements PipeTransform{
    transform(value: boolean,route: string) {
        console.log(route)
        if(!route) return true
        return false
        throw new Error("Method not implemented.");
        
    }
    
}