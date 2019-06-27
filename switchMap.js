const rxjs = require('rxjs')

var ob1 = rxjs.Observable
var ob2 = rxjs.observable


ob1.of(1).subscribe(
        v => ob2.subscribe(console.log('hello')
        )
    )