import React,{useState} from 'react'
import './menu.css'
import break1 from './images/break1.jpg'
import break2 from './images/break2.jpg'
import break3 from './images/break3.jpg'
import break4 from './images/break4.jpg'
import lunch from './images/lunch.jpg'
import lunch2 from './images/lunch2.jpg'
import lunch3 from './images/lunch3.jpg'
import lunch4 from './images/lunch4.jpg'
import shake from './images/shake.jpg'
import shake2 from './images/shake2.jpg'
import shake3 from './images/shake3.jpg'
import shake4 from './images/shake4.jpg'



 function Menu() {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Buttermilk Pancakes',
      category: 'Breakfast',
      price: 15.99,
      img: break1,
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: 'Diner Double',
      category: 'Lunch',
      price: 13.99,
      img: lunch,
      desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: 'Godzilla Milkshake',
      category: 'Shakes',
      price: 6.99,
      img: shake,
      desc: `Ombucha Chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: 'Country Delight',
      category: 'Breakfast',
      price: 20.99,
      img: break2,
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: 'Egg Attack',
      category: 'Lunch',
      price: 22.99,
      img: lunch2,
      desc: `Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: 'Oreo Dream',
      category: 'Shakes',
      price: 18.99,
      img: shake2,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: 'Bacon Overflow',
      category: 'Breakfast',
      price: 8.99,
      img: break3,
      desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: 'American Classic',
      category: 'Lunch',
      price: 12.99,
      img: lunch3,
      desc: `On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: 'Quarantine Buddy',
      category: 'Shakes',
      price: 16.99,
      img: shake3,
      desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: 'Banana shake',
      category: 'Shakes',
      price: 18.99,
      img: shake4,
      desc: `banana milkshakes are rich in potassium, magnesium, fiber and vitamin C and are an excellent choice for a pre-workout snack or a recovery drink. They also contain healthy fats and high-quality protein, if you use the right ingredients..`,
    },
    {
      id: 11,
      title: 'Biriyani',
      category: 'Lunch',
      price: 19.99,
      img: lunch4,
      desc: `Chicken biriyani is made with chicken marinated in yogurt, chile powder, and garam and biriyani masala layered with fragrant, spiced basmati rice, and caramelized onions. Swayampurna Mishra.`,
    },
    {
      id: 12,
      title: 'Idly',
      category: 'Breakfast',
      price: 3.99,
      img: break4,
      desc: `dli or idly are a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils and rice.`,
    },
    
  ])
  const [dataRender,setRenderdata]=useState(data)
  const category=data.map(datas=>datas.category)
 console.log(category);
 const uniquecategory=[...new Set(category)]
 uniquecategory.unshift('All')
 console.log(uniquecategory)
 const handlecategory=(top)=>{
   if(top==='All'){
     setRenderdata(data)
     return
   }

   console.log('click',top)
   const filtercategory=data.filter(datas=>datas.category===top)
   setRenderdata(filtercategory)
 }

  return (
    <div>
      <div className='main '>
      <div className='heading '>
      
      <div className='menu'>Our Menu</div>
      
      <div class="underline-ourmenu mb-5"></div>
          <div className='title0  d-flex justify-content-center text-warning  '>
            {uniquecategory.map(top=>
            <div class='d-flex px-2'>
              <span onClick={()=>handlecategory(top)} className='title p-2'>{top}</span> 
              </div>)}
      </div>
      </div>
          <div className='menu1 d-flex ml-20 row m-5'>
            {
              dataRender.map(datas=><div className='menu2 d-flex  col-5 m-3'>
              <img src={datas.img} className='images' alt='image'/>
              <div  class="d-flex flex-column ps-2">
                <div class=" d-flex justify-content-between ">
               <span className='subtitle px-2 pb-2'>{datas.title}</span>
               <span className='price'>${datas.price}</span>
               </div>
            
               <div class="underline-content"></div>
               <span className='desc px-2'>{datas.desc}</span>
              
                </div>
               
               </div>
             )
            }
          </div>
          </div>
     </div>
  )
}
export default Menu;