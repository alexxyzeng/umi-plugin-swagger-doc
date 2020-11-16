aaaaa
/**
 * @typedef {object} dataItem
 
 * @property {string} addName 房产名称
 * @property {string} addressDesc 房产所在具体位置
 * @property {number} buildArea 房产建筑面积
 * @property {number} buildingId 房产ID
 * @property {string} files 房产图片信息
 * @property {string} lat 房产所在经度
 * @property {string} lng 房产所在纬度
 *
*/

/**
 * @typedef {object} selectBuildingInfoUsingGETResponse
 * @property {number} code 业务响应状态
 * @property {[dataItem]} data
 * @property {string} message 消息
 * @property {string} traceId 用于链路追踪的ID
 *
*/
/**
 * @tags am-building-map
 * @link http://df-datacenter.v220.svc.cluster.local/swagger-ui.html#!/am-building-map/selectBuildingInfoUsingGET
 * @summary AM房产地图接口-查询房产信息
 * @description 
 * @param {object} params
 * @param {object} params.query - 请求查询参数
 * @param {number} params.query.partId - 分区ID
 * @param {number} params.query.pointId - 物业点ID
 * @param {string} params.query.level - 等级：省，市，区
 * @return {Promise<selectBuildingInfoUsingGETResponse>}
 */
export function selectBuildingInfoUsingGET(params) {
  return API.get(`/am-building-map/building-info`, { params: { ...params.query }})
}

