import React, {Component} from 'react';
import {TabContent, TabPane, Nav, NavItem, NavLink, Progress, Label, Input} from 'reactstrap';
import classnames from 'classnames';

class Aside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <aside className="aside-menu">
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                     onClick={() => { this.toggle('1'); }}>
              <i className="icon-list"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                     onClick={() => { this.toggle('2'); }}>
              <i className="icon-speech"></i>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                     onClick={() => { this.toggle('3'); }}>
              <i className="icon-settings"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <div className="callout m-0 py-2 text-muted text-center bg-light text-uppercase">
              <small><b>Today</b></small>
            </div>
            <hr className="transparent mx-3 my-0"/>
            {/*<div className="callout callout-warning m-0 py-3">*/}
              {/*<div className="avatar float-right">*/}
                {/*<img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
              {/*</div>*/}
              {/*<div>Meeting with <strong>Lucas</strong></div>*/}
              {/*<small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 1 - 3pm</small>*/}
              {/*<small className="text-muted"><i className="icon-location-pin"></i>&nbsp; Palo Alto, CA</small>*/}
            {/*</div>*/}
            <hr className="mx-3 my-0"/>
            {/*<div className="callout callout-info m-0 py-3">*/}
              {/*<div className="avatar float-right">*/}
                {/*<img src={'img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
              {/*</div>*/}
              {/*<div>Skype with <strong>Megan</strong></div>*/}
              {/*<small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 4 - 5pm</small>*/}
              {/*<small className="text-muted"><i className="icon-social-skype"></i>&nbsp; On-line</small>*/}
            {/*</div>*/}
            <hr className="transparent mx-3 my-0"/>
            <div className="callout m-0 py-2 text-muted text-center bg-light text-uppercase">
              <small><b>Tomorrow</b></small>
            </div>
            <hr className="transparent mx-3 my-0"/>
            {/*<div className="callout callout-danger m-0 py-3">*/}
              {/*<div>New UI Project - <strong>deadline</strong></div>*/}
              {/*<small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 10 - 11pm</small>*/}
              {/*<small className="text-muted"><i className="icon-home"></i>&nbsp; creativeLabs HQ</small>*/}
              {/*<div className="avatars-stack mt-2">*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<hr className="mx-3 my-0"/>*/}
            {/*<div className="callout callout-success m-0 py-3">*/}
              {/*<div><strong>#10 Startups.Garden</strong> Meetup</div>*/}
              {/*<small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 1 - 3pm</small>*/}
              {/*<small className="text-muted"><i className="icon-location-pin"></i>&nbsp; Palo Alto, CA</small>*/}
            {/*</div>*/}
            {/*<hr className="mx-3 my-0"/>*/}
            {/*<div className="callout callout-primary m-0 py-3">*/}
              {/*<div><strong>Team meeting</strong></div>*/}
              {/*<small className="text-muted mr-3"><i className="icon-calendar"></i>&nbsp; 4 - 6pm</small>*/}
              {/*<small className="text-muted"><i className="icon-home"></i>&nbsp; creativeLabs HQ</small>*/}
              {/*<div className="avatars-stack mt-2">*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/3.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/5.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
                {/*<div className="avatar avatar-xs">*/}
                  {/*<img src={'img/avatars/8.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com"/>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
            <hr className="mx-3 my-0"/>
          </TabPane>
          <TabPane tabId="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
              </div>
            </div>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
              </div>
            </div>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
              </div>
            </div>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
              </div>
            </div>
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
              </div>
            </div>
          </TabPane>
          <TabPane tabId="3" className="p-3">
            <h6>Settings</h6>
          </TabPane>
        </TabContent>
      </aside>
    )
  }
}

export default Aside;
