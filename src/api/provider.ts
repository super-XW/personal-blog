import { provide, inject } from 'vue'

import { testName,testName1 } from "./sliderProvider/index"

import $http from "../service/request"
export default {
    mounted() {
        console.log()
    },
    setup() {
        provide("xx", 1123);
        provide("testFn", testFn);
        testName("xw" + 777777);
        testName1("xw" + 88888888);
        
        function testFn(url: string) {
            console.log(url)
        }
    }

}