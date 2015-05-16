// ==UserScript==
// @name         MiWiFi in English
// @namespace    http://saiful.im/
// @version      0.1
// @description  MiWiFi Chinese To English Translation With JS
// @author       Saiful Islam
// @match        http://*/*
// @grant        none
// ==/UserScript==
function transl(){
console.log("Translating...");
var str = document.documentElement.innerHTML;
var str = replaceAll("体检过程大约需要几秒至几分钟不等(视硬盘情况而定)", " The examination process takes about a few seconds to several minutes (depending on the hard disk case may be)", str);
var str = replaceAll("体检过程中涉及到硬盘的功能将暂时无法使用(插件、文件读写等)", " The examination process functions related to the hard disk will be temporarily unavailable (plug-ins, document literacy, etc.)", str);
var str = replaceAll("恢复出厂设置", "Restore factory settings", str);
var str = replaceAll("经过检测，建议使用", "After testing, it is recommended ", str);
var str = replaceAll("方式(系统自动分配IP地址)", "Mode (the system automatically assign IP addresses)", str);
var str = replaceAll("清除硬盘中的全部用户数据，例如视频或图片", "Remove the hard drive of all user data, such as video or picture", str);
var str = replaceAll("建议正在使用SSH连接路由器的用户不要开启此功能", "We recommend using SSH to connect users to the router to open this feature", str);
var str = replaceAll("开启此功能后小米路由器将在硬盘非工作状态下使其进入休眠状态，以延长硬盘使用寿命。", "Open this feature MiWiFi router will make it hard to sleep at a non-working state to extend drive life.", str);
var str = replaceAll("格式化硬盘", "Format hard disk", str);
var str = replaceAll("你的浏览器禁止了Javascript功能，会造成无法使用系统进行路由器管理，请开启。", "Your browser disabled Javascript function will cause the system can not be used for router management.", str);
var str = replaceAll("小米路由器", "MiWiFi Router", str);
var str = replaceAll("路由状态", "Routing status", str);
var str = replaceAll("存储状态", "Storage status", str);
var str = replaceAll("常用设置", "Common Settings", str);
var str = replaceAll("高级设置", "Advanced Settings", str);
var str = replaceAll("终端设备", "Terminal Equipment", str);
var str = replaceAll("路由器信息", "Router Information", str);
var str = replaceAll("路由器型号", "Router models", str);
var str = replaceAll("小米路由器", "MiWiFi router ", str);
var str = replaceAll("系统ROM版本", "System ROM version", str);
var str = replaceAll("开发版", "Developer Edition", str);
var str = replaceAll("当前CPU负载", "Current CPU load", str);
var str = replaceAll("当前CPU状态", "The current CPU status", str);
var str = replaceAll("当前网络状态", "Current network status", str);
var str = replaceAll("下载速度", "Download speed", str);
var str = replaceAll("上传速度", "Upload speed", str);
var str = replaceAll("终端流量统计", "Terminal Traffic Statistics", str);
var str = replaceAll("当前终端", "Current client", str);
var str = replaceAll("平均网速", "Average speed", str);
var str = replaceAll("最快下载", "Fastest speed", str);
var str = replaceAll("总下载量", "Total downloads", str);
var str = replaceAll("总上传量", "Total uploads", str);
var str = replaceAll("累计终端", "Cumulative terminal", str);
var str = replaceAll("当前内存状态", "Current memory status", str);
var str = replaceAll("当前内存占用", "Current memory usage", str);
var str = replaceAll("核心数", "Number of cores", str);
var str = replaceAll("核心频率", "Core frequency", str);
var str = replaceAll("内存容量", "Memory Capacity", str);
var str = replaceAll("内存类型", "Memory Type", str);
var str = replaceAll("内存频率", "Memory frequency", str);
var str = replaceAll("互联网", "Internet", str);
var str = replaceAll("外网状态", "External network state", str);
var str = replaceAll("外网带宽", "Outside the network Bandwidth", str);
var str = replaceAll("连接类型", "Connection Type", str);
var str = replaceAll("IP地址", "IP addresses", str);
var str = replaceAll("下载带宽", "Download bandwidth", str);
var str = replaceAll("上传带宽", "Upload Bandwidth", str);
var str = replaceAll("网关地址", "Gateway Address", str);
var str = replaceAll("重新测速", "Re-speed test", str);
var str = replaceAll("手工修改", "Manual changes", str);
var str = replaceAll("网线连网设备", "LAN devices", str);
var str = replaceAll("5G连网设备", "5G networking equipment", str);
var str = replaceAll("MAC地址", " MAC address ", str);
var str = replaceAll("访问外网", "Internet Access", str);
var str = replaceAll("访问硬盘", "Disk Access", str);
var str = replaceAll("修改路由器名称", "Modify router name", str);
var str = replaceAll("系统升级", "System Upgrade", str);
var str = replaceAll("下载客户端", "Download Client", str);
var str = replaceAll("修改路由器名称", "Modify router name", str);
var str = replaceAll("路由器名称", "Router name", str);
var str = replaceAll("路由器位置", "Router Position", str);
var str = replaceAll("位置", "Position", str);
var str = replaceAll("系统版本", "System Version", str);
var str = replaceAll("开发版", "Developer Edition", str);
var str = replaceAll("MAC地址", " MAC address ", str);
var str = replaceAll("小米路由器", "MiWiFi Router", str);
var str = replaceAll("官方网站", "Official Website", str);
var str = replaceAll("官方微博", "Official blog", str);
var str = replaceAll("官方微信", "Official micro letter ", str);
var str = replaceAll("用户社区", "User Community", str);
var str = replaceAll("服务热线", "Service Hotline", str);
var str = replaceAll("文件系统", "File System", str);
var str = replaceAll("运行时间", "Run Time", str);
var str = replaceAll("硬盘转速", "Hard disk rotational speed", str);
var str = replaceAll("硬盘接口", "Hard drive interface", str);
var str = replaceAll("硬盘型号", "Hard drive model", str);
var str = replaceAll("本地存储", "Local Storage", str);
var str = replaceAll("您的硬盘已经", "Your hard disk has not tested in ", str);
var str = replaceAll("建议每隔15天执行一次硬盘体检", " days, testing is recommended every 15 days to perform a hard examination", str);
var str = replaceAll("天没有进行过检测，", "", str);
var str = replaceAll("上次体检为", "Last Check: ", str);
var str = replaceAll("立即体检", "Check Now", str);
var str = replaceAll("文件类型存储统计", "File storage statistics", str);
var str = replaceAll("总容量", "Total capacity ", str);
var str = replaceAll("硬盘读写状态", "Hard disk R/W status", str);
var str = replaceAll("硬盘自动休眠", "Hard autosleep", str);
var str = replaceAll("清除硬盘中的全部用户数据，此过程不可恢复，是否确认格式化硬盘？", "Clear all user data in the hard disk, this process can not be restored, confirm whether Format the hard drive?", str);
var str = replaceAll("详细体检报告", "Detailed Report", str);
var str = replaceAll("硬盘体检总得分", "Hard physical examination total score", str);
var str = replaceAll("优", "Excellent", str);
var str = replaceAll("恭喜，您的硬盘很健康！", "Congratulations, your hard disk is healthy!", str);
var str = replaceAll("硬盘体检结论", "Hard physical examination conclusion", str);
var str = replaceAll("1. 您的硬盘目前状态正佳，运转正常，性能优异！", "1. Your hard disk is currently in-form, in normal operation, excellent performance!", str);
var str = replaceAll("开始硬盘体检", "Start hard physical examination", str);

// Comom
var str = replaceAll("小米路由器", "MiWiFi Router", str);
var str = replaceAll("设置", " Set up", str);
var str = replaceAll("上网设置", "Internet settings", str);
var str = replaceAll("安全中心", "Security Center", str);
var str = replaceAll("局域网设置", "LAN Settings", str);
var str = replaceAll("系统状态", "System Status", str);
var str = replaceAll("隐藏网络不被发现", "Hide network", str);
var str = replaceAll("混合加密(WPA/WPA2个人版)", "WPA / WPA2 Personal Edition", str);
var str = replaceAll("强加密(WPA2个人版)", "WPA2 Personal Edition", str);
var str = replaceAll("无加密(允许所有人连接)", "No encryption", str);
var str = replaceAll("无线信道", "Wireless channel", str);
var str = replaceAll("节能", "Energy Saving", str);
var str = replaceAll("信号强度", "Signal Strength", str);
var str = replaceAll("上网方式", "Internet access methods", str);
var str = replaceAll("连接类型", "Connection Type", str);
var str = replaceAll("子网掩码", "Subnet Mask", str);
var str = replaceAll("默认网关", "Default Gateway", str);
var str = replaceAll("WAN口速率", "WAN port speed", str);
var str = replaceAll("自动（推荐）", "Automatic (recommended)", str);
var str = replaceAll("MAC地址克隆", "MAC地址克隆", str);
var str = replaceAll("当前使用的MAC地址是", "Current MAC address : ", str);
var str = replaceAll("MAC地址", " MAC address ", str);
var str = replaceAll("当前管理终端的MAC地址，可以手动更改为其他MAC地址", "MAC address of the current management of the terminal, you can manually change to another MAC address", str);
var str = replaceAll("工作模式切换", "Operating mode switching", str);
var str = replaceAll("在路由器工作模式和中继工作模式之间进行切换", "Between the router and the relay operating mode operating mode switch", str);

//
var str = replaceAll("无线访问控制", "Wireless Access Control", str);
var str = replaceAll("控制模式", "Control Mode", str);
var str = replaceAll("黑名单模式（不允许列表中设备访问）", "Blacklist mode", str);
var str = replaceAll("白名单模式（只允许列表中设备访问）", "Whitelist mode", str);
var str = replaceAll("黑名单设备列表", "Blacklisted Device List", str);
var str = replaceAll("还没有设备添加进来", "No Device Added", str);
var str = replaceAll("从在线列表添加", "Add from the online list", str);
var str = replaceAll("手工添加", "Manually add", str);
var str = replaceAll("保存并生效", "Save and Activate", str);
var str = replaceAll("修改路由器密码", "Modify router password", str);
var str = replaceAll("原密码", "Old Password", str);
var str = replaceAll("新密码", "New Password", str);
var str = replaceAll("确认密码", "Confirm Password", str);

//
var str = replaceAll("DHCP服务", "DHCP Service", str);
var str = replaceAll("开始IP", "Start IP", str);
var str = replaceAll("结束IP", "End IP", str);
var str = replaceAll("租约(分)", "Lease (sub)", str);
var str = replaceAll("局域网IP地址", "LAN IP address", str);
var str = replaceAll("局域网IP", "LAN IP", str);

//
var str = replaceAll("升级检测", "Upgrade detection", str);
var str = replaceAll("系统版本", "System Version", str);
var str = replaceAll("当前版本", "Current version ", str);
var str = replaceAll("你的版本是最新的，无需升级。", "Your firmware version is up to date and no need to upgrade.", str);
var str = replaceAll("手动升级", "Manually Upgrade", str);
var str = replaceAll("上传日志", "Upload log", str);
var str = replaceAll("下载日志", "Download Log", str);
var str = replaceAll("立即恢复", "Restore now", str);

//
var str = replaceAll("QoS智能限速", "QoS smart speed", str);
var str = replaceAll("DHCP静态IP分配", "DHCP static IP", str);
var str = replaceAll("端口转发", "Port Forwarding", str);
var str = replaceAll("外网带宽状态", "External network Bandwidth state", str);
var str = replaceAll("外网带宽", "External network Bandwidth", str);
var str = replaceAll("上传带宽", "Upload Bandwidth", str);
var str = replaceAll("下载带宽", "Download bandwidth", str);
var str = replaceAll("重新测速", "Re-speed", str);
var str = replaceAll("手工修改", "Manually modify", str);
var str = replaceAll("当外网下载带宽超过50Mbps时，建议无需开启QoS功能", "When the External network download bandwidth of more than 50Mbps, without opening the QoS function is recommended", str);
var str = replaceAll("设备限速状态", "Device speed state", str);
var str = replaceAll("当前QoS服务暂未开启", "Current QoS service not open", str);
var str = replaceAll("应用限速状态", "Application limit state", str);
var str = replaceAll("应用名称", "Application Name", str);
var str = replaceAll("当前速度", "当前速度", str);
var str = replaceAll("限速模式", "Speed mode", str);
var str = replaceAll("迅雷", "Thunder", str);
var str = replaceAll("无限制", "Unlimited", str);
var str = replaceAll("编辑", "Edit", str);
//
var str = replaceAll("已绑定的设备列表", "Bound to a list of device", str);
var str = replaceAll("设备名称", "Device Name", str);
var str = replaceAll("没有设置信息", "Information not provided", str);
var str = replaceAll("解绑选中", "Select unbundling", str);

//
var str = replaceAll("服务列表", "Service List", str);
var str = replaceAll("服务提供商及主机名称", "ISP and the host name", str);
var str = replaceAll("最近更新", "Last Updated", str);
var str = replaceAll("状态", "Status", str);
var str = replaceAll("操作", "Operating", str);
var str = replaceAll("还没有服务添加进来", "No Service Added", str);
var str = replaceAll("添加服务", "Add Service", str);

//
var str = replaceAll("端口转发规则列表", "Port forwarding rules list", str);
var str = replaceAll("外部端口", "External ports", str);
var str = replaceAll("内部IP地址", "Internal IP address", str);
var str = replaceAll("内部端口", "Internal Port", str);
var str = replaceAll("范围转发规则列表", "Range Forwarding list of rules", str);
var str = replaceAll("结束端口", "End Port", str);
var str = replaceAll("起始端口", "Start Port", str);
var str = replaceAll("添加规则", "Add Rule", str);
var str = replaceAll("保存并生效", "Save And Apply", str);
var str = replaceAll("开启DMZ功能可以将内网某一个设备的IP映射到外网，方便从外网访问到该设备。", "IP one device within the network can be mapped to the external network open DMZ function, easy access from External network to the device.", str);

//
var str = replaceAll("协议类型", "Protocol Type", str);
var str = replaceAll("服务器地址", "Server Address", str);
var str = replaceAll("用户名", "User name", str);
var str = replaceAll("没有设置信息", "Information not available", str);
var str = replaceAll("添加服务", "Add Service", str);

//
var str = replaceAll("UPnP状态", "UPnP Status", str);
var str = replaceAll("UPnP设备列表", "UPnP Device List", str);
var str = replaceAll("开发者选项", "Developer Options", str);
var str = replaceAll("插件开发环境", "Plug-in Development Environment", str);
var str = replaceAll("小米Router器", "MiWiFi Router", str);
var str = replaceAll("硬盘读写", "Hard disk R/W", str);
var str = replaceAll("强加密(WPA2个人版)", "WEP Encryption", str);
var str = replaceAll("混合加密(WPA/WPA2个人版)", "WPA/WPA2 Encryption", str);
var str = replaceAll("无加密(允许所有人连接)", "No Encryption (Open)", str);

//SMALL
var str = replaceAll("请输入", "Please Enter ", str);
var str = replaceAll("器管理", "", str);
var str = replaceAll("地址", " Address", str);
var str = replaceAll("当前", "Current", str);
var str = replaceAll("路由", "Router ", str);
var str = replaceAll("状态", "Status", str);
var str = replaceAll("负载", "Load", str);
var str = replaceAll("台", " sets", str);
var str = replaceAll("已连接", "Connected", str);
var str = replaceAll("小时", " hour ", str);
var str = replaceAll("分", " minutes ", str);
var str = replaceAll("天", " Day", str);
var str = replaceAll("秒", " seconds", str);
var str = replaceAll("重启", "Reboot", str);
var str = replaceAll("关机", "Shutdown", str);
var str = replaceAll("注销", "Logout", str);
var str = replaceAll("保存", "Save", str);
var str = replaceAll("已用", "Used ", str);
var str = replaceAll("剩余", "Empty ", str);
var str = replaceAll("读取", "Read", str);
var str = replaceAll("写入", "Write", str);
var str = replaceAll("图片", "Picture", str);
var str = replaceAll("视频", "Video", str);
var str = replaceAll("音乐", "Music", str);
var str = replaceAll("文档", "File", str);
var str = replaceAll("其他", "Other", str);
var str = replaceAll("确定格式化", "OK Format", str);
var str = replaceAll("取消", "Cancel", str);
var str = replaceAll("体检报告", "Report", str);
var str = replaceAll("确定", "OK", str);
var str = replaceAll("取消", "Cancel", str);
var str = replaceAll("开关", "Switch", str);
var str = replaceAll("开启", "On", str);
var str = replaceAll("关闭", "Off", str);
var str = replaceAll("名称", "Name", str);
var str = replaceAll("加密方式", "Encryption", str);
var str = replaceAll("密码", "Password", str);
var str = replaceAll("自动", "Automatic", str);
var str = replaceAll("穿墙", "Wall", str);
var str = replaceAll("标准", "Standard", str);
var str = replaceAll("保存", "Save", str);
var str = replaceAll("访客", "Visitors ", str);
var str = replaceAll("修改上网方式", "Change", str);
var str = replaceAll("静态IP", "Static IP", str);
var str = replaceAll("速率", "Rate", str);
var str = replaceAll("切换", "Switch", str);
var str = replaceAll("克隆", "Clone", str);
var str = replaceAll("恢复", "Restore", str);
var str = replaceAll("设备名称", "Device Name", str);
var str = replaceAll("操作", "Operating", str);
var str = replaceAll("其他", "Other", str);
var str = replaceAll("名称", "Name", str);
var str = replaceAll("协议", "Rule", str);
var str = replaceAll("客户端IP", "Client IP", str);
var str = replaceAll("内部端口", "Internal Port", str);
var str = replaceAll("外部端口", "External ports", str);
var str = replaceAll("本机", "PC", str);
var str = replaceAll("秒", "Second", str);
var str = replaceAll("系统", "System ", str);
var str = replaceAll("局域网", "LAN ", str);
var str = replaceAll("上网", "Internet access ", str);
var str = replaceAll("修改", "Modify ", str);
var str = replaceAll("租约", "Lease ", str);
var str = replaceAll("成功正在", "Success ", str);
var str = replaceAll("需要", "Need ", str);
var str = replaceAll("请等待...", "Please Wait... ", str);
var str = replaceAll("使用的", "", str);
var str = replaceAll("是", "", str);
var str = replaceAll("方式", "", str);
var str = replaceAll("管理终端的", "", str);
var str = replaceAll("可以手动更改为", "", str);
var str = replaceAll("配", "", str);
document.open('text/html');document.write(str);document.close();
}

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}

function errorFix()
{
	console.log("Fixing CSS...");
	$("#nav li a ").css( "font-size", 16);
	$(".dropmenu").css( "width", 160);
	$("#trafficChart > svg:nth-child(2)").remove();
	$("#cpuChart > svg:nth-child(2)").remove();
	$("#cpuChart > svg:nth-child(2)").remove();
	$("#memChart > svg:nth-child(2)").remove();
	$("#piechart > svg:nth-child(2)").remove();
	$("#piechartcat > svg:nth-child(2)").remove();
	$("#ioStatus > svg:nth-child(2)").remove();
	$('input:text').css('height', 40);
	$('input:password').css('height', 40);
	$('.form-item .ipt-text').css('width', 330);
	$('.form-item-select .k').css('width', 300);
	$('.form-item .k').css('width', 300);
	$( "<div align=\"center\" style=\"color: #8cb9f0; text-decoration: none;\"><p>Translated By: <a style=\"text-decoration: none; color: #8cb9f0;\" href=\"http://saiful.im/\">Saiful Islam</a></p></div>" ).insertAfter( "#ft" );
	clearInterval(document.intR);
}

$( document ).ready(function() {
	transl();
	document.intR = setInterval(function(){ errorFix();  }, 1000);
});
