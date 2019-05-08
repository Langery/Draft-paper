var Obj = {}
Object.defineProperty(Obj, 'test', {
  get: () => { console.log('get被调用了') },
  set: () => { console.log('set被调用了') }
})
Obj.test  // get被调用了
Obj.test = 'abcd'  // set被调用了