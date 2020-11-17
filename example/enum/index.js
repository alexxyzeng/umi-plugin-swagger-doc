/**
 * 员工类型
 * @readonly
 * @enum
 * @property {string} WorkerType.EmTypeEnum - 员工
 * @property {string} WorkerType.EmTypeEnum - 领导层
 * @property {string} WorkerType.EmTypeEnum - 管理层
 * @property {string} WorkerType.EmTypeEnum - 供应商
 * @property {string} WorkerType.EmTypeEnum - 内置用户
 */
export const WorkerType = {
  /** 员工 */
  EmTypeEnum: 1,
  /** 领导层 */
  EmTypeEnum: 2,
  /** 管理层 */
  EmTypeEnum: 3,
  /** 供应商 */
  EmTypeEnum: 4,
  /** 内置用户 */
  EmTypeEnum: 5,
}

/**
 * 性别
 * @readonly
 * @enum
 * @property {string} swagger_enum_3abfb1c35fc4eb3222f05f94e555984b. - 女
 * @property {string} swagger_enum_3abfb1c35fc4eb3222f05f94e555984b. - 男
 */
export const swagger_enum_3abfb1c35fc4eb3222f05f94e555984b = {
  /** 女 */
  : 0,
  /** 男 */
  : 1,
}

/**
 * 文件类型 文件类型
 * @readonly
 * @enum
 * @property {string} swagger_enum_354c1eca783d88caad75e4831555b334.Image - 图片
 * @property {string} swagger_enum_354c1eca783d88caad75e4831555b334.Video - 视频
 * @property {string} swagger_enum_354c1eca783d88caad75e4831555b334.Voice - 音频
 * @property {string} swagger_enum_354c1eca783d88caad75e4831555b334.Attachment - 附件
 */
export const swagger_enum_354c1eca783d88caad75e4831555b334 = {
  /** 图片 */
  Image: 1,
  /** 视频 */
  Video: 2,
  /** 音频 */
  Voice: 3,
  /** 附件 */
  Attachment: 4,
}

/**
 * 周转类型
 * @readonly
 * @enum
 * @property {string} swagger_enum_3d799c9e5fba6feb632ffd7975239521.RevolvingTypeEnum - SCHOOL_RECRUITMENT
 * @property {string} swagger_enum_3d799c9e5fba6feb632ffd7975239521.RevolvingTypeEnum - SOCIETY_RECRUITMENT
 * @property {string} swagger_enum_3d799c9e5fba6feb632ffd7975239521.RevolvingTypeEnum - INTERNAL_SECONDMENT
 * @property {string} swagger_enum_3d799c9e5fba6feb632ffd7975239521.RevolvingTypeEnum - INTERN
 * @property {string} swagger_enum_3d799c9e5fba6feb632ffd7975239521.RevolvingTypeEnum - SECONDMENT
 * @property {string} swagger_enum_3d799c9e5fba6feb632ffd7975239521.RevolvingTypeEnum - COMMUNICATE
 * @property {string} swagger_enum_3d799c9e5fba6feb632ffd7975239521.RevolvingTypeEnum - OTHER
 */
export const swagger_enum_3d799c9e5fba6feb632ffd7975239521 = {
  /** SCHOOL_RECRUITMENT */
  RevolvingTypeEnum: 1,
  /** SOCIETY_RECRUITMENT */
  RevolvingTypeEnum: 2,
  /** INTERNAL_SECONDMENT */
  RevolvingTypeEnum: 3,
  /** INTERN */
  RevolvingTypeEnum: 4,
  /** SECONDMENT */
  RevolvingTypeEnum: 5,
  /** COMMUNICATE */
  RevolvingTypeEnum: 6,
  /** OTHER */
  RevolvingTypeEnum: 9,
}

/**
 * 是否绑定门锁 是否枚举
 * @readonly
 * @enum
 * @property {string} bbb.No - 否
 * @property {string} bbb.Yes - 是
 */
export const bbb = {
  /** 否 */
  No: 0,
  /** 是 */
  Yes: 1,
}

/**
 * 是否锁定
 * @readonly
 * @enum
 * @property {string} swagger_enum_f9063997d999c37cf497d874130e3abb.LockStatusEnum - 锁定
 * @property {string} swagger_enum_f9063997d999c37cf497d874130e3abb.LockStatusEnum - 未锁定
 */
