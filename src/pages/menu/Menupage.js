import React, { Component } from "react";
import { Menu } from "antd";
import "antd/dist/antd.css";
import './style.js';
import '../../statics/iconfont/iconfont.js'
 import { IconGlobal } from '../../statics/iconfont/iconfont'

const { SubMenu } = Menu;

export default class Menupage extends Component {
   
  // submenu keys of first level
  rootSubmenuKeys = ["AAMAdmin", "AAMBuilder", "AAMClient","AAMReport","AAMDiagnostics"];

  state = {
    openKeys: ["AAMAdmin"],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  handleOnClick = (key, domEvent) => {
    console.log(key);
    console.log(domEvent);
  };

  handleOnMenuClick =(item, key, keyPath, domEvent)=>{
    console.log(item);
  };

  render() {
    return (
      <div>
        <IconGlobal />
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
          inlineIndent="16"
        >
          <SubMenu
            key="AAMAdmin"
            title={
              <span>
                 <span className="iconfont">&#xef8c;</span>
                 <span>AAM Admin</span> 
              </span>
            }
            onTitleClick={this.handleOnClick}
          >
             <SubMenu key="ApplicationConfiguration" title="Application Configuration">
                <Menu.Item key="AppCommon">Common</Menu.Item>
                <Menu.Item key="ServerManager">Server Manager</Menu.Item>
                <Menu.Item key="PlantManager">Plant Manager</Menu.Item>
                <SubMenu key="AAMAdmin_UserSecurity" title="User Security">
                    <Menu.Item key="UserGroupManager"  onClick ={ this.handleOnMenuClick } >User Group Manager</Menu.Item>
                    <Menu.Item key="UserManager">User Manager</Menu.Item>
                </SubMenu>
                <Menu.Item key="DatabaseBackup">Back Up</Menu.Item>
                <Menu.Item key="ColorConfiguration">Priority Color Config</Menu.Item>
             </SubMenu>
             <SubMenu key="ConfigurationTemplate" title="Configuration Template">
                <Menu.Item key="AAMAdmin_Common">Common</Menu.Item>
                <SubMenu key="Plants" title="Plants">
                    <SubMenu key="Scheduling" title="Scheduling">
                        <Menu.Item key="AAMAdmin_DefineWorkWeek">Define Work Week</Menu.Item>
                        <Menu.Item key="AAMAdmin_DefineShiftSchedule">Define Shift Schedule</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="AAMAdmin_AEStorageMode">A/E Storage Mode</Menu.Item>
                    <Menu.Item key="AAMAdmin_FunctionBlock">Function Block</Menu.Item>
                    <Menu.Item key="AAMAdmin_AlarmStatusTable">Alarm Status Table</Menu.Item>
                    <SubMenu key="AAMAdmin_AlarmPriority" title="Alarm Priority">
                        <SubMenu key="AAMAdmin_Rationalized" title="Rationalized">
                            <Menu.Item key="AAMAdmin_ImpactCategory">Impact Category</Menu.Item>
                            <Menu.Item key="AAMAdmin_SeverityLevel">Severity Level</Menu.Item>
                            <Menu.Item key="AAMAdmin_ResponseSpeed">Response Speed</Menu.Item>
                            <Menu.Item key="AAMAdmin_PrioritisationMatrix">Impact Priority</Menu.Item>
                        </SubMenu>
                        <SubMenu key="AAMAdmin_SubsystemMapped" title="Subsystem Mapped">
                           <Menu.Item key="AAMAdmin_AAMPriority">AAM Priority</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="Subsystem" title="Subsystem">
                    <Menu.Item key="SubsystemCreation">Subsystem Manager</Menu.Item>
                    <Menu.Item key="SubsystemAttributes">Subsystem Attributes</Menu.Item>
                </SubMenu>
             </SubMenu>
          </SubMenu>
          <SubMenu
            key="AAMBuilder"
            title={
              <span>
                {/* <AppstoreOutlined /> */}
                <span className="iconfont">&#xe603;</span>
                <span>AAM Builder</span>
              </span>
            }
          >
            <Menu.Item key="AAMBuilder_Common">Common</Menu.Item>
            <SubMenu key="AAMParameter" title="AAM Parameter">
              <Menu.Item key="AAMBuilder_DefineWorkWeek">Define Work Week</Menu.Item>
              <Menu.Item key="AAMBuilder_DefineShiftSchedule">Define Shift Schedule</Menu.Item>
              <Menu.Item key="AAMBuilder_AEStorageMode">A/E Storage Mode</Menu.Item>
              <Menu.Item key="ShiftHandoverAutoPrint">Shift Handover Auto Report</Menu.Item>
              <SubMenu key="AAMBuilder_AlarmPriority" title="Alarm Priority">
                  <SubMenu key="AAMBuilder_Rationalized" title="Rationalized">
                     <Menu.Item key="AAMBuilder_ImpactCategory">Impact Category</Menu.Item>
                     <Menu.Item key="AAMBuilder_SeverityLevel">Severity Level</Menu.Item>
                     <Menu.Item key="AAMBuilder_ResponseSpeed">Response Speed</Menu.Item>
                     <Menu.Item key="AAMBuilder_PrioritisationMatrix">Impact Priority</Menu.Item>
                  </SubMenu>
                  <SubMenu key="AAMBuilder_SubsystemMapped" title="Subsystem Mapped">
                     <Menu.Item key="AAMBuilder_AAMPriority">AAM Priority</Menu.Item>
                  </SubMenu>
              </SubMenu>
            </SubMenu>
            <SubMenu key="AAMConfig" title="AAM Config">
                <SubMenu key="AAMBuilder_UserSecurity" title="User Security">
                        <Menu.Item key="SingUserSecurity">User Group</Menu.Item>
                        <Menu.Item key="MachineControl">Machine Security</Menu.Item>
                </SubMenu>
                <SubMenu key="SubsystemManager" title="Subsystem Manager">
                        <Menu.Item key="SubsystemConfiguration">Configuration</Menu.Item>
                        <Menu.Item key="SubsystemGeneration">Generation/Deletion</Menu.Item>
                </SubMenu>
                <Menu.Item key="AAMBuilder_FunctionBlock">Function Block</Menu.Item>
                <Menu.Item key="AAMBuilder_AlarmStatusTable">Alarm Status Table</Menu.Item>
                <SubMenu key="DataManagement" title="Data Management">
                        <Menu.Item key="SubSystemTables">SubSystem Tables</Menu.Item>
                        <Menu.Item key="OperationTables">Operation Tables</Menu.Item>
               </SubMenu>
            </SubMenu>
            <SubMenu key="TagConfig" title="Tag Config">
                <Menu.Item key="OPCConfiguration">OPC Configuration</Menu.Item>
                <Menu.Item key="AssignCentumStations">Assign Centum Stations</Menu.Item>
                <Menu.Item key="TagUploader">Tag Uploader</Menu.Item>
                <Menu.Item key="HierarchyBuilder">Hierarchy Builder</Menu.Item>
            </SubMenu>
            <SubMenu key="AAMBuilder_AST" title="AST">
                <Menu.Item key="ASTConfiguration">AST Configuration</Menu.Item>
                <Menu.Item key="AutoASTConfig">Auto AST Config</Menu.Item>
                <Menu.Item key="EmailNotifyTags">Email Notify Tags</Menu.Item>
            </SubMenu>
            <SubMenu key="TripReport" title="Trip Report">
                <Menu.Item key="TripConfig">Trip Config</Menu.Item>
            </SubMenu>
            <SubMenu key="AAMMonitor" title="AAM Monitor">
                <Menu.Item key="AutoEnforcer">Auto Enforcer</Menu.Item>
                <Menu.Item key="TagMonitor">Tag Monitor</Menu.Item>
                <Menu.Item key="AuditTrail">Audit Trail</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="AAMClient"
            title={
              <span>
                {/* <SettingOutlined /> */}
                <span className="iconfont">&#xe62a;</span>
                <span>AAM Client</span>
              </span>
            }
          >
            <Menu.Item key="IAD">IAD</Menu.Item>
            <Menu.Item key="AAMClient_AST">AST</Menu.Item>
            <Menu.Item key="Report">Report</Menu.Item>
            <Menu.Item key="Advisor">Advisor</Menu.Item>
            <Menu.Item key="TagStatus">Tag Status</Menu.Item>
            <Menu.Item key="RequestViewer">Request Viewer</Menu.Item>
          </SubMenu>
          <SubMenu
            key="AAMReport"
            title={
              <span>
                {/* <SettingOutlined /> */}
                 <span className="iconfont">&#xe802;</span>
                <span>AAM Report</span>
              </span>
            }
          >
            <SubMenu key="SystemAdmin" title="System Admin">
                <SubMenu key="ReportConfiguration" title="Report Configuration">
                  <Menu.Item key="CommonParameter">Common Parameter</Menu.Item>
                  <Menu.Item key="SubsystemParameter">Alarm KPI Parameter</Menu.Item>
                  <Menu.Item key="TripBypass">Trip Bypass</Menu.Item>
                  <Menu.Item key="PIDTagList">PID Mode Change</Menu.Item>
                  <Menu.Item key="AlarmKPITarget">Alarm KPI Target</Menu.Item>
                  <Menu.Item key="AlarmTypeExclusion">Alarm Type Exclusion</Menu.Item>
                  <Menu.Item key="PreScheduled">Scheduled Reports Configuration</Menu.Item>
                  <Menu.Item key="EventAttributeConfig">Event Attribute Configuration</Menu.Item>
                  <Menu.Item key="EventCategoryConfig">Event Category Configuration</Menu.Item>
                  <Menu.Item key="ConseqAlarmConfig">Consequential Alarm</Menu.Item>
                  <Menu.Item key="PlantHierarchyTemplate">Plant Hierarchy Template</Menu.Item>
                  <Menu.Item key="ReportParameterTemplate">Report Parameter Template</Menu.Item>
                  <Menu.Item key="StandingAlarmConfiguration">Standing Alarm Configuration</Menu.Item>
                  <Menu.Item key="SuppressedAlarmConfiguration">Suppressed Alarm Configuration</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="PreGeneratedReports" title="Pre Generated Reports">
                  <Menu.Item key="PreViewScheduled">Scheduled Reports</Menu.Item>
                  <Menu.Item key="PreTrip">Trip Reports</Menu.Item>
            </SubMenu>
            <SubMenu key="TypeOfStatisticalReports" title="Type Of Statistical Reports">
                   <SubMenu key="ConfigurationStatistics" title="Configuration Statistics">
                      <Menu.Item key="TagPriAnalysis">Tag Priority Analysis</Menu.Item>
                      <Menu.Item key="AlarmSettingChange">Alarm Setting Change</Menu.Item>
                      <Menu.Item key="SuppressedAlarm">Suppressed Alarm</Menu.Item>
                      <Menu.Item key="SH-SLRangeChange">SH-SL Range Change</Menu.Item>
                      <Menu.Item key="SuspendedTag">Suspended Alarm</Menu.Item>
                      <Menu.Item key="DefeatedAlarm">Defeated Alarm</Menu.Item>
                   </SubMenu>
                   <SubMenu key="OperationStatistics" title="Operation Statistics">
                      <Menu.Item key="CalModeList">Calibration Mode Listing</Menu.Item>
                      <Menu.Item key="DigitalOutputChg">Digital Output Change</Menu.Item>
                      <Menu.Item key="TripBypasss">Trip Bypass</Menu.Item>
                   </SubMenu>
                   <SubMenu key="PIDStatistics" title="PID Statistics">
                      <Menu.Item key="PIDModeChg">PID Mode Change</Menu.Item>
                      <Menu.Item key="PIDSVInterven">PID SV Intervention</Menu.Item>
                      <Menu.Item key="PIDMVInterven">PID MV Intervention</Menu.Item>
                      <Menu.Item key="PIDTuning">PID Tuning</Menu.Item>
                   </SubMenu>
                   <SubMenu key="ProcessAlarmStatistics" title="Process Alarm Statistics">
                      <Menu.Item key="AlarmRatePriority">Alarm Rate By Priority</Menu.Item>
                      <Menu.Item key="AlarmFrequency">Alarm Frequency</Menu.Item>
                      <Menu.Item key="AlarmPeak">Alarm Peak</Menu.Item>
                      <Menu.Item key="AlarmSearch">Alarm Search</Menu.Item>
                      <Menu.Item key="AlarmFlood">Alarm Flood</Menu.Item>
                      <Menu.Item key="ChatteringAlarm">Chattering Alarm</Menu.Item>
                      <Menu.Item key="StandingAlarm">Standing Alarm</Menu.Item>
                      <Menu.Item key="AckRtnResponse">AckRtn Response</Menu.Item>
                      <Menu.Item key="ConsequentialAlarm">Consequential Alarm</Menu.Item>
                   </SubMenu>
                   <SubMenu key="SystemAlarmStatistics" title="System Alarm Statistics">
                      <Menu.Item key="FreqSystemAlarm">Frequent System Alarm</Menu.Item>
                   </SubMenu>
                   <SubMenu key="KPI" title="KPI">
                      <Menu.Item key="AlarmKPI">Alarm KPI</Menu.Item>
                      <Menu.Item key="AlarmKPISummary">Alarm KPI Summary</Menu.Item>
                   </SubMenu>
            </SubMenu>
            <Menu.Item key="EventView">Event Viewer</Menu.Item>
          </SubMenu>
          <SubMenu
            key="AAMDiagnostics"
            title={
              <span>
                {/* <SettingOutlined /> */}
                <span className="iconfont">&#xe657;</span>
                <span>AAM Diagnostics</span>
              </span>
            }
          >
            <SubMenu key="ServerInformation" title="Server Infomation">
                 <SubMenu key="S1" title="S1(localhost)">
                    <Menu.Item key="ApplicationInformation">Application Infromation</Menu.Item>
                    <Menu.Item key="ServiceSatus">Service Status</Menu.Item>
                    <Menu.Item key="ServerUsage">Server Usage</Menu.Item>
                    <Menu.Item key="OPCServers">OPC Servers</Menu.Item>
                    <Menu.Item key="WatchDog">WatchDog</Menu.Item>
                 </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
