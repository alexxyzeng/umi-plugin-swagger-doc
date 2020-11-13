/**
 * @typedef {object} pintsItem
 
 * @property {number} pointId 物业点ID
 * @property {string} pointName 物业点名称
 *
*/

/**
 * @typedef {object} dataItem
 
 * @property {number} partId 分区ID
 * @property {string} partName 分区名称
 * @property {[pintsItem]} pints
 *
*/

/**
 * @typedef {object} selectPartitionAndPointUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags am-building-map
 * @link http://df-datacenter.v220.svc.cluster.local/swagger-ui.html#!/am-building-map/selectPartitionAndPointUsingGET
 * @summary AM房产地图接口-查询分区、物业点
 * @description 
 * @param {object} params
 
 * @return {Promise<selectPartitionAndPointUsingGETResponse>}
 */
export function selectPartitionAndPointUsingGET() {
  return API.get(`/am-building-map/partition-and-point`, {})
}