export const swagger_enum_f9063997d999c37cf497d874130e3abb = {
  /** 锁定 */
  LockStatusEnum: 1,
  /** 未锁定 */
  LockStatusEnum: 0,
}

/**
 * 出租类型
 * @readonly
 * @enum
 * @property {string} swagger_enum_85746cd958dae2366d4b10f522ccaeb1.RentTypeEnum - 合租
 * @property {string} swagger_enum_85746cd958dae2366d4b10f522ccaeb1.RentTypeEnum - 整租
 */
export const swagger_enum_85746cd958dae2366d4b10f522ccaeb1 = {
  /** 合租 */
  RentTypeEnum: 0,
  /** 整租 */
  RentTypeEnum: 1,
}

/**
 * 房源状态
 * @readonly
 * @enum
 * @property {string} swagger_enum_feeaacdbe30576e7677eac1f066c2bc8.SourceStatusEnum - 空房
 * @property {string} swagger_enum_feeaacdbe30576e7677eac1f066c2bc8.SourceStatusEnum - 满房
 * @property {string} swagger_enum_feeaacdbe30576e7677eac1f066c2bc8.SourceStatusEnum - 部分空房
 */
export const swagger_enum_feeaacdbe30576e7677eac1f066c2bc8 = {
  /** 空房 */
  SourceStatusEnum: 0,
  /** 满房 */
  SourceStatusEnum: 1,
  /** 部分空房 */
  SourceStatusEnum: 2,
}

/**
 * 空间类型
 * @readonly
 * @enum
 * @property {string} swagger_enum_2ae1254dfc37a53391b08d893431f913.SpaceTypeEnum - 大楼
 * @property {string} swagger_enum_2ae1254dfc37a53391b08d893431f913.SpaceTypeEnum - 楼层
 * @property {string} swagger_enum_2ae1254dfc37a53391b08d893431f913.SpaceTypeEnum - 套间
 * @property {string} swagger_enum_2ae1254dfc37a53391b08d893431f913.SpaceTypeEnum - 房间
 * @property {string} swagger_enum_2ae1254dfc37a53391b08d893431f913.SpaceTypeEnum - 床位
 */
export const swagger_enum_2ae1254dfc37a53391b08d893431f913 = {
  /** 大楼 */
  SpaceTypeEnum: 0,
  /** 楼层 */
  SpaceTypeEnum: 1,
  /** 套间 */
  SpaceTypeEnum: 2,
  /** 房间 */
  SpaceTypeEnum: 3,
  /** 床位 */
  SpaceTypeEnum: 4,
}

/**
 * 申请类型
 * @readonly
 * @enum
 * @property {string} swagger_enum_f71dd92a20eb7e5eb62f37e13f51eadb. - 申请入住
 * @property {string} swagger_enum_f71dd92a20eb7e5eb62f37e13f51eadb. - 申请续住
 * @property {string} swagger_enum_f71dd92a20eb7e5eb62f37e13f51eadb. - 申请退住
 * @property {string} swagger_enum_f71dd92a20eb7e5eb62f37e13f51eadb. - 换房
 * @property {string} swagger_enum_f71dd92a20eb7e5eb62f37e13f51eadb. - 人才房申请
 * @property {string} swagger_enum_f71dd92a20eb7e5eb62f37e13f51eadb. - 入住确认
 */
export const swagger_enum_f71dd92a20eb7e5eb62f37e13f51eadb = {
  /** 申请入住 */
  : 0,
  /** 申请续住 */
  : 1,
  /** 申请退住 */
  : 2,
  /** 换房 */
  : 3,
  /** 人才房申请 */
  : 4,
  /** 入住确认 */
  : 5,
}

/**
 * 申请状态
 * @readonly
 * @enum
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 待分配
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 已入住
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 已逾期
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 已退住
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 已取消
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 已完成
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 待续住
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 待退住
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 待确认
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 待选房
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 已选房
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 未选房
 * @property {string} swagger_enum_8cb69e46df58bd6dc33997645c352a41.RevolvingAllocationStatusEnum - 已分配
 */
