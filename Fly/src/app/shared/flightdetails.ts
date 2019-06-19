
import { Flight } from "./flight";
export const FLIGHTNAMES= { flight: [
    {name:"Delta Air",selected:true},
    {name:"Air Asia",selected:true},
    {name:"Indigo",selected:true},
    {name:"Air india",selected:true},
    {name:"Jetblue",selected:true}
]
}
export const DEPARTURETIME={ time:[
    {time:'Before 6AM',selected:true,timing:"00:00:00-06:00:00"},
    {time:'6AM-12PM',selected:true,timing:"06:00:00-12:00:00"},
    {time:'1PM-6PM',selected:true,timing:"12:00:00-18:00:00"},
    {time:'After 6PM',selected:true,timing:"18:00:00-24:00:00"}

]}
 export const FLIGHT:Flight[] = 
   
     [
         { 
          id:10001,
          name: "Delta Air",
          departureTime: "12:05:00",
          duration: 95,
          arrivalTime: "20-04:00",
          from:"Bangalore",
          destination: "Chennai",
          price:80000,
          onward:"20190812",
          class:"economy"
          
     } ,
     
     {
        id:10002,
        name: "Air Asia",
        departureTime: "18:03:00",
        duration: 85,
        arrivalTime: "20-05:00",
        from:"Bangalore",
        destination: "Chennai",
        price:70000,
        onward:"20190812",
        class:"economy"
     }    ,
   
   {
    id:10003,
    name: "Indigo", 
    departureTime: "00:04:00",
    duration: 30,
    arrivalTime: "20-03:00",
    from:"Ahmedabad",
    destination: "Aurangabad",
    price:60000,
    onward:"20190810", 
     class:"economy"
    
       
   },
{
    id:10004,
    name: "Air india",
    departureTime: "07:05:00",
    duration: 40,
    arrivalTime: "20-02:00",
    from:"Bangalore",
    destination: "Ahmedabad",
    price:50000,
    onward:"20190710",
    class:"economy"
},
{
    id:10005,
    name: "Emirates",
    departureTime: "30-01:00",
    duration: 50,
    arrivalTime: "20-06:00",
    from:"Bangalore",
    destination: "Chennai",
    price:40000,
    onward:"20190812",
    class:"business"
       
},
{
    id:10006,
    name: "Jetblue",
    departureTime: "13:06:00",
    duration: 60,
    arrivalTime: "20-07:00",
    from:"Bangalore",
    destination: "Chennai",
    price:30000,
    onward:"20190812",
    class:"business"
},
{
    id:10007,
    name: "Jetstar",
    departureTime: "05:07:00",
    duration: 70,
    arrivalTime: "20-08:00",
    from:"Bangalore",
    destination: "Chennai",
    price:20000,
    onward:"20190812",
    class:"business"
},
{
    id:10008,
    name: "Dutchbird",
    departureTime: "09:09:00",
    duration: 80,
    arrivalTime: "20-09:00",
    from:"Bangalore",
    destination: "Chennai",
    price:10000,
    onward:"20190812",class:"business"
 },
 {
    id:10009,
    name: "Jetstar",
    departureTime: "23:07:00",
    duration: 70,
    arrivalTime: "20-08:00",
    from:"Chennai",
    destination: "Bangalore",
    price:20000,
    onward:"20190813",
    class:"business"
},]