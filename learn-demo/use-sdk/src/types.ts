// 天气数据类型定义：对应 NWS API 的响应结构

/** 天气预警要素：包含事件、区域、严重程度等属性（可能缺省） */
export interface AlertFeature {
  properties: {
    event?: string;
    areaDesc?: string;
    severity?: string;
    status?: string;
    headline?: string;
  };
}
/**
 * 预报时段：描述某一时间段的天气概要信息
 * 如名称、温度、风力与简要预报
 */
export interface ForecastPeriod {
  name?: string;
  temperature?: number;
  temperatureUnit?: string;
  windSpeed?: string;
  windDirection?: string;
  shortForecast?: string;
}

/** 天气预警响应：由多条预警要素构成 */
export interface AlertsResponse {
  features: AlertFeature[];
}

/** 位置点查询响应：包含用于获取预报的链接等 */
export interface PointsResponse {
  properties: {
    forecast?: string;
  };
}

/** 天气预报响应：包含多个连续的预报时段 */
export interface ForecastResponse {
  properties: {
    periods: ForecastPeriod[];
  };
}
