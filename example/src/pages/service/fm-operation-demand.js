import API from '@/helper/api'
/**
 * @typedef {object} dataItem
 
 *
*/

/**
 * @typedef {object} seriesItem
 * @property {[dataItem]} data
 * @property {string} name 
 * @property {string} type 
 *
*/

/**
 * @typedef {object} avgRespInfo
 * @property {[string]} categories
 * @property {string} name 
 * @property {[seriesItem]} series
 *
*/

/**
 * @typedef {object} data
 * @property {[string]} categories
 * @property {[seriesItem]} series
 *
*/

/**
 * @typedef {object} demandAndCompRate
 * @property {data} data 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} indicatorItem
 * @property {string} name 
 *
*/

/**
 * @typedef {object} valueItem
 
 *
*/

/**
 * @typedef {object} evaluateInfo
 * @property {data} data 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} value
 
 *
*/

/**
 * @typedef {object} projectInfoItem
 * @property {data} data 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} columnsItem
 * @property {string} dataIndex 
 * @property {string} title 
 *
*/

/**
 * @typedef {object} dataSourceItem
 
 *
*/

/**
 * @typedef {object} statisticInfo
 * @property {data} data 
 * @property {string} name 
 *
*/

/**
 * @typedef {object} getDemandInfodata
 * @property {avgRespInfo} avgRespInfo 
 * @property {demandAndCompRate} demandAndCompRate 
 * @property {evaluateInfo} evaluateInfo 
 * @property {[projectInfoItem]} projectInfo
 * @property {statisticInfo} statisticInfo 
 *
*/

/**
 * @typedef {object} getDemandInfoResponse
 * @property {number} code 业务响应状态
 * @property {getDemandInfodata} data 
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags fm-operation
 * @link http://df-datacenter.v220.svc.cluster.local/swagger-ui.html#!/fm-operation/demandInfoUsingGET
 * @summary 需求数据
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
 * @param {number} params.query.year - 年份
 * @param {number} params.query.projectId - projectId
 * @return {Promise<getDemandInfoResponse>}
 */
export function getDemandInfo(params) {
  return API.get(`/fm/operation/demand`, { params: { ...params.query }})
}

