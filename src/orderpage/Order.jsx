import Coverimage from "../shared/Coverimage";
import bannerimage from '../assets/home/soup.jpg'
import { useState } from "react";



 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Foodcard from "../shared/Foodcard";
import usemenu from "../hooks/usemenu";
 

const Order = () => {

    const[tabindex,settabindex] =useState(0);

     const [menu] = usemenu();
    const offered = menu.filter(item=>item.category === 'offered');
    const desert = menu.filter(item=>item.category === 'dessert');
    const soup = menu.filter(item=>item.category === 'soup');
    const salad = menu.filter(item=>item.category === 'salad');
    const pizza = menu.filter(item=>item.category === 'pizza');
     
    return (
        <div>
             <Coverimage image={bannerimage} title1={'order food'} title2={'Ordering food has become easier with online apps and delivery services. People can choose from a wide variety of cuisines and enjoy meals at home with just a few clicks. It saves time, offers convenience, and satisfies cravings quickly.'}></Coverimage>


             <div className="py-4">

                <Tabs defaultIndex={tabindex} onSelect={(index) =>  settabindex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
        <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
  </TabList>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
  <TabPanel></TabPanel>
</Tabs>
                 
             </div>


             <Foodcard></Foodcard>
        </div>



         
    );
};

export default Order;