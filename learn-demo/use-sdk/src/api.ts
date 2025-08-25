// NWS API 调用与数据格式化工具函数
const USER_AGENT = "weather-app/1.0";
import { AlertFeature } from "./types.js";
/**
 * 通用请求函数：向 NWS API 发送请求
 * @param url 请求地址
 * @returns 解析后的 JSON 对象；若出错返回 null
 */
export async function makeNWSRequest<T>(url: string): Promise<T | null> {
  const headers = {
    "User-Agent": USER_AGENT,
    Accept: "application/geo+json",
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return (await response.json()) as T;
  } catch (error) {
    console.error("Error making NWS request:", error);
    return null;
  }
}

// 格式化 alert 数据
/**
 * 将单条预警数据要素格式化为可读文本
 * @param feature 预警要素
 * @returns 多行字符串，包含事件、区域、严重程度等
 */
export function formatAlert(feature: AlertFeature): string {
  const props = feature.properties;
  return [
    `Event: ${props.event || "Unknown"}`,
    `Area: ${props.areaDesc || "Unknown"}`,
    `Severity: ${props.severity || "Unknown"}`,
    `Status: ${props.status || "Unknown"}`,
    `Headline: ${props.headline || "No headline"}`,
    "---",
  ].join("\n");
}
