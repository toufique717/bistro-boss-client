// import Coverimage from "../shared/Coverimage";
// import bannerimage from '../assets/home/soup.jpg'
// import { useState } from "react";



 
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import Foodcard from "../shared/Foodcard";
// import usemenu from "../hooks/usemenu";
// import Tabloading from "./Tabloading";
// import { useParams } from "react-router-dom";
 

// const Order = () => {

//   const {category} =useParams();
//   console.log(category);

//     const[tabindex,settabindex] =useState(0);

//      const [menu] = usemenu();
//     const offered = menu.filter(item=>item.category === 'offered');
//     const desert = menu.filter(item=>item.category === 'dessert');
//     const soup = menu.filter(item=>item.category === 'soup');
//     const salad = menu.filter(item=>item.category === 'salad');
//     const pizza = menu.filter(item=>item.category === 'pizza');
     
//     return (
//         <div>
//              <Coverimage image={bannerimage} title1={'order food'} title2={'Ordering food has become easier with online apps and delivery services. People can choose from a wide variety of cuisines and enjoy meals at home with just a few clicks. It saves time, offers convenience, and satisfies cravings quickly.'}></Coverimage>


//              <div className="py-4">

//                 <Tabs defaultIndex={tabindex} onSelect={(index) =>  settabindex(index)}>
//   <TabList>
//     <Tab>Salad</Tab>
//     <Tab>Pizza</Tab>
//       <Tab>Soup</Tab>
//         <Tab>Dessert</Tab>
//           <Tab>Drinks</Tab>
//   </TabList>
//   <TabPanel>
//     <Tabloading item={desert}>

//     </Tabloading>
//   </TabPanel>
//   <TabPanel>
//     <Tabloading item={offered}>

//     </Tabloading>
//   </TabPanel>
//   <TabPanel>
//     <Tabloading item={soup}>

//     </Tabloading>
//   </TabPanel>
//   <TabPanel>
//     <Tabloading item={salad}>

//     </Tabloading>
//   </TabPanel>
//   <TabPanel>

//     <Tabloading item={pizza}>

//     </Tabloading>
//   </TabPanel>
// </Tabs>
                 
//              </div>


              
//         </div>



         
//     );
// };

// export default Order;

 import Coverimage from "../shared/Coverimage";
import bannerimage from '../assets/home/soup.jpg'
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Foodcard from "../shared/Foodcard";
import usemenu from "../hooks/usemenu";
import Tabloading from "./Tabloading";
import { useParams, useNavigate } from "react-router-dom"; // ✅ CHANGED: added useNavigate

const Order = () => {

  const { category } = useParams();
  const navigate = useNavigate(); // ✅ CHANGED: for dynamic tab navigation
  console.log("Category from URL:", category);

  const [menu] = usemenu();
  const offered = menu.filter(item => item.category === 'offered');
  const desert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');

  // ✅ CHANGED: dynamic default tab based on category
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const initialIndex = category ? categories.indexOf(category.toLowerCase()) : 0;

  const [tabindex, setTabIndex] = useState(initialIndex);

  return (
    <div>
      <Coverimage
        image={bannerimage}
        title1={'Order Food'}
        title2={'Ordering food has become easier with online apps and delivery services. People can choose from a wide variety of cuisines and enjoy meals at home with just a few clicks. It saves time, offers convenience, and satisfies cravings quickly.'}
      />

      <div className="py-4">
        <Tabs
          defaultIndex={tabindex}
          onSelect={(index) => {
            setTabIndex(index);
            // ✅ CHANGED: update URL when tab changes
            navigate(`/order/${categories[index]}`);
          }}
        >
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <Tabloading item={salad}> </Tabloading>
          </TabPanel>
          <TabPanel>
            {/* <Tabloading item={pizza} /> */}

            <Tabloading item={pizza}></Tabloading>
          </TabPanel>
          <TabPanel>
            {/* <Tabloading item={soup} /> */}
            <Tabloading item={soup}></Tabloading>
          </TabPanel>
          <TabPanel>
            {/* <Tabloading item={desert} /> */}

            <Tabloading item={desert}></Tabloading>
          </TabPanel>
          <TabPanel>
            {/* <Tabloading item={offered} /> */}

            <Tabloading item={offered}></Tabloading>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