export const swagger_enum_8cb69e46df58bd6dc33997645c352a41 = {
  /** 待分配 */
  RevolvingAllocationStatusEnum: 0,
  /** 已入住 */
  RevolvingAllocationStatusEnum: 1,
  /** 已逾期 */
  RevolvingAllocationStatusEnum: 2,
  /** 已退住 */
  RevolvingAllocationStatusEnum: 3,
  /** 已取消 */
  RevolvingAllocationStatusEnum: 4,
  /** 已完成 */
  RevolvingAllocationStatusEnum: 5,
  /** 待续住 */
  RevolvingAllocationStatusEnum: 6,
  /** 待退住 */
  RevolvingAllocationStatusEnum: 7,
  /** 待确认 */
  RevolvingAllocationStatusEnum: 8,
  /** 待选房 */
  RevolvingAllocationStatusEnum: 9,
  /** 已选房 */
  RevolvingAllocationStatusEnum: 10,
  /** 未选房 */
  RevolvingAllocationStatusEnum: 11,
  /** 已分配 */
  RevolvingAllocationStatusEnum: 12,
}

/**
 * 操作类型
 * @readonly
 * @enum
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 分配
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 取消分配
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 续住
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 取消续住
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 退住
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 取消退房
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 换房
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 取消换房
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 确认
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 申请入住
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 续住申请
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 人才房申请
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 抽签
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 抽签
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 选房
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 选房
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 选房
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 入住确认
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 退住确认
 * @property {string} swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a. - 退住申请
 */
export const swagger_enum_36c91cd6e6d4aa38d627243c69d7b10a = {
  /** 分配 */
  : 0,
  /** 取消分配 */
  : 1,
  /** 续住 */
  : 2,
  /** 取消续住 */
  : 3,
  /** 退住 */
  : 4,
  /** 取消退房 */
  : 5,
  /** 换房 */
  : 6,
  /** 取消换房 */
  : 7,
  /** 确认 */
  : 8,
  /** 申请入住 */
  : 9,
  /** 续住申请 */
  : 10,
  /** 人才房申请 */
  : 11,
  /** 抽签 */
  : 12,
  /** 抽签 */
  : 13,
  /** 选房 */
  : 14,
  /** 选房 */
  : 15,
  /** 选房 */
  : 16,
  /** 入住确认 */
  : 17,
  /** 退住确认 */
  : 18,
  /** 退住申请 */
  : 19,
}

/**
 * 是否需要通知0:不需要，1:需要
 * @readonly
 * @enum
 * @property {string} swagger_enum_b01039a9a77de634f305b2408bc6b1da.BooleanEnum - 否
 * @property {string} swagger_enum_b01039a9a77de634f305b2408bc6b1da.BooleanEnum - 是
 */
export const swagger_enum_b01039a9a77de634f305b2408bc6b1da = {
  /** 否 */
  BooleanEnum: 0,
  /** 是 */
  BooleanEnum: 1,
}

/**
 * 绑定状态 1-未绑定 2-已绑定
 * @readonly
 * @enum
 * @property {string} swagger_enum_765a5b80bede3c441f3f56590eb54cbb.RevolvingLockBindingStatusEnum - 未绑定
 * @property {string} swagger_enum_765a5b80bede3c441f3f56590eb54cbb.RevolvingLockBindingStatusEnum - 已绑定
 */
export const swagger_enum_765a5b80bede3c441f3f56590eb54cbb = {
  /** 未绑定 */
  RevolvingLockBindingStatusEnum: 1,
  /** 已绑定 */
  RevolvingLockBindingStatusEnum: 2,
}

/**
 * 绑定类型 1-套间，2-房间
 * @readonly
 * @enum
 * @property {string} swagger_enum_f805e20d18dbe72df279a2190bf94619.RevolvingLockBindingTypeEnum - 套间
 * @property {string} swagger_enum_f805e20d18dbe72df279a2190bf94619.RevolvingLockBindingTypeEnum - 房间
 */
export const swagger_enum_f805e20d18dbe72df279a2190bf94619 = {
  /** 套间 */
  RevolvingLockBindingTypeEnum: 1,
  /** 房间 */
  RevolvingLockBindingTypeEnum: 2,
}

/**
 * 设备在线状态，1：在线；2：离线
 * @readonly
 * @enum
 * @property {string} swagger_enum_3c8061642bedd04f9c46df3d34ddaee4.RevolvingLockFacOnOffEnum - 在线
 * @property {string} swagger_enum_3c8061642bedd04f9c46df3d34ddaee4.RevolvingLockFacOnOffEnum - 离线
 */
