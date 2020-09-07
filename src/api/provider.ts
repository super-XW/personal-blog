import { provide, inject } from 'vue'

export default {
    setup() {
        provide("xx",1123);
        function testFn(url:string) {
            console.log(url)
        }
        provide("testFn",testFn);
    }
    
}