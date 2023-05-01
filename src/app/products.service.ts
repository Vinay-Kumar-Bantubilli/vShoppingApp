import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products = [

    {id:1, name:'Samsung', category:'Mobiles & Accessories',price:1,color:'black', image:'../../assets/sam1.jpg'},
    {id:2, name:'Samsung', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/sam2.jpg'},
    {id:3, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids.jpg'},
  
    {id:4, name:'Fashion', category:'Fashion',price:12345,color:'black', image:'../../assets/fashion1.jpg'},
    {id:5, name:'Fashion', category:'Fashion',price:12345,color:'black', image:'../../assets/fashion2.jpg'},
    {id:6, name:'washing', category:'Home & Kitchen',price:12345,color:'black', image:'../../assets/sam w2.jpg'},
    {id:7, name:'washing', category:'Home & Kitchen',price:12345,color:'black', image:'../../assets/sam w3.jpg'},
    {id:8, name:'washing', category:'Home & Kitchen',price:12345,color:'black', image:'../../assets/sam w4.jpg'},

    {id:9, name:'Samsung', category:'Mobiles & Accessories',price:1,color:'black', image:'../../assets/sam1.jpg'},
    {id:10, name:'Samsung', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/sam2.jpg'},
    {id:11, name:'Samsung', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/sam3.jpg'},
    
    {id:12, name:'laptop', category:'Computer',price:12345,color:'black', image:'../../assets/laptop1.jpg'},
    {id:13, name:'laptop', category:'Computer',price:12345,color:'black', image:'../../assets/laptop2.jpg'},
    {id:14, name:'laptop', category:'Computer',price:12345,color:'black', image:'../../assets/laptop3.jpg'},
    
    {id:15, name:'Samsung', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/sam4.jpg'},
    {id:16, name:'Samsung', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/sam5.jpg'},
    {id:17, name:'Samsung', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/sam6.jpg'},

    // apple MObiles
    {id:18, name:"apple", category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/apple1.jpg'},
    {id:19, name:'Apple', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/apple2.jpg'},
    {id:20, name:'Apple', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/apple3.jpg'},
    
    {id:21, name:'washing', category:'Home & Kitchen',price:12345,color:'black', image:'../../assets/sam w2.jpg'},
    {id:22, name:'washing', category:'Home & Kitchen',price:12345,color:'black', image:'../../assets/sam w3.jpg'},
    {id:23, name:'washing', category:'Home & Kitchen',price:12345,color:'black', image:'../../assets/sam w4.jpg'},
    
    {id:24, name:'Apple', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/apple4.jpg'},
    {id:25, name:'Apple', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/apple5.jpg'},
    {id:26, name:'Apple', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/apple6.jpg'},
    
    {id:27, name:'washing', category:'Home & Kitchen',price:12345 ,color:'black', image:'../../assets/sam w2.jpg'},
    {id:28, name:'washing', category:'Home & Kitchen',price:12345 ,color:'black', image:'../../assets/sam w3.jpg'},
    {id:29, name:'washing', category:'Home & Kitchen',price:12345 ,color:'black', image:'../../assets/sam w4.jpg'},
   
    {id:30, name:'Apple', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/apple7.jpg'},
    {id:31, name:'Apple', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/apple8.jpg'},

    // mi MObiles
    {id:32, name:'mi', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/mi1.jpg'},
    {id:33, name:'mi', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/mi2.jpg'},
    {id:34, name:'Oneplus', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/op1.jpg'},
    {id:35, name:'Oneplus', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/op2.jpg'},
    {id:36, name:'oppo', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/opp1.jpg'},
    {id:37, name:'oppo', category:'Mobiles & Accessories',price:12345,color:'black', image:'../../assets/oppo2.jpg'},
    {id:38, name:'washing', category:'Home & Kitchen',price:12345 ,color:'black', image:'../../assets/sam w2.jpg'},
    {id:39, name:'washing', category:'Home & Kitchen',price:12345 ,color:'black', image:'../../assets/sam w3.jpg'},
    {id:40, name:'washing', category:'Home & Kitchen',price:12345 ,color:'black', image:'../../assets/sam w4.jpg'}, 
    {id:41, name:'oppo', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/oppo3.jpg'},
    {id:43, name:'oppo', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/oppo4.jpg'},
    {id:44, name:'oppo', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/oppo8.jpg'},
    {id:45, name:'oppo', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/oppo9.jpg'},
    {id:46, name:'poco', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/poco4.jpg'},
    {id:47, name:'poco', category:'Mobiles & Accessories',price:12345 ,color:'black', image:'../../assets/poco5.jpg'},
    {id:48, name:'washing', category:'Home & Kitchen',price:12345 ,color:'black', image:'../../assets/sam w1.jpg'},
    {id:49, name:'washing', category:'Home & Kitchen',price:12345 ,color:'black', image:'../../assets/sam w3.jpg'},
    {id:50, name:'washing', category:'Home & Kitchen',price:12345 ,color:'black', image:'../../assets/sam w4.jpg'},
    {id:51, name:'laptop', category:'Computer',price:12345 ,color:'black', image:'../../assets/laptop1.jpg'},
    {id:52, name:'laptop', category:'Computer',price:12345 ,color:'black', image:'../../assets/laptop2.jpg'},
    {id:53, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/headphones2.jpg'},
    {id:54, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/headphones3.jpg'},
    {id:55, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/headphones4.jpg'},
    {id:56, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/earphones1.jpg'},
    {id:57, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/earphones2.jpg'},
    {id:58, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/earphones3.jpg'},
    {id:59, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/earphones4.jpg'},
    {id:60, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/earphones5.jpg'},
    {id:61, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/earphones6.jpg'},
    {id:62, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/earphones7.jpg'},
    {id:63, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/earphones8.jpg'},
    {id:64, name:'headphones', category:'Electronics',price:12345 ,color:'black', image:'../../assets/earphones9.jpg'},

    //women
    {id:65, name:'women', category:'Women',price:12345 ,color:'black', image:'../../assets/ws1.jpg'},
    {id:66, name:'women', category:'Women',price:12345 ,color:'black', image:'../../assets/ws2.jpg'},
    {id:67, name:'women', category:'Women',price:12345 ,color:'black', image:'../../assets/ws3.jpg'},
    {id:68, name:'women', category:'Women',price:12345 ,color:'black', image:'../../assets/ws4.jpg'},
    {id:69, name:'women', category:'Women',price:12345 ,color:'black', image:'../../assets/ws5.jpg'},
    {id:70, name:'women', category:'Women',price:12345 ,color:'black', image:'../../assets/ws6.jpg'},
    {id:71, name:'women', category:'Women',price:12345 ,color:'black', image:'../../assets/ws7.jpg'},
    {id:72, name:'women', category:'Women',price:12345 ,color:'black', image:'../../assets/ws8.jpg'},
    {id:73, name:'women', category:'Women',price:12345 ,color:'black', image:'../../assets/ws9.jpg'},

    //men
    {id:74, name:'Men', category:'Men',price:12345 ,color:'black', image:'../../assets/men1.jpg'},
    {id:75, name:'Men', category:'Men',price:12345 ,color:'black', image:'../../assets/men2.jpg'},
    {id:76, name:'Men', category:'Men',price:12345 ,color:'black', image:'../../assets/men3.jpg'},
    {id:77, name:'Men', category:'Men',price:12345 ,color:'black', image:'../../assets/men4.jpg'},
    {id:78, name:'Men', category:'Men',price:12345 ,color:'black', image:'../../assets/men5.jpg'},
    {id:79, name:'Men', category:'Men',price:12345 ,color:'black', image:'../../assets/men6.jpg'},
    {id:80, name:'Men', category:'Men',price:12345 ,color:'black', image:'../../assets/men7.jpg'},
    {id:81, name:'Men', category:'Men',price:12345 ,color:'black', image:'../../assets/men8.jpg'},
    {id:82, name:'Men', category:'Men',price:12345 ,color:'black', image:'../../assets/men9.jpg'},


    //kids
    {id:83, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids.jpg'},
    {id:84, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids1.jpg'},
    {id:85, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids2.jpg'},
    {id:86, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids3.jpg'},
    {id:87, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids4.jpg'},
    {id:88, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids5.jpg'},
    {id:89, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids6.jpg'},
    {id:90, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids7.jpg'},
    {id:91, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids8.jpg'},
    {id:92, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids9.jpg'},
    {id:93, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids10.jpg'},
    {id:94, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids11.jpg'},
    {id:95, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids12.jpg'},
    {id:96, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids13.jpg'},
    {id:97, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids14.jpg'},
    {id:98, name:'kids', category:'Kids',price:12345 ,color:'black', image:'../../assets/kids15.jpg'},


 
    //Fashion
    {id:99, name:'Fashion', category:'Fashion',price:12345 ,color:'black', image:'../../assets/fashion1.jpg'},
    {id:100, name:'Fashion', category:'Fashion',price:12345 ,color:'black', image:'../../assets/fashion2.jpg'},
    {id:101, name:'Fashion', category:'Fashion',price:12345 ,color:'black', image:'../../assets/fashion3.jpg'},
    {id:102, name:'Fashion', category:'Fashion',price:12345 ,color:'black', image:'../../assets/fashion4.jpg'},
    {id:103, name:'Fashion', category:'Fashion',price:12345 ,color:'black', image:'../../assets/fashion5.jpg'},
    {id:104, name:'Fashion', category:'Fashion',price:12345 ,color:'black', image:'../../assets/fashion6.jpg'},
    {id:105, name:'Fashion', category:'Fashion',price:12345 ,color:'black', image:'../../assets/fashion7.jpg'},
    {id:106, name:'Fashion', category:'Fashion',price:12345 ,color:'black', image:'../../assets/fashion8.jpg'},
    {id:107, name:'Fashion', category:'Fashion',price:12345 ,color:'black', image:'../../assets/fashion9.jpg'},
    {id:108, name:'Fashion', category:'Fashion',price:12345 ,color:'black', image:'../../assets/fashion10.jpg'},

    //garder
    { category:'Garden', image:'../../assets/garden big.jpg'},
    { category:'Garden', image:'../../assets/garden offer.gif'},
    {id:109, name:'Garden', category:'Garden',price:12345, color:'black', image:'../../assets/garden1.jpg'},
    {id:110, name:'Garden', category:'Garden',price:12345, color:'black', image:'../../assets/garden2.jpg'},
    {id:111, name:'Garden', category:'Garden',price:12345, color:'black', image:'../../assets/garden3.jpg'},
    {id:112, name:'Garden', category:'Garden',price:12345, color:'black', image:'../../assets/garden4.jpg'},
    {id:113, name:'Garden', category:'Garden',price:12345, color:'black', image:'../../assets/garden5.jpg'},
    {id:114, name:'Garden', category:'Garden',price:12345, color:'black', image:'../../assets/garden6.jpg'},
    {id:115, name:'Garden', category:'Garden',price:12345, color:'black', image:'../../assets/garden7.jpg'},
    {id:116, name:'Garden', category:'Garden',price:12345, color:'black', image:'../../assets/garden8.jpg'},
    {id:117, name:'Garden', category:'Garden',price:12345, color:'black', image:'../../assets/garden9.jpg'},
   
  ]
}
