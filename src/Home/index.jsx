import React, { memo, useState } from 'react'
import {  useDispatch, useSelector } from "react-redux";
import { TabBar } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

import cookBooks from "../assets/images/cookbook.png";
import cookBooksActive from "../assets/images/cookbook-active.png";

import menu from "../assets/images/menu.png";
import menuActive from "../assets/images/menu-active.png";

import location from "../assets/images/location.png";
import locationActive from "../assets/images/location-active.png";

import more from "../assets/images/more.png";
import moreActive from "../assets/images/more-active.png";

import CookBook from "./cookbook(菜谱)/index";
import Category from "./category(分类)/index";
import Map from "./map/map";
import More from "./more(更多)/more";

import { changeSelectedTabAction } from "./category(分类)/store/createAction";
import { animate } from '../hoc/animate'


const  Home = memo(function(props) {

  const state = useSelector(state => {
    return {
      selected: state.getIn(['cateReducer', 'routeInfo', 'selected']),
      checked: state.getIn(['HomeReducer', 'checked']),
    }
  })
  const [tabs, setTabs] = useState({
    selectedTab: state.selected,
    hidden: false,
    fullScreen: true,
  })


  const dispatch = useDispatch();
  

  const tabItems = [
    <TabBar.Item
      title="美食大全"
      key="Life"
      icon={
        <div
          style={{
            width: "26px",
            height: "26px",
            background: `url(${cookBooks}) center center /  26px 26px no-repeat`,
          }}
        />
      }
      selectedIcon={
        <div
          style={{
            width: "26px",
            height: "26px",
            background: `url(${cookBooksActive}) center center /  26px 26px no-repeat`,
          }}
        />
      }
      selected={tabs.selectedTab === "cookbooks"}
      onPress={() => {
        
        setTabs({
          selectedTab: "cookbooks",
        })

        dispatch(changeSelectedTabAction('cookbooks'));
      }}
    >
      <CookBook />
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div
          style={{
            width: "22px",
            height: "22px",
            background: `url(${menu}) center center /  21px 21px no-repeat`,
          }}
        />
      }
      selectedIcon={
        <div
          style={{
            width: "22px",
            height: "22px",
            background: `url(${menuActive}) center center /  21px 21px no-repeat`,
          }}
        />
      }
      title="分类"
      key="category"
      selected={tabs.selectedTab === "category"}
      onPress={() => {
        
        setTabs({
          selectedTab: "category",
        })

        dispatch(changeSelectedTabAction('category'));
        
      }}
    >
      <Category />
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div
          style={{
            width: "26px",
            height: "26px",
            background: `url(${location}) center center /  26px 26px no-repeat`,
          }}
        />
      }
      selectedIcon={
        <div
          style={{
            width: "26px",
            height: "26px",
            background: `url(${locationActive}) center center /  26px 26px no-repeat`,
          }}
        />
      }
      title="美食地图"
      key="map"
      selected={tabs.selectedTab === "map"}
      onPress={() => {

        setTabs({
          selectedTab: "map",
        })
      }}
    >
      <Map />
    </TabBar.Item>,
    <TabBar.Item
      icon={{
        uri: more,
      }}
      selectedIcon={{
        uri: moreActive,
      }}
      title="更多"
      key="more"
      selected={tabs.selectedTab === "more"}
      onPress={() => {

        setTabs({
          selectedTab: "more",
        })

      }}
    >
      <More />
    </TabBar.Item>,
  ];

  return (
    <div
      style={{ position: "fixed", height: "100%", width: "100%", top: 0 }
      }
    >
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#000"
        barTintColor="white"
        hidden={tabs.hidden}
        prerenderingSiblingsNumber={Infinity}
      >
        {
          state.checked ?
            tabItems.map(item => item)
            : tabItems.filter((item, index) => index !== 2)
        }
      </TabBar>
    </div>
  );
})


export default animate(Home);