export const swagger_enum_3c8061642bedd04f9c46df3d34ddaee4 = {
  /** 在线 */
  RevolvingLockFacOnOffEnum: 1,
  /** 离线 */
  RevolvingLockFacOnOffEnum: 2,
}

/**
 * 设备类型
 * @readonly
 * @enum
 * @property {string} swagger_enum_f75205a4ed61bbe62b23ebbd18098dfe.RevolvingLockFacTypeEnum - 内门锁
 * @property {string} swagger_enum_f75205a4ed61bbe62b23ebbd18098dfe.RevolvingLockFacTypeEnum - 外门锁
 * @property {string} swagger_enum_f75205a4ed61bbe62b23ebbd18098dfe.RevolvingLockFacTypeEnum - 门锁
 */
export const swagger_enum_f75205a4ed61bbe62b23ebbd18098dfe = {
  /** 内门锁 */
  RevolvingLockFacTypeEnum: 1,
  /** 外门锁 */
  RevolvingLockFacTypeEnum: 2,
  /** 门锁 */
  RevolvingLockFacTypeEnum: 3,
}

/**
 * 安装工单状态，1： 待处理；2：待分配；3：已分配；4：已完成；5：已关闭
 * @readonly
 * @enum
 * @property {string} swagger_enum_5236bcd1956f75cc86ffc99ce8e865fd.RevolvingLockInstallStateEnum - 待处理
 * @property {string} swagger_enum_5236bcd1956f75cc86ffc99ce8e865fd.RevolvingLockInstallStateEnum - 待分配
 * @property {string} swagger_enum_5236bcd1956f75cc86ffc99ce8e865fd.RevolvingLockInstallStateEnum - 已分配
 * @property {string} swagger_enum_5236bcd1956f75cc86ffc99ce8e865fd.RevolvingLockInstallStateEnum - 已完成
 * @property {string} swagger_enum_5236bcd1956f75cc86ffc99ce8e865fd.RevolvingLockInstallStateEnum - 已关闭
 */
export const swagger_enum_5236bcd1956f75cc86ffc99ce8e865fd = {
  /** 待处理 */
  RevolvingLockInstallStateEnum: 1,
  /** 待分配 */
  RevolvingLockInstallStateEnum: 2,
  /** 已分配 */
  RevolvingLockInstallStateEnum: 3,
  /** 已完成 */
  RevolvingLockInstallStateEnum: 4,
  /** 已关闭 */
  RevolvingLockInstallStateEnum: 5,
}

/**
 * 房间状态，1：未安装设备；2：可管理
 * @readonly
 * @enum
 * @property {string} swagger_enum_24c51d723f507ffc1e7f1b2b0fcb42f8.RevolvingLockSpStateEnum - 未安装
 * @property {string} swagger_enum_24c51d723f507ffc1e7f1b2b0fcb42f8.RevolvingLockSpStateEnum - 可管理
 */
export const swagger_enum_24c51d723f507ffc1e7f1b2b0fcb42f8 = {
  /** 未安装 */
  RevolvingLockSpStateEnum: 1,
  /** 可管理 */
  RevolvingLockSpStateEnum: 2,
}

/**
 * 内容类型1-站内信；2-移动推送；3-短信；4-邮件；5-公告
 * @readonly
 * @enum
 * @property {string} swagger_enum_db369a950a1b9633adc5303691bdb259.Web - 站内信
 * @property {string} swagger_enum_db369a950a1b9633adc5303691bdb259.Mobile - 移动推送
 * @property {string} swagger_enum_db369a950a1b9633adc5303691bdb259.Msg - 短信
 * @property {string} swagger_enum_db369a950a1b9633adc5303691bdb259.Email - 邮件
 * @property {string} swagger_enum_db369a950a1b9633adc5303691bdb259.Bulletin - 公告
 */
export const swagger_enum_db369a950a1b9633adc5303691bdb259 = {
  /** 站内信 */
  Web: 1,
  /** 移动推送 */
  Mobile: 2,
  /** 短信 */
  Msg: 3,
  /** 邮件 */
  Email: 4,
  /** 公告 */
  Bulletin: 5,
}

