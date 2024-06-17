// <script
//   is:inline
//   src="https://web-9gikcbug35bad3a8-1304825656.tcloudbaseapp.com/sdk/1.4.0/cloud.js"
// ></script>

const WX_RESOURCE_APPID = 'wx6ba729f73bdc1a6d' /*         资源方 AppID */
const WX_RESOURCE_ENVID
  = 'd-1-b233b6-7gl3abyxe63944ca' /*                     资源方云开发环境 ID */

async function doLogin() {
  const c1 = new cloud.Cloud({
    // 必填，表示是未登录模式
    identityless: true,
    // 资源方 AppID
    resourceAppid: WX_RESOURCE_APPID,
    // resourceAppid: 'wxab86f5a016c34a54',
    // 资源方环境 ID
    resourceEnv: WX_RESOURCE_ENVID,
  })
  // 跨账号调用，必须等待 init 完成
  // init 过程中，资源方小程序对应环境下的 cloudbase_auth 函数会被调用，并需返回协议字段（见下）来确认允许访问、访问时长以及可自定义安全规则
  await c1.init()
  c1.callFunction({
    name: 'login',
    data: {},
    success(res) {
      console.error(res)
    },
    complete(res) {
      console.error(res)
    },
  })
}
// doLogin();
