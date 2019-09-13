

import React from 'react'
import {render} from 'react-dom';
import PushMenu from 'react-push-menu';
import {FaBars, FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import 'react-push-menu/styles/component.css';

import Link from './LinkComponent';

class Page extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      menu: {
        header: 'All Categories',
        children: [
          {
            name: 'Main Menu',
            id: 1,
            link: '/mainmenu',
            children: [
              {name: 'Dashboard', id: 11, link: null, children: []},
              {
                name: 'Health Plan',
                id: 12,
                link:
                '/mainmenu/healthPlan',
                children: [
                  {name: 'Claim', id: 121, link: null, children: []},
                  {name: 'Usage', id: 122, link: null, children: []},
                  {name: 'Plan', id: 123, link: null, children: []},
                  {name: 'ID Card', id: 124, link: null, children: []},
                ]
              },
              {
                name: 'Health Plan',
                id: 12,
                link:
                '/mainmenu/healthPlan',
                children: [
                  {name: 'Claim', id: 121, link: null, children: []},
                  {name: 'Usage', id: 122, link: null, children: []},
                  {name: 'Plan', id: 123, link: null, children: []},
                  {name: 'ID Card', id: 124, link: null, children: []},
                ]
              },
              {
                name: 'Pharmacy',
                id: 12,
                link:
                '/mainmenu/pharmacy',
                children: [
                  {name: 'Claim', id: 121, link: null, children: []},
                  {name: 'Usage', id: 122, link: null, children: []},
                  {name: 'Plan', id: 123, link: null, children: []},
                  {name: 'ID Card', id: 124, link: null, children: []},
                ]
              }
            ]
          },
          {name: 'Find Care', id: 2, link: '/services', children: []},
          {name: 'Appointment', id: 3, link: '/people', children: []},
          {name: 'Patient Profile', id: 4, link: '/careers', children: []},
          {name: 'Settings', id: 5, link: null, children: []},
        ]
      }
    }
  }
  render(){
    return (
      <PushMenu
        backIcon={<FaChevronLeft />}
        expanderComponent={FaChevronRight}
        onNodeClick={(e, {menu, node}) => {
          console.log(node)
          menu.tools.reset();
        }}
        //linkComponent={Link}
        isOpen={false}
        nodes={this.state.menu}
        type={'cover'}
        propMap={{url: 'link'}}>

        <div className="rpm-trigger" id="rpm-trigger" >
          <FaBars />
        </div>

      </PushMenu>
    );
  }
}

let rootElement = document.getElementById('root');

export default Page;