<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <ul class="layout-nav cl">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>Item 1
            </MenuItem>
          </ul>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
              <MenuItem name="2-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
              <MenuItem name="3-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>Item 4
              </template>
              <MenuItem name="4-1">Option 1</MenuItem>
              <MenuItem name="4-2">Option 2</MenuItem>
            </Submenu>
            <Submenu name="5">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>Item 5
              </template>
              <MenuItem name="5-1">Option 1</MenuItem>
              <MenuItem name="5-2">Option 2</MenuItem>
              <MenuItem name="5-3">Option 1</MenuItem>
              <MenuItem name="5-4">Option 2</MenuItem>
              <MenuItem name="5-5">Option 1</MenuItem>
              <MenuItem name="5-6">Option 2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">Content</Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang='less'>
.layout {
  position: relative;
  overflow: hidden;
  height: 100%;
  .ivu-layout {
    height: 100%;
  }
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.ivu-layout-header {
  padding: 0;
  .layout-nav {
    .ivu-menu-item {
      float: right;
    }
  }
}
.ivu-menu {
  height: 100%;
}
</style>