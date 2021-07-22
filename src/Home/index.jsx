import React, { PureComponent } from "react";
import { connect } from "react-redux";
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


class Home extends PureComponent {
  state = {
    selectedTab: this.props.selected,
    hidden: false,
    fullScreen: true,
  };

  
  render() {
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
        selected={this.state.selectedTab === "cookbooks"}
        onPress={() => {
          this.setState({
            selectedTab: "cookbooks",
          });
          this.props.changeSelectedTab('cookbooks')
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
        selected={this.state.selectedTab === "category"}
        onPress={() => {
          this.setState({
            selectedTab: "category",
          })
          
          this.props.changeSelectedTab('category')

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
        selected={this.state.selectedTab === "map"}
        onPress={() => {
          this.setState({
            selectedTab: "map",
          });
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
        selected={this.state.selectedTab === "more"}
        onPress={() => {
          this.setState({
            selectedTab: "more",
          });
        }}
      >
        <More />
      </TabBar.Item>,
    ];

    // console.log(this.props.checked);
    // console.log(this.props.selected);
    return (
      <div
        style={
          this.state.fullScreen
            ? { position: "fixed", height: "100%", width: "100%", top: 0 }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={Infinity}
        >
          {
            this.props.checked ? 
            tabItems.map(item => item)
            : tabItems.filter((item, index) => index !== 2)
          }
        </TabBar>
      </div>
    );
  }
}

const mapStateToProps = state => {
    
  return {
      checked: state.HomeReducer.checked,
      selected: state.cateReducer.routeInfo.selected,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      changeSelectedTab(selected) {
        dispatch(changeSelectedTabAction(selected))
      }
  
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
