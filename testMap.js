import {HashMap} from './hashmap.js';

const testMap = new HashMap();
testMap.set("apple", "red");
testMap.set("banana", "yellow");
testMap.set("carrot", "orange");
testMap.set("dog", "brown");
testMap.set("elephant", "gray");
testMap.set("frog", "green");
testMap.set("grape", "purple");
testMap.set("hat", "black");
testMap.set("ice cream", "white");
testMap.set("jacket", "blue");
testMap.set("kite", "pink");
testMap.set("lion", "golden");
testMap.set("hat", "brown");
testMap.set("moon", "silver");
testMap.set("dog", "black");
console.log(testMap.get("dog"));
console.log(testMap.has("dog"));
console.log(testMap.remove("dog"));
console.log(testMap.has("dog"));
console.log(testMap.length());
console.log(testMap.keys());
console.log(testMap.values());
console.log(testMap.entries());
testMap.clear();
console.log(testMap.buckets);