/**
 * 活动状态
 * @readonly
 * @enum
 * @property {string} swagger_enum_48fd0a8db1b3aedb049195ffe4edad70.TalentActivityStatusEnum - 待发布
 * @property {string} swagger_enum_48fd0a8db1b3aedb049195ffe4edad70.TalentActivityStatusEnum - 待抽签
 * @property {string} swagger_enum_48fd0a8db1b3aedb049195ffe4edad70.TalentActivityStatusEnum - 抽签中
 * @property {string} swagger_enum_48fd0a8db1b3aedb049195ffe4edad70.TalentActivityStatusEnum - 待选房
 * @property {string} swagger_enum_48fd0a8db1b3aedb049195ffe4edad70.TalentActivityStatusEnum - 选房中
 * @property {string} swagger_enum_48fd0a8db1b3aedb049195ffe4edad70.TalentActivityStatusEnum - 已完成
 */
export const swagger_enum_48fd0a8db1b3aedb049195ffe4edad70 = {
  /** 待发布 */
  TalentActivityStatusEnum: 1,
  /** 待抽签 */
  TalentActivityStatusEnum: 2,
  /** 抽签中 */
  TalentActivityStatusEnum: 3,
  /** 待选房 */
  TalentActivityStatusEnum: 4,
  /** 选房中 */
  TalentActivityStatusEnum: 5,
  /** 已完成 */
  TalentActivityStatusEnum: 6,
}

/**
 * 首次进入的页面类型
 * @readonly
 * @enum
 * @property {string} swagger_enum_33d92cae1c7f54967ceb0ab11c39c640.TalentActivityH5PageEnum - 活动列表
 * @property {string} swagger_enum_33d92cae1c7f54967ceb0ab11c39c640.TalentActivityH5PageEnum - 抽签页面
 * @property {string} swagger_enum_33d92cae1c7f54967ceb0ab11c39c640.TalentActivityH5PageEnum - 等待抽签结果
 * @property {string} swagger_enum_33d92cae1c7f54967ceb0ab11c39c640.TalentActivityH5PageEnum - (选房)抽签结果页面
 * @property {string} swagger_enum_33d92cae1c7f54967ceb0ab11c39c640.TalentActivityH5PageEnum - 活动结束页面
 */
export const swagger_enum_33d92cae1c7f54967ceb0ab11c39c640 = {
  /** 活动列表 */
  TalentActivityH5PageEnum: 1,
  /** 抽签页面 */
  TalentActivityH5PageEnum: 2,
  /** 等待抽签结果 */
  TalentActivityH5PageEnum: 3,
  /** (选房)抽签结果页面 */
  TalentActivityH5PageEnum: 4,
  /** 活动结束页面 */
  TalentActivityH5PageEnum: 5,
}

/**
 * 状态
 * @readonly
 * @enum
 * @property {string} swagger_enum_a941d2eb9c3e89a0a3a9d46844700497.TalentActivityEmployeeStatusEnum - 待抽签
 * @property {string} swagger_enum_a941d2eb9c3e89a0a3a9d46844700497.TalentActivityEmployeeStatusEnum - 未抽签
 * @property {string} swagger_enum_a941d2eb9c3e89a0a3a9d46844700497.TalentActivityEmployeeStatusEnum - 已抽签
 * @property {string} swagger_enum_a941d2eb9c3e89a0a3a9d46844700497.TalentActivityEmployeeStatusEnum - 待选房
 * @property {string} swagger_enum_a941d2eb9c3e89a0a3a9d46844700497.TalentActivityEmployeeStatusEnum - 已选房
 * @property {string} swagger_enum_a941d2eb9c3e89a0a3a9d46844700497.TalentActivityEmployeeStatusEnum - 未选房
 */
export const swagger_enum_a941d2eb9c3e89a0a3a9d46844700497 = {
  /** 待抽签 */
  TalentActivityEmployeeStatusEnum: 1,
  /** 未抽签 */
  TalentActivityEmployeeStatusEnum: 2,
  /** 已抽签 */
  TalentActivityEmployeeStatusEnum: 3,
  /** 待选房 */
  TalentActivityEmployeeStatusEnum: 4,
  /** 已选房 */
  TalentActivityEmployeeStatusEnum: 5,
  /** 未选房 */
  TalentActivityEmployeeStatusEnum: 6,
